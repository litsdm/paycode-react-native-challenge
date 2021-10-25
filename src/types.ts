export type Order = {
  _id: string;
  createdOn: string;
  completedOn: string | null;
  name: string;
  table: {
    _id: string;
    name: string;
  }
};