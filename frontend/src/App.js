import { Route, Routes } from "react-router-dom";
import Downloads from "./Components/Downloads";
import Home from "./Components/Home";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import MyLinks from "./Components/MyLinks";
import Profile from "./Components/Profile";
import ProtectedRoute from "./Components/ProtectedRoute.js";

function App() {
  return (
    <>
      <h1>React Auth0 Example App</h1>
      <LoginButton />
      <LogoutButton />
      <a href="http://localhost:3000/">Home</a> |{" "}
      <a href="http://localhost:3000/profile">My Profile</a> |{" "}
      <a href="http://localhost:3000/downloads">Downloads</a>
      {/* Two ways of getting authenticated. 1) Embeding the Authentication in each file, Or creating a router and wratting around component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/downloads"
          element={<ProtectedRoute component={Downloads} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
