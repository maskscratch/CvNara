import React from 'react';
import { Heart, MapPin, Building2, Calendar, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen dark-gradient">
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-100">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-7xl font-bold glitch mb-8">⚡ ASTROZETA ⚡</h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-6 h-6 neon-red" />
              <h2 className="text-2xl md:text-3xl font-bold neon-cyan">
                CANDIDATO PARA: NOVIO EN PRÁCTICAS
              </h2>
              <Heart className="w-6 h-6 neon-red" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-lg font-mono">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5 neon-green" />
                <span>📍 Madrid</span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 className="w-5 h-5 neon-purple" />
                <span>🏠 Híbrido → Presencial</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold neon-red mb-12 text-center font-mono">
              ⭐ HABILIDADES DESTACADAS ⭐
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="skill-card p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="neon-green font-bold text-lg md:text-xl">🎂 EXPERIENCIA VITAL:</span>
                </div>
                <p className="text-gray-300 font-mono text-sm md:text-lg">Respirando desde 1990 (con certificado oficial de supervivencia)</p>
              </div>

              <div className="skill-card p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="neon-purple font-bold text-lg md:text-xl">🎸 SOUNDTRACK:</span>
                </div>
                <p className="text-gray-300 font-mono text-sm md:text-lg mb-3">
                  <strong className="neon-red">⚡ MAIN GENRES:</strong> Cualquier cosa que suene a punk + rock + indie
                </p>
                <p className="text-gray-300 font-mono text-sm md:text-lg">
                  <strong className="neon-cyan">🎵 SECONDARY:</strong> pop, rap, jazz, blues, swing, electrónica, metal... CASI de todo'
                </p>
              </div>

              <div className="skill-card p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="neon-orange font-bold text-lg md:text-xl">🎸 INSTRUMENTOS:</span>
                </div>
                <p className="text-gray-300 font-mono text-sm md:text-lg mb-3">
                  <strong className="neon-red">🎸 GUITARRA:</strong> Regular tirando a bien
                </p>
                <p className="text-gray-300 font-mono text-sm md:text-lg">
                  <strong className="neon-cyan">🎵 BAJO:</strong> Nivel regular (pero con ganas de mejorar)
                </p>
              </div>

              <div className="skill-card p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="neon-orange font-bold text-lg md:text-xl">🐾 HABILIDADES ESPECIALES:</span>
                </div>
                <p className="text-gray-300 font-mono text-sm md:text-lg">Imán de gatos activado - se me acercan solos (no es bug, es feature)</p>
              </div>

              <div className="skill-card p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="neon-red font-bold text-lg md:text-xl">👨‍🍳 SKILLS DE COCINA:</span>
                </div>
                <p className="text-gray-300 font-mono text-sm md:text-lg">Experto en improvisar con lo que hay en la nevera (pero no soy gran cocinero)</p>
              </div>

              <div className="skill-card p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="neon-cyan font-bold text-lg md:text-xl">🎮 GAMING:</span>
                </div>
                <p className="text-gray-300 font-mono text-sm md:text-lg">Especialista en roleplay, juegos cooperativos y aventuras compartidas</p>
              </div>

              <div className="skill-card p-4 md:p-8 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="neon-yellow font-bold text-lg md:text-xl">😄 HUMOR ABSURDO:</span>
                </div>
                <p className="text-gray-300 font-mono text-sm md:text-lg">Licenciado en juegos de palabras malísimos y situaciones surrealistas</p>
              </div>
            </div>
          </div>

          {/* Availability Section */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold neon-green mb-12 text-center font-mono flex items-center justify-center gap-3">
              <Calendar className="w-7 h-7 neon-green" />
              📅 DISPONIBILIDAD
              <Calendar className="w-7 h-7 neon-green" />
            </h3>
            <div className="skill-card p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-red-600 text-black px-6 py-4 rounded-lg text-lg font-bold border-2 border-red-400">
                    💼 LUN-MIÉ
                    <br />
                    [TRABAJO]
                  </div>
                  <span className="text-red-400 font-mono text-lg">Ganando dinero (compromisos del mundo real)</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-green-600 text-black px-6 py-4 rounded-lg text-lg font-bold border-2 border-green-400">
                    🎉 JUE-DOM
                    <br />
                    [DISPONIBLE]
                  </div>
                  <span className="text-green-400 font-mono text-lg">100% disponible para conciertos, planes y aventuras</span>
                </div>
              </div>
            </div>
          </div>

          {/* References Section */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold neon-orange mb-12 text-center font-mono flex items-center justify-center gap-3">
              <Phone className="w-7 h-7 neon-orange" />
              📋 REFERENCIAS
              <Phone className="w-7 h-7 neon-orange" />
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="skill-card p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="neon-orange font-bold text-xl">🐺 REFERENCIA CANINA</span>
                </div>
                <p className="text-gray-300 font-mono text-lg">Mi perro: (5⭐ rating, aunque ladra en las videollamadas)</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t-2 border-red-500">
            <p className="text-gray-500 text-lg font-mono">
              * Todas las habilidades verificadas por mi perro (el mejor beta tester)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;