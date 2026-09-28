import React, { createContext, useContext, useState } from "react";
import type { DonationSettings } from "./content.server";

interface DonationContextType {
  isOpen: boolean;
  openDonationModal: () => void;
  closeDonationModal: () => void;
  donationSettings?: DonationSettings;
  setDonationSettings: (settings: DonationSettings) => void;
}

const DonationContext = createContext<DonationContextType | null>(null);

export function DonationDialogProvider({
  children,
  initialSettings,
}: {
  children: React.ReactNode;
  initialSettings?: DonationSettings;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [donationSettings, setDonationSettings] = useState<DonationSettings | undefined>(initialSettings);

  const openDonationModal = () => setIsOpen(true);
  const closeDonationModal = () => setIsOpen(false);

  return (
    <DonationContext.Provider
      value={{
        isOpen,
        openDonationModal,
        closeDonationModal,
        donationSettings,
        setDonationSettings,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}

export function useDonationDialog() {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error("useDonationDialog must be used within a DonationDialogProvider");
  }
  return context;
}
