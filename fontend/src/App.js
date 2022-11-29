import Header from "./Components/Header/Header";
import Home from "./Components/Body/Home";
import Contact from "./Components/Body/Contact";
import Menu from "./Components/Body/Menu";
import AddDish from "./Components/Body/AddDish";
import {Route, Routes} from "react-router-dom";
import Admin from "./Components/Body/Admin";
import UpdateDish from "./Components/Body/UpdateDish";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/menu"} element={<Menu />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/add-dish"} element={<AddDish />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/update/:id"} element={<UpdateDish />} />
      </Routes>
    </div>
  );
}

export default App;
