import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { quizId, score, answers } = await req.json();

    if (!quizId || score === undefined || !answers) {
      return NextResponse.json(
        { error: 'Quiz ID, score, and answers are required' },
        { status: 400 }
      );
    }

    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        userId: session.user.id,
        quizId,
        score,
        answers: JSON.stringify(answers),
      },
    });

    return NextResponse.json(quizAttempt, { status: 201 });
  } catch (error) {
    console.error('Error creating quiz attempt:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
