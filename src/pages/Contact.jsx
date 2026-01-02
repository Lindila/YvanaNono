import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-20 px-4">
      {/* Titre */}
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-4 animate-pulse">
          Contactez-moi
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          N’hésitez pas à me contacter via le formulaire ci-dessous ou directement par email / téléphone.
        </p>
      </div>

      {/* Carte contact */}
      <div className="mt-12 max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row gap-10">
        {/* Informations directes */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Mes informations</h3>
          <p className="hover:text-cyan-300 transition">
            📧 Email:{" "}
            <a href="mailto:nonoyvana92@gmail.com" className="text-cyan-400 underline">
              nonoyvana92@gmail.com
            </a>
          </p>
          <p className="hover:text-cyan-300 transition">
            📞 Téléphone:{" "}
            <a href="tel:+237677576783" className="text-cyan-400 underline">
              677576783
            </a>
          </p>
          <p className="text-gray-400 mt-6">
            Chaque soutien compte ! Votre contribution nous permet de continuer à créer des projets
            innovants et à partager notre passion pour la technologie.
          </p>
        </div>

        {/* Formulaire */}
        
<div className="flex-1 flex flex-col gap-5">
  <input
    type="text"
    placeholder="Votre nom"
    className="p-4 rounded-xl border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
  />
  <input
    type="email"
    placeholder="Votre email"
    className="p-4 rounded-xl border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
  />
  <textarea
    placeholder="Votre message"
    rows="5"
    className="p-4 rounded-xl border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
  ></textarea>

  {/* Bouton WhatsApp */}
  <a
  href="https://wa.me/237677576783?text=Je%20souhaite%20vous%20faire%20un%20d%C3%A9p%C3%B4t%20de%2015%20milles%20francs%20pour%20soutenir%20votre%20entreprise"
  target="_blank"
  rel="noopener noreferrer"
  className="text-center bg-cyan-400 text-gray-900 font-bold py-3 rounded-xl hover:bg-cyan-500 hover:scale-105 transition transform"
>
  Envoyer via WhatsApp
</a>

</div>

      </div>

      {/* Message final / don */}
      <div className="mt-16 max-w-2xl mx-auto text-center text-gray-400 text-lg">
        <p>
          Chaque petit geste compte ! Votre soutien nous permet de continuer à apprendre et
          créer des projets passionnants.
        </p>
        <p className="mt-4 text-cyan-400 font-semibold animate-pulse">
          💖 Soutenez-nous et participez à cette aventure !
        </p>
      </div>
    </div>
  );
}
