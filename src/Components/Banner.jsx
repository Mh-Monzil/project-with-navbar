import bannerImg from '/public/banner.jpg';

const Banner = () => {

    const bg = {
        backgroundImage : `url(${bannerImg})`,
        // opacit
    }

    return (
        <div style={bg} className='rounded-2xl'>
            <div className="w-full max-h-[600px] bg-center bg-cover bg-[#00000080] px-6 py-10 md:py-32 md:px-52 text-white text-center rounded-[24px]">
                <h1 className='text-3xl md:text-[52px] font-bold leading-9 md:leading-[72px]'>Forge Your Path to Peak Fitness</h1>
                <p className='max-w-[680px] mx-auto text-center py-4 md:py-10 text-white font-semibold text-xl leading-8'>Empower your fitness journey at FitForge Gym: Personalized training, advanced facilities, professional guidance, and a dynamic community dedicated to fostering your health, strength, and confidence.</p>
                <div className="flex justify-center gap-6 items-center pt-5 md:pt-10">
                    <button className="px-5 py-3 md:px-7 md:py-4 bg-rose-500 rounded-[50px] md:text-xl font-semibold border-2 border-rose-500 text-black hover:bg-transparent hover:border-white    hover:text-white ease-in-out transition-all">Explore Now</button>
                    <button className="px-5 py-3 md:px-7 md:py-4 bg-transparent rounded-[50px] md:text-xl font-semibold border-2 border-white hover:bg-rose-500 hover:border-rose-500 text-white hover:text-black ease-in-out transition-all">Our Feedback</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;