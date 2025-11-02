import Link from 'next/link';
import { Course, Lesson } from '@prisma/client';
import { BookOpen, Users, Clock } from 'lucide-react';

type CourseWithDetails = Course & {
  lessons: Lesson[];
  _count: { enrollments: number };
};

export function CourseCard({ course }: { course: CourseWithDetails }) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <Link href={`/courses/${course.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Course Image */}
        <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-white" />
        </div>

        {/* Course Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                difficultyColors[course.difficulty as keyof typeof difficultyColors] || difficultyColors.beginner
              }`}
            >
              {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold">
              {course.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {course.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
            {course.description}
          </p>

          {/* Course Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.lessons.length} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course._count.enrollments} enrolled</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
