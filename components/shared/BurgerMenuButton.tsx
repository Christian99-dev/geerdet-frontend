import React from 'react';

export default function BurgerMenuButton({
  toggled,
  onClick,
}: {
  toggled: boolean;
  onClick: () => void;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      onClick={onClick}
      style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        style={{
          fill: 'none',
          stroke: toggled ? '#ffbf60' : '#ffffff',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          transition: 'transform 0.2s ease, stroke 0.2s ease, left 0.2s ease',
          transformOrigin: 'left top',
          transform: toggled ? 'translateY(0%) rotate(35deg)' : 'none',
        }}
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        style={{
          fill: 'none',
          stroke: toggled ? '#ffbf60' : '#ffffff',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          transition: 'opacity 0.2s ease, stroke 0.2s ease',
          opacity: toggled ? 0 : 1,
        }}
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        style={{
          fill: 'none',
          stroke: toggled ? '#ffbf60' : '#ffffff',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          transition: 'transform 0.2s ease, stroke 0.2s ease, left 0.2s ease',
          transformOrigin: 'left bottom',
          transform: toggled ? 'translateY(-0%) rotate(-35deg)' : 'none',
        }}
      />
    </svg>
  );
}
