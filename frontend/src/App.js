import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SigninScreen } from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<SigninScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
