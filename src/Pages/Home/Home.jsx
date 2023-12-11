import Banner from "./Banner/Banner";
import Navber from "./Navber/Navber";
import Skills from "./Skills/Skills";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <Banner></Banner>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default Home;