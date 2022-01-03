import Home from './Home';
import About from './About';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {

  const educationList = [
    { 
      id: 1,
      institution: 'University of Waterloo',
      degree: 'Bachelor of Computer Science',
      start: 'Sept 2020',
      end: 'Present',
      bullets: [],
    }
  ];

  const experienceList = [
    { 
      id: 1,
      company: 'IT Support Specialist',
      position: 'Tangam Systems',
      start: 'Sept 2021',
      end: 'Dec 2021',
      bullets: [],
    }
  ];

  const contacts = [
    'Email',
    'LinkedIn',
    'GitHub',
  ];
  
  return (
    <>
      <Home />
      <About />
      <EducationSection educationList={educationList}/>
      <ExperienceSection experienceList={experienceList}/>
      <Hobbies />
      <Contact contacts={contacts}/>
    </>
  );
}

export default App;
