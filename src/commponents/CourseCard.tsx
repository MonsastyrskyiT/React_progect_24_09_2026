import clsx from "clsx";
import { useState } from "react";
interface CourseCardProps {
    title: string;
    // teacher: string;
    // credits?: number;
    // isActive: boolean;
    // completedLessons: number;
    // totalLessons: number;
    // isSelected: boolean;
    onSelect: () => void;
}

export default function CourseCard({
    title,
    // teacher,
    // credits = 0,
    // isActive,
    // completedLessons,
    // totalLessons,
    // isSelected,
    onSelect,
} : CourseCardProps) {

    return (
        <div className="p-5 m-2 rounded-lg border-2 shadow-sm transition-all hover:shadow-md w-72">
      <h2 className="text-xl font-bold ⬜ text-gray-800">{title}</h2>
    </div>
    )
}