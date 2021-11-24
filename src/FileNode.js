import React, { Component } from 'react';

class FileNode extends Component {
    state ={
      open:false
    };
    toogle =()=>{
        this.setState({
            open:!this.state.open
        })
    }

    render() {
        const{name,files} = this.props;
        const {open} = this.state;
        if (!files) {
            return <li>{name}</li>;
          }

        return (
            <div>
            <div className={`folder ${open ? 'open':''}`} onClick={this.toogle}>
              {name}
            </div>
            {!open ? "":( 
            <ul>
               {files.map((file)=>(
                   <FileNode {...file}/>
               ))}
            </ul>
            )}
            </div>   
        )}
}

export default FileNode;