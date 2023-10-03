import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Componets/Create';
import Read from './Componets/Read';
import Update from './Componets/Update';
import Navbars from './Routers1/Navbar';
import {Routes,Route} from 'react-router-dom'
import Login from './Routers1/Login';
import Footer from './Routers1/Footer';




function App() {
  return (
    <>
      
      <Navbars/>
    
    <div className="App">
     
       <h1 className='mb-5 mt-5 '>CRUD-OPERATIONS DATAS</h1>
   

    <Routes>
     
      <Route exact path=""  element={ <Create/>} ></Route>
      <Route exact path="/read" element={ <Read/>}></Route>
      <Route exact path="/update" element={ <Update/>}></Route>
      <Route exact path="/login"  element={ <Login/>} ></Route>
    </Routes>

     
      
    </div>
    <Footer/>
    </>
  );
}

export default App;
