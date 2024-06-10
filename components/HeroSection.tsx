import Link from "next/link";
import { Upload } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full h-screen border-y flex justify-center items-center flex-nowrap">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2">
          <div className="flex flex-col justify-start mt-0 lg:mt-8">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] main-color-text">
              Liberez le plein potentiel de vos images grâce à l'IA
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-l mt-4 dark:text-gray-400">
              Notre logiciel d'agrandissement d'image alimenté par l'IA offre
              des résultats étonnants, de l'amélioration de la résolution à la
              colorisation intelligente.
            </p>
            <div className="space-x-4 mt-6">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg"
                href="#"
              >
                Essai Gratuit
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border main-color-border bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:main-color-text focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-border"
                href="#"
              >
                En savoir plus
              </Link>
            </div>
          </div>
          <section className="w-full">
            <div className="h-full container px-0 md:px-6 py-5 md:py-0">
              <div className="h-full mx-auto max-w-3xl">
                <div className="h-full relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center h-auto md:h-full">
                    <div className="flex flex-col items-center space-y-4">
                      <Upload />
                      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
                        Glisser votre fichier ici
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Ou clic pour pour upload
                      </p>
                    </div>
                  </div>
                  <img
                    src="/placeholder.svg"
                    alt="Drop zone"
                    className="h-full w-full object-cover object-center transition-all duration-300 hover:scale-[1.05]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
