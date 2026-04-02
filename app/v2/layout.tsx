import { Header } from "@/components/Header";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header dark />
      <main className="pt-16">{children}</main>
    </>
  );
}
