import Education from './Education';

function EducationSection(props) {
  const elements = props.educationList.map(education => {
    return <Education key={education.id} education={education}/>
  });
  return (
    <div>
      <h1>Education</h1>
      {elements}
    </div>
  );
}

export default EducationSection;