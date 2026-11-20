// app/products/[id]/page.tsx
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products } from "../../data/products";

// Reviews ships in its own chunk, fetched only when it renders.
const Reviews = dynamic(() => import("./Reviews"), {
  loading: () => <p className="reviews-loading">Loading reviews…</p>,
});

// Pre-build one static page per product at build time.
export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

// Generate per-page dynamic metadata based on the product.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product not found | ShipYard",
      description: "The requested product could not be found in ShipYard catalog.",
    };
  }

  return {
    title: `${product.name} | ShipYard`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  // If the id in the URL matches no product, show the 404 page.
  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">← Back to catalog</Link>
      <article className="detail">
        <div className="detail-art">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={450}
            className="detail-img"
            priority
          />
        </div>
        <div className="detail-body">
          <span className="card-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-tagline">{product.tagline}</p>
          <span className="detail-price">${product.price}</span>
          <p className="detail-desc">{product.description}</p>
          <h2 className="detail-specs-title">Specs</h2>
          <ul className="detail-specs">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>
      </article>

      {/* Lazy-loaded heavy Reviews section */}
      <Reviews productId={product.id} />
    </main>
  );
}
