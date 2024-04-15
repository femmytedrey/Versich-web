import * as actionType from "../actions/types"

const initialState = {
    isLoading: true,
}

const authVerifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_VERIFICATION_FULFILLED:
            return { isLoading: false }
        case actionType.AUTH_VERIFICATION_FAILED:
            return { isLoading: false }
        default:
            return state
    }
}
export default authVerifyReducer