(()=>{

    interface Client {
        name: string;
        age: number;
        address: Address;
        getFullAddress():string;
    }

    interface Address {
        city: string;
        zip: string;
    }

    const client: Client = {
        name: 'Moises',
        age: 32,
        address: {
            city: 'Maneadero',
            zip: '22450'
        },
        getFullAddress() {
            return `${this.address.city} ${this.address.zip}`;
        }
    }

})();