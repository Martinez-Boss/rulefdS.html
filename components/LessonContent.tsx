'use client';

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function LessonContent({
  content,
  lessonId,
  userId,
}: {
  content: string;
  lessonId: string;
  userId: string;
}) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkCompletion();
  }, [lessonId, userId]);

  const checkCompletion = async () => {
    try {
      const response = await fetch(`/api/lessons/${lessonId}/progress?userId=${userId}`);
      if (response.ok) {
        const data = await response.json();
        setCompleted(data.completed);
      }
    } catch (error) {
      console.error('Error checking completion:', error);
    }
  };

  const markComplete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/lessons/${lessonId}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setCompleted(true);
      }
    } catch (error) {
      console.error('Error marking complete:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>

      <div className="flex justify-end">
        {completed ? (
          <div className="flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Completed</span>
          </div>
        ) : (
          <button
            onClick={markComplete}
            disabled={loading}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Marking Complete...' : 'Mark as Complete'}
          </button>
        )}
      </div>
    </div>
  );
}
