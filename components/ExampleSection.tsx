import React from "react";
import Link from "next/link";

export default function ExampleSection() {
  return (
    <div className="h-screen w-full px-4 lg:px-24 pt-0 pb-20 flex flex-col lg:flex-row justify-center items-center">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Mise à l'échelle sans effort avec Scaly
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Améliorez vos images sans effort avec Scaly Libérez le plein
                potentiel de vos images avec Scaly, l'outil de mise à l'échelle
                d'image par excellence. Alimenté par des algorithmes d'IA
                avancés, Scaly améliore vos photos et graphiques de manière
                transparente, offrant des résultats étonnants sans compromettre
                la qualité.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border main-color-border main-color-border-hover bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:main-color-text focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-border"
                href="#"
              >
                Essayer
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg"
                href="#"
              >
                En savoir plus
              </Link>
            </div>
          </div>
          <video
            src="/example-video.mp4"
            width="550"
            height="550"
            className="mx-auto aspect-video h-full rounded-xl object-cover md:object-contain object-center sm:w-full"
            muted
            autoPlay
            loop
            controls={false}
          />
        </div>
      </section>
    </div>
  );
}
