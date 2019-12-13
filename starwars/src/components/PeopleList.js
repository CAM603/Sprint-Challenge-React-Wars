import React from "react";
import PersonCard from "./PersonCard"

const PeopleList = props => {
    const { changePage, people } = props;
    
    const handleChange = () => {
        changePage()
    }
    return (
        <div>
            <button onClick={handleChange}>Next Page</button>

            {people.map((personObj, index) => {
                return <PersonCard key={index}
                name={personObj.name}
                birthday={personObj.birth_year}
                films={personObj.films.length}
                />
            })}
            
            
        </div>
    )
}

export default PeopleList