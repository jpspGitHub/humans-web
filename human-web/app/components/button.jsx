import Link from "next/link";

export default function Button({ onClick, children, className, href }) {
    if (href) {

        return (
            <Link className={`button ${className}`} href={href}>{children}</Link>
        );
    } else {
        return (
            <button className={className} onClick={onClick}>
                {children}
            </button>
        );
    }
}