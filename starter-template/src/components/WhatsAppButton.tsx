"use client";

export default function WhatsAppButton() {
    const message = encodeURIComponent("Hi ONE Hand Labs, I'd like to talk about a project.");

    return (
        <a
            href={`https://wa.me/918950143430?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with ONE Hand Labs on WhatsApp"
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-300 hover:scale-105"
            style={{
                background: "#25D366",
                boxShadow: "0 8px 28px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
        >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="#ffffff" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.61-.61-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.07.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.45.2.51.32.07.12.07.66-.17 1.34Z" />
            </svg>
        </a>
    );
}
