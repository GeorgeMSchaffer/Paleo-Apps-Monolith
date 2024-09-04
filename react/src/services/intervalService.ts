import axios from '../common/AxiosClient';
import { Interval, IntervalJSON } from '../common/types.ts';
export interface IInternalService {
    getIntervals(): Promise<Interval[]>;
}
//[TODO] Might consider a static class to hold the methods
export class intervalsService {
    async getIntervals(): Promise<Interval[]> {
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
                tAge: interval.tAge,
                bAge: interval.bAge,
                referenceNo: interval.reference_no
            }
        });
    }

}
