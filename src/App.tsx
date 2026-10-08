import { useState } from 'react';
import './App.css';
import CourseCard from './commponents/CourseCard';
import Header from './commponents/Header';
import Section from './commponents/Section';
import ProfileEditor from './commponents/ProfileEditor';

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

  const [searchQuery, setSearchQuery] = useState('');

  const [userProfile, setUserProfile] = useState({
    name: 'Tymofii',
    group: 'p-410',
    isOnline: true,
  });

  const handleProfileUpdate = () => {
    setUserProfile(prevProfile => ({
      ...prevProfile,
      isOnline: !prevProfile.isOnline,
    }));
  };

  const filteredCourses = myCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div >
      <Header studentName=" Tymofii" />
      <ProfileEditor />

      <div className="p-5 m-2 w-72">
  <p className="⬜ text-gray-600 mt-2">Група: {userProfile.group}</p>
  <p className="⬜ text-gray-600 mt-2">
    Статус:{" "}
    {userProfile.isOnline ? (
      <span className=" text-green-500">Онлайн</span>
    ) : (
      <span className=" text-red-500">Офлайн</span>
    )}
  </p>
  <button
    className="mt-2 px-4 py-2 🔵 bg-blue-500 ⬜ text-white rounded"
    onClick={handleProfileUpdate}
  >
    {userProfile.isOnline ? "Вийти з онлайну" : "Увійти в онлайн"}
  </button>
</div>

          <Section title="My Courses">
            <input 
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 mb-4 w-full"
            />
            
            <p>Search query: <strong>{searchQuery}</strong>
            </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredCourses.length !== 0 ? (
            filteredCourses.map(course => (
              <CourseCard   
                key={course.id}
                title={course.title}
                teacher={course.teacher}
                credits={course.credits}
                isActive={course.isActive}
              />
            ))
          ) : (
            <p className="text-gray-500">No courses found.</p>
          )}
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