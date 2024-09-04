import { Taxa } from "../../common/types.ts";

interface TaxaListProps {
    taxas: Taxa[]
}

export  function TaxaList(props: TaxaListProps) {
    const taxas = props.taxas || [];
    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Taxas {taxas.length}</b>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                           <th>Taxon No</th>
                            <th>Taxon Name</th>
                            <th>Record Type</th>
                            <th>Taxon Name</th>
                            <th>Taxon Attr</th>
                            <th>Accepted No</th>
                            <th>Accepted Rank</th>
                            <th>Parent No</th>
                            <th>Reference No</th>
                            <th>Is Extant</th>
                            <th># of Occurances</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taxas && taxas.map((t:Taxa)=> {
                           
                            return (
                                <tr key={t.taxonNo}>
                                    <td>{t.taxonNo}</td>
                                    <td>{t.taxonName}</td>
                                    <td>{t.recordType}</td>
                                    <td>{t.taxonName}</td>
                                    <td>{t.taxonAttr}</td>
                                    <td>{t.acceptedNo}</td>
                                    <td>{t.acceptedRank}</td>
                                    <td>{t.parentNo}</td>
                                    <td>{t.referenceNo}</td>
                                    <td>{t.isExtant}</td>
                                    <td>{t.numOccurances}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
