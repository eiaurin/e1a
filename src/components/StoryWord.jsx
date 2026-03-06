import React, { useState } from 'react';

export default function StoryWord({ spanish, turkish, darkMode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`cursor-default transition-colors ${
          hovered
            ? 'border-b-2 border-dotted border-current'
            : ''
        } ${darkMode ? 'text-white' : 'text-gray-800'}`}
        style={{ paddingBottom: hovered ? '1px' : '3px' }}
      >
        {spanish}
      </span>

      {hovered && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 whitespace-nowrap"
          style={{ pointerEvents: 'none' }}
        >
          <span className="block bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded shadow-lg">
            {turkish}
          </span>
          <span
            className="block w-0 h-0 mx-auto"
            style={{
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid #1f2937',
            }}
          />
        </span>
      )}
    </span>
  );
}
