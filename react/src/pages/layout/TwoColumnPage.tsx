import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
export interface ITwoColumnPageProps {
   // leftColumn: React.ReactNode;
    rightColumn: React.ReactNode
}
export function TwoColumnPage(props: ITwoColumnPageProps) {
    const errors = useAppSelector((state) => state.root.errors);
    const { rightColumn } = props;
    const navLinkStyle = {
        margin: 3,
        padding: 3,
        border: '1px solid #ccc',
        textAlign: 'center' as const,
        "&:hover": {
          background: "#ccc"
        },
        "&:last-child": {
        borderRight: "solid 1px #cccccc"
        }
        
    }
    return (
        <Container fluid style={{border: '1px solid red'}}>


            <Container fluid style={{marginBottom:5}}>
            <Snackbar open={errors?.length ? true : false}>
               
        <Alert  severity="error"><b>Errors:</b>{JSON.stringify(errors)}</Alert>
    </Snackbar>
                <Row xs={12} style={{paddingTop:5,paddingBottom:5}}>
                <Col>Paleo Data Viewer</Col>
                </Row>
                <Row>

                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/">Home</NavLink>
                </Col>
                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/intervals">
                        Intervals
                    </NavLink>
                </Col>
                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/occurrences">
                        Occurrences
                    </NavLink>
                </Col>
                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/taxa">Taxa</NavLink>
                </Col>
                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/charts">All Charts</NavLink>
                </Col>
   
                </Row>
            </Container>
            <Container fluid={true} style={{border:'1px solid black'}}>
                <Row>
                    <Col>{rightColumn}</Col>
                {/* <Col style={{border:'1px solid black'}} md={3}>{leftColumn}</Col>
                <Col md={9}>
                    {rightColumn}
                </Col> */}
                </Row>
            </Container>
        </Container>
    )
};

export default TwoColumnPage;