import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seta from "../../../public/img/right-chevron.png";
import { settings, settings2 } from "../config";
import { useIntersectionObserver } from "../inview";

const Projetos: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.5);

  return (
    <div>
      <div className="flex justify-center items-center mt-10 bg-cover pt-4 w-full h-[65vh] text-center ">
        {/* Titulo */}
        <div
          ref={elementRef}
          className={`transform transition-opacity duration-700 ${
            isVisible
              ? "opacity-100 animate-fade-down animate-once animate-duration-[700ms]  flex justify-center items-center w-full h-full  "
              : "opacity-0"
          }`}
        >
          <div className=" bg-[#12141d] rounded-lg px-8 py-1 shadow-[inset_0px_0px_4px_1px_rgba(20,233,86,1)] xl:px-7 xl:py-2.5 lg:px-6 lg:py-2 md:px-5 md:py-1.5 sm:px-4 sm:py-1 max-sm:px-3">
            <h2
              className="uppercase font-semibold text-[#14E956] text-shadow-custom
                                                xl:text-5xl 
                                                lg:text-[2.5rem] 
                                                md:text-[2.2rem] 
                                                sm:text-[2rem] 
                                                max-sm:text-[1.8rem]"
            >
              Meus Trabalhos
            </h2>
          </div>
        </div>
      </div>

      <div className="w-[46%] h-[7%] m-auto max-sm:w-[80%]">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="relative h-auto w-[27rem] group">

              {d.images && Array.isArray(d.images) && (
                <Slider {...settings2}>
                  {d.images.map((img, idx) => (
                    <div key={idx} className=" w-[27rem] relative ">
                      <img
                        src={img}
                        className="bg-cover bg-right rounded-[15px] 
                                    md:w-[24rem] 
                                    sm:w-[19rem] 
                                    max-sm:w-full"
                      />

                      <div
                        className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex flex-col justify-center items-center rounded-[15px]
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        <p className="text-sm mt-2">{d.review}</p>
                        <button className="mt-4">
                          <img
                            src={seta}
                            className="w-10 animate-shake animate-infinite animate-duration-[5000ms] animate-delay-1000"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}

              <div className="absolute top-3 left-2 text-white text-xl w-[65%] font-bold bg-black bg-opacity-65 text-center py-2.5 rounded-[25px]">
                <p
                  className="font-extrabold text-[1.2rem]
                                  sm:text-[1rem] sm:py-2 
                                  max-sm:text-[0.8rem] max-sm:py-1.5"
                >
                  Projeto:{" "}
                  <span className="font-black text-[#14e956]">{d.name}</span>
                </p>
              </div>

              <div className="absolute top-3 left-2 text-white text-xl w-[65%] font-bold bg-black bg-opacity-65 text-center py-2.5 rounded-[25px]">
                <p
                  className="font-extrabold text-[1.2rem]
                  sm:text-[1rem] sm:py-2 
                  max-sm:text-[0.8rem] max-sm:py-1.5"
                >
                  Projeto:{" "}
                  <span className="font-black text-[#14e956]">{d.name}</span>{" "}
                  {/*informações que aparece ao passar o mouse */}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
const data = [
  {
    name: `Movie App`,
    images: ["/img/image.png", "/img/image1.png", "/img/image2.png"],
    review: `Projeto Para recriação de um aplicativo de filme`,
  },
  {
    name: `Projeto teste`,
    images: ["/img/image3.png", "/img/image4.png", "/img/image5.png"],
    review: `lorem dalelde dasçldkaslçkdasçl?`,
  },
  {
    name: `Projeto teste`,
    images: ["/img/image6.png", "/img/image7.png", "/img/image8.png"],
    review: `lorem dalelde dasçldkaslçkdasçl?`,
  },
];

export default Projetos;
