import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div>Home</div>;
}

function States() {
  return <div>States</div>;
}

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
