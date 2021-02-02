import React from 'react';

const baseStyles = {
  borderRadius: 5,
  display: 'grid',
  font: '14px monospace',
  height: 200,
  margin: 'var(--spacing-6) 0',
  placeContent: 'center',
  width: 200,
};

export const ShadowBlocks = () => (
  <>
    <div style={{ ...baseStyles, boxShadow: "var(--shadow-sm)" }}>
      --shadow-sm
    </div>

    <div style={{ ...baseStyles, boxShadow: "var(--shadow-md)" }}>
      --shadow-md
    </div>

    <div style={{ ...baseStyles, boxShadow: "var(--shadow-lg)" }}>
      --shadow-lg
    </div>

    <div style={{ ...baseStyles, boxShadow: "var(--shadow-xl)" }}>
      --shadow-xl
    </div>
  </>
);
