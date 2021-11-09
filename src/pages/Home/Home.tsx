import React from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import TableContent from "../../components/TableContent/TableContent";
import "./style.scss";
const Home = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const documents = {
    labels: ["Documento", "Status"],
    items: [
      {
        document: "Capa do IPTU",
        status: "Validado",
      },
      {
        document: "Dados pessoais",
        status: "Pendente",
      },
      {
        document: "Balancete 2020",
        status: "A Validar",
      },
    ],
  };
  return (
    <>
      <Header />
      <div className="page-content">
        <aside>
          <h3>Informações da solicitação</h3>
          <ul>
            <li>
              <strong>Título da solicitação:</strong>
              <span> Solicitação 01</span>
            </li>
            <li>
              <strong>Solicitado por:</strong>
              <span> Iuri Aguiar</span>
            </li>
            <li>
              <strong>Data da solicitação:</strong>
              <span> 21/07/2021 10:15:25</span>
            </li>
            <li>
              <strong>Razão Social:</strong>
              <span> Aços Motta</span>
            </li>
            <li>
              <strong>CNPJ:</strong>
              <span> 00.000.000/000</span>
            </li>
          </ul>
        </aside>
        <main>
          <div>
            <div className="buttons">
              <button
                onClick={() => {
                  setModal(true);
                }}
              >
                Aceitar Open Finance
              </button>
              <button>?</button>
            </div>
          </div>
          <TableContent title="Documentos Solicitados" data={documents} />
        </main>
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default Home;
