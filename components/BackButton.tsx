"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ className = "" }: { className?: string }) => {
  const router = useRouter();

  const handleClick = () => {
    // Landing here directly (shared link, new tab) leaves no history to pop
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      <ArrowLeft className="h-4 w-4 mr-2" />
      Back
    </button>
  );
};

export default BackButton;
