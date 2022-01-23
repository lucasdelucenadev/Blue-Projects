define(['module/HUD'],function(HUD){
    let _game = null,
        _nextState = null,
        _activationKey = null;
    
    //Start State
    let _Start = {                    
        create: function(){
            //creating the titel screen
            HUD.createTitle(' Space Heroes \n Press Spacebar');
            
            //Seeting up the Physics for the game
            _game.physics.startSystem(Phaser.Physics.ARCADE); 
            
            //Starting the next state(Play) after the spacebar is down
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
        getStartState: function(){
            return(_Start);
        }

    }
})