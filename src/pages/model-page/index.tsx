import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'umi';
import { Table, Button, Modal } from 'antd';

const UserDetail = () => {
  const { detail } = useSelector((state) => (state as any).users);
  return <div>Username: {JSON.stringify(detail)}</div>;
};

const UserList = () => {
  const { list: userList } = useSelector((state) => (state as any).users);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const columns = useMemo(
    () => [
      { dataIndex: 'id', title: 'id', key: 'id' },
      { dataIndex: 'name', title: 'Name' },
      {
        dataIndex: 'idx',
        title: 'Action',
        render: (data: number, user: API.User) => (
          <Button
            onClick={() => {
              dispatch({ type: 'users/get', payload: { userId: user.id } });
              setVisible(true);
            }}
          >
            查看详细信息
          </Button>
        ),
      },
    ],
    [],
  );
  return (
    <div>
      <Table rowKey="id" dataSource={userList} columns={columns} />
      <Modal
        destroyOnClose
        title="detail"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[]}
      >
        <UserDetail />
      </Modal>
    </div>
  );
};

export default UserList;
