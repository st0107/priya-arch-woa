"use client";

import { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";

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
      <div className="relative mb-4 bg-gray-100 rounded-lg overflow-hidden h-96">
        <img
          src={images[currentIndex]}
          alt={`Plan image ${currentIndex + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => onSelect(images[currentIndex])}
        />
        <button
          onClick={() => onChangeIndex((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => onChangeIndex((currentIndex + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
          aria-label="Next image"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            className={`w-20 h-20 object-cover rounded cursor-pointer transition-transform ${
              i === currentIndex ? "ring-2 ring-blue-600" : "hover:scale-105"
            }`}
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
    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">{plan.price}</h1>
      <p className="text-gray-700 text-lg">{plan.title}</p>

      {/* Specs */}
      <div className="border-t border-b border-gray-200 py-4 space-y-2 text-sm">
        {Object.entries(plan.specs).map(([k, v]) => (
          <div key={k} className="flex justify-between capitalize">
            <strong>{k}</strong>
            <span>{v}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="space-y-1">
        {Object.entries(plan.features).map(([k, v]) => (
          <div key={k} className="flex items-center gap-2 text-sm capitalize">
            {v ? <Check className="text-green-500" /> : <X className="text-red-500" />}
            <span>{k}</span>
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
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Fullscreen Plan"
        className="max-w-4xl rounded cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      />
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

  if (!plan)
    return <div className="p-16 text-center text-gray-700 text-lg">Plan not found</div>;

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
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
      </div>
    </main>
  );
}

// ----------------------
// Exported Page
// ----------------------
export default function PlansPage() {
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const slug = searchParams?.get("slug") ?? undefined;

  return <PlanContent slug={slug} />;
}
