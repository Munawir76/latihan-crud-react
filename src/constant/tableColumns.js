import { Space } from "antd";

export const UserColumns = [
  {
    title: "Nomer",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Nama Menu",
    dataIndex: "menu",
    key: "menu",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Harga",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Deskripsi",
    dataIndex: "description",
    key: "description",
  },

  {
    title: "Action",
    key: "action",
    render: (_, index) => (
      <Space size="middle">
        <a>Invite {index + 1}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export const MenuColumns = [
  {
    title: "Nomer",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Nama",
    dataIndex: "nama",
    key: "nama",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "hp",
    key: "hp",
  },
  {
    title: "Address",
    dataIndex: "alamat",
    key: "alamat",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.id}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
