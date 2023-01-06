(()=> {
    
    function fullName( firstName: string, lastName?: string, toUpper: boolean = false ): string {
        if(toUpper) {
            return `${ firstName } ${ lastName || '---' }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || '---' }`;
        }
    }
    
    const name: string = fullName('Tony', 'Stark');
    console.log(name);

})();