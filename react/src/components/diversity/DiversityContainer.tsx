//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import axios from "../../common/AxiosClient.ts";
import { Diversity, DiversityJSON } from "../../common/types.ts";
import { DiversityList } from "./DiversityList.tsx";
export function PrevalenceContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
    const [diversity, setDiversity] = React.useState<Diversity[]>([]);

    async function getData(): Promise<Diversity[]> {
            const response = await axios.get('/intervals');
            const data: DiversityJSON[] = response.data;
            let items: Diversity[] = [];
            data.map((p:DiversityJSON) => {
                    const diversity =  {
                        intervalNo : p.interval_no,
                        intervalName : p.interval_name,
                        maxMya : p.max_mya,
                        minMya : p.min_mya,
                        xFt : p.x_Ft,
                        xBL : p.x_bL,
                        xFL : p.x_FL,
                        xBt : p.x_Bt,
                        sampledInBin : p.sampled_in_bin,
                        numOccurances : p.num_occs
                    } as Diversity; 
                        items.push(diversity);
                    })
                    return items;
            }

        React.useEffect(() => {
            console.log('Use Effect - prevalences');
            (async () => {
                const data:Diversity[] = await getData();
                setDiversity(data);
            }
            )()

        });

    return (
        <>
           <h2>Diversity</h2>
           <DiversityList diversity={diversity}/>
       </>
        
    )
}
