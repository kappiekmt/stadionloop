import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auction from './pages/Auction';
import About from './pages/About';
import Contact from './pages/Contact';
import Etappes from './pages/Etappes';
import Barometers from './pages/Barometers';
import Sponsoren from './pages/Sponsoren';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veiling" element={<Auction />} />
        <Route path="/over" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/etappes" element={<Etappes />} />
        <Route path="/barometers" element={<Barometers />} />
        <Route path="/sponsoren" element={<Sponsoren />} />
      </Routes>
    </BrowserRouter>
  );
}
