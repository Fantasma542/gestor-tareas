import React from 'react';

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white py-32">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-bold mb-4">Bienvenido a tu gestor de tareas</h2>
        <p className="text-lg mb-8">Organiza tus tareas diarias, crea listas y mantente al día con tus objetivos.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Comenzar
        </button>
      </div>
    </section>
  );
};

export default Home;