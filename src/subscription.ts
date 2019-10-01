import {Observable} from "rxjs";

const appleStream = new Observable(observer => {
    observer.next('Apple 1');
    observer.next('Apple 2');
    observer.complete();
});

const observer = {
    next: (apple: string) => console.log((`Apple was emitted ${apple}`)),
    error: (err: Error) => console.log(`Error has occured: ${err}`),
    complete: () => console.log(`No more apples. Go home`)
};

const subscription = appleStream.subscribe(observer);

const subscr = appleStream.subscribe(
    (apple: string) => console.log(`Apple was emitted ${apple}`),
    error => console.error(`Error occured ${error}`),
    () => console.info(`No more apples. Go home...`)

);
