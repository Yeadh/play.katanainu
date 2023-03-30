import Routers from "./layouts/Routers"
import { Route } from "react-router-dom"

/*  =========== CSS ======== */
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./css/override.css"


/*  =========== pages ======== */
import Home from "./pages/home"
import TeamPage from "./pages/team"
import AboutPage from "./pages/about"
import FaqPage from "./pages/faq"
import ProblemSoluionPage from "./pages/problem-solution"
import LoreStory from "./pages/lorestory"
import BackStory from "./pages/facsummary"
import BeneFits from "./pages/benefits"
import Ranking from "./pages/ranking"
import TheGame from "./pages/the-game"

function App() {
  return (
    <>
      <Routers>
          <Route path="/" element={ <Home/> }/>
          <Route path="/team" element={ <TeamPage/> }/>
          <Route path="/about" element={ <AboutPage/> }/>
          <Route path="/the-game" element={ <TheGame/> }/>
          <Route path="/faq" element={ <FaqPage/> }/>
          <Route path="/problem-solution" element={ <ProblemSoluionPage/> }/>
          <Route path="/lorestory" element={<LoreStory /> }/>
          <Route path="/facsummary" element={<BackStory /> }/>
          <Route path="/benefits" element={<BeneFits />} />
          <Route path="/ranking" element={<Ranking />} />
      </Routers>
    </>
  );
}

export default App;
