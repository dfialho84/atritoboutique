export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white text-neutral-900">{children}</div>
    );
}
