import { PaletteIcon } from "./Icons/PaletteIcon";
import { ZoomInIcon } from "./Icons/ZoomInIcon";
import { LayersIcon } from "./Icons/LayersIcon";

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
              Elevate Your Images with AI
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our advanced AI-powered image upscaler delivers stunning results,
              from resolution enhancement to intelligent colorization.
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
              Upscale and colorize multiple images at once with our efficient
              batch processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
