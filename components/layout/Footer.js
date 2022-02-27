import React from "react";

import { useSession, signOut, signIn } from "next-auth/react";

const Footer = () => {
  const { data: session, status } = useSession();

  return (
    <footer>
      <div className="w-full  border-t-4 border-double border-black min-h-[100px] flex flex-row justify-between items-center px-[25px] mt-[20px]">
        {session ? (
          <div className="flex  w-1/4">
            <span className="mr-[15px]">{session?.user.email}</span>
            {session?.user.name ? <span>{session.user.name}</span> : null}
          </div>
        ) : null}

        <div className="">
          {session && (
            <button
              className="border-b border-neutral-100 hover:text-red-400 hover:border-red-400"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
