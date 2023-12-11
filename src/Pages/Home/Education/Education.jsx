
const Education = () => {
    return (
        <div className="my-16 md:px-36">
            <div>
                <h2 className="text-4xl mb-20 px-10 font-bold text-center text-[#050748]">A Summary of My Resume</h2>
            </div>
            <div>
                <div className="flex flex-wrap justify-between my-12">
                    <div data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="md:w-1/3 mx-auto">
                        <h3 className="text-3xl font-bold mb-8 text-[#050748]">My Education</h3>
                        <div className="resume-item">
                            <h2 className="text-2xl font-bold my-2">Technical Education of Computer</h2>
                            <h3 className="text-xl font-semibold my-3 text-[#757575]">Satkhira Institute / 2018 - 2019</h3>
                        </div>
                        <hr />
                        <div className="resume-item">
                            <h2 className="text-2xl font-bold my-2">Higher Secondary Certificate</h2>
                            <h3 className="text-xl font-semibold my-3 text-[#757575]">Shimanta Adarsha College / 2016 - 2018</h3>
                        </div>
                        <hr />
                        <div className="resume-item">
                            <h2 className="text-2xl font-bold my-3">Honours in Political Science</h2>
                            <h3 className="text-xl text-[#757575] font-semibold my-3">National University / 2018 - 2023</h3>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 px-10">
                        <h3 className="text-3xl font-bold mb-8 text-[#050748]">My Experience</h3>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="flex flex-wrap md:flex-nowrap md:gap-4 gap-4">
                            <div className="md:w-1/2 w-full">
                                <div className="resume-item">
                                    <h2 className="text-2xl font-bold my-2">Languages: HTML, CSS, JavaScript</h2>
                                    <h3 className="text-xl my-3 font-semibold text-[#757575]">Almost 1 Year</h3>
                                </div>
                                <hr />
                                <div className="resume-item">
                                    <h2 className="text-2xl font-bold my-2">Framework: React, Tailwind CSS</h2>
                                    <h3 className="text-xl my-3 font-semibold text-[#757575]">Almost 1 Year</h3>
                                </div>
                                <hr />
                                <div className="resume-item">
                                    <h2 className="text-2xl font-bold my-2">Backend : NodeJs, ExpressJs, JWT</h2>
                                    <h3 className="text-xl my-3 font-semibold text-[#757575]">Some Few Month</h3>
                                </div>
                                <hr />
                            </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="md:w-1/2 w-full">
                                <div className="resume-item">
                                    <h2 className="text-2xl font-bold my-2">Databases: MongoDB, Firebase</h2>
                                    <h3 className="text-xl my-3 font-semibold text-[#757575]">Almost 1 Year</h3>
                                </div>
                                <hr />
                                <div className="resume-item">
                                    <h2 className="text-2xl font-bold my-2">Version Control: GitHub</h2>
                                    <h3 className="text-xl my-3 font-semibold text-[#757575]">Almost 1 Year</h3>
                                </div>
                                <hr />
                                <div className="resume-item">
                                    <h2 className="text-2xl font-bold my-2">Soft Skills: Problem Solving, Attention to Detail</h2>
                                    <h3 className="text-xl my-3 font-semibold text-[#757575]">Almost 1 Year</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;