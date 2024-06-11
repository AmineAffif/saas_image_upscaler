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
          Pricing
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Choose the plan that fits your needs.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="p-6">
            <CardTitle>Free</CardTitle>
            <CardDescription>Get started for free</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="text-4xl font-bold">$0</div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Upscale images up to 1080p
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Basic image enhancement
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />5 image uploads
                par mois
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                No watermark
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                No priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="w-full inline-flex h-9 items-center justify-center rounded-md text-black border main-color-border main-color-border-hover bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:main-color-text focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-border">
              Essayer gratuitement
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>Enhanced image upscaling</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="text-4xl font-bold">$9</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              / mois
            </div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Upscale images up to 4K
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Advanced image enhancement
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                20 images par mois
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                No watermark
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                No priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="w-full inline-flex h-9 items-center justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg">
              Sélectionner
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>Unlimited image upscaling</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="text-4xl font-bold">$49</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              / mois
            </div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Upscale images up to 8K
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Advanced image enhancement
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Unlimited image uploads
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                No watermark
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="w-full inline-flex h-9 items-center justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg">
              Sélectionner
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
