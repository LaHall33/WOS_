/* 
  Recreate Object.entries method

  Given an object, return an array of arrays of
  the object's key value pairs, where each key
  value pair is a 2 item array

  Do not include key value pairs from the given
  objects prototype (these are included by default
  when looping over an object's keys)
  obj.hasOwnProperty(key)
*/

const obj1 = {
    name: 'Pizza',
    calories: 9001,
  };
  
  const expected1 = [
    ['name', 'Pizza'],
    ['calories', 9001],
  ];
  
  const proto = { inheritance: 'inherited key', keyOnProto: 'val from proto' };
  
  // This object contains inherited key value pairs from the above proto obj.
  const obj2 = Object.assign(Object.create(proto), {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 13,
  });
  
  const expected2 = [
    ['firstName', 'Foo'],
    ['lastName', 'Bar'],
    ['age', 13],
  ];
  
  /**
   * Returns a 2d array of key value pairs from the given obj.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} obj
   * @typedef {Array<Array<string, any>>} output The nested array should look
   *    like [key, val]
   * @returns {output}
   */
  function entries(obj) {
    const result = [];                                     // creating an empty array to store the key value pairs

      for (const key in obj)                               // iterates through all of the keys in the objects
      if(obj.hasOwnProperty(key)) {                        // checks if objects has its own property.
        result.push([key, obj[key]])                        // if so, will push the result into the array
      }
    return result;      
  }

console.log(entries(obj1));