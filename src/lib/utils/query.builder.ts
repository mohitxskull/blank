/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
const QueryBuilderFun = <T = any>(path: string, query: T) => {
  for (const key in query) {
    if (query[key] === null || query[key] === undefined || query[key] === '') {
      delete query[key];
    }
  }

  const QueryString = new URLSearchParams(query as any).toString();

  return `${path}?${QueryString}`;
};

export default QueryBuilderFun;
