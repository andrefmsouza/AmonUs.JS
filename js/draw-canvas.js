const DrawCanvas = {
    drawMap(canvas, ctx, map, player){
        ctx.drawImage(
            map,
            player.x - Math.floor(canvas.width / 2 ) + Math.floor(player.width / 2), //img start x
            player.y - Math.floor(canvas.height / 2 ) + Math.floor(player.height /2 ), //img start y
            canvas.width, //img width size
            canvas.height, //img height size
            0, //canvas initial x
            0, //canvas initial y
            canvas.width, //canvas width size
            canvas.height //canvas height size
        );
    },

    drawRect(ctx, x, y, width, height, color){
        ctx.fillStyle = color;

        ctx.fillRect( x, y, width, height);
    },

    drawObjLine(obj, ctx, playerRefCanvas, player, color){
        ctx.strokeStyle = color;
         
        let positionCanvas = {
            x1: playerRefCanvas.x + (obj.x1 - player.x),
            y1: playerRefCanvas.y + (obj.y1 - player.y),
            x2: playerRefCanvas.x + (obj.x2 - player.x),
            y2: playerRefCanvas.y + (obj.y2 - player.y),
        }

        ctx.beginPath();
        ctx.moveTo(positionCanvas.x1, positionCanvas.y1);
        ctx.lineTo(positionCanvas.x2, positionCanvas.y2);
        
        ctx.stroke();
    },

    drawObjRect(obj, ctx, playerRefCanvas, player, color){
        ctx.fillStyle = color;

        let positionCanvas = {
            x: playerRefCanvas.x + (obj.x - player.x),
            y: playerRefCanvas.y + (obj.y - player.y)
        }

        ctx.fillRect( positionCanvas.x, positionCanvas.y, obj.width, obj.height);
    },

    drawObjEllipse(obj, ctx, playerRefCanvas, player, color){
        ctx.strokeStyle = color;

        let positionCanvas = {
            x1: playerRefCanvas.x + (obj.x1 - player.x),
            y1: playerRefCanvas.y + (obj.y1 - player.y),
            x2: playerRefCanvas.x + (obj.x2 - player.x),
            y2: playerRefCanvas.y + (obj.y2 - player.y),
            x3: playerRefCanvas.x + (obj.x3 - player.x),
            y3: playerRefCanvas.y + (obj.y3 - player.y),
            x4: playerRefCanvas.x + (obj.x4 - player.x),
            y4: playerRefCanvas.y + (obj.y4 - player.y),
        }

        ctx.beginPath();
        ctx.moveTo( positionCanvas.x1 , positionCanvas.y1);
        ctx.bezierCurveTo( positionCanvas.x1, positionCanvas.y2, positionCanvas.x3, positionCanvas.y2 , positionCanvas.x3, positionCanvas.y3);
        ctx.stroke();
        ctx.moveTo( positionCanvas.x3 , positionCanvas.y3);
        ctx.bezierCurveTo( positionCanvas.x3, positionCanvas.y4, positionCanvas.x1, positionCanvas.y4 , positionCanvas.x1, positionCanvas.y1);
        ctx.stroke();
    },

    drawObjCircle(obj, ctx, playerRefCanvas, player, color){
        ctx.strokeStyle = color;

        let positionCanvas = {
            x: playerRefCanvas.x + (obj.x - player.x),
            y: playerRefCanvas.y + (obj.y - player.y),
        }

        ctx.beginPath();
        ctx.arc(positionCanvas.x, positionCanvas.y, obj.radius, 0, 2 * Math.PI);
        ctx.stroke();
    },

    drawObjects( objects, ctx , playerRefCanvas, player, color){
        objects.forEach( (obj) => {
            
            if( obj.type == 'line' ){
                this.drawObjLine(obj, ctx, playerRefCanvas, player, color);
            }else if( obj.type == 'rect'){
                this.drawObjRect(obj, ctx, playerRefCanvas, player, color);
            }else if( obj.type == 'ellipse'){
                this.drawObjEllipse(obj, ctx, playerRefCanvas, player, color);
            }else if( obj.type == 'circle'){
                this.drawObjCircle(obj, ctx, playerRefCanvas, player, color);
            }

        } );
    },

    drawPlayer(ctx, canvas, player, color){
        ctx.fillStyle = color;

        let width = player.width;
        let height = player.height;

        let centerX = canvas.width / 2 - width / 2;
        let centerY = canvas.height / 2 - height / 2;

        ctx.fillRect( centerX, centerY, width, height); 
    }
}

export default DrawCanvas;