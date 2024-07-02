export default function Btn1({ children, classes, beforeBg }) {
  return (
    <button style={{

    }} className={`${classes} 
      hover:text-xl duration-300 relative z-[1] group overflow-hidden
      before:content-[''] before:absolute
      before:w-full before:h-full
      before:top-0 before:left-[-100%]
      ${beforeBg}
      hover:before:left-0
      before:duration-300
    `}>
      {children}
    </button>
  )
}
