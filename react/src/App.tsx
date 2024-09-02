import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import store from './store/store.ts'
import { Provider } from 'react-redux'
import {Interval} from "./common/types.ts";
import './App.css'
import IntervalList from "./components/intervals/IntervalList.tsx";

function App() {
  const [intervals,setIntervals] = useState<Interval[]>([])
    //[TODO] move error state to redux for sharing
    const [error,setError] = useState<string>('');//[TODO] add ability to display an array of errors with an error type
    useEffect(() => {
        console.log('Firing useEffect')
        fetch('http://localhost:3000/intervals')
            .then(response => response.json())
            .then(data => setIntervals(data))
            .catch((error) => {
                console.error('Error:', error);
                setError(error);
            });

    },[])

  return (
      <>
      {error.length && (
          <div color={'red'}>
              <h1>Error</h1>
              <p>{error}</p>
          </div>
      )}
     <IntervalList intervals={intervals} />
      </>
    // <Provider store={store}>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </Provider>
  )
}

export default App
