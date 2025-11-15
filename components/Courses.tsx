
import React from 'react';
import type { Course } from '../types.ts';

const coursesData: Course[] = [
    {
        title: "Beginner's DSLR Mastery",
        description: "Go from auto mode to full manual control. Understand aperture, shutter speed, ISO, and composition to unlock your camera's true potential.",
        price: "₹8,000",
        imageUrl: "https://picsum.photos/600/400?image=20"
    },
    {
        title: "Advanced Portrait Photography",
        description: "Learn professional lighting techniques, posing, and editing to create stunning portraits that capture the essence of your subjects.",
        price: "₹12,500",
        imageUrl: "https://picsum.photos/600/400?image=433"
    },
    {
        title: "Street Photography in India",
        description: "Capture the candid moments and vibrant stories of India's streets. This workshop focuses on storytelling, composition, and approaching subjects.",
        price: "₹10,000",
        imageUrl: "https://picsum.photos/600/400?image=1074"
    }
];

const CourseCard: React.FC<{ course: Course }> = React.memo(({ course }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-700 flex flex-col">
        <img src={course.imageUrl} alt={course.title} className="w-full h-56 object-cover" loading="lazy"/>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-amber-400 mb-2">{course.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{course.description}</p>
            <div className="mt-auto pt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{course.price}</span>
                <button className="bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded hover:bg-amber-400 transition-colors duration-300">Enroll Now</button>
            </div>
        </div>
    </div>
));


const Courses: React.FC = () => {
    return (
        <section id="courses" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Our Workshops & Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map((course) => (
                        <CourseCard key={course.title} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;