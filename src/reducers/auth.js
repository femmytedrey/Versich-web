import * as actionType from "../actions/types"

const initialState = {
    isAuthenticated: false,
    user: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH:
            return { isAuthenticated: true, user: action?.data?.payload }
        case actionType.LOGOUT:
            return initialState
        default:
            return state
    }
}
export default authReducer