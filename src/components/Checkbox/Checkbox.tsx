import InputLabel from "../InputLabel/InputLabel"

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
}

const Checkbox = ({ label, checked, onChange, required }: CheckboxProps) => {

  return (
    <InputLabel>
      <input 
        type='checkbox'
        className='rounded bg-neutral-50 active:bg-rose-500 checked:bg-rose-500 hover:checked:bg-rose-600 hover:checked:focus:bg-rose-500 hover:bg-neutral-200 hover:focus:bg-rose-500 focus:checked:bg-rose-500 outline-none focus:ring-2 focus:ring-rose-500/35 focus:ring-offset-1 duration-200'
        defaultChecked={checked}
        required={required}
        onChange={e => onChange(!checked)}
      />
      <span className='ms-1'>{label}</span>
    </InputLabel>
  )
}

export default Checkbox;