import { PaletteIcon } from "./Icons/PaletteIcon";
import { ZoomInIcon } from "./Icons/ZoomInIcon";
import { LayersIcon } from "./Icons/LayersIcon";
import {
  Computer,
  FolderOpen,
  ShieldCheck,
  PenTool,
  Gift,
  Plus,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f3f4f6]">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#e9d8fd] px-3 py-1 text-sm main-color-text dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Améliorez vos images avec notre outil gratuit
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nous utilisons la dernière technologie d'intelligence artificielle
              pour améliorer vos images et les rendre plus nettes et plus
              claires.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Computer className="main-color-text h-8 w-8" />
              <h3 className="text-xl font-semibold">
                Dernière IA, beaucoup plus rapide
              </h3>
              <p>
                Intégrée à la dernière technologie intelligence artificielle et
                de super-résolution, ensemble du processus de mise à échelle
                devient plus rapide. Quelques secondes suffisent.
              </p>
            </div>
            <div className="space-y-4">
              <FolderOpen className="main-color-text h-8 w-8" />
              <h3 className="text-xl font-semibold">Traitement par lots</h3>
              <p>
                Vous avez des centaines de petites images pour la mise à
                échelle? Nous fournissons la solution ultime pour le traitement
                par lots. 5 images pour le traitement par lots actuellement.
              </p>
            </div>
            <div className="space-y-4">
              <ShieldCheck className="main-color-text h-8 w-8" />
              <h3 className="text-xl font-semibold">
                Nous protégeons votre vie privée
              </h3>
              <p>
                Toutes les photos seront effacées dans les 24 heures. Votre vie
                privée est hautement protégée et sentez-vous en sécurité pour
                utiliser nos services.
              </p>
            </div>
            <div className="space-y-4">
              <PenTool className="main-color-text h-8 w-8" />
              <h3 className="text-xl font-semibold">Puissant éditeur images</h3>
              <p>
                Nous intégrons de puissants outils édition images pour le
                recadrage, les filtres, le réglage fin, annotation, autocollant,
                les cadres avant ou après la mise à échelle de image.
              </p>
            </div>
            <div className="space-y-4">
              <Gift className="main-color-text h-8 w-8" />
              <h3 className="text-xl font-semibold">
                Gratuit pour les commerciaux
              </h3>
              <p>
                Toutes les images mises à échelle et améliorées peuvent être
                utilisées à des fins commerciales et elles sont 100 % gratuites.
                Pas de paiement caché et sentez-vous en sécurité pour mettre à
                échelle des images.
              </p>
            </div>
            <div className="space-y-4">
              <Plus className="main-color-text h-8 w-8" />
              <h3 className="text-xl font-semibold">Augmenter la résolution</h3>
              <p>
                En utilisant notre image upscaler, vous pouvez agrandir les
                images et augmenter la résolution de 200% ou 400%.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <ZoomInIcon className="h-8 w-8 main-color-text" />
            <h3 className="text-lg font-bold">Upscale Resolution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enlarge your images up to 8x without losing quality.
            </p>
          </div>
          <div className="grid gap-1">
            <PaletteIcon className="h-8 w-8 main-color-text" />
            <h3 className="text-lg font-bold">AI Colorization</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bring your black and white images to life with our intelligent
              colorization.
            </p>
          </div>
          <div className="grid gap-1">
            <LayersIcon className="h-8 w-8 main-color-text" />
            <h3 className="text-lg font-bold">Batch Processing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Upscale and colorize multiple images at once with our efficient
              batch processing.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
