import { DiversityChart } from "../charts/DiversityChart.tsx";
import PrevalenceChart from "../charts/PrevalenceChart.tsx";
export  function ChartsDemoPage(){
    return (
        <>
        <div className="p-4">
            <h1>Prevalence</h1>
            <PrevalenceChart />
        </div>
        <div className="p-4">
            <h1>Diversity</h1>
            <DiversityChart/>
        </div>
        </>
    )
}
