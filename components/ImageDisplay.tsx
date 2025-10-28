
import React from 'react';
import { PhotoIcon } from './icons/PhotoIcon';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
}

const SkeletonLoader: React.FC = () => (
    <div className="w-full aspect-square bg-gray-800 rounded-lg animate-pulse"></div>
);

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error, prompt }) => {
  return (
    <div className="w-full aspect-square bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center p-4 transition-all duration-300">
      {isLoading && <SkeletonLoader />}
      
      {!isLoading && error && (
        <div className="text-center text-red-400">
          <p className="font-bold">Generation Failed</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {!isLoading && !error && imageUrl && (
        <img
          src={imageUrl}
          alt={prompt}
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
      )}

      {!isLoading && !error && !imageUrl && (
        <div className="text-center text-gray-500">
          <PhotoIcon className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Your image will appear here</h3>
          <p>Let your creativity flow and generate your first image!</p>
        </div>
      )}
    </div>
  );
};
