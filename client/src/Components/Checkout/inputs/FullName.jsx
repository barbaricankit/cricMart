import { useAddress } from '../../../address-context/address_context'

const FullName = () => {
  const {
    addressState: { fullname },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">FullName*</label>
      <input
        type="text"
        placeholder="FullName"
        className="address_input_field"
        value={fullname}
        onChange={(e) =>
          addressDispatch({
            type: 'SET_FULL_NAME',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default FullName
