import { IntervalFilter } from "./IntervalFilter";
import { PhylumFilter } from "./PhylumFilter";

export function MainLeftColumnFilters(){
    return (
        <>
            <IntervalFilter/>
            <PhylumFilter/>
        </>
    )
}