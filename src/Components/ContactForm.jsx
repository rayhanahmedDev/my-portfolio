
const ContactForm = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-[#050748]">Lets Message Me</h2>
            <form className="contact">
                <div className="my-12">
                    {/* input 1 */}
                    <input className="border-b-2 border-gray-300 max-w-xs mr-4 w-full h-[40px]" type="text" placeholder="Enter Name" name="" id="" />
                    {/* input 2 */}
                    <input className="border-b-2 border-gray-300 max-w-xs w-full h-[40px] my-5" type="email" placeholder="Enter Email" name="" id="" />
                </div>
                {/* text area */}
                <textarea className="w-full border-b-2 border-gray-300" name="" id="" cols="60" placeholder="Enter Your Message" rows="5"></textarea>
                <div className="text-center mt-8">
                    <button className="btn bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] text-white">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;