import { useAddress } from '../../../address-context/address_context'

const State = () => {
  const {
    addressState: { state },
    addressDispatch,
  } = useAddress()
  return (
    <div className="address_field">
      <label className="address_label">State*</label>
      <input
        type="text"
        value={state}
        placeholder="State"
        className="address_input_field"
        onChange={(e) =>
          addressDispatch({
            type: 'SET_STATE',
            payload: { value: e.target.value },
          })
        }
      />
    </div>
  )
}

export default State
