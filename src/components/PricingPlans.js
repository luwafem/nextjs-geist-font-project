'use client'

export default function PricingPlans({ onPlanSelect }) {
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 2500,
      duration: '1 Month',
      features: [
        '5,000+ Live Channels',
        'HD Quality Streaming',
        '2 Device Connections',
        'Basic Support',
        'Mobile & TV Apps'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 4000,
      duration: '1 Month',
      features: [
        '8,000+ Live Channels',
        'HD & 4K Quality',
        '4 Device Connections',
        'Priority Support',
        'All Apps Included',
        'VOD Library Access'
      ],
      popular: true
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      price: 6000,
      duration: '1 Month',
      features: [
        '10,000+ Live Channels',
        '4K Ultra HD Quality',
        'Unlimited Devices',
        '24/7 Premium Support',
        'All Apps & Features',
        'Full VOD Library',
        'Sports & PPV Events'
      ],
      popular: false
    }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(price)
  }

  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your streaming needs. All plans include 1-month access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-gray-900 rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                plan.popular 
                  ? 'border-white bg-gradient-to-b from-gray-800 to-gray-900' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{formatPrice(plan.price)}</span>
                  <span className="text-gray-400 ml-2">/ {plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onPlanSelect(plan)}
                className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include instant activation and 24/7 customer support
          </p>
        </div>
      </div>
    </section>
  )
}
