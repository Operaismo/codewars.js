const cannonsReady = (gunners) => {
    return Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!';
}