import React, { useEffect } from 'react';
import { View,Text, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { SliderBox } from "react-native-image-slider-box";
import { authChange } from '../../store/actions/auth';
import { primaryColor } from '../../constants/color';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

function Splash(props) {
    useEffect(() => {
        // props.actions.authChangeUser('Hello')
        //     .then(() => {
        //         props.navigation.navigate('Auth');
        //     })
        //     .catch(() => {
        //         props.navigation.navigate('Auth');
        //     })
    }, [])
const images = [
    require('../../assets/splash1.png'),          // Local image
    require('../../assets/splash2.png'),          // Local image
    require('../../assets/splash3.png'),          // Local image
    require('../../assets/splash4.png'),          // Local image
  ];
    const { width, height } = Dimensions.get('screen');
    return (
        <View style={styles.container}>
            <View style={{flex:0.8}}>
                
            <SliderBox
                images={images}
                sliderBoxHeight={height / 1.4}
                dotColor={primaryColor}
                inactiveDotColor="#90A4AE"
                resizeMethod={'resize'}
                autoplay
                circleLoop={true}
                resizeMode={'cover'}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 15,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor:'white'

                }}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 0,
                    backgroundColor:'white'
                }}
                />
            </View>
            <View style={styles.bottomView}>
                <Button
                    title="CREATE AN ACCOUNT"
                    containerStyle={{ marginTop: 20 }}
                    buttonStyle={styles.createAccountButton}
                    onPress={() => props.navigation.navigate('Signup')}
                />
                <View style={styles.loginView}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Signin')}>
                        <Text style={styles.loginText}> Log in here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

// function mapStateToProp(state) {
    //     console.log('Run*******', state.authreducer);
    //     return ({
        //         currentUser: state.authreducer
        //     })
        // }

function mapDispatchToProp(dispatch) {
    return {
        actions: bindActionCreators({
            authChangeUser: (recUser) => authChange(recUser)
        }, dispatch)
    }
}

export default connect(null, mapDispatchToProp)(Splash)
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    bottomView:{
        flex: 0.2,
        width: '100%',
        backgroundColor:'white'
    },
    createAccountButton:{
        width: '85%',
        backgroundColor:primaryColor,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center'
    },
    loginView:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    loginText:{
        color:primaryColor,
        textDecorationLine:'underline'
    }
});