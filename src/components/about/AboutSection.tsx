import { CreditCardIcon, HandThumbUpIcon, PhoneIcon, RocketLaunchIcon } from "@heroicons/react/16/solid"
import AboutHorizontalCard from "./AboutHorizontalCard"
import AboutVerticalCard from "./AboutVerticalCard"

const AboutSection = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-4 xl:grid-rows-2">
            <AboutVerticalCard
                Icon={HandThumbUpIcon}
                heading="100% Satisfaction Guaranteed"
                description="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. " />

            <AboutHorizontalCard
                Icon={PhoneIcon}
                heading="24/7 Online Service"
                description="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. " />

            <AboutVerticalCard
                Icon={CreditCardIcon}
                heading="Payment With Secure System"
                description="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis." />

            <AboutHorizontalCard
                Icon={RocketLaunchIcon}
                heading="Fast Delivery"
                description="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis." />
        </div>
    )
}

export default AboutSection
