import { notFound, redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { LessonContent } from '@/components/LessonContent';
import { ExerciseView } from '@/components/ExerciseView';
import { QuizView } from '@/components/QuizView';
import { LessonNavigation } from '@/components/LessonNavigation';

export const dynamic = 'force-dynamic';

async function getLesson(lessonId: string) {
  return await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      course: true,
      exercises: true,
      quizzes: {
        include: {
          questions: {
            orderBy: { orderIndex: 'asc' }
          }
        }
      },
    },
  });
}

async function checkEnrollment(userId: string, courseId: string) {
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });

  return !!enrollment;
}

async function getAdjacentLessons(courseId: string, currentOrderIndex: number) {
  const prevLesson = await prisma.lesson.findFirst({
    where: {
      courseId,
      orderIndex: { lt: currentOrderIndex },
    },
    orderBy: { orderIndex: 'desc' },
  });

  const nextLesson = await prisma.lesson.findFirst({
    where: {
      courseId,
      orderIndex: { gt: currentOrderIndex },
    },
    orderBy: { orderIndex: 'asc' },
  });

  return { prevLesson, nextLesson };
}

export default async function LessonPage({
  params,
}: {
  params: { id: string; lessonId: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  const lesson = await getLesson(params.lessonId);

  if (!lesson) {
    notFound();
  }

  const isEnrolled = await checkEnrollment(session.user.id, lesson.courseId);

  if (!isEnrolled) {
    redirect(`/courses/${lesson.courseId}`);
  }

  const { prevLesson, nextLesson } = await getAdjacentLessons(
    lesson.courseId,
    lesson.orderIndex
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <a
              href={`/courses/${lesson.courseId}`}
              className="hover:text-primary-600 dark:hover:text-primary-400"
            >
              {lesson.course.title}
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">{lesson.title}</span>
          </nav>

          {/* Lesson Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {lesson.title}
            </h1>
            {lesson.description && (
              <p className="text-gray-600 dark:text-gray-300">{lesson.description}</p>
            )}
          </div>

          {/* Lesson Content Based on Type */}
          {lesson.type === 'tutorial' && (
            <LessonContent
              content={lesson.content}
              lessonId={lesson.id}
              userId={session.user.id}
            />
          )}

          {lesson.type === 'exercise' && lesson.exercises.length > 0 && (
            <ExerciseView
              exercise={lesson.exercises[0]}
              lessonId={lesson.id}
              userId={session.user.id}
            />
          )}

          {lesson.type === 'quiz' && lesson.quizzes.length > 0 && (
            <QuizView
              quiz={lesson.quizzes[0]}
              lessonId={lesson.id}
              userId={session.user.id}
            />
          )}

          {/* Navigation */}
          <LessonNavigation
            courseId={lesson.courseId}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
          />
        </div>
      </div>
    </div>
  );
}
