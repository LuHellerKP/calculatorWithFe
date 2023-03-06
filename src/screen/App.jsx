import { useEffect, useState } from "react";
import "./App.css";
import CLEAR from "../assets/clear.png";

export default function App() {
  const valoresBotoes = [
    { name: "sete", value: 7 },
    { name: "oito", value: 8 },
    { name: "nove", value: 9 },
    { name: "adicao", value: "+" },
    { name: "quatro", value: 4 },
    { name: "cinco", value: 5 },
    { name: "seis", value: 6 },
    { name: "subtracao", value: "-" },
    { name: "um", value: 1 },
    { name: "dois", value: 2 },
    { name: "tres", value: 3 },
    { name: "multiplicacao", value: "*" },
    { name: "zero", value: 0 },
    { name: "igual", value: "=" },
    { name: "divisao", value: "/" },
    { name: "virgula", value: "." },
  ];

  const [valor, setValor] = useState(""); // devolve um array(vetor) que tem duas posições(um valor, uma função para alterar o valor) // pode receber um valor padrão
  const [valor2, setValor2] = useState("");
  const [operador, setOperador] = useState("");

  return (
    <div id="calculator" className="calculator">
      <div className="display">
        {valor} {operador} {valor2}{" "}
        <img
          src={CLEAR}
          alt="limpar"
          onClick={function () {
            setValor("");
            setValor2("");
            setOperador("");
          }}
        />
      </div>
      {valoresBotoes.map(function ({ name, value }) {
        return (
          <Button
            id={name}
            text={value}
            click={function () {
              contas(value);
            }}
          />
        );
      })}
    </div>
  );

  function Button({ id, text, click }) {
    return (
      <button className={`button ${id}`} id={id} onClick={click}>
        {text}
      </button>
    );
  }

  function contas(value) {
    switch (value) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case ".":
        // valor = valor + value // ou primeiroNum += value
        if (operador) {
          if (valor2.includes(".") && value === ".") {
            break;
          }
          setValor2((valor2) => valor2 + value);
        } else {
          if (valor.includes(".") && value === ".") {
            break;
          }
          setValor((valor) => valor + value);
        }
        break;

      case "+": {
        setOperador("+");
        break;
      }

      case "-": {
        setOperador("-");
        break;
      }

      case "*": {
        setOperador("*");
        break;
      }

      case "/": {
        setOperador("/");
        break;
      }

      case "=": {
        let primeiro = Number(valor);
        let segundo = Number(valor2);
        let resultado;
        setOperador("");
        setValor2("");
        switch (operador) {
          case "+":
            resultado = primeiro + segundo;
            break;

          case "-":
            resultado = primeiro - segundo;
            break;

          case "*":
            resultado = primeiro * segundo;
            break;

          case "/":
            resultado = primeiro / segundo;
            break;

          default:
            break;
        }
        setValor(resultado.toString()); //fazer a conta como número para não empilhar e dps voltar para string, para que não fique repetindo somas
        break;
      }

      default:
        break;
    }
  }
}
