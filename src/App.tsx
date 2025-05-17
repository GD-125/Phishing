import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TypesPage from './pages/TypesPage';
import PreventionPage from './pages/PreventionPage';
import PracticePage from './pages/PracticePage';
import ResourcesPage from './pages/ResourcesPage';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-200">
        <Router>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/types" element={<TypesPage />} />
              <Route path="/prevention" element={<PreventionPage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/resources" element={<ResourcesPage />} />
            </Routes>
          </main>
          <Chatbot />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;