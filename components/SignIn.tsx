"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuthActions();
  const [password, setPassword] = useState("");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6f9] px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-[#c9a45c]/30 text-center">
        <div className="w-16 h-16 mx-auto bg-[#0b4f6c] rounded-full flex items-center justify-center mb-6">
          <span className="text-white font-display font-bold text-2xl">SE</span>
        </div>
        <h1 className="text-2xl font-bold text-[#0b4f6c] mb-2 font-display">Owner Access</h1>
        <p className="text-sm text-[#062a3a]/60 mb-8">Enter your master password to manage the empire.</p>
        
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin Password"
          className="w-full h-12 px-4 rounded-xl border border-[#0b4f6c]/20 mb-4 focus:ring-2 focus:ring-[#0b4f6c] outline-none text-center tracking-widest"
        />
        <button 
          onClick={() => void signIn("password", { password, flow: "signIn" })}
          className="w-full h-12 bg-[#c9a45c] hover:bg-[#b8924b] text-[#062a3a] font-bold rounded-xl transition-all shadow-md"
        >
          Secure Login
        </button>
      </div>
    </div>
  );
}
