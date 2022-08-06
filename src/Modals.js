import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

class Example extends React.Component {
  constructor(props){
    super(props)
    this.state={
        show:false
    }
  }

   handlerShow=()=>{
    this.setState({
    show:!this.state.show
    })
   }
render(){
  return (
    <>
      <Button variant="primary" onClick={this.handlerShow}>
        Click to overview
      </Button>

      <Modal show={this.state.show} onHide={this.handlerShow} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handlerShow}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handlerShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
}
export default Example;