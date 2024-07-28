function _clone(source, depth) {
    if (depth === 0 || typeof source !== 'object') {
        return source; // Base case: Stop cloning when depth limit is reached or the source is not an object.
    }

    const clone = Array.isArray(source) ? [] : {}; // Create an empty array or object based on the source type.

    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            clone[key] = _clone(source[key], depth - 1); // Recursively clone the property value with reduced depth.
        }
    }

    return clone;
}

// Example usage:
const parent = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const child = {};

const propertyName = 'address';
const depth = 2;

child[propertyName] = _clone(parent[propertyName], depth - 1);
