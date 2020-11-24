import http from '../../helpers/http'

const getMyProfile = (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('user/detail')
})

export {getMyProfile}
