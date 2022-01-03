function Experience(props) {
  const experience = props.experience;
  const bullets = experience.bullets.map((bullet, idx) => {
    return <li key={idx}>{bullet}</li>
  })
  return (
    <div>
      <h3>{experience.position}</h3>
      <h4>{experience.company}</h4>
      <p>{experience.start} - {experience.end}</p>
      <ul>
        {bullets}
      </ul>
    </div>
  )
}

export default Experience;