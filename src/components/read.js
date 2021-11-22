import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component
{


    //we need to bind our data
    constructor(){

        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    //we want to reload the data in this component 

    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    ReloadData(){

        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });

    }


    state = {
        mymovies: []            
    };

    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                <Movies films={this.state.mymovies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}
export default Read;