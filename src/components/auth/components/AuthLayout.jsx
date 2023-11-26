import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="">
        <section className="">{children}</section>
      </div>
    </main>
  );
};