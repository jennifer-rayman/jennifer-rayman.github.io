import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Portfolio />} />
        <Route path="/services" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      <h1>Jennifer's Personal Website!</h1>
      <button>BRAT</button>
      
       
    </div>
  );


}
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Portfolio = () => <div>Portfolio Page</div>;
const Resume = () => <div>Resume Page</div>;
const Contact = () => <div>Contact Page</div>;

export default App;