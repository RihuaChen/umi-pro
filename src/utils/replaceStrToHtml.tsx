const keepLineBreakJSX = (str: string = '') => {
  return <span className="pre">{str.replace(/\\n/g, '\n')}</span>;
};
const keepLineBreakStr = (str: string = '') => {
  return str.replace(/\\n/g, '\n');
};
export { keepLineBreakJSX, keepLineBreakStr };
