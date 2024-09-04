//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import { TaxaChart } from "../../charts/TaxaChart.tsx";
import axios from "../../common/AxiosClient.ts";
import { Taxa, TaxaJSON } from "../../common/types.ts";
import { TaxaList } from "./TaxaList.tsx";
export function TaxaContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
    const [taxas, setTaxas] = React.useState<Taxa[]>([]);
    
    async function getTaxa(): Promise<Taxa[]> {
        const response = await axios.get('/intervals');
        const data: TaxaJSON[] = response.data;
        const taxas:Taxa[] = [];
        //[TODO] Should build a util function that take the Entity and it's JSON and handle the mapping on well... maps
            data.map((t:TaxaJSON) => {
                        const taxa =  {
                            taxonNo: t.taxon_no,
                            recordType: t.record_type,
                            taxonRank: t.taxon_rank,
                            taxonName: t.taxon_name,
                            taxonAttr: t.taxon_attr,
                            acceptedNo: t.accepted_no,
                            acceptedRank: t.accepted_rank,
                            acceptedName: t.accepted_name,
                            parentNo: t.parent_no,
                            referenceNo: t.reference_no,
                            isExtant: t.is_extant,
                            numOccurances: t.n_occs,

                        } as Taxa;
                        taxas.push(taxa);
        })
        return taxas;
    }

    React.useEffect(() => {
        console.log('Use Effect - intervals');
        (async () => {
            const taxas:Taxa[] = await getTaxa();
            setTaxas(taxas);
        }
        )()

    })

    return (
        <>
           <h2>Taxa</h2>
              <TaxaChart taxa={taxas}/>
           <TaxaList taxas={taxas} />
       </>
        
    )
}

