import './globals.css'

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
                <footer className="mt-8 py-4 text-center text-gray-500">
                    <p>&copy; 2025 Pict-io. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
}