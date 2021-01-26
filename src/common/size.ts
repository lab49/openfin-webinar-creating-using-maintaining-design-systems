export const Size = {
  None: undefined,
  Small: 'small',
  Large: 'large',
} as const;

export type Size = typeof Size[keyof typeof Size];
