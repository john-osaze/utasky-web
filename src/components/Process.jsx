import { ArrowPathIcon, UserPlusIcon, GiftIcon, TrophyIcon } from '@heroicons/react/24/outline'

const processes = [
    {
        name: 'Sign Up on uTasky',
        description:
            'First, you have to register directly on our platform before you can be given tasks.',
        icon: UserPlusIcon,
    },
    {
        name: 'Complete simple tasks',
        description:
            'You have to complete simple tasks on the website in order to gain points.',
        icon: TrophyIcon,
    },
    {
        name: 'Accumulate your points',
        description:
            'Each task completed earns you points which you can save and withdraw when due.',
        icon: ArrowPathIcon,
    }, 
    {
        name: 'Withdraw points as cash',
        description:
            'When points are due for withdrawal, you can simply withdraw them as cash.',
        icon: GiftIcon,
    },
]

export default function Process() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight" style={{color: "#5e00d7"}}>How uTasky works</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Here are a few steps on how to earn
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Get to know all the steps needed to help you start earning from our user-friendly and customer-first reward system.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {processes.map((process) => (
                            <div key={process.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg" style={{backgroundColor: "#5e00d7"}}>
                                        <process.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {process.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{process.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
