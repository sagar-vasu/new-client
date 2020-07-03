import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Heading from '../../components/heading';
import Icon from 'react-native-vector-icons/Feather';
import Logo2 from '../../assets/xeool-brand.png';
import {primaryColor} from '../../constants/color';

const { width } = Dimensions.get('window');

export default function UserType(props) {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FFF',marginTop:20 }}>
            <Heading title={''} _OnPress={() => props.navigation.goBack()} />
            <View style={styles.buttonsView}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}
                    style={styles.buttonOpacity}
                >
                    <Text style={[styles.buttonsText, { fontSize: 16, color: '#FFF', fontWeight: 'bold', marginVertical: 8 }]}>{"Looking For A Job"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}
                    style={styles.buttonOpacity}
                >
                    <Text style={[styles.buttonsText, { fontSize: 16, color: '#FFF', fontWeight: 'bold', marginVertical: 8 }]}>{"Posting A Job"}</Text>
                </TouchableOpacity>
            </View>
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
    buttonsText: {
        // paddingVertical: 5,
        // paddingRight: 15,
        color: primaryColor,
        justifyContent: 'center'
    },

    brandView2: {
        // width: 140,
        height: 45,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});