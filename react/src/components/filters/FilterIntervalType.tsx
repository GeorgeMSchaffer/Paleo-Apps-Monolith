import { Form,FormSelect,FormTextProps,FormSelectProps, FormLabel }  from 'react-bootstrap';
import { EnumPhylums } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
export interface IPhylumFilterProps {

}
export function PhylumFilter(props: IPhylumFilterProps) {
    const options = getEnumKeys(EnumPhylums)
    
    return(
    <>
        <FormLabel>
            Phyla
        </FormLabel>
        <Form.Select multiple aria-label='Filter by Phylum'>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </Form.Select>
    </>
    )
}
