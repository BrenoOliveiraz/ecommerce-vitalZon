import React, { useState } from "react";

interface FreteResponse {
  // se quiser, podemos tipar melhor com base na resposta real da API
  [key: string]: unknown;
}

export default function CalculoFrete() {
  const [fromCep, setFromCep] = useState("");
  const [toCep, setToCep] = useState("");
  const [resultado, setResultado] = useState<FreteResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const url = "https://www.melhorenvio.com.br/api/v2/me/shipment/calculate";

  const calcularFrete = async () => {
    setErro(null);
    setResultado(null);

    if (!fromCep || !toCep) {
      setErro("Por favor, preencha os dois CEPs.");
      return;
    }

    const payload = {
      from: { postal_code: fromCep },
      to: { postal_code: toCep },
      package: {
        height: "40",
        width: "25",
        length: "20",
        weight: "1"
      }
    };

    try {
      setLoading(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ME_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const data: FreteResponse = await response.json();
      setResultado(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErro(err.message);
      } else {
        setErro("Erro inesperado ao calcular o frete.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        maxWidth: 500,
        margin: "auto"
      }}
    >
      <h2>🧾 Cálculo de Frete - Melhor Envio</h2>

      <label>CEP de Origem:</label>
      <br />
      <input
        type="text"
        value={fromCep}
        onChange={(e) => setFromCep(e.target.value)}
        placeholder="Ex: 96020360"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>CEP de Destino:</label>
      <br />
      <input
        type="text"
        value={toCep}
        onChange={(e) => setToCep(e.target.value)}
        placeholder="Ex: 01311000"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        onClick={calcularFrete}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {loading ? "Calculando..." : "Calcular Frete"}
      </button>

      {erro && (
        <p style={{ color: "red", marginTop: "10px" }}>❌ {erro}</p>
      )}

      {resultado && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#f7f7f7",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>Resultado:</h3>
          <pre>{JSON.stringify(resultado, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
