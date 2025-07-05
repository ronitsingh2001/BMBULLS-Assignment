import React from "react";

export default function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="box relay">
      <div style={{ zIndex: 1 }}>{children}</div>
    </div>
  );
}
