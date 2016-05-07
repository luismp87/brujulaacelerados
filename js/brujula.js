var br = {
    watchID: null,
    iniciar:function(){
       if(!br.watchID){
           var options  = {frequency: 500};
           br.watchID = navigator.compass.watchHeading(br.verDatos, br.error,options);
        } 
    },
    detener: function(){
        if(br.watchID != null){
            navigator.compass.clearWatch(br.watchID);
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