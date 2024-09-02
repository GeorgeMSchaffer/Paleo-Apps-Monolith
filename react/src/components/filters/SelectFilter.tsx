import { Form, FormSelect, FormTextProps, FormSelectProps, FormLabel } from 'react-bootstrap';
import { EnumIntervalType } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
import { ChangeEvent } from 'react';
export interface ISelectFilterProps {
    options: string[];
    label: string;
    selectedValue: string;
    onChange?: Function;
}
export function SelectFilter(props: ISelectFilterProps) {
    const {options=[],label="",selectedValue=""}  = props;
    //[TODO] event handlers like on
    const onChange = (event: ChangeEvent<HTMLSelectElement>)=>{
        //call an optional onChange callback from the parent component
        console.log(`onChange fired for select filter ${label}`);
        if(props.onChange){
            console.log("Calling parent's callback onChange")
            props.onChange(event.target.value);
        }
    }
    return (
        <>
            <FormLabel>
                {label}
            </FormLabel>
            <Form.Select onChange={(evt)=>onChange(evt)} multiple aria-label={`Filter By ${label}`}>
                {options.map(option => 
                    <option selected={option.includes(selectedValue) ? true : false } key={option} value={option}>
                        {option}
                    </option>
                )}
            </Form.Select>
        </>
    )
}
