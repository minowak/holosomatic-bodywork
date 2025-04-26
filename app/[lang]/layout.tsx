import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Language } from "@/lib/utils";
import { PropsWithChildren } from "react"

export type PropsType = {
  params: Promise<{ lang: string }>;
} & PropsWithChildren;

export default async function Layout({ children, params }: PropsType) {
  const p = await params;
  const lang = p.lang as Language;

  return (
    <div id="home">
      <Header lang={lang} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
