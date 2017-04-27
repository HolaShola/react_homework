import {
    SET_NUM,
    CONVERT_FROM,
    CONVERT_TO,
    SET_LOG
} from '../constants/const';

const initialState = {
    log: false,
    converters: [
        {
            num: 0,
            from: '',
            to: '',
            time: ''
        }
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_NUM:
            return {
                ...state,
                converters: [
                    ...state.converters,
                    {
                        num: action.payload,
                        from: state.converters[state.converters.length - 1].from,
                        to: state.converters[state.converters.length - 1].to,
                        time: (new Date()).toLocaleString()
                    }
                ]
            }
        case CONVERT_FROM:
            return {
               ...state,
               converters: [
                   ...state.converters,
                   {
                       num: state.converters[state.converters.length - 1].num,
                       from: action.payload,
                       to: state.converters[state.converters.length - 1].to,
                       time: (new Date()).toLocaleString()
                   }
               ]
           }
        case CONVERT_TO:
            return {
                ...state,
                converters: [
                    ...state.converters,
                    {
                        num: state.converters[state.converters.length - 1].num,
                        from: state.converters[state.converters.length - 1].from,
                        to: action.payload,
                        time: (new Date()).toLocaleString()
                    }
                ]
            }
        case SET_LOG:
            return {
                ...state,
                log: action.payload
            }
        default:
            return state;
    }
}
