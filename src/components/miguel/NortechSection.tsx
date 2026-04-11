export default function NortechSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Imagen */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            {/* Glow decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#9b6cf8] to-[#b89dfa] rounded-3xl blur-2xl opacity-30" />
            {/* Badge de premio */}
            <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-br from-[#9b6cf8] to-[#7c4de8] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1">
              🏆 Premio Icontec
            </div>
            <img
              src={`${import.meta.env.BASE_URL}consejo.jpeg`}
              alt="Miguel Hernandez - Liderazgo Distrito Nortech"
              className="relative z-10 w-full max-w-[380px] md:max-w-[440px] h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          {/* Etiqueta */}
          <span className="inline-block bg-gradient-to-r from-[#9b6cf8] to-[#b89dfa] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Impacto Social &amp; Tecnológico
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Liderando el{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b6cf8] to-[#7c4de8]">
              Distrito Nortech
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Miguel Hernandez encabeza la comunidad tecnológica del Distrito
            Nortech, un ecosistema de innovación social que conecta el talento
            tech con el desarrollo humano y territorial. Su liderazgo impulsó a
            la comunidad a ganar reconocimiento nacional por sus iniciativas de
            impacto social a través de la tecnología.
          </p>

          {/* Items de logros */}
          <div className="flex flex-col gap-4">
            {[
              "Gestión de comunidades tech con impacto social",
              "Premio nacional por innovación social y tecnológica",
              "Articulación de ecosistemas públicos y privados",
              "Formación y mentoría de talentos emergentes",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#9b6cf8] to-[#7c4de8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-purple-300">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-base leading-relaxed m-0">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
