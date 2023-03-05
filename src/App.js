
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className='flex-col items-'>
      <Header/>
      <Outlet/> 
      <Footer/>

    </div>
  );
}

export default App;
