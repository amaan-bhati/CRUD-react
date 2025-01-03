import React from 'react';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
//todo : export routes from router dom here

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
