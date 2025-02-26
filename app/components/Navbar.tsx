import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signOut } from "next-auth/react";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">Ma To-Do List</h1>
        {session ? (
          <div className="flex items-center gap-4">
            <p className="text-white">Bienvenue, {session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Déconnexion
            </button>
          </div>
        ) : (
          <a href="/login" className="text-blue-400">
            Se connecter
          </a>
        )}
      </div>
    </nav>
  );
}
