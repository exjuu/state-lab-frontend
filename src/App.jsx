import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobListPage from "./pages/JobListPage";
import JobDetailPage from "./pages/JobDetailPage";
import AboutPage from "./pages/AboutPage";
import AppHeader from "./components/AppHeader";

export default function App() {
  return (
    <BrowserRouter>
     <AppHeader />
     <main style={{ paddingTop: 8 }}>
      <Routes>
        <Route path="/" element={<JobListPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}
