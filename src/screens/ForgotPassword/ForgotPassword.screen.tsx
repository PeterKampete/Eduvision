import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './ForgotPassword.style'

const ForgotPassword: React.FC = () => {

    const [phone, setPhone] = useState('');

    const sendLink = () => {
        console.log("We are here with you");
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
            <Image resizeMode='contain' style={styles.image} source={require('../../../res/images/forgot-password.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.enterPhoneNumberText}>Enter the phone number associated with this account</Text>
                <Text style={styles.confirmationCodeText}>We will send a link to your phone number, click it to reset your password.</Text>
            </View>

            <TextInput value={phone} keyboardType='phone-pad' placeholder='Enter phone number' style={styles.input} />

            <TouchableOpacity onPress={sendLink} style={styles.touch}>
                <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ForgotPassword