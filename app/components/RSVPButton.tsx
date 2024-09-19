const RSVPSection = () => {
    return (
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-xl mx-auto my-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Confirme sua Presença</h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Para confirmar sua presença, entre no grupo do WhatsApp:
        </p>
        <a
          href="https://chat.whatsapp.com/JYctsqfYlfREE81wOXkf3Q"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-400 transition-all block mx-auto text-center"
        >
          Junte-se ao Grupo do WhatsApp
        </a>
      </div>
    );
  };
  
  export default RSVPSection;
  