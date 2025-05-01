import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  section: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  card: {
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#333333',
    marginTop: 4,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginBottom: 12,
  },
  dropdownText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    borderColor: '#3366FF',
    borderWidth: 1,
    marginBottom: 12,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#333333',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  divider: {
    marginVertical: 12,
    backgroundColor: '#E5E5E5',
  },
  confirmButton: {
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: '#3366FF',
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxHeight: '50%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333333',
  },
  modalCloseButton: {
    marginTop: 16,
    borderRadius: 8,
  },
  errorContainer: {
    marginHorizontal: 16,
    marginTop: 12,
  },
  errorName: {
    fontSize: 14,
    marginTop: -5,
    color: '#FF3D71',
    marginBottom: 25,
  },
  errorPhone: {
    fontSize: 14,
    marginTop: -5,
    color: '#FF3D71',
    marginBottom: 25,
  },
  errorAddress: {
    fontSize: 14,
    marginTop: -5,
    color: '#FF3D71',
    marginBottom: 25,
  },
  errorDistance: {
    fontSize: 14,
    marginTop: -5,
    color: '#FF3D71',
    marginBottom: 25,
  },
});

export default styles;