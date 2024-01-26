import React from "react";
import { Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home() {

			
	return (
		<View style={styles.appContainer}>
			<StatusBar style='light' />
			<View style={styles.logoContainer}>
				<BatLogo /> 
			</View> 

			<View style={styles.inputContainer}>
				<BatButton />	
			</View> 
		</View>
	)
}
