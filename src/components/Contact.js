function Contact(props) {
  const elements = props.contacts.map((contact, idx) => {
    return <button key={idx}>{contact}</button>
  })
  return (
    <div>
      <h1>Contact</h1>
      {elements}
    </div>
  )
}

export default Contact;