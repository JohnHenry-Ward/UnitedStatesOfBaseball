
const Checkbox = ({ label, value, onClick, checked }) => {
  return (
    <div>
      <input className='checkbox' type="checkbox" label={label} value={value} onClick={onClick} /> {label}
    </div>
  )
}

export default Checkbox
