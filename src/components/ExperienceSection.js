import Experience from './Experience';

function EducationSection(props) {
  const elements = props.experienceList.map(experience => {
    return <Experience key={experience.id} experience={experience}/>
  });
  return (
    <div>
      <h1>Experience</h1>
      {elements}
    </div>
  );
}

export default EducationSection;