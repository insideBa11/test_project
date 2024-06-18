const Header = () => {

    const midBtnText = ['Home', 'Service', 'Portofolio', 'How we works']

    return (
        <div className='w-full h-10 absolute top-0'>
            {/* btn-container */}
            <div className="flex h-full justify-between px-[8%]">
                {/* left-btn */}
                <div className='flex-1  h-full '>
                    <button className='w-[40%] flex items-center justify-star h-full '>
                        <span className='font-bold text-xl text-[#DC0155]'>Luxe</span>
                    </button>
                </div>
                <div className='min-w-[50%] flex justify-between '>
                    {
                        midBtnText.map((item,index) => (
                            <button className='w-[20%] h-full text-sm overflow-hidden text-ellipsis whitespace-nowrap'>{item}</button>
                        ))

                    }
                </div>
                <div className='flex-1 flex justify-end items-end h-full '>
                    {/* 这将确保button在div的右侧 */}
                    <button className='w-[40%] flex justify-end items-center h-full '>
                        <span className='font-bold text-xl text-[#222]'>=</span>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Header