//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import {Interval} from "../../common/types";
import IntervalList from "./IntervalList";

export function IntervalsContainer(){
    const [intervals,setIntervals] = React.useState<Interval[]>([])
    React.useEffect(() => {
        console.log('Firing useEffect for intervals')
        fetch('/api/intervals')
            .then(response => response.json())
            .then(data => setIntervals(data))
            .catch((error) => {
                console.error('Error:', error);
                //[TODO] move errors to redux store?
                //setError(error);
            });

    }, [])

    return (
        <>
           <h2>Intervals</h2>
           <IntervalList intervals={intervals}/>
       </>
        
    )
}
