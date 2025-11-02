import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { LessonList } from '@/components/LessonList';
import { EnrollButton } from '@/components/EnrollButton';
import { BookOpen, Clock, BarChart } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getCourse(id: string) {
  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      lessons: {
        orderBy: { orderIndex: 'asc' },
        include: {
          exercises: true,
          quizzes: true,
        },
      },
      _count: {
        select: { enrollments: true }
      }
    },
  });

  return course;
}

async function getEnrollment(userId: string | undefined, courseId: string) {
  if (!userId) return null;

  return await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });
}

export default async function CoursePage({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);
  const session = await getServerSession(authOptions);

  if (!course) {
    notFound();
  }

  const enrollment = await getEnrollment(session?.user?.id, course.id);
  const isEnrolled = !!enrollment;

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  difficultyColors[course.difficulty as keyof typeof difficultyColors] || difficultyColors.beginner
                }`}
              >
                {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                {course.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {course.title}
            </h1>

            <p className="text-xl text-primary-100 mb-6">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.lessons.length} lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>{course._count.enrollments} students enrolled</span>
              </div>
              {isEnrolled && enrollment && (
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5" />
                  <span>{enrollment.progress}% completed</span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <EnrollButton courseId={course.id} isEnrolled={isEnrolled} />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Course Content
          </h2>

          {course.lessons.length > 0 ? (
            <LessonList
              lessons={course.lessons}
              courseId={course.id}
              isEnrolled={isEnrolled}
              userId={session?.user?.id}
            />
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                No lessons available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
