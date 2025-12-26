'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('inicio')

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            🎮 Canal de YouTube Geek Rentable
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Guía completa para crear, hacer crecer y monetizar tu canal de YouTube dedicado a la cultura popular y geek en 2025
          </p>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'inicio', label: '🏠 Inicio' },
            { id: 'monetizacion', label: '💰 Monetización' },
            { id: 'contenido', label: '🎬 Contenido' },
            { id: 'ingresos', label: '📊 Ingresos' },
            { id: 'estrategia', label: '🚀 Estrategia' },
            { id: 'calculadora', label: '🧮 Calculadora' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Sections */}
        <div className="space-y-8">
          {activeTab === 'inicio' && <InicioSection />}
          {activeTab === 'monetizacion' && <MonetizacionSection />}
          {activeTab === 'contenido' && <ContenidoSection />}
          {activeTab === 'ingresos' && <IngresosSection />}
          {activeTab === 'estrategia' && <EstrategiaSection />}
          {activeTab === 'calculadora' && <CalculadoraSection />}
        </div>
      </div>
    </main>
  )
}

function InicioSection() {
  return (
    <div className="space-y-6">
      <div className="card-gradient rounded-2xl p-8 card-hover">
        <h2 className="text-3xl font-bold mb-4">📌 ¿Por qué Cultura Geek y Pop?</h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            El contenido de cultura geek y popular está en auge en 2025. Aquí está todo lo que necesitas saber:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Alta demanda:</strong> Fandoms de Marvel, DC, Star Wars, anime, videojuegos y series están en constante crecimiento</li>
            <li><strong>Contenido evergreen:</strong> Los análisis y teorías permanecen relevantes durante años</li>
            <li><strong>Comunidad comprometida:</strong> Los fans son apasionados y leales</li>
            <li><strong>Múltiples formatos:</strong> Reviews, análisis, teorías, rankings, cosplay, coleccionismo</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-gradient rounded-2xl p-6 card-hover">
          <h3 className="text-2xl font-bold mb-3">✅ Ventajas</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• No necesitas mostrar tu cara</li>
            <li>• Bajo costo inicial</li>
            <li>• Contenido viral potencial</li>
            <li>• Muchas oportunidades de colaboración</li>
            <li>• Merchandising y afiliados lucrativos</li>
          </ul>
        </div>

        <div className="card-gradient rounded-2xl p-6 card-hover">
          <h3 className="text-2xl font-bold mb-3">⚠️ Desafíos</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Alta competencia</li>
            <li>• Copyright y fair use críticos</li>
            <li>• Necesitas personalidad auténtica</li>
            <li>• Contenido AI penalizado en 2025</li>
            <li>• Tendencias cambian rápidamente</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function MonetizacionSection() {
  return (
    <div className="space-y-6">
      <div className="card-gradient rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">💰 Requisitos de Monetización YouTube 2025</h2>

        <div className="space-y-6">
          <div className="bg-purple-900/30 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Nivel 1: Fan Funding (Más Fácil)</h3>
            <div className="space-y-3 text-gray-200">
              <p className="font-semibold">Acceso a Super Chat, Super Stickers, Membresías</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>500 suscriptores</strong></li>
                <li><strong>3 videos públicos</strong> en los últimos 90 días</li>
                <li><strong>3,000 horas de watch time</strong> en 12 meses<br/>
                    <span className="text-sm text-gray-400">O 3 millones de views en Shorts en 90 días</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-900/30 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-indigo-300">Nivel 2: Monetización Completa (Anuncios)</h3>
            <div className="space-y-3 text-gray-200">
              <p className="font-semibold">Acceso total a ingresos por publicidad</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>1,000 suscriptores</strong></li>
                <li><strong>4,000 horas de watch time</strong> en 12 meses<br/>
                    <span className="text-sm text-gray-400">O 10 millones de views en Shorts en 90 días</span>
                </li>
                <li><strong>Cuenta AdSense</strong> vinculada</li>
                <li><strong>2FA activado</strong></li>
                <li><strong>Sin strikes</strong> en Community Guidelines</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-300">⚡ Importante</h3>
            <ul className="space-y-2 text-gray-200">
              <li>• Las vistas de Shorts NO cuentan para las 4,000 horas de watch time</li>
              <li>• Solo contenido público cuenta</li>
              <li>• Videos sin listar o privados no suman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContenidoSection() {
  return (
    <div className="space-y-6">
      <div className="card-gradient rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">🎬 Ideas de Contenido Geek Rentable 2025</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-green-400">✅ Contenido de Alto Rendimiento</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">🎭 Análisis y Teorías</h4>
                <p className="text-gray-300 text-sm mb-2">Explicaciones profundas de tramas, easter eggs, teorías de fans</p>
                <span className="text-green-400 text-sm">RPM: $6-12 | Evergreen ⭐⭐⭐⭐⭐</span>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">🎮 Reviews y Análisis</h4>
                <p className="text-gray-300 text-sm mb-2">Críticas de películas, series, juegos, cómics</p>
                <span className="text-green-400 text-sm">RPM: $7-13 | Evergreen ⭐⭐⭐⭐</span>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">📊 Rankings y Top 10</h4>
                <p className="text-gray-300 text-sm mb-2">Mejores villanos, momentos épicos, personajes más fuertes</p>
                <span className="text-green-400 text-sm">RPM: $5-10 | Viral ⭐⭐⭐⭐⭐</span>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">🎨 Explicaciones Técnicas</h4>
                <p className="text-gray-300 text-sm mb-2">VFX, making-of, tecnología detrás de las películas</p>
                <span className="text-green-400 text-sm">RPM: $10-20 | Tech Premium ⭐⭐⭐⭐⭐</span>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">🔍 Deep Dives</h4>
                <p className="text-gray-300 text-sm mb-2">Historias completas de franquicias, líneas temporales</p>
                <span className="text-green-400 text-sm">RPM: $6-11 | Binge-watch ⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">⚠️ Contenido Moderado/Evitar</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">📰 Noticias y Rumores</h4>
                <p className="text-gray-300 text-sm mb-2">Pierde relevancia rápidamente</p>
                <span className="text-yellow-400 text-sm">RPM: $4-8 | Corta vida ⭐⭐</span>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">🎪 Reacciones Simples</h4>
                <p className="text-gray-300 text-sm mb-2">Saturado, bajo valor agregado</p>
                <span className="text-red-400 text-sm">RPM: $2-5 | Copyright ⚠️ ⭐</span>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">🤖 Contenido AI</h4>
                <p className="text-gray-300 text-sm mb-2">Penalizado por YouTube 2025</p>
                <span className="text-red-400 text-sm">Evitar | Desmonetización ❌</span>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">📺 Clips Sin Comentario</h4>
                <p className="text-gray-300 text-sm mb-2">Fair use cuestionable</p>
                <span className="text-red-400 text-sm">Copyright Strikes ❌</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-900/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 text-blue-300">💡 Fórmula de Éxito 2025</h3>
          <div className="space-y-2 text-gray-200">
            <p><strong>1. Especializate:</strong> Elige un sub-nicho (Marvel, Anime shonen, RPGs, etc.)</p>
            <p><strong>2. Agrega tu VOZ:</strong> Hot takes, análisis únicos, tu personalidad</p>
            <p><strong>3. Fair Use Correcto:</strong> Usa clips CORTOS con comentario significativo</p>
            <p><strong>4. Calidad Consistente:</strong> Audio claro, edición dinámica, miniaturas atractivas</p>
            <p><strong>5. SEO Optimizado:</strong> Títulos con keywords, descripciones detalladas</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function IngresosSection() {
  return (
    <div className="space-y-6">
      <div className="card-gradient rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">📊 Potencial de Ingresos - Contenido Geek 2025</h2>

        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">💵 CPM y RPM por Tipo de Contenido</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <div>
                  <p className="font-bold">Gaming General</p>
                  <p className="text-sm text-gray-400">Gameplays, compilaciones</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold">CPM: $5-15</p>
                  <p className="text-green-400">RPM: $4-7</p>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <div>
                  <p className="font-bold">Cultura Pop Análisis</p>
                  <p className="text-sm text-gray-400">Reviews, teorías, deep dives</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold">CPM: $8-18</p>
                  <p className="text-green-400">RPM: $6-12</p>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <div>
                  <p className="font-bold">Tech + Geek</p>
                  <p className="text-sm text-gray-400">Gadgets, VFX, tecnología</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold">CPM: $20-50</p>
                  <p className="text-green-400">RPM: $10-20</p>
                </div>
              </div>

              <div className="flex justify-between items-center pb-3">
                <div>
                  <p className="font-bold">Anime/Manga</p>
                  <p className="text-sm text-gray-400">Análisis, rankings, reviews</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold">CPM: $6-14</p>
                  <p className="text-green-400">RPM: $5-9</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-900/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3">Canal Pequeño</h4>
              <p className="text-3xl font-bold mb-2">100K views/mes</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>RPM $6: <strong className="text-green-400">$600/mes</strong></p>
                <p>RPM $10: <strong className="text-green-400">$1,000/mes</strong></p>
                <p className="text-xs text-gray-400 mt-3">+ Membresías y Super Chat</p>
              </div>
            </div>

            <div className="bg-indigo-900/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3">Canal Medio</h4>
              <p className="text-3xl font-bold mb-2">500K views/mes</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>RPM $6: <strong className="text-green-400">$3,000/mes</strong></p>
                <p>RPM $10: <strong className="text-green-400">$5,000/mes</strong></p>
                <p className="text-xs text-gray-400 mt-3">+ Patrocinios y afiliados</p>
              </div>
            </div>

            <div className="bg-blue-900/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3">Canal Grande</h4>
              <p className="text-3xl font-bold mb-2">1M+ views/mes</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>RPM $6: <strong className="text-green-400">$6,000+/mes</strong></p>
                <p>RPM $10: <strong className="text-green-400">$10,000+/mes</strong></p>
                <p className="text-xs text-gray-400 mt-3">+ Merchandising y marca</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-green-300">💰 Fuentes de Ingreso Adicionales</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-200">
              <ul className="space-y-2">
                <li><strong>Membresías de Canal:</strong> $5-50/miembro/mes</li>
                <li><strong>Super Chat/Stickers:</strong> Durante transmisiones</li>
                <li><strong>Afiliados:</strong> Amazon, tiendas geek (5-10% comisión)</li>
              </ul>
              <ul className="space-y-2">
                <li><strong>Patrocinios:</strong> $500-5,000+ por video</li>
                <li><strong>Merchandising:</strong> Diseños propios</li>
                <li><strong>Patreon:</strong> Contenido exclusivo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EstrategiaSection() {
  return (
    <div className="space-y-6">
      <div className="card-gradient rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">🚀 Estrategia de Crecimiento 2025</h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📅 Plan de Acción 0-12 Meses</h3>

            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 text-purple-300">Mes 1-3: Fundación</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>✓ Elige tu sub-nicho específico</li>
                  <li>✓ Crea branding consistente (logo, intro, outro)</li>
                  <li>✓ Publica 2-3 videos por semana</li>
                  <li>✓ Optimiza SEO (títulos, descripciones, tags)</li>
                  <li>✓ Estudia la competencia exitosa</li>
                  <li>🎯 Meta: 500 suscriptores, 3,000 horas watch time</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 text-indigo-300">Mes 4-6: Monetización Básica</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>✓ Activa Fan Funding (membresías, Super Chat)</li>
                  <li>✓ Mejora calidad de edición y audio</li>
                  <li>✓ Experimenta con formatos (Shorts + long-form)</li>
                  <li>✓ Construye comunidad (responde comentarios)</li>
                  <li>✓ Colabora con canales similares</li>
                  <li>🎯 Meta: 1,000 suscriptores, 4,000 horas watch time</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 text-blue-300">Mes 7-9: Monetización Completa</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>✓ Activa AdSense y publicidad</li>
                  <li>✓ Busca primeros patrocinios</li>
                  <li>✓ Crea playlists para aumentar watch time</li>
                  <li>✓ Analiza analytics profundamente</li>
                  <li>✓ Añade enlaces de afiliados</li>
                  <li>🎯 Meta: 5,000 suscriptores, ingresos consistentes</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 text-green-300">Mes 10-12: Escalamiento</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>✓ Diversifica contenido (series, transmisiones)</li>
                  <li>✓ Considera merchandising</li>
                  <li>✓ Construye presencia en redes sociales</li>
                  <li>✓ Reinvierte en mejor equipo</li>
                  <li>✓ Estudia posibilidad de Patreon</li>
                  <li>🎯 Meta: 10,000+ suscriptores, múltiples fuentes de ingreso</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 border border-red-600/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-red-300">❌ Errores que EVITAR</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Usar contenido AI generado sin personalidad</li>
                <li>• Copiar contenido sin agregar valor</li>
                <li>• Ignorar copyright y fair use</li>
                <li>• Publicar inconsistentemente</li>
                <li>• Descuidar miniaturas y títulos</li>
                <li>• No interactuar con tu audiencia</li>
                <li>• Perseguir todas las tendencias</li>
                <li>• Comprar suscriptores o vistas</li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-600/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-green-300">✅ Claves del Éxito</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>Autenticidad:</strong> Muestra tu pasión real</li>
                <li>• <strong>Consistencia:</strong> Horario regular de publicación</li>
                <li>• <strong>Calidad {'>'} Cantidad:</strong> 1 gran video {'>'} 3 mediocres</li>
                <li>• <strong>SEO:</strong> Investiga keywords antes de crear</li>
                <li>• <strong>Engagement:</strong> Construye comunidad leal</li>
                <li>• <strong>Análisis:</strong> Estudia qué funciona y repite</li>
                <li>• <strong>Paciencia:</strong> El crecimiento toma tiempo</li>
                <li>• <strong>Adaptación:</strong> Evoluciona con el algoritmo</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-300">🎯 Elementos Críticos para el Algoritmo 2025</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-200">
              <div>
                <h4 className="font-bold mb-2">Click-Through Rate (CTR)</h4>
                <p className="text-sm text-gray-400">Miniatura + Título llamativos</p>
                <p className="text-green-400 font-bold">Meta: 8-12%</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Watch Time</h4>
                <p className="text-sm text-gray-400">Retención alta primeros 30 seg</p>
                <p className="text-green-400 font-bold">Meta: 50%+ AVD</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Engagement</h4>
                <p className="text-sm text-gray-400">Likes, comentarios, shares</p>
                <p className="text-green-400 font-bold">Meta: 5%+ ratio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalculadoraSection() {
  const [subs, setSubs] = useState(1000)
  const [viewsPerMonth, setViewsPerMonth] = useState(50000)
  const [rpm, setRpm] = useState(8)

  const adRevenue = (viewsPerMonth / 1000) * rpm
  const memberships = Math.floor(subs * 0.02) * 5 // 2% se hacen miembros a $5
  const affiliates = viewsPerMonth * 0.001 * 10 // 0.1% conversión a $10 promedio
  const totalMonthly = adRevenue + memberships + affiliates

  return (
    <div className="space-y-6">
      <div className="card-gradient rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">🧮 Calculadora de Ingresos Potenciales</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Suscriptores</label>
              <input
                type="number"
                value={subs}
                onChange={(e) => setSubs(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
                min="0"
              />
              <input
                type="range"
                value={subs}
                onChange={(e) => setSubs(Number(e.target.value))}
                min="100"
                max="100000"
                step="100"
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Views por Mes</label>
              <input
                type="number"
                value={viewsPerMonth}
                onChange={(e) => setViewsPerMonth(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
                min="0"
              />
              <input
                type="range"
                value={viewsPerMonth}
                onChange={(e) => setViewsPerMonth(Number(e.target.value))}
                min="1000"
                max="1000000"
                step="1000"
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">RPM Estimado ($)</label>
              <select
                value={rpm}
                onChange={(e) => setRpm(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
              >
                <option value="4">$4 - Gaming Basic</option>
                <option value="6">$6 - Pop Culture</option>
                <option value="8">$8 - Análisis Geek</option>
                <option value="10">$10 - Contenido Premium</option>
                <option value="15">$15 - Tech Geek</option>
                <option value="20">$20 - Tech Premium</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">💰 Ingresos Mensuales Estimados</h3>

              <div className="space-y-4">
                <div className="border-b border-gray-600 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">AdSense (Anuncios)</span>
                    <span className="text-2xl font-bold text-green-400">${adRevenue.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {viewsPerMonth.toLocaleString()} views × ${rpm} RPM
                  </p>
                </div>

                <div className="border-b border-gray-600 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Membresías</span>
                    <span className="text-2xl font-bold text-blue-400">${memberships.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    ~{Math.floor(subs * 0.02)} miembros a $5/mes
                  </p>
                </div>

                <div className="border-b border-gray-600 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Afiliados</span>
                    <span className="text-2xl font-bold text-purple-400">${affiliates.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Estimado 0.1% conversión
                  </p>
                </div>

                <div className="bg-yellow-500/20 rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total Mensual</span>
                    <span className="text-3xl font-bold text-yellow-300">${totalMonthly.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    Anual: <strong className="text-yellow-300">${(totalMonthly * 12).toFixed(2)}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-600/50 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <strong>Nota:</strong> Esta es una estimación conservadora. Los ingresos reales pueden variar según:
              </p>
              <ul className="text-xs text-gray-400 mt-2 space-y-1">
                <li>• Ubicación geográfica de tu audiencia</li>
                <li>• Estacionalidad y tendencias</li>
                <li>• Patrocinios adicionales ($500-$5,000+ por video)</li>
                <li>• Merchandising y productos propios</li>
                <li>• Super Chat durante transmisiones</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">🎯 Escenarios de Crecimiento</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-bold text-purple-300 mb-2">Inicio (3-6 meses)</h4>
              <p className="text-2xl font-bold mb-1">{subs.toLocaleString()}</p>
              <p className="text-sm text-gray-400">suscriptores</p>
              <p className="text-green-400 font-bold mt-2">${totalMonthly.toFixed(0)}/mes</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-bold text-indigo-300 mb-2">Crecimiento (6-12 meses)</h4>
              <p className="text-2xl font-bold mb-1">{(subs * 5).toLocaleString()}</p>
              <p className="text-sm text-gray-400">suscriptores</p>
              <p className="text-green-400 font-bold mt-2">${(totalMonthly * 5).toFixed(0)}/mes</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-bold text-pink-300 mb-2">Establecido (12+ meses)</h4>
              <p className="text-2xl font-bold mb-1">{(subs * 10).toLocaleString()}</p>
              <p className="text-sm text-gray-400">suscriptores</p>
              <p className="text-green-400 font-bold mt-2">${(totalMonthly * 10).toFixed(0)}/mes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
