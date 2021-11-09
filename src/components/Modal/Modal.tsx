import React, { MouseEvent } from "react";
import Icon from "../../fragments/Icon/Icon";
import TableContent from "../TableContent/TableContent";
import { FaDatabase } from "react-icons/fa";
import "./style.scss";
import SearchComponent from "../SearchComponent/SearchComponent";
import Pagination from "../Pagination/Pagination";
import { api } from "../../services/api";

type ModalProps = {
  setModal: (modal: boolean) => void;
};

const Modal = ({ setModal }: ModalProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [transactions, setTransactions] = React.useState();
  React.useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const data = {
    labels: ["Remetente", "Destinatário", "Data de Criação", "Status", "Ações"],
    items: [
      {
        id: 1,
        sending: "Nubank",
        destiny: "Teddy Investimentos",
        date: "2021-09-12",
        status: "Atualizado",
        action: false,
      },
      {
        id: 2,
        sending: "Nubank",
        destiny: "Teddy Investimentos",
        date: "2021-07-12",
        status: "Inválido",
        action: true,
      },
      {
        id: 3,
        sending: "Next",
        destiny: "Teddy Investimentos",
        date: "2021-02-12",
        status: "Desatualizado",
        action: true,
      },
    ],
  };

  function closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal-content">
        <header>
          <div className="modal-info">
            <Icon icon={<FaDatabase />} />
            <div className="modal-text">
              <h3>Open Finance</h3>
              <p>Meus compartilhamentos com instituições.</p>
            </div>
          </div>
          <div>
            <button className="close-button" onClick={() => setModal(false)}>
              x
            </button>
          </div>
        </header>
        <SearchComponent />
        <TableContent title="" data={data} />
        <Pagination />
        <footer>
          <button>Agendar com outra instituição</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
