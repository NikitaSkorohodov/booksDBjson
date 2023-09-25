const { spawn, spawnSync } = require('child_process');

function runScript(scriptName) {
  return new Promise((resolve, reject) => {
    const childProcess = spawn('node', [scriptName]);

    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`Скрипт ${scriptName} завершился с ошибкой (код ${code}).`);
      }
    });

    childProcess.on('error', (err) => {
      reject(`Ошибка при выполнении скрипта ${scriptName}: ${err}`);
    });
  });
}

(async () => {
  try {
    await runScript('app.js');
    console.log('app.js выполнен успешно.');

    // Запустить app1.js синхронно
    const result = spawnSync('node', ['app1.js']);
    if (result.status === 0) {
      console.log('app1.js выполнен успешно.');
    } else {
      console.error(`Скрипт app1.js завершился с ошибкой (код ${result.status}).`);
    }
  } catch (error) {
    console.error(error);
  }
  console.log('index.js выполнен успешно.');
})();


