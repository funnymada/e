import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

// Separate navigation component
function Navigation() {
    const navigate = useNavigate();

    const changePage = (param) => {
        navigate('/' + param);
    };

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                click button to change page
            </p>
            <button onClick={() => changePage('')}>Home</button>
            <button onClick={() => changePage('Contact')}>Contact</button>
            <button onClick={() => changePage('About')}>About</button>
        </header>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;