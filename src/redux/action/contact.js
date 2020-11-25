import http from '../../helpers/http'

const getContactAction = (token) =>({
    type: 'GET_CONTACT',
    payload: http(token).get('user')
})

const getContactDetail = (token, id) =>({
    type: 'CONTACT_DETAIL',
    payload: http(token).get(`user/contact/${id}`)
})

export { getContactAction, getContactDetail } 
