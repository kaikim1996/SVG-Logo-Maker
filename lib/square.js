class Square {
    constructor() {
        this.color = '';
    }
    setColor(colorToSet) {
        this.color = colorToSet;
    }
    render() {
        return `<rect x="10" y="10" width="300" height="200" fill="${this.color}"/>`
    }
}

module.exports = Square;