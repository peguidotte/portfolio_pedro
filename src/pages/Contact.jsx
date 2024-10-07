import { FaGithub, FaLinkedin, FaPerson } from "react-icons/fa6";
import ContactForm from '../components/Contact/ContactForm.jsx';
import SocialLink from '../components/Contact/SocialLink.jsx';

function Contact() {
  const handleFormSubmit = (name, email, message) => {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
  };

  return (
    <div className="flex flex-col items-center font-principal gap-10 mt-10 sm:mt-20">
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 xl:gap-20 xl:text-xl">
        <SocialLink href="/assets/Resume.pdf" icon={FaPerson} label="Currículo" />
        <SocialLink href="https://github.com/peguidotte" icon={FaGithub} label="GitHub" />
        <SocialLink href="https://linkedin.com/in/pedro-guidotte" icon={FaLinkedin} label="Linkedin" />
      </div>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default Contact;