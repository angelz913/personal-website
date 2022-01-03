function Education(props) {
  const education = props.education;
  const bullets = education.bullets.map((bullet, idx) => {
    return <li key={idx}>{bullet}</li>
  })
  return (
    <div>
      <h3>{education.institution}</h3>
      <h4>{education.degree}</h4>
      <p>{education.start} - {education.end}</p>
      <ul>
        {bullets}
      </ul>
    </div>
  )
}

export default Education;