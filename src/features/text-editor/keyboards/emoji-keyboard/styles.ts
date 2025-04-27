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
  item: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 42,
    height: 42,
  },
});
