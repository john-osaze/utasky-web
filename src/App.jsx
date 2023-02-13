import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;