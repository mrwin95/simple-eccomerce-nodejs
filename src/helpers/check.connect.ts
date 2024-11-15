"use strict";

import { log } from "console";
import mongoose from "mongoose";
import os from "os";

const _SECONDS = 10000;
export const countConnect = () => {
  const numberConnection = mongoose.connections.length;
  log(`Number of connections: ${numberConnection}`);
  return numberConnection;
};

export const checkOverLoad = () => {
  setInterval(() => {
    const numberConnection = mongoose.connections.length;
    const numberOfCores = os.cpus().length;
    const memoryUsage = os.totalmem() - os.freemem();
    const maxConnection = numberOfCores * 5;

    log(`Number of connections: ${numberConnection}`);
    log(`Number of cores: ${numberOfCores}`);
    log(`Memory usage: ${memoryUsage / 1024 / 1024 / 1000} MB`);

    if (numberConnection > maxConnection) {
      log("Overload connections");
      // send notification
    }
  }, _SECONDS);
};
