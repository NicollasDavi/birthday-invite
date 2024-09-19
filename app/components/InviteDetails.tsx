const InviteDetails = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto my-10 space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">Você está Convidado!</h2>
        <p className="text-xl text-gray-700 text-center">
          Bora aproveitar um churrasquinho top! A festa vai ser no estilo americano: você pode trazer sua carne e bebida, ou mandar 20 reais no Pix do Nick (07886436903).
        </p>
        <div className="flex flex-col items-center space-y-4 text-lg font-medium text-gray-600">
          <div>
            <span className="block">📅 <strong>Data:</strong> 05 de outubro</span>
          </div>
          <div>
            <span className="block">🕒 <strong>Horário:</strong> A partir das 10h, até sabe Deus que horas!</span>
          </div>
          <div>
            <span className="block">📍 <strong>Local:</strong> Condomínio Vida Bella | Rua Abel Scuissiato, 2829 - Colombo, PR</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default InviteDetails;
  