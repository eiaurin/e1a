import React, { useState } from 'react';

export default function StoryWord({ spanish, turkish }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`cursor-pointer transition-colors duration-150 ${
          hovered
            ? 'border-b-2 border-dotted border-current bg-yellow-100 dark:bg-yellow-900/40 rounded px-0.5'
            : ''
        }`}
      >
        {spanish}
      </span>
      {hovered && (
        <span
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
        >
          {turkish}
          <span
            className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"
            aria-hidden="true"
          />
        </span>
      )}
    </span>
  );
}
