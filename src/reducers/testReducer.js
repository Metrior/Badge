import {
    SEND_FORM_DATA_PENDING,
    SEND_FORM_DATA_REJECTED,
    SEND_FORM_DATA_SUCCESS
} from '../ACTION_TYPES';

const initialState = {
    pending: false,
    success: false,
    rejected: false,
    users: []
}

export default function createUserReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_FORM_DATA_PENDING:
            return {
                ...state,
                pending: false

            }
        case SEND_FORM_DATA_REJECTED:
            return {
                ...state,
                pending: false,
                rejected: false

            }
        case SEND_FORM_DATA_SUCCESS:
            return {
                ...state,
                success: true,
                pending: false,
                users: state.users.concat(action.payload)
            }
        default: {
            return state;
        }

    }
}