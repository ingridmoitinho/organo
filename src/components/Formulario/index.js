import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

    const times = [
        "Programação",
        "Front-end",
        "Data Science",
        "DevOps",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]

    const aoSalvar = (e) => {
      e.preventDefault();
    }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}> 
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto  label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa  obrigatorio={true} label="Time" itens ={times}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
