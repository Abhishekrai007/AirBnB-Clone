import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import SearchPage from "./SearchPage.js"
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/search' element={<SearchPage />} >

          </Route>
          <Route path='/' element={<Home />} >

          </Route>


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
