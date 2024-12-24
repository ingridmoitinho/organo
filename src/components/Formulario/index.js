import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario-container">
      <form onSubmit={aoSubmeter} className="formulario">
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
      <Botao texto='Criar card' />
      </form>

      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          aoCriarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          type='color'
          label="Cor"         
          placeholder="Digite sua cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao texto="Criar Time" />
      </form>
    </section>
  );
};

export default Formulario;
