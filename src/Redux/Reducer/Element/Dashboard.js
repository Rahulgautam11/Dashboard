const initialState = {
    data: []
}
const DasboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADMIN_API_CREATE':
            return {
                ...state,
                data: action.payload
            }
        default: return state;
    }
}
export default DasboardReducer