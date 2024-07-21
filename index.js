// Helper functions to compare arrays and objects
function arraysEqual(arr1, arr2) {
   if (arr1.length !== arr2.length) return false;
   for (let i = 0; i < arr1.length; i++) {
     if (arr1[i] !== arr2[i]) return false;
   }
   return true;
 }
 
 function objectsEqual(obj1, obj2) {
   const keys1 = Object.keys(obj1);
   const keys2 = Object.keys(obj2);
   if (keys1.length !== keys2.length) return false;
   for (let key of keys1) {
     if (obj1[key] !== obj2[key]) return false;
   }
   return true;
 }
 
 // Implementation of myEach function
 function myEach(collection, callback) {
   const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection);
   for (let i = 0; i < newCollection.length; i++) {
     callback(newCollection[i]);
   }
   return collection;
 }
 
 // Implementation of myMap function
 function myMap(collection, callback) {
   const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection);
   const result = [];
   for (let i = 0; i < newCollection.length; i++) {
     result.push(callback(newCollection[i]));
   }
   return result;
 }
 
 // Implementation of myReduce function
 function myReduce(collection, callback, acc) {
   const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection);
   let i = 0;
   if (acc === undefined) {
     acc = newCollection[0];
     i = 1;
   }
   for (; i < newCollection.length; i++) {
     acc = callback(acc, newCollection[i], newCollection);
   }
   return acc;
 }
 
 // Implementation of myFind function
 function myFind(collection, predicate) {
   const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection);
   for (let i = 0; i < newCollection.length; i++) {
     if (predicate(newCollection[i])) return newCollection[i];
   }
   return undefined;
 }
 
 // Implementation of myFilter function
 function myFilter(collection, predicate) {
   const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection);
   const result = [];
   for (let i = 0; i < newCollection.length; i++) {
     if (predicate(newCollection[i])) result.push(newCollection[i]);
   }
   return result;
 }
 
 // Implementation of mySize function
 function mySize(collection) {
   return (Array.isArray(collection)) ? collection.length : Object.keys(collection).length;
 }
 
 // Implementation of myFirst function
 function myFirst(array, n = 1) {
   if (n === 1) return array[0];
   return array.slice(0, n);
 }
 
 // Implementation of myLast function
 function myLast(array, n = 1) {
   if (n === 1) return array[array.length - 1];
   return array.slice(-n);
 }
 
 // Implementation of myKeys function
 function myKeys(obj) {
   return Object.keys(obj);
 }
 
 // Implementation of myValues function
 function myValues(obj) {
   return Object.values(obj);
 }
 