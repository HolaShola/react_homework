const initialState = [
    false
];

export default function log(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOG':
            return [...state, action.payload]
        default:
            return state;
    }
}