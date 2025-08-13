"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ThumbsUp } from "iconoir-react";
import { menu } from "@/data/menu";
import { MenuCategory } from "@/types";

export default function ChildHomePage() {
  const categories = [...new Set(menu.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  function handleScrollToCategory(category: MenuCategory) {
    const id = category.replace(/\s+/g, "-").toLowerCase();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -80;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveCategory(category);
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-black">
      <div className="flex flex-row px-6 py-8 gap-4 w-full items-center rounded-2xl bg-zinc-800">
        <Image
          src="/Images/brand-logo.png"
          alt="Brand Logo"
          height={72}
          width={72}
        />
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-semibold text-white">
            Der&apos; Cabin Bistro
          </h1>
          <p className="text-md sm:text-lg font-medium text-yellow-500">
            Comfort food, cozy moments
          </p>
        </div>
      </div>
      <div className="flex py-2 gap-4 text-md sm:text-lg font-medium overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              handleScrollToCategory(category);
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
          <h2 className="text-xl font-medium text-zinc-400">{category}</h2>
          <div className="flex flex-col gap-4">
            {menu
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className="relative flex flex-row gap-4 p-4 items-start rounded-2xl overflow-hidden bg-zinc-800"
                >
                  {item.isDiscount && (
                    <p className="absolute top-2 left-0 z-10 px-1 py-0.5 rounded-tr-sm rounded-br-sm text-sm text-white bg-red-500">
                      Discount Off %
                    </p>
                  )}
                  <div className="relative w-24 h-24 aspect-square rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      fill
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <h2 className="flex items-center gap-2 text-md sm:text-lg font-semibold text-white">
                        {item.name}
                        {item.isBestSeller && (
                          <span>
                            <ThumbsUp className="w-4 h-4 text-yellow-500" />
                          </span>
                        )}
                      </h2>
                      <p className="text-sm text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-medium text-yellow-500">
                      {item.price.currency}
                      {item.price.current}
                      {item.isDiscount && (
                        <span className="flex items-center gap-2 text-sm ">
                          <span className="line-through text-zinc-600">
                            {item.price.currency}
                            {item.price.original}
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
