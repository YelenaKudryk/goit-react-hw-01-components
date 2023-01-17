export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    primaryText: '#010101',
    secondaryText: '#757575',
    backgroundBody: '#F5F4FA',
    green: 'green',
    red: 'red',
  },
  spacing: value => `${4 * value}px`,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid #757575',
  },
  radius: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
};
