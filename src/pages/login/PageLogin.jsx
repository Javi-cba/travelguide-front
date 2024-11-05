import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Space, Button } from 'antd';
import {
  LoginOutlined,
  LogoutOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import PageRegister from './PageRegister';
import { getExistUser } from '../../services/users';
import { useLugares } from '../../context/drawerLugares';

const PageLogin = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [isNewUser, setIsNewUser] = useState(false);
  const { showDrawer } = useLugares();
  useEffect(() => {
    // si el user no existe en la BD
    const validarUsuario = async () => {
      if (isAuthenticated && user) {
        const respExist = await getExistUser(user.email);
        if (!respExist) {
          setIsNewUser(true);
        } else {
          showDrawer();
        }
      }
    };

    validarUsuario();
  }, [isAuthenticated, user]);

  return (
    <>
      {isAuthenticated ? (
        <>
          {isNewUser && <PageRegister />}
          <Space wrap size={10}>
            <Button
              type="default"
              onClick={() => showDrawer()}
              icon={<EnvironmentOutlined />}
            >
              Recomendaciones
            </Button>
            <Avatar size="large" src={user.picture} alt={user.name}></Avatar>

            <LogoutOutlined className="icon" onClick={logout} />
          </Space>
        </>
      ) : (
        <LoginOutlined className="icon" onClick={() => loginWithRedirect()} />
      )}
    </>
  );
};

export default PageLogin;
