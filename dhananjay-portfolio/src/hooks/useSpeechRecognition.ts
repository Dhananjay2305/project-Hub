import { useState, useEffect, useCallback, useRef } from 'react';

interface UseSpeechOptions {
  onResult?: (transcript: string, isFinal: boolean) => void;
}

export const useSpeechRecognition = ({ onResult }: UseSpeechOptions = {}) => {
  const [isSupported, setIsSupported] = useState(() => {
    return typeof window !== 'undefined' && !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
  });
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true; // Keep listening until explicitly stopped or final result processed
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-IN';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognitionRef.current.onresult = (event: any) => {
        let currentTranscript = '';
        let isFinal = false;

        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            isFinal = true;
          }
        }

        setTranscript((prev) => {
           // If continuous, we might want to just use the latest or accumulate
           return currentTranscript; 
        });
        
        if (onResult) {
          onResult(currentTranscript, isFinal);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setError(event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        // If autoRestart is true, start listening again (Wake word mode)
        if (recognitionRef.current.autoRestart) {
          try {
            recognitionRef.current.start();
          } catch (e) {}
        }
      };
    } else {
      setIsSupported(false);
    }
  }, [onResult]);

  const setAutoRestart = useCallback((value: boolean) => {
    if (recognitionRef.current) {
      recognitionRef.current.autoRestart = value;
    }
  }, []);

  const startListening = useCallback(() => {
    setError(null);
    setTranscript('');
    try {
      recognitionRef.current?.start();
    } catch (e) {
      // If it's already started, ignore the error
      console.warn("Speech recognition already started");
    }
  }, []);

  const stopListening = useCallback(() => {
    try {
      recognitionRef.current?.stop();
    } catch (e) {
      // Ignore errors on stop
    }
  }, []);

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-IN';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return {
    isSupported,
    isListening,
    transcript,
    error,
    startListening,
    stopListening,
    speak,
    setAutoRestart
  };
};
