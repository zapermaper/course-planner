import CoursePlanner from './comps/coursePlanner';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <CoursePlanner />
      <Image
        src="/course-planner/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />

    </main>
  );
}
