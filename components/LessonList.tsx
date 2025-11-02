import Link from 'next/link';
import { Lesson, Exercise, Quiz } from '@prisma/client';
import { BookOpen, Code, CheckCircle2, Lock } from 'lucide-react';
import { prisma } from '@/lib/prisma';

type LessonWithDetails = Lesson & {
  exercises: Exercise[];
  quizzes: Quiz[];
};

async function getLessonProgress(userId: string | undefined, lessonId: string) {
  if (!userId) return null;

  return await prisma.lessonProgress.findUnique({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },
  });
}

export async function LessonList({
  lessons,
  courseId,
  isEnrolled,
  userId,
}: {
  lessons: LessonWithDetails[];
  courseId: string;
  isEnrolled: boolean;
  userId?: string;
}) {
  const progressMap = new Map();

  if (userId && isEnrolled) {
    const allProgress = await Promise.all(
      lessons.map(lesson => getLessonProgress(userId, lesson.id))
    );
    allProgress.forEach((progress, index) => {
      if (progress) {
        progressMap.set(lessons[index].id, progress);
      }
    });
  }

  return (
    <div className="space-y-4">
      {lessons.map((lesson, index) => {
        const progress = progressMap.get(lesson.id);
        const isCompleted = progress?.completed || false;
        const lessonNumber = index + 1;

        const lessonTypeIcon = {
          tutorial: <BookOpen className="w-5 h-5" />,
          exercise: <Code className="w-5 h-5" />,
          quiz: <CheckCircle2 className="w-5 h-5" />,
        };

        return (
          <div
            key={lesson.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {isEnrolled ? (
              <Link
                href={`/courses/${courseId}/lessons/${lesson.id}`}
                className="block p-6"
              >
                <LessonContent
                  lesson={lesson}
                  lessonNumber={lessonNumber}
                  isCompleted={isCompleted}
                  lessonTypeIcon={lessonTypeIcon}
                />
              </Link>
            ) : (
              <div className="p-6 opacity-75 cursor-not-allowed">
                <LessonContent
                  lesson={lesson}
                  lessonNumber={lessonNumber}
                  isCompleted={isCompleted}
                  lessonTypeIcon={lessonTypeIcon}
                  locked
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function LessonContent({
  lesson,
  lessonNumber,
  isCompleted,
  lessonTypeIcon,
  locked = false,
}: {
  lesson: LessonWithDetails;
  lessonNumber: number;
  isCompleted: boolean;
  lessonTypeIcon: Record<string, React.ReactNode>;
  locked?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isCompleted
              ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
              : locked
              ? 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
              : 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
          }`}
        >
          {locked ? (
            <Lock className="w-5 h-5" />
          ) : isCompleted ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            lessonTypeIcon[lesson.type] || <BookOpen className="w-5 h-5" />
          )}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Lesson {lessonNumber}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              lesson.type === 'tutorial'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                : lesson.type === 'exercise'
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                : 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
            }`}
          >
            {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {lesson.title}
        </h3>

        {lesson.description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {lesson.description}
          </p>
        )}
      </div>
    </div>
  );
}
