import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import ContactModal from '../components/ContactModal';

interface ContactModalValue {
  openContact: () => void;
}

const ContactModalContext = createContext<ContactModalValue>({ openContact: () => {} });

export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ openContact: () => setOpen(true) }}>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactModalContext.Provider>
  );
}
