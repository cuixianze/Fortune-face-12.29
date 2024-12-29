import React from 'react';
import type { LotteryResult } from '../../types/lottery';

interface Props {
  results: LotteryResult[];
}

export function LotteryResultsTable({ results }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-amber-400 to-yellow-400 text-white">
            <th className="px-4 py-3 text-left">회차</th>
            <th className="px-4 py-3 text-left">추첨일</th>
            <th className="px-4 py-3 text-left">당첨번호</th>
            <th className="px-4 py-3 text-left">보너스</th>
            <th className="px-4 py-3 text-right">1등 당첨금</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.round} className="border-b border-amber-100 hover:bg-amber-50/50 transition-colors">
              <td className="px-4 py-3">{result.round}</td>
              <td className="px-4 py-3">{result.drawDate}</td>
              <td className="px-4 py-3">
                <div className="flex gap-1">
                  {result.numbers.map((num, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-white text-sm font-semibold"
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400 text-white text-sm font-semibold">
                  {result.bonus}
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium">
                {result.firstPrize.toLocaleString()}원
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}