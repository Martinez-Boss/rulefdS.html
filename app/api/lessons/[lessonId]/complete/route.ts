import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(
  req: Request,
  { params }: { params: { lessonId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { lessonId } = params;

    // Get lesson to find course
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: { course: { include: { lessons: true } } },
    });

    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    // Mark lesson as complete
    const lessonProgress = await prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: {
          userId: session.user.id,
          lessonId,
        },
      },
      create: {
        userId: session.user.id,
        lessonId,
        completed: true,
        completedAt: new Date(),
      },
      update: {
        completed: true,
        completedAt: new Date(),
      },
    });

    // Update course progress
    const completedLessons = await prisma.lessonProgress.count({
      where: {
        userId: session.user.id,
        lesson: { courseId: lesson.courseId },
        completed: true,
      },
    });

    const totalLessons = lesson.course.lessons.length;
    const progress = Math.round((completedLessons / totalLessons) * 100);

    await prisma.enrollment.update({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: lesson.courseId,
        },
      },
      data: {
        progress,
        completedAt: progress === 100 ? new Date() : null,
      },
    });

    return NextResponse.json(lessonProgress);
  } catch (error) {
    console.error('Error marking lesson complete:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
