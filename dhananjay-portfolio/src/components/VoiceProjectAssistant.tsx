import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Loader2, CheckCircle, AlertCircle, MicOff } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { parseVoiceCommand } from '../utils/voiceCommandParser';
import { projectsData } from '../data/projects';

type AssistantState = 'IDLE' | 'LISTENING' | 'PROCESSING' | 'SUCCESS' | 'ERROR';

export const VoiceProjectAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [assistantState, setAssistantState] = useState<AssistantState>('IDLE');
  const [message, setMessage] = useState('Click to speak');
  const [isWakeWordMode, setIsWakeWordMode] = useState(false);
  const processedRef = useRef(false);

  const handleResult = (currentTranscript: string, isFinal: boolean) => {
    const lower = currentTranscript.toLowerCase();

    // Check for wake word
    if (isWakeWordMode && assistantState === 'IDLE' && (lower.includes('dhanu') || lower.includes('danu') || lower.includes('dhananjay'))) {
      setIsOpen(true);
      setAssistantState('LISTENING');
      setMessage('Yes? I am listening...');
      speak("Yes?");
      processedRef.current = false;
      // Start a fresh listening session for the actual command
      stopListening(); 
      setTimeout(() => startListening(), 500);
      return;
    }

    if (isFinal && !processedRef.current && assistantState === 'LISTENING') {
      processedRef.current = true;
      setAssistantState('PROCESSING');
      setMessage('✨ Understanding...');
      stopListening();
      setTimeout(() => {
        processCommand(currentTranscript);
      }, 500);
    }
  };

  const { 
    isSupported, 
    isListening, 
    transcript, 
    error, 
    startListening, 
    stopListening, 
    speak,
    setAutoRestart 
  } = useSpeechRecognition({ onResult: handleResult });

  // Handle errors from speech recognition
  useEffect(() => {
    if (error) {
      if (error === 'no-speech' && isWakeWordMode) {
        // Ignore no-speech errors in wake word mode, it will auto-restart
        return;
      }
      setAssistantState('ERROR');
      if (error === 'not-allowed') {
        setMessage('Microphone access is required to use voice commands.');
      } else if (error === 'no-speech') {
        setMessage('No speech was detected. Please try again.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
      setTimeout(() => {
        if (isOpen) setAssistantState('IDLE');
      }, 4000);
    }
  }, [error, isOpen, isWakeWordMode]);

  // Sync state if listening ends unexpectedly or user manually stops it
  useEffect(() => {
    if (!isListening && assistantState === 'LISTENING') {
      // If we have a transcript, process it. Otherwise go idle.
      if (transcript.trim().length > 0 && !processedRef.current) {
        processedRef.current = true;
        setAssistantState('PROCESSING');
        setMessage('✨ Understanding...');
        processCommand(transcript);
      } else if (transcript.trim().length === 0) {
        setAssistantState('IDLE');
        setMessage('Click to speak');
      }
    }
  }, [isListening, assistantState, transcript]);

  // Manage wake word auto-restart
  useEffect(() => {
    setAutoRestart(isWakeWordMode);
    if (isWakeWordMode && !isListening) {
      startListening();
    }
  }, [isWakeWordMode, setAutoRestart, startListening, isListening]);

  const toggleAssistant = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (!isSupported) {
        setAssistantState('ERROR');
        setMessage('Voice commands are not supported in this browser. You can still use the Copy URL buttons on the cards.');
        return;
      }
      // Automatically start listening when opened as requested
      processedRef.current = false;
      setAssistantState('LISTENING');
      startListening();
    } else {
      setIsOpen(false);
      if (!isWakeWordMode && isSupported) {
        stopListening();
        setAssistantState('IDLE');
        setMessage('Click to speak');
      }
    }
  };

  const processCommand = async (cmd: string) => {
    const parsed = parseVoiceCommand(cmd, projectsData);

    if (parsed.action === 'unknown') {
      setAssistantState('ERROR');
      setMessage(`I couldn't find a project or command for that.`);
      speak("I couldn't find that project or command. Please try again.");
      setTimeout(() => {
        if (isOpen) {
          setAssistantState('IDLE');
          setMessage('Click to speak');
        }
      }, 4000);
      return;
    }

    const project = parsed.project;
    let successMessage = '';
    let speakMessage = '';

    try {
      if (parsed.action === 'copy-profile-github') {
        await navigator.clipboard.writeText("https://github.com/Dhananjay2305");
        successMessage = `✓ GitHub profile link copied!`;
        speakMessage = `Done! I've copied your GitHub profile link.`;
      } else if (parsed.action === 'copy-profile-linkedin') {
        await navigator.clipboard.writeText("https://www.linkedin.com/in/dhananjay-hegde-6b16a1291/");
        successMessage = `✓ LinkedIn profile link copied!`;
        speakMessage = `Done! I've copied your LinkedIn profile link.`;
      } else if (parsed.action === 'open-profile-github') {
        window.open("https://github.com/Dhananjay2305", '_blank');
        successMessage = `✓ Opened GitHub profile!`;
        speakMessage = `Opening your GitHub profile.`;
      } else if (parsed.action === 'open-profile-linkedin') {
        window.open("https://www.linkedin.com/in/dhananjay-hegde-6b16a1291/", '_blank');
        successMessage = `✓ Opened LinkedIn profile!`;
        speakMessage = `Opening your LinkedIn profile.`;
      } else if (project) {
        // Project specific commands
        if (parsed.action === 'copy-url') {
          const urlToCopy = project.deploymentUrl || project.url;
          await navigator.clipboard.writeText(urlToCopy);
          successMessage = `✓ ${project.name} URL copied!`;
          speakMessage = `Done! I've copied the ${project.name} project URL.`;
        } else if (parsed.action === 'copy-github') {
          await navigator.clipboard.writeText(project.url);
          successMessage = `✓ ${project.name} GitHub link copied!`;
          speakMessage = `Done! I've copied the GitHub link for ${project.name}.`;
        } else if (parsed.action === 'open-url') {
          const urlToOpen = project.deploymentUrl || project.url;
          window.open(urlToOpen, '_blank');
          successMessage = `✓ Opened ${project.name}!`;
          speakMessage = `Opening ${project.name}.`;
        } else if (parsed.action === 'open-github') {
          window.open(project.url, '_blank');
          successMessage = `✓ Opened ${project.name} GitHub!`;
          speakMessage = `Opening the GitHub repository for ${project.name}.`;
        }
      }

      setAssistantState('SUCCESS');
      setMessage(successMessage);
      speak(speakMessage);

      // Close the assistant automatically after success
      setTimeout(() => {
        setAssistantState('IDLE');
        setMessage('Click to speak');
        setIsOpen(false);
      }, 3000);

    } catch (err) {
      setAssistantState('ERROR');
      setMessage('Unable to copy the URL. Please try again.');
      speak("Sorry, I was unable to execute that command.");
      setTimeout(() => {
        if (isOpen) {
          setAssistantState('IDLE');
          setMessage('Click to speak');
        }
      }, 4000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[calc(100vw-3rem)] max-w-sm sm:w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
              <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm">
                <span className="text-xl mr-2">✨</span>
                Project Assistant
              </div>
              <button 
                onClick={() => { setIsOpen(false); stopListening(); }} 
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5">
              {/* Status/Transcript Area */}
              <div className="min-h-[100px] flex flex-col justify-center items-center text-center mb-4">
                {assistantState === 'LISTENING' && (
                  <div className="text-gray-900 dark:text-white w-full">
                    <p className="font-medium flex items-center justify-center text-red-500 mb-3">
                      <span className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      Listening...
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-200 font-medium italic min-h-[28px]">
                      {transcript ? `"${transcript}"` : "..."}
                    </p>
                  </div>
                )}
                
                {assistantState === 'PROCESSING' && (
                  <div className="text-primary-600 dark:text-primary-400 flex flex-col items-center">
                    <Loader2 size={28} className="animate-spin mb-3" />
                    <p className="font-medium text-lg">{message}</p>
                  </div>
                )}
                
                {assistantState === 'SUCCESS' && (
                  <div className="text-green-600 dark:text-green-400 flex flex-col items-center">
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      transition={{ type: "spring" }}
                    >
                      <CheckCircle size={32} className="mb-3" />
                    </motion.div>
                    <p className="font-medium text-lg">{message}</p>
                  </div>
                )}
                
                {assistantState === 'ERROR' && (
                  <div className="text-red-500 flex flex-col items-center w-full">
                    <AlertCircle size={28} className="mb-3" />
                    <p className="font-medium">{message}</p>
                    {message.includes("couldn't find") && (
                      <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        <p>Try saying:</p>
                        <p className="italic text-gray-700 dark:text-gray-300 mt-1">"Copy my KisanBazaar URL"</p>
                      </div>
                    )}
                  </div>
                )}
                
                {assistantState === 'IDLE' && (
                  <div className="text-gray-500 dark:text-gray-400 w-full text-left">
                    <p className="text-sm border-b border-gray-100 dark:border-gray-800 pb-2 mb-3 text-center">
                      Available commands:
                    </p>
                    <ul className="text-sm space-y-2 font-medium text-gray-700 dark:text-gray-300">
                      <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span> Copy [project] URL</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span> Copy [project] GitHub</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span> Open [project]</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {isSupported && (
                <div className="flex justify-center mt-2">
                   {assistantState === 'LISTENING' ? (
                     <button 
                       onClick={() => { stopListening(); setAssistantState('IDLE'); setIsWakeWordMode(false); }} 
                       className="w-full py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
                     >
                       <MicOff size={16} className="mr-2" /> Stop
                     </button>
                   ) : (
                     <button 
                       onClick={() => { processedRef.current = false; setIsWakeWordMode(false); startListening(); setAssistantState('LISTENING'); }} 
                       className="w-full py-2.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl text-sm font-medium transition-colors hover:bg-primary-100 dark:hover:bg-primary-900/40 flex items-center justify-center border border-primary-100 dark:border-primary-800"
                     >
                       <Mic size={16} className="mr-2" /> 
                       {assistantState === 'ERROR' ? 'Try Again' : 'Speak Now'}
                     </button>
                   )}
                </div>
              )}

              {/* Wake Word Toggle */}
              {isSupported && assistantState === 'IDLE' && (
                <div className="flex items-center justify-between mt-3 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      <span className="mr-2">🎙️</span> Wake Word Mode
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Say "Dhanu" to activate</span>
                  </div>
                  <button 
                    onClick={() => {
                      setIsWakeWordMode(!isWakeWordMode);
                      if (!isWakeWordMode) {
                        setAssistantState('IDLE');
                        setMessage('Say "Dhanu" anytime...');
                        startListening();
                      } else {
                        stopListening();
                        setMessage('Click to speak');
                      }
                    }}
                    className={`w-11 h-6 rounded-full relative transition-colors ${isWakeWordMode ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${isWakeWordMode ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={toggleAssistant}
        aria-label="Voice Project Assistant"
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
          isListening 
            ? 'bg-red-500 hover:bg-red-600 shadow-red-500/40 scale-110' 
            : 'bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 shadow-primary-500/40 hover:scale-105'
        } text-white`}
      >
        {isListening ? (
          <span className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-white opacity-40"></span>
            <Mic size={24} className="animate-pulse" />
          </span>
        ) : (
          <div className="relative">
            {/* Small decorative indicator */}
            {!isOpen && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
              </span>
            )}
            <span className="text-xl">🎙️</span>
          </div>
        )}
      </button>
    </div>
  );
};
