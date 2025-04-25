import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  qrImage: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  modalText: {
    fontSize: 14,
    marginVertical: 5,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#3EAEF4",
    marginTop: 20,
    width: "100%",
    height: 60,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    opacity: 0.7,
  },
});

export default styles;