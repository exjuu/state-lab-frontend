import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import States from './pages/States';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/states">States</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states" element={<States />} />
      </Routes>
    </BrowserRouter>
  );
}
