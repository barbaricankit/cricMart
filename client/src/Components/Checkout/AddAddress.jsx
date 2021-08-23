import { useNavigate } from 'react-router-dom'
import {
  Country,
  AddressLine1,
  AddressLine2,
  City,
  FullName,
  LandMark,
  MobileNumber,
  PINCode,
  State,
} from '.'
import { useAddress } from '../../address-context/address_context'
import callServer from '../../api_calls/axios'
import { useAuth } from '../../Auth/auth-context'

const AddAddress = () => {
  const {
    state: { userId },
  } = useAuth()
  const {
    addressState: {
      country,
      fullname,
      mobile,
      pincode,
      landmark,
      city,
      state,
      addressline1,
      addressline2,
      addressType,
    },
    addressDispatch,
  } = useAddress()
  const navigate = useNavigate()
  const addNewAddress = async () => {
    const address = {
      country,
      fullname,
      mobile,
      pincode,
      landmark,
      city,
      state,
      addressline1,
      addressline2,
      addressType,
    }
    const { newAddress } = await callServer({
      url: `/${userId}/address`,
      type: 'POST',
      body: { address },
    })
    addressDispatch({
      type: 'ADD_NEW_ADDRESS',
      payload: { address: newAddress },
    })
    navigate('/addresses')
  }
  return (
    <div className="new_address">
      <div className="address_fields">
        <Country />
        <FullName />
        <MobileNumber />
        <PINCode />
        <AddressLine1 />
        <AddressLine2 />
        <LandMark />
        <City />
        <State />
      </div>
      <div>
        <button className="btn_add_address" onClick={() => addNewAddress()}>
          Add address
        </button>
      </div>
    </div>
  )
}

export default AddAddress
