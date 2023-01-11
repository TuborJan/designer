import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Slogan from "./components/Slogan/Slogan";
import Successes from "./components/Successes/Successes";
import VideoBlock from "./components/VideoBlock/VideoBlock";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Successes />
        <Slogan />
        <Courses />
        <About />
        <WhyUs />
        <VideoBlock />
        <Reviews />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}

export default App;
