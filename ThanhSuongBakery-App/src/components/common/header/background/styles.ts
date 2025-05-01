import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const height = 150;

export const headerDimensions = { width, height };

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3EAEF4',
    textShadowColor: '#CFEBFC',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: '50%', // Căn chữ theo chiều dọc
    transform: [{ translateY: -18 }], // Điều chỉnh vị trí nếu cần
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Overlay tối với độ mờ 30%
  },
});
