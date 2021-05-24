import React, { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const NewPet = () => {
    
    const [formInfo, setFormInfo] = useState({
        petName: "",
        petType: "",
        petDescription: "",
        petSkillOne: "",
        petSkillTwo: "",
        petSkillthree: "",
        petLikes: 0
    })
    
    const [errors, setErrors] = useState({})

    const changeHandler = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pets/create", formInfo)
        .then(res => {
            console.log(res)
            if(res.data.results) {
                navigate("/")
            }
            else {
                console.log(res.data)
                setErrors(res.data)
            }
        })
        .catch(err => console.log(err))
    }

    return (

        <div className="container">

            <h1>Pet Shelter</h1><br/>
            <h3>Know A Pet Needing A Good Home?</h3>

            <form onSubmit = {submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Pet Name : </label>
                    <input onChange = {changeHandler} type="text" name="petName" className="form-control"/>
                    <p className="text-danger">{errors.petName? errors.petName.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Type : </label>
                    <input onChange = {changeHandler} type="text" name="petType" className="form-control"/>
                    <p className="text-danger">{errors.petType? errors.petType.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Description : </label>
                    <input onChange = {changeHandler} type="text" name="petDescription" className="form-control"/>
                    <p className="text-danger">{errors.petDescription? errors.petDescription.message: ""}</p>
                </div><br/>
                <h3>Pet Skills (optional) :</h3>
                <div className="form-group">
                    <label htmlFor="">Pet Skill One : </label>
                    <input onChange = {changeHandler} type="text" name="petSkillOne" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Skill Two : </label>
                    <input onChange = {changeHandler} type="text" name="petSkillTwo" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Skill Three : </label>
                    <input onChange = {changeHandler} type="text" name="petSkillThree" className="form-control"/>
                </div><br/>
                <input type="submit" value="Add Pet" className="btn btn-primary"/>
            </form>
            
        </div>

    )

}

export default NewPet