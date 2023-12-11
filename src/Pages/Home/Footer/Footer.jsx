import { FaFacebook, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer md:px-36 items-center p-4 bg-gradient-to-r from-[#D6FFFC] to-[#ffeff5] text-neutral-content">
                <aside className="items-center grid-flow-col text-black">
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col text-black gap-4 md:place-self-center md:justify-self-end">
                    <Link to={`https://www.facebook.com/profile.php?id=100014010706300`}>
                        <FaFacebook className='text-3xl'></FaFacebook>
                    </Link>
                    <Link to={`https://www.linkedin.com/in/rayhanahmeddev`}>
                        <FaLinkedinIn className='text-3xl'></FaLinkedinIn>
                    </Link>
                    <Link>
                        <FaWhatsapp className='text-3xl'></FaWhatsapp>
                    </Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;