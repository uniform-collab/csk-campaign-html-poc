import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';

export type InlineStyleProps = ComponentProps<{
  inlineCssCode: string;
}>;

export const InlineStyle: FC<InlineStyleProps> = ({ inlineCssCode }) => {
  return <style jsx>{inlineCssCode}</style>;
};

registerUniformComponent({
  type: 'inlineStyle',
  component: InlineStyle,
});

export default InlineStyle;
