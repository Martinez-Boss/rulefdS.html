import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Lesson } from '@prisma/client';

export function LessonNavigation({
  courseId,
  prevLesson,
  nextLesson,
}: {
  courseId: string;
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
}) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      {prevLesson ? (
        <Link
          href={`/courses/${courseId}/lessons/${prevLesson.id}`}
          className="flex items-center gap-2 px-4 py-2 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous Lesson</span>
        </Link>
      ) : (
        <div />
      )}

      {nextLesson ? (
        <Link
          href={`/courses/${courseId}/lessons/${nextLesson.id}`}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors"
        >
          <span>Next Lesson</span>
          <ChevronRight className="w-5 h-5" />
        </Link>
      ) : (
        <Link
          href={`/courses/${courseId}`}
          className="px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors"
        >
          Back to Course
        </Link>
      )}
    </div>
  );
}
