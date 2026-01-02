export default function Contact() {
  return (
    <div className="text-center mt-20 px-4">
      <h2 className="text-5xl font-bold text-cyan-400">Contactez-moi</h2>
      <p className="mt-4 text-gray-300">
        N’hésitez pas à me contacter via le formulaire ci-dessous ou par email.
      </p>

      <form className="mt-8 max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Votre nom"
          className="p-3 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-cyan-400"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="p-3 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-cyan-400"
        />
        <textarea
          placeholder="Votre message"
          rows="5"
          className="p-3 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-cyan-400"
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-400 text-gray-900 font-bold py-3 rounded-md hover:bg-cyan-500 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}
