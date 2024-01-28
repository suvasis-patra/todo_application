import { Link, NavLink } from "react-router-dom";
import { link } from "../utils/constants";
import Button from "./Button";
import { useRecoilValueLoadable } from "recoil";
import { authState } from "../storage/atom/auth";
import { useState, useEffect } from "react";

function GetButton() {
  return (
    <>
      <Link to="/register">
        <Button content="register" type="button" className="px-4 py-2" />
      </Link>
      <Link to="/login">
        <Button content="login" type="button" className="px-4 py-2" />
      </Link>
    </>
  );
}

function Navbar() {
  const userAuthState = useRecoilValueLoadable(authState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(userAuthState.contents.status === 200);
  }, [userAuthState]);
  return (
    <nav className="font-mono flex justify-between mx-auto max-w-4xl py-4 border-b border-b-slate-400">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold">TODOish</h1>
      </div>
      <div className=" hidden sm:flex gap-6 items-center">
        {link.map((item) => (
          <NavLink key={item.id} className={`capitalize text-lg font-semibold`}>
            {item.text}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <Link to="/new">
            <Button content="create" type="button" className="px-4 py-2" />
          </Link>
        ) : (
          <GetButton />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
