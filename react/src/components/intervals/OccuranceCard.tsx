import { Card} from 'react-bootstrap';
import {Occurance} from "../../common/types.ts";
export interface IOccurrenceCard {
    occurance: Occurance;
}
export default function OccuranceCard(props: IOccurrenceCard) {
    const { accepted_name, accepted_rank, early_interval, late_interval, max_ma, min_ma, identified_name, identified_rank } = props.occurance;
    return (
        <Card>
            <Card>
                <Card.Title>{accepted_name}</Card.Title>
                <Card.Header>{accepted_rank}</Card.Header>
                <Card.Body>
                    <p>Identified Name: {identified_name}</p>
                    <p>Identified Rank: {identified_rank}</p>
                    <p>Early Interval: {early_interval}</p>
                    <p>Late Interval: {late_interval}</p>
                    <p>Max Ma: {max_ma}</p>
                    <p>Min Ma: {min_ma}</p>
                </Card.Body>
            </Card>
        </Card>
    );
}