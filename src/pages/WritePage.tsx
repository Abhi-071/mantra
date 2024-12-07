import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Button } from '../components/ui/Button';
import { LiteraryFormat, Genre } from '../types/content';
import { Upload } from 'lucide-react';

const literaryFormats: LiteraryFormat[] = ['poem', 'story', 'novel', 'ghazal', 'song'];
const genres: Genre[] = [
  'romance', 'mystery', 'fantasy', 'science-fiction',
  'horror', 'literary', 'historical', 'contemporary'
];

export const WritePage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [format, setFormat] = useState<LiteraryFormat | null>(null);
  const [genre, setGenre] = useState<Genre | null>(null);
  const [content, setContent] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setContent(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = () => {
    // TODO: Implement content submission
    console.log({ format, genre, content });
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          {/* Step 1: Select Format */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Choose Your Format</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {literaryFormats.map((f) => (
                  <button
                    key={f}
                    onClick={() => {
                      setFormat(f);
                      setStep(2);
                    }}
                    className={`
                      p-4 rounded-lg border-2 text-center capitalize
                      ${format === f 
                        ? 'border-indigo-600 bg-indigo-50' 
                        : 'border-gray-200 hover:border-indigo-600'
                      }
                    `}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Genre */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Choose Your Genre</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {genres.map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      setGenre(g);
                      setStep(3);
                    }}
                    className={`
                      p-4 rounded-lg border-2 text-center capitalize
                      ${genre === g 
                        ? 'border-indigo-600 bg-indigo-50' 
                        : 'border-gray-200 hover:border-indigo-600'
                      }
                    `}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Content Input */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Write Your Content</h2>
              <div className="mb-6">
                <label className="block mb-4">
                  <input
                    type="file"
                    accept=".txt,.doc,.docx,.md"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-600">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Import from your device or start writing below
                      </p>
                    </div>
                  </div>
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Start writing..."
                  className="w-full h-96 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSubmit}>
                  Publish
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};