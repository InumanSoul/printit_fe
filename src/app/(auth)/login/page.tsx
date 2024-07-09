import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col w-96 gap-5 items-center'>
      <div className='bg-white rounded-lg shadow-sm border border-gray-300 py-2 w-full'>
        <div className='p-5'>
          <h2 className='text-2xl font-semibold mb-5 text-center'>Inicia sesión</h2>
          <form>
            <div className='mb-2 flex flex-col'>
              <label className='text-sm font-semibold text-gray-700'>Email</label>
              <input type='email' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
            </div>
            <div className='mb-2 flex flex-col'>
              <label className='text-sm font-semibold text-gray-700'>Contraseña</label>
              <input type='password' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
            </div>
            <div className='mb-2'>
              <button className='bg-pink-500 text-white rounded-lg p-2 w-full'>Iniciar sesión</button>
            </div>
            <a href='/forgot-password' className='text-pink-500 text-center mt-2'>¿Olvidaste tu contraseña?</a>
          </form>
        </div>
      </div>
      <p>¿No tienes cuenta?<a href='/register' className='text-pink-500 text-center ml-1'>Regístrate</a></p>
    </div>
  )
}

export default Login