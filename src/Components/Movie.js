import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from './Card'




class movie extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movieName:'',
            ArrayMovies:[],
        }
    }
    handlerChange=(e)=>{
        this.setState({
            movieName:e.target.value,
        });
    
    }
    handlerSumbit=(e)=>{
        e.preventDefault();
        const movieNames=this.state.movieName;
        this.Movie(movieNames);
      
    }
    Movie=async (name)=>{
    
        const url=`https://moviebackend-api.herokuapp.com/movies?searchQuery=${name}`;
        await axios.get(url).then((res)=>{
            console.log(res.data)
            this.setState({
                ArrayMovies:res.data
            });
        }).catch((error)=>{
            console.log(error.message)
        });
    
       

    }
    render(){
        return(
            <>
            <Form   onChange={this.handlerChange}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Movie Name" name="movie"/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handlerSumbit}>
             Search    
            </Button>
          </Form>
          <div className="boxs">
          {this.state.ArrayMovies.map((move ,index)=>{
            return (
            <Card key={index} poster_path={move.poster_path} title={move.title} vote_average={move.vote_average} overview={move.overview}/>
           
            )
          })}
          
          </div>
          </>
        )
    }
}


export default movie;
