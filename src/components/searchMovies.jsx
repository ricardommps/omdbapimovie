import React from 'react'
import { reduxForm, Field } from 'redux-form';
import { Button } from "react-bootstrap";

let SearchMovies = props => {
    const { handleSubmit, onChange } = props;
    return (
        <div className="col-sm-6 col-sm-offset-1" >
            <form className="input-group">
                <input type="text" name="searchMovie" placeholder="Nome do filme" onChange={onChange} className="form-control"/>
                <span className="input-group-btn">
                    <Button bsStyle="primary"  onClick={handleSubmit}>Procurar</Button>
                </span>
            </form>
        </div>
    )
}

export default SearchMovies;