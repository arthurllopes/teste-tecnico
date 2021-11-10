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

type Items = {
  status: string;
  id: number;
  sending: string;
  destiny: string;
  date: string;
  action: boolean;
}

type TransactionsState = {
  labels: string[],
  items: Items[],
}

const Modal = ({ setModal }: ModalProps) => {

  const [transactions, setTransactions] = React.useState<TransactionsState[]>([]);
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    setLoading(prevState => !prevState)
    try {
      api
        .get("/transactions")
        .then((response) => setTransactions(response.data.transactions));
      setLoading(prevState => !prevState)
    } catch {}
  }, []);

  function closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      setModal(false);
      console.log(transactions)
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
        {loading? 'Carregando...' : <TableContent title="" data={transactions} />}
        <Pagination />
        <footer>
          <button>Agendar com outra instituição</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
