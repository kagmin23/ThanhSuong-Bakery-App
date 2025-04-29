import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff", // Updated to requested blue color
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Darker shadow for better contrast
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    opacity: 0.9,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  inputIcon: {
    marginLeft: 15,
    width: 20,
    height: 20,
    tintColor: "#666",
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 10,
  },
  registerButton: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    backgroundColor: "#3eaef4",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  registerButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginPrompt: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
  loginLink: {
    fontSize: 14,
    color: "#3eaef4",
    fontWeight: "600",
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // Highest elevation
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay for loading
  },
  errorName: {
    color: 'white',
    marginBottom: 25,
    alignSelf: "flex-start",
    marginTop: -15
  },
  errorPhone: {
    color: 'white',
    marginBottom: 25,
    alignSelf: "flex-start",
    marginTop: -15
  },
  errorPassword: {
    color: 'white',
    marginBottom: 25,
    alignSelf: "flex-start",
    marginTop: -15
  },
  errorConfirmPassword: {
    color: 'white',
    marginBottom: 25,
    alignSelf: "flex-start",
    marginTop: -15
  }
});