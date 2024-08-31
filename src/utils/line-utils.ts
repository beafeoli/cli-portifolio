export function lineDespacer(s: string) { //
    let newS = s.trim();
    newS = newS.replace(/ {2,}/,' ').toLowerCase();
    return newS;
}