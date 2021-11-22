import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import axios  from 'axios';

//import bootstrap button

//we want to trap on the on click event of this button
//when we click the delete button calls a method
//that goes up to the server and envoke our root point 
//to delete from the database 

// some comments
class MovieItem extends Component {




    
     //im calling a function need to bind an instamce of it

     constructor(){
         super();

         this.DeleteMovie = this.DeleteMovie.bind(this);
     }

DeleteMovie(e){

    //stop method being called every time i load the page 
    e.preventDefault();

    console.log("Delete: " + this.props.movie._id);


    //pass up the id 
    //deletes from database after refresh
    axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
    .then(() =>{

        //we passed down the reload data method from the grandparent component read.js
        //using props 
        this.props.ReloadData();
    })
    .catch();

}



    render() {
        return (
            <div>
                {/* some comments  */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.Poster}></img>
                            <footer>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>

                    <Link to ={'/edit/' + this.props.movie._id} className = 'btn btn-primary'>Edit</Link>

                    <Button variant = "danger " onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default MovieItem;