import React from 'react'

const NotFound = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div>
        <h2 className="text-6xl text-pink-500 font-bold">
          404
        </h2>

        <div className="mt-4 mb-4">
          <p className="text-gray-500">
            La página que buscas no existe
          </p>
        </div>
          
        <a href="/customers" className="bg-pink-500 text-white rounded-lg p-2 w-full">Volver al inicio</a>
      </div>
    </div>
  )
}

export default NotFound