kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 150, 200, 150],
})


console.log("hello world")

loadRoot("https://i.imgur.com/")

loadSprite("tank", "e4NbbLg.png")
loadSprite("tank-left", "TJ4VC49.png")
loadSprite("tank-right", "orubOGI.png")
loadSprite("tank-down", "iq15IJi.png")

loadSprite("bullet", "1sBk4rh.png")

loadSprite("bloque", "JtnrTFc.png")

const player = add([
    sprite("tank"),
    scale(5),
    pos(120, 200),
    
])


//propiedades del tanque
const speed = 300
var orientacion = ""
var can_shoot_right = true



//propiedades de la bala
const speedBullet = 300
var colision = false
var movements_bullet = 0 

function shoot(){

    //obtener los atributos del "player"
    const tank = get("player")[0]
    const position = tank.pos


    if(orientacion == "right" & can_shoot_right){
        console.log(can_shoot_right)
       
        add([
            sprite("bullet"),
            scale(2),
            pos(position.x+80,position.y+53),
            origin("center"),
            "bullet-right",

        ])

        const bullet_right = get("bullet-right")[0]

        loop(1, () =>{
            bullet_right.move(speedBullet, 0)
            movements_bullet++
            console.log(movements_bullet)

            if(movements_bullet == 7){
                destroyAll("bullet-right")
                can_shoot = true
               

               

            }

        })
        
        
        

    } else if(orientacion == "left"){
        add([
            sprite("bullet"),
            scale(2),
            pos(position.x-15, position.y+53),
            origin("center")
        ])
    } else if(orientacion == "up"){
        add([
            sprite("bullet"),
            scale(2),
            pos(position.x+34, position.y+10),
            origin("center")
        ])
    } else if(orientacion == "down"){
        add([
            sprite("bullet"),
            scale(2),
            pos(position.x+34, position.y+100),
            origin("center")

        ])

    }

}

const levels = [
    [
        "############",
        "#          #",
        "#          #",
        "###        #",
        "#          #",
        "#         ##",
        "#          #",
        "#          #",
        "#&         #",
        "############",
    ],
]



//scene("nombre", (parametros)=>{})
scene("game", ()=>{

    const level = addLevel(levels[0], {
        width: 63.4, //ancho, obligatorio
        height: 63.4, //alto, obligatorio
        pos: vec2(100, 100),
        "#": () => [
            sprite("bloque"),
            scale(1.9),
            //component gives the object a collider, which enables collision checking
            area(),
            //para que no sea pasable
            solid(),

        ],

        "&": () => [
            sprite("tank"),
            scale(1.9),
            area(),
            solid(),
            //etiqueta
            "player",
        ]
    })

    //get("etiqueta")
    const player = get("player")[0]

    //posicionar la camara en el jugador
    player.onUpdate(() => {

        camPos(player.pos)
    })

    onKeyDown("left", () => {
        orientacion = "left"


        //cambiar sprite changeSprite("nombre")
        player.use(sprite("tank-left"))

        debug.log(player.pos.x)

        //movimiento move(en x, en y)
        player.move(-speed, 0)
    })

    onKeyDown("right", ()=> {

        


        orientacion = "right"

    


        player.use(sprite("tank-right"))
        player.move(speed, 0)
    })

    onKeyDown("up", () => {

        orientacion = "up"

        player.use(sprite("tank"))
        player.move(0, -speed)
    })

    onKeyDown("down", () => {

        orientacion = "down"

        debug.log("down")
        player.use(sprite("tank-down"))
        player.move(0, speed)
    })


    

    onKeyPress("space", () => {
 
        shoot()
        


    })



})


function start() {

    //go("nombre de escene")
    go("game")
}

start()
