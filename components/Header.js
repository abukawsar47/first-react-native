import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MenuIcon } from "react-native-heroicons/outline";
import React from "react";

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                <Text style={{ color: "blue" }}>Abu</Text> Kawsar
            </Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                {" "}
                <MenuIcon size={20} color="blue" />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: "#fff",
        shadowColor: "#999",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
});
