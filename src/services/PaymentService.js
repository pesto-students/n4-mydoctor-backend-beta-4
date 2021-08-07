import Stripe from "stripe";
import { v4 as uuid } from "uuid";
import { config } from "dotenv";
config();

const stripe = new Stripe(process.env.NODE_APP_KEY, {
  apiVersion: "2020-08-27",
});

const PaymentService = {
  getPayments: async (req, res) => {
    const { product, token } = req.body;
    console.log("Product : ", product);
    console.log("Price :", product.price);
    const idempotencyKey = uuid();

    return stripe.customers
      .create({
        email: token.email,
        source: token.id,
      })
      .then((customer) => {
        stripe.charges.create(
          {
            amount: product.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: product.name,
            shipping: {
              name: token.card.name,
              address: {
                country: token.card.address_country,
              },
            },
          },
          { idempotencyKey }
        );
      })
      .then((result) => res.status(200).json(result))
      .catch((err) => console.log(err));
  },
};

export default PaymentService;
