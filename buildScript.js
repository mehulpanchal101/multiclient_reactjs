const fs = require('fs');

// Get client argument from process.argv
const args = process.argv.slice(2);
const clientArgIndex = args.indexOf('--client');

if (clientArgIndex !== -1 && args.length > clientArgIndex + 1) {
    const client = args[clientArgIndex + 1];
    // Set REACT_APP_CLIENT environment variable
    process.env.REACT_APP_CLIENT = client;
} else {
    console.error('Client argument not provided');
    process.exit(1);
}

// Run the build script
require('react-scripts/scripts/build');
