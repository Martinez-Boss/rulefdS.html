import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { CourseCard } from '@/components/CourseCard';
import { BookOpen, Code, Zap, Trophy } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getCourses() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        lessons: true,
        _count: {
          select: { enrollments: true }
        }
      },
      orderBy: { createdAt: 'desc' },
    });
    return courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Master New Skills Through
            <span className="text-primary-600"> Interactive Learning</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Learn by doing with hands-on tutorials, real-world exercises, and instant feedback.
            Start your journey to becoming a skilled developer today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Explore Courses
            </Link>
            <Link
              href="/auth/signin"
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen className="w-8 h-8" />}
            title="Interactive Tutorials"
            description="Step-by-step lessons with real code examples and explanations"
          />
          <FeatureCard
            icon={<Code className="w-8 h-8" />}
            title="Live Code Editor"
            description="Practice coding directly in your browser with instant feedback"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Instant Feedback"
            description="Get immediate results on quizzes and coding exercises"
          />
          <FeatureCard
            icon={<Trophy className="w-8 h-8" />}
            title="Track Progress"
            description="Monitor your learning journey and earn achievements"
          />
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Start learning with our most popular courses
          </p>
        </div>

        {courses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No courses available yet. Check back soon!
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Run the seed script to add sample courses.
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-primary-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners mastering new skills through interactive education
          </p>
          <Link
            href="/auth/signin"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
