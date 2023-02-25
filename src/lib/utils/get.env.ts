import { EnvVarsType } from '../types/world';

const GetEnv = (key: EnvVarsType) => {
  const Env = process.env[key];

  if (Env === undefined) {
    throw new Error(`Env variable ${key} is undefined`);
  }

  return Env;
};

export default GetEnv;
