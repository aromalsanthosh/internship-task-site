
import './App.css';

import CarouselComponent from './components/Carousel/CarouselComponent';
import Courses from './components/Courses/Courses';

import Filter from './components/Filter/Filter';
import NavBar from './components/Nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className='float-left text-left mt-2 ml-5'>Design Courses</h1>
      <h3 className='text-left mb-3'>Courses to get you started</h3>
      <div className="row">
        <div className="col-lg-3 bg-light">
          <Filter />
        </div>
        <div className="col">
          <Courses />
          <Courses />
        </div>
        <div className="col">
          <Courses />
          <Courses />
        </div>
        <div className="col">
          <Courses />
          <Courses />
        </div>
        <div className='row'>
        <h2 className='mt-4 mb-4 text-left'>Advance Your Career With New Skill</h2>
        </div>
        <CarouselComponent/>
        

      </div>
      
      
      
    </div>
  );
}

export default App;
