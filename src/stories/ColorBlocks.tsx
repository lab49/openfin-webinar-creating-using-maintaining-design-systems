import React from "react";
import { Badge } from "../components/Badge";

export const colorScales = ["blue-gray", "blue", "amber", "green", "red"];
export const colorValues = [
  50,
  ...Array(9)
    .fill(1)
    .map((n, i) => n * (i + 1) * 100),
];

const baseBlockStyle = {
  border: "2px solid #ddd",
  borderRadius: 3,
  display: "grid",
  font: "13px monospace",
  height: 70,
  placeContent: "start start",
  width: 180,
};

export const ColorBlocks = () => (
  <div style={{ display: "flex" }}>
    {colorScales.map((scale) => (
      <div key={scale} style={{ margin: "0 10px" }}>
        <p
          style={{
            font: "20px sans-serif",
            borderBottom: "3px solid #ddd",
          }}
        >
          {scale}
        </p>

        <div>
          {colorValues.map((v) => (
            <p
              style={{
                ...baseBlockStyle,
                backgroundColor: `var(--color-${scale}-${v})`,
              }}
            >
              <Badge>{`--color-${scale}-${v}`}</Badge>
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
);
