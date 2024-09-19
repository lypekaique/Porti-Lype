import atumalaca from '../../assets/IMG/atumalaca.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease' });
  }, []);
  AOS.init({
    duration: 1000, // duração da animação (em milissegundos)
    easing: 'ease', // tipo de easing
    once: true, // anima apenas uma vez, não a cada scroll
  });
  


  return (
    <div>
      <div class='max-w-[100%] m-0 w-[100%] overflow-hidden'> {/* Body */}
        <div class="flex justify-between items-center h-[74vh] bg-cover bg-top bg-gradient-to-r from-[rgba(5,8,16,0.6)] to-[rgba(5,8,16,0.6)] px-20 pt-32"> {/* Div com background pro efeito parallax falta adiciona ainda  */}
          <div class='w-[55%] pr-[6rem] animate-fade-right animate-duration-[2000ms] animate-ease-out animate-fill-forwards'> {/* Conteudo */}
            <div class='w-max m-6 ' > {/* Primeiro texto */}
                <p class="bg-[#14e95828] rounded-lg text-[#14E956] text-xl font-black m-0 px-4 py-2 capitalize tracking-wide font-spacefuture">
                 Atumalaca
                </p>
            </div>
            <div class='m-8'> {/* Segundo Texto */}
              <h1 class='font-black si tracking-wide m-0 capitalize text-5.5xl leading-12  font-spacefuture'><span class='text-[#14E956] text-6.5xl '>Bigas </span> Arumalaca kkkkk atumalca kkkkk atumaalacaka kkkkk</h1>
              </div>
            <div class='m-8'> {/* Terceiro texto */}
              <p class='text-lg leading-8 font-bold tracking-widee font-spacefuture'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro cumque unde autem ipsum qui quam numquam totam assumenda reiciendis voluptatum nisi adipisci eligendi quod, impedit error ea nesciunt iusto!</p>
            </div>
          </div>
          <div>  {/* Img do ladod o texto */}
            <img src={atumalaca} class='w-[500px] h-[400px] animate-fade-left animate-once animate-ease-linear animate-normal animate-fill-backwards rounded-full ' />
          </div >

        </div>
        <div class='items-center flex flex-col py-20'>
          <div class='bg-[#12141d] rounded-[12px] p-[0.8rem] px-[2rem] flex justify-center items-center mb-[5rem] shadow-[0px_0px_4px_1px_rgba(20,233,86,1)]'>
            <h2 class='uppercase font-[900] text-[#14E956] text-shadow-custom'>Atumalaca 4</h2>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Main;