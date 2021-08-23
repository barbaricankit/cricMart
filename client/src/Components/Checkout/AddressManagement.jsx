import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddress } from '../../address-context/address_context'
import callServer from '../../api_calls/axios'
import { useAuth } from '../../Auth/auth-context'

const Addresses = () => {
  const {
    state: { userId },
  } = useAuth()
  const navigate = useNavigate()
  const {
    addressState: { addresses, status },
    addressDispatch,
  } = useAddress()
  useEffect(() => {
    if (status === 'idle' && userId) {
      ;(async () => {
        const { addresses } = await callServer({
          url: `/${userId}/address`,
          type: 'GET',
        })
        addressDispatch({
          type: 'SET_ALL_ADDRESSES',
          payload: { addresses, status: 'success', showLoader: false },
        })
      })()
    }
    //eslint-disable-next-line
  }, [userId])
  return (
    <div>
      <div className="address_list_page">
        {addresses?.map((address) => (
          <div key={address._id} className="address">
            <div
              className="address_details"
              onClick={() => {
                addressDispatch({
                  type: 'EDIT_ADDRESS',
                  payload: address,
                })
                navigate('/editaddress')
              }}
            >
              <h3>{address.fullname}</h3>
              <p className="address_detail">{address.addressline1}</p>
              <p className="address_detail">{address.addressline2}</p>
            </div>
            <button
              className="btn_del_address"
              onClick={() => navigate('/orderplaced')}
            >
              Deliver to this address
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn_new_address"
        onClick={() => {
          addressDispatch({
            type: 'ADD_ADDRESS',
          })
          navigate('/newaddress')
        }}
      >
        Add New Address
      </button>
    </div>
  )
}

export default Addresses
