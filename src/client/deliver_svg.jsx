import React, { Component } from 'react';

class deliverSvg extends Component {
  render () {
    if (this.props.fileName === "body"){
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.95 283.48"><title>body</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M111.75,283.48c-16.26,0-40.77-1.55-57.77-9.67l-.75-.36a93.91,93.91,0,0,1-14.91-9.06c-6.43-4.84-19.81-14.91-29.09-34.21-16.3-33.87-7.36-71.1-.84-98.28,1.55-6.47,3.29-12.42,5.3-18.21s4-10.91,6.29-16.06a266.3,266.3,0,0,1,15.8-30.25C37.2,65,38.7,62.55,40.23,60.1,40.9,59,56.74,34,66.57,29.93c0,0,2.27-.93,5.21-2,1-.37,1.36-.49,1.72-.61a26.42,26.42,0,0,1,4.86-1.08c.71-.09,1.46-.15,2.24-.22,3.59-.3,7.65-.65,12-3.83,5.58-4.08,8-10.13,9.88-15C104,3.25,105.26.13,107.74,0s3.67,2.79,5.3,6.84c1.93,4.79,4.58,11.35,10.73,16.74,9,7.92,20.2,8.59,23.39,8.61a20.17,20.17,0,0,0,5.12-.53,15.66,15.66,0,0,1,2.91-.39h.27c24.44,0,46.44,70.73,50.61,85,2.2,7.47,3.58,13.19,4.24,15.94l.05.19c5.48,22.66,10.21,42.24,8,68.22-1.51,18.23-4.33,52.16-25.89,71.15-7,6.14-25.43,7.77-62.21,11l-1.6.14C128.54,282.9,121.68,283.48,111.75,283.48Z"/></g></g></svg>
      )
    }
    else if (this.props.fileName === "eye1"){
      return (
        <div className="eye">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.05 22.31"><title>iris1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.lidColor} d="M14.36,22.31A16.11,16.11,0,0,1,3.75,18.15c-.88-.81-3.55-3.27-3.74-7C-.24,6.09,4.15,1.73,8.54.45h0C12.6-.74,17.77.48,21.7,3.57c3.2,2.51,5,5.71,4.83,8.78-.17,3.9-3.47,7.2-6.66,8.74A12.66,12.66,0,0,1,14.36,22.31Z"/><path fill={this.props.lidColor} d="M63.24,1.1C55.67-1.41,45.43,5,45.48,11.86c0,3.79,3.13,7,6.07,8.54,5.51,2.91,12.06.83,15.66-2.28.94-.81,3.51-3,3.81-6.51C71.43,6.93,67.49,2.52,63.24,1.1Zm3.4,8a6.21,6.21,0,0,1-2.46,4.08c-2.32,1.95-6.54,3.24-10.09,1.42-1.9-1-3.91-3-3.93-5.36C50.13,5,56.73,1,61.61,2.54,64.35,3.43,66.9,6.2,66.64,9.14Z"/><path fill={this.props.lidColor} d="M59.66,1.05a15.52,15.52,0,0,0-9,3c-3,2.19-4.74,5-4.72,7.76,0,3.5,2.93,6.59,5.8,8.1,5.11,2.7,11.46.93,15.1-2.21.92-.79,3.36-2.89,3.64-6.18.4-4.5-3.55-8.69-7.44-10h0A10.93,10.93,0,0,0,59.66,1.05Z"/></g></g></svg>
          <img src="../../lib/img/eye1blink.svg" />
          <svg className='open' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.05 22.31"><title>iris1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M14.36,22.31A16.11,16.11,0,0,1,3.75,18.15c-.88-.81-3.55-3.27-3.74-7C-.24,6.09,4.15,1.73,8.54.45h0C12.6-.74,17.77.48,21.7,3.57c3.2,2.51,5,5.71,4.83,8.78-.17,3.9-3.47,7.2-6.66,8.74A12.66,12.66,0,0,1,14.36,22.31Z"/><path fill={this.props.color} d="M63.24,1.1C55.67-1.41,45.43,5,45.48,11.86c0,3.79,3.13,7,6.07,8.54,5.51,2.91,12.06.83,15.66-2.28.94-.81,3.51-3,3.81-6.51C71.43,6.93,67.49,2.52,63.24,1.1Zm3.4,8a6.21,6.21,0,0,1-2.46,4.08c-2.32,1.95-6.54,3.24-10.09,1.42-1.9-1-3.91-3-3.93-5.36C50.13,5,56.73,1,61.61,2.54,64.35,3.43,66.9,6.2,66.64,9.14Z"/><path fill={this.props.color} d="M59.66,1.05a15.52,15.52,0,0,0-9,3c-3,2.19-4.74,5-4.72,7.76,0,3.5,2.93,6.59,5.8,8.1,5.11,2.7,11.46.93,15.1-2.21.92-.79,3.36-2.89,3.64-6.18.4-4.5-3.55-8.69-7.44-10h0A10.93,10.93,0,0,0,59.66,1.05Z"/></g></g></svg>
          <img className='open' src="../../lib/img/eye1.svg" />
        </div>
        )
    }
    else if (this.props.fileName === "eye2"){
      return (
        <div className="eye">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.5 14.5"><defs></defs><title>iris2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" fill={this.props.lidColor} d="M25.37,7.68c-.08-.08-.26-.24-.47-.46C23.35,5.63,23.51,5,22.31,3.83A9.51,9.51,0,0,0,18,1.71a21.9,21.9,0,0,0-6.74-.46l-.61,0C4.38,1.62,1.25,1.82.69,3,0,4.47,1.49,6.6,2.84,8.49A12.85,12.85,0,0,0,7.6,12.72,14.59,14.59,0,0,0,15,14a23.9,23.9,0,0,0,8.22-1.69c1.22-.42,4.44-1.53,4.33-2.54C27.46,9.43,27.1,9.27,25.37,7.68Z"/><path fill={this.props.lidColor} d="M59.46,14c-.75,0-1.49-.05-2.23-.1a20.86,20.86,0,0,1-7.57-2.19l-.06,0c-2.23-1-4.26-2.1-4.09-3.26.06-.37.25-.53.88-1.09.31-.26.73-.63,1.31-1.17l.45-.44a8.63,8.63,0,0,0,1.38-1.81,6.29,6.29,0,0,1,1.2-1.54A8.56,8.56,0,0,1,55,.34,18.06,18.06,0,0,1,61.34.23h.14l.46.06c6.29.74,8.87,1.1,9.4,2.51h0c.67,1.77-.91,4-2.32,5.91A12.56,12.56,0,0,1,64.27,13,10.52,10.52,0,0,1,59.46,14Z"/></g></g></svg>
          <img src="../../lib/img/eye2blink.svg" />
          <svg className='open' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.5 14.5"><defs></defs><title>iris2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" fill={this.props.color} d="M25.37,7.68c-.08-.08-.26-.24-.47-.46C23.35,5.63,23.51,5,22.31,3.83A9.51,9.51,0,0,0,18,1.71a21.9,21.9,0,0,0-6.74-.46l-.61,0C4.38,1.62,1.25,1.82.69,3,0,4.47,1.49,6.6,2.84,8.49A12.85,12.85,0,0,0,7.6,12.72,14.59,14.59,0,0,0,15,14a23.9,23.9,0,0,0,8.22-1.69c1.22-.42,4.44-1.53,4.33-2.54C27.46,9.43,27.1,9.27,25.37,7.68Z"/><path fill={this.props.color} d="M59.46,14c-.75,0-1.49-.05-2.23-.1a20.86,20.86,0,0,1-7.57-2.19l-.06,0c-2.23-1-4.26-2.1-4.09-3.26.06-.37.25-.53.88-1.09.31-.26.73-.63,1.31-1.17l.45-.44a8.63,8.63,0,0,0,1.38-1.81,6.29,6.29,0,0,1,1.2-1.54A8.56,8.56,0,0,1,55,.34,18.06,18.06,0,0,1,61.34.23h.14l.46.06c6.29.74,8.87,1.1,9.4,2.51h0c.67,1.77-.91,4-2.32,5.91A12.56,12.56,0,0,1,64.27,13,10.52,10.52,0,0,1,59.46,14Z"/></g></g></svg>
          <img className='open' src="../../lib/img/eye2.svg" />
        </div>
        )
    }
    else if (this.props.fileName === "eye3"){
      return (
        <div className="eye">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.5 17.53"><title>iris3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" fill={this.props.lidColor} d="M28,9.67c-.1-.78-1-1.61-2.89-3.26a20.12,20.12,0,0,0-4.34-3.25A14.48,14.48,0,0,0,15,1.53a14.85,14.85,0,0,0-5.78.81A18.69,18.69,0,0,0,5.56,4l-1.31.77c-.08,0-1,.63-1.5,1S.51,7.48.5,8.86c0,1.53,1.61,2.68,3.62,4.07a21.41,21.41,0,0,0,7.23,3.26c3,.69,6.34,1.49,10.12,0C24.55,15,28.31,12.09,28,9.67Z"/><path className="cls-1" fill={this.props.lidColor} d="M66.88,3.45a20.2,20.2,0,0,0-3.75-1.83A16.12,16.12,0,0,0,57.07.5a15.89,15.89,0,0,0-6.16,1.36,20.47,20.47,0,0,0-4.7,3.07c-2,1.57-3,2.37-3.19,3.15,0,.22-.15,1.19,1,2.88A11.4,11.4,0,0,0,49.61,15a19.59,19.59,0,0,0,10.66.51A23,23,0,0,0,68,12.6c2.18-1.31,3.93-2.39,4-3.94C72.07,6.69,69.35,5,66.88,3.45Z"/></g></g></svg>
          <img className="lid" src="../../lib/img/eye3blink.svg" />
          <svg className='open' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.5 17.53"><title>iris3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" fill={this.props.color} d="M28,9.67c-.1-.78-1-1.61-2.89-3.26a20.12,20.12,0,0,0-4.34-3.25A14.48,14.48,0,0,0,15,1.53a14.85,14.85,0,0,0-5.78.81A18.69,18.69,0,0,0,5.56,4l-1.31.77c-.08,0-1,.63-1.5,1S.51,7.48.5,8.86c0,1.53,1.61,2.68,3.62,4.07a21.41,21.41,0,0,0,7.23,3.26c3,.69,6.34,1.49,10.12,0C24.55,15,28.31,12.09,28,9.67Z"/><path className="cls-1" fill={this.props.color} d="M66.88,3.45a20.2,20.2,0,0,0-3.75-1.83A16.12,16.12,0,0,0,57.07.5a15.89,15.89,0,0,0-6.16,1.36,20.47,20.47,0,0,0-4.7,3.07c-2,1.57-3,2.37-3.19,3.15,0,.22-.15,1.19,1,2.88A11.4,11.4,0,0,0,49.61,15a19.59,19.59,0,0,0,10.66.51A23,23,0,0,0,68,12.6c2.18-1.31,3.93-2.39,4-3.94C72.07,6.69,69.35,5,66.88,3.45Z"/></g></g></svg>
          <img className='open' src="../../lib/img/eye3.svg" />
        </div>
        )
    }
    else if (this.props.fileName === "ear1") {
      return (
        <div>
          <div className="ear earL">
            <svg height={this.props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.68 124"><title>earL1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M67.33,122.65C54.08,130-3.5,89.24.72,46.87,3.26,21.28,28.23-3.69,42.91,1.08c12,3.91,18.73,28.29,14.8,59.2C73.93,104.43,73.25,119.36,67.33,122.65Z"/><path fill={this.props.color} d="M63.4,124c-5.33,0-13.19-3.11-21.87-8.81A109.62,109.62,0,0,1,12.18,86.43C3.1,73.1-1,59.4.22,46.82,2,29,14.49,12.08,25.9,4.62,32.23.49,38.33-.94,43.07.61c12.63,4.11,19,29.17,15.15,59.61,14,38,17,58.6,9.35,62.87h0A8.63,8.63,0,0,1,63.4,124ZM39.06,1C35.3,1,31,2.52,26.45,5.46,15.23,12.79,3,29.38,1.21,46.92c-2.6,26.17,19.36,53.3,40.87,67.43,10.89,7.16,20.71,10.25,25,7.86,7.07-3.93,3.76-24.71-9.85-61.76l0-.11v-.12C61,30.68,54.76,5.46,42.76,1.56A11.75,11.75,0,0,0,39.06,1Z"/></g></g></svg>
          </div>
          <div className="ear earR">
            <svg height={this.props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.12 125.51"><title>earR1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M4.57,124.1c-6.13-3.39-7-18.52,9.26-63.16-4.36-31.35,2.31-56,14.63-59.88,15.06-4.72,41,20.8,43.89,46.76C77.13,90.81,18.28,131.67,4.57,124.1Z"/><path fill={this.props.color} d="M8.79,125.51a9.17,9.17,0,0,1-4.46-1c-7.93-4.37-5-25.19,9-63.64C9.05,30,15.35,4.65,28.31.58c4.9-1.53,11.23,0,17.82,4.29,11.77,7.68,24.72,24.88,26.72,42.9,2.93,26.42-18.22,53.24-40.49,68.1C23,122.11,14.53,125.51,8.79,125.51ZM32.31,1a12.35,12.35,0,0,0-3.7.54C16.3,5.4,10.16,30.91,14.33,60.88l0,.12,0,.12C.67,98.57-2.52,119.62,4.82,123.66h0c4.67,2.58,15.26-.8,27-8.62,22-14.69,42.94-41.16,40.05-67.16-2-17.71-14.7-34.62-26.26-42.17C40.83,2.61,36.25,1,32.31,1Z"/></g></g></svg>
          </div>
          <div className="ear earL">
            <img height={this.props.size} src="../../lib/img/earL1outline.svg" />
          </div>
          <div className="ear earR">
            <img height={this.props.size} src="../../lib/img/earR1outline.svg" />
          </div>
        </div>

        )
    }
    else if (this.props.fileName === "ear2") {
      return (
        <div>
          <div className="ear earL">
            <svg height={this.props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.47 137.61"><title>earL2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M78.15,137.61c-30.19,0-47.78-2.59-61-16.54C-4.22,98.44,0,65.93,1.06,59.65,3.41,45.71,11.13,20.37,36.32,7.29c2.89-1.5,29-14.29,55.44-2C117.26,17.1,125.63,43.73,128,54.62c1.78,8,1.41,13.23,1,18.73a76.73,76.73,0,0,0,2,26.27c1,4.32,2.05,7.92,3,11.1,2.22,7.51,3.69,12.48.95,17.26-4.16,7.28-14.72,8.93-30.42,9.25C94.8,137.43,86,137.61,78.15,137.61ZM67.31,1A70.72,70.72,0,0,0,36.78,8.18C12,21.06,4.37,46.06,2,59.81,1,66-3.17,98.09,17.91,120.39c16.33,17.26,39.82,16.79,86.63,15.84,15.35-.31,25.65-1.88,29.58-8.75,2.52-4.41,1.18-9-1.05-16.48-.94-3.19-2-6.8-3-11.16a78.64,78.64,0,0,1-2-26.56c.38-5.43.75-10.56-1-18.44-2.38-10.75-10.63-37-35.72-48.65A56.59,56.59,0,0,0,67.31,1Z"/><path fill={this.props.color} d="M134.55,127.73c-4.1,7.17-14.88,8.69-30,9-47,1-70.52,1.43-87-16C-4.32,97.59.82,64,1.55,59.73c1-6,6.27-37.08,35-52,2.58-1.34,28.52-14.28,55-2,28,13,34.93,44.17,36,49,3.85,17.38-2.44,21.28,3,45C133.94,114.5,138.27,121.22,134.55,127.73Z"/><path fill={this.props.color} d="M78.15,137.61c-30.2,0-47.78-2.59-61-16.53C-4.25,98.39,0,65.93,1.06,59.65,3.42,45.7,11.14,20.36,36.32,7.29c2.89-1.5,29-14.29,55.44-2C117.26,17.1,125.62,43.72,128,54.62c1.78,8,1.41,13.23,1,18.74a77,77,0,0,0,2,26.26c1,4.32,2.05,7.92,3,11.09,2.22,7.52,3.69,12.49.95,17.27h0c-4.15,7.27-14.72,8.93-30.42,9.25C94.8,137.43,86,137.61,78.15,137.61ZM67.31,1A70.72,70.72,0,0,0,36.78,8.18C12,21.05,4.38,46.05,2.05,59.81,1,66-3.2,98.05,17.91,120.39c16.33,17.26,39.81,16.79,86.59,15.84,15.39-.31,25.69-1.89,29.62-8.75h0c2.52-4.41,1.18-9-1.05-16.48-.94-3.19-2-6.81-3-11.16a78.85,78.85,0,0,1-2-26.55c.39-5.43.75-10.56-1-18.45-2.38-10.75-10.63-37-35.72-48.65A56.59,56.59,0,0,0,67.31,1Z"/></g></g></svg>
          </div>
          <div className="ear earR">
            <svg height={this.props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.06 140.95"><title>earR2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M129,96.25c-2.44,6.27-13.63,35-39.32,43.13-7.4,2.35-8.14.5-46.77-2.43-30.43-2.31-34.25-1.48-38.48-5.85-8.9-9.2,0-21.26,0-57.21,0-30.83-6.47-36.72-.08-48.7C15.82,3.74,48.1,1.16,53,.76c27-2.16,64.19,9.33,77.64,40.48C141.05,65.24,132,88.62,129,96.25Z"/><path fill={this.props.color} d="M83.3,141c-2.46,0-5.68-.33-11.15-.89-6.05-.62-15.2-1.55-29.24-2.62-6.37-.48-11.64-.83-15.87-1.11-16.1-1.07-19.45-1.29-22.93-4.89-5.4-5.58-4.49-12.07-2.83-23.86A226.7,226.7,0,0,0,4,73.89,193.24,193.24,0,0,0,2,46.11c-1.2-9-1.86-14,1.94-21.16C14.36,5.4,41.71,1.17,53,.26,82.06-2.06,118.25,11.19,131.14,41c10.5,24.31,1.37,47.7-1.63,55.39-8.84,22.7-22.91,38.12-39.64,43.42A19.37,19.37,0,0,1,83.3,141ZM59.61,1q-3.31,0-6.53.25C42,2.16,15,6.31,4.81,25.42,1.17,32.26,1.81,37.13,3,46A193.11,193.11,0,0,1,5,73.89a226.8,226.8,0,0,1-2.68,33.83c-1.61,11.48-2.5,17.8,2.56,23,3.21,3.31,6.12,3.51,22.28,4.58,4.23.28,9.5.63,15.88,1.12,14,1.06,23.21,2,29.26,2.62,10.77,1.1,12.71,1.29,17.32-.17,16.43-5.21,30.28-20.42,39-42.84h0c3-7.59,12-30.69,1.64-54.63C118.47,14.22,87,1,59.61,1Z"/></g></g></svg>
          </div>
          <div className="ear earL">
            <img height={this.props.size} src="../../lib/img/earL2outline.svg" />
          </div>
          <div className="ear earR">
            <img height={this.props.size} src="../../lib/img/earR2outline.svg" />
          </div>
        </div>

        )
    }
    else if (this.props.fileName === "ear3") {
      return (
        <div>
          <div className="ear earL">
            <svg height={this.props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.56 165.97"><title>earL3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M61,165c-9.35-2.94-35.57-39.3-48-72C.73,60.75-.08,47.88,0,40c.15-16,4.2-39,12-40,6.34-.82,9,13.69,29,41,9,12.29,16.47,22.51,29,33,17.13,14.35,44.75,33.33,47,41C122.62,134.17,84.53,172.44,61,165Z"/></g></g></svg>
          </div>
          <div className="ear earR">
            <svg height={this.props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.54 167.11"><title>earR3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M104.31,93C93,126.11,67.38,162.67,58.14,165.93c-23.26,8.23-62.66-28.7-57.71-48,2-7.74,29.63-27,46.26-41.93C58.84,65.06,66,54.59,74.53,42c19-28,21.19-42.58,27.56-42,7.83.73,12.67,23.62,13.38,39.55C115.81,47.42,115.46,60.31,104.31,93Z"/></g></g></svg>
          </div>
          <div className="ear earL">
            <img height={this.props.size} src="../../lib/img/earL3outline.svg" />
          </div>
          <div className="ear earR">
            <img height={this.props.size} src="../../lib/img/earR3outline.svg" />
          </div>
        </div>

        )
    }


    else if (this.props.fileName === "pattern1") {
      return (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -100 211.89 269.37"><title>pattern1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M37.25,11.85c-7.25-1.46-9-2-9-2a37.4,37.4,0,0,1-7.09-3A37.23,37.23,0,0,1,13,.71L13.7,0a36.69,36.69,0,0,0,7.89,5.92,37.07,37.07,0,0,0,6.91,3s1.78.54,9,2Z"/><path fill={this.props.color} d="M30.25,27.85c-7.25-1.46-9-2-9-2a37.4,37.4,0,0,1-7.09-3A37.23,37.23,0,0,1,6,16.71L6.7,16a36.69,36.69,0,0,0,7.89,5.92,37.07,37.07,0,0,0,6.91,3s1.78.54,9,2Z"/><path fill={this.props.color} d="M24.25,46.85c-7.25-1.46-9-2-9-2a37.4,37.4,0,0,1-7.09-3A37.23,37.23,0,0,1,0,35.71L.7,35a36.69,36.69,0,0,0,7.89,5.92,37.07,37.07,0,0,0,6.91,3s1.78.54,9,2Z"/><path fill={this.props.color} d="M169.4,13.94c-1,0-2.05,0-3.08-.08l.06-1a55.58,55.58,0,0,0,13.87-1,55.41,55.41,0,0,0,9.91-3l.38.93a56.59,56.59,0,0,1-10.09,3A56.87,56.87,0,0,1,169.4,13.94Z"/><path fill={this.props.color} d="M174.4,30.94c-1,0-2.05,0-3.08-.08l.06-1a55.58,55.58,0,0,0,13.87-1,55.41,55.41,0,0,0,9.91-3l.38.93a56.59,56.59,0,0,1-10.09,3A56.87,56.87,0,0,1,174.4,30.94Z"/><path fill={this.props.color} d="M178.4,42.94c-1,0-2.05,0-3.08-.08l.06-1a55.58,55.58,0,0,0,13.87-1,55.41,55.41,0,0,0,9.91-3l.38.93a56.59,56.59,0,0,1-10.09,3A56.87,56.87,0,0,1,178.4,42.94Z"/></g></g></svg>
        </div>

        )
    }
    else if (this.props.fileName === "pattern2") {
      return (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.89 269.37"><title>pattern2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M133.07,33.52c-2.68,1.21-4.19-1-8,0-2.77.72-4.58,2.55-7,5-2.85,2.89-2.5,3.7-5,6-2,1.88-5,4.56-8,4-2.17-.4-3.45-2.26-6-6-2.75-4-2.06-4.5-4-7a22.3,22.3,0,0,0-10-7c-3.17-1.09-4.13-.56-8-2a31.45,31.45,0,0,1-6-3c-1.29-.83-2.21-2.06-2-3,.41-1.82,5.27-1.45,12-3,4.26-1,7.74-1.79,11-4,7.34-5,8.15-13.48,11-13,1.36.23,1.15,2.05,4,6a34.1,34.1,0,0,0,7,7,43,43,0,0,0,12,7c6.77,2.54,9.81,1.56,11,4C138.42,27.28,136.24,32.09,133.07,33.52Z"/><path fill={this.props.color} d="M105.92,49.1A5.07,5.07,0,0,1,105,49c-2.39-.44-3.78-2.49-6.32-6.21a23.16,23.16,0,0,1-2.39-4.25,11.11,11.11,0,0,0-1.59-2.72A21.77,21.77,0,0,0,84.91,29a19,19,0,0,0-3.37-.8A21.33,21.33,0,0,1,76.9,27a31.9,31.9,0,0,1-6.1-3c-1.31-.84-2.5-2.26-2.22-3.53.34-1.48,2.4-1.77,5.83-2.24,1.81-.25,4.07-.56,6.55-1.14,4.09-.94,7.63-1.75,10.83-3.92,3.94-2.67,6-6.42,7.45-9.16,1.33-2.43,2.28-4.2,3.92-3.92,1,.16,1.35.93,1.91,2.09a24.09,24.09,0,0,0,2.41,4.11,33.22,33.22,0,0,0,6.91,6.9,42.18,42.18,0,0,0,11.86,6.92,40.05,40.05,0,0,0,6.63,1.84c2.32.47,3.84.78,4.64,2.41a6.14,6.14,0,0,1,0,4.77A8.64,8.64,0,0,1,133.28,34a5.5,5.5,0,0,1-3.88.12,7.77,7.77,0,0,0-4.2-.09c-2.64.68-4.37,2.44-6.77,4.86A19.52,19.52,0,0,0,115.88,42a14.87,14.87,0,0,1-2.47,2.9C111.43,46.7,108.82,49.1,105.92,49.1ZM102.86,1c-.88,0-1.67,1.46-2.74,3.43-1.53,2.83-3.63,6.7-7.77,9.51C89,16.21,85.38,17,81.18,18c-2.52.58-4.8.9-6.64,1.15-2.68.37-4.8.67-5,1.47s.62,1.72,1.78,2.47a31.06,31.06,0,0,0,5.91,2.95,20.74,20.74,0,0,0,4.45,1.16,19,19,0,0,1,3.54.84,22.81,22.81,0,0,1,10.23,7.17,12,12,0,0,1,1.71,2.92,22,22,0,0,0,2.31,4.1c2.46,3.61,3.69,5.43,5.67,5.79,2.79.51,5.54-2,7.55-3.86a13,13,0,0,0,2.34-2.75,21.09,21.09,0,0,1,2.67-3.25C120.13,35.72,122,33.79,125,33a8.79,8.79,0,0,1,4.68.08,4.53,4.53,0,0,0,3.24,0h0a7.63,7.63,0,0,0,3.68-4.34,5.3,5.3,0,0,0,.07-4c-.56-1.14-1.55-1.39-3.94-1.87A42.35,42.35,0,0,1,125.9,21a43.46,43.46,0,0,1-12.14-7.08,34.08,34.08,0,0,1-7.09-7.1,26,26,0,0,1-2.51-4.26c-.53-1.1-.72-1.46-1.17-1.54Z"/><path fill={this.props.color} d="M62.22,190.66a14.2,14.2,0,0,1-7,3.36c-2.49.64-4.84,1.23-6.11,3.78a6.06,6.06,0,0,0-.3,4.32,14.19,14.19,0,0,1,.25,4.84c-.54,4.47-3.14,10.1-7.74,12.62-6.06,3.32-14,1-18.43-2.93-3.5-3.1-4-6.41-4.67-10.24S16.9,198.3,13,193.69a28.93,28.93,0,0,0-7.72-6.14c-2.74-1.64-4.72-2.83-5.17-5.61a5.19,5.19,0,0,1,0-1.28c.43-5.16,5.1-8.94,7.12-15.63.86-2.83,1-5.21,3.11-8.48a17.15,17.15,0,0,1,1.68-2.19,20.46,20.46,0,0,1,10.75-5.85c2.79-.61,8-1.74,11.59.91,1.49,1.1,1.9,2.25,2.52,4a28.38,28.38,0,0,0,3.36,6.88c2.41,3.64,4.15,6.28,7.28,7.2a7.9,7.9,0,0,0,5.27-.43,8.14,8.14,0,0,1,4.77-.56c4.58,1,7.18,5.77,7.65,6.73C67.87,178.79,66.6,186.44,62.22,190.66Z"/><path fill={this.props.color} d="M190.57,161c-3.17,6.79-6.88,5.68-11,14a43.32,43.32,0,0,0-4,15,54.67,54.67,0,0,0,0,11c.75,7.18,2.42,8.95,3,13,1.67,11.52-9.24,15-11,31-.32,2.91-1.38,12.52,3,15,5.21,3,16.06-5.32,22-13,2.81-3.63,4.87-8.75,9-19a125.73,125.73,0,0,0,6-19,132.62,132.62,0,0,0,3-19c.86-9.93,1.3-15.07,0-22-1.44-7.71-3.29-8.26-4-16-.56-6.12-.88-10.07-1-13-.61-15.42-8.06-35.13-14-35-4,.09-8.35,9.08-8,17,.37,8.21,5.55,9.36,8,20C192.36,144.47,194.32,153,190.57,161Z"/><path fill={this.props.color} d="M173.12,261.14a5.52,5.52,0,0,1-2.79-.68c-4.67-2.65-3.6-12.32-3.25-15.49.87-8,4-12.85,6.71-17.16s5.11-8,4.29-13.72a23.69,23.69,0,0,0-1.09-4.22,37,37,0,0,1-1.91-8.8,54.89,54.89,0,0,1,0-11.1,44.24,44.24,0,0,1,4.05-15.17,22.61,22.61,0,0,1,6.2-7.92,16.44,16.44,0,0,0,4.8-6.07l.45.21-.45-.21c3.68-7.88,1.78-16.15,1-19.68a31,31,0,0,0-4.57-10.5c-1.74-2.8-3.25-5.22-3.45-9.59-.25-5.59,1.9-12.31,5-15.62a5.18,5.18,0,0,1,3.49-1.9c6.46-.15,13.92,20.53,14.51,35.48.12,3.06.47,7.23,1,13a29.81,29.81,0,0,0,1.94,8.58,42.48,42.48,0,0,1,2.05,7.37c1.32,7,.88,12.06,0,22.13a135.09,135.09,0,0,1-3,19.08,128.54,128.54,0,0,1-6,19.07c-4.14,10.28-6.22,15.43-9.07,19.12C188,253.79,179.12,261.14,173.12,261.14Zm18.51-156.62h0a4.26,4.26,0,0,0-2.78,1.59c-2.49,2.66-5,8.79-4.73,14.89.18,4.1,1.63,6.42,3.3,9.1a31.55,31.55,0,0,1,4.69,10.81c.83,3.63,2.79,12.13-1,20.32h0a17.22,17.22,0,0,1-5.05,6.4,21.5,21.5,0,0,0-6,7.61,43.18,43.18,0,0,0-4,14.83,53.65,53.65,0,0,0,0,10.9,36.5,36.5,0,0,0,1.87,8.59,25.77,25.77,0,0,1,1.13,4.39c.87,6-1.59,9.91-4.43,14.4-2.68,4.22-5.72,9-6.57,16.73-.89,8.08,0,13,2.75,14.51,3.75,2.13,13.44-2.64,21.36-12.87,2.76-3.58,4.82-8.69,8.93-18.88a127.69,127.69,0,0,0,6-18.93,133.2,133.2,0,0,0,3-18.93c.87-10,1.3-15,0-21.87a40.65,40.65,0,0,0-2-7.21,31,31,0,0,1-2-8.83c-.52-5.76-.87-9.95-1-13C204.45,123.49,197.06,104.52,191.63,104.52Z"/><path fill={this.props.color} d="M168.57,38c-1.53.44,3.43,10.26-1,21-1.67,4-3.83,6.13-6,13-1.7,5.41-1.58,8-1,10a11.42,11.42,0,0,0,5,7c2.13,1.22,3.52.75,8,1,1.8.1,7.84.33,12,2,7.72,3.1,10,11.48,11,11s-2.16-10.64-7-22c-2.78-6.52-3.95-8.48-8-17C173.34,46.69,170,37.6,168.57,38Z"/><path fill={this.props.color} d="M196.47,103.55c-.58,0-1.06-.79-1.82-2.07-1.56-2.6-4.17-7-9.26-9-3.85-1.55-9.41-1.84-11.49-1.95l-.35,0c-1.28-.07-2.29-.08-3.18-.09-2.2,0-3.42,0-5.05-1a11.65,11.65,0,0,1-5.23-7.3c-.55-1.94-.81-4.53,1-10.29a43.31,43.31,0,0,1,4-9,34.93,34.93,0,0,0,2-4c2.89-7,1.72-13.54,1-17.44-.43-2.38-.64-3.57.3-3.85h0c1.34-.39,2.46,2,7,12,1.74,3.86,3.91,8.65,6.6,14.32,1.4,2.94,2.46,5.11,3.36,6.94,1.7,3.49,2.83,5.8,4.65,10.08,1.53,3.59,9.05,21.56,6.76,22.64A.69.69,0,0,1,196.47,103.55Zm-27.7-65a15.14,15.14,0,0,0,.34,2.64c.68,3.75,1.93,10.72-1.08,18A36,36,0,0,1,166,63.33a41.54,41.54,0,0,0-3.91,8.84c-1.74,5.51-1.51,7.93-1,9.71a10.87,10.87,0,0,0,4.77,6.71c1.4.8,2.46.81,4.57.84.85,0,1.91,0,3.21.09l.35,0c2.13.11,7.8.41,11.81,2,5.4,2.17,8.23,6.87,9.74,9.4.28.47.58,1,.81,1.29,0-2-2.32-9.59-7.2-21-1.81-4.25-2.93-6.55-4.63-10-.9-1.84-2-4-3.36-7-2.7-5.68-4.87-10.48-6.62-14.33C171.81,44,169.66,39.2,168.77,38.57Z"/><path fill={this.props.color} d="M25.57,76c-.26,3.44,2.84,4.38,3,9a12.38,12.38,0,0,1-2,7c-2.25,3.53-5.25,4.13-8,6-1.5,1-3.75,3-8,15a155,155,0,0,0-7,27c-.91,5.75-3,18.41-1,19,1.68.5,3.18-8.29,12-17,5.26-5.18,7.35-4.65,13-11l8-9c4.21-4.71,5.24-5.82,7-6,4.07-.4,4.9,5.16,10,5,5.79-.18,9.75-4.7,10-5,.54-.63,5.89-7,4-13-2.59-8.32-16.22-7.66-17-14-.38-3.08,2.8-3.66,7-12,1.91-3.78,3.73-7.4,4-12,.35-5.87-2.21-7-4-15-2.4-10.66.24-17.23-2-18-.57-.2-1.66-.08-9,9-5.78,7.17-8.68,10.75-10,14-2.65,6.54-.79,8.28-4,13C28.66,72.31,25.82,72.79,25.57,76Z"/><path fill={this.props.color} d="M2.74,159.55a1.18,1.18,0,0,1-.31-.05c-2-.58-1.3-7.34.53-18.82l.12-.74a158.27,158.27,0,0,1,7-27.08c4.16-11.76,6.41-14,8.19-15.25a25.53,25.53,0,0,1,2.54-1.47,12.3,12.3,0,0,0,5.32-4.39A11.87,11.87,0,0,0,28.07,85a8.94,8.94,0,0,0-1.65-4.81A6.52,6.52,0,0,1,25.07,76c.16-2.06,1.29-3.12,2.72-4.45a21.39,21.39,0,0,0,3.37-3.79,12.16,12.16,0,0,0,2.2-6.14,25.61,25.61,0,0,1,1.75-6.77c1.35-3.31,4.26-6.92,10.06-14.11C53.05,31,54,31.28,54.74,31.55c1.41.49,1.36,2.33,1.28,5.38a48.92,48.92,0,0,0,1,13,39.22,39.22,0,0,0,2.39,7.26,15.44,15.44,0,0,1,1.62,7.88c-.27,4.7-2.11,8.34-4,12.2a40.85,40.85,0,0,1-5.16,7.92c-1.31,1.61-2,2.42-1.79,3.79.33,2.74,3.42,4.08,7,5.63,4,1.74,8.56,3.71,10,8.28,1.82,5.83-2.67,11.78-4.09,13.47-.18.21-4.27,5-10.37,5.18-2.88.07-4.49-1.49-5.92-2.89-1.25-1.23-2.33-2.28-4.05-2.11-1.55.16-2.49,1.15-6.67,5.83l-7.2,8.1-.8.9a34.77,34.77,0,0,1-7.38,6.46,37.33,37.33,0,0,0-5.65,4.57A48.64,48.64,0,0,0,5.41,156C4.26,158.3,3.63,159.55,2.74,159.55ZM54.33,32.48c-.58,0-2.53,1.62-8.37,8.86S37.33,52,36,55.21a24.41,24.41,0,0,0-1.69,6.53A13.16,13.16,0,0,1,32,68.3a22.16,22.16,0,0,1-3.52,4c-1.37,1.28-2.27,2.12-2.4,3.8h0a5.63,5.63,0,0,0,1.2,3.65A9.86,9.86,0,0,1,29.07,85,12.87,12.87,0,0,1,27,92.29,13.22,13.22,0,0,1,21.3,97a26.56,26.56,0,0,0-2.45,1.41c-1.19.82-3.41,2.33-7.81,14.76a157.86,157.86,0,0,0-7,26.91l-.12.74C1.68,155.1,2,158.34,2.71,158.54c.34-.06,1.12-1.6,1.8-3a49.59,49.59,0,0,1,9.71-13.91A37.8,37.8,0,0,1,20,137a33.63,33.63,0,0,0,7.19-6.29l.8-.91c1.33-1.49,4-4.53,7.2-8.09,4.2-4.7,5.32-6,7.32-6.17,2.18-.22,3.54,1.11,4.85,2.39s2.74,2.68,5.19,2.61c5.65-.17,9.47-4.63,9.63-4.82,1.34-1.59,5.57-7.18,3.9-12.53-1.28-4.13-5.42-5.93-9.42-7.66-3.7-1.61-7.19-3.12-7.59-6.43-.22-1.79.61-2.83,2-4.54a39.09,39.09,0,0,0,5.05-7.74C58,73,59.81,69.49,60.07,65a14.47,14.47,0,0,0-1.54-7.43,41.48,41.48,0,0,1-2.45-7.43A51.06,51.06,0,0,1,55,36.9c.06-2.41.11-4.16-.61-4.41Z"/><path fill={this.props.color} d="M45.57,228c1.64-1.09,1.15-3.16,3-5,1.47-1.46,3.42-1.8,6-2,8.18-.62,12.36-1.1,16,1a23.72,23.72,0,0,1,11,17c.51,4.33-.5,8,2,10,2.12,1.65,4.51.27,6,2,1.89,2.19-1,5.45,0,9,1.76,6.05,13.2,6.7,13,8s-12,1.19-24-1a87.3,87.3,0,0,1-12-3c-5-1.66-5.16-2.24-12-5-11.16-4.5-16.37-7.61-17-8-12.61-7.74-20.79-22.62-18-26,2.11-2.55,12.37-.83,19,2C40.46,227.82,43.56,229.36,45.57,228Z"/><path fill={this.props.color} d="M97.08,269.37a112.83,112.83,0,0,1-18.6-1.86,89.62,89.62,0,0,1-12.06-3,48.5,48.5,0,0,1-6-2.38c-1.38-.64-3.1-1.43-6.08-2.63-11.29-4.56-16.52-7.7-17.08-8-10.75-6.6-17.75-17.75-18.67-23.25a4.28,4.28,0,0,1,.55-3.5c2.42-2.93,13.21-.85,19.58,1.86l.46.2c1.77.77,4.44,1.93,6.06.85h0a3.55,3.55,0,0,0,1.24-2,7.07,7.07,0,0,1,1.69-2.94c1.67-1.67,3.94-2,6.31-2.15l1.47-.11c7.27-.56,11.28-.88,14.82,1.18A24.18,24.18,0,0,1,82.07,239a36.25,36.25,0,0,1,.19,3.76c0,2.62.06,4.69,1.62,5.91a5,5,0,0,0,2.9.86A4.11,4.11,0,0,1,90,250.7c1.17,1.35.78,3,.36,4.72a8.53,8.53,0,0,0-.26,4.46c1.1,3.78,6.33,5.33,9.8,6.36,2.23.66,3.35,1,3.22,1.86a.89.89,0,0,1-.37.56C102,269.14,99.94,269.37,97.08,269.37ZM24,224.28c-2,0-3.47.32-4.08,1.06a3.41,3.41,0,0,0-.33,2.69c1.36,8.17,11.63,18.53,18.2,22.57.56.33,5.72,3.44,16.93,8,3,1.21,4.74,2,6.13,2.65a46.35,46.35,0,0,0,5.84,2.34,89.19,89.19,0,0,0,11.93,3C90,268.61,100,268.69,101.88,268a22.35,22.35,0,0,0-2.32-.77c-3.45-1-9.22-2.74-10.47-7a9.43,9.43,0,0,1,.25-5c.38-1.6.69-2.86-.15-3.83a3.15,3.15,0,0,0-2.48-.86,5.82,5.82,0,0,1-3.44-1.07c-2-1.51-2-3.91-2-6.69a35.64,35.64,0,0,0-.18-3.65,23.15,23.15,0,0,0-10.76-16.63c-3.28-1.89-7.17-1.59-14.24-1l-1.47.11c-2.68.21-4.38.56-5.68,1.86a6.22,6.22,0,0,0-1.46,2.56,4.48,4.48,0,0,1-1.62,2.5c-2.08,1.39-5.05.09-7-.76l-.45-.2A41.53,41.53,0,0,0,24,224.28Z"/><path fill={this.props.color} d="M135.57,42c-3.46,1.09-5.2-2.18-9-1-4.71,1.47-8,8.35-7,14,.69,4,3.37,6.61,6,9,13,11.85,24.44,22.21,29,19,2.29-1.61,0-4.62,2-13,2.17-9,5.82-9.57,7-17,.29-1.78,1.48-10.56-4-18-2.94-4-9.35-9.7-14-8C140,29.07,141.6,40.13,135.57,42Z"/><path fill={this.props.color} d="M152.53,84.12c-5.59,0-15.36-8.88-27.29-19.73-3-2.69-5.47-5.25-6.16-9.28-1-6.1,2.46-13,7.34-14.57a7,7,0,0,1,5,.52,5.42,5.42,0,0,0,3.95.48h0c2.84-.89,3.85-4,4.92-7.35s2.11-6.55,5.06-7.64c4.91-1.8,11.54,4.06,14.57,8.18,5.36,7.27,4.49,15.9,4.1,18.37a19.85,19.85,0,0,1-3.2,8.07,27.62,27.62,0,0,0-3.81,9,31.83,31.83,0,0,0-.89,8.81c0,2.11.07,3.51-1.31,4.48A3.93,3.93,0,0,1,152.53,84.12Zm-24.3-42.86a5,5,0,0,0-1.51.24c-4.36,1.36-7.6,7.89-6.65,13.44.63,3.72,3,6.15,5.84,8.71,12.41,11.29,24.14,21.94,28.37,19,.91-.64.93-1.52.89-3.64a32.73,32.73,0,0,1,.92-9.06A28.78,28.78,0,0,1,160,60.65a18.66,18.66,0,0,0,3.07-7.71c.38-2.37,1.22-10.66-3.91-17.62-3.07-4.17-9.27-9.35-13.43-7.83-2.49.92-3.44,3.87-4.45,7-1.1,3.42-2.23,7-5.57,8h0A6.36,6.36,0,0,1,131.1,42,7.6,7.6,0,0,0,128.23,41.26Z"/><path fill={this.props.color} d="M92.57,222c0,.63,0,5.24-3,7s-7.72-.22-10-3c-2.06-2.5-.92-4.1-3-7-2.26-3.14-5.75-4.27-8-5-6.48-2.09-9,.4-12-2s-3.79-7.45-2-10c1.3-1.85,3-1,6-3,4.14-2.87,3.93-6.84,6-7s2.78,4.17,7,9,6.36,3.55,12,9C88.76,213.11,92.56,216.87,92.57,222Z"/><path fill={this.props.color} d="M86.93,230.18a10.77,10.77,0,0,1-7.74-3.84,7.47,7.47,0,0,1-1.61-3.6,8.19,8.19,0,0,0-1.41-3.43c-2.16-3-5.52-4.09-7.75-4.81a18.81,18.81,0,0,0-7-.87c-1.94.07-3.47.12-5.12-1.22-3-2.45-4.09-7.84-2.1-10.68A4.28,4.28,0,0,1,57,200.08a9.55,9.55,0,0,0,3.34-1.47A11.69,11.69,0,0,0,64.06,194c.66-1.27,1.24-2.37,2.47-2.47,1.53-.11,2.36,1.37,3.51,3.42A32.24,32.24,0,0,0,74,200.69a16.72,16.72,0,0,0,5.44,4.23,26.5,26.5,0,0,1,6.53,4.74c3,2.92,7.14,6.92,7.15,12.36h0c0,1.66-.31,5.71-3.25,7.42A5.6,5.6,0,0,1,86.93,230.18ZM62.8,212.6a18.35,18.35,0,0,1,5.93,1c2.35.76,5.9,1.91,8.25,5.18a9,9,0,0,1,1.58,3.8A6.33,6.33,0,0,0,80,225.7c2.19,2.67,6.57,4.52,9.36,2.89,2.55-1.49,2.75-5.4,2.75-6.56h0c0-5-3.8-8.69-6.85-11.64a25.1,25.1,0,0,0-6.31-4.58,17.9,17.9,0,0,1-5.71-4.45,33,33,0,0,1-4-5.92c-1.1-2-1.74-3-2.56-2.91-.65,0-1,.7-1.67,1.93a12.48,12.48,0,0,1-4.08,5A10.59,10.59,0,0,1,57.21,201,3.35,3.35,0,0,0,55,202.31c-1.69,2.41-.71,7.21,1.91,9.32,1.36,1.11,2.59,1.07,4.45,1C61.8,212.62,62.28,212.6,62.8,212.6Z"/><path fill={this.props.color} d="M59.57,27c-2.79,3-1.19,8.75,0,13,1,3.71,1.54,3.28,3,8,1.9,6.13,1.29,7.82,3,9,2.35,1.62,4.59-.17,11-1,9.34-1.21,12.67,1.53,15-1,2.49-2.69,1.17-8.46-1-12-2.27-3.71-4.39-3.3-11-8-8.31-5.91-10-10.21-15-10A7.31,7.31,0,0,0,59.57,27Z"/><path fill={this.props.color} d="M67.7,58.18a4,4,0,0,1-2.41-.75c-1.2-.82-1.41-1.84-1.83-3.87a51.71,51.71,0,0,0-1.37-5.39,29.94,29.94,0,0,0-1.65-4.36,20.29,20.29,0,0,1-1.35-3.65c-1.21-4.32-2.87-10.23.11-13.48h0a7.36,7.36,0,0,1,5.35-2.16c3.32-.15,5.33,1.67,8.36,4.4a72.37,72.37,0,0,0,7,5.69,57.78,57.78,0,0,0,6,3.71c2.34,1.29,3.74,2.08,5.19,4.44,2.08,3.4,3.74,9.56.94,12.6-1.41,1.53-3.14,1.36-5.75,1.11a38.61,38.61,0,0,0-9.55.05,49.47,49.47,0,0,0-5.49,1.06A15.43,15.43,0,0,1,67.7,58.18ZM59.57,27l.37.34c-2.6,2.84-1,8.44.11,12.53a19.85,19.85,0,0,0,1.3,3.5,31.81,31.81,0,0,1,1.7,4.48,55.38,55.38,0,0,1,1.39,5.49c.39,1.87.55,2.65,1.42,3.25,1.31.91,2.64.59,5,0a48.35,48.35,0,0,1,5.6-1.08,39.57,39.57,0,0,1,9.78-.06c2.47.25,3.84.38,4.91-.79,2.2-2.38,1.16-7.77-1-11.4-1.31-2.14-2.56-2.83-4.82-4.09a56.8,56.8,0,0,1-6-3.76,73.44,73.44,0,0,1-7-5.77c-2.94-2.66-4.72-4.27-7.65-4.14a6.39,6.39,0,0,0-4.65,1.84Z"/><path fill={this.props.color} d="M126.57,239c-1.61.36-2.35,1-8,6-4.43,3.9-6.65,5.85-7,6-7,3-13.69-4.7-17-2-2.28,1.87-1.6,7.57,1,11,2.71,3.58,7.12,4.17,14,5,1.78.22,6,.64,15,0,10.32-.73,10.75-1.71,18-2,10.56-.42,16.59,1.37,17,0,.51-1.71-9.32-3-16-12-2.73-3.67-3.17-6.25-7-9C135.18,241,131,238,126.57,239Z"/><path fill={this.props.color} d="M116,265.86a51.65,51.65,0,0,1-6.5-.34c-6.64-.8-11.44-1.38-14.34-5.2-2.62-3.45-3.55-9.53-.91-11.69,1.73-1.41,4.1-.43,6.85.7,3.12,1.29,6.67,2.76,10.27,1.23.36-.19,3.09-2.59,6.86-5.91l.38-.34c5.32-4.68,6.14-5.4,7.85-5.78h0c4.67-1,9,2.07,10.39,3.09a16.45,16.45,0,0,1,5,5.8,36.12,36.12,0,0,0,2.14,3.3c4.16,5.59,9.61,8.18,12.87,9.73,2.27,1.08,3.52,1.68,3.21,2.72s-1.94,1-5.46.68a98.31,98.31,0,0,0-12-.33,54.84,54.84,0,0,0-7.68.81,97.27,97.27,0,0,1-10.3,1.19C121,265.77,118.22,265.86,116,265.86ZM96.35,248.93a2.2,2.2,0,0,0-1.46.48c-2,1.62-1.42,7,1.08,10.31s6.62,4,13.66,4.81c1.37.16,5.52.66,14.91,0,5.21-.37,7.87-.8,10.21-1.17a56.06,56.06,0,0,1,7.8-.83,95.88,95.88,0,0,1,12.12.34c2,.16,4.16.32,4.43,0a10.42,10.42,0,0,0-2.69-1.52c-3.34-1.59-8.94-4.25-13.24-10a38.82,38.82,0,0,1-2.2-3.39,15.65,15.65,0,0,0-4.69-5.5c-1.33-1-5.36-3.85-9.6-2.92-1.45.32-2.25,1-7.4,5.55l-.38.34c-5.52,4.86-6.74,5.92-7.13,6.08-4,1.69-7.9.07-11-1.23A13.25,13.25,0,0,0,96.35,248.93Z"/></g></g></svg>
        </div>

        )
    }
    else if (this.props.fileName === "pattern3") {
      return (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 -34 217.48 269.37"><title>pattern3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={this.props.color} d="M58.21,0c1.43.35.79,2.73,3,6,2.67,3.94,7,5.32,9,6a19,19,0,0,0,7,1c6.65-.3,10-4,11-3s-1.6,6.75-6,10a14.79,14.79,0,0,1-8,3c-1.86.1-2.8-.27-6-1-5.67-1.29-5.58-.81-11-2-7-1.52-10.47-2.27-11-4-.34-1.12.33-2,4-7C55.8,1.42,57-.27,58.21,0Z"/><path fill={this.props.color} d="M171.21,6c-2-.07-3.29,2-8,4a38.76,38.76,0,0,1-6,2,20,20,0,0,1-6,1,15.89,15.89,0,0,1-5-1,16.6,16.6,0,0,1-4-2c-2.59-1.78-3-3.17-4-3-1.2.2-2.06,2.3-2,4,.06,1.47.8,2.58,2,4a27.44,27.44,0,0,0,8,7,27.61,27.61,0,0,0,8,3,24,24,0,0,0,11,0,18.66,18.66,0,0,0,7-3c2-1.46,4.39-3.15,5-6C178.18,11.54,174.4,6.16,171.21,6Z"/><path fill={this.props.color} d="M7.21,96a39.76,39.76,0,0,0,6.08,8.4c1.09,1.14,1.62,1.4,3.94,3.74,2.87,2.88,3.92,4.36,7,6.86,4.89,4,8.41,6.88,14,9,3.49,1.33,6.31,2.4,10,2,6.46-.68,9.22-5.16,11-4,2.09,1.36.37,8.77-3,14a22.82,22.82,0,0,1-11,9c-4,1.48-7.12,1.31-13,1-4.39-.23-7.8-.4-12-2a47.2,47.2,0,0,1-11-6c-4-2.82-6-4.24-7-6-2.49-4.35-.56-8.67,2-20C5,108.43,6.17,102.94,7.21,96Z"/><path fill={this.props.color} d="M211.21,106c-1.91-.14-4.75,7.13-9,18a20.85,20.85,0,0,1-5.16,8.2,21.07,21.07,0,0,1-3.84,2.8,27.24,27.24,0,0,1-8,3c-4.27,1-9.58,2.29-16,1-5.36-1.07-7.83-3.17-9-2-1.41,1.42.34,6.07,3,9a16.84,16.84,0,0,0,4,3,106,106,0,0,0,11,6c4.94,2.24,7.4,3.35,10,4,3.36.84,11.48,2.88,19-1a17.33,17.33,0,0,0,9-10c2.46-7.07.93-14.34-1-23h0C212.56,110.48,212.67,106.14,211.21,106Z"/><path fill={this.props.color} d="M1.21,154c2.7-1.06,6,9.89,19,17a51.61,51.61,0,0,0,14,5c5.12,1.13,9,2,14,1,1.4-.27,4.6-1.51,11-4,5.42-2.1,6.36-2.62,7-3,5.4-3.19,6.62-6.49,8-6,2.06.74,1.22,8.72,0,14-.93,4.06-2.07,9-6,14-4.31,5.51-9.45,7.89-14,10a36.7,36.7,0,0,1-14,4c-9.46.54-17-3.62-20.4-5.89h0a13.63,13.63,0,0,0-5.66-2c-.34,0-.62-.07-.78-.09h-.16c-5.43-.37-10-21-10-21C1.14,167.69-1.63,155.16,1.21,154Z"/><path fill={this.props.color} d="M216.21,170c-1.71-.75-3.93,5.49-12,10a35.55,35.55,0,0,1-13,4,43.36,43.36,0,0,1-16,0c-3.72-.75-10.35-2.1-16-7a45.33,45.33,0,0,0-8-6c-2.81-1.62-4.88-2.75-6-2-2.05,1.39.35,8.27,2,13,2,5.68,4,11.24,9,17a30,30,0,0,0,8,7c3.74,2.16,7.49,2.77,15,4,5.46.9,8.6,1.39,13,1a32,32,0,0,0,9-2,21.8,21.8,0,0,0,7-4c3.38-3.15,3.84-7.07,5-14C215.86,175.34,217.7,170.69,216.21,170Z"/></g></g></svg>
        </div>

        )
    }
    else if (this.props.fileName === "feet2") {
      return (
        <div>
          <img className="foot_left" src="../../lib/img/feet2.svg" />
        </div>

        )
    }
    else {
      let filePath = this.props.fileName
      return (
        <div>
          <img src={"../../lib/img/"+filePath+".svg"} />
        </div>
        )
    }
  }
}

export default deliverSvg


