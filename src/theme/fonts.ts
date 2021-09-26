export const baseFonts = {
  sans: 'Clear Sans, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif:
    '"Frank Ruhl Libre", Georgia, Cambria, "Times New Roman", Times, serif',
  mono: '"IBM Plex Mono", "JetBrains Mono", "Fira Code", "Input Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: baseFonts.sans,
  monospace: baseFonts.mono,
};

// prettier-ignore
export const fontSizes = [
    '0.625rem',   // 0:  10px
    '0.75rem',    // 1:  12px
    '0.875rem',   // 2:  14px
    '1rem',       // 3:  16px - body, h5, h4
    '1.125rem',   // 4:  18px
    '1.25rem',    // 5:  20px
    '1.375rem',   // 6:  22px
    '1.5625rem',  // 7:  25px - h3
    '1.75rem',    // 8: 28px
    '2rem',       // 9: 32px - h2
    '2.25rem',    // 10: 36px
    '2.625rem',   // 11: 42px - h1
    '2.875rem',   // 12: 46px
    '3.1875rem',  // 13: 51px
  ]

export const baseFontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.light,
};

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

export const baseLineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: 1.15,
};
