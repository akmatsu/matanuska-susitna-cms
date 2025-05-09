import type { TypeInfo } from '.keystone/types';
import type { KeystoneContext } from '@keystone-6/core/types';
import type { Session } from '../session';
import { RequestHandler } from 'express';

export type CommonContext = KeystoneContext<TypeInfo<Session>>;

export type RequestController = () => RequestHandler;

export type RequestControllerWithContext = (
  context: CommonContext,
) => RequestHandler;
