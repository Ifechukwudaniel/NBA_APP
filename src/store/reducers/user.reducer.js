export default UserReducer = (state ={} , action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return  {...state}
        default:
            return state
    }
}