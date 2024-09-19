import { useEffect, useState } from 'react';

const Header = () => {
  const [balloonPosition, setBalloonPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloonPosition(balloonPosition => (balloonPosition === 0 ? -10 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-10 overflow-hidden">
      <h1 className="text-5xl font-extrabold animate-bounce">🎉 Festa de Aniversário 🎉</h1>

    </header>
  );
};

export default Header;
