"use client";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

type Servidor = {
  id?: string;
  nome: string;
  dtNascimento: string;
  funcao:
    | "Cerimoniário Geral"
    | "Cerimoniário da Palavra/Credência"
    | "Acólito";
  ativo: boolean;
};

type ServidorFormProps = {
  onAddServidor: () => void;
  servidorEditando?: Servidor | null;
  onUpdateServidor?: (servidor: Servidor) => void;
  onCancelarEdicao?: () => void;
};

const ServidorForm = ({
  onAddServidor,
  servidorEditando,
  onUpdateServidor,
  onCancelarEdicao,
}: ServidorFormProps) => {
  const [nome, setNome] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");
  const [funcao, setFuncao] =
    useState<Servidor["funcao"]>("Cerimoniário Geral");
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (servidorEditando) {
      setNome(servidorEditando.nome);
      setDtNascimento(servidorEditando.dtNascimento);
      setFuncao(servidorEditando.funcao);
      setAtivo(servidorEditando.ativo);
    }
  }, [servidorEditando]);

  const handleAddServidor = async () => {
    try {
      await addDoc(collection(db, "servidores"), {
        nome,
        dtNascimento,
        funcao,
        ativo,
      });
      onAddServidor();
      resetForm();
    } catch (e) {
      console.error("Erro ao adicionar servidor: ", e);
    }
  };

  const handleUpdateServidor = () => {
    if (onUpdateServidor && servidorEditando) {
      onUpdateServidor({
        id: servidorEditando.id,
        nome,
        dtNascimento,
        funcao,
        ativo,
      });
    }
    resetForm();
  };

  const resetForm = () => {
    setNome("");
    setDtNascimento("");
    setFuncao("Cerimoniário Geral");
    setAtivo(false);
    onCancelarEdicao && onCancelarEdicao();
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">
        {servidorEditando ? "Editar Servidor" : "Adicionar Novo Servidor"}
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 w-full text-black"
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={dtNascimento}
          onChange={(e) => setDtNascimento(e.target.value)}
          className="border p-2 w-full text-black"
        />
        <select
          value={funcao}
          onChange={(e) => setFuncao(e.target.value as Servidor["funcao"])}
          className="border p-2 w-full text-black"
        >
          <option value="Cerimoniário Geral">Cerimoniário Geral</option>
          <option value="Cerimoniário da Palavra/Credência">
            Cerimoniário da Palavra/Credência
          </option>
          <option value="Acólito">Acólito</option>
        </select>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={ativo}
            onChange={(e) => setAtivo(e.target.checked)}
          />
          <span>Ativo</span>
        </label>
        {servidorEditando ? (
          <div className="flex space-x-2">
            <button
              onClick={handleUpdateServidor}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Atualizar
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddServidor}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Adicionar Servidor
          </button>
        )}
      </form>
    </div>
  );
};

export default ServidorForm;
