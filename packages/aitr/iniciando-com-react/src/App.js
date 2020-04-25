import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
    state = {
        nome: ' '
    }
    modificarNome = (event) => {
        this.setState({
            nome: event.target.value
        })

    }

    criaComboBox = () => {
        const opcoes = ["fulano", "Cicrano"]
        const comboBoxOpcoes = opcoes.map( opcoes => <option>{opcoes}</option> )
        
        return(
            <select>
                {comboBoxOpcoes}
            </select>
        )
    }

    render() {
        const MeuComboBox = () => this.criaComboBox()
        return (
            <>
                <h1>{this.state.nome} say hello world for this thing</h1>
                <input id="meuNome" placeholder="Digite seu nome" type="text" onChange= {this.modificarNome}/>
                <MeuComboBox/>
            </>
        )

    }
}
export default App;