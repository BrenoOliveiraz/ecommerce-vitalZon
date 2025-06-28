import Stripe from 'stripe'

if (!process.env.STRIPE_API_KEY) {
  throw new Error("STRIPE_API_KEY not set");
}

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2025-05-28.basil',
});


export default stripe;
