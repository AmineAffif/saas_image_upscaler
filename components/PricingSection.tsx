import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "./Icons/CheckIcon";
import { XIcon } from "./Icons/XIcon";

export function PricingSection() {
  return (
    <section
      className="grid gap-6 md:gap-8 py-12 md:py-16 max-w-5xl mx-auto px-10"
      id="pricing"
    >
      <div className="grid gap-2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Découvrez nos tarifs 💸
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Choisissez le plan qui correspond à vos besoins.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="flex flex-col">
          <CardHeader className="p-6">
            <CardTitle>Gratuit</CardTitle>
            <CardDescription>Commencez gratuitement</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 flex-1">
            <div className="text-4xl font-bold">0€</div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Mise à l'échelle des images jusqu'à 1080p
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Amélioration basique des images
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />5 téléchargements
                d'images par mois
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                Avec filigrane
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                Pas de support prioritaire
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full inline-flex h-9 items-center justify-center rounded-md text-black border main-color-border main-color-border-hover bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:main-color-text focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-border">
              Essayer gratuitement
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>
              Mise à l'échelle d'image améliorée
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 flex-1">
            <div className="text-4xl font-bold">9€</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              / mois
            </div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Mise à l'échelle des images jusqu'à 4K
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Amélioration avancée des images
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                20 téléchargements d'images par mois
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Sans filigrane
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                Pas de support prioritaire
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full inline-flex h-9 items-center justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg">
              Sélectionner
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Entreprise</CardTitle>
            <CardDescription>
              Mise à l'échelle d'image illimitée
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 flex-1">
            <div className="text-4xl font-bold">49€</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              / mois
            </div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Mise à l'échelle des images jusqu'à 4K
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Amélioration avancée des images
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Téléchargements d'images illimités
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Sans filigrane
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Support prioritaire
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full inline-flex h-9 items-center justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg">
              Sélectionner
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
