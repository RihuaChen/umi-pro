import { getUsers, getUser } from '@/service/users';
import { useEffect, useMemo, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { useRequest } from 'ahooks';

const UserDetail = ({ userId }: { userId: number }) => {
  const { data, error, loading } = useRequest(getUser(userId));

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {JSON.stringify(data)}</div>;
};

const UserList = () => {
  const [userList, setUserList] = useState<API.User[]>();
  const [userId, setUserId] = useState<number>();
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
              setUserId(user.id);
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
  useEffect(() => {
    getUsers().then((usersRes: API.GetUsersResponse) => {
      setUserList(usersRes.value);
    });
  }, []);
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
        {userId && <UserDetail userId={userId} />}
      </Modal>
    </div>
  );
};

export default UserList;
