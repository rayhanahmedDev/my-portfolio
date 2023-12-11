import { FaPhoneAlt, FaSkype } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "../../Components/ContactForm";
import Navber from "../Home/Navber/Navber";

const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <h2 className="text-4xl text-[#050748] font-bold text-center my-16">Contact Me</h2>
            </div>
            <div className="md:px-36 flex flex-wrap md:flex-nowrap mx-5 md:mx-0 justify-between mb-16">
                <div className="md:w-2/3 border">
                    <ContactForm></ContactForm>
                </div>
                <div className="md:w-1/2">
                <div className="p-7 mb-6 shadow-xl text-[#6A6A8E] bg-[#FFF8F2]">
                    <p className="flex items-center font-bold gap-5 text-2xl">
                        <FaPhoneAlt className=""></FaPhoneAlt>
                        Phone : </p> 
                        <p className="text-xl my-3">Assistance Hours: Saturday – Thursday, 9 am to 5 pm</p>
                    <h3 className="text-2xl font-bold my-3">(+88) 0000 000 000</h3>
                </div>
                <div className="p-7 mb-6 shadow-xl text-[#6A6A8E] bg-[#FFECEC]">
                    <p className="flex items-center font-bold gap-5 text-2xl">
                        <MdEmail></MdEmail>
                        Email : </p> 
                        <p className="text-xl my-3"></p>
                    <h3 className="text-2xl font-bold my-3">mdrayhanahmed@gmail.com</h3>
                </div>
                <div className="p-7 shadow-xl text-[#6A6A8E] bg-[#EAFFFD]">
                    <p className="flex items-center font-bold gap-5 text-2xl">
                        <FaSkype></FaSkype>
                        Skype : </p> 
                        <p className="text-xl my-3">Me Available Online: Saturday – Thursday, 9 am to 5 pm</p>
                    <h3 className="text-2xl font-bold my-3">(+88) 0000 000 000</h3>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;