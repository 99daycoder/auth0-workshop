import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";
function App() {
  return (
    <>
      <h1>React Auth0 Example App</h1>
      <LoginButton />
      <LogoutButton />
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
