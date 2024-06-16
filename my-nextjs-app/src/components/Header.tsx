const Header = () => {

    const midBtnText = ['Home', 'Service', 'Portofolio', 'How we works']

    return (
        <div className='w-full h-10 absolute top-0'>
            {/* btn-container */}
            <div className="flex h-full justify-between px-[8%]">
                {/* left-btn */}
                <div className='flex-1  h-full bg-red-100'>
                    <button className='w-[40%] flex items-center justify-star h-full border border-[#222]'>
                        <span className='font-bold text-xl text-[#DC0155]'>Luxe</span>
                    </button>
                </div>
                <div className='min-w-[50%] flex justify-between bg-blue-100'>
                    {
                        midBtnText.map((item,index) => (
                            <button className='w-[20%] h-full overflow-hidden text-ellipsis whitespace-nowrap'>{item}</button>
                        ))

                    }
                </div>
                <div className='flex-1 justify-end h-full bg-red-100'>
                    <button className='w-[40%] flex items-center h-full justify-end  border border-[#222]'>
                        <span className='font-bold text-xl text-[#DC0155]'>Luxe</span>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Header