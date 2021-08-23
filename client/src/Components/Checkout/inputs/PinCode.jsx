import { useAddress } from '../../../address-context/address_context'

const PINCode = () => {
  const {
    addressState: { pincode },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">PINCode*</label>
      <input
        type="text"
        placeholder="PINCode"
        className="address_input_field"
        value={pincode}
        onChange={(e) =>
          addressDispatch({
            type: 'SET_PINCODE',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default PINCode
