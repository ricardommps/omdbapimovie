import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMovies } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import SearchMovies from '../components/searchMovies'
import If from '../components/operador/if'
import { Table, Alert } from "react-bootstrap";
import {browserHistory} from 'react-router';

class Dashboard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            movieSearch: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    changeText(event) {
        this.setState({
            movieSearch: event.target.value
        });
    }

    handleSubmit() {
        event.preventDefault();
        this.props.getMovies(this.state.movieSearch)
    }

    movieSelected(movie) {
        console.log(movie)
        browserHistory.push(`/movieDetails/${movie.imdbID}`)
    }

    renderRows() {
        const moviesList = this.props.movies.Search || [];
        return moviesList.map(movie => (
            <tr key={movie.imdbID} onClick={() => this.movieSelected(movie)}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>
                    <img src={movie.Poster} width="80" height="80"></img>
                </td>
            </tr>
        ))
    }


    render() {
        const movies = this.props.movies || null;
        const visible = true;
        return (
            <div>
                <ContentHeader title='Busca de Filme'/>
                <SearchMovies
                    onChange={this.changeText.bind(this)}
                    handleSubmit={this.handleSubmit}>
                </SearchMovies>
                <div className="col-sm-10 col-sm-offset-1" >
                    <If test={movies.Error}>
                        <Alert bsStyle="warning">
                             Nenhum resultado encontrado.
                        </Alert>
                    </If>
                    <If test={movies.Search}>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Ano</th>
                                    <th>Poster</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </Table>
                    </If>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({ movies: state.dashboardReducer.movies })
const mapDispathToProps = dispatch => bindActionCreators(
    {
        getMovies
    }, dispatch)
export default connect(mapStateToProps, mapDispathToProps)(Dashboard)
