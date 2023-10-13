import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Adminlist, AdminlistDelete } from '../../Redux/Action'

import './Style.scss'
import { useNavigate, useNavigation } from 'react-router'

const AdminList = () => {
    const dispatch = useDispatch()

    const { adminValue } = useSelector((state) => {
        return {
            adminValue: state.Admin.data,
        }
    })
    // console.log(adminValue, '99999')


    const HandleDelete = (id) => {
        // console.log(id)
        dispatch(AdminlistDelete(id))
    }

    useEffect(() => {
        dispatch(Adminlist())
    }, [])


    return (
        <div className='admin_list_container'>

            {
                adminValue.map((item, key) => {
                    return (
                        <div className="card" key={key}>
                            <h1>name : {item.name}</h1>
                            <p>Address :{item.city}</p>
                            <p>Number :{item.contact}</p>
                            <button onClick={() => HandleDelete(item._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminList