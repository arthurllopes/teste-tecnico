import React from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import TableContent from "../../components/TableContent/TableContent";
import { api } from "../../services/api";
import "./style.scss";

type Document = {
  document: string,
  status: string,
}

type Documents = {
  labels: string[],
  items: Document[],
}
const Home = () => {
  const [modal, setModal] = React.useState(false);
  const [documents, setDocuments] = React.useState<Documents[]>([])
  const [loading, setLoading] = React.useState(false)
  
  React.useEffect(() => {
    setLoading(prevState => !prevState)
    try{
      api
        .get("/documents")
        .then((response) => setDocuments(response.data.documents));
      setLoading(prevState => !prevState)
    } catch{}
  }, []);

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
          {loading? 'Carregando...' : <TableContent title="Documentos Solicitados" data={documents} />}
        </main>
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default Home;
