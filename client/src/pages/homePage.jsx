// Import React
import React from 'react';
import OAuth from '../components/OAuth';


export default function HomePage() {



    return (
        <div className="flex h-screen justify-center items-center bg-cover" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/d2/97/09/d297091ea731d847dc356549925a8460.jpg")' }}>
            <div className='text-center bg-white p-10 rounded-2xl shadow-lg max-w-3xl'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png "  // Replace with your Pokemon-themed logo
                    alt="Pokeify Logo"
                    className="mx-auto mb-4 w-1/4"
                />

                <section>
                    <h1 className="text-4xl font-bold text-yellow-700 mb-2">Welcome to Pokeify</h1>
                    <h2 className="text-lg text-gray-600 mb-4">where we turn your love for Pokemon</h2>
                    <h2 className="text-lg text-gray-600 mb-8">Into a Spotify Playlist </h2>
                </section>

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
