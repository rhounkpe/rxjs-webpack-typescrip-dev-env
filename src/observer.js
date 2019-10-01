const observer = {
  next: apple => console.log(`Apple was emitted ${apple}`),
  error: err => console.log(`Error occured: ${err}`),
  complete: () => console.log(`No more apples, go home...`)
};
