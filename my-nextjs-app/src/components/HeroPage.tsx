"use client"

import {useState, useEffect} from 'react'

export const detectDevice = () => {
    if (typeof window === 'undefined') {
        return 'unknown'; // 如果在服务器端渲染，返回 'unknown'
    }

    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

    if (isMobile) {
        return 'mobile';
    } else {
        return 'desktop';
    }
};

interface BottomBtnProps {
    device: string
}

const BottomBtn: React.FC<BottomBtnProps> = (props) => {
    const {device} = props;

    const arr = [1, 2, 3];

    return (
        <div className='px-[8%]  w-full h-full flex flex-col'>
            {/* text area */}
            <div>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 leading-sung ${device === 'desktop' ? 'w-[50%] text-[#333]' : 'w-full text-[#FFF] text-shadow-outline text-stroke-black'}`}>
                    Our service
                </h2>
            </div>
            {device === 'desktop' ?
                <div className='w-full h-full flex flex-row justify-between'>
                    {
                        arr.map((item, index) => (
                            <button
                                key={index}
                                className='w-[30%] h-full bg-red-100 bg-opacity-50 hover:bg-none border border-[#DC0155] rounded'>
                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 leading-sung ${device === 'desktop' ? 'text-[#333]' : 'text-[#FFF] text-shadow-outline text-stroke-black'}`}>
                                    Boarding
                                </h2>
                                <span className={`text-base sm:text-lg md:text-xl mb-6 ${device === 'desktop' ? 'text-[#333]' : 'text-[#FFF] text-shadow-outline text-stroke-black'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat labore
                        </span>
                            </button>
                        ))
                    }
                </div> :
                // 让div里面的三个button，平分垂直空间
                <div className='w-full  h-full flex flex-col justify-between'>
                    {
                        arr.map((item, index) => (
                            <button
                                key={index}
                                className='w-full h-[30%] bg-red-100 bg-opacity-50 hover:bg-none border border-[#DC0155] rounded-xl'>
                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 leading-sung ${device === 'desktop' ? 'text-[#333]' : 'text-[#FFF] text-shadow-outline text-stroke-black'}`}>
                                    Boarding
                                </h2>
                                <span className={`text-base sm:text-lg md:text-xl mb-6 ${device === 'desktop' ? 'text-[#333]' : 'text-[#FFF] text-shadow-outline text-stroke-black'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat labore
                        </span>
                            </button>
                        ))}
                </div>
            }
        </div>


    );
}


const Hero: React.FC = () => {
    const [device, setDevice] = useState<string | null>(null);

    useEffect(() => {
        const deviceType = detectDevice();
        console.log('deviceType', deviceType)
        setDevice(deviceType);
    }, []);
    return (
        <div className=" bg-cover bg-center h-screen text-white flex items-center flex-col  pb-[3%]"
             style={{backgroundImage: "url('/image/bgImg.png')"}}>
            <div className='w-full h-10 '></div>
            <div className='w-full flex flex-col  px-[8%] py-[2%]' style={{
                backgroundImage: "url('/image/rightBg.png')",
                backgroundPosition: 'top right',
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat'
            }}>
                <span
                    className={`text-base sm:text-lg md:text-xl mb-6  ${device === 'desktop' ? 'w-[50%] text-[#333]' : 'w-full text-[#FFF] text-shadow-outline text-stroke-black'}`}>Lorem ipsum!</span>
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4  leading-sung w-[50%] ${device === 'desktop' ? 'w-[50%] text-[#333]' : 'w-full text-[#FFF] text-shadow-outline text-stroke-black'}`}>Lorem
                    ipsum dolor sit amet, suak adipisicing.</h1>
                <span
                    className="text-base sm:text-lg md:text-xl mb-6 ${device === 'desktop' ? 'w-[50%] text-[#333]' : 'w-full text-[#FFF] text-shadow-outline text-stroke-black'}` ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat labore</span>
                <button className="bg-[#DC0155] w-32 h-10 text-white font-bold py-2 px-4 rounded" onClick={() => {
                    console.log(device)
                }}>
                    Learn More
                </button>
            </div>
            <div className='w-full   flex-1'>
                <BottomBtn/>
            </div>
        </div>
    );
};

export default Hero;