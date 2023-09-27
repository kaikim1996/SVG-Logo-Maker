class Circle {
    constructor(){
        this.color = '';
    }
    setColor(colorToSet){
        this.color = colorToSet;
    }
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

module.exports = Circle;