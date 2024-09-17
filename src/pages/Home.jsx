import './Home.css';
import '../index.css';
import Foto from '../assets/pedro.jpeg';
import { ReactTyped } from 'react-typed';

function Home() {

  return (
    <section className='text-pretty font-principal mx-auto flex flex-col justify-center items-center gap-5'>
      <div className="max-w-3xl">
        <h2 className="text-2xl mb-3">
          Pedro Guidotte, 
        </h2>
        <h1 className='text-2xl mb-3'>
          <span className='stop text-3xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent'>
            <ReactTyped
              strings={['Software Engineer', 'Front End and React', 'Java and Spring']}
              typeSpeed={100}
              backDelay={200}
              backSpeed={100}
              loop
            /></span>
            Estudant</h1>
        <p className='mb-10'>
          Sou um estudante de Engenharia de Software na FIAP e aprofundo meus conhecimentos por conta própria em Java e Front End,
          com a ambição de me tornar um Dev Full Stack. Estou me capacitando ao máximo para aproveitar alguma oportunidade de estágio no mercado de
          trabalho. 
        </p>
      </div>
      <div>
        <img src={Foto} className='rounded-full w-2/4 mx-auto'/>
      </div>
    </section>
  );
}

export default Home;