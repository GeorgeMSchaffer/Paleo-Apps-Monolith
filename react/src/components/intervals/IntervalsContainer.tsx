//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import { Interval } from "../../common/types.ts";
import { getIntervals } from "../../common/utils.ts";
import IntervalList from "./IntervalList.tsx";

export function IntervalsContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store

 
    const [intervals, setIntervals] = React.useState<Interval[]>([]);
    React.useEffect(() => {
        console.log('Use Effect - intervals');
        (async () => {
            const data:Interval[] = await getIntervals();
            setIntervals(data);
                console.log('Intervals Container Use Effect - intervals', intervals)
        }
        )()

    },[])

    return (
        <>
           <h2>Intervals</h2>
           <IntervalList intervals={intervals}/>
       </>
        
    )
}
