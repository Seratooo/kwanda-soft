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

export type cardBoardProps = {
  title: string;
  value: number;
  variation: string;
  cardColor: string;
}

export type cardUserProps = {
  linkAvatarImage: string;
  avatarFallback: string;
  name: string;
  description: string;
}

export type cardOfBoardProps = {
  linkAvatarImage: string;
  avatarFallback: string;
  name: string;
  description: string;
  hours: string;
  cardColor: string;
}

export type avatarProps = {
  linkAvatarImage: string;
  avatarFallback: string;
  name: string;
}

export type handleToggleParamsProps = {
  newParams: string | null;
  params: string;
  pathname: string;
  paramName: string;
}
