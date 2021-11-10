import { GrValidate } from "react-icons/gr";
import StatusTag from "../StatusTag/StatusTag";
import "./style.scss";

type Items = {
  document?: string;
  status: string;
  id?: number;
  sending?: string;
  destiny?: string;
  date?: string;
  action?: boolean;
};
type Document = {
  labels: string[];
  items: Items[];
};
type TableProps = {
  title: string;
  data: Document[];
};
const TableContent = ({title, data}: TableProps) => {
  return (
    <div className="table-container">
      <h3 className="title">{title}</h3>
      <table className="table-content">
        <thead>
          <tr>
            {data[0]?.labels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[0]?.items.map((item) => (
            <tr key={item.status}>
              {item.document ? (
                <>
                  <td>{item.document}</td>
                  <td>
                    <StatusTag item={item.status} />
                  </td>
                </>
                ) : (
                <>
                  <td>{item.sending}</td>
                  <td>{item.destiny}</td>
                  <td>{item.date}</td>
                  <td>
                    <StatusTag item={item.status} />
                  </td>
                  <td>
                    <div
                      className="action"
                      style={{
                        backgroundColor: item.action ? "green" : "gray",
                      }}
                    >
                      <GrValidate />
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
