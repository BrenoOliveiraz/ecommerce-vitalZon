// @/components/NutritionTable.tsx

export default function NutritionTable() {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Informações Nutricionais</h2>
      <p className="text-sm mb-2">
        Porções por embalagem: Cerca de 9<br />
        Porção: 16g (16 comprimidos)
      </p>
      <table className="w-full text-sm border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">INFORMAÇÃO</th>
            <th className="border px-2 py-1 text-left">16g</th>
            <th className="border px-2 py-1 text-left">%VD (*)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1">Valor energético (kcal)</td><td className="border px-2 py-1">55</td><td className="border px-2 py-1">3</td></tr>
          <tr><td className="border px-2 py-1">Carboidratos (g)</td><td className="border px-2 py-1">3,5</td><td className="border px-2 py-1">1</td></tr>
          <tr><td className="border px-2 py-1">Proteínas (g)</td><td className="border px-2 py-1">8,4</td><td className="border px-2 py-1">17</td></tr>
          <tr><td className="border px-2 py-1">Fibras Alimentares (g)</td><td className="border px-2 py-1">1,1</td><td className="border px-2 py-1">4</td></tr>
          <tr><td className="border px-2 py-1">Sódio (mg)</td><td className="border px-2 py-1">98</td><td className="border px-2 py-1">5</td></tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-600 mt-2">
        Não contém quantidades significativas de açúcares totais, açúcares adicionados, galactose, gorduras totais, gorduras saturadas e gorduras trans.
      </p>
      <p className="text-xs text-gray-600">
        (*) Percentual de valores diários fornecidos pela porção
      </p>
    </div>
  );
}
