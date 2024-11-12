import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface TimerContextType {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextType>({
  duration: 120,
  setDuration: () => {},
});

interface TimerProviderProps {
  children: ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = useState(120);

  return (
    <TimerContext.Provider value = {{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider;