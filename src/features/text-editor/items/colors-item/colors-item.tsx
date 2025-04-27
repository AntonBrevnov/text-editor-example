import {ToolbarItem} from '@10play/tentap-editor';
import {Keyboards} from '@features/text-editor/constants';
import {BaseItemProps} from '@features/text-editor/toolbars/types';
import ColorsIcon from '@shared/assets/images/text-editor/colors.png';

type ColorsItemProps = BaseItemProps;

export const ColorsItem = ({
  editor,
  activeKeyboard,
  setActiveKeyboard,
}: ColorsItemProps): ToolbarItem => ({
  active: () => activeKeyboard === Keyboards.COLORS_KEYBOARD,
  onPress: () => () => {
    const isActive = activeKeyboard === Keyboards.COLORS_KEYBOARD;

    if (isActive) {
      editor.focus();
      setActiveKeyboard(undefined);
    } else {
      setActiveKeyboard(Keyboards.COLORS_KEYBOARD);
    }
  },
  disabled: () => false,
  image: () => ColorsIcon,
});
