// Anything exported from this file is importable by other in-browser modules.
let dd;
export function getCurrentUser() {
    return{
        name:"single-spa-workshop",
        kk:dd
    }
}

export function getCount(a) {
    return dd= a*5
}