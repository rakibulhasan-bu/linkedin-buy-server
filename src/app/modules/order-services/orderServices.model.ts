import { Schema, model } from "mongoose";
import { TOrderServices } from "./orderServices.interface";

const orderServicesSchema = new Schema<TOrderServices>(
  {
    commentsPostLink: { type: String },
    connectionsPostLink: { type: String },
    email: { type: String, required: true },
    followersPostLink: { type: String },
    likesPostLink: { type: String },
    reactionsPostLink: { type: String },
    sharePostLink: { type: String },
    skype: { type: String },
    telegram: { type: String },
    whatsApp: { type: String },
    share: { type: Number },
    connections: { type: Number },
    followers: { type: Number },
    comments: { type: Number },
    reactions: { type: Number },
    likes: { type: Number },
    totalPrize: { type: String, required: true },
  },
  { timestamps: true },
);

const OrderServices = model("OrderServices", orderServicesSchema);

export default OrderServices;
