import "./../styles/globals.css";
export const metadata = { title: "SOLYON Technologies – DeepTech de lujo", description: "Casa DeepTech de lujo." };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script src="https://checkout.wompi.co/widget.js" async></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
