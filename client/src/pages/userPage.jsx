import ApiQuery from "../components/ApiQuery"

export default function UserPage() {
    return (
        <div className='mx-10 my-10'>
            <h1 className='text-3xl font-bold text-center mb-8'>Type in a Pokemon Name to see its Music equivalent </h1>
            <ApiQuery />
        </div>
    )
}