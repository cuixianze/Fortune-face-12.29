import type { LotteryResult } from '../types/lottery';
import { MOCK_LOTTERY_DATA } from '../data/mockLotteryData';

// Using mock data temporarily due to CORS issues
export async function fetchLotteryResults(): Promise<LotteryResult[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_LOTTERY_DATA;
}

// Keep the real implementation commented for future use
/*
async function fetchLottoNumbers(round: number): Promise<LotteryResult | null> {
  try {
    const response = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round}`);
    const data = await response.json();

    if (data.returnValue === 'success') {
      return {
        round: data.drwNo,
        drawDate: data.drwNoDate,
        numbers: [
          data.drwtNo1,
          data.drwtNo2,
          data.drwtNo3,
          data.drwtNo4,
          data.drwtNo5,
          data.drwtNo6,
        ],
        bonus: data.bnusNo,
        firstPrize: data.firstWinamnt,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching lottery data:', error);
    return null;
  }
}
*/