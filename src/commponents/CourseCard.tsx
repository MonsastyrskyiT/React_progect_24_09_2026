interface CourseCardProps {
    title: string;
    teacher: string;
    credits?: number;
}

export default function CourseCard({
    title, teacher, credits = 0
} : CourseCardProps) {
    return (
        <div style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
              borderRadius: '9px',
             }}>
            <h2>{title}</h2>
            <p>Teacher: {teacher}</p>
            <p>Credits: {credits}</p>
        </div>
    )
}