const GiftList = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto my-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Lista de Presentes 🎁</h2>
        <p className="text-lg text-gray-600 text-center">
          Caso queira me presentear, aqui estão algumas sugestões:
        </p>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg shadow-md transition transform hover:scale-105">
            <a
              href="https://www.canecadodev.com/presente-para-programador"
              className="text-blue-600 hover:bg-blue-100 py-2 px-4 block rounded transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Camisetas ou Casaco GitHub
            </a>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md transition transform hover:scale-105">
            <a
              href="https://www.canecadodev.com/casaco-moleton-false-its-funny-because-its-true"
              className="text-blue-600 hover:bg-blue-100 py-2 px-4 block rounded transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Casaco Moleton !False it's Funny Because it's True
            </a>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md transition transform hover:scale-105">
            <a
              href="https://ambiebr.com/"
              className="text-blue-600 hover:bg-blue-100 py-2 px-4 block rounded transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fone Ambie TW01
            </a>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md transition transform hover:scale-105">
            <a
              href="https://produto.mercadolivre.com.br/MLB-2004725257-kit-ferro-de-solda-eletronica-60w-temperatura-ajustavel-8in1-_JM"
              className="text-blue-600 hover:bg-blue-100 py-2 px-4 block rounded transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kit Ferro De Solda
            </a>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md transition transform hover:scale-105">
            <a
              href="https://www.mercadolivre.com.br/micro-retifica-dremel-2050-11-stylo-110v220v/p/MLB16081564"
              className="text-blue-600 hover:bg-blue-100 py-2 px-4 block rounded transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Micro Retífica Dremel 2050-11 Stylo+ 110v/220v
            </a>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md transition transform hover:scale-105">
            <a
              href="https://produto.mercadolivre.com.br/MLB-1617193222-kit-uno-r3-iniciante-100pcs-protoboard-para-arduino-_JM"
              className="text-blue-600 hover:bg-blue-100 py-2 px-4 block rounded transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kit Uno R3 Iniciante 100pcs + Protoboard Para Arduino
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default GiftList;
  