import React from 'react';
import { Intent } from '../common/intent';
import { Badge } from '../components/Badge';

const baseStyles = {
  height: 10,
  marginTop: 'var(--spacing-2)',
  background: "red",
};

export const SpacingBlocks = () => (
  <>
    <div style={{ marginBottom: 'var(--spacing-3)' }}>
      <Badge>--spacing-1</Badge>
      <Badge intent={Intent.Secondary}>8px</Badge>

      <div style={{ ...baseStyles, width: 'var(--spacing-1)' }} />
    </div>

    <div style={{ marginBottom: 'var(--spacing-3)' }}>
      <Badge>--spacing-2</Badge>
      <Badge intent={Intent.Secondary}>12px</Badge>

      <div style={{ ...baseStyles, width: 'var(--spacing-2)' }} />
    </div>

    <div style={{ marginBottom: 'var(--spacing-3)' }}>
      <Badge>--spacing-3</Badge>
      <Badge intent={Intent.Secondary}>16px</Badge>

      <div style={{ ...baseStyles, width: 'var(--spacing-3)' }} />
    </div>

    <div style={{ marginBottom: 'var(--spacing-3)' }}>
      <Badge>--spacing-4</Badge>
      <Badge intent={Intent.Secondary}>24px</Badge>

      <div style={{ ...baseStyles, width: 'var(--spacing-4)' }} />
    </div>

    <div style={{ marginBottom: 'var(--spacing-3)' }}>
      <Badge>--spacing-5</Badge>
      <Badge intent={Intent.Secondary}>32px</Badge>

      <div style={{ ...baseStyles, width: 'var(--spacing-5)' }} />
    </div>

    <div style={{ marginBottom: 'var(--spacing-3)' }}>
      <Badge>--spacing-6</Badge>
      <Badge intent={Intent.Secondary}>48px</Badge>

      <div style={{ ...baseStyles, width: 'var(--spacing-6)' }} />
    </div>
  </>
)
