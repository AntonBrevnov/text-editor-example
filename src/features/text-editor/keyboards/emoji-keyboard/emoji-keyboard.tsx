import {CustomKeyboardExtension, EditorHelper} from '@10play/tentap-editor';
import {Keyboards} from '@features/text-editor/constants';
import {styles} from './styles';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {EMOJI_LIST} from './lib/constants';

const EmojiKeyboardComponent = () => {
  const handlePress = (emoji: string) => () => {
    EditorHelper.editorLastInstance?.setImage(emoji);
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.keyboard}>
        {EMOJI_LIST.map(emoji => (
          <TouchableOpacity
            style={styles.item}
            key={emoji}
            onPress={handlePress(emoji)}>
            <Image
              resizeMode="contain"
              style={styles.itemImage}
              source={{uri: emoji}}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export const EmojiKeyboard = new CustomKeyboardExtension(
  Keyboards.EMOJI_KEYBOARD,
  EmojiKeyboardComponent,
);
