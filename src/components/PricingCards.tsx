const tiers = [
  {
    name: 'Starter',
    id: null,
    href: '#',
    priceMonthly: null,
    description: 'Get chating right away with anyone, anywhere!',
    features: [
      '20 Messages Chat Limit in Chats',
      '2 perticipant limit in chat',
      '3 chat room limit',
      'Supports 2 languages',
      '48 hour support response time',
    ],
  },
  {
    name: 'Pro',
    id: 'si_ouou0k',
    href: '#',
    priceMonthly: '$5.35',
    description: 'Unlock the Full potential with pro!',
    features: [
      'Unlimited Messages in Chats',
      'Unlimited participants in chats',
      'Unlimited chat room',
      'Multimidia Supports in chat (coming soon)',
      'Early acces to new feature',
      '1 hour dedicated supprt response time',
      'Early acces to new feature',
    ],
  },
];

import { CheckIcon } from 'lucide-react';
import React from 'react';

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className=" flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
        >
{/* ----------------------------------------------- */}
            <div>
                <h3 id={tier.id + tier.name} className='text-base font-semibold  leading-7 text-indigo-600'>{tier.name}</h3>
                <div className='mt-4 flex  items-baseline gap-x-2'>

                    {tier.priceMonthly?(
                        <>
                        <span className='text-5xl font-bold tracking-tight text-gray-900'>{tier.priceMonthly}</span>
                        <span className='text-base font-bold leading-7 text-gray-600'>/month</span>
                        </>

                    ):(
                        <span className='text-5xl font-bold tracking-tight text-gray-900'>Free</span>
                    )}

                </div>
                <p className='mt-6 text-base leading-7 text-gray-600'>{tier.description}</p>
                <ul role='list' className='mt-10 space-y-4 text-sm leading-6 text-gray-600'>
                       {tier.features.map((feature) =>(
                        <li key={feature} className='flex gap-x-3'>
                            <CheckIcon className='h-6 w-5 flex-none text-indigo-600' aria-hidden="true"/>
                            {feature}
                        </li>
                       ))} 
                </ul>
            </div>

        </div>
      ))}
    </div>
  );
}

export default PricingCards;