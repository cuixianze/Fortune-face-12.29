import React from 'react';
import type { PrizeCalculation } from '../../utils/prizeCalculator';

interface Props {
  calculation: PrizeCalculation;
}

export function CalculationResult({ calculation }: Props) {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100">
        <h3 className="text-lg font-semibold text-amber-700 mb-4">실수령액</h3>
        <p className="text-3xl font-bold text-amber-700">
          {calculation.finalAmount.toLocaleString()}원
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
          <p className="text-sm text-amber-600 mb-1">세율</p>
          <p className="text-xl font-semibold text-amber-700">{calculation.taxRate}%</p>
        </div>
        <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
          <p className="text-sm text-amber-600 mb-1">세금</p>
          <p className="text-xl font-semibold text-amber-700">
            {calculation.taxAmount.toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
}