import express from 'express';
import { ContainerInstance } from 'typedi';

import { Customer } from './models/Customer';

export interface Context {
  requestId: number;
  req: express.Request;
  res: express.Response;
  customer: Customer;
  container: ContainerInstance;
}
