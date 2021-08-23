import { useAddress } from '../../../address-context/address_context'

const Country = () => {
  const {
    addressState: { country },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">Country*</label>
      <input
        type="text"
        value={country}
        placeholder="Country"
        className="address_input_field"
        onChange={(e) =>
          addressDispatch({
            type: 'SET_COUNTRY',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default Country
