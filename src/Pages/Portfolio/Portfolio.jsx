import Navber from "../Home/Navber/Navber";
import event from '../../assets/event-management.jpg'
import career from '../../assets/career-maker.jpg'
import tourist from '../../assets/tourist-guide.jpg'
import { Link } from "react-router-dom";


const Portfolio = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="md:px-36 mx-5 md:mx-0 my-16">
                <div>
                    <h2 className="text-4xl text-[#050748] font-bold text-center my-16">My Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* card section 1*/}
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 md:h-[105vh]">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
                            <img
                                src={tourist}
                                alt="card-image" className="object-cover w-full h-full" />
                        </div>
                        <div className="p-6">
                            <h4 className="text-2xl font-bold">Discover Bangladesh</h4>
                            <p className="text-purple-400">
                                <Link to={`https://tourist-guide-fb3df.web.app`}>Here Is The Site Link</Link>
                            </p>
                        </div>
                    </div>
                    {/* card section 2 */}
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 md:h-[120vh]">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
                            <img
                                src={event}
                                alt="card-image" className="object-cover w-full h-full" />
                        </div>
                        <div className="p-6">
                            <h4 className="text-2xl font-bold">Event Management</h4>
                            <p className="text-purple-400">
                                <Link to={`https://event-management-assignment.web.app`}>Here Is The Site Link</Link>
                            </p>
                        </div>
                    </div>
                    {/* card section 3*/}
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
                            <img
                                src={career}
                                alt="card-image" className="object-cover w-full h-full" />
                        </div>
                        <div className="p-6">
                            <h4 className="text-2xl font-bold">Tour Community</h4>
                            <p className="text-purple-400">
                                <Link to={`https://career-maker-assignment-11.web.app`}>Here Is The Site Link</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;