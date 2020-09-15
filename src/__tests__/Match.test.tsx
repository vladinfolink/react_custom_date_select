import * as React from "react";
import * as ReactTestRenderer from "react-test-renderer";
import {CustomDropZone} from '../components/react-custom-dropzone/containers/CustomDropZone/CustomDropZone';
// import {CustomDropZone as NewCustomDropZone} from '../components/react-custom-dropzone/containers/CustomDropZone/CustomDropZone';

const {create} = ReactTestRenderer;

describe("CustomDropZone component match", function ()  {
  expect.assertions(1)
  test("Matches the snapshot", () => {
    const dz = create(<CustomDropZone fileTypesAllowed={['asd']} />);
    expect(dz.toJSON()).toMatchSnapshot();
  });
});

