import Image from 'next/image';
import ResellerCTA from './Reseller';

export default function BrandPillars() {
  return (
    <section className="bg-white py-16 px-4 text-center mt-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Nossos princípios essenciais
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">

        {/* Pilar 1 */}
        <div className="relative overflow-hidden rounded-lg h-[600px]">
          <Image
            src="/pro-ciencia.jpg"
            alt="Ciência Aplicada"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-white text-left bg-gradient-to-t from-black/30 via-black/10 to-transparent">
            <h3 className="text-xl font-extrabold tracking-wide mb-2">CIÊNCIA APLICADA</h3>
            <p className="text-sm font-medium max-w-[90%]">
              Investimos em pesquisa e tecnologia para criar soluções inovadoras e eficazes. Nosso foco é a evolução constante com base em evidências.
            </p>
          </div>
        </div>

        {/* Pilar 2 */}
        <div className="relative overflow-hidden rounded-lg h-[600px]">
          <Image
            src="/pro-pureza.jpg"
            alt="Ingredientes Seguros"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-white text-left bg-gradient-to-t from-black/30 via-black/10 to-transparent">
            <h3 className="text-xl font-extrabold tracking-wide mb-2">INGREDIENTES SEGUROS</h3>
            <p className="text-sm font-medium max-w-[90%]">
              Valorizamos fórmulas limpas, transparentes e com alta qualidade. Cada componente é escolhido com responsabilidade e rigor técnico.
            </p>
          </div>
        </div>

        {/* Pilar 3 */}
        <div className="relative overflow-hidden rounded-lg h-[600px]">
          <Image
            src="/pro-planeta.jpg"
            alt="Impacto Consciente"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-white text-left bg-gradient-to-t from-black/30 via-black/10 to-transparent">
            <h3 className="text-xl font-extrabold tracking-wide mb-2">IMPACTO CONSCIENTE</h3>
            <p className="text-sm font-medium max-w-[90%]">
              Atuamos com responsabilidade ambiental, buscando reduzir impactos e fortalecer práticas sustentáveis em toda a nossa cadeia.
            </p>
          </div>
        </div>
      </div>

      <ResellerCTA />
    </section>
  );
}
