export const Intent = {
  None: undefined,
  Primary: 'primary',
  Secondary: 'secondary',
  Warning: 'warning',
  Success: 'success',
  Danger: 'danger',
} as const;

export type Intent = typeof Intent[keyof typeof Intent];
