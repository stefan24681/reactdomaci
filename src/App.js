import './App.css';
import Store from "./projekat/Store";
import Header from './projekat/components/Header';
import Footer from './projekat/components/Footer';
import {Route, Routes} from "react-router-dom";
import Vise from './projekat/Vise';
function App() {
  return (
<div>


    <Header/>

    <Routes>

      <Route path="/" element={<Store/>}></Route>
      <Route path="/vise" element={<Vise/>}></Route>


    </Routes>

    <Footer/>

</div>
    
  );
}

export default App;