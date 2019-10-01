import {from, of} from "rxjs";
import {map, take, tap} from "rxjs/operators";



from([20, 15, 10, 5]).pipe(
    tap(item => console.log(`Emitting item: ${item}`)),
    map(item => item * 2),
    map(item => item - 10),
    map(item => {
        if (item === 0) {
            throw new Error(`${item} detected!`);
        }
        return item;
    }),
    take(3)
).subscribe(
    item => console.log(`Resulting item: ${item}`),
    error => console.error(`An error has occured ${error}`),
    () => console.log('Completed!')
);


/*
of(2, 4, 6)
    .pipe(
        map(item => item * 2),
        tap(item => console.info(item)),
        take(2)
    )
    .subscribe(
        el => console.log(`Element ${el}`),
        error => console.error(error),
        () => console.info('Completed ...')
    );

 */
