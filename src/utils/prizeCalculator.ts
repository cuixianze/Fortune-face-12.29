export interface PrizeCalculation {
  originalPrize: number;
  taxRate: number;
  taxAmount: number;
  finalAmount: number;
}

export function calculatePrize(amount: number): PrizeCalculation {
  if (amount <= 2000000) {
    return {
      originalPrize: amount,
      taxRate: 0,
      taxAmount: 0,
      finalAmount: amount
    };
  }

  if (amount < 300000000) {
    const taxRate = 0.22;
    const taxAmount = amount * taxRate;
    return {
      originalPrize: amount,
      taxRate: 22,
      taxAmount,
      finalAmount: amount - taxAmount
    };
  }

  const taxRate = 0.33;
  const taxAmount = amount * taxRate;
  return {
    originalPrize: amount,
    taxRate: 33,
    taxAmount,
    finalAmount: amount - taxAmount
  };
}