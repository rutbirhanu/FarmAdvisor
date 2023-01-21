import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../homepageStyle.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import scan from "../../Assets/scanner.png"
import date from "../../Assets/date.png"

export default function SensorModal({ toggleModal }) {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        serialNumber: "",
        sensorLocation: "",
        defaultGGD: "",
        installationDate: "",
        cuttingDate: ""
    })
    const [formError, setFormError] = useState({})
    const [isSubmit, setSubmit] = useState(false);

    const onchange = (e) => {
        setValues(() => ({
            ...values, [e.target.name]: e.target.value
        }))
    }

    const validate = (values) => {
        const error = {}
        if (values.farmName === "") {
            error.farmName = "farm name is required"
        }
        if (!values.location) {
            error.location = "location is required"
        }
        return error

    }

    const onsubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        const formValue = {
            serialNumber: values.serialNumber,
            sensorLocation: values.sensorLocation,
            defaultGGD: values.defaultGGD,
            installationDate: values.installationDate,
            cuttingDate: values.cuttingDate

        }
        setFormError(validate(formValue))

        if (Object.keys(formError).length === 0 && isSubmit) {
            navigate("/selectedFarmPage")
        }

    }

    return (
        <div className='farmMainDiv'>
            <div className='modalContainer'>
                <header className='modalHeader'>
                    <h4>New Sensor</h4>
                    <button className='cancel' onClick={toggleModal}> &times;</button>
                </header>
                <main>
                    <form onSubmit={onsubmit} >
                        <div className="mb-3">
                            <label className="form-label">Serial Number</label>
                            <input type="text" className="form-control" name="serialNumber" value={values.serialNumber} onChange={onchange} placeholder="Scan or enter serial number" />
                            <button className='scanner'>
                                <img src={scan} />
                            </button>
                            {formError.farmName && <p className='err'>{formError.farmName}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Sensor Location</label>
                            <input type="text" className="form-control" name='sensorLocation' value={values.sensorLocation} onChange={onchange} placeholder="Search for location" />
                            {formError.location && <p className='err'>{formError.location}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Default GGD</label>
                            <input type="text" className="form-control" name='defaultGGD' value={values.defaultGGD} onChange={onchange} placeholder="" />
                            {formError.location && <p className='err'>{formError.location}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Sensor Installation Date</label>
                            <input type="text" className="form-control" name='installationDate' value={values.installationDate} onChange={onchange} placeholder="" />
                            <button className='date-img'>
                                <img src={date} />
                            </button>
                            {formError.location && <p className='err'>{formError.location}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Last Cutting Date At This Field</label>
                            <input type="date" className="form-control" name='cuttingDate' value={values.cuttingDate} onChange={onchange} placeholder="" />
                            {/* <button  className='date-img'>
                                <img src={date} />
                            </button> */}
                            {formError.location && <p className='err'>{formError.location}</p>}
                        </div>

                        <button className='button' onClick={onsubmit}> Add New Sensor</button>
                    </form>
                </main>
            </div>
        </div>
    )
}
