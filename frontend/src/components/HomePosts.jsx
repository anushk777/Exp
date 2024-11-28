const HomePosts=()=>{
    return(
        <div className="w-full flex mt-8 space-x-2">
            <div className="w-[35%] h-[200px] flex justify-center items-center">
                <img src="" alt="hello" className="h-full w-full object-cover"/>
            </div>
            <div className="flex flex-col w-[65%]">
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
                    10 uses of AI
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-grey-500 items-center justify-between md:mb-4">
                    <p>@AnushkTiwari</p>
                    <div className="flex space-x-2">
                        <p>21/11/2024</p>
                        <p>02:54</p>
                    </div>
                </div>
                <p className="text-sm md:text-lg">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
            </div>
        </div>
    )
}

export default HomePosts;