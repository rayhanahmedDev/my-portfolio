import Banner from "./Banner/Banner";
import Navber from "./Navber/Navber";
import Skills from "./Skills/Skills";
import './Home.css'
import Education from "./Education/Education";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
                <Banner></Banner>
            </div>
            <Skills></Skills>
            <Education></Education>
            <Footer></Footer>
        </div>
    );
};

export default Home;