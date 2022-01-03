function Navbar(props) {
  const buttons = props.items.map((item, idx) => {
    return <button key={idx}>{item}</button>
  })
  return (
    <div>
      {buttons}
    </div>
  );
}

export default Navbar;