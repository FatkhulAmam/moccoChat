import http from '../../helpers/http'

const getContactAction = (token) =>({
    type: 'GET_CONTACT',
    payload: http(token).get('user')
})

export { getContactAction } 
