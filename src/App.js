import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Services";
import { Testimonials } from "./components/testimonials/Testimonials";

function App() {
  return (
   <div>
    <Navbar/>
    <Home />
    <About id="about"/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
