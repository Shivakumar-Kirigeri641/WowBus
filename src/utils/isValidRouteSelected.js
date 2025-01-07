const isValidRouteSelected = (routedata) => {
  const { data, text } = routedata;
  const routenamelist = data.filter((x) => x.name == text);
  return "" == text || 0 < routenamelist.length ? true : false;
};

export default isValidRouteSelected;
