import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Style.scss'
import { FormAdmin } from '../../Redux/Action';
import { Link } from 'react-router-dom';

const FormComponent = () => {
    const dispatch = useDispatch()
    // const [submit, setSubmit] = useState(false)

    let data = {
        name: '',
        city: '',
        contact: ''
    }

    const [errors, setErrors] = useState(data);
    const [inputdata, setinputdata] = useState(data)
    const HandleInput = (e) => {
        setinputdata({ ...inputdata, [e.target.name]: e.target.value })
    }
    const HandleForm = () => {
        dispatch(FormAdmin(inputdata))
        setinputdata(data)
    }

    console.log(inputdata, '23')

    return (
        <div className="formComntainer">
            <label>Name</label>
            <input type="text" placeholder="Enter the Name" name='name' value={inputdata.name} onChange={HandleInput} />
            <label>city</label>
            <input type="text" placeholder="Enter the city" name='city' value={inputdata.city} onChange={HandleInput} />
            <label>number</label>
            <input type="number" placeholder="Enter the number" name='contact' value={inputdata.contact} onChange={HandleInput} />
            <button onClick={() => HandleForm()}>Submit</button>
            <Link to={'/admin-list'}>Admin</Link>
        </div>
    )
}
export default FormComponent;