import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { Upload } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Image Upscaler</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-screen border-y flex justify-center items-center flex-nowrap">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2">
              <div className="flex flex-col justify-start mt-0 lg:mt-8">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] main-color-text">
                  Liberez le plein potentiel de vos images grâce à l'IA
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-l mt-4 dark:text-gray-400">
                  Notre logiciel d'agrandissement d'image alimenté par l'IA
                  offre des résultats étonnants, de l'amélioration de la
                  résolution à la colorisation intelligente.
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
              {/* <img
                alt="Hero"
                className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="550"
              /> */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f3f4f6]">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#e9d8fd] px-3 py-1 text-sm main-color-text dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elevate Your Images with AI
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our advanced AI-powered image upscaler delivers stunning
                  results, from resolution enhancement to intelligent
                  colorization.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
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
                  Upscale and colorize multiple images at once with our
                  efficient batch processing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight main-color-text">
                What Our Customers Say
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from the people who have transformed their images with our
                AI upscaler.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f3f4f6]">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl main-color-text">
                Pricing
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that fits your needs and start transforming your
                images today.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-gray-950 shadow-lg">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    Perfect for individuals and small teams.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold main-color-text">$9</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      per month
                    </p>
                  </div>
                  <ul className="space-y-2 mt-6">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 main-color-text" />
                      <span>5 image uploads per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 main-color-text" />
                      <span>Up to 8x resolution upscaling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 main-color-text" />
                      <span>AI-powered colorization</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full main-color main-color-hover text-gray-50 main-color-dark-bg"
                    variant="default"
                  >
                    Start Free Trial
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-950 shadow-lg">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>
                    For teams and businesses with higher volume.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold main-color-text">$29</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      per month
                    </p>
                  </div>
                  <ul className="space-y-2 mt-6">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 main-color-text" />
                      <span>50 image uploads per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 main-color-text" />
                      <span>Up to 8x resolution upscaling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 main-color-text" />
                      <span>AI-powered colorization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 main-color-text" />
                      <span>Batch processing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full main-color main-color-hover text-gray-50 main-color-dark-bg"
                    variant="default"
                  >
                    Start Free Trial
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-950 shadow-lg">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    Tailored solutions for large-scale needs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function LayersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function ZoomInIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  );
}
