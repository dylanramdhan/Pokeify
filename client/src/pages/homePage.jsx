// Import React
import React from 'react';
import OAuth from '../components/OAuth';


export default function HomePage() {



    return (
        <div className="flex h-screen justify-center items-center bg-cover" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/8a/81/ec/8a81ecd8fdd266b3221da325875c0ea8.gif")' }}>
            <div className='text-center bg-white p-10 rounded-2xl shadow-lg max-w-3xl'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png "  // Replace with your Pokemon-themed logo
                    alt="Pokeify Logo"
                    className="mx-auto mb-4 w-1/4"
                />

                <section>
                    <h1 className="text-4xl font-bold text-blue-900 mb-2">Welcome to Pokeify!</h1>
                    <h2 className="text-lg text-gray-600 italic mb-2">where we turn your love for Pokémon...</h2>
                    <h2 className="text-2xl text-green-600 mb-4 ">Into a Spotify Playlist.</h2>
                </section>

                <img
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWp0b3pvangzZzV5dGVwYWJ2b3NoM2hvOTJ3aWdzY2FrdnR2cmIwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VFMMOVLcYBYzDha0JX/giphy.gif"  
                    alt="Spotify Logo"
                    className="mx-auto mb-4 object-scale-down h-10 w-10"
                />

                <section>
                    <h1 className="text-xl font-bold text-yellow-700 mb-2">To Get Started, Please Sign in with your Google Account: </h1>
                    <button className="mt-2 text-white font-bold py-2 px-4 rounded-full">
                        <OAuth></OAuth>
                    </button>

                </section>
            </div>
        </div >
    );
}
