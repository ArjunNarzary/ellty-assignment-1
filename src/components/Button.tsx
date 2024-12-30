const Button = ({
  text = "Done",
  clasNames = "",
}: {
  text?: string
  clasNames?: string
}) => {
  return (
    <div className={`button ${clasNames}`}>
      <span>{text}</span>
    </div>
  )
}

export default Button
