import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projetos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };

    
    
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-20'> {/* Titulo*/}
                <div className='flex flex-col justify-center items-center mt-20 md:mt-12 sm:mt-8'>
                    <div className='bg-[#12141d] rounded-lg px-8 py-3 flex justify-center items-center mb-20 shadow-[inset_0px_0px_4px_1px_rgba(20,233,86,1)]
                                    xl:px-7 xl:py-2.5 
                                    lg:px-6 lg:py-2 
                                    md:px-5 md:py-1.5 
                                    sm:px-4 sm:py-1'>
                                        <h2 className='uppercase  font-extrabold text-[#14E956] text-shadow-[3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]
                                                       xl:text-5xl 
                                                       lg:text-[2.5rem] 
                                                       md:text-[2.2rem] 
                                                       sm:text-[2rem] 
                                                       text-[1.8rem]'>Meus Trabalhos</h2>
                                    </div>
                                
                </div>
            </div>
            <div className="w-3/4 m-auto">
            <div className='mt-20'>
            <Slider {...settings}>
                {data.map((d) => (
                    <div className='bg-white h-[450px] text-black rounded-xl' >
                        <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                            <img src={d.img} className="h-44 w-44 rounded-full" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <p className="text-xl font-semibold"> {d.name}</p>
                            <p className="text-center"> {d.review}</p>
                            <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Ir pro projeto</button>
                        </div>
                    </div>
                ))}
                </Slider>
            
                
                
            </div>
        </div>
        </div>
    );
}
const data =[
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },

]


    export default projetos;