import './Home.css';
import '../index.css';
import Foto from '../assets/pedro.jpeg';

function Home() {
  return (
    <section className='text-pretty font-principal mx-auto flex flex-col justify-center items-center gap-5'>
      <div className="max-w-3xl">
        <h2 className="text-2xl mb-3">
          Pedro Guidotte, 
        </h2>
        <h1 className='text-2xl mb-3'><span className='text-3xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent'>Software Engineer </span>Estudant</h1>
        <p className='mb-10'>
          Sou um desenvolvedor de software com experiência em desenvolvimento web e mobile. 
          Atualmente, trabalho com tecnologias como React, React Native, Node.js, TypeScript e GraphQL.
        </p>
      </div>
      <div>
        <img src={Foto} className='rounded-full w-2/4 mx-auto'/>
      </div>
    </section>
  );
}

export default Home;