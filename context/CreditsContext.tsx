import React, { createContext, useContext, useState } from "react";

interface CreditsContextProps {
  credits: number;
  decrementCredits: (amount: number) => void;
}

const CreditsContext = createContext<CreditsContextProps | undefined>(
  undefined
);

export const CreditsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [credits, setCredits] = useState<number>(25); // Assume 25 credits to start

  const decrementCredits = (amount: number) => {
    setCredits((prevCredits) => Math.max(prevCredits - amount, 0));
  };

  return (
    <CreditsContext.Provider value={{ credits, decrementCredits }}>
      {children}
    </CreditsContext.Provider>
  );
};

export const useCredits = (): CreditsContextProps => {
  const context = useContext(CreditsContext);
  if (!context) {
    throw new Error("useCredits must be used within a CreditsProvider");
  }
  return context;
};
