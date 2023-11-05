import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homepage";
import NavBar from "./components/spec/navbar/navbar";

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Routes>
        <Route 
          path="/homepage" 
          exact 
          element={<HomePage/>} />
      </Routes> */}
    </div>
  );
}