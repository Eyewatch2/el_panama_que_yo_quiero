import HeroImg from '../assets/images/HeroImg.jpg';
const Hero = () => {



  return (
    <section className='w-full pt-40 min-h-[100svh] bg-bottom bg-cover bg-fixed p-10 gap-6 text-center grid place-content-center relative'
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className='absolute bg-black/50 inset-0 w-full h-full z-10'></div>
      <h1 className='text-white z-20 leading-[20px] font-bold'><span className='md:text-[85px] text-[42px]'>El Panamá</span> <span className='block text-3xl md:text-6xl'>Que Yo Quiero</span></h1>
      <p className=' text-white z-20 text-lg md:text-xl'>Ayúdanos a comprender más de Panamá <span className='inline md:block'>completando estas encuestas</span></p>
      <a href='#encuesta1' className='text-white z-20 px-2 py-3 rounded-full w-2/3 text-xl md:text-lg md:w-1/2 mx-auto bg-primary-900/20 backdrop-blur-sm border-2 border-primary-900 hover:backdrop-blur-none hover:bg-primary-900 transition-all ease-in-out'>Comenzar</a>
    </section>
  );

}

export default Hero;
