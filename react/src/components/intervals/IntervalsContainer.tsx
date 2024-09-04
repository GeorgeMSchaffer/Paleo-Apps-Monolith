//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import {Interval,JSONInterval} from "../../common/types";
import IntervalList from "./IntervalList";
import {intervalsService} from "../../services/intervalService.ts";
import axios from "../../common/AxiosClient.ts";

export function IntervalsContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store

    async function getIntervals(): Promise<Interval[]> {
            const response = await axios.get('/intervals');
            const data: JSONInterval[] = response.data;
        return data.map((interval:JSONInterval) => {
            return {
                intervalNo: interval.interval_no,
                recordType: interval.record_type,
                intervalName: interval.interval_name,
                abbrv: interval.abbrv,
                parentNo: interval.parent_no,
                color: interval.color,
                tAge: interval.tAge,
                bAge: interval.bAge,
                referenceNo: interval.reference_no
            }
        });
    }
    const [intervals, setIntervals] = React.useState<Interval[]>([]);
    React.useEffect(() => {
        console.log('Use Effect - intervals');
        (async () => {
            const data:Interval[] = await getIntervals();
            setIntervals(data);
                console.log('Intervals Container Use Effect - intervals', intervals)
        }
        )()

    })

    return (
        <>
           <h2>Intervals</h2>
           <IntervalList intervals={intervals}/>
       </>
        
    )
}
