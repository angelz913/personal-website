import Navbar from './Navbar';
import Intro from './Intro';

function Home() {
  const navBtns = [
    'Home',
    'About',
    'Education',
    'Experience',
    'Hobbies',
    'Contact'
  ];
  return (
    <>
      <Navbar items={navBtns}/>
      <Intro name='Angel Zhang' title="CS '25 @UWaterloo" />
    </>
    
  )
}

export default Home;