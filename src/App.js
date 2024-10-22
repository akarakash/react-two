import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import Forget from './components/Forger';
import Home from "./components/Home";
import Post from "./components/Post";
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
      <header className="App-header">

    
      <Router>
                <Routes>
                <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/login"
                        element={<Login/>}
                    />
                    <Route
                        path="/forget"
                        element={<Forget/>}
                    />
                    <Route
                        path="/signup"
                        element={<Signup />}
                    />
                </Routes>
            </Router>
      </header>
    </div>
  );
}

export default App;
