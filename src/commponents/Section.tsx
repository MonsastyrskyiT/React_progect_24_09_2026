import type { ReactNode } from "react";

interface sectionProps {
    title: string;
    children: ReactNode;
}

export default function Section({ title, children }: sectionProps) {
    return (
        <section style={{
            padding: '10px',
            borderBottom: '1px solid #eee',
        }}>
            <h2 style={{
                color: '#333',
                marginBottom: '15px',
            }}>{title}</h2>
            <div>
            {children}
            </div>  
        </section>
    )
}