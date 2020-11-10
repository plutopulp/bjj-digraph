import _ from "lodash";

// Given 2 array of objects, returns the object missing from the shortest array
export const getMissingObject = (array1, array2) => {
  if (array1.length === array2.length)
    throw new Error("Input arrays should have different lengths");
  const longArray = array1.length > array2.length ? array1 : array2;
  const shortArray = array1.length > array2.length ? array2 : array1;
  const missingObjects = _.difference(longArray, shortArray);
  if (missingObjects.length !== 1)
    throw new Error("There should only be 1 missing object in the short array");
  return missingObjects[0];
};
