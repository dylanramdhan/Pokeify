import ApiQuery from "../components/ApiQuery"

export default function UserPage() {
    return (
        <div className='mx-20 my-20' class="bg-red-200">
            <img
                    src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png"  
                    alt="Spotify Logo"
                    className="mx-auto border-t-6 mb-2 object-scale-down h-20 w-20"
                />
            <h1 className='text-3xl font-bold text-center mb-6'>Type in a Pokémon name to see its music equivalent!</h1>
            <ApiQuery />
        </div>
    )
}