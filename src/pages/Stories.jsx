import React, { useState } from 'react';
import { themes, defaultTheme } from '../data/themes';
import { stories } from '../data/stories';
import StoryWord from '../components/StoryWord';

export default function Stories({ darkMode, theme }) {
  const t = themes[theme] || themes[defaultTheme];
  const [selectedStory, setSelectedStory] = useState(null);

  const levelColor = (level) =>
    level === 'A1'
      ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300';

  if (selectedStory) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedStory(null)}
            className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
            } shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            ← Hikayelere Dön
          </button>

          <div className={`rounded-2xl shadow-lg p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{selectedStory.emoji}</span>
              <div>
                <h1 className="text-2xl font-bold">{selectedStory.title}</h1>
                <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor(selectedStory.level)}`}>
                  {selectedStory.level}
                </span>
              </div>
            </div>

            <p className={`mt-4 text-sm flex items-center gap-1 ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
              💡 Kelimelerin üzerine gelin, Türkçe anlamını görün!
            </p>
          </div>

          <div className={`rounded-2xl shadow-lg p-6 leading-9 text-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {selectedStory.sentences.map((sentence, sIdx) => (
              <span key={sIdx}>
                {sentence.words.map((word, wIdx) => (
                  <React.Fragment key={wIdx}>
                    <StoryWord spanish={word.spanish} turkish={word.turkish} />
                    {wIdx < sentence.words.length - 1 && ' '}
                  </React.Fragment>
                ))}
                {sIdx < selectedStory.sentences.length - 1 && ' '}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">📖 Hikayeler</h1>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            İspanyolca hikaye okuyun, kelimelerin üzerine gelerek Türkçe anlamlarını öğrenin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className={`text-left rounded-2xl shadow-md p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
              } border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
            >
              <div className="text-4xl mb-3">{story.emoji}</div>
              <h2 className="font-semibold text-base mb-2 leading-snug">{story.title}</h2>
              <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor(story.level)}`}>
                {story.level}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
