import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import dropdown from "../Assets/image/dropdown.png"
import search from "../Assets/image/search.png"
import axios from 'axios'

export default function CreateFieldModal({ toggleModal }) {
    const navigate = useNavigate()
    const [formError, setFormError] = useState({})
    const [isSubmit, setSubmit] = useState(false)

    const validate = (values) => {
        const errors = {}
        if (values.fieldName === "") {
            errors.fieldName = "field Name is required"
        }
        if (values.altitude === "") {
            errors.altitude = "altitude is required"
        }
        if (values.farm === "") {
            errors.farm = "select farm"
        }
        return errors
    }

    const [fieldName, setFieldName] = useState('');
    const [altitude, setAltitude] = useState('');

    const [farm, setFarm] = useState({});
    
    const [responses, setResponses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://6297e3ac8d77ad6f750a59ff.mockapi.io/api/v1/farm');
                const data = await response.json();
                setResponses(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const onsubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://63bdda61e348cb076204aebb.mockapi.io/api/v1/field', {
                fieldName,
                altitude,
                farm
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        setSubmit(true)
        setFormError(validate(fieldName, altitude, farm))
        if (Object.keys(formError).length === 0 && isSubmit) {
            navigate("/sensorPage")
        }

    }
    return (
        <div className='farmMainDiv'>
            <div className='modalContainer'>
                <header className='modalHeader'>
                    <h4>New Farm</h4>
                    <button className='cancel' onClick={toggleModal}> &times;</button>
                </header>
                <main>
                    <form onSubmit={onsubmit}>
                        <div className="mb-3">
                            <label className="form-label">Farm</label>
                            <img className='drop-down' src={dropdown} style={{ marginLeft: "-4rem" }} />
                
                            <select className="form-control" name="farm" value={farm} onChange={e => setFarm(e.target.value)} placeholder="Select Farm" >  
                            <option  value="" disabled selected>Choose Farm</option>
                            {responses.map(response => (

                                <option key={response.id}>{response.farmName}</option>
                            ))}
                            </select> 

                            {formError.farm && <p className='err'>{formError.farm}</p>}
                        </div>
                       
                        <div className="mb-3">
                            <label className="form-label">Field Name</label>
                            <input type="text" className="form-control" name="fieldName" value={fieldName} onChange={e => setFieldName(e.target.value)} placeholder="Enter field name" />
                            {formError.fieldName && <p className='err'>{formError.fieldName}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Altitude Above Sea Level</label>
                            <input type="text" className="form-control" name='altitude' value={altitude} onChange={e => setAltitude(e.target.value)} placeholder="Enter in meter" />
                            <button className='search'>
                                <img src={search} />
                            </button>
                            {formError.altitude && <p className='err'>{formError.altitude}</p>}
                        </div>

                        <button className='button'> CREATE NEW FARM</button>
                    </form>
                </main>
            </div>
        </div>
    )
}