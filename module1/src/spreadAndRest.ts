// spread operator

const bros1:string[] = ['sakib', 'tamim', 'mashrafi']
const bros2: string[] = ['kohli', 'rohit', 'rahul']

bros1.push(...bros2)

const myInspiration = {
    cricket: 'Tamim Iqbal',
    coding:'Nadim Nafi',
}

const myFavPerson={
    socialMedia:'chamok hasan',
    family: 'My Mom',
}

const myFavAndIns = {...myInspiration,...myFavPerson}

// rest operator

const friendZone = (...friends:string[])=>{
    friends.forEach(friend=> console.log(`Hi ${friend}`))
}

friendZone("abul",'kabul','babul','bokul')