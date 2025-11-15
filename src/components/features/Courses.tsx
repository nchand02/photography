import { memo } from 'react';
import type { Course } from '@/types';
import { COURSES_DATA } from '@/constants/courses';
import { Button } from '../common/Button';

interface CourseCardProps {
  course: Course;
}

const CourseCard = memo(({ course }: CourseCardProps) => (
  <div className="card transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <img
      src={course.imageUrl}
      alt={course.title}
      className="w-full h-56 object-cover"
      loading="lazy"
    />
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-primary-400 mb-2">{course.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{course.description}</p>
      {course.features && (
        <ul className="text-sm text-gray-400 mb-4 space-y-1">
          {course.features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-white">{course.price}</span>
        <Button size="sm" variant="primary">
          Enroll Now
        </Button>
      </div>
    </div>
  </div>
));

CourseCard.displayName = 'CourseCard';

export function Courses() {
  return (
    <section id="courses" className="section-padding bg-dark-900 text-white">
      <div className="container-custom">
        <h2 className="heading-primary">Our Workshops & Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map(course => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
