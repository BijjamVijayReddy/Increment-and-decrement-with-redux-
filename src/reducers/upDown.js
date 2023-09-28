
// Reducer:"Reducer is the Pure Function that accepts the current State and action as the aruguments and returns the new state"

const initalState = 0;

export const changeTheNumber = (state = initalState, action) => {

    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state

    }

}

export default changeTheNumber;