import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import store from './store/store.ts'
import { Provider } from 'react-redux'
import {Interval} from "./common/types.ts";
import './App.css'

function App() {
  const [intervals,setIntervals] = useState<Interval[]>([])
    useEffect(() => {
        fetch('http://localhost:3000/intervals')
            .then(response => response.json())
            .then(data => setIntervals(data))
            .catch((error) => {
                console.error('Error:', error);
            });

    },[])

    })
  return (
      <div>
          <b># of Intervals {intervals.length}</b>
      </div>
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
