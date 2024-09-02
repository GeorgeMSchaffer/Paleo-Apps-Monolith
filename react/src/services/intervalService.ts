import {Interval} from '../common/types/interval';
import { axiosClient } from '../common/axiosClient';
export interface IInternalService {
    getIntervals(): Promise<Interval[]>;
}
export class intervalService {
    public async getIntervals(): Promise<Interval[]> {
        let intervals:Interval[] = [];
        fetch('http://localhost:12382/api/interval/')
        .then(response => response.json())
        .then(data => {
            intervals = data;
            console.log(`\r\n - IntervalService - getIntervals - data:`, data);
        })
        .catch(error => {
            console.error('Error getting intervals', error);
        })
        return intervals;
    };

}
