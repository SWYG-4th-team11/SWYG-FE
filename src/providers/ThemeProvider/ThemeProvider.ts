import { Theme as EmotionTheme } from '@emotion/react';

interface Typography {
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
}

export interface Theme extends EmotionTheme {
  colors: {
    white: string;
    gray: string[];
    green: string[];
    sub: {
      yellow: string;
      lightYellow: string;
      red: string;
    };
  };
  typography: {
    title1: Typography;
    title2: Typography;
    title3: Typography;
    text1: Typography;
    text2: Typography;
    text3: Typography;
    text4: Typography;
    caption: Typography;
  };
}

export const theme: Theme = {
  colors: {
    white: '#ffffff',
    gray: [
      '#191919',
      '#353535',
      '#646464',
      '#9B9B9B',
      '#D9D9D9',
      '#F2F2F2',
      '#F8F8F8',
    ],
    green: ['#03C75A', '#96BA9E', '#DCF5DC', '#EBF6EB'],
    sub: {
      yellow: '#C0A234',
      lightYellow: '#FFF5D1',
      red: '#E33B3B',
    },
  },
  typography: {
    title1: { fontSize: 46, fontWeight: 'bold', lineHeight: 58 },
    title2: { fontSize: 24, fontWeight: '600', lineHeight: 32 }, // semi-bold를 600으로 가정
    title3: { fontSize: 20, fontWeight: '600', lineHeight: 32 },
    text1: { fontSize: 28, fontWeight: '500', lineHeight: 36 }, // medium을 500으로 가정
    text2: { fontSize: 24, fontWeight: '500', lineHeight: 36 },
    text3: { fontSize: 20, fontWeight: '500', lineHeight: 30 },
    text4: { fontSize: 18, fontWeight: '500', lineHeight: 28 },
    caption: { fontSize: 16, fontWeight: '500', lineHeight: 24 },
  },
};
