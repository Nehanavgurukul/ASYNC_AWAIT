function caserUpper(val) {
    return new Promise((resolve, reject) => {
      resolve(val.toUpperCase());
    });
  }
  
async function msg(x) {
  try {
    const msg = await caserUpper(x);
    console.log(msg);
  } catch(err) {
    console.log('Ohh no:', err.message);
  }
}

msg('Hello'); 
msg(34);