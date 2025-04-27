import {Toolbar, useBridgeState, useKeyboard} from '@10play/tentap-editor';
import {BaseToolbarProps} from '../types';
import {FC} from 'react';
import {EmojiItem} from '@features/text-editor/items/emoji-item/emoji-item';
import {ColorsItem} from '@features/text-editor/items';

type ThemeEditorToolbarProps = BaseToolbarProps;

export const ThemeEditorToolbar: FC<ThemeEditorToolbarProps> = ({
  editor,
  activeKeyboard,
  setActiveKeyboard,
}) => {
  const editorState = useBridgeState(editor);

  const {isKeyboardUp: isNativeKeyboardUp} = useKeyboard();
  const customKeyboardOpen = activeKeyboard !== undefined;
  const isKeyboardUp = isNativeKeyboardUp || customKeyboardOpen;

  const hideToolbar =
    !isKeyboardUp || (!editorState.isFocused && !customKeyboardOpen);

  return (
    <Toolbar
      editor={editor}
      hidden={hideToolbar}
      items={[
        EmojiItem({editor, activeKeyboard, setActiveKeyboard}),
        ColorsItem({editor, activeKeyboard, setActiveKeyboard}),
      ]}
    />
  );
};
