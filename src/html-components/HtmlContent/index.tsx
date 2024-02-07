import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';

export type HtmlContentProps = ComponentProps<{
  content: string;
}>;

export const HtmlContent: FC<HtmlContentProps> = ({ content }) => {
  return <div id="app" style={{ opacity: 0 }} dangerouslySetInnerHTML={{ __html: content }} />;
};

registerUniformComponent({
  type: 'htmlContent',
  component: HtmlContent,
});

export default HtmlContent;
