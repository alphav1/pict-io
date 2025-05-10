'use client';

import Link from 'next/link';

export default function Topbar() {
  return (
    <nav className="flex items-center mb-8 py-4 px-6 bg-white shadow-sm">
      <div className="flex-1">
        <Link href="/" className="flex items-center">
          <h1 className="text-4xl font-bold text-blue-600">Pict-IO</h1>
        </Link>
      </div>
      
      <div className="ml-auto flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Profile
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
          Settings
        </button>
      </div>
    </nav>
  );
}