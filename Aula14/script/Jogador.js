class Jogador{
    constructor(ctx,teclado){
        this.ctx=ctx;
        this.teclado=teclado;
        this.x=0;
        this.y=0;
        this.vel=3;
        this.nave=new Image();
        this.nave.src="img/nave.png";
        this.nave.addEventListener('load',()=>{
            desenhar();
        });
    };
    gerenciar(){
        if(this.teclado.esquerda){
            this.x-=this.vel;
        }else
        if(this.teclado.direita){
            this.x+=this.vel;
        }else
        if(this.teclado.cima){
            this.y-=this.vel;
        }else
        if(this.teclado.baixo){
            this.y+=this.vel;
        }
    };
    desenhar(){
        gerenciar();
        this.ctx.drawImage(this.nave, this.x, this.y);
    };
};