import "./styles/globals.scss";

export const metadata = {
  title: "Humans",
  icons:{
    icon: "/images/LOGO CENTRO HUMAN (1).svg",
  },
  description: "Especialistas en primeros auxilios",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
