import React from "react"
import { Occurance } from "../../common/types";
import { OccuranceList } from "./OccuranceList";
export interface IOccuranceContainerProps{

}
export function OccuranceContainer(props:IOccuranceContainerProps){
    let occurances:Occurance[] = [];
    React.useEffect(()=>{
        fetch('/local/occurances')
        .then(response=>response.json())
        .then((data)=>occurances = data)
    })
    return (<div>
        <b># of occurances: {occurances.length}</b>
            <OccuranceList occurances={occurances} />
    </div>)
}
