import { useAddress } from '../../../address-context/address_context'

const AddressLine2 = () => {
  const {
    addressState: { addressline2 },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">Address Line 2</label>
      <input
        type="text"
        value={addressline2}
        placeholder="Address Line 2"
        className="address_input_field"
        onChange={(e) =>
          addressDispatch({
            type: 'SET_ADDRESS_LINE_2',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default AddressLine2
