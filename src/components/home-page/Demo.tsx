import { ChartBarIcon } from "@heroicons/react/20/solid";
import { GamepadIcon, GiftIcon } from "lucide-react";
import Image from "next/image";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-orange-600">Make giving feedback fun ...</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Engage Users, Gain Insights
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                <strong>Feedward</strong> transforms feedback collection into an exciting game. Boost user
                participation, gather valuable insights, and continuously improve your product with the power of
                gamified feedback.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt="<strong>Feedward</strong> Dashboard"
            src="/ogBlurred.png"
            width={1824}
            height={1080}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            placeholder="blur"
            blurDataURL="data:og/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <GamepadIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Exciting quests.</strong> Turn feedback collection
                    into fun mini-challenges. Keep users engaged and insights flowing.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChartBarIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Clear insights.</strong> Transform feedback into
                    actionable analytics. Identify trends, prioritize features, and make data-driven decisions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GiftIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Customizable rewards.</strong> Incentivize feedback
                    with points, badges, and crypto. Keep users motivated and engaged.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                With <strong>Feedward</strong>, you're not just collecting feedback; you're creating an ecosystem of
                engaged users who are invested in your product's growth. Our platform ensures that giving feedback is no
                longer a chore, but an enjoyable part of the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
