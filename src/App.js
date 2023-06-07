import { Container } from "@mui/material";
import Header from "./components/Header";
import "./App.css";
import BottomNav from "./components/BottomNav";
import { useLocation, Route, Routes } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <Container maxWidth="ms" disableGutters>
      {location.pathname !== "/first" &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && (
          <>
            <Header />
            <BottomNav />
          </>
        )}
      <Routes>
        <Route path="/first" element={<FirstPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Container>
  );
}

export default App;
