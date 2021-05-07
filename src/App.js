import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='app__content'>
        <Header />
      </div>
    </div>
  );
}

export default App;
