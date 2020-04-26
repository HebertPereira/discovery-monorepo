import React from 'react';



function App(props) {
    const modificarNome = event => {
        console.log(event.target.value)
    }


    const criaComboBox = () => {
        const opcoes = ["fulano", "Cicrano"]
        const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

        return (
            <select>
                {comboBoxOpcoes}
            </select>
        )
    }

    const MeuComboBox = () => criaComboBox()

    return (
        <>
            <h1>Hello {props.nome} sua idade é {props.idade}</h1>
            <input className="text-centralizado" id="meuNome" placeholder="Digite seu nome" type="text" onChange={modificarNome} />
            <MeuComboBox />
        </>
    )
}
export default App;