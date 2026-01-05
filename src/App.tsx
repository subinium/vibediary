import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DiaryPage from './pages/DiaryPage';
import PortfolioPage from './pages/PortfolioPage';
import ToolsPage from './pages/ToolsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DiaryPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="tools" element={<ToolsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
