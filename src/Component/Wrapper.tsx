import React from 'react'

type WrapperProps = {
    children:React.ReactNode;
}

const Wrapper = ({children}:WrapperProps) => {
  return (
    <div className="w-full h-screen min-h-screen flex sm:flex-row flex-col justify-center items-stretch p-8 md:p-20 gap-8">
        {children}
    </div>
  )
}

export default Wrapper
