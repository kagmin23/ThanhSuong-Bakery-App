import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const AVATAR_SIZE = 100;
const HEADER_HEIGHT = 100;
const USER_INFO_HEIGHT = 180; // Approximate height for avatar + name + verification badge

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  fixedHeaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerContainer: {
    height: HEADER_HEIGHT,
    width: "100%",
    position: "relative",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 51, 102, 0.7)",
  },
  topNavigation: {
    backgroundColor: "transparent",
    elevation: 0,
    zIndex: 1,
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  backButton: {
    padding: 8,
  },
  avatarSection: {
    alignItems: "center",
    backgroundColor: "#F7F9FC",
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 4,
    borderColor: "white",
    marginTop: -AVATAR_SIZE / 2,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  userName: {
    marginTop: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  userTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(51, 102, 255, 0.1)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginTop: 8,
  },
  userTagText: {
    color: "#3366FF",
    marginLeft: 4,
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: HEADER_HEIGHT + USER_INFO_HEIGHT - AVATAR_SIZE / 2, // Adjust this value as needed
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  infoSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  infoCard: {
    borderRadius: 12,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 12,
  },
  icon: {
    marginTop: 2,
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  label: {
    marginBottom: 4,
    color: "#8F9BB3",
  },
  value: {
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#F7F9FC",
    borderColor: "#E4E9F2",
  },
  divider: {
    backgroundColor: "#EDF1F7",
  },
  metaInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  metaInfoText: {
    fontSize: 12,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  actionButton: {
    flex: 1,
    height: 45,
    borderRadius: 8,
    borderWidth: 0,
  },
  cancelButton: {
    flex: 1,
    height: 45,
    borderRadius: 8,
    borderColor: '#dc3545',
    borderWidth: 1.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    paddingVertical: 10,
    alignItems: "center",
  },
  versionInfo: {
    alignItems: "center",
    paddingVertical: 8,
  },
  idText: {
    marginTop: 4,
    opacity: 0.6,
  },
});
