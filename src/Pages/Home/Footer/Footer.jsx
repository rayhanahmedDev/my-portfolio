import { FaFacebook, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* footer start */}
            <footer className="footer footer-center p-10 rounded bg-gradient-to-r from-[#D6FFFC] to-[#ffeff5] text-black">
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to={`https://www.facebook.com/profile.php?id=100014010706300`}>
                            <FaFacebook className='text-3xl'></FaFacebook>
                        </Link>
                        <Link to={`https://www.linkedin.com/in/rayhanahmeddev`}>
                            <FaLinkedinIn className='text-3xl'></FaLinkedinIn>
                        </Link>
                        <Link>
                            <FaWhatsapp className='text-3xl'></FaWhatsapp>
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
            {/* footer end */}
        </div>
    );
};

export default Footer;