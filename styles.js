import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        backgroundColor: "red",
        alignItems: "center",

        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight }
        })
    },

    box: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignSelf: "stretch",
        alignItems: "center",
        backgroundColor: "yellow",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray",
        margin: 10
    },

    boxText: {
        color: "blue",
        fontWeight: "bold"
    }
});
