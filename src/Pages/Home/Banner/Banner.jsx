import img from '../../../assets/me.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="md:px-36 px-5 md:py-36 py-10 md:h-[70vh] bg-container ">
                <div className="flex items-center flex-col lg:flex-row-reverse justify-between">
                    <div>
                    <img src={img} className="max-w-sm w-full rounded-lg" />
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className='md:w-1/2 text-white mt-8 md:mt-0'>
                        <h3 className='text-2xl text-[#050748]'>Hi There</h3>
                        <h1 className="text-6xl font-bold text-[#050748]">I Am <span className=''>Rayhan Ahmed</span></h1>
                        <h3 className="py-4 text-3xl text-[#050748]">I Am a Frontend Developer</h3>
                        <div>
                        <button className="btn bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] text-white mr-6">Resume</button>
                        <button className="btn bg-[#050748] border-[#050748] text-white">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;