import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/Homepage';
import Error from './pages/Error';
import './App.css';
function App() {

  return (
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

    
  );
}

export default App;
