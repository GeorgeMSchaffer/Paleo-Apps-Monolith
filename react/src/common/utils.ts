import axios from "./AxiosClient.ts";
import { Interval, IntervalJSON, Prevalence, PrevalenceJSON, Taxa, TaxaJSON } from "./types.ts";
export function getEnumKeys<
    T extends string,
    TEnumValue extends string | number,
>(enumVariable: { [key in T]: TEnumValue }) {
    return Object.keys(enumVariable) as Array<T>;
}

export async function getTaxa(): Promise<Taxa[]> {
    const response = await axios.get('/taxa/');
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

    export async function getPrevalenceData(): Promise<Prevalence[]> {
    const response = await axios.get('/prevalence/');
    const data: PrevalenceJSON[] = response.data;
    const records: Prevalence[] = [];
    data.map((p:PrevalenceJSON) => {
            const record =  {
                taxonNo: p.taxon_no,
                taxonName: p.taxon_name,
                taxonRank: p.taxon_rank,
                imageNo: p.image_no,
                numOccurances: p.num_occurances
            }
            records.push(record);
        });
        return records;
    }

    export async function getIntervals(): Promise<Interval[]> {
        const response = await axios.get('/intervals');
        const data: IntervalJSON[] = response.data;
        return data.map((interval:IntervalJSON) => {
            return {
                intervalNo: interval.interval_no,
                recordType: interval.record_type,
                intervalName: interval.interval_name,
                abbrv: interval.abbrv,
                parentNo: interval.parent_no,
                color: interval.color,
                tAge: interval.t_age,
                bAge: interval.b_age,
                referenceNo: interval.reference_no
            } as Interval;
        });
}