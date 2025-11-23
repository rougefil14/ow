import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import About from './pages/About';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
