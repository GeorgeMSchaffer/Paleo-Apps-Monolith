import { useEffect } from "react";
import { Diversity, Prevalence, Taxa } from "../common/types";
import { getPrevalenceData, getTaxa } from "../common/utils";
import { DiversityChart } from "../components/diversity/DiversityChart";
import PrevalenceChart from "../components/prevalence/PrevalenceChart";


export  function ChartsDemoPage(){
    let taxa:Taxa[]=[];
    //let intervals:Interval[]=[];
    let prevalences:Prevalence[]=[];
    let diversity:Diversity[]=[];

    useEffect(() => {
        (async () => {
            taxa = await getTaxa()
            prevalences = await getPrevalenceData();
        })()
        },[])
    return (
        <>
        <div className="p-4">
            <h1>Prevalence</h1>
            <PrevalenceChart prevalenceData={prevalences} />
        </div>
        <div className="p-4">
            <h1>Diversity</h1>
            <DiversityChart diversity={[]}/>
        </div>
       
        </>
    )
}
