import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const Adminlist = () => async (dispatch) => {
    try {
        const Response = await axios.get(`http://192.168.1.39:5001`);
        dispatch({
            type: "ADMIN_API",
            payload: Response.data
        })
    }
    catch (error) {
        console.log(error)
    }

}
export const AdminlistDelete = (id) => async (dispatch) => {
    try {
        const Response = await axios.delete(`http://192.168.1.39:5001/${id}`);
        dispatch({
            type: "ADMIN_API_DEL",
            payload: Response.data
        })

    }
    catch (error) {
        console.log(error)
    }

}
export const FormAdmin = (data) => async (dispatch) => {
    try {

        const Response = await axios.post(`http://192.168.1.39:5001`, data)
        dispatch({
            type: "ADMIN_API_CREATE",
            payload: Response.data
        })
    }
    catch (error) {
        console.log(error)
    }

}