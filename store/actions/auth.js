import ActionTypes from '../constant/auth';
import { firebase, Facebook } from '../../config';
const db = firebase.firestore();
import { Constants } from 'expo-constants';

//login user 
export function authChange(user) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    var email = user.email;
                    var uid = user.uid;
                    dispatch({ type: ActionTypes.user, payload: { email: user.email, username: '' } })
                    setTimeout(() => {
                        resolve();
                    }, 3000)
                } else {
                    setTimeout(() => {
                        reject();
                    }, 3000)
                }
            });
        })
    }
}

export function register({ email, password, userName }) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((data) => {
                    db.collection('users').doc(data.user.uid).set({ email, userName, createdAt: new Date().getTime(), authType: 'email', })
                        .then(() => {
                            resolve();
                            dispatch({ type: ActionTypes.user, payload: { email: email, username: '' } })
                            console.log('Data Done******');
                        })
                        .catch((e) => {
                            console.log('Error*****', e.message);
                        })
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }
}

export function login({ email, password }) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    dispatch({ type: ActionTypes.user, payload: { email: email, username: '' } })
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }
}

export function faceBookLogin() {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            console.log('extra constant',Constants);
            // const appId = Constants.manifest.extra.facebook.appId;
            const permissions = ['public_profile', 'email','phone'];  // Permissions required, consult Facebook docs
            
            const {
              type,
              token,
            } = await Facebook.logInWithReadPermissionsAsync(
              '2834846270123290',
              {permissions}
            );
          
            switch (type) {
              case 'success': {
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                const facebookProfileData = await firebase.auth().signInAndRetrieveDataWithCredential(credential);  // Sign in with Facebook credential
                console.log('--------facebook Login Data',facebookProfileData.user.email);
                    const userData = {
                        email: facebookProfileData.user.email,
                        phone: facebookProfileData.user.phoneNumbmer ? facebookProfileData.user.phoneNumbmer : '',
                        photo: facebookProfileData.user.photoURL,
                        userName: facebookProfileData.user.displayName,
                        authType:'facebook',
                        createdAt: new Date().getTime()
                    }
                    await db.collection('users').doc(facebookProfileData.user.uid).set(userData)

                // Do something with Facebook profile data
                // OR you have subscribed to auth state change, authStateChange handler will process the profile data
                
                return resolve({type: 'success'});
              }
              case 'cancel': {
                return reject({type: 'cancel'});
              }
            }
        })
    }
}