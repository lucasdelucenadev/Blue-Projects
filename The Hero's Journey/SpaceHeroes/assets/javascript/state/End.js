define(['module/HUD'],function(HUD){
    let _game = null,
        _nextState = null;
    
    let _End = {
        create: function(){
            HUD.createTitle('  Game Over \n Press Spacebar');
                        
            //Starting the Play state after the spacebar is down
            _game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(function(){
                _game.state.start(_nextState);
            }); 
        }
    }
    
    return{
        init: function(game,nextState){
            _game = game;
            _nextState = nextState;
        },
        getEndState: function(){
            return (_End);
        }
    }
})