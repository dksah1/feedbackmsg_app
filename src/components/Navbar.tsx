"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from "@react-email/components";

const Navbar = () => {
  const { data: session } = useSession();

  const user: User = session?.user as User;

  return (
    <nav>
      <div className="">
        <a href="#">Mystery message</a>
        {session ? (
          <>
            {" "}
            <span>Welcome,{user.username || user.email}</span>
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
