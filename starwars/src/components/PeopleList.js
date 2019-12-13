import React, { useState, useEffect } from "react";
import PersonCard from "./PersonCard";
import axios from "axios";
// Styles
import {ButtonGroup, Button } from "reactstrap";
import styled from 'styled-components';
import './StarWars.css';

const MyCardBody = styled.div`
    min-height: 1px;
    padding: 1.25rem;
    width: 400px;
    
`;

const PeopleList = props => {
    const { nextPage, previousPage, people } = props;

    const handleNextPage = () => {
        nextPage()
    }
    const handlePreviousPage = () => {
        previousPage()
    }
    
    const arr = people.map(person => {
        return person.species[0]
    })


    return (
        <>
            <ButtonGroup>
                <Button color="danger" onClick={handlePreviousPage}>Back</Button>
                <Button color="primary" onClick={handleNextPage}>Next</Button>
            </ButtonGroup>
        <div className="cardContainer">
        <MyCardBody>
            
            {people.map((personObj, index) => {
                let species = personObj.species[0]
                
                return <PersonCard
                key={index}
                species={species}
                name={personObj.name}
                birthday={personObj.birth_year}
                films={personObj.films.length}
                gender={personObj.gender}
                starships={personObj.starships.length}
                vehicles={personObj.vehicles.length}
                />
            })}
            
        </MyCardBody>
        </div>
        </>
    )
}

export default PeopleList