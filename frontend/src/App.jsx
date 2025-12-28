import { BrowserRouter,Routes,Route, Link } from "react-router";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footer";


import './index.css';


function App() {
  return (
    <>
     <BrowserRouter>
   <nav className="flex flex-wrap items-center bg-black text-white p-4 shadow border-y border-white sticky top-0 z-50">
        <div className="flex items-center gap-6 flex-wrap">
           <Link className="text-lg font-semibold hover:text-blue-600 transition-all duration-300 ease-in-out" to="/">Home</Link>
           <Link className="text-lg font-semibold hover:text-blue-600 transition-all duration-300 ease-in-out" to="/Services">Services</Link>
           <Link className="text-lg font-semibold hover:text-blue-600 transition-all duration-300 ease-in-out" to="/About">About</Link>
           <Link className="text-lg font-semibold hover:text-blue-600 transition-all duration-300 ease-in-out" to="/Contact">Contact</Link>
            </div>

       <div className="ml-auto text-right">
         <h1 className="text-lg text-blue-600 font-bold whitespace-nowrap">XYZ_Technologies</h1>
           </div>
     </nav>


     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
       </Routes>
        
       </BrowserRouter>

    <Footer />
      
    </>
  );
}

export default App;
