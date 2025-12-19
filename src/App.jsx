import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <p>시스템의 다양한 상태를 확인해보세요.</p>;
}

function States() {
    return (
    <div style={{ padding: 16 }}>
      <h2>States</h2>

      <div style={{ marginTop: 12, padding: 16, border: '1px solid #ddd' }}>
        <strong>Loading</strong>
        <p>Loading… 조금만 기다려주세요 ⏳</p>
      </div>
    </div>
  );
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
