function Contact(props) {
  const elements = props.contacts.map((contact, idx) => {
    return <button key={idx}>{contact}</button>
  })
  return (
    <div>
      {elements}
    </div>
  )
}

export default Contact;