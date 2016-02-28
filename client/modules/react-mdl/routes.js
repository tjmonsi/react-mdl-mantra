import React from 'react';

// all molecules
import TitleText from './components/molecules/title-text.jsx';

// all organisms
import MdlFeaturette from './components/organisms/mdl-featurette.jsx';

// all templates
import MdlPage from './components/templates/mdl-page.jsx';


export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const MdlPageCtx = injectDeps(MdlPage);

  FlowRouter.route('/react-mdl-design/title-text', {
    action() {
      mount(MdlPageCtx, {
        appSections: () => (React.createElement(TitleText, {
          displayName: 'TitleText'
        }))
      });
    }
  });

  FlowRouter.route('/react-mdl-design/mdl-feauturette/:position', {
    action(params) {
      const {position} = params;
      mount(MdlPageCtx, {
        appSections: () => (React.createElement(MdlFeaturette, {
          displayName: 'MdlFeaturette',
          position
        }))
      });
    }
  });

  FlowRouter.route('/react-mdl-design/mdl-featurette/:position/:height', {
    action(params) {
      const {position, height} = params;
      const heightPercent = !isNaN(parseFloat(height)) ? parseFloat(height) : 1;
      mount(MdlPageCtx, {
        appSections: () => (React.createElement(MdlFeaturette, {
          displayName: 'MdlFeaturette',
          position,
          heightPercent
        }))
      });
    }
  });
};
