import React from 'react'

const Button = ({button,id}) => {
  return (
    <div className="flex flex-col items-center justify-center px-12 gap-y-4 sm:flex-row sm:gap-y-0 sm:gap-x-4">
     {button.map((text,id)=>(
        <button key={id} className={`w-full ${id==0 ? 'text-white bg-black/50 ': 'bg-white' } cursor-pointer rounded-md  p-2 font-medium  sm:w-80 `}>{text}</button>
     ))}
    </div>
  )
}

export default Button
