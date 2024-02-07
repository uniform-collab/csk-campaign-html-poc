import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';

export type HtmlContentProps = ComponentProps<{
  href: string;
}>;

export const StylesheetLink: FC<HtmlContentProps> = ({ href }) => {
  return <link href={href} rel="stylesheet" />;
};

registerUniformComponent({
  type: 'stylesheetLink',
  component: StylesheetLink,
});

export default StylesheetLink;
