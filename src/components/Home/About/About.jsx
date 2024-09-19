import './About.css';
import Foto from '../../../assets/pedro.jpeg';
import { ReactTyped } from 'react-typed';
import Lottie from 'react-lottie';
import animationData from '../../../assets/BorderAnimation.json';

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section className='text-pretty font-principal lg:px-20 xl:px-36 flex flex-col lg:flex-row justify-center items-center'>
      <div className="md:max-w-2xl lg:max-w-xl xl:max-w-2xl">
        <h2 className=" text-xl sm:text-2xl mb-3">
          Pedro Guidotte,
        </h2>
        <h1 className='text-xl sm:text-2xl mb-3'>
          <span className='text-xl sm:text-2xl md:text-4xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent'>
            <ReactTyped
              strings={['Software Engineer', 'Front End and React', 'Java and Spring']}
              typeSpeed={100}
              backDelay={200}
              backSpeed={100}
              loop
            /></span>
          Student</h1>
        <p className='mb-5 text-balance'>
          Sou um estudante de Engenharia de Software na FIAP e aprofundo meus conhecimentos por conta própria em Java e Front End,
          com a ambição de me tornar um Dev Full Stack. Estou me capacitando ao máximo para aproveitar alguma oportunidade de estágio no mercado de
          trabalho.
        </p>
      </div>
      <div className="container">
        <Lottie options={defaultOptions} className="background-element" />
        <img src={Foto} className="foreground-element" />
      </div>
    </section>
  );
}

export default About;