import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';

export type HtmlContentProps = ComponentProps<{
  noScriptBody: string;
}>;

export const Noscript: FC<HtmlContentProps> = ({ noScriptBody }) => {
  return <noscript dangerouslySetInnerHTML={{ __html: noScriptBody }} />;
};

registerUniformComponent({
  type: 'noscript',
  component: Noscript,
});

export default Noscript;
