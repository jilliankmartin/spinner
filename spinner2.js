  let slashes = ["|", "/", "-", "\\"]
  let timer = 100;
  for (let slash of slashes) {
    setTimeout(() => {
      process.stdout.write(`\r${slash}   `);
    }, timer);
    timer += 200;
  };
