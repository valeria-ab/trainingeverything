type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const stateCopy = {...state}
            stateCopy.collapsed = !state.collapsed
            return stateCopy
        default:
            throw new Error('Bad action type')
    }
    return state;
}