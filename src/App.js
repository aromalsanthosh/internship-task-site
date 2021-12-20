
import './App.css';
import Filter from './components/Filter/Filter';
import NavBar from './components/Nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className='float-left'>Design Courses</h1>
      <h3>Courses to get you started</h3>
      <Filter/>
    </div>
  );
}

export default App;
