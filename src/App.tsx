import React from 'react';
import { Heart, MapPin, Building2, Calendar, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen dark-gradient py-8">
      <div className="max-w-4xl mx-auto bg-black border-2 border-gray-800 shadow-2xl">
        <div className="px-8 py-6 text-gray-100">
          {/* Header */}
          <div className="text-center mb-8 border-b-2 border-red-500 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold glitch mb-4">⚡ ASTROZETA ⚡</h1>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-6 h-6 neon-red" />
              <h2 className="text-2xl font-bold neon-cyan">
                CANDIDATO PARA: NOVIO EN PRÁCTICAS
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-base font-mono">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5 neon-green" />
                <span>📍 Madrid</span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 className="w-5 h-5 neon-purple" />
                <span>🏠 Modalidad: Inicialmente híbrido; futuro presencial</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold neon-red mb-6 flex items-center gap-2 font-mono">
              ⭐ HABILIDADES DESTACADAS ⭐
            </h3>
            <div className="space-y-4">
              <div className="skill-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="neon-green font-bold text-lg">🎂 EXPERIENCIA VITAL:</span>
                </div>
                <p className="text-gray-300 font-mono">Respirando desde 1990 (con certificado oficial de supervivencia)</p>
              </div>

              <div className="skill-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="neon-purple font-bold text-lg">🎸 SOUNDTRACK:</span>
                </div>
                <p className="text-gray-300 font-mono mb-2">
                  <strong className="neon-red">⚡ MAIN GENRES:</strong> Cualquier cosa que suene a punk + rock + indie
                </p>
                <p className="text-gray-300 font-mono">
                  <strong className="neon-cyan">🎵 SECONDARY:</strong> pop, rap, jazz, blues, swing, electrónica, metal... CASI de todo'
                </p>
              </div>

              <div className="skill-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="neon-orange font-bold text-lg">🎸 INSTRUMENTOS:</span>
                </div>
                <p className="text-gray-300 font-mono mb-2">
                  <strong className="neon-red">🎸 GUITARRA:</strong> Regular tirando a bien
                </p>
                <p className="text-gray-300 font-mono">
                  <strong className="neon-cyan">🎵 BAJO:</strong> Nivel regular (pero con ganas de mejorar)
                </p>
              </div>

              <div className="skill-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="neon-orange font-bold text-lg">🐾 HABILIDADES ESPECIALES:</span>
                </div>
                <p className="text-gray-300 font-mono">Imán de gatos activado - se me acercan solos (no es bug, es feature)</p>
              </div>

              <div className="skill-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="neon-red font-bold text-lg">👨‍🍳 SKILLS DE COCINA:</span>
                </div>
                <p className="text-gray-300 font-mono">Experto en improvisar con lo que hay en la nevera (pero no soy gran cocinero)</p>
              </div>

              <div className="skill-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="neon-cyan font-bold text-lg">🎮 GAMING:</span>
                </div>
                <p className="text-gray-300 font-mono">Especialista en roleplay, juegos cooperativos y aventuras compartidas</p>
              </div>

              <div className="skill-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="neon-yellow font-bold text-lg">😄 HUMOR ABSURDO:</span>
                </div>
                <p className="text-gray-300 font-mono">Licenciado en juegos de palabras malísimos y situaciones surrealistas</p>
              </div>
            </div>
          </div>

          {/* Availability Section */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold neon-green mb-6 flex items-center gap-2 font-mono">
              <Calendar className="w-7 h-7 neon-green" />
              📅 DISPONIBILIDAD
            </h3>
            <div className="terminal-style p-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-black px-4 py-2 rounded text-sm font-bold border border-red-400">
                    💼 LUN-MIÉ [TRABAJO]
                  </div>
                  <span className="text-green-400 font-mono">Ganando dinero (compromisos del mundo real)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-black px-4 py-2 rounded text-sm font-bold border border-green-400">
                    🎉 JUE-DOM [DISPONIBLE]
                  </div>
                  <span className="text-green-400 font-mono">100% disponible para conciertos, planes y aventuras</span>
                </div>
              </div>
            </div>
          </div>

          {/* References Section */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold neon-orange mb-6 flex items-center gap-2 font-mono">
              <Phone className="w-7 h-7 neon-orange" />
              📋 REFERENCIAS
            </h3>
            <div className="space-y-4">
              <div className="reference-card p-6 border-orange-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="neon-orange font-bold text-lg">🐺 REFERENCIA CANINA</span>
                </div>
                <p className="text-gray-300 font-mono">Mi perro: (5⭐ rating, aunque ladra en las videollamadas)</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-red-500">
            <p className="text-gray-500 text-xs mt-2 font-mono">
              * Todas las habilidades verificadas por mi perro (el mejor beta tester)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;