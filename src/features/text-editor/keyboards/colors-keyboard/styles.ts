import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#101010',
  },
  keyboard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 12,
    columnGap: 12,
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    width: 42,
    height: 42,
    borderRadius: 42,
  },
  itemTransparent: {
    borderWidth: 1,
    borderColor: '#ffffff2c',
  },
  itemSelected: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});
