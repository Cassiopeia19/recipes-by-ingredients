import firebase from 'firebase'

const Logout = () => {
    return (window.signOut = function signOut(_e) {
      firebase
        .auth()
        .signOut()
        .then(function () {
          // Sign-out successful.
        })
        .catch(function (error) {
          // An error happened.
        });
    });
}

export default Logout;