import React from "react";
import PersonCard from "./PersonCard"

const PeopleList = props => {
    const { changePage, changePage2, people } = props;
    
    const handleChange = () => {
        changePage()
    }
    const handleChange2 = () => {
        changePage2()
    }
    return (
        <div>
            <button onClick={handleChange2}>Previous</button>
            <button onClick={handleChange}>Next</button>

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