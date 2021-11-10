import React, { MouseEvent } from "react";
import Icon from "../../fragments/Icon/Icon";
import TableContent from "../TableContent/TableContent";
import { FaDatabase } from "react-icons/fa";
import "./style.scss";
import SearchComponent from "../SearchComponent/SearchComponent";
import Pagination from "../Pagination/Pagination";

type ModalProps = {
  setModal: (modal: boolean) => void;
};

const Modal = ({ setModal }: ModalProps) => {
  /*
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
  const [transactions, setTransactions] = React.useState<TransactionsState[]>([]);
  React.useEffect(() => {
    setLoading(prevState => !prevState)
    try {
      api
        .get("/transactions")
        .then((response) => setTransactions(response.data.transactions));
      setLoading(prevState => !prevState)
    } catch {}
  }, []);
*/

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = React.useState(false);

  function closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  const transactions = [
    {
      labels: [
        "Remetente",
        "Destinatário",
        "Data de Criação",
        "Status",
        "Ações",
      ],
      items: [
        {
          id: 1,
          sending: "Nubank",
          logo: "purple",
          destiny: "Teddy Investimentos",
          date: "2021-07-12",
          status: "Atualizado",
          action: false,
        },
        {
          id: 2,
          sending: "Nubank",
          logo: "purple",
          destiny: "Teddy Investimentos",
          date: "2021-07-12",
          status: "Inválido",
          action: true,
        },
        {
          id: 3,
          sending: "Next",
          logo: "green",
          destiny: "Teddy Investimentos",
          date: "2021-07-12",
          status: "Desatualizado",
          action: true,
        },
      ],
    },
  ];

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
        {loading ? (
          "Carregando..."
        ) : (
          <TableContent title="" data={transactions} />
        )}
        <Pagination />
        <footer>
          <button>Agendar com outra instituição</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
