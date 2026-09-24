interface HeaderProps {
    studentName: string;
}


export default function Header({ studentName }: HeaderProps) {
    return (
        <header>
            <h2>Electronic students marks</h2>
            {/* Introduction string */}
            <p>Hello, {studentName}! Good luck!!</p>
        </header>
    )
}