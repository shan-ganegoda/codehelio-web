import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Vision from './components/vision/Vision';
import Services from './components/services/Services';
import Why from './components/why/Why';
import Contact from './components/contact/Contact';



function App() {
  return (
    <>
    <Header />
    <main className='main'>
       <Home />
       <Vision />
       <Services />
       <Why />
       <Contact />
        
    </main>
    
    </>
   
  );
}

export default App;
