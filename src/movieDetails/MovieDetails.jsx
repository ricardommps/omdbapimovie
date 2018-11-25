import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMovieById } from './movieDetailsActions'
import ContentHeader from '../components/header/contentHeader'
import { Panel, Form, FormGroup, Col, ControlLabel, FormControl, Button } from "react-bootstrap";
import {browserHistory} from 'react-router';
class MovieDetails extends Component {

    constructor(props, context) {
        super(props, context);
        this.voltar = this.voltar.bind(this);
      }

    componentWillMount() {
        this.props.getMovieById(this.props.params.imdbID)
    }

    voltar(){
        browserHistory.push(`/dashboard`)
    }

    render() {
        console.log(">>>", this.props.params.imdbID)
        const movie = this.props.movie || [];
        console.log(">>>>movie", movie);
        return (
            <div>
                <ContentHeader title='Detalhes do Filme'/>
                <div className="col-sm-10 col-sm-offset-1" >
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Dados do Filme</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <Form horizontal>
                                <FormGroup controlId="formMovieTitle">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Titulo:
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" placeholder="Titulo"  value={movie.Title} disabled/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formMovieYear">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Ano:
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" placeholder="Ano"  value={movie.Year} disabled/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formMovieReleased">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Data de lançamento:
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" placeholder="Data de lançamento"  value={movie.Released} disabled/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formMovieRuntime">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Tempo de duração:
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" placeholder="Data de lançamento"  value={movie.Runtime} disabled/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formMovieGenre">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Genero:
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" placeholder="Genero"  value={movie.Genre} disabled/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formMovieDirector">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Diretor:
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" placeholder="Diretor"  value={movie.Director} disabled/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formMovieBoxOffice">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Valor de Bilheteria:
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" placeholder="Valor de Bilheteria"  value={movie.BoxOffice} disabled/>
                                    </Col>
                                </FormGroup>

                            </Form>
                            <Button bsStyle="primary"  onClick={this.voltar}>Voltar</Button>
                        </Panel.Body>
                    </Panel>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({ movie: state.movieDetailsReducer.movie })
const mapDispathToProps = dispatch => bindActionCreators(
    {
        getMovieById
    }, dispatch)
export default connect(mapStateToProps, mapDispathToProps)(MovieDetails)
