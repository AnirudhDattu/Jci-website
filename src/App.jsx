// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Images from "./pages/Images";
import TeamPage from "./pages/teampage";
import Eventpage from "./pages/eventpage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Images />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<Eventpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
