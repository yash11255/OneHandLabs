const MAPS_EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.2031128!2d77.0274!3d28.6102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0559139d3c7f%3A0x8b4af178588d14d4!2sOne%20Hand%20Labs!5e0!3m2!1sen!2sin!4v1713348123456!5m2!1sen!2sin";

export default function MapEmbed({ title, className }: { title: string; className?: string }) {
    return (
        <iframe
            src={MAPS_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
            className={className}
        />
    );
}
