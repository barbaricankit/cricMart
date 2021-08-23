import { useAddress } from '../../../address-context/address_context'

const AddressLine1 = () => {
  const {
    addressState: { addressline1 },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">Address Line 1*</label>
      <input
        type="text"
        value={addressline1}
        placeholder="Address Line 1"
        className="address_input_field"
        onChange={(e) =>
          addressDispatch({
            type: 'SET_ADDRESS_LINE_1',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default AddressLine1
