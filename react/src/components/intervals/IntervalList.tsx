import {
    type MRT_ColumnDef
} from 'material-react-table';
import { Interval } from "../../common/types.js";
import { MuiVirtualTable } from '../shared/MuiVirtualTable';
interface IntervalListProps {
    intervals: Interval[]
}

export default function IntervalList(props: IntervalListProps) {
    const intervals = props.intervals || [];
    const columns : MRT_ColumnDef<Interval>[] =[
        { accessorKey: 'intervalNo', header: 'Interval Number' },
        { accessorKey: 'intervalName', header: 'Interval Name' },
        { accessorKey: 'abbrv', header: 'Abbreviation' },
        { accessorKey: 'recordType', header: 'Record Type' },
        { accessorKey: 'tAge', header: 'Top Age' },
        { accessorKey: 'bAge', header: 'Base Age' },
        { accessorKey: 'referenceNo', header: 'Reference Number' }
    ];
    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Intervals {intervals.length}</b>
            <div className="table-responsive">
                <MuiVirtualTable
                    columns={columns}
                    data={intervals}
                    // muiTablePaperProps={{
                    //     sx: {
                    //         height: '100%',
                    //         maxHeight: '100%',
                    //     },
                    // }}
                />
            </div>
        </div>
    );
    
}
