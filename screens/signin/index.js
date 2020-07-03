import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { login,faceBookLogin } from '../../store/actions/auth';
import { Input, Button, Avatar,Image } from 'react-native-elements';
import { primaryColor } from '../../constants/color';
const { width, height } = Dimensions.get('window');
const bgImage = require('../../assets/bg.png');
const logoImage = require('../../assets/logo.png');

function Signin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [loader, setLoader] = useState(false);
    const [isSignin, setSignin] = useState(false);

    useEffect(() => {
        _getData();
    }, [])

    const _getData = () => {
        props.navigation.addListener('didFocus', () => {
            console.log('propsnavigate', props.navigation)
            const isCheck = props.navigation.getParam('check');
            if (isCheck) {
                setCheck(isCheck);
            }
        });
    }

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }

    const _signin = async () => {
        try {
            if (email && password) {
                let isEmailVerified = ValidateEmail(email);
                if (isEmailVerified) {
                    setLoader(true);
                    const repsonse = await props.actions._login({ email, password })
                    console.log('---------login repsonse',repsonse);    
                    setLoader(false);
                    _navigateToHome(); //go to home                
                    }
                }
            } catch (error) {
                setLoader(false);
                alert(error);
        }
    }

    const _facebookLogin = async () => {
        try {
            const response = await props.actions._facebookLogin();
            console.log('---fb login repsonse',response);
            if(response.type === 'success'){
                _navigateToHome()
            }
        } catch (error) {
            console.log('facebook login error', error);
        }
    }

    const _navigateToHome = () => {
        setEmail('');
        setPassword('');
        setCheck(false);
        setSignin(false);
        props.navigation.navigate('Home');
    }

    const { width, height } = Dimensions.get('screen');
    return (
        <ImageBackground source={bgImage} resizeMode='cover' style={{ width: width, height: '100%' }}>
            <ScrollView style={styles.container}>
                <Image
                    style={{ width: 85, height: 60 }}
                    containerStyle={{ marginTop: 50 }}
                    source={logoImage} />
                <View style={{marginTop:20}}>
                    <Text style={styles.signinText}>Sign In</Text>
                    <Text style={styles.subtitleText}>The world's largest marketplace for online service</Text>
                    <Input
                        placeholder='Email'
                        value={email}
                        inputContainerStyle={styles.nameInputContainerStyle}
                        inputStyle={styles.namInputStyle}
                        containerStyle={styles.inputContainer}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        placeholder='Password'
                        value={password}
                        inputContainerStyle={styles.nameInputContainerStyle}
                        inputStyle={styles.namInputStyle}
                        containerStyle={styles.inputContainer}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button
                        title="SIGN  IN"
                        buttonStyle={styles.signinButton}
                        onPress={()=>_signin()}
                        loading={loader}
                    />
                    <View style={styles.dividerView}>
                        <Text style={styles.divider}></Text>
                        <Text style={{ width: '20%', textAlign: 'center' }}>or</Text>
                        <Text style={styles.divider}></Text>
                    </View>
                    <TouchableOpacity style={[styles.socialButtonTouchableOpacity, { backgroundColor: '#4a6ea8', borderColor: '#4a6ea8' }]}
                        onPress={()=>_facebookLogin()}
                    >
                        <View style={[styles.socialButtonView, { backgroundColor: '#3b5998' }]}>
                            <Image
                                source={require('../../assets/facebook-white.png')}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode="cover"
                            />
                        </View>
                        <Text style={[styles.socialSigninText,{color:'white' }]}>Sign In with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButtonTouchableOpacity, { borderColor:'#dfe4ea' }]}>
                        <View style={[styles.socialButtonView, { borderColor: '#dfe4ea', borderRightWidth: 1 }]}>
                            <Image
                                source={require('../../assets/google.png')}
                                style={{ width: '100%', height: '100%', alignSelf: 'center' }}
                                resizeMode="cover"
                                containerStyle={{}}
                            />
                        </View>
                        {/* </Text> */}
                        <Text style={styles.socialSigninText}>Sign In with Google</Text>
                    </TouchableOpacity>
                    <View style={{ width: width, marginTop: 15 }}>
                        <Text style={[{ color: '#4a4a4a', fontWeight: '500', fontSize: 14 }]}>
                            By signing up you accept the terms the <Text style={{ color: primaryColor }} onPress={() => props.navigation.navigate('Privacy')}>{" Terms of services "}</Text>
                             and
                             <Text style={{ color: primaryColor }} onPress={() => props.navigation.navigate('Privacy')}>{" Privacy Policy"}</Text>
                        </Text>
                    </View>
                    <View style={styles.loginView}>
                        <Text>Create an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                            <Text style={styles.loginText}> Sign up here</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </ImageBackground> 
    );
}


function mapDispatchToProp(dispatch) {
    return {
        actions: bindActionCreators({
            _login: (recUser) => login(recUser),
            _facebookLogin: (recUser) => faceBookLogin(recUser)
        }, dispatch)
    }
}

export default connect(null, mapDispatchToProp)(Signin);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    formView: {
        flex: 1,
        marginVertical: 18,
        backgroundColor: '#FFF',
        flexDirection: 'column'
    },
    inputStyle: {
        width: '100%',
        marginTop: 15,
        height: 35,
        color: '#4a4a4a',
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
        fontSize: 16,
        color: primaryColor
    },
    buttonOpacity: {
        height: 52,
        marginVertical: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonsText: {
        color: primaryColor,
        justifyContent: 'center'
    },
    signinText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    subtitleText: {
        marginTop: 10
    },
    nameView: {
        flexDirection: 'row',
        marginTop: 15
        // borderWidth:1
    },
    namInputStyle: {
        fontSize: 15,
        color: 'red'
    },
    nameInputContainerStyle: {
        backgroundColor: '#f1f2f6',
        padding: 5,
        paddingLeft: 10,
        borderBottomWidth: 0
    },
    nameContainerStyle: {
        width: '50%'
    },
    dividerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        justifyContent: 'center'
    },
    divider: {
        width: '40%',
        borderBottomWidth: 1,
        borderBottomWidth: 1,
        height: 0,
        borderColor:'#dfe4ea'
    },
    loginView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        color:'#4a4a4a'
    },
    loginText: {
        color: primaryColor,
        textDecorationLine: 'underline'
    },
    inputContainer:{
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 15 
    },
    signinButton:{
        marginTop: 15,
        padding: 10
    },
    socialButtonView:{
        width: '15%',
        height: '100%',
        padding:10,
    },
    socialButtonTouchableOpacity:{
        flexDirection: 'row',
        borderWidth:1,
        height: 50,
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 3,
    },
    socialSigninText:{
        width: '80%',
        textAlign: 'center',
        alignItems: 'center'
    }
});