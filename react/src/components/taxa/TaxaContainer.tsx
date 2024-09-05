//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import { Taxa } from "../../common/types.ts";
import { getTaxa } from "../../common/utils.ts";
import { TaxaChart } from "./TaxaChart.tsx";
import { TaxaList } from "./TaxaList.tsx";

export interface TaxaContainerProps{

}
export function TaxaContainer(props:TaxaContainerProps){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
    const [taxas, setTaxas] = React.useState<Taxa[]>([]);
    
   
{{
    React.useEffect(() => {
        console.log('Use Effect - intervals');
        if(taxas.length){
            console.log('Taxa Container Use Effect - already has taxas', taxas)
            return;
        }
        (async () => {
            const taxas:Taxa[] = await getTaxa();
            setTaxas(taxas);
        }
        )()

    },[props])}}

    return (
        <>
           <h2>Taxa</h2>
            <TaxaChart taxa={taxas}/>
           <TaxaList taxas={taxas} />
       </>
        
    )
}

