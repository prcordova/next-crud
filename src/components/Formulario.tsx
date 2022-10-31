import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  cancelado?: (cliente: Cliente) => void;
  clienteMudou?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada className="mb-5" somenteLeitura texto="Código" valor={id} />
      ) : (
        false
      )}
      <Entrada
        className="mb-5"
        valorMudou={setNome}
        texto="Nome"
        valor={nome}
      />
      <Entrada valorMudou={setIdade} texto="Idade" valor={idade} />
      <div className="mt-7 flex justify-end">
        <Botao
          cor="blue"
          className="mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado} cor="blue">
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
