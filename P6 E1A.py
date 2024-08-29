
#PRACTICA 6 1A

from ursina import *
from ursina.texture_importer import load_texture
from ursina.prefabs.first_person_controller import FirstPersonController
from ursina.shaders import lit_with_shadows_shader
app = Ursina(borderless=False)

random.seed(0) 
window.size=(700,700)
Entity.default_shader = lit_with_shadows_shader
player = FirstPersonController()

# Textura de los cubos   
texturaCubo = load_texture('Arm_Texture')

class Cubo(Entity):
    def __init__(self, position=(0,0,0), move=False):
        super().__init__(
            position = position,
            model = 'cube',
            scale = (1,1),
            origin_y = -.5,
            texture= texturaCubo,
            collider = 'box',
        )
        self.move = move
        self.direction = 1 if random.randint(0, 1) == 0 else -1
        self.speed = 0.1

    def update(self):
        if self.move:
            self.x += self.direction * self.speed
            if self.x > 4 or self.x < -4:
                self.direction *= -1 
player.position=Vec3(0,10,0)

Cubo(position=(0,3,0))
Cubo(position=(0,2,8), move=True) 
Cubo(position=(0,3,2))
Cubo(position=(0,2,22), move=True) 
 

def input(key):
    if key == 'escape':
        quit()

 
texturaBase= load_texture('Brick_Block')

ground = Entity(model='plane', collider='box', scale = 64, texture=texturaBase)
ground.position = Vec3(0,-2,0)


for z in range(33):
    cubo = Cubo(position=(random.randint(1,4),1,z))
    if z == 29:
        cubo.color = color.orange

texturaBaseFinal= load_texture('base_final')
groundFinal = Entity(model='plane', collider='box', scale = 5,texture=texturaBaseFinal )
groundFinal.position = Vec3(2,2,35)

def update():
    
    if(player.position.y <= -1.5):
        player.position = Vec3(0,10,0)

    if player.position.z >=25:
        textoGanar = Text(text='¡GANASTE!', scale=2, origin=(0, 0), color=color.orange)

Sky()
app.run()
