import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

export const metadata = {
  title: {
    default: "NEXORA — Modern Tech Intelligence",
    template: "%s | NEXORA",
  },
  description: "Ideas, technology and digital trends shaping the future.",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
