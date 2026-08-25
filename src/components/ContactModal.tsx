import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Mail, Phone, Github, Linkedin, Copy, Check } from 'lucide-react';

const EMAIL = 'Lobido1988@gmail.com';
const PHONE = '+359 897 949 326';
const GITHUB = 'https://github.com/Niko5886';
const LINKEDIN = 'https://linkedin.com/in/nikolay-stoyanov-a79891356';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const copyEmail = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(EMAIL);
      ok = true;
    } catch {
      // fallback for browsers/contexts where the async Clipboard API is blocked
      try {
        const ta = document.createElement('textarea');
        ta.value = EMAIL;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ok = document.execCommand('copy');
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const rowStyle = {
    background: 'rgba(215, 226, 234, 0.05)',
    border: '1px solid rgba(215, 226, 234, 0.1)',
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            background: 'rgba(5, 5, 7, 0.6)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Contact"
            className="relative w-full max-w-md rounded-[28px] p-6 sm:p-8"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background:
                'linear-gradient(160deg, rgba(24, 20, 30, 0.96), rgba(12, 12, 12, 0.96))',
              border: '1px solid rgba(215, 226, 234, 0.14)',
              boxShadow: '0 30px 80px rgba(118, 33, 176, 0.28)',
            }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <h3
              className="hero-heading font-black uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(1.8rem, 6vw, 2.6rem)' }}
            >
              Let&apos;s connect
            </h3>
            <p className="text-[#D7E2EA]/60 mt-2 mb-6 text-sm sm:text-base">
              Have a project in mind? Reach out — I usually reply fast.
            </p>

            {/* Email + copy */}
            <div className="flex items-center gap-3 rounded-2xl p-3 sm:p-4 mb-3" style={rowStyle}>
              <Mail className="w-5 h-5 text-[#B600A8] shrink-0" />
              <span className="selectable text-[#D7E2EA] text-sm sm:text-base truncate flex-1">
                {EMAIL}
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white transition-transform duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(123deg, #B600A8, #7621B0)' }}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </>
                )}
              </button>
            </div>

            {/* Phone */}
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-3 rounded-2xl p-3 sm:p-4 mb-5 transition-colors duration-200 hover:brightness-125"
              style={rowStyle}
            >
              <Phone className="w-5 h-5 text-[#BE4C00] shrink-0" />
              <span className="text-[#D7E2EA] text-sm sm:text-base">{PHONE}</span>
            </a>

            {/* Socials */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full py-3 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm border-2 border-[#D7E2EA]/20 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full py-3 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm border-2 border-[#D7E2EA]/20 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
