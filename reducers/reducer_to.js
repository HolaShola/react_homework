const initialState = [
    ''
];

export default function to(state = initialState, action) {
    switch (action.type) {
        case 'CONVERT_TO':
            return [...state, action.payload]
        default:
            return state;
    }
}
