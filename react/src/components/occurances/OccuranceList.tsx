import { Occurance } from "../../common/types.ts";
export interface IOccurrenceList {
    occurances: Occurance[];
}
export  function OccuranceList(props: IOccurrenceList) {
    const occurances = props.occurances;
    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead>
                <th>
                    <tr>occurrence no</tr>
                    <tr>record type</tr>
                    <tr>collection no</tr>
                    <tr>identified name</tr>
                    <tr>identified rank</tr>
                    <tr>identified no</tr>
                    <tr>accepted name</tr>
                    <tr>accepted rank</tr>
                    <tr>accepted no</tr>
                    <tr>early interval</tr>
                    <tr>late interval</tr>
                    <tr>max ma</tr>
                    <tr>min ma</tr>
                    <tr>reference no</tr>
                    <tr>cc</tr>
                    <tr>latlng basis</tr>
                    <tr>latlng precision</tr>
                    <tr>geogscale</tr>
                    <tr>phylum</tr>
                    <tr>cladeClass,</tr>
                    <tr>cladeOrder</tr>
                    <tr>family</tr>
                    <tr>genus</tr>
                </th>
                </thead>
                <tbody>
                {occurances && occurances.map((occurance: Occurance) => (
                   <div>
                    {occurance.occurrenceNo}
                   </div>
                ))}
                </tbody>
            </table>
        </div>
    );
}