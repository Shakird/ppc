
export default function Button() {
    return( 
    <button onClick={() => window.location.reload(false)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
    </button>
    )
}
