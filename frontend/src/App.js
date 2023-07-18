import AddStudents from "./components/AddStudents";
import Header from "./components/Header";
import AllStudent from "./components/AllStudents";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Use BrowserRouter instead of Router

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        <Header />

        <Routes>
          <Route path="/Student/AddStudent" element={<AddStudents />} />
          <Route path="/" element={<AllStudent />} />
          <Route path="/" element={<AllStudent />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
