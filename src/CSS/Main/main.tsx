import '../principais.scss'
{/*import AOS from 'aos';*/}
import 'aos/dist/aos.css';
{/*import React, { useState, useEffect } from 'react'; */}
import './style.scss'
import face from '../../../public/img/1714930728994.jfif'
import Projetos from './Projetos';


const main = () => {
    return(
        <div className='main'>
            <div className='home'>   {/*Main*/}
                <div className="home-intro">{/*Primeira Paginaa*/}
                        <div className='w-[55%] pr-24 md:w-full md:flex md:flex-col md:items-start md:pr-0 sm:w-full sm:flex sm:flex-col sm:items-start sm:p-0 sm:mb-8 xs:w-full xs:flex xs:flex-col xs:items-center xs:p-0 animate-fade-right animate-duration-1000 animate-ease-in-out animate-fill-forwards'> 
                            <div className='m-6 w-max'>  {/*Conteudo textos*/}
                                <p className="bg-[#14e95828] rounded-lg text-[#14E956] text-[1.4rem] font-extrabold  m-0 p-2.5 capitalize tracking-[0.05em]
                                md:text-[1.2rem]
                                sm:text-[1rem]
                                xs:text-[0.85rem] xs:p-[0.27rem_0.7rem] xs:flex xs:items-center
                                max-xs:text-[0.75rem] max-xs:p-[0.2rem_0.5rem] max-xs:flex max-xs:items-center">
                                    <span className="font-spacefuture text-[1.7rem] animate-bounce animate-infinite inline-block sm:text-[1rem] 
                                    md:text-[1.2rem] 
                                    lg:text-[1.5rem] 
                                    xl:text-[1.7rem]">To tisti</span> {/*Letra mexendo*/} 
                                    Macacos me mordam eu sou louco </p> {/*Texto de cima*/}
                                </div>
                            <div className='m-8 '> {/*texto do meio*/}
                                <h1 className=' m-0 font-black tracking-widee capitalize  text-[3.2rem]
                                               lg:text-[2.9rem] 
                                               md:text-[2.6rem] 
                                               sm:text-[2.3rem]'>Lorem 
                                               <span className="text_span_green">ipsum dolor</span>
                                                sit amet consectetur 
                                               <span className="text_span_green"> adipisicing</span> 
                                                elit.</h1>
                            </div>
                            <div><p className='m-8 font-bold lowercase text-[18px] leading-[30px] tracking-[0.04em] opacity-80 
                            sm:text-[14px] 
                            sm:leading-[21px] 
                            md:text-[15px] 
                            lg:text-[16px] 
                            lg:leading-[26px] 
                            xl:text-[18px] 
                            xl:leading-[30px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus a reiciendis laudantium, labore sunt enim! Distinctio, dicta maxime voluptate earum odio esse velit sit, quaerat, eos voluptatem quam qui incidunt!</p></div> {/*texto de baixo*/}
                             </div>
                        <div className='w-[45%] pb-4 animate-fade-left animate-duration-1000 animate-ease-in-out animate-fill-forwards
                                        md:w-full md:flex md:justify-center md:items-center
                                        sm:w-full sm:flex sm:justify-center sm:items-center sm:pb-8
                                        max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:pb-12'>
                                            <div className='profile'><img src={face} className='w-[700px] h-[700px]
                                                                                                lg:w-[600px] lg:h-[600px]
                                                                                                md:w-[400px] md:h-[400px]
                                                                                                sm:w-[300px] sm:h-[300px]
                                                                                                max-sm:w-[200px] max-sm:h-[200px] rounded-full'/></div>

                        </div>
                </div> 
                <Projetos />
            <div></div>  
            <div></div>  
            </div>
            
            
            <div></div>


        
        
        
        
        
        
        
        </div>


    )
    

};


    export default main;

    