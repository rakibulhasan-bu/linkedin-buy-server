import { Router } from "express";
import categoryRoute from "../modules/category/category.route";
import userRoute from "../modules/user/user.route";
import authRoute from "../modules/auth/auth.route";
import servicePriceRoute from "../modules/services-prize/servicesPrize.route";
import orderServicesRoute from "../modules/order-services/orderServices.route";
import zeroConnectionPrizeRoute from "../modules/zero-connection-prize/zeroConnectionPrize.route";
import organicPrizeRoute from "../modules/organic-price/organicPrice.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: categoryRoute,
  },
  {
    path: "/",
    route: servicePriceRoute,
  },
  {
    path: "/",
    route: zeroConnectionPrizeRoute,
  },
  {
    path: "/",
    route: organicPrizeRoute,
  },
  {
    path: "/",
    route: orderServicesRoute,
  },
  {
    path: "/auth",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
