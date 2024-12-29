import React from 'react';
import { Sparkles } from 'lucide-react';

interface LotteryNumbersProps {
  numbers: number[];
  onRegenerate: () => void;
}

export function LotteryNumbers({ numbers, onRegenerate }: LotteryNumbersProps) {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
      <div className="grid grid-cols-3 sm:flex sm:flex-row gap-3 sm:gap-4 w-full max-w-2xl justify-center">
        {numbers.map((number, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg transform hover:scale-105 transition-all duration-500 relative border border-amber-200/50 group-hover:from-amber-500 group-hover:to-yellow-500">
              {number}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onRegenerate}
        className="relative group w-full sm:w-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
        <div className="relative bg-gradient-to-r from-amber-400 to-yellow-400 group-hover:from-amber-500 group-hover:to-yellow-500 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg font-medium border border-amber-200/50">
          <Sparkles size={20} className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
          더 많은 행운 생성하기
        </div>
      </button>
    </div>
  );
}