import './App.css';
import CourseCard from './commponents/CourseCard';
import Header from './commponents/Header';

function App() {
  return (
    <div >
      <Header studentName=" Tymofii" />
    
      <CourseCard title="Mathematics" teacher="Dr. Smith" credits={3} />
    </div>
  );
}

export default App;