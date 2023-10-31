import './button.styles.css'

const BUTTON_TYPE_CLASSES = {
  cardHover: " ",
  inverted: "",
}

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} >
      { children }
    </button>
  )
}
