import { prisma } from '@/lib/prisma';
import { CourseCard } from '@/components/CourseCard';

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

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Courses
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our comprehensive collection of interactive courses
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
          </div>
        )}
      </div>
    </div>
  );
}
