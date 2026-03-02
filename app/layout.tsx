import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Locação de Máquinas Pesadas em SC | Jacó Locação',
  description: 'Alugue escavadeiras, mini escavadeiras, manipuladores telescópicos e mais em Santa Catarina. Frota própria, orçamento em minutos, entrega na sua obra.',
  keywords: 'máquinas pesadas, locação, aluguel, escavadeira, mini escavadeira, manipulador telescópico, mini carregadeira, rolo compactador, Santa Catarina, SC, CAT, Caterpillar, Bobcat',
  openGraph: {
    title: 'Locação de Máquinas Pesadas em SC | Jacó Locação',
    description: 'Frota própria de escavadeiras, mini escavadeiras e mais. Orçamento em minutos.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
