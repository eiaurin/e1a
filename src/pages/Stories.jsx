import React, { useState } from 'react';
import { stories } from '../data/stories';
import StoryWord from '../components/StoryWord';
import { themes, defaultTheme } from '../data/themes';

export default function Stories({ darkMode, theme }) {
  const [selectedStory, setSelectedStory] = useState(null);
  const t = themes[theme] || themes[defaultTheme];

  if (selectedStory) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'} p-4 md:p-8`}>
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedStory(null)}
            className={`mb-6 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${t.buttonBg} ${t.buttonHover} text-white`}
          >
            ← Hikayelere Dön
          </button>

          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow p-6 md:p-8`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{selectedStory.emoji}</span>
              <div>
                <h1 className={`text-2xl font-bold ${t.accentText}`}>{selectedStory.title}</h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{selectedStory.titleTr}</p>
              </div>
              <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${
                selectedStory.level === 'A1'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {selectedStory.level}
              </span>
            </div>

            <p className={`text-xs mt-3 mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              💡 Kelimelerin üzerine gelin, Türkçe anlamını görün!
            </p>

            <div className="space-y-4">
              {selectedStory.sentences.map((sentence, si) => (
                <p key={si} className={`text-lg leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  {sentence.words.map((word, wi) => (
                    <React.Fragment key={wi}>
                      <StoryWord
                        spanish={word.spanish}
                        turkish={word.turkish}
                        darkMode={darkMode}
                      />
                      {wi < sentence.words.length - 1 && ' '}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'} p-4 md:p-8`}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${t.accentText} mb-1`}>📖 Hikayeler</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            İspanyolca hikayeleri okuyun ve kelimelerin üzerine gelerek Türkçe anlamlarını öğrenin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stories.map(story => (
            <button
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl shadow p-6 text-left transition-colors border-2 border-transparent ${t.quizHoverBorder}`}
            >
              <div className="text-4xl mb-3">{story.emoji}</div>
              <h2 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{story.title}</h2>
              <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{story.titleTr}</p>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                story.level === 'A1'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {story.level}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
