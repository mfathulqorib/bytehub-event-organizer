import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block bg-cyan-400" />
      <div className="flex justify-center items-center">
        <section className="w-[320px] h-screen flex flex-col justify-around">
          {children}
        </section>
      </div>
    </main>
  );
};
