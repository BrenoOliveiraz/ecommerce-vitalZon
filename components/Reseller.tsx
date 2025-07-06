
import Link from 'next/link'

export default function ResellerCTA() {
  return (
    <section className="bg-white py-12 px-4 text-center border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg md:text-xl font-medium text-gray-800 mb-4">
          Gostaria de revender nossos produtos?
        </p>
        <Link className="inline-block text-sm md:text-base text-black border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-200" href="/reseller">
         
            QUERO SER UM REVENDEDOR
        
        </Link>
      </div>
    </section>
  )
}
