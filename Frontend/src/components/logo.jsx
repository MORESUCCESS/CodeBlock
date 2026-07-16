import React from "react";
import { Code2 } from "lucide-react";

const Logo = ({ 
  showText = true, 
  size = "md",
  className = "" 
}) => {
  const sizes = {
    sm: {
      icon: 28,
      title: "text-lg",
      subtitle: "text-[10px]",
    },
    md: {
      icon: 36,
      title: "text-2xl",
      subtitle: "text-xs",
    },
    lg: {
      icon: 48,
      title: "text-4xl",
      subtitle: "text-sm",
    },
  };

  const current = sizes[size];

  return (
    <div 
      className={`flex items-center gap-3 select-none ${className}`}
    >
      {/* Logo Icon */}
      <div
        className="
          flex items-center justify-center
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          p-2
        "
        style={{
          width: current.icon,
          height: current.icon,
        }}
      >
        <Code2 size={current.icon * 0.55} />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <h1
            className={`
              ${current.title}
              font-black
              tracking-tight
              text-gray-950
              dark:text-white
            `}
          >
            CodeBlock
          </h1>

          <span
            className={`
              ${current.subtitle}
              mt-1
              font-medium
              text-gray-500
              dark:text-gray-400
              tracking-wide
            `}
          >
            Developer Resources
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;