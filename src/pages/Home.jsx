import './Home.css';
import '../index.css';
import { GiHand } from "react-icons/gi";

function Home() {
  return (
    <section className='text-pretty font-principal'>
      <div>
      <h2 className="flex items-center">
          Olá, me chamo Pedro Guidotte <GiHand className="ml-2" />
        </h2>
        <h1>Software Engennier</h1>
      </div>
    </section>
  );
}

export default Home;