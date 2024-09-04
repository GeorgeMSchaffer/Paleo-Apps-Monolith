import { Interval } from "../../common/types.js";

interface IntervalListProps {
    intervals: Interval[]
}

export default function IntervalList(props: IntervalListProps) {
    const intervals = props.intervals || [];
    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Intervals {intervals.length}</b>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Interval Number</th>
                            <th>Interval Name</th>
                            <th>Abbreviation</th>
                            <th>Record Type</th>
                            <th>Top Age</th>
                            <th>Base Age</th>
                            <th>Reference Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {intervals && intervals.map((interval) => {
                            const {intervalNo,recordType,intervalName,abbrv,tAge,bAge,referenceNo} = interval;
                            return (
                                <tr key={intervalNo}>
                                    <td>{JSON.stringify(interval)}</td>
                                    <td>{intervalNo}</td>
                                    <td>{intervalName}</td>
                                    <td>{abbrv}</td>
                                    <td>{recordType}</td>
                                    <td>{tAge}</td>
                                    <td>{bAge}</td>
                                    <td>{referenceNo}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
