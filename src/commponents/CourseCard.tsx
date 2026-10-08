import clsx from "clsx";
import { useState } from "react";
interface CourseCardProps {
    title: string;
    teacher: string;
    credits?: number;
    isActive: boolean;
}

export default function CourseCard({
    title,
    teacher,
    credits = 0,
    isActive,
} : CourseCardProps) {

    const [isOpen,setIsOpen] =  useState(false);

    return (
        <div className={clsx("p-5 m2 rounded shadow-sm transition-all hover:shadow-md",
         isActive ? "border-green-500 bg-green-50" : "border-gray-300 bg-white",
         )}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>

         <button className="text-blue-500 hover:underline" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Сховати деталі" : "Показати деталі"}
         </button>
            {isOpen && (
                <div>
            <p className="text-gray-600">Teacher: {teacher}</p>
            <p className="text-gray-600">Credits: {credits}</p>

            <div
                className={clsx(
                "mt-4 font-semibold text-sm px-3 py-1 inline-block rounded-full",
                isActive
                ? "bg-green-200 text-green-800"
                : "bg-gray-200 text-gray-700",
                )}
>
  {isActive ? "В процесі вивчення..." : "Курс завершено"}
  
</div>
</div>
)}
        </div>
    );
}