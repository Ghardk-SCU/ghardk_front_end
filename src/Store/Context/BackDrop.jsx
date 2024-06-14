import { createContext, useState } from 'react'

export const BackDropContext = createContext();

// eslint-disable-next-line react/prop-types
export default function BackDrop({ children }) {
  const [BackDropType, setBackDropType] = useState('Root');
  return (
    <BackDropContext.Provider value={{ BackDropType, setBackDropType }}>
      {children}
    </BackDropContext.Provider>
  )
}