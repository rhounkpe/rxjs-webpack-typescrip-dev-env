import {Observable} from "rxjs";

const appleStream = new Observable(appleObserver => {
    appleObserver.next('Apple 1');
    appleObserver.next('Apple 2');
    appleObserver.complete();
});

const appleObserver = {
    next: (apple: string) => console.log(`Apple was emitted ${apple}`),
    error: (err: Error) => console.log(`Error occured: ${err}`),
    complete: () => console.log(`No more apples, go home...`)
};

// Subscription is the execution of the observable
const subscription = appleStream.subscribe(appleObserver);
