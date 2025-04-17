// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Images from "./pages/Images";
import TeamPage from "./pages/teampage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Images />} />
        <Route path="/team" element={<TeamPage />} />
        {/* <Route path="*" element={<NotFound />} /> Handles unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
