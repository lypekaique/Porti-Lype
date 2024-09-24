
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seta from "../../../public/img/right-chevron.png"

const projetos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 6000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, 
                autoplaySpeed: 6000,
              },
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, 
                autoplaySpeed: 6000,
                arrows: false
              },
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, 
                autoplaySpeed: 6000,
                arrows: false
              },
            },
        ]
            
      };
      

    
    
    return (
        <div>
                <div className="flex justify-center items-center mt-10 bg-cover pt-4 w-full h-[50vh] text-center 
                             .max-sm:h-[30vh} ">
                 {/* Titulo */}
                    <div className="flex justify-center items-center w-full h-full
                    ">
                        <div className="bg-[#12141d] rounded-lg px-8 py-1 shadow-[inset_0px_0px_4px_1px_rgba(20,233,86,1)] 
                                xl:px-7 xl:py-2.5 
                                lg:px-6 lg:py-2 
                                md:px-5 md:py-1.5 
                                sm:px-4 sm:py-1
                                max-sm:px-3">
                                <h2 className="uppercase font-semibold text-[#14E956] text-shadow-custom
                                                xl:text-5xl 
                                                lg:text-[2.5rem] 
                                                md:text-[2.2rem] 
                                                sm:text-[2rem] 
                                                max-sm:text-[1.8rem]">
                                                Meus Trabalhos
                                </h2>
                        </div>
                    </div>
                </div>

            <div className="w-[55%] h-[7%] m-auto
            max-sm:w-[80%]">
              
            <div className='mt-20'>
            <Slider {...settings}>
                {data.map((d) => (
   
                        <>
                        
                        <div className="relative h-[51rem] w-full flex justify-center items-center rounded-t-xl
                         max-sm:h-[40rem]">
                            
                        <img src={d.img} className=" h-[35rem] w-[27rem] bg-cover bg-right rounded-[15px] flex-col 
                                                    md:h-[51rem] md:w-[24rem] sm:h-[27rem] sm:w-[19rem]
                                                    max-sm:h-[40rem]
                                                    max-sm:w-[full]  " />

                <div className="absolute top-3 left-2 text-white text-xl font-bold bg-black bg-opacity-40text-center py-2.5 rounded-[25px]
                                ">
                <p className="font-extrabold text-[1.2rem]
                                sm:text-[1rem] sm:py-2 
                                max-sm:text-[0.8rem] max-sm:py-1.5">Projeto: <span className="font-black text-[#14e956]">{d.name}</span></p>
                </div>

                    {/* Review na parte inferior da imagem */}
                    <div className="h-[30%] absolute bottom-0 w-[100%]  flex flex-col justify-end bg-gradient-to-t from-[#0F5197] to-[rgba(255,255,255,0.0046612394957983305)] rounded-b-[15px]">
                    </div>
                    <div className="absolute bottom-20 left-3 text-[1.8rem] leading-[30px] flex flex-col justify-end font-extrabold 
                                    md:text-[1.6rem] md:bottom-16 md:leading-[28px] 
                                    sm:text-[1.4rem] sm:bottom-12 sm:leading-[26px] 
                      max-sm:text-[1.2rem] max-sm:bottom-8 max-sm:leading-[24px] ">{d.review}</div>
                    <div className="absolute flex flex-col justify-end right-0 bottom-0 "><button className=""  ><img src={seta} className="w-[20%]" /></button></div>
                     </div>
                    
                    
                    
                    

                </>))}
                </Slider>
            
                
                
            </div>
        </div>
        </div>
    );
}
const data =[
    {
        name:`Movie App`,
        img: `/img/image.png`,
        review:`Projeto Para recriação de um aplicativo de filme`,
    },
    {
        name:`Projeto teste`,
        img: `/img/Screenshot_20240922-192557.png`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },
    {
        name:`Projeto teste`,
        img: `/img/atumalaca.gif`,
        review:`lorem dalelde dasçldkaslçkdasçl?`,
    },

]


    export default projetos;