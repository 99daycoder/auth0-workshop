import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
function App() {
  return (
    <>
      <h1>React Auth0 Example App</h1>
      <a href="http://localhost:3000/">Home</a> |{" "}
      <a href="http://localhost:3000/profile">My Profile</a> | Other Links..
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
