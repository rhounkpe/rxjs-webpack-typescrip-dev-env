import {Observable} from "rxjs";

const observable = new Observable(function subscribe(subscriber) {
  // Keep track of the interval resource
  const intervalId = setTimeout(() => {
    subscriber.next('Hi')
  }, 2000);

  // Provide a way of cancelling and disposing the interval resource
  return function unsubscribe() {
    clearInterval(intervalId);
  };
});
