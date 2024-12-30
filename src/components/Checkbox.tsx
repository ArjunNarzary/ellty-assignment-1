import { checkboxOptions } from "../types"

const Checkbox = ({
  id,
  label,
  checked,
  isDisabled,
  onChange,
}: checkboxOptions & {
  onChange: (id: string) => void
}) => {
  return (
    <div className="checkbox-wrapper">
      <label className="checkbox">
        <span className="checkbox-label">{label}</span>
        <input
          type="checkbox"
          disabled={isDisabled}
          checked={checked}
          onChange={() => onChange(id)}
        />
      </label>
    </div>
  )
}

export default Checkbox
