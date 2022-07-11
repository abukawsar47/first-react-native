import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";

const AboutScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
            <View>
                <Text>AboutScreen</Text>
            </View>
        </SafeAreaView>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({});
