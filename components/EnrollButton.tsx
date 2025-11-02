'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function EnrollButton({ courseId, isEnrolled }: { courseId: string; isEnrolled: boolean }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId }),
      });

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error('Error enrolling:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isEnrolled) {
    return (
      <div className="flex items-center gap-2 text-white">
        <CheckCircle className="w-5 h-5" />
        <span className="font-semibold">Enrolled</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleEnroll}
      disabled={loading}
      className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Enrolling...' : 'Enroll Now'}
    </button>
  );
}
