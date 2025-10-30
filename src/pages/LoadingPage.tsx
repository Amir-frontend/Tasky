import React from "react";

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-background-dark">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 blur-md border-4 border-primary border-t-transparent rounded-full opacity-60 animate-spin-slow"></div>
      </div>

      <h1 className="mt-6 text-3xl font-semibold text-primary animate-pulse tracking-wide">
        Tasky
      </h1>
    </div>
  );
}
