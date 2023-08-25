import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/heart";
import Link from "next/link";
import cloudinary from "cloudinary";
import { Folder } from "./albums/page";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function SideMenu() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <div className="pb-12 w-1/5 ">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/gallery">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Gallery
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/albums">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                Albums
              </Link>
            </Button>
            {folders.map((folder) => (
              <Button
                variant="ghost"
                asChild
                key={folder.name}
                className="w-full justify-start flex gap-2"
              >
                <Link className="pl-8" href={`/albums/${folder.path}`}>
                  {folder.name}
                </Link>
              </Button>
            ))}
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/favorites">
                <Heart />
                Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <div className="border-b bg-red-300">
          <div className="flex h-16 items-center px-4 container mx-auto ">
            <Image
              src="data:image/jpeg;base64,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"
              width="50"
              height="50"
              alt="icon of this photo album app"
              className="rounded-full "
            />
            <h3 className=" font-semibold text-md">Gull Photos App</h3>

            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYgEHrY6nh0NuUsjdTV9-B5iIg2LSGODW4w&usqp=CAU"
                  alt="@shadcn"
                
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex ">
          <SideMenu  />

          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
