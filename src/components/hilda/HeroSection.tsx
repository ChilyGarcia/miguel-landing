import { useState } from "react";
import AddContactModal from "../AddContactModalButton";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const handleAddContact = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-between p-12 md:p-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-16 z-10 max-w-7xl w-full mx-auto">
        <div className="flex-1 flex justify-center items-center relative order-1 md:order-2 min-h-[400px] md:min-h-[500px] z-10 overflow-visible">
          <img
            src={`${import.meta.env.BASE_URL}miguel.png`}
            alt="Miguel-hernandez"
            className="w-[280px] md:w-[400px] h-auto relative z-[15] left-[6%] md:left-[10%]"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 75%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          />
        </div>

        <div className="text-white flex-1 order-2 md:order-1 text-center md:text-left mt-4 md:mt-0">
          <p className="text-sm mb-4 text-white opacity-90">
            <span style={{ color: "#004AAD" }}>CEO en Cerebiia</span>
          </p>
          <h1 className="text-5xl md:text-6xl font-Codec mb-4 leading-tight">
            Miguel Hernandez
          </h1>

          <p className="text-lg leading-relaxed max-w-xl opacity-95 mx-auto md:mx-0">
            Soy Miguel Hernández, CEO de CEREBIIA. Estoy en el mundo startup
            construyendo soluciones con datos e inteligencia artificial. Con el
            equipo, no solo hacemos tecnología: inspiramos transformación con
            humanidad. Creo en
          </p>
        </div>
      </div>

      <div className="text-center text-white text-lg z-10 opacity-90 flex flex-col items-center w-full md:w-2/5 mx-auto">
        <p className="pt-8 md:pt-12">
          Liderazgo con propósito: combinamos visión financiera, transformación
          digital y compromiso con el ecosistema tecnológico para impulsar un
          crecimiento sostenible e inclusivo.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full md:w-auto">
          <button
            onClick={handleAddContact}
            className="bg-gradient-to-br from-cyan-500 to-cyan-400 border-none px-8 md:px-16 py-3 text-xl font-semibold rounded-full cursor-pointer shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 w-full md:w-auto whitespace-nowrap"
            style={{ color: "#004AAD" }}
          >
            Añadir Contacto
          </button>
        </div>
      </div>

      {showModal && (
        <AddContactModal
          contact={{
            name: "Miguel Hernandez",
            phone: "+57 313 8488257",
          }}
          onClose={handleCloseModal}
        />
      )}

      <img
        src={`${import.meta.env.BASE_URL}cuadro1.png`}
        alt=""
        className="absolute w-24 md:w-32 h-24 md:h-32 top-[5%] md:top-[8%] left-[5%] md:left-[54%] z-0 animate-float opacity-80"
      />
      <img
        src={`${import.meta.env.BASE_URL}cuadro2.png`}
        alt=""
        className="absolute w-24 md:w-32 h-24 md:h-32 top-[3%] md:top-[6%] right-0 md:right-0 z-0 animate-float animation-delay-500 opacity-80"
      />
      <img
        src={`${import.meta.env.BASE_URL}cuadro3.png`}
        alt=""
        className="absolute w-20 md:w-28 h-20 md:h-28 top-[25%] md:top-1/2 right-[2%] md:right-[5%] z-0 animate-float animation-delay-1000 opacity-80"
      />
      <img
        src={`${import.meta.env.BASE_URL}cuadro4.png`}
        alt=""
        className="absolute w-16 md:w-28 h-16 md:h-28 top-[12%] md:top-[25%] left-[60%] md:left-[58%] z-0 animate-float animation-delay-1500 opacity-80"
      />
      <img
        src={`${import.meta.env.BASE_URL}cuadro5.png`}
        alt=""
        className="absolute w-20 md:w-32 h-20 md:h-32 md:top-[50%] top-[20%] md:bottom-[-5%] left-[5%] md:left-[52%] z-0 animate-float animation-delay-2000 opacity-80"
      />
    </div>
  );
}
