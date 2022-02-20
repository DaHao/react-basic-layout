// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sample from './pages/sample';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="home" element={<Home />} />
          <Route path="sample" element={<Sample />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Not Found</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
