import {Observable} from "rxjs";



const observable = new Observable(subscriber => {
  try {
    subscriber.next('Hi guys!');
    subscriber.next('How are you?');

    setInterval(() => {
      subscriber.next('I am good');
    }, 2000);
    subscriber.complete();
    subscriber.next('This will not send...');
  } catch (e) {
    subscriber.error(e);
  }

});


const observer = observable.subscribe(
  (x) => addItem(x),
  (error) => addItem(error),
  () => addItem('Completed...')
);




setTimeout(() => {
  const observer2 = observable.subscribe(
    x => addItem(x),
  );
}, 1000);

function addItem(val) {
  let node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
