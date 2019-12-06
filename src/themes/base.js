export const options = {
  spacing: 8,
};

export const theme = {
  // TODO: Possible memoization target.
  spacing: (increment) => increment * options.spacing,
  color: {
    lightText: {
      base: 'rgba(255, 255, 255, 0.9)',
    },
  },
};
