import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { MainLeftColumnFilters } from './components/filters/MainLeftColumnFilters.tsx';
import { IntervalsContainer } from './components/intervals/IntervalsContainer.tsx';
import { OccuranceContainer } from './components/occurances/OccuranceContainer.tsx';
import { TaxaContainer } from './components/taxa/TaxaContainer.tsx';
import { ChartsDemoPage } from './pages/ChartsDemoPage.tsx';
import TwoColumnPage from './pages/layout/TwoColumnPage.tsx';
function App() {

    //[TODO] move error state to redux for sharing
//    const [error,setError] = useState<string>('');//[TODO] add ability to display an array of errors with an error type


  return (
    <>

        <Router>
            <Routes>
                <Route path='/' element={
                    <TwoColumnPage 
                        leftColumn={<MainLeftColumnFilters/>} 
                        rightColumn={<Welcome/>}/>} 
                    />
                <Route path='/intervals' 
                    element={<TwoColumnPage 
                        leftColumn={<MainLeftColumnFilters/>} 
                        rightColumn={<IntervalsContainer/>}/>} 
                />
                <Route path='/occurances' 
                    element={
                    <TwoColumnPage leftColumn={<MainLeftColumnFilters/>} 
                    rightColumn={<OccuranceContainer/>}/>} 
                />
                <Route path='/charts' element={
                    <TwoColumnPage leftColumn={<MainLeftColumnFilters/>} 
                    rightColumn={<ChartsDemoPage/>}/>}
                />
                <Route path='/taxa' 
                    element={<TwoColumnPage 
                        leftColumn={<MainLeftColumnFilters/>} 
                        rightColumn={<TaxaContainer/>}/>} 
                />

            </Routes>
        </Router>
        </>
  )
}

export default App

export function Welcome() {
    return <h1>Welcome</h1>
}