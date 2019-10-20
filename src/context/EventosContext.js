import React, { Component } from 'react';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    token = 'MTBMKBB5SXX3NNVOVYIX'
    ordenar = 'date'

    state = {  }

    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbrite.com/v3/events/search/q=${busqueda.nombre}&categories=${busqueda.categoria}
                    &sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    }

    render() { 
        return (  );
    }
}
 

export default EventosProvider;