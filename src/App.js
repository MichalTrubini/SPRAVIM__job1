import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Add from "./pages/add";
import Home from "./pages/home";
import Load from "./pages/load";

function App() {
  return (
    <div className="page">
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/load" element={<Load />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
