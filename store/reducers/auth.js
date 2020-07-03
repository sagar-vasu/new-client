import ActionTypes from '../constant/auth';

const INITIAL_STATE = {
    user: {
        username: '',
        email: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.user:
            return ({
                ...state,
                username: action.payload.username,
                email: action.payload.email
            })
        default:
            return state;
    }

}