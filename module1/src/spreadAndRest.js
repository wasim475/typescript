"use strict";
// spread operator
const bros1 = ['sakib', 'tamim', 'mashrafi'];
const bros2 = ['kohli', 'rohit', 'rahul'];
bros1.push(...bros2);
const myInspiration = {
    cricket: 'Tamim Iqbal',
    coding: 'Nadim Nafi',
};
const myFavPerson = {
    socialMedia: 'Chamok Hasan',
    family: 'My Mom',
};
const myFavAndIns = Object.assign(Object.assign({}, myInspiration), myFavPerson);
// rest operator
const friendZone = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
friendZone("abul", 'kabul', 'babul', 'bokul');
