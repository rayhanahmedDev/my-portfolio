
const Navber = () => {

    const links = <> 
       <li><a className="mr-4" href="/">Home</a></li>
       <li><a className="mr-4" href="/">About Me</a></li>
       <li><a className="mr-4" href="/">Hire Me</a></li>
    </>

    return (
        <div>
            <div className="navbar bg-[#18315A] md:px-36 py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-[#18315A] rounded-box w-52 text-white">
                          {links}
                        </ul>
                    </div>
                    <h2 className="text-3xl font-bold"><span className="text-[#F83D56]">Rayhan</span></h2>
                </div>
                <div className="navbar-end">
                <nav className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-white">
                       {links}
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    );
};

export default Navber;