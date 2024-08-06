import { CircleStackIcon, Cog6ToothIcon, GiftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { PartyPopper, SlidersHorizontal } from "lucide-react";

const features = [
  {
    name: "1. Setup feedback workflow",
    description: "Design mini-challenges and rewards to gather user feedback efficiently.",
    icon: Cog6ToothIcon,
  },
  {
    name: "2. Choose reward types",
    description: "Select rewards for feedback: points, ERC20 tokens, NFTs, or even custom perks.",
    icon: CircleStackIcon,
  },
  {
    name: "3. Validate feedback",
    description: "Verify user interactions with quests, questions, and AI integration.",
    icon: CheckIcon,
  },
  {
    name: "4. Distribute rewards",
    description: "Award users for their feedback, fostering an engaged user community.",
    icon: GiftIcon,
  },
];

export default function HowItWorks() {
  return (
    <div className="py-3 sm:py-4" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Effortless setup with Zesty. Create a feedback workflow, specify your questions or mini-challenges, choose
            rewards, and we handle the rest. Ensure your project's growth with valuable user feedback.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
