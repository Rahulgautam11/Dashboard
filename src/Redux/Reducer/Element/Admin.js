const initialState = {
    data: []
}
export const Admin = (state = initialState, action) => {
    switch (action.type) {
        case 'ADMIN_API':
            return {
                ...state,
                data: action.payload
            }
        case 'ADMIN_API_DEL':
            let DeleteData = state?.data?.filter((e) => e._id !== action.payload._id)

            console.log(state.data, "data")
            console.log(action.payload._id, "action.payload")
            console.log(DeleteData, "DeleteData")

            return {
                ...state,
                data: DeleteData,

            }
        default: return state;
    }
}
// export const AdminDel = (state = initialState, action) => {


//     switch (action.type) {
//         case 'ADMIN_API_DEL':
//             // let DeleteData = data?.filter((e) => e !== action.payload)

//             console.log(state.data, "data")
//             console.log(action.payload, "action.payload")
//             return {
//                 ...state,
//                 // data: DeleteData,

//             }
//         default: return state;
//     }
// }
