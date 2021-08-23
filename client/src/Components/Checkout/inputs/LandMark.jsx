import { useAddress } from '../../../address-context/address_context'

const LandMark = () => {
  const {
    addressState: { landmark },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">LandMark</label>
      <input
        type="text"
        placeholder="LandMark"
        className="address_input_field"
        value={landmark}
        onChange={(e) =>
          addressDispatch({
            type: 'SET_LANDMARK',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default LandMark
