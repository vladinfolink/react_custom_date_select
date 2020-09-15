import * as React from "react";

declare class CustomDropZone extends React.Component<IRCDSelectProps, any> {}

export interface IRCDSelectProps {
    renderPics?: boolean,
    allowClick?: boolean,
    displayFiles?: boolean,
    displayRejectedFiles?: boolean,
    fileCountLimit?: number,
    rejectedFileCountLimit?: number,
    dropText?: string
    handleFiles?: any
    fileTypesAllowed?: string[], 
    maxFileSize?: number

  }