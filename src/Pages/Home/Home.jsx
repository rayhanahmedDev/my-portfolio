import Banner from "./Banner/Banner";
import Navber from "./Navber/Navber";
import Skills from "./Skills/Skills";
import './Home.css'


const Home = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
                <Banner></Banner>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default Home;