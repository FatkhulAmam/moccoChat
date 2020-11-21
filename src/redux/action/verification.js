import qs from "qs";

const verifAction = (CodeOne, CodeTwo, CodeThree, CodeFour) => ({
    type: 'VERIV_CODE',
    payload: (qs.stringify({CodeOne, CodeTwo, CodeThree, CodeFour}))
})

export {verifAction}
