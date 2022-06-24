import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Task from './component/TaskComponent/Task';

function App() {
  return (
    <>
    <div className="app w-full h-full" >
    <Navbar/>
     <Task/>
    

    </div>
    
    </>
  );
}

export default App;
