import GainImg1 from "../assets/images/gain-img-1.jpg"
import GainImg2 from "../assets/images/gain-img-2.jpg"
import GainImg3 from "../assets/images/gain-img-3.jpg"
import GainImg4 from "../assets/images/gain-img-4.jpg"

const features = [
    { name: 'Money', description: 'You get rewarded with cash after completing tasks.' },
    { name: 'Early Access', description: 'Early Access to certain apps is guaranteed.' },
    { name: 'Social Perks', description: 'Premium subscription on selected social media apps.' },
    { name: 'Giveaways', description: 'Occasional giveaways are done to support lucky users.' },
    { name: 'Community Support', description: 'Our outstanding community is ready to help all the way.' },
    { name: 'Tangible Prizes', description: 'Asides cash, you can receive items from our prize pool.' },
]

export default function Product() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src={GainImg1}
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src={GainImg2}
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src={GainImg3}
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src={GainImg4}
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>

                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What you stand to gain</h2>
                    <p className="mt-4 text-gray-500">
                        Becoming a part of our taskforce promises to be incredibly beneficial. All of these are offers
                        you stand to gain once you download our app and start completing tasks. Don't miss out.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
