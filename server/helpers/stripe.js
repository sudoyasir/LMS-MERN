const Stripe = require('stripe');
const stripe = Stripe("stripe_secret_key"); // Replace with your stripe secret key

module.exports = stripe;