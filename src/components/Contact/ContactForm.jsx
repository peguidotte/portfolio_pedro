import { useState } from 'react';
import PropTypes from 'prop-types';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email, message);

    setSuccessMessage('Enviado com sucesso!');

    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col px-6 w-full max-w-lg xl:max-w-4xl">
      <h2 className="text-2xl text-center font-semibold my-10 sm:text-3xl xl:text-4xl xl:my-20">Ou contate-me por aqui!</h2>
      {successMessage && (
        <div className="mb-4 text-green-500 font-bold">
          {successMessage}
        </div>
      )}
      <div className="mb-4 xl:mb-10">
        <label className="block text-orange-400 text-lg font-bold mb-2 xl:text-2xl" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder='Seu nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400"
          required
        />
      </div>
      <div className="mb-4 xl:mb-10">
        <label className="block text-red-500 text-lg font-bold mb-2 xl:text-2xl" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder='seuemail@mail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-red-500"
          required
        />
      </div>
      <div className="mb-4 xl:mb-10">
        <label className="block text-pink-600 text-lg font-bold mb-2 xl:text-2xl" htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          value={message}
          placeholder='Envie um feedback, sugestão, crítica ou proposta!'
          onChange={(e) => setMessage(e.target.value)}
          className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-pink-600"
          rows="5"
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="self-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-white font-bold py-2 px-6 rounded-2xl focus:outline-none focus:shadow-outline focus:px-8 hover:px-8 xl:text-2xl"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default ContactForm;