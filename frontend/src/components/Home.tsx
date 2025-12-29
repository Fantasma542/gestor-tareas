import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-blue-200">
        <div className="text-center p-8 bg-white rounded shadow-lg">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a tu gestor de tareas</h1>
          <p className="text-lg mb-6">
            Organiza tus tareas diarias, crea listas y mantente al día con tus objetivos.
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            onClick={() => navigate('/tasks')}
          >
            Comenzar
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
