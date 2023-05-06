const books = {
    name: 'Aadujeevitham',
    author: 'Benyamin',
    
    get details() {
        return `${books.name} by ${books.author}`;
    },
    
    set details(value) {
        const parts = value.split(' ');
        this.name = parts[0];
        this.author = parts[1];
    }
};

books.details = 'Indians Tony';
console.log(books.details);
