class Ground {
    constructor() {
        var ground_options = {
            isStatic: true
      }
        this.body = Bodies.rectangle(450, 390, 900, 20, ground_options);
        World.add(world, this.body);
    }
    display(){
        noStroke();
        rectMode(CENTER);
        fill(188, 67, 67);
        rect(this.ground.position.x, this.ground.position.y, 900, 20);
    }
}
