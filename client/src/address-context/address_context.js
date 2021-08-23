import { createContext, useContext, useReducer } from 'react'
import { manageAdress } from './address_reducer'
const AddressContext = createContext()

export const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(manageAdress, {
    addresses: [],
    status: 'idle',
    showLoader: true,
    error: 'error',
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
  })

  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  )
}

export const useAddress = () => useContext(AddressContext)
