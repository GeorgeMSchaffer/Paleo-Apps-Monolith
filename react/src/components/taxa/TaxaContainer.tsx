//[TODO] Responsible for handling data specific to Occurances
import { useSelector } from "react-redux";
import { Taxa } from "../../common/types";
import { useAppDispatch } from '../../store/hooks';
import { RootState } from "../../store/store";
import { TaxaChart } from "./TaxaChart";
import { TaxaList } from "./TaxaList";
export interface TaxaContainerProps{

}
export function TaxaContainer(props:TaxaContainerProps){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
//    const [taxas, setTaxas] = React.useState<Taxa[]>([]);
    const dispatch = useAppDispatch();
    const taxa:Taxa[] = useSelector((state:RootState)=>state.taxa) //useAppSelector((state)=>state.taxa);
//    const intervals = useAppSelector((state)=>state.intervals);

// {{
//     React.useEffect(() => {
//         console.log('Use Effect - intervals');
//                 //dispatch({type:'root/setError',payload:{message:e,type:'ERROR',stacktrace:console.trace()}});
            
//             dispatch({type:'taxa/setTaxa',payload:taxa});            

//     },[props])}}

    return (
        <>
           <h2>Taxa</h2>
            <TaxaChart taxa={taxa}/>
           <TaxaList taxas={taxa} />
       </>
        
    )
}

