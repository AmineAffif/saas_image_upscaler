import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f3f4f6]" id="faq">
      <div className="grid gap-2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Vos Questions, Nos Réponses
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Explorez les réponses aux questions les plus fréquentes sur Scaly
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
        <Accordion
          type="single"
          collapsible
          className="sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 px-4 text-left"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Qu'est-ce que Scaly ?</AccordionTrigger>
            <AccordionContent>
              Scaly est un service d'upscaling d'images qui utilise la
              technologie avancée de Stability AI pour améliorer la résolution,
              coloriser et traiter des images en lots, offrant ainsi une qualité
              exceptionnelle et des fonctionnalités avancées.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Comment fonctionne la mise à l'échelle des images avec Scaly ?
            </AccordionTrigger>
            <AccordionContent>
              Notre technologie d'upscaling utilise des algorithmes avancés de
              Stability AI pour agrandir vos images jusqu'à 8 fois leur taille
              originale sans perte de qualité, préservant ainsi les détails et
              la clarté.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Quelles sont les différences entre les plans Gratuit, Pro et
              Entreprise ?
            </AccordionTrigger>
            <AccordionContent>
              - <strong>Gratuit :</strong> Mise à l'échelle des images jusqu'à
              1080p, amélioration basique des images, 5 téléchargements par
              mois, avec filigrane, pas de support prioritaire.
              <br />- <strong>Pro :</strong> Mise à l'échelle des images jusqu'à
              4K, amélioration avancée des images, 20 téléchargements par mois,
              sans filigrane, pas de support prioritaire.
              <br />- <strong>Entreprise :</strong> Mise à l'échelle des images
              jusqu'à 4K, amélioration avancée des images, téléchargements
              illimités, sans filigrane, support prioritaire.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Comment fonctionne la colorisation intelligente avec Scaly ?
            </AccordionTrigger>
            <AccordionContent>
              Notre fonctionnalité de colorisation utilise l'intelligence
              artificielle de Stability pour analyser vos images en noir et
              blanc et appliquer des couleurs réalistes, redonnant vie à vos
              photos anciennes ou monochromes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Qu'est-ce que le traitement par lots et comment puis-je l'utiliser
              ?
            </AccordionTrigger>
            <AccordionContent>
              Le traitement par lots vous permet de traiter plusieurs images à
              la fois, ce qui est idéal pour les projets de grande envergure.
              Vous pouvez sélectionner plusieurs images et appliquer les mêmes
              paramètres de mise à l'échelle et de colorisation simultanément.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Est-ce que Scaly ajoute un filigrane aux images ?
            </AccordionTrigger>
            <AccordionContent>
              Seules les images traitées avec le plan Gratuit auront un
              filigrane. Les plans Pro et Entreprise ne comportent pas de
              filigrane.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
