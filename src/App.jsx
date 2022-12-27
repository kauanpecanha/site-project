import Header from './components/Header/Header';
import Content from './layout/Content/Content';
import Footer from './components/Footer/Footer';

import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title = "Tester's"/>
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
