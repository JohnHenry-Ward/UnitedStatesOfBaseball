
const Checkbox = ({ label, value, onClick }) => {
  return (
    <div className='checkbox-content'>
      <input className='checkbox' id={`${value}-checkbox`} type="checkbox" name={label} value={value} onClick={onClick} />
      <label htmlFor={label} className='checkbox-label'>{label}</label>
    </div>
  )
}

export default Checkbox
