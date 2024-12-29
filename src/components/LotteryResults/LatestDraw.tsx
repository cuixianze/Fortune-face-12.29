import React from 'react';
import type { LotteryResult } from '../../types/lottery';

interface Props {
  result: LotteryResult;
}

export function LatestDraw({ result }: Props) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 shadow-lg border border-amber-100 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-amber-700 mb-1">{result.round}회 당첨결과</h2>
        <p className="text-amber-600">{result.drawDate} 추첨</p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
        {result.numbers.map((num, index) => (
          <div
            key={index}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
          >
            {num}
          </div>
        ))}
        <div className="w-8 flex items-center justify-center text-amber-400 font-bold text-xl">
          +
        </div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {result.bonus}
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-amber-600 font-medium">1등 당첨금</p>
        <p className="text-2xl font-bold text-amber-700">
          {result.firstPrize.toLocaleString()}원
        </p>
      </div>
    </div>
  );
}