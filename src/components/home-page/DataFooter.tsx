const stats = [
    { id: 1, name: 'Of users expect companies to to understand their needs and expectations. ', value: '~73%' },
    { id: 2, name: 'Stay loyal to companies when they are being listened', value: '> 50%' },
    { id: 3, name: 'Of companies now prioritize customer experience', value: '~88%' },
  ]
  
  export default function DataFooter() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-orange-600 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  