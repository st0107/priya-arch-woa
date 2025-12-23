"use client";

import { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";

// ----------------------
// Types
// ----------------------
interface PlanFeatures {
  "2d planning": boolean;
  "planning detail": boolean;
  elevation: boolean;
  interior: boolean;
}

interface PlanSpecs {
  floor: string;
  plotWidth: string;
  area: string;
  facing: string;
}

interface Plan {
  title: string;
  price: string;
  images: string[];
  features: PlanFeatures;
  specs: PlanSpecs;
  description: string;
}

// ----------------------
// Plan Data
// ----------------------
const PLAN_DETAIL: Record<string, Plan> = {
  "23x50-north": {
    title: "23x50 North - G+1",
    price: "₹ 499/-",
    images: ["/house-plan-view.jpg", "/detailed-floor-plan.jpg", "/elevation-view.jpg"],
    features: { "2d planning": true, "planning detail": true, elevation: true, interior: false },
    specs: { floor: "G+1", plotWidth: "23x50", area: "1150 sqft", facing: "North" },
    description: "A beautifully designed 2-bedroom home with open living space and efficient kitchen layout.",
  },
};

// ----------------------
// Gallery Component
// ----------------------
interface GalleryProps {
  images: string[];
  currentIndex: number;
  onChangeIndex: (index: number) => void;
  onSelect: (img: string) => void;
}

function Gallery({ images, currentIndex, onChangeIndex, onSelect }: GalleryProps) {
  return (
    <div>
      <div className={styles.galleryMain}>
        <img
          src={images[currentIndex]}
          alt={`Plan image ${currentIndex + 1}`}
          className={styles.galleryImage}
          onClick={() => onSelect(images[currentIndex])}
        />
        <button
          onClick={() => onChangeIndex((currentIndex - 1 + images.length) % images.length)}
          className={styles.galleryPrev}
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => onChangeIndex((currentIndex + 1) % images.length)}
          className={styles.galleryNext}
          aria-label="Next image"
        >
          <ChevronRight />
        </button>
      </div>
      <div className={styles.galleryThumbs}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            className={`${styles.thumb} ${i === currentIndex ? styles.activeThumb : ""}`}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

// ----------------------
// Details Component
// ----------------------
interface DetailsProps {
  plan: Plan;
}

function Details({ plan }: DetailsProps) {
  return (
    <div className={styles.details}>
      <h1 className={styles.price}>{plan.price}</h1>
      <p className={styles.title}>{plan.title}</p>

      <div className={styles.specs}>
        {Object.entries(plan.specs).map(([k, v]) => (
          <div key={k} className={styles.specRow}>
            <strong className="capitalize">{k}</strong>
            <span>{v}</span>
          </div>
        ))}
      </div>

      <div className={styles.features}>
        {Object.entries(plan.features).map(([k, v]) => (
          <div key={k} className={styles.featureRow}>
            {v ? <Check size={16} className={styles.featureYes} /> : <X size={16} className={styles.featureNo} />}
            <span className="capitalize">{k}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------
// Lightbox Component
// ----------------------
interface LightboxProps {
  image: string;
  onClose: () => void;
}

function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <div className={styles.lightbox} onClick={onClose}>
      <img src={image} alt="Fullscreen Plan" className={styles.lightboxImg} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

// ----------------------
// Main PlanContent
// ----------------------
interface PlanContentProps {
  slug?: string;
}

function PlanContent({ slug }: PlanContentProps) {
  const plan = slug ? PLAN_DETAIL[slug] : null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!plan) return <div className={styles.notFound}>Plan not found</div>;

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.galleryWrapper}>
          <Gallery
            images={plan.images}
            currentIndex={currentImageIndex}
            onChangeIndex={setCurrentImageIndex}
            onSelect={setSelectedImage}
          />
        </div>
        <Details plan={plan} />
      </div>

      {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </main>
  );
}

// ----------------------
// Exported Page
// ----------------------
export default function PlansPage() {
  // Get slug from URL using Next.js useSearchParams
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const slug = searchParams?.get("slug") ?? undefined;

  return <PlanContent slug={slug} />;
}
