import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';

export type HtmlContentProps = ComponentProps<{
  scriptCode: string;
}>;

export const InlineScript: FC<HtmlContentProps> = ({ scriptCode }) => {
  return <script type="text/javascript" dangerouslySetInnerHTML={{ __html: scriptCode }} />;
};

registerUniformComponent({
  type: 'inlineScript',
  component: InlineScript,
});

export default InlineScript;
