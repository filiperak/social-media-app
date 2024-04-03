import './App.css';
import Feed from './components/feed/Feed';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/widgets/Widgets';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>

        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/home' element={<Feed/>}/>
          <Route path='/profile' element={<Login/>}/>
        </Routes>
      </Router>
      <Widgets/>
    </div>
  );
}

export default App;
