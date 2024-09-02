import { useEffect } from "react";
import { Occurance } from "../../common/types"

export interface IOccuranceListProps {
    occurances: Occurance[];
}

export function OccuranceList(props:IOccuranceListProps) {
    const occurances = props.occurances;
    return (
        <div>
            <h1>Occurance List</h1>
            <b># of Occurances {occurances.length} </b>
        </div>
    )
}
    