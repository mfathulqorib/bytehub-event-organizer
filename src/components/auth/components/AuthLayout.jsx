import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen">
      <div className="flex justify-center items-center">
        <section className="">{children}</section>
      </div>
    </main>
  );
};