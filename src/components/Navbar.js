import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Navbar(props) {
  const buttons = props.items.map((item, idx) => {
    return <Button key={idx} variant="text">{item}</Button>
  })
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {buttons}
    </Box>
  );
}

export default Navbar;