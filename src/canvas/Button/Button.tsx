import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-react';
import { useTranslations } from 'next-intl';
import BaseButton from '../../components/Button';
import { formatProjectMapLink } from '../../utilities';
import { ButtonProps } from '.';

export const Button: FC<ButtonProps> = ({ link, style, animationType }) => {
  const t = useTranslations();
  return (
    <BaseButton
      href={formatProjectMapLink(link)}
      animationType={animationType}
      copy={<UniformText placeholder={t('Button copy goes here')} parameterId="copy" />}
      style={style}
    />
  );
};
