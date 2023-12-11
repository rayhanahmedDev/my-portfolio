import img from '../../../assets/me.jpg'

const Banner = () => {
    return (
        <div>
            <div className="md:px-36 px-5 md:py-36 py-10 md:h-[80vh] bg-[#18315A]">
                <div className="flex items-center flex-col lg:flex-row-reverse justify-between">
                    <div>
                    <img src={img} className="max-w-sm w-full rounded-lg" />
                    </div>
                    <div className='md:w-1/2 text-white mt-8 md:mt-0'>
                        <h3 className='text-2xl'>Hi There</h3>
                        <h1 className="text-5xl font-bold">I Am <span className='text-[#F83D56]'>Rayhan Ahmed</span></h1>
                        <h3 className="py-4 text-3xl">I Am a Frontend Developer</h3>
                        <div>
                        <button className="btn bg-[#F83D56] border-[#F83D56] text-white mr-6">Resume</button>
                        <button className="btn bg-[#294672] border-[#294672] text-white">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;