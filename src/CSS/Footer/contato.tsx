const redes = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full p-0 mt-10">
      <div
        className="flex justify-center items-center mt-10 bg-cover pt-4 w-full h-[50vh] text-center 
                             .max-sm:h-[30vh} "
      >
        {/* Titulo */}
        <div
          className="flex justify-center items-center w-full h-full
                    "
        >
          <div
            className="bg-[#12141d] rounded-lg px-8 py-1 shadow-[inset_0px_0px_4px_1px_rgba(20,233,86,1)] 
                                xl:px-7 xl:py-2.5 
                                lg:px-6 lg:py-2 
                                md:px-5 md:py-1.5 
                                sm:px-4 sm:py-1
                                max-sm:px-3"
          >
            <h2
              className="uppercase font-semibold text-[#14E956] text-shadow-custom
                                                xl:text-5xl 
                                                lg:text-[2.5rem] 
                                                md:text-[2.2rem] 
                                                sm:text-[2rem] 
                                                max-sm:text-[1.8rem]"
            >
              Contato
            </h2>
          </div>
        </div>
      </div>
      <div
        className="items-center flex justify-between w-full
                    lg:justify-center lg:flex-wrap  
                    md:justify-center md:flex-wrap 
                    sm:justify-center sm:flex-wrap
                    max-sm:justify-center max-sm:flex-wrap"
      >
        <a
          href=""
          className="w-[25%] bg-[#333333] text-white h-[9rem] py-0 px-6 flex justify-between items-center cursor-pointer relative"
        ></a>
        <a
          href=""
          className="w-[25%] bg-[#0077b5] text-white h-[9rem] py-0 px-6 flex justify-between items-center cursor-pointer relative"
        ></a>
        <a
          href=""
          className="w-[25%] bg-[#1da1f2] text-white h-[9rem] py-0 px-6 flex justify-between items-center cursor-pointer relative"
        ></a>
        <a
          href=""
          className="w-[25%] bg-[#006cff] text-white h-[9rem] py-0 px-6 flex justify-between items-center cursor-pointer relative"
        ></a>
      </div>
      <a
        href=""
        className="flex justify-center items-center w-full h-16 bg-[#10ba46] cursor-pointer"
      ></a>
    </div>
  );
};

export default redes;
