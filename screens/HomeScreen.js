import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Linking,
} from "react-native";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />

            <View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ paddingHorizontal: 20 }}
                >
                    <View
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "80vh",
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingVertical: 20,
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://i.ibb.co/9Yb72DV/abu-1.jpg",
                                }}
                                style={styles.image}
                            />
                        </View>
                        <View
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 40, fontWeight: "700" }}>
                                Abu Kawsar
                            </Text>
                            <Text style={{ fontSize: 20, fontWeight: "700" }}>
                                Full Stack Engineer
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginVertical: 8,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(
                                            "https://www.linkedin.com/in/abu-kawsar-10118b228/"
                                        );
                                    }}
                                >
                                    <Image
                                        style={{ height: 36, width: 36 }}
                                        source={{
                                            uri: "https://img.icons8.com/color/48/000000/linkedin.png",
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(
                                            "https://github.com/abukawsar47"
                                        );
                                    }}
                                >
                                    <Image
                                        style={{
                                            height: 36,
                                            width: 36,
                                            marginLeft: 5,
                                        }}
                                        source={{
                                            uri: "https://img.icons8.com/color/48/000000/github--v1.png",
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL(
                                        "https://drive.google.com/file/d/14ZQwxlaJMKVd7N93uCUc0PODRlkltm7B/view?usp=sharing"
                                    );
                                }}
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 30,
                                    backgroundColor: "blue",
                                    borderRadius: 8,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: "white",
                                        textAlign: "center",
                                        fontWeight: "600",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Download Resume
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        borderRadius: "100%",
        borderWidth: 3,
        borderColor: "blue",
    },
});
