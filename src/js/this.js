class A {
    constructor() {
        this.a = 1234
    }
    f() {
        console.log(this.a)
    }
    g = () => console.log(this.a)
}

const myA = new A
myA.g()
myA.f()