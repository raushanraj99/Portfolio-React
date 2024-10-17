import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import About from "./Pages/About";
import Achievements from "./Pages/Achievements";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header /> <Home /> <Footer />
        </div>
      ),
    },
    {
      path: "/home",
      element: (
        <div>
          <Header /> <Home /> <Footer />
        </div>
      ),
    },
    {
      path: "/skills",
      element: (
        <div>
          <Header /> <Skills /> <Footer/>
        </div>
      ),
    },
    {
      path: "/achievements",
      element: (
        <div>
          <Header /> <Achievements /> <Footer/>
        </div>
      ),
    },
    {
      path: "/project",
      element: (
        <div>
          <Header /> <Projects /> <Footer/>
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Header /> <About /> <Footer/>
        </div>
      ),
    },
    {
      path: "*",
      element: (
        <div>
          <Header /> <PageNotFound /> <Footer/>
        </div>
      ),
    },
  ]);
  return (
    <div className="bg-[#1F2531] text-white px-[3%] pt-6">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
