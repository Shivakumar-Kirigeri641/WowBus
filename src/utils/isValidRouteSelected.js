const isValidRouteSelected = (routedata) => {
  const { data, searchtext } = routedata;
  const routenamelist = data.filter((x) => x.name == searchtext);
  return "" == searchtext || 0 < routenamelist.length ? true : false;
};

export default isValidRouteSelected;
