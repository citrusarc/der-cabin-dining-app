"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { menu } from "@/data/menu";

export default function ChildHomePage() {
  const categories = [...new Set(menu.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row px-6 py-8 gap-6 w-full items-center  rounded-2xl bg-zinc-800">
        <Image
          src="/Images/brand-logo.png"
          alt="Brand Logo"
          height={72}
          width={72}
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Der&apos; Cabin Bistro</h1>
          <p className="text-lg font-medium text-yellow-500">
            Comfort food, cozy moments
          </p>
        </div>
      </div>
      <div className="flex gap-4 text-lg font-medium overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              const el = document.getElementById(
                category.replace(/\s+/g, "-").toLowerCase()
              );
              if (el) el.scrollIntoView({ behavior: "smooth" });
              setActiveCategory(category);
            }}
            className={`transition ${
              activeCategory === category ? "text-yellow-500" : "text-zinc-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {categories.map((category) => (
        <section
          key={category}
          id={category.replace(/\s+/g, "-").toLowerCase()}
          className="flex flex-col gap-4 mt-2"
        >
          <h2 className="text-2xl font-medium text-zinc-400">{category}</h2>
          <div className="flex flex-col gap-4">
            {menu
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row gap-4 p-4 items-center rounded-2xl bg-zinc-800"
                >
                  <div className="relative w-24 h-24 aspect-square rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      fill
                      src="/Images/brand-logo.png"
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xl font-medium text-yellow-500">
                      {item.price.currency}
                      {item.price.current}
                      {item.isDiscount && (
                        <span className="flex items-center gap-2 text-sm ">
                          <span className="line-through text-zinc-600">
                            {item.price.currency}
                            {item.price.original}
                          </span>
                          <span>
                            <p className="inline px-1 py-0.5 rounded-sm text-white bg-red-500">
                              Discount Off %
                            </p>
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
