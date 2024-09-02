import About from "./About";
import Banner from "./Banner";
import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        <Card></Card>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
