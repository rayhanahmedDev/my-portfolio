import { FaFacebook, FaLinkedinIn, FaSkype, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* footer start */}
            <footer className="footer footer-center p-10 rounded bg-gradient-to-r from-[#D6FFFC] to-[#ffeff5] text-black">
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to={`https://www.facebook.com/profile.php?id=100014010706300`}>
                            <FaFacebook className='text-3xl hover:text-pink-500'></FaFacebook>
                        </Link>
                        <Link to={`https://www.linkedin.com/in/rayhanahmeddev`}>
                            <FaLinkedinIn className='text-3xl hover:text-pink-500'></FaLinkedinIn>
                        </Link>
                        <Link to={`https://join.skype.com/invite/vd7eE5fW7yDf`}>
                            <FaSkype className='text-3xl hover:text-pink-500'></FaSkype>
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All Right Reserved By Rayhan Ahmed</p>
                </aside>
            </footer>
            {/* footer end */}
        </div>
    );
};

export default Footer;