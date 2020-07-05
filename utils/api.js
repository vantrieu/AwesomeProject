export const getCurrentTemp = () =>
  fetch(
    'http://flask-env-oanh.eba-2v537p2h.us-east-2.elasticbeanstalk.com',
  ).then(res => res.json());

export const getNextByInput = () =>
  fetch(
    'http://flask-env-oanh.eba-2v537p2h.us-east-2.elasticbeanstalk.com/iot60Minutes',
  ).then(res => res.json());
