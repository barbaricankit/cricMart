import { useAddress } from '../../../address-context/address_context'

const City = () => {
  const {
    addressState: { city },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">City*</label>
      <input
        type="text"
        value={city}
        placeholder="City"
        className="address_input_field"
        onChange={(e) =>
          addressDispatch({
            type: 'SET_CITY',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default City
