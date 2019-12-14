import React from 'react';
import axios from 'axios';

//Styles
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';


const PersonCard = props => {
    
    const { name, birthday, films, gender, starships, vehicles, species } = props;
    
    console.log(species)
    return (
        <>
        <br/>
            <Card inverse color="secondary">
            <CardHeader>{name}</CardHeader>
            <CardBody>
                <CardText>Birthday: {birthday}</CardText>
                <CardText>Films: {films}</CardText>
                <CardText>Gender: {gender}</CardText>
                <CardText>Starships: {starships}</CardText>
                <CardText>Vehicles: {vehicles}</CardText>
            </CardBody>
            </Card>
        <br/>
        </>
    )
}

export default PersonCard;