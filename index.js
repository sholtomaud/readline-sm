const fs = require('fs');
const crypto = require('crypto');

//iconst hash = crypto.createHash('sha256');

//hash.update('some data to hash');
//console.log(hash.digest('hex'));

var watcher = fs.watch('./index.js',  (eventType, filename) => {
	  if (filename) {
		      console.log(filename);
		      // Prints: <Buffer ..
	 	}
	  });


watcher.on('change',(e,error)=>{
	console.log('changed file', error, 'writing file');
	const hash = crypto.createHash('sha256');
	//hash.update('some data to hash');
	//console.log(hash.digest('hex'));

	const input = fs.createReadStream('./index.js');
	//input.pipe(hash).pipe(fs.createWriteStream( hash.digest('hex') ));
	input.pipe(hash).pipe(process.stdout);
	
////
	// Node.js 0.10+ emits finish when complete
	// wstream.on('finish', function () {
	//   console.log('file has been written');
	// });
	//   wstream.write('Hello world!\n');
	 //:  wstream.write('Another line');
	// wstream.end();
	//console.log('error', error);
})

const readline = require('readline');
const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
	  switch (line.trim()) {
			      case 'hello':
			        console.log('world!');
			        break;
			      default:
			        console.log(`Say what? I might have heard '${line.trim()}'`);
			        break;
			    }
	  rl.prompt();
}).on('close', () => {
	  console.log('Have a great day!');
	  process.exit(0);
});
