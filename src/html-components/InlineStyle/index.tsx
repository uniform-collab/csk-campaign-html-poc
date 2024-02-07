import { FC } from 'react';
// import DOMPurify from 'isomorphic-dompurify';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';

export type InlineStyleProps = ComponentProps<{
  inlineCssCode: string;
}>;

export const InlineStyle: FC<InlineStyleProps> = ({ inlineCssCode }) => {
  // console.log({ css: DOMPurify.sanitize(inlineCssCode) });
  return null;
  return (
    <style jsx>{inlineCssCode}</style>
    // <style
    //   dangerouslySetInnerHTML={{
    //     __html: DOMPurify.sanitize(inlineCssCode.replace(/(\r\n|\n|\r)/gm, '')),
    //   }}
    // ></style>
  );
};

registerUniformComponent({
  type: 'inlineStyle',
  component: InlineStyle,
});

export default InlineStyle;
