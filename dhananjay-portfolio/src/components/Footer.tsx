import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Hegde Dhananjay. All Rights Reserved.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm italic">
          "Built with passion for technology."
        </p>
      </div>
    </footer>
  );
};
