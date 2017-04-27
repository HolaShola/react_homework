const initialState = [
    ''
];

export default function from(state = initialState, action) {
    switch (action.type) {
        case 'CONVERT_FROM':
            return [...state, action.payload]
        default:
            return state;
    }
}
