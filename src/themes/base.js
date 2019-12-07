export const theme = {
  // TODO: Possible memoization target.
  spacing: (increment) => increment * 8,
  color: {
    background: {
      base: '#24292E',
    },
    text: {
      light: 'rgba(255,255,255,0.9)',
      dark: 'rgba(0,0,0,0.85)',
      onBackground: 'rgba(255,255,255,0.9)',
    },
  },
  typography: {
    rootFontSize: 14,
    body1: '1rem',
    body2: '0.875rem',
  },
};
