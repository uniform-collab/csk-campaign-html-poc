import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';

export type HtmlContentProps = ComponentProps<{
  externalScriptSource: string;
  async: boolean;
}>;

export const ExternalScript: FC<HtmlContentProps> = ({ externalScriptSource, async }) => {
  return <script async={async} src={externalScriptSource} />;
};

registerUniformComponent({
  type: 'externalScript',
  component: ExternalScript,
});

export default ExternalScript;
