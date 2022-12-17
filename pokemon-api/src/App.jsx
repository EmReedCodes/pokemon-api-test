import { useState, useEffect, useReducer } from "react"
import "./App.css"

//need loading state
//error state
//empty state
//disabled form while fetching

const initialState = {
  loading: false,
  error: "",
  post: {},
  success: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
        success: true,
      }
    case "FETCH_ERROR":
      return {
        loading: false,
        post: "",
        error: "Something went wrong",
        success: false
      }
    case "LOADING":
      return {
        loading: true,
        post: "",
        error: "",
        success: false
      }
    case "RESET":
      return initialState
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [search, setSearch] = useState("")

  const getPokemon = async e => {
    e.preventDefault()
    try {
      dispatch({ type: "LOADING" })
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      const data = await response.json()
      console.log(data)
      dispatch({ type: "FETCH_SUCCESS", payload: data })
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" })
    }
  }

  const resetState = () => {
    setSearch('')
      dispatch({ type: "RESET" })
  }

  return (
    <div className="App w-full h-screen bg-gradient-to-b from-yellow-200 to-yellow-600"> {state.error && 
        <div role="alert">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Error</div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Something went wrong. Please try again.</p>
          </div>
       </div>
        
      }
      <form className="flex flex-col pt-8 gap-4 items-center">
        <input
          disabled={state.loading}
          type="search"
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
          className="border rounded-3xl p-2"
          placeholder="Search your pokemon..."
        />
        <div className="flex gap-4">
        <button onClick={getPokemon} type="submit" className="border p-2 bg-yellow-300  w-fit">
          Search
        </button>
        <button onClick={() => resetState()} type="button" className="border p-2 bg-yellow-300  w-fit">
          Reset
        </button></div>

     
      
      {state.loading &&
        <div role="status">
           <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-amber-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" height="200px" width="200px">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      }
      </form>
      {state.success && <PokemonData pokemon={state.post}></PokemonData> }
    </div>
  )
}

const PokemonData = (pokemon) => {
  return <div>
    <h2 className="text-white text-3xl">{pokemon.name}</h2>
    
  </div>
}

export default App
