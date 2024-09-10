import { Occurrence } from "../../common/types";
import { CladeOrderFilter, IntervalFilter } from "../filters";
import { ListPagination } from "../shared/ListPagination";
export interface IOccurrenceList {
    occurances: Occurrence[];
}

export  function OccuranceList(props: IOccurrenceList) {
    const occurances = props.occurances;
    return (
        <div className="p-4">
            <CladeOrderFilter/>
            <IntervalFilter/>
            <ListPagination data={occurances}/>
            <b className="block mb-2 text-lg"># of Occurances {occurances.length}</b>
            <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead>
                    <th>Record Type </th>
                    <th>Collection Number </th>
                    <th>Identified Name </th>
                    <th>identified Rank </th>
                    <th>identified Number </th>
                    <th>Accepted Name </th>
                    <th>Accepted Rank </th>
                    <th>Accepted Number </th>
                    <th>Early Interval </th> 
                    <th>Late Interval </th>
                    <th>Max MYA</th>
                    <th>Min MYA</th>              
                </thead>
                <tbody>
                {occurances && occurances.map((occurance: Occurrence) => (
                  <tr key={occurance.occurrenceNo}>
                    <td>{occurance.recordType}</td>
                    <td>{occurance.collectionNo}</td>
                    <td>{occurance.identifiedName}</td>
                    <td>{occurance.identifiedRank}</td>
                    <td>{occurance.identifiedNo}</td>
                    <td>{occurance.acceptedName}</td>
                    <td>{occurance.acceptedRank}</td>
                    <td>{occurance.acceptedNo}</td>
                    <td>{occurance.earlyInterval}</td>
                    <td>{occurance.lateInterval}</td>
                    <td>{occurance.maxMya}</td>
                    <td>{occurance.minMya}</td>
                   
                  </tr>
                ))}
                </tbody>
            </table>
           
        </div>
        </div>
    );
}