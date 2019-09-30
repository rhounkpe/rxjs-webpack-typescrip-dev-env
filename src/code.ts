import {first, map} from "rxjs/operators";
import {from, of} from "rxjs";
import {TestScheduler} from "rxjs/testing";


const testScheduler = new TestScheduler((actual, expected) => {
    // asserting the two objects are equal
    // e.g. usaing chai.
    //expect(actual).deep.equal(expected);
});


/*
Pipable operators are functions, so they could be used like ordinary functions:
op()(obs)
 */

map((z: any) => z * z - 20)(from([14, 78, 52, 36, 90])).subscribe(
    (a: any) => console.log(`la valeur est: ${a}`),
    error => console.log(error),
    () => console.log('*********************** COMPLETED ***********************')
);


map((x: any) => x * x)(of(1, 2, 3)).subscribe(
    (v: any) => console.log(`Value: ${v}`),
);

first()(of(80, 1, 2, 3)).subscribe(
    (y: any) => console.log(`La valeur de y est : ${y}`),
);
