class Paper
{
    constructor(x, y, height , width)
    {
        var option ={
            'isStatic' : false,
            'resitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(x,y,height,width,option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    pop()
    }

}