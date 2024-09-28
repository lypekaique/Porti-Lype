import "../principais.scss";
import "./style.scss";
import face from "../../../public/img/1714930728994.jfif";
import Projetos from "./Projetos";
import { useIntersectionObserver } from "../inview"

const Main: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.5); // Usando o hook com threshold de 50%

  return (
    <div className="main">
      <div className="home">
        {" "}
        {/*Main*/}
        <div className="home-intro">
          {/*Primeira Paginaa*/}
          <div
            ref={elementRef}
            className={`transform transition-opacity duration-700 ${
              isVisible
                ? "opacity-100 animate-fade-right animate-once animate-duration-[1500ms] animate-ease-out animate-normal"
                : "opacity-0"
            }`}
          >
            <div className="m-6 w-max ">
              {" "}
              {/*Conteudo textos*/}
              <p
                className="bg-[#14e95828] rounded-lg text-[#14E956] font-extrabold m-0 p-2.5 capitalize tracking-[0.05em]
                                            md:text-[1.2rem] sm:text-[1rem] animate-bounce "
              >
                <span
                  className="animate-bounce inline-block
    md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.7rem] sm:text-[1rem] max-sm:text-[0.9rem]"
                >
                  To tisti
                </span>{" "}
                {/* Letra mexendo */}
                Macacos me mordam eu sou louco
              </p>
              {/*Texto de cima*/}
            </div>
            <div className="m-8 ">
              {" "}
              {/*texto do meio*/}
              <h1
                className=" m-0 font-black tracking-widee capitalize  
                                              max-xs:text-[3.2rem]
                                               lg:text-[2.9rem] 
                                               md:text-[2.6rem] 
                                               sm:text-[2.3rem]"
              >
                Lorem
                <span className="text_span_green">ipsum dolor</span>
                sit amet consectetur
                <span className="text_span_green"> adipisicing</span>
                elit.
              </h1>
            </div>
            <div>
              <p
                className="m-8 font-bold lowercase leading-[30px] tracking-[0.04em] opacity-80 
                            sm:text-[14px] 
                            sm:leading-[21px] 
                            md:text-[15px] 
                            lg:text-[16px] 
                            lg:leading-[26px] 
                            xl:text-[18px] 
                            xl:leading-[30px]"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus a reiciendis laudantium, labore sunt enim! Distinctio,
                dicta maxime voluptate earum odio esse velit sit, quaerat, eos
                voluptatem quam qui incidunt!
              </p>
            </div>{" "}
            {/*texto de baixo*/}
          </div>
          <div
            className="w-[45%] pb-4 
                                        md:w-full md:flex md:justify-center md:items-center
                                        sm:w-full sm:flex sm:justify-center sm:items-center sm:pb-8
                                        max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:pb-12 overflow-hidden "
          >
            <div
              ref={elementRef}
              className={`transform transition-opacity duration-700 ${
                isVisible
                  ? "opacity-100 animate-fade-left animate-once animate-duration-[1500ms] animate-ease-out animate-normal"
                  : "opacity-0"
              }`}
            >
              <img
                src={face}
                className="
                                                                                                xl:w-[600px] xl:h-[600px]
                                                                                                lg:w-[400px] lg:h-[400px]
                                                                                                md:w-[400px] md:h-[400px]
                                                                                                sm:w-[300px] sm:h-[300px]
                                                                                                max-sm:w-[200px] max-sm:h-[200px] rounded-full "
              />
            </div>
          </div>
        </div>
        <Projetos />
        <div></div>
        <div></div>
      </div>

      <div></div>
    </div>
  );
};

export default Main;
