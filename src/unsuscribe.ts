import {Observable} from "rxjs";

const appleStream = new Observable((observer) => {
    observer.next('Apple 1');
    observer.next('Apple 2');
    observer.complete();
});


const appleObserver = {
    next: (apple: string) => console.log(`Apple emitted ${apple}`),
    error: (err: Error) => console.log((`Error occured: ${err}`)),
    complete: () => console.log(`No more apples. Go home...`)
};

const subscription = appleStream.subscribe(appleObserver);

setTimeout(subscription.unsubscribe, 3000);
