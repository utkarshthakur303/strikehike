import { notFound } from "next/navigation";
import { ProductDetail } from "./ProductDetail";

const VALID_SLUGS = ["lending-os", "risk-assessment-os", "collections-os"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const titles: Record<string, string> = {
    "lending-os": "Lending OS | StrikeHike",
    "risk-assessment-os": "Risk Assessment OS | StrikeHike",
    "collections-os": "Collections OS | StrikeHike",
  };
  return { title: titles[slug] ?? "StrikeHike" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }
  return <ProductDetail slug={slug} />;
}
