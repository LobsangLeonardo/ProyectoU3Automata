import Link from 'next/link';
import React from 'react';
import './fuentesHeader.css';


const Header = () => {
    return (
        <header>
            <div className='p-4 bg-zinc-900 text-white'>
                <div className='flex justify-center items-center'>
                
                        <h1 id='titulo' className='flex-grow text-4xl mr-4 text-violet-500 '
                            style={{fontFamily:"'Bebas Neue',sans-serif"}}
                            >AFD
                        </h1>
                    <nav>
                        <ul className='flex space-x-4' style={{fontFamily:"'Oswald',sans-serif"}}>
                            <li className=' p-2 hover:bg-violet-700 transition-colors duration-300'>
                                <Link href={'/'}>Inicio</Link>
                            </li>
                            <li className='p-2 hover:bg-violet-700  transition-colors duration-300'>
                                <Link href={'/ejercicio01'}>Ejercicio 01</Link>
                            </li>
                            <li className='p-2 hover:bg-violet-700  transition-colors duration-300'>
                                <Link href={'/ejercicio02'}>Ejercicio 02</Link>
                            </li>
                            <li className='p-2 hover:bg-violet-700  transition-colors duration-300'>
                                <Link href={'/ejercicio03'}>Ejercicio 03</Link>
                            </li>
                            <li className='p-2 hover:bg-violet-700  transition-colors duration-300'>
                                <Link href={'/ejercicio04'}>Ejercicio 04</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div></div>
        </header>
    );
};

export default Header;
