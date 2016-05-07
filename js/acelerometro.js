var ac = {
    watchID: null,
    iniciar:function(){
       if(!ac.watchID){
           var options  = {frequency: 500};
           ac.watchID = navigator.accelerometro.watchAcceleration(ac.verDatos, ac.error,options);
        } 
    },
    detener: function(){
        if(ac.watchID != null){
            navigator.accelerometer.clearWatch(ac.watchID);
        }
        
    },
    error: function(err){
        alert(err.code);
        
    },
    verDatos: function(a){
        $('#acelerometro h2').html('x: ' + a.x + '<br>' + 'y: ' + a.y + '<br>' + 'z: ' + a.z);
        
    }
    
};