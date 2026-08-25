import { Download } from 'lucide-react';

interface DownloadCVButtonProps {
  className?: string;
}

/**
 * Rounded gradient pill that downloads the CV PDF.
 * Same styling as ContactButton, used only for the hero CTA.
 */
export default function DownloadCVButton({ className = '' }: DownloadCVButtonProps) {
  return (
    <a
      href="/Nikolay_Stoyanov_CV.pdf"
      download="Nikolay_Stoyanov_CV.pdf"
      className={`inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-[1.03] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      <Download className="w-4 h-4" />
      Download CV
    </a>
  );
}
