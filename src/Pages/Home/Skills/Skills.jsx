import img1 from '../../../assets/icons/js.png'
import img2 from '../../../assets/icons/react.png'
import img3 from '../../../assets/icons/mongo.png'
import img4 from '../../../assets/icons/nodejs.png'
import img5 from '../../../assets/icons/figma.jpg'
import img6 from '../../../assets/icons/css.png'
import img7 from '../../../assets/icons/html logo.png'
import img8 from '../../../assets/icons/firebase.jpg'

const Skills = () => {
    return (
        <div className="md:px-36 md:mt-16 mt-12">
            <div>
                <h2 className="text-4xl font-semibold text-center">My Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
                <div className="p-7 shadow-xl text-center">
                    <div className='flex justify-center'>
                    <img src={img1} alt="" />
                    </div>
                    <h3 className="text-xl font-bold my-3">Vanilla JavaScript</h3>
                </div>
                <div className="p-7 shadow-xl text-center">
                    <div className='flex justify-center'>
                    <img src={img2} alt="" />
                    </div>
                    <h3 className="text-xl font-bold my-3">React</h3>
                </div>
                <div className="p-7 shadow-xl text-center">
                    <div className='flex justify-center'>
                    <img src={img4} alt="" />
                    </div>
                    <h3 className="text-xl font-bold my-3">Node.js</h3>
                </div>
                <div className="p-7 shadow-xl text-center">
                    <div className='flex justify-center'>
                    <img src={img3} alt="" />
                    </div>
                    <h3 className="text-xl font-bold my-3">MongoDB</h3>
                </div>
                <div className="p-7 shadow-xl text-center">
                    <div className='flex justify-center'>
                    <img className='w-20' src={img5} alt="" />
                    </div>
                    <h3 className="text-xl font-bold my-3">Figma</h3>
                </div>
                <div className="p-7 shadow-xl text-center">
                    <div className='flex justify-center'>
                    <img className='w-16' src={img6} alt="" />
                    </div>
                    <h3 className="text-xl font-bold my-3">CSS</h3>
                </div>
                <div className="p-7 shadow-xl text-center">
                    <div className='flex justify-center'>
                    <img className='w-16' src={img7} alt="" />
                    </div>
                    <h3 className="text-xl font-bold my-3">HTML</h3>
                </div>
                <div className="p-7 shadow-xl text-center">
                    <div className='flex justify-center'>
                    <img className='w-20' src={img8} alt="" />
                    </div>
                    <h3 className="text-xl font-bold my-3">Firebase</h3>
                </div>
            </div>
        </div>
    );
};

export default Skills;