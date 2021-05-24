import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

const AllPets = () => {

    const [allPets, setAllPets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res => {
            console.log(res)
            setAllPets(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    return (

        <div>

                <h1>Pet Shelter</h1><br/>
                <h3>These Pets Are Looking For A Good Home :</h3><br/>
                {
                    allPets.map((pet, idx) => {

                        return <div key={idx} className="card">
                            <div className="card-body">
                                <h4 className="card-title">Name : {pet.petName}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Pet Type : {pet.petType}</h6>
                                <p>{pet.petDescription}</p>
                                <Link className="btn btn-dark mr-2" to={`/pets/edit/${pet._id}`}>Edit</Link>
                                <Link className="btn btn-dark ml-2" to={`/pets/details/${pet._id}`}>Details</Link>
                            </div>
                        </div>

                    })
                }

        </div>

    )

}

export default AllPets