import app from '../../../base'

const Logout = () => {
    return (
        app.auth().signOut()
    )
}

export default Logout;