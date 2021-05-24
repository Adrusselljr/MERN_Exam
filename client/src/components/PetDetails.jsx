import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const PetDetails = props => {

    const [details, setDetails] = useState({})
    const [addLikeClick, setAddLikeClick] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => {
            console.log(res)
            setDetails(res.data.results)
        })
        .catch(err => console.log(err))
    }, [props])

    const adoptPet = () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    const addLike = (e, pet) => {
        setAddLikeClick(addLikeClick + 1)
        pet.petLikes += 1
        axios.put(`http://localhost:8000/api/pets/update/${pet._id}`, pet)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (

        <div className="container">
            <h1>{details.petName}</h1><br/>
            <h3>Pet Type : {details.petType}</h3><br/>
            <p>Pet Description : {details.petDescription}</p>
            <p>Pet Skills (optional) : </p>
            <p>{details.petSkillOne}</p>
            <p>{details.petSkillTwo}</p>
            <p>{details.petSkillThree}</p><br/>
            <h5>Likes : {details.petLikes}</h5><br/>
            <button onClick = {(e) => addLike(e, details)} className="btn btn-dark mr-2">Like {details.petName}</button>
            <button onClick = {adoptPet} className="btn btn-danger ml-2">Adopt Pet</button>
        </div>

    )

}

export default PetDetails