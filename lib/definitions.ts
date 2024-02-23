export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedPacientsTable = {
  id: string;
  name: string;
  waitingTime: string;
  status: string;
  priority: string;
};