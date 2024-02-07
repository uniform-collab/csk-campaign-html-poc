import { FC } from 'react';
import { UniformComposition, UniformSlot } from '@uniformdev/canvas-react';
import { RootComponentInstance, createUniformApiEnhancer } from '@uniformdev/canvas';

export type CampaignPageProps = { composition: RootComponentInstance };

export const CampaignPage: FC<CampaignPageProps> = ({ composition }) => {
  return (
    <UniformComposition
      data={composition}
      behaviorTracking="onLoad"
      contextualEditingEnhancer={createUniformApiEnhancer({ apiUrl: '/api/preview' })}
    >
      <figure id="loading">
        <img
          id="loading-gif"
          src="https://www.hortica.com/-/media/hortica/Home-Page/NoSubstitute/assets/img/loading.gif"
          style={{
            filter: 'invert(1)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: '.1',
            transition: '.5s',
          }}
        />
      </figure>
      <UniformSlot name="pageContent" />
      <UniformSlot name="pageFooter" />
    </UniformComposition>
  );
};

// TODO: this doesn't work
// export const config = {
//   runtimeJS: false,
// };

export default CampaignPage;
