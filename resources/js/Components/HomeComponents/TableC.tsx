import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { title } from "process";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

interface TableDataInterface {
  [key: string]: number | string;
}
interface TableCProps {
  title?: string;
  value: TableDataInterface[];
  datakeys: string[];
}

export const TableC = ({ title = "", value, datakeys }: TableCProps) => {
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          {datakeys.map((key) => (
            <TableHead>{key}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {value.map((current, key) => (
          <TableRow key={key}>
            {datakeys.map((key) => (
              <TableCell>{current[key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell>$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
};
