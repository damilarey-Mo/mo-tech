import React from 'react';

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  // Convert content string into paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  return (
    <article className="prose prose-lg dark:prose-invert prose-yellow mx-auto">
      <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl">
        {paragraphs.map((paragraph, index) => {
          // Check if the paragraph is a heading
          if (paragraph.startsWith('#')) {
            const match = paragraph.match(/^#+/);
            if (!match) return null;
            
            const level = match[0].length;
            const text = paragraph.replace(/^#+\s/, '');
            
            switch (level) {
              case 1:
                return (
                  <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {text}
                  </h1>
                );
              case 2:
                return (
                  <h2 key={index} className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
                    {text}
                  </h2>
                );
              case 3:
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-700 dark:text-gray-100 mt-6 mb-3">
                    {text}
                  </h3>
                );
              default:
                return null;
            }
          }

          // Check if the paragraph is a list
          if (paragraph.includes('\n- ')) {
            const items = paragraph.split('\n- ').filter(item => item.trim());
            return (
              <ul key={index} className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="ml-4">{item.trim()}</li>
                ))}
              </ul>
            );
          }

          // Regular paragraph
          return (
            <p key={index} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>
    </article>
  );
} 