/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  let rests = restaurants;

  if (veganFriendly) {
    rests = restaurants.filter(r => {
      return Boolean(r[2]);
    });
  }

  rests = rests.filter(r => {
    return r[3] <= maxPrice && r[4] <= maxDistance;
  });

  rests.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    }

    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    }

    return 0;
  });

  return rests.map(r => r[0]);
};
