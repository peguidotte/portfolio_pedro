import {
  RiWhatsappFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="flex flex-col font-principal gap-3 justify-center items-center md:justify-around md:flex-row mt-20 md:mt-40">
        <h2 className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent font-semibold text-base">
          Design e site criado por Pedro Guidotte
        </h2>
        <div className="mt-2 flex gap-4 text-3xl">
          <a href="https://wa.me/5511970951316" target="_blank"><RiWhatsappFill className="text-green-600"/></a>
          <a href="https://github.com/peguidotte/" target="_blank"><RiGithubFill className="text-gray-800"/></a>
          <a href="https://www.linkedin.com/in/pedro-guidotte/" target="_blank"><RiLinkedinBoxFill className="text-blue-700"/></a>
          <a href="mailto:peguidotte@gmail.com" target="_blank"><RiMailFill className="text-red-500"/></a>
        </div>
        <h2 className="text-sm font-medium">Copyright © 2024</h2>
      </div>
    </>
  );
}

export default Footer;
