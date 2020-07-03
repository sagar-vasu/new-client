import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Heading from '../../components/heading';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryColor } from '../../constants/color';

const { width } = Dimensions.get('window');

export default function AccountType(props) {
    console.log('prpops inn accoutn type',props.route.params);
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FFF',marginTop:20 }}>
            <Heading title={''} _OnPress={() => props.navigation.goBack()} />
            {
                props.route.params && props.route.params.action === 'signup' ?
                    <View style={styles.buttonsView}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: primaryColor }}>Create an Account</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('UserType', { ...props.route.params,accountType: 'facebook' })}
                            style={styles.socialButton}
                        >
                            <Icon name='facebook-official' color='#4267B2' size={20} style={{ marginRight: 10 }} />
                            <Text style={[styles.buttonsText, { fontSize: 16, color: '#4267B2', fontWeight: 'bold', marginVertical: 8 }]}>{"Facebook"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('UserType', { ...props.route.params, accountType: 'google' })}
                            style={styles.socialButton}
                        >
                            <Icon name='google' color='#dd4b39' size={20} style={{ marginRight: 10 }} />
                            <Text style={[styles.buttonsText, { fontSize: 16, color: '#dd4b39', fontWeight: 'bold', marginVertical: 8 }]}>{"Google"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('UserType', { ...props.route.params,accountType: 'email' })}
                            style={styles.buttonOpacity}
                        >
                            <Text style={[styles.buttonsText, { fontSize: 16, color: '#FFF', fontWeight: 'bold', marginVertical: 8 }]}>{"Create an Account"}</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.buttonsView}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: primaryColor }}>Login</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('UserType', { ...props.route.params,accountType: 'facebook' })}
                            style={styles.socialButton}
                        >
                            <Icon name='facebook-official' color='#4267B2' size={20} style={{ marginRight: 10 }} />
                            <Text style={[styles.buttonsText, { fontSize: 16, color: '#4267B2', fontWeight: 'bold', marginVertical: 8 }]}>{"Facebook"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('UserType', { ...props.route.params,accountType: 'google' })}
                            style={styles.socialButton}
                        >
                            <Icon name='google' color='#dd4b39' size={20} style={{ marginRight: 10 }} />
                            <Text style={[styles.buttonsText, { fontSize: 16, color: '#dd4b39', fontWeight: 'bold', marginVertical: 8 }]}>{"Google"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Signin', { ...props.route.params,accountType: 'email' })}
                            style={styles.buttonOpacity}
                        >
                            <Text style={[styles.buttonsText, { fontSize: 16, color: '#FFF', fontWeight: 'bold', marginVertical: 8 }]}>{"Username/Email"}</Text>
                        </TouchableOpacity>
                    </View>
            }
            


        </View>
    );
}
const styles = StyleSheet.create({
    buttonsView: {
        width: '100%',
        height: '85%',
        // marginVertical: 18,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    buttonOpacity: {
        width: width - 20,
        height: 52,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    socialButton: {
        width: width - 20,
        height: 52,
        flexDirection:'row',
        marginHorizontal: 10,
        marginVertical: 10,
        textAlign:'center',
        // backgroundColor: primaryColor,
        borderColor: primaryColor,
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonsText: {
        // paddingVertical: 5,
        // paddingRight: 15,
        color: primaryColor,
        justifyContent: 'center'
    },

    brandView2: {
        // width: 140,
        // height: 45,
        // marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});