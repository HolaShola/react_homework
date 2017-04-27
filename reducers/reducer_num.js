const initialState = [
    1
];

export default function num(state = initialState, action) {
    switch (action.type) {
        case 'SET_NUM':
            return [...state, action.payload]
        default:
            return state;
    }
}
