/* eslint-disable no-console */
const getTimeStamp = () => new Date().toISOString();

const info = (namespace: string, message: string, data?: any) => {
  if (data) console.info(`[${getTimeStamp()}] | [${namespace}] | [INFO] | ${message}`, data);
  else console.info(`[${getTimeStamp()}] | [${namespace}] | [INFO] | ${message}`);
};

const warn = (namespace: string, message: string, data?: any) => {
  if (data) console.warn(`[${getTimeStamp()}] | [${namespace}] | [WARN] | ${message}`, data);
  else console.warn(`[${getTimeStamp()}] | [${namespace}] | [WARN] | ${message}`);
};

const error = (namespace: string, message: string, data?: any) => {
  if (data) console.error(`[${getTimeStamp()}] | [${namespace}] | [ERROR] | ${message}`, data);
  else console.error(`[${getTimeStamp()}] | [${namespace}] | [ERROR] | ${message}`);
};

const debug = (namespace: string, message: string, data?: any) => {
  if (data) console.debug(`[${getTimeStamp()}] | [${namespace}] | [DEBUG] | ${message}`, data);
  else console.debug(`[${getTimeStamp()}] | [${namespace}] | [DEBUG] | ${message}`);
};

export default {
  info,
  warn,
  error,
  debug,
};
