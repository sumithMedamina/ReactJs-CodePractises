import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TutorialHome } from "./tutorial-home";
import { TutorialRegister } from "./tutorial-register";
import { TutorialLogin } from "./tutorial-login";
import { TutorialVideos } from "./tutorial-videos";
import { TutorialError } from "./tutorial-error";
import { TutorialVideoManagement } from "./tutorial-mangevideos";
import { TutorialVideoDetails } from "./tutorial-videodetails";

export function TutorialIndex() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="bg-dark text-white text-center p-1">
          <h2>React Video Tutorials</h2>
        </header>
        <section className="mt-2 row">
          <nav className="col-3">
            <div>
              <Link to="/home">Home</Link>
            </div>
            <div>
              <Link to="/register">Register</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/videos">Videos</Link>
            </div>
            <div>
              <Link to="/managevideos">Manage Videos</Link>
            </div>
          </nav>
          <main className="col-9">
            <Routes>
                <Route path="/" element={<TutorialHome/>}></Route>
                <Route path="home" element={<TutorialHome/>}></Route>
                <Route path="register" element={<TutorialRegister/>}></Route>
                <Route path="login" element={<TutorialLogin/>}></Route>
                <Route path="videos" element={<TutorialVideos/>}></Route>
                <Route path="error" element={<TutorialError/>}/>
                <Route path="managevideos" element={<TutorialVideoManagement/>}/>
                <Route path="videodetails/:id" element={<TutorialVideoDetails/>}/>
            </Routes>
          </main>
        </section>
      </BrowserRouter>
    </div>
  );
}
