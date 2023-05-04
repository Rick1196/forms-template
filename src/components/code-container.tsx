import React from "react";
const mockCode = `{
    "name": "codesandbox-template-vite",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    },
    "devDependencies": {
      "@types/react": "^18.0.15",
      "@types/react-dom": "^18.0.6",
      "@vitejs/plugin-react": "^2.0.0",
      "tailwindcss": "^3.3.2",
      "typescript": "^4.6.4",
      "vite": "^3.0.0"
    }
  }
  `;
const CodeContainer: React.FC = () => {
    return <code className="w-1/2 h-full bg-gray-500 text-yellow-200">{mockCode}</code>;
}

export default CodeContainer;