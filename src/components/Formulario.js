import React, {Component} from 'react';

import { CategoriasConsumer } from '../context/CategoriasContext';

class Formulario extends Component {
    state = { 
        nombre: '',
        categoria: ''
     }
    render() { 
        return ( 
            <form>
                <fieldset className = "uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por categoria
                    </legend>
                </fieldset>

                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input
                            name="nombre"
                            className="uk-input"
                            type="text"
                            placeholder="Nombre del Evento o cuidad"
                        />
                    </div>

                    <div className="uk-margin" uk-margin="true">
                        <select
                            className="uk-select"
                            name="categoria"
                        >
                            <CategoriasConsumer>
                                {(value) => {
                                    return (
                                        value.categorias.map(categoria => (
                                            <option key={categoria.id} vañue={categoria.id}
                                            data-uk-form-select>
                                                {categoria.name_localized}
                                            </option>
                                        ))
                                    )
                                }}
                            </CategoriasConsumer>

                        </select>

                        <div>
                            <input type="submit" className="uk-button uk-button-danger" value="Buscar Eventos">
                            </input>   
                        </div>

                    </div>
                </div>

            </form>
         );
    }
}
 
export default Formulario;