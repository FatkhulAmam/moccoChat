import http from '../../helpers/http';
import qs from 'qs';

const makeAccount = (phone) => ({
  type: 'MAKE_ACCOUNT',
  payload: http().post('auth', qs.stringify({phone})),
});

const logout = () => ({
  type: 'LOGOUT',
});

export {makeAccount, logout};
