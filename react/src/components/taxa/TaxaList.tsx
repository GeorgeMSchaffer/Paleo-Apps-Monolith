import { Taxa } from '@/common/types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FixedSizeGrid as Grid } from 'react-window';

interface TaxaListProps {
    taxas: Taxa[];
}

const Cell = ({ columnIndex, rowIndex, style, data }) => {
    const item = data[rowIndex];
    const columns = [
        'taxonNo', 'taxonName', 'recordType', 'taxonName', 'taxonAttr', 
        'acceptedNo', 'acceptedRank', 'parentNo', 'referenceNo', 'isExtant', 'numOccurances'
    ];
    const columnKey = columns[columnIndex];
    return (
        <div style={style} className="table-cell">
            {item[columnKey]}
        </div>
    );
};

export function TaxaList(props: TaxaListProps) {
    const data = props.taxas || [];
    const columnCount = 11; // Number of columns
    const rowCount = data.length; // Number of rows

    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Taxas {data.length}</b>
            <div className="table-responsive">
                <div className="table table-striped table-bordered">
                    <div className="table-header">
                        <div className="table-row">
                            <div className="table-cell">Taxon No</div>
                            <div className="table-cell">Taxon Name</div>
                            <div className="table-cell">Record Type</div>
                            <div className="table-cell">Taxon Name</div>
                            <div className="table-cell">Taxon Attr</div>
                            <div className="table-cell">Accepted No</div>
                            <div className="table-cell">Accepted Rank</div>
                            <div className="table-cell">Parent No</div>
                            <div className="table-cell">Reference No</div>
                            <div className="table-cell">Is Extant</div>
                            <div className="table-cell"># of Occurrences</div>
                        </div>
                    </div>
                    <Grid
                        columnCount={columnCount}
                        columnWidth={150}
                        height={400}
                        rowCount={rowCount}
                        rowHeight={35}
                        width={150 * columnCount}
                        itemData={data}
                    >
                        {Cell}
                    </Grid>
                </div>
            </div>
        </div>
    );
}