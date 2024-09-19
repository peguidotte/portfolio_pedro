import { FaJs, FaPython, FaJava, FaReact, FaBootstrap, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiSpringboot, SiCsharp, SiTailwindcss } from 'react-icons/si';
import Skill from './ItemSkill'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



function Skills() {
    const skillsData = [
        { icon: FaJs, name: 'JavaScript' },
        { icon: FaReact, name: 'React' },
        { icon: FaCss3Alt, name: 'CSS3' },
        { icon: FaSass, name: 'Sass' },
        { icon: SiTailwindcss, name: 'Tailwind' },
        { icon: FaBootstrap, name: 'Bootstrap' },
        { icon: FaPython, name: 'Python' },
        { icon: FaJava, name: 'Java' },
        { icon: SiSpringboot, name: 'SpringBoot' },
        { icon: SiCsharp, name: 'C#' },
    ];

    const skill_items = skillsData.map((skill, index) => (
        <Skill key={index} icon={skill.icon} name={skill.name} />
    ));

    return (
        <div className='px-8 md:px-14 lg:px-20 xl:px-36'>
            <div className="font-principal text-xl sm:text-3xl bg-gradient-to-r from-orange-400 from-1% via-red-500 via-5% to-pink-600 to-20% bg-clip-text text-transparent">
                Skills:
            </div>
            <ul className="mt-5 sm:mt-10 mb-10 flex justify-center space-x-4">
                <AliceCarousel
                    items={skill_items}
                    autoPlay
                    autoPlayInterval={1000}
                    infinite
                    disableButtonsControls
                    disableDotsControls
                    responsive={{
                        0: { items: 5 },
                        600: { items: 6 },
                        1100: { items: 9 },
                    }}
                />
            </ul>
        </div>
    );
}

export default Skills;