const Button = ({ label, iconURL, backgroundColor, borderColor, textColor,fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && <img
        src={iconURL}
        alt="Arrow Right Icon"
        className="rounded-full w-5 h-5 ml-2"
      />}
    </button>
  )
}

export default Button