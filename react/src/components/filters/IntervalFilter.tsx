import { EnumIntervalType } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
import { SelectFilter } from './SelectFilter';
export interface IPhylumFilterProps {

}
export function IntervalFilter(props: IPhylumFilterProps) {
    const options = getEnumKeys(EnumIntervalType)
    
    return(
        <SelectFilter label="Intervals" options={options} key={"Intervals"} selectedValue={""} />
     )
}
