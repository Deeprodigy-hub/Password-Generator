import React, { useState } from 'react'

const PassGen = () => {

    const [letterCount, setLetterCount] = useState(0);
    const [symbolCount, setSymbolCount] = useState(0);
    const [numberCount, setNumberCount] = useState(0);
    const [password, setPassword] = useState('');
    

    const handleGeneratePassword = (e)=>{

      e.preventDefault();

      const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const symbols = '!@#$%&*()';
      const numbers = '0123456789';

      let password = '';

      for (let i = 0; i < letterCount; i++) {
        password += letters[Math.floor(Math.random() * letters.length)];
      }
      for (let i = 0; i < symbolCount; i++) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
      }
      for (let i = 0; i < numberCount; i++ ) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
      }

      password = password.split('').sort(()=> Math.random() -0.5).join('');

      setPassword(password);

    };


  return (
    <div className='container w-auto py-6 flex flex-col m-auto mt-20 items-center rounded  bg-slate-600 '>
      <h2 className='text-2xl  p-3 font-medium' >Password Generator</h2>
      <form className='flex flex-col gap-3'>
        <label className='flex flex-col'>
            Number Of Letters:
          <input 
            className='w-40 rounded '
            type='number'
            onChange={(e)=> setLetterCount(e.target.valueAsNumber)}
          />
        </label>
        <br/>
        <label className='flex flex-col'>
            Number Of Symbols:
          <input 
            className='w-40 border-none rounded '
            type='number'
            onChange={(e)=> setSymbolCount(e.target.valueAsNumber)}
          />
        </label>
        <br/>
        <label className='flex flex-col '>
            Number Of number:
          <input 
            className='w-40 rounded '
            type='number'
            onChange={(e)=> setNumberCount(e.target.valueAsNumber)}
          />
        </label>
        <br/>
        <button className='bg-slate-900 rounded  w-20 items-center text-slate-300 justify-center' onClick={handleGeneratePassword}>Generate</button>
      </form>
      <p className='text-1xl font-medium gap-4 p-2'>Hey your password is: <span className='text-slate-950 bg-slate-400 p-2 rounded'>{password}</span></p>
    </div>
  )
}

export default PassGen