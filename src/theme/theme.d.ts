import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
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
}
