import { useAddress } from '../../../address-context/address_context'

const MobileNumber = () => {
  const {
    addressState: { mobile },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">Mobile Number*</label>
      <input
        type="text"
        placeholder="Mobile Number"
        className="address_input_field"
        value={mobile}
        onChange={(e) =>
          addressDispatch({
            type: 'SET_MOBILE',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default MobileNumber
