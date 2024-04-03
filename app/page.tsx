import { Metadata } from "next"

import SideMenu from "./_components/sideMenu/SideMenu"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <section className="relative box-border flex h-screen w-full gap-4 bg-[#F3F5F8] p-4">
      <SideMenu />

      <div className="flex h-full w-full flex-col gap-4">
        <div className="flex w-full items-center rounded-lg bg-white px-9 py-6 sm:px-8">header</div>
        <div className="box-border flex h-[calc(100vh-64px)] gap-4">
          <div className="h-full w-[360px] rounded-lg bg-white">profile</div>
          <div className="h-full w-full rounded-lg bg-white">tabs content</div>
        </div>
      </div>
    </section>
  )
}
