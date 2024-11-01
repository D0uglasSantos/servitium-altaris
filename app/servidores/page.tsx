"use client";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
import ServidorForm from "../../components/ServidorForm";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FaTrash, FaEdit } from "react-icons/fa";

type Servidor = {
  id: string;
  nome: string;
  dtNascimento: string;
  funcao:
    | "Cerimoniário Geral"
    | "Cerimoniário da Palavra/Credência"
    | "Acólito";
  ativo: boolean;
};

const ServidoresPage = () => {
  const [servidores, setServidores] = useState<Servidor[]>([]);
  const [editandoServidor, setEditandoServidor] = useState<Servidor | null>(
    null
  );

  const fetchServidores = async () => {
    const querySnapshot = await getDocs(collection(db, "servidores"));
    const servidoresData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Servidor[];
    setServidores(servidoresData);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "servidores", id));
    fetchServidores();
  };

  const handleEdit = (servidor: Servidor) => {
    setEditandoServidor(servidor);
  };

  const handleUpdate = async (servidorAtualizado: Servidor) => {
    const servidorRef = doc(db, "servidores", servidorAtualizado.id);
    await updateDoc(servidorRef, {
      nome: servidorAtualizado.nome,
      dtNascimento: servidorAtualizado.dtNascimento,
      funcao: servidorAtualizado.funcao,
      ativo: servidorAtualizado.ativo,
    });
    setEditandoServidor(null);
    fetchServidores();
  };

  useEffect(() => {
    fetchServidores();
  }, []);

  const columns: GridColDef[] = [
    { field: "nome", headerName: "Nome", width: 150 },
    {
      field: "dtNascimento",
      headerName: "Data de Nascimento",
      width: 250,
    },
    { field: "funcao", headerName: "Função", width: 200 },
    {
      field: "ativo",
      headerName: "Ativo",
      width: 70,
      renderCell: (params) => (params.value ? "Sim" : "Não"),
    },
    {
      field: "acoes",
      headerName: "Ações",
      width: 70,
      renderCell: (params) => (
        <div className="flex gap-2 items-center h-full">
          <button
            onClick={() => handleEdit(params.row)}
            className="text-yellow-600 hover:text-yellow-700 p-1 rounded"
            aria-label="Editar"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(params.row.id)}
            className="text-red-600 hover:text-red-700 p-1 rounded"
            aria-label="Excluir"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="p-6 min-h-screen bg-gray-50 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black my-2">Servidores</h1>
      <p className="text-base text-bege max-w-2xl mb-8">
        Veja abaixo a lista completa de todos os servidores registrados no
        sistema!
      </p>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
        <DataGrid
          rows={servidores}
          columns={columns}
          getRowId={(row) => row.id}
          className="bg-white"
        />
      </div>
      <ServidorForm
        onAddServidor={fetchServidores}
        servidorEditando={editandoServidor}
        onUpdateServidor={handleUpdate}
        onCancelarEdicao={() => setEditandoServidor(null)}
      />
    </section>
  );
};

export default ServidoresPage;
