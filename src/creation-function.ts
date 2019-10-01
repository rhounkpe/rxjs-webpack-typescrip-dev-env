// Of anf from.

import {from, of} from "rxjs";

const apples = ['Apple 1', 'Apple 2'];

from(apples).subscribe(
    (apple: string) => console.log(`Apple emitted ${apple}`),
    (error: Error) => console.error(error)
);


of('Apple 3', 'Apple 4').subscribe(
    (apple: string) => console.log(`Let us emit ${apple}`),
    error => console.error(error)
);

of(...apples).subscribe(
    (apple: string) => console.log(`Unspread apple ${apple}`),
    error => console.error(error),
    () => console.info('Finishing spreading apples...')
);


// We use the spread operator with of operator to do the same thing as from operator

