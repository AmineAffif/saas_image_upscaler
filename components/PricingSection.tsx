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

export function PricingSection() {
  return (
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
                <p className="text-4xl font-bold main-color-text"></p>
                <p className="text-gray-500 dark:text-gray-400">per month</p>
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
                <p className="text-4xl font-bold main-color-text">9</p>
                <p className="text-gray-500 dark:text-gray-400">per month</p>
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
  );
}
