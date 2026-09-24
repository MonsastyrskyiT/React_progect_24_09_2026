import './App.css';
import CourseCard from './commponents/CourseCard';
import Header from './commponents/Header';
import Section from './commponents/Section';

const myCourses = [
  {
    id: 'c1',
    title: 'html/css',
    teacher: 'Volodimer',
    credits: 10,
    isActive: true,
  },

  {
    id: 'c2',
    title: 'html/css',
    teacher: 'Volodimer',
    credits: 13,
    isActive: false,
  },

  {
    id: 'c3',
    title: 'html/css',
    teacher: 'Volodimer',
    credits: 20,
    isActive: true,
  }
]

function App() {
  return (
    <div >
      <Header studentName=" Tymofii" />
    
      {/* <CourseCard 
      title="Mathematics"
      teacher="Dr. Smith"
      credits={3} 
      isActive={true}
        />
        <CourseCard 
      title="html/css"
      teacher="Volodimer"
      isActive={false}
        /> */}
          <Section title="My Courses">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          myCourses.map(course => (
            <CourseCard 
              key={course.id}
              title={course.title}
              teacher={course.teacher}
              credits={course.credits}
              isActive={course.isActive}
            />
          ))
        }
        </div>
      </Section>



      <Section title="My classwork">
        <p>Here you can find all your classwork and assignments.</p>
      </Section>  

      <Section title="My grades">
        <p>Here you can find all your grades and feedback from your teachers.</p>
      </Section>
    </div>
  );
}

export default App;