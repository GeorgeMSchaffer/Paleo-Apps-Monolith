import { Interval } from "../../common/types";
interface IntervalListProps {
    intervals: Interval[]
}

export default function IntervalList(props: IntervalListProps) {
    const { intervals } = props;

    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Intervals {intervals.length}</b>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Interval Name</th>
                            <th>Abbreviation</th>
                            <th>Record Type</th>
                            <th>Top Age</th>
                            <th>Base Age</th>
                            <th>Reference Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {intervals && intervals.map((interval: Interval) => (
                            <tr key={interval.id}>
                                <td>{interval.intervalName}</td>
                                <td>{interval.abbrv}</td>
                                <td>{interval.recordType}</td>
                                <td>{interval.tAge}</td>
                                <td>{interval.bAge}</td>
                                <td>{interval.referenceNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
