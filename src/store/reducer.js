
const initialState = {
    counter: 5
};

export default (state = initialState, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: ++state.counter
        }
    }
    return state;
}