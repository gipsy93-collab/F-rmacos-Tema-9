import React, { useState } from 'react';
import { GamePhase } from './types';
import ConceptMap from './components/ConceptMap';
import Simulation from './components/Simulation';
import Quiz from './components/Quiz';
import Tutor from './components/Tutor';

const App: React.FC = () => {
  const [phase, setPhase] = useState<GamePhase>(GamePhase.MENU);

  const renderContent = () => {
    switch (phase) {
      case GamePhase.MAP:
        return <ConceptMap />;
      case GamePhase.SIMULATION:
        return <Simulation />;
      case GamePhase.QUIZ:
        return <Quiz />;
      case GamePhase.TUTOR:
        return <Tutor />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <button onClick={() => setPhase(GamePhase.MAP)} className="p-8 bg-red-500 text-white rounded-3xl shadow-xl hover:bg-red-600 transform hover:-translate-y-2 transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
              <h2 className="text-2xl font-black">Mapa Mental Pareto</h2>
              <p className="opacity-90 mt-2">Entiende el 80% del tema en el 20% del tiempo.</p>
            </button>

            <button onClick={() => setPhase(GamePhase.SIMULATION)} className="p-8 bg-blue-500 text-white rounded-3xl shadow-xl hover:bg-blue-600 transform hover:-translate-y-2 transition-all group">
               <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💉</div>
              <h2 className="text-2xl font-black">Simulación Clínica</h2>
              <p className="opacity-90 mt-2">Aplica fármacos a un paciente virtual.</p>
            </button>

            <button onClick={() => setPhase(GamePhase.QUIZ)} className="p-8 bg-green-500 text-white rounded-3xl shadow-xl hover:bg-green-600 transform hover:-translate-y-2 transition-all group">
               <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h2 className="text-2xl font-black">Autoevaluación</h2>
              <p className="opacity-90 mt-2">Test gamificado para probar tu conocimiento.</p>
            </button>

            <button onClick={() => setPhase(GamePhase.TUTOR)} className="p-8 bg-teal-500 text-white rounded-3xl shadow-xl hover:bg-teal-600 transform hover:-translate-y-2 transition-all group">
               <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
              <h2 className="text-2xl font-black">Tutor IA</h2>
              <p className="opacity-90 mt-2">Pregunta y profundiza con nuestro experto.</p>
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-purple-700 font-sans selection:bg-pink-300">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setPhase(GamePhase.MENU)}
          >
            <div className="bg-white p-2 rounded-lg shadow-lg group-hover:rotate-12 transition-transform">
               💊
            </div>
            <h1 className="text-white text-2xl md:text-3xl font-black tracking-tight">Farma<span className="text-yellow-400">Kahoot</span></h1>
          </div>
          
          {phase !== GamePhase.MENU && (
             <button 
               onClick={() => setPhase(GamePhase.MENU)}
               className="bg-white text-purple-700 px-4 py-2 rounded-full font-bold shadow-md hover:bg-gray-100 transition-colors"
             >
               Menú Principal
             </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto p-4 md:p-8 h-[calc(100vh-80px)]">
         <div className="h-full w-full">
            {renderContent()}
         </div>
      </main>
    </div>
  );
};

export default App;