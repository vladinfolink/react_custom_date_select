import * as React from 'react';

import { CustomDropZone } from '../componentGate';
import { CustomDropZoneContainer } from "../components/react-custom-dropzone/containers/CustomDropzoneContainer/CustomDropzoneContainer";
import { Files } from "../components/react-custom-dropzone/view/Files/Files";
import { RejectedFiles } from "../components/react-custom-dropzone/view/RejectedFiles/RejectedFiles";

import { shallow } from 'enzyme';
import { create } from "react-test-renderer";

interface IProps {
  renderPics: boolean,
  allowClick: boolean,
  displayFiles: boolean,
  displayRejectedFiles: boolean,
  fileCountLimit: number,
  rejectedFileCountLimit: number,
  dropText: string,
  handleFiles: any,
  fileTypesAllowed: string[],
  maxFileSize: number
}
interface IState {
  files: any[],
  rejectedFiles: any[]
}

export class TestCustomDropZone extends React.Component<IProps, IState> {

  static defaultProps = {
    renderPics: true,
    allowClick: true,
    displayFiles: true,
    displayRejectedFiles: true,
    fileCountLimit: Infinity,
    rejectedFileCountLimit: Infinity,
    dropText: '',
    handleFiles: (params: any) => {
      console.log(params);
    },
    fileTypesAllowed: [],
    maxFileSize: Infinity
  }

  constructor(props: any) {
    super(props);
    this.state = {
      files: [],
      rejectedFiles: []
    };
    this.updateState = this.updateState.bind(this);
    this.shouldDisplayFiles = this.shouldDisplayFiles.bind(this);
  }

  private handleDrop = (fileItems: any[]) => {
    const typesAllowed: any[] = [...this.props.fileTypesAllowed];
    const maxFileSize: number = this.props.maxFileSize;
    const { files, rejectedFiles } = this.state;

    const inboundFiles = !!typesAllowed.length ? Array.from(fileItems).reduce(
      function (ini, item) {
        return (typesAllowed.indexOf(item.type) !== -1 && item.size <= maxFileSize)
          ? { ...ini, files: [...ini.files, item] }
          : { ...ini, rejectedFiles: [...ini.rejectedFiles, item] };
      },
      { files: [], rejectedFiles: [] }
    ) : {
        files: Array.from(fileItems), rejectedFiles: []
      };

    for (const iterator of inboundFiles.files) {
      if (files.length < this.props.fileCountLimit) {
        files.push(iterator);
      }
    }

    for (const iterator of inboundFiles.rejectedFiles) {
      if (rejectedFiles.length < this.props.rejectedFileCountLimit) {
        rejectedFiles.push(iterator);
      }
    }
    return this.updateState({ files, rejectedFiles });
  };

  private updateState(combinedFilesObj: { files: any, rejectedFiles: any }) {
    const { files, rejectedFiles } = combinedFilesObj;
    this.setState(
      function () {
        return {
          files,
          rejectedFiles
        };
      },
      () => {
        this.props.handleFiles({ ...this.state });
      }
    );
  }

  private deleteFile = (fileIndex: number) => {
    const files = [...this.state.files];
    files.splice(fileIndex, 1);
    this.setState(
      function () {
        return { files };
      },
      () => {
        this.props.handleFiles({ ...this.state });
      }
    );
  };

  private shouldDisplayFiles() {
    return this.props.displayFiles
  }

  render() {
    const dropText = !this.state.files.length ? this.props.dropText : null;

    return (
      <React.Fragment>
        <CustomDropZoneContainer
          dropText={dropText}
          handleDrop={this.handleDrop}
          allowClick={this.props.allowClick}
        >
          {this.shouldDisplayFiles() && (
            <Files
              renderPics={this.props.renderPics}
              files={this.state.files}
              deleteFile={this.deleteFile}
            />
          )}
          {
            !!this.state.rejectedFiles.length &&

            this.props.displayRejectedFiles && (
              <RejectedFiles rejectedFiles={this.state.rejectedFiles} />
            )}
        </CustomDropZoneContainer>
      </React.Fragment>
    );
  }
}


it('render CustomDropZone', function () {
  expect(shallow(<CustomDropZone />).length).toEqual(1)
});

describe("TestCustomDropZone component", () => {
  test("any", () => {
    const component = (create as any)(<TestCustomDropZone />);
    const instance = component.getInstance();
    expect(instance.props.dropText).toBe("");
    expect(shallow(<TestCustomDropZone />)).toMatchSnapshot()
  });
});