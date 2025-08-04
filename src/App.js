import './App.css';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
