'use client';

import { useState, useEffect } from 'react';
import { Exercise } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { Play, CheckCircle, XCircle } from 'lucide-react';

export function ExerciseView({
  exercise,
  lessonId,
  userId,
}: {
  exercise: Exercise;
  lessonId: string;
  userId: string;
}) {
  const [code, setCode] = useState(exercise.starterCode);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [testResults, setTestResults] = useState<any[]>([]);
  const [showSolution, setShowSolution] = useState(false);

  const runCode = async () => {
    setRunning(true);
    setOutput('Running tests...');
    setTestResults([]);

    try {
      // Parse test cases
      const tests = JSON.parse(exercise.testCases);
      const results: any[] = [];

      // Simple JavaScript execution for demonstration
      // In production, use a sandboxed environment
      try {
        // eslint-disable-next-line no-eval
        const userFunction = eval(`(${code})`);

        for (const test of tests) {
          try {
            const result = userFunction(...test.input);
            const passed = JSON.stringify(result) === JSON.stringify(test.expected);
            results.push({
              input: test.input,
              expected: test.expected,
              actual: result,
              passed,
            });
          } catch (error) {
            results.push({
              input: test.input,
              expected: test.expected,
              actual: error instanceof Error ? error.message : 'Error',
              passed: false,
            });
          }
        }

        const allPassed = results.every((r) => r.passed);
        setTestResults(results);
        setOutput(
          allPassed
            ? 'All tests passed! Great work!'
            : 'Some tests failed. Keep trying!'
        );

        // Mark lesson as complete if all tests pass
        if (allPassed) {
          await fetch(`/api/lessons/${lessonId}/complete`, {
            method: 'POST',
          });
        }
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } catch (error) {
      setOutput('Error parsing test cases');
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Exercise Description */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {exercise.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
          {exercise.description}
        </p>
      </div>

      {/* Code Editor */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 dark:text-white">Code Editor</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>
            <button
              onClick={runCode}
              disabled={running}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-4 h-4" />
              {running ? 'Running...' : 'Run Tests'}
            </button>
          </div>
        </div>

        <div className="h-96">
          <Editor
            height="100%"
            language={exercise.language}
            value={showSolution ? exercise.solution : code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              readOnly: showSolution,
            }}
          />
        </div>
      </div>

      {/* Test Results */}
      {testResults.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Test Results
          </h3>
          <div className="space-y-3">
            {testResults.map((result, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  result.passed
                    ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                    : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {result.passed ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  )}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Test {index + 1}
                  </span>
                </div>
                <div className="text-sm space-y-1 ml-7">
                  <div className="text-gray-700 dark:text-gray-300">
                    Input: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{JSON.stringify(result.input)}</code>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    Expected: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{JSON.stringify(result.expected)}</code>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    Actual: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{JSON.stringify(result.actual)}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Output */}
      {output && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Output</h3>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
            <code className="text-gray-900 dark:text-gray-100">{output}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
