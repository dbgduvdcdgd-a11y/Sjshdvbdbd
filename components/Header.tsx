
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-2">
        <SparklesIcon className="w-8 h-8 text-purple-400" />
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
          AI Image Generator
        </h1>
      </div>
      <p className="text-lg text-gray-400">
        Describe your vision and let Gemini bring it to life.
      </p>
    </header>
  );
};
