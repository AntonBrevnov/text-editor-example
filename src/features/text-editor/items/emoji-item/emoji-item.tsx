import {ToolbarItem} from '@10play/tentap-editor';
import {Keyboards} from '@features/text-editor/constants';
import {BaseItemProps} from '@features/text-editor/toolbars/types';
import EmojiIcon from '@shared/assets/images/text-editor/emoji.png';

type EmojiItemProps = BaseItemProps;

export const EmojiItem = ({
  editor,
  activeKeyboard,
  setActiveKeyboard,
}: EmojiItemProps): ToolbarItem => ({
  active: () => activeKeyboard === Keyboards.EMOJI_KEYBOARD,
  onPress: () => () => {
    const isActive = activeKeyboard === Keyboards.EMOJI_KEYBOARD;

    if (isActive) {
      editor.focus();
      setActiveKeyboard(undefined);
    } else {
      setActiveKeyboard(Keyboards.EMOJI_KEYBOARD);
    }
  },
  disabled: () => false,
  image: () => EmojiIcon,
});
