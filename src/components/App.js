import Home from './Home';
import About from './About';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import Contact from './Contact';

function App() {

  const educationList = [
    { 
      id: 1,
      institution: 'UW',
      degree: 'CS',
      start: 'Sept 2020',
      end: 'Present',
      bullets: [],
    }
  ];

  const experienceList = [
    { 
      id: 1,
      company: 'placeholder',
      position: 'placeholder',
      start: 'xxx',
      end: 'xxx',
      bullets: [
        'a',
        'b',
        'c',
        'd'
      ],
    }
  ];

  const contacts = [
    'Email',
    'LinkedIn',
    'GitHub',
  ]
  
  return (
    <>
      <Home />
      <About />
      <EducationSection educationList={educationList}/>
      <ExperienceSection experienceList={experienceList}/>
      <Contact contacts={contacts}/>
    </>
  );
}

export default App;
