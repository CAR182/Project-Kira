import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from 'api/api';
import { LoadingSpinner } from 'components/Widgets';

import { setUserLoginDetails } from 'redux/reducers/UserReducer';
import { routes } from 'Router';
import styles from './userSelection.module.css';

const UserSelection = () => {
  const [users, setUsers] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  const signIn = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        avatar: user.avatar,
      })
    );
    navigate(routes.home);
  };

  return (
    <div className={styles.container}>
      {!users ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.selection}>
          <span className={styles.title}>Who's watching?</span>
          <div className={styles.users}>
            {users.map((item) => (
              <div key={item.displayName} className={styles.avatar} onClick={() => signIn(item)}>
                <div>
                  <img src={item.avatar} />
                </div>
                <span className={styles.name}>{item.displayName} </span>
              </div>
            ))}

            <div className={styles.avatar}>
              <div className={styles.addBtn}>
                <img className={styles.addBtn} src={`${routes.icon}/add-icon.png`} />
              </div>
              <span className={styles.name}>Add profile</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSelection;
