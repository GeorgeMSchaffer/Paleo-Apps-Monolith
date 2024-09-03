import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { MainLeftColumnFilters } from './components/filters/MainLeftColumnFilters';
import { IntervalsContainer } from './components/intervals/IntervalsContainer';
import { OccuranceContainer } from './components/occurances/OccuranceContainer';
import TwoColumnPage from './pages/layout/TwoColumnPage';
function App() {

    //[TODO] move error state to redux for sharing
//    const [error,setError] = useState<string>('');//[TODO] add ability to display an array of errors with an error type


  return (
    <>
    <Router>
            <Routes>
                <Route path='/' element={<TwoColumnPage leftColumn={<MainLeftColumnFilters/>} rightColumn={<Welcome/>}/>} />
                <Route path='/intervals' element={<TwoColumnPage leftColumn={<MainLeftColumnFilters/>} rightColumn={<IntervalsContainer/>}/>} />
                <Route path='/occurances' element={<TwoColumnPage leftColumn={<MainLeftColumnFilters/>} rightColumn={<OccuranceContainer/>}/>} />
            </Routes>
        </Router>
        </>
  )
}

export default App

export function Welcome() {
    return <h1>Welcome</h1>
}