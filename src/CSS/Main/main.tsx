import "../principais.scss";
import "./style.scss";
import face from "../../../public/img/1714930728994.jfif";
import { useIntersectionObserver } from "../inview";

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
                ? "opacity-100 animate-fade-right animate-once animate-duration-[1500ms] animate-ease-out animate-normal m-6 w-full md:flex md:flex-col md:items-start md:p-0 sm:flex sm:flex-col sm:items-start sm:p-0 sm:m-8"
                : "opacity-100"
            }`}
          >
            <div className="m-0">
              {/*Conteudo textos*/}
              <p
                className=" rounded-lg text-[#14E956] font-extrabold m-0 p-2.5 capitalize tracking-[0.05em]
              text-[1.2rem] md:text-[1rem] sm:text-[.85rem] sm:px-[.7rem] sm:py-[.27rem] sm:flex sm:items-center xs:text-[.75rem] xs:px-[.5rem] xs:py-[.2rem] xs:flex xs:items-center "
              >
                <span
                  className="animate-bounce inline-block
    md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.7rem] sm:text-[1rem] max-sm:text-[0.9rem]"
                >
                  I
                </span>{" "}
                {/* Letra mexendo */}
                Macacos me mordam eu sou louco
              </p>
            </div>
            {/*Texto de cima*/}
            <div className="bottom-8 m-0">
              {" "}
              {/*texto do meio*/}
              <h1
                className=" m-2 font-black tracking-widee capitalize  
                                               lg:text-[2.9rem] 
                                               md:text-[2.6rem] 
                                               max-sm:text-[1.5rem]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
            <div>
              <p
                className="m-2 font-bold lowercase text-[18px] leading-[30px] tracking-[0.04em] opacity-80 
md:text-[15px] sm:text-[14px] sm:leading-[21px] max-sm:text-[13px] max-sm:leading-[20px]"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus a reiciendis laudantium, labore sunt enim! Distinctio,
                dicta maxime voluptate earum odio esse velit sit, quaerat, eos
                voluptatem quam qui incidunt!
              </p>
            </div>{" "}
          </div>
          {/*texto de baixo*/}
          <div
            className="w-[45%] pb-4 
                                        md:w-full md:flex md:justify-center md:items-center
                                        sm:w-full sm:flex sm:justify-center sm:items-center sm:pb-8
                                        max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:pb-12  "
          >
            <div
              ref={elementRef}
              className={`transform transition-opacity duration-700 ${
                isVisible
                  ? "opacity-100 animate-fade-left animate-once animate-duration-[1500ms] animate-ease-out animate-normal md:w-full md:flex md:justify-center md:items-center sm:w-full sm:flex sm:justify-center sm:items-center sm:pb-8 xs:w-full xs:flex xs:justify-center xs:items-center xs:pb-12 "
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
                          max-sm:w-[180px] max-sm:h-[180px] rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
