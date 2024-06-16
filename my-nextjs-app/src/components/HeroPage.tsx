import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/image/bgImg.png')" }}>
            <div className="text-center p-5 bg-black bg-opacity-50 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Next.js App</h1>
                <p className="text-lg md:text-xl mb-6">This is the hero section of the homepage. Add your compelling message here.</p>
                <a href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default Hero;