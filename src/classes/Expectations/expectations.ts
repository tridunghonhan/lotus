export interface Expectations {
    isSatisfied():boolean;
}

export class StringExpectation implements Expectations {
    isSatisfied(){
        return true
    }
}