import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import dropdown from "../image/dropdown.png"
import search from "../image/search.png"

export default function CreateFieldModal({ toggleModal }) {
    const navigate = useNavigate()
    const [formError, setFormError] = useState({})
    const [isSubmit, setSubmit] = useState(false)

    const [values, setValues] = useState({
        fieldName: "",
        altitude: "",
        farm: ""

    })

    const onchange = (e) => {
        setValues(() => ({
            ...values, [e.target.name]: e.target.value
        }))
    }

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

    const onsubmit = (e) => {
        e.preventDefault()
        const formValue = {
            fieldName: values.fieldName,
            altitude: values.altitude,
            farm:values.farm
        }
        setSubmit(true)
        setFormError(validate(formValue))
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
                            <img className='drop-down' src={dropdown} />
                            <select className="form-control" name="farm" value={values.farm} onChange={onchange} placeholder="Select Farm" >
                                <option>new</option>
                                <option>another</option>
                            </select>
                            {formError.farm && <p className='err'>{formError.farm}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Field Name</label>
                            <input type="text" className="form-control" name="fieldName" value={values.fieldName} onChange={onchange} placeholder="Enter field name" />
                            {formError.fieldName && <p className='err'>{formError.fieldName}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Altitude Above Sea Level</label>
                            <input type="text" className="form-control" name='altitude' value={values.altitude} onChange={onchange} placeholder="Enter in meter" />
                            <button className='search'>
                                <img src={search} />
                            </button>
                            {formError.altitude && <p className='err'>{formError.altitude}</p>}

                        </div>

                        <button className='button' onClick={onsubmit}> CREATE NEW FARM</button>
                    </form>
                </main>
            </div>
        </div>
    )
}
