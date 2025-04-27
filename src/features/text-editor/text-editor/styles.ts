import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  richText: {
    flex: 1,
    backgroundColor: 'red',
  },
  toolbarWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  toolbarBody: {
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderTopColor: '#FFFFFF0F',
    backgroundColor: '#101010',
    padding: 12,
    height: 64,
  },
  toolbarButton: {
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF14',
    borderRadius: 12,
    marginRight: 12,
  },
  iconWrapperActive: {
    backgroundColor: '#D2D2D2',
  },
});
