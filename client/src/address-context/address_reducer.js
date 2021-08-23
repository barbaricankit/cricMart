export const manageAdress = (state, action) => {
  switch (action.type) {
    case 'SET_ALL_ADDRESSES':
      return {
        ...state,
        addresses: action.payload.addresses,
        status: action.payload.status,
        showLoader: action.payload.loading,
      }
    case 'ADD_NEW_ADDRESS':
      return {
        ...state,
        addresses: [action.payload.address, ...state.addresses],
      }
    case 'ADD_ADDRESS':
      return {
        ...state,
        country: '',
        fullname: '',
        mobile: '',
        pincode: '',
        landmark: '',
        city: '',
        state: '',
        addressline1: '',
        addressline2: '',
        addressType: '',
      }
    case 'SET_STATUS':
      return { ...state, status: action.payload.status }
    case 'SET_COUNTRY':
      return { ...state, country: action.payload.value }
    case 'SET_FULL_NAME':
      return { ...state, fullname: action.payload.value }
    case 'SET_MOBILE':
      return { ...state, mobile: action.payload.value }
    case 'SET_PINCODE':
      return { ...state, pincode: action.payload.value }
    case 'SET_LANDMARK':
      return { ...state, landmark: action.payload.value }
    case 'SET_CITY':
      return { ...state, city: action.payload.value }
    case 'SET_STATE':
      return { ...state, state: action.payload.value }
    case 'SET_ADDRESS_LINE_1':
      return { ...state, addressline1: action.payload.value }
    case 'SET_ADDRESS_LINE_2':
      return { ...state, addressline2: action.payload.value }
    case 'SET_ADDRESS_TYPE':
      return { ...state, addressType: action.payload.value }
    case 'EDIT_ADDRESS':
      return {
        ...state,
        country: action.payload.country,
        fullname: action.payload.fullname,
        mobile: action.payload.mobile,
        pincode: action.payload.pincode,
        landmark: action.payload.landmark,
        city: action.payload.city,
        state: action.payload.state,
        addressline1: action.payload.addressline1,
        addressline2: action.payload.addressline2,
        addressType: action.payload.addressType,
      }
    default:
      return state
  }
}
