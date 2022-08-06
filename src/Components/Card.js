import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from '../Modals'
class BasicExample extends React.Component {
    render(){
  return (
    <Card style={{ width: '18rem' }}>
     
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${this.props.poster_path}`} alt='Not Found in API' />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text className='vote'>
          {this.props.vote_average}
        </Card.Text>
        <Modals
         overview={this.props.overview}
         title={this.props.title}
        />
      </Card.Body>
    </Card>
  );
}
}
export default BasicExample;