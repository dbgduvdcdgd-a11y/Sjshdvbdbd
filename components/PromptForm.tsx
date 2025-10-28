
import React from 'react';
import { MagicWandIcon } from './icons/MagicWandIcon';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, handleSubmit, isLoading }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A majestic lion wearing a crown, cinematic lighting, detailed, epic"
          className="w-full h-28 p-4 pr-12 text-lg text-gray-200 bg-gray-800 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none"
          disabled={isLoading}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:scale-100"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <MagicWandIcon className="w-5 h-5 mr-2" />
              Generate
            </>
          )}
        </button>
      </div>
    </form>
  );
};
