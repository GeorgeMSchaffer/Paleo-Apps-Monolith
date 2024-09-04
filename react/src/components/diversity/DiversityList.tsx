import { Diversity } from "../../common/types.ts";

export interface DiversityListProps {
    diversity: Diversity[]
}

export  function DiversityList(props: DiversityListProps) {
    const data = props.diversity || [];
    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Records {data.length}</b>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Interval Number</th>
                            <th>Interval Name</th>
                            <th>MYA Minimum</th>
                            <th>MYA Maximum</th>
                            <th>Number of Occurances</th>
                            <th>X_Ft": 0</th>
                            <th>X_bL": 2</th>
                            <th>X_FL": 3</th>
                            <th>X_bt": 9</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((p) => {
                            return (
                                <tr key={p.intervalNo}>
                                    <td>{p.intervalName}</td>                                    
                                    <td>{p.minMya}</td>
                                    <td>{p.maxMya}</td>
                                    <td>{p.xFt}</td>
                                    <td>{p.xBL}</td>
                                    <td>{p.xFL}</td>
                                    <td>{p.xBt}</td>
                                    <td>{p.numOccurances}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
