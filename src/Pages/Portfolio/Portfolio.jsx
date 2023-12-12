import Navber from "../Home/Navber/Navber";
import event from '../../assets/event-management.jpg'


const Portfolio = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="md:px-36 mx-5 md:mx-0 my-16">
                <div>
                    <h2 className="text-4xl text-[#050748] font-bold text-center my-16">My Projects</h2>
                </div>
                {/* card section */}
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
                        <img
                            src={event}
                            alt="card-image" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <h4 className="text-2xl font-bold">Event Management</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;