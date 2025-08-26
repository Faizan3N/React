import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw', backgroundColor: color }} className="w-full h-screen duration-200">
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-z-0 px-2 gap-3">
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setColor('red')}>Red</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setColor('green')}>Green</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setColor('blue')}>Blue</button>
      </div>
    </div>
  );
}

export default App
