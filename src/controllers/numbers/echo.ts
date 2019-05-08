"use strict";
import { Request, Response } from "express";
import logger from '../../utils/logger/winston';
import * as boom from '@hapi/boom';

/**
 * Handler that echoes the user input
 * @param {Request} req
 * @param {Response} res
 * @returns {Request}
 */
export default (req: Request, res: Response): Response => {
  const result: Number = req.params.number;
  logger.error(`number is ${result}`);
  return res.status(200).send({ result });
};