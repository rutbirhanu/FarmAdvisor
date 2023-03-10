import React , { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../homepageStyle.css"
import { useNavigate } from 'react-router-dom';
import scan from "../../Assets/image/scanner.png"
import dateimg from "../../Assets/image/date.png"
import info from "../../Assets/image/info.png"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import moment from "moment"


export default function SensorModal({ toggleModal }) {
    const navigate = useNavigate()
    const [date1, setDate1] = useState(moment().toDate())
    const [date2, setDate2] = useState(moment().toDate())
    const [showFirstCalendar, setShowFirstCalendar] = useState(false);
    const [showSecondCalendar, setShowSecondCalendar] = useState(false);


    
    const [values, setValues] = useState({
        serialNumber: "",
        sensorLocation: "",
        defaultGGD: "254",
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
    const onCalendar1Change = (date1) => {
        setDate1(date1);
    }
    const onCalendar2Change = (date2) => {
        setDate2(date2);
    }
    const onShowFirstCalendar = () => {
        setShowFirstCalendar(prev => !prev)
    }
   
    const validate = (values) => {
        const error = {}
        if (values.serialNumber === "") {
            error.serialNumber = "serialNumber is required"
        }
        if (values.sensorLocation === "") {
            error.sensorLocation = "sensorLocation is required"
        }
        if (values.defaultGGD === "") {
            error.defaultGGD = "defaultGGD is required"
        }
        if (values.date1 === "") {
            error.installationDate = "installation Date is required"
        }
        if (values.date2 === "") {
            error.cuttingDate = "cutting Date is required"
        }

        return error

    }

    const onSubmit = async(e) => {
        e.preventDefault()
        const formValue = {
            serialNumber: values.serialNumber,
            sensorLocation: values.sensorLocation,
            defaultGGD: values.defaultGGD,
            installationDate: values.date1,
            cuttingDate: values.date2

        };

        const response = await fetch("https://63bdda61e348cb076204aebb.mockapi.io/api/v1/sensors", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValue),
          });
      
          if (response.ok) {
            console.log("Sensor data saved successfully.");
          } else {
            console.error("Failed to save sensor data.");
          }
        setSubmit(true)
        setFormError(validate(formValue))
        if (Object.keys(formError).length === 0 && isSubmit) {
            navigate("/alertPage")

        }
       

};
    return (
        <div className='farmMainDiv'>
            <div className='modalContainer'>
                <header className='modalHeader'>
                    <h4>New Sensor</h4>
                    <button className='cancel' onClick={toggleModal}> &times;</button>
                </header>
                <main>
                    <form  onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Serial Number</label>
                            <input type="number" className="form-control" name="serialNumber" value={values.serialNumber} onChange={onchange} placeholder="Scan or enter serial number" />
                            <button className='btn-img'>
                                <img src={scan} />
                            </button>
                            {formError.serialNumber && <p className='err'>{formError.serialNumber}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sensor Location</label>
                            <input type="text" className="form-control" name='sensorLocation' value={values.sensorLocation} onChange={onchange} placeholder="Search for location" />
                            {formError.sensorLocation && <p className='err'>{formError.sensorLocation}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Default GGD</label>
                            <input type="text" className="form-control" name='defaultGGD' value={values.defaultGGD} onChange={onchange} placeholder="" />
                            <button className='btn-img'><img src={info} /></button>
                            {formError.defaultGGD && <p className='err'>{formError.defaultGGD}</p>}
                        </div>
        
                        
        <div className='mb-3'>
        <label className="form-label">Sensor Installation Date</label>
        <input
          type="date"
          className="form-control"
          name="installationDate"
          value={values.date1}
          onChange={onCalendar1Change}
          placeholder="DD/MM/YY"
        />
        {formError.installationDate && (
          <p className="err">{formError.installationDate}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Last Cutting Date At This Field</label>
        <input
          type="date"
          className="form-control"
          name="cuttingDate"
          value={values.date2}
          onChange={onCalendar1Change}
          placeholder="DD/MM/YY"
        />
        {formError.cuttingDate && (
          <p className="err">{formError.cuttingDate}</p>
        )}
      </div>


                        <button className='button'> Add New Sensor</button>
                    </form>
                </main>
            </div>
        </div>

    )
}
