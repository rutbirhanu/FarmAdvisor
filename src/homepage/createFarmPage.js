import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../homepage/homepageStyle.css"
import { Link, useNavigate } from 'react-router-dom';
import search from "../Assets/image/search.png"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export default function CreateFarmPage({ toggleModal }) {
//     const navigate = useNavigate()

//     const [farmName, setfarmName] = useState('');
//     const [location, setLocation] = useState('');

//     const [formError, setFormError] = useState({})
//     const [isSubmit, setSubmit] = useState(false);


//     const validate = () => {
//         const error = {}
//         if (farmName === "") {
//             error.farmName = "farm name is required"
//         }
//         if (!location) {
//             error.location = "location is required"
//         }
//         return error
//     }

//     const onsubmit = async (e) => {
//         e.preventDefault()
//         try {
//             const response = await axios.post('https://6297e3ac8d77ad6f750a59ff.mockapi.io/api/v1/farm', {
//                 farmName,
//                 location
//             });

//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }

//         setSubmit(true)

//         setFormError(validate(farmName, location))

//         if (Object.keys(formError).length === 0 && isSubmit) {
//             navigate("/selectedFarmPage")
//         }

//     }

//     useEffect(() => {
//         const ifameData = document.getElementById("iframeId")
//         const lat = 9.005401;
//         const lon = 38.763611;
//         ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
//     })
//     return (
//         <div className='farmMainDiv'>
//             <div className='modalContainer'>
//                 <header className='modalHeader'>
//                     <h4>New Farm</h4>
//                     <button className='cancel' onClick={toggleModal}> &times;</button>
//                 </header>
//                 <main>
//                     <form>
//                         <div className="mb-3">
//                             <label className="form-label">Farm Name</label>
//                             <input type="text" className="form-control" name="farmName" value={farmName} onChange={e => setfarmName(e.target.value)} placeholder="Enter farm name" required />
//                             {formError.farmName && <p className='err'>{formError.farmName}</p>}
                            
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Location</label>
//                             <input type="text" className="form-control" name='location' value={location} onChange={e => setLocation(e.target.value)} placeholder="Search for location" required />
//                             {formError.location && <p className='err'>{formError.location}</p>}

//                             <div class="invalid-feedback">
//                                 Please enter/ select location
//                             </div>
//                             <button className='search'>
//                                 <img src={search} />
//                             </button>
//                             <div>
//                                 <iframe id="iframeId" height="300rem" width="100%"></iframe>
//                             </div>

//                         </div>
//                         <Link to="/selectedFarmPage">
//                             <button className='button' onClick={onsubmit}> CREATE NEW FARM</button>
//                         </Link>
//                     </form>
//                 </main>
//             </div>
//         </div>

//     )
// }



export default function CreateFarmPage({ toggleModal }) {
    const navigate = useNavigate()

    const [farmName, setfarmName] = useState('');
    const [location, setLocation] = useState('');

    const [formError, setFormError] = useState({})
    const [isSubmit, setSubmit] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const validate = () => {
        const error = {}
        if (farmName === "") {
            error.farmName = "farm name is required"
        }
        if (!location) {
            error.location = "location is required"
        }
        return error
    }

    const onsubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        toast.info('Submitting form...', { autoClose: false });

        try {
            const response = await axios.post('https://6297e3ac8d77ad6f750a59ff.mockapi.io/api/v1/farm', {
                farmName,
                location
            });

            console.log(response.data);
            setLoading(false)
            toast.success('Form submitted successfully!');
        } catch (error) {
            console.error(error);
            setLoading(false)
            toast.error('Network error. Please try again later.');
        }

        setSubmit(true)

        setFormError(validate(farmName, location))

        if (Object.keys(formError).length === 0 && isSubmit) {
            navigate("/selectedFarmPage")
        }

    }

    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 9.005401;
        const lon = 38.763611;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return (
        <div className='farmMainDiv'>
            <div className='modalContainer'>
                <header className='modalHeader'>
                    <h4>New Farm</h4>
                    <button className='cancel' onClick={toggleModal}> &times;</button>
                </header>
                <main>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Farm Name</label>
                            <input type="text" className="form-control" name="farmName" value={farmName}  onChange={e => setfarmName(e.target.value)} placeholder="Enter farm name" required />
                             {formError.farmName && <p className='err'>{formError.farmName}</p>}
                            
                             </div>
                             <div className="mb-3">
                                 <label className="form-label">Location</label>
                                 <input type="text" className="form-control" name='location' value={location} onChange={e => setLocation(e.target.value)} placeholder="Search for location" required />
                                 {formError.location && <p className='err'>{formError.location}</p>}
     
                                 <div class="invalid-feedback">
                                     Please enter/ select location
                                 </div>
                                 <button className='search'>
                                     <img src={search} />
                                 </button>
                                 <div>
                                     <iframe id="iframeId" height="300rem" width="100%"></iframe>
                                 </div>
     
                             </div>
                             <Link to="/selectedFarmPage">
                                 <button className='button' onClick={onsubmit}> CREATE NEW FARM</button>
                             </Link>
                         </form>
                     </main>
                 </div>
             </div>
     
         )
     }
