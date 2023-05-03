import { connect } from 'react-redux'

import AddCar from '../components/AddCar'

import { addCar } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    //returns an object that matches the key in state.js
    return {
        addCar: (car) => dispatch(addCar(car))
    }
}

// Connects the redux container to the AddCar component
export default connect(null, mapDispatchToProps)(AddCar)