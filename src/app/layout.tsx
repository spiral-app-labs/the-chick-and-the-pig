import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://the-chick-and-the-pig.vercel.app"),
  title: "The Chick and The Pig | Fried Chicken & BBQ — Algonquin, IL",
  description:
    "Savory fried chicken & BBQ in Algonquin, Illinois. Chef Mat's 9 homemade sauces, smoked meats, daily specials, and catering. Order online for takeout & delivery.",
  keywords: [
    "fried chicken",
    "BBQ",
    "Algonquin IL",
    "restaurant",
    "smoked meats",
    "catering",
    "takeout",
    "delivery",
    "Chef Mat",
    "homemade sauces",
  ],
  openGraph: {
    title: "The Chick and The Pig | Fried Chicken & BBQ — Algonquin, IL",
    description:
      "Savory fried chicken & BBQ. Chef Mat's 9 homemade sauces, smoked meats, daily specials. Order online!",
    url: "https://the-chick-and-the-pig.vercel.app",
    siteName: "The Chick and The Pig",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "The Chick and The Pig — Fried Chicken & BBQ in Algonquin, IL",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chick and The Pig | Fried Chicken & BBQ",
    description:
      "Savory fried chicken & BBQ in Algonquin, IL. Chef Mat's homemade sauces. Order online!",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "The Chick and The Pig",
              image:
                "https://the-chick-and-the-pig.vercel.app/api/og",
              url: "https://the-chick-and-the-pig.vercel.app",
              telephone: "+18472612222",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1000 N Main Street",
                addressLocality: "Algonquin",
                addressRegion: "IL",
                postalCode: "60102",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.1716,
                longitude: -88.3168,
              },
              servesCuisine: ["American", "Barbecue", "Fried Chicken"],
              priceRange: "$-$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.4",
                reviewCount: "210",
                bestRating: "5",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Monday",
                  opens: "11:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
                  opens: "11:00",
                  closes: "21:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "11:00",
                  closes: "23:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "11:00",
                  closes: "20:00",
                },
              ],
              hasMenu: {
                "@type": "Menu",
                url: "https://order.toasttab.com/online/thechickandthepig",
              },
              acceptsReservations: "false",
              menu: "https://order.toasttab.com/online/thechickandthepig",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
