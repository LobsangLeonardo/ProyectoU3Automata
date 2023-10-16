'use client';
import React, { useState } from 'react';


const Page = () => {
    const [palabra, setPalabra] = useState('');
    const [resultado, setResultado] = useState('');

    const matriz = [
        [1, 2],   
        [1, 1],   
        [2, 2]    
    ];
    
    const analizar = () => {
        let estado = 0;

        for (const char of palabra) {
            if (char === '0') {
                estado = matriz[estado][0];
            } else if (char === '1') {
                estado = matriz[estado][1];
            } else {
                estado = 2;  
                break;
            }
        }

        if (estado === 0 || estado === 1) {
            setResultado('Cadena aceptada ✅.');
        } else {
            setResultado('Cadena no aceptada ❌.');
        }
    };
    
    const limpiar = () => {
      setPalabra('');
      setResultado('');
    };

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div id='ejerc'>
                <h1 className='text-center p-5 text-2xl text-violet-500' 
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    Automata Finito Determinista: 02
                </h1>
            </div>

      <p className='text-center'>
        Un DFA que acepta todas las cadenas que inicien con 0 y rechaze las que inicien con 1.
      </p>
            <div className='p-3 text-center'>
                <input
                    id='expresionValor'
                    type='text'
                    className='border-2 border-violet-600 p-2 w-80 bg-zinc-900'
                    placeholder='Coloca la entrada'
                    style={{ borderRadius: 10 }}
                    value={palabra}
                    onChange={(e) => setPalabra(e.target.value)}
                />
            </div>

            <div className='p-10 text-center'>
                <button
                    onClick={analizar}
                    className='border-2 border-violet-700 bg-violet-700 
                    hover:bg-violet-800 px-20 p-1.5 -scroll-mb-1'
                    style={{ borderRadius: 10, fontFamily: "'Bebas Neue', sans-serif" }}
                    >Probar
                </button>

                <button
                    onClick={limpiar}
                    className='border-2 border-violet-700 bg-violet-700 hover-bg-violet-800 px-20 p-1.5 -scroll-mb-1'
                    style={{ marginLeft: '1rem', borderRadius: 10, fontFamily: "'Bebas Neue', sans-serif" }}
                    >Limpiar
                </button>
            </div>

            {resultado && (
                <div className='p-10 text-center'>
                    <p>Resultado: {resultado}</p>
                </div>
            )}
        </div>
    );
};

export default Page;

