import {Toolbar, useBridgeState, useKeyboard} from '@10play/tentap-editor';
import {FC} from 'react';
import {BaseToolbarProps} from '../types';

export const BaseToolbar: FC<BaseToolbarProps> = ({editor, activeKeyboard}) => {
  const editorState = useBridgeState(editor);

  const {isKeyboardUp: isNativeKeyboardUp} = useKeyboard();
  const customKeyboardOpen = activeKeyboard !== undefined;
  const isKeyboardUp = isNativeKeyboardUp || customKeyboardOpen;

  const hideToolbar =
    !isKeyboardUp || (!editorState.isFocused && !customKeyboardOpen);

  return <Toolbar editor={editor} hidden={hideToolbar} />;
};
