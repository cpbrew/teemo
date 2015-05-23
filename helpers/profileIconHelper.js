'use strict';

let baseUrl = null;

exports.init = (realm) => {
  baseUrl = realm.cdn + '/' + realm.v;
}

exports.urlForIcon = (iconId) => {
  if (!baseUrl) {
    throw new Error('Profile icon helper not initialized!');
  }

  return baseUrl + '/img/profileicon/' + iconId + '.png';
}