import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {CustomDropZone} from '../components/react-custom-dropzone/containers/CustomDropZone/CustomDropZone';

it('Accepts faulty mime types', function(done) {
  const div = document.createElement('div');
  ReactDOM.render(<CustomDropZone 
    fileTypesAllowed={['asdasd']}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
  done();
});