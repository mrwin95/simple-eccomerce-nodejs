"use strict";

import { log } from "console";
import mongoose from "mongoose";

export const countConnect = () => {
  const numberConnection = mongoose.connections.length;
  log(`Number of connections: ${numberConnection}`);
  return numberConnection;
};
