import { Parallax } from 'react-parallax';
import image1 from './Components/Images/image1.jpg'
import image2 from './Components/Images/image2.jpg'
import image3 from './Components/Images/image4.jpg'
import Carousel from './Components/Carousel/Carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Parallax className='image' strength={400} bgImage={image1}>
        <div className='content'>
          <div className='text-content'>Normal Parallax</div>
        </div>
      </Parallax>
      <Carousel/>
      <Parallax className='image' strength={300} blur={{min:-5, max:10}} bgImage={image2}>
        <div className='content'>
          <div className='text-content'>Blur Parallax</div>
        </div>
      </Parallax>
      <Parallax className='image' strength={-300} bgImage={image3}>
        <div className='content'>
          <div className='text-content'>Reverse Parallax</div>
        </div>
      </Parallax>
     
    </div>
  );
}

export default App;
