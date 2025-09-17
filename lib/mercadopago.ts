// lib/mercadopago.ts
import MercadoPagoConfig, {  Preference, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export const preference = new Preference(client);
export const payment = new Payment(client);
