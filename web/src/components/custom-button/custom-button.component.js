const CustomButton = ({ children }) => {
  return (
    <button
      type="button"
      className="btn btn-purple hover:bg-ntst-white hover:text-black"
    >
      {children}
    </button>
  )
}

export default CustomButton
