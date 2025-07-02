export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
            <h1 className="text-6xl font-andes">Atrito</h1>
            <nav className="space-x-6 text-sm font-medium">
                <a href="/signup" className="hover:text-primary">
                    Registrar-se
                </a>
            </nav>
        </header>
    );
}
