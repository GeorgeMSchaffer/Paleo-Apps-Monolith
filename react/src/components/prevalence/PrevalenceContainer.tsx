//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import axios from "../../common/AxiosClient.ts";
import { Prevalence, PrevalenceJSON } from "../../common/types.ts";
import { PrevalencelList } from './PrevalencelList';

export function PrevalenceContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
    const [prevalenceData, setPrevalenceData] = React.useState<Prevalence[]>([]);

    async function getPrevalenceData(): Promise<Prevalence[]> {
            const response = await axios.get('/intervals');
            const data: PrevalenceJSON[] = response.data;
            
            data.map((p:PrevalenceJSON) => {
                    const record =  {
                        taxonNo: p.taxon_no,
                        taxonName: p.taxon_name,
                        taxonRank: p.taxon_rank,
                        imageNo: p.image_no,
                        numOccurances: p.num_occurances
                    }});
            }
        React.useEffect(() => {
            console.log('Use Effect - prevalences');
            (async () => {
                const data:Prevalence[] = await getPrevalenceData();
                setPrevalenceData(data);
            }
            )()

        });

    return (
        <>
           <h2>Prevelance</h2>
           <PrevalencelList prevalenceData={prevalenceData}/>
       </>
        
    )
}
