import {CustomKeyboardExtension, EditorHelper} from '@10play/tentap-editor';
import {Keyboards} from '@features/text-editor/constants';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS_LIST} from './lib/constants';
import {useMemo} from 'react';

const ColorsKeyboardComponent = () => {
  const editorState = EditorHelper.editorLastInstance?.getEditorState();

  const activeColor = useMemo(
    () => editorState?.activeColor,
    [editorState?.activeColor],
  );

  const handleColorPress = (color?: string) => () => {
    if (!EditorHelper.editorLastInstance) {
      return;
    }

    if (color) {
      EditorHelper.editorLastInstance.setColor(color.toString());
    } else {
      EditorHelper.editorLastInstance.unsetColor();
    }

    EditorHelper.editorLastInstance.focus();
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          {COLORS_LIST.map(color => (
            <TouchableOpacity
              key={color}
              style={StyleSheet.flatten([
                styles.item,
                activeColor === color && styles.itemSelected,
                {backgroundColor: color},
              ])}
              onPress={handleColorPress(color)}
            />
          ))}
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.item,
              styles.itemTransparent,
              activeColor === 'transparent' && styles.itemSelected,
              {backgroundColor: 'transparent'},
            ])}
            onPress={handleColorPress()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export const ColorsKeyboard = new CustomKeyboardExtension(
  Keyboards.COLORS_KEYBOARD,
  ColorsKeyboardComponent,
);
