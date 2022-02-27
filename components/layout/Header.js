import React from "react";

import { useSession, signOut, signIn } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="w-full border-b-4 border-double border-black min-h-[100px] flex flex-row justify-between items-center px-[25px] py-[10px] mb-[20px]">
      {session ? (
        <div className="flex flex-col w-1/4">
          <span>{session?.user.email}</span>
          {session?.user.name ? <span>{session.user.name}</span> : null}
        </div>
      ) : null}

      <div className="text-gray-400">
        {session ? (
          <button
            className="border-2 rounded-md bg-white border-gray-400 p-3 hover:text-red-400 hover:border-red-400"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ) : (
          <button
            className="border-2 rounded-md bg-white border-gray-400 p-3 hover:text-red-400 hover:border-red-400"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
