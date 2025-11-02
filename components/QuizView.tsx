'use client';

import { useState } from 'react';
import { Quiz, Question } from '@prisma/client';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

type QuizWithQuestions = Quiz & {
  questions: Question[];
};

export function QuizView({
  quiz,
  lessonId,
  userId,
}: {
  quiz: QuizWithQuestions;
  lessonId: string;
  userId: string;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanations, setShowExplanations] = useState(false);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = async () => {
    // Calculate score
    let correctCount = 0;
    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / quiz.questions.length) * 100);
    setScore(percentage);
    setSubmitted(true);
    setShowExplanations(true);

    // Save quiz attempt
    try {
      await fetch('/api/quiz-attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quizId: quiz.id,
          score: percentage,
          answers,
        }),
      });

      // Mark lesson as complete if score is >= 70%
      if (percentage >= 70) {
        await fetch(`/api/lessons/${lessonId}/complete`, {
          method: 'POST',
        });
      }
    } catch (error) {
      console.error('Error saving quiz attempt:', error);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setShowExplanations(false);
  };

  return (
    <div className="space-y-6">
      {/* Quiz Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {quiz.title}
        </h2>
        {quiz.description && (
          <p className="text-gray-600 dark:text-gray-300">{quiz.description}</p>
        )}
      </div>

      {/* Quiz Questions */}
      <div className="space-y-6">
        {quiz.questions.map((question, index) => {
          const options = JSON.parse(question.options);
          const userAnswer = answers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;

          return (
            <div
              key={question.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${
                submitted
                  ? isCorrect
                    ? 'border-2 border-green-500'
                    : userAnswer
                    ? 'border-2 border-red-500'
                    : 'border-2 border-gray-300'
                  : ''
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {question.question}
                  </h3>

                  {/* Question Type: Multiple Choice */}
                  {question.type === 'multiple-choice' && (
                    <div className="space-y-3">
                      {options.map((option: string, optionIndex: number) => {
                        const optionLetter = String.fromCharCode(65 + optionIndex);
                        const isSelected = userAnswer === optionLetter;
                        const isCorrectOption = question.correctAnswer === optionLetter;

                        return (
                          <label
                            key={optionIndex}
                            className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                              submitted
                                ? isCorrectOption
                                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                  : isSelected
                                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                  : 'border-gray-200 dark:border-gray-700'
                                : isSelected
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={optionLetter}
                              checked={isSelected}
                              onChange={(e) =>
                                handleAnswerChange(question.id, e.target.value)
                              }
                              disabled={submitted}
                              className="w-4 h-4"
                            />
                            <span className="flex-1 text-gray-900 dark:text-white">
                              {optionLetter}. {option}
                            </span>
                            {submitted && isCorrectOption && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                            {submitted && isSelected && !isCorrectOption && (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </label>
                        );
                      })}
                    </div>
                  )}

                  {/* Question Type: True/False */}
                  {question.type === 'true-false' && (
                    <div className="space-y-3">
                      {['True', 'False'].map((option) => {
                        const isSelected = userAnswer === option;
                        const isCorrectOption = question.correctAnswer === option;

                        return (
                          <label
                            key={option}
                            className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                              submitted
                                ? isCorrectOption
                                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                  : isSelected
                                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                  : 'border-gray-200 dark:border-gray-700'
                                : isSelected
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option}
                              checked={isSelected}
                              onChange={(e) =>
                                handleAnswerChange(question.id, e.target.value)
                              }
                              disabled={submitted}
                              className="w-4 h-4"
                            />
                            <span className="flex-1 text-gray-900 dark:text-white">
                              {option}
                            </span>
                            {submitted && isCorrectOption && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                            {submitted && isSelected && !isCorrectOption && (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </label>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation */}
                  {submitted && showExplanations && question.explanation && (
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                            Explanation
                          </h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit/Results Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {submitted ? (
          <div className="text-center">
            <div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                score >= 70
                  ? 'bg-green-100 dark:bg-green-900'
                  : 'bg-red-100 dark:bg-red-900'
              }`}
            >
              <span
                className={`text-3xl font-bold ${
                  score >= 70
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {score}%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {score >= 70 ? 'Great Job!' : 'Keep Trying!'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You scored {score}% on this quiz.
              {score >= 70
                ? ' This lesson has been marked as complete.'
                : ' You need 70% to pass. Review the material and try again.'}
            </p>
            <button
              onClick={handleRetry}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Retry Quiz
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300">
              Answer all questions to submit the quiz
            </p>
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== quiz.questions.length}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
