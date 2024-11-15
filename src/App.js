import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { Detail } from "./pages/Detail";
import Login from "./pages/Login";
import {ModalProvider} from "./context/ModalContext";

function App() {
    return (
        <BrowserRouter>
            <ModalProvider>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                e-commerce
            </p>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Products />} />
                    {/*<Route path="/Detail/:id" element={<Detail />} />*/}
                    {/*<Route path="/Login" element={<Login />} />*/}
                </Routes>
            </div>
        </header>
                </ModalProvider>
            </BrowserRouter>
    )
}

export default App;