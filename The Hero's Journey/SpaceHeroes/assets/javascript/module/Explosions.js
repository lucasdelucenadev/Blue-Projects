define(function(){
    let _game = null;
    
    let _Exploisons = function(quantity,type){
        let _explosions = _game.add.group();
        _explosions.createMultiple(quantity,type);
        _explosions.forEach(setupExploisons,this);
        
        let _type = type;
        
        function setupExploisons(exploison){
            exploison.anchor.x = 0.5;
            exploison.anchor.y = 0.5;
            exploison.animations.add(type);
        }
        
        return{
            getExplosionGroup: function(){
                return _explosions;
            }
        }
        
    }
    
    return{
        init: function(game){
            _game = game;
        },
        preload: function(){
            _game.load.spritesheet('kaboom','assets/img/explode.png',128,128);
        },
        create: function(quantity,type){
            return( new _Exploisons(quantity,type));
        }
    }
});