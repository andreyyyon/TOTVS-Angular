const archiver = require('archiver');
const fs = require('fs');
const filename = 'mdashapp.app'
const source = 'dist\\'
const outPath = ''

// TODO: criar um parametro
const gitPathADVPL = 'C:\\Users\\andrey.rebelatto\\Documents\\Visual Studio 2017\\TOTVS-Angular\\MDASH\\mdashapp\\dist\\'

async function run() {
  // Verifica se o zip existe e deleta ele
  if (await fs.existsSync(outPath + filename)) {
    await fs.unlinkSync(outPath + filename)
  }

  await zipDirectory(source, outPath + filename)

  if (fs.existsSync(outPath + filename)) {
    fs.copyFile(outPath + filename, gitPathADVPL + filename, (err) => {
      if (err) throw err;
      console.log("Coppy! " + outPath + filename + ' => ' + gitPathADVPL + filename);
      console.log('\x1b[32m', 'Arquivo .app gerado com sucesso!', '\x1b[0m')
    });
  } else {  
    console.log('\x1b[31m', 'Não gerou o arquivo%', '\x1b[0m')
  }
}

/**
 * @param {String} sourceDir: /some/folder/to/compress
 * @param {String} outPath: /path/to/created.zip
 * @returns {Promise}
 */
function zipDirectory(sourceDir, outPath) {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', (err) => { reject(err) })
      .pipe(stream)
      ;

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

run()