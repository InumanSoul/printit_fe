import React from 'react'

const Login = () => {
  return (
    <div className='bg-white rounded-lg shadow-sm border border-gray-300 py-2 w-96'>
      <div className='p-5'>
        <h2 className='text-2xl font-semibold mb-5 text-center'>Olvidaste tu contraseña</h2>
        <form>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Email</label>
            <input type='email' className='border border-gray-300 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2'>
            <button className='bg-pink-500 text-white rounded-lg p-2 w-full'>Enviar link de recuperación</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login