var br = {
    watchID: null,
    iniciar:function(){
       if(!br.watchID){
           var options  = {frequency: 500};
           ac.watchID = navigator.compass.watchHeading(ac.verDatos, ac.error,options);
        } 
    },
    detener: function(){
        if(ac.watchID != null){
            navigator.compass.clearWatch(ac.watchID);
            br.watchID = null;
            $('#brujula h2').html('Detenido');
        }
        
    },
    error: function(err){
        alert(err.code);
        
    },
    verDatos: function(h){
        $('#brujula h2').html(h.magneticHeading));
        
    }
    
};