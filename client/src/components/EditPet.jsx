import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'

const EditPet = props => {

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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => {
            console.log(res)
            setFormInfo(res.data.results)
        })
        .catch(err => console.log(err))
    }, [props])

    const changeHandler = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, formInfo)
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
                    <input onChange = {changeHandler} type="text" name="petName" className="form-control" value={formInfo.petName}/>
                    <p className="text-danger">{errors.petName? errors.petName.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Type : </label>
                    <input onChange = {changeHandler} type="text" name="petType" className="form-control" value={formInfo.petType}/>
                    <p className="text-danger">{errors.petType? errors.petType.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Description : </label>
                    <input onChange = {changeHandler} type="text" name="petDescription" className="form-control" value={formInfo.petDescription}/>
                    <p className="text-danger">{errors.petDescription? errors.petDescription.message: ""}</p>
                </div><br/>
                <h3>Pet Skills (optional) :</h3>
                <div className="form-group">
                    <label htmlFor="">Pet Skill One : </label>
                    <input onChange = {changeHandler} type="text" name="petSkillOne" className="form-control" value={formInfo.petSkillOne}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Skill Two : </label>
                    <input onChange = {changeHandler} type="text" name="petSkillTwo" className="form-control" value={formInfo.petSkillTwo}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Skill Three : </label>
                    <input onChange = {changeHandler} type="text" name="petSkillThree" className="form-control" value={formInfo.petSkillthree}/>
                </div><br/>
                <input type="submit" value="Update Pet" className="btn btn-primary"/>
            </form>
            
        </div>

    )

}

export default EditPet