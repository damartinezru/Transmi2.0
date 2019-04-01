

var db = new loki('trasmilenio.db', {
  autoload: true,
  autoloadCallback : databaseInitialize,
  autosave: true, 
  autosaveInterval: 4000
});
    var estaciones = db.addCollection('estaciones');
    var rutas =  db.addCollection("rutas");

function databaseInitialize() {
  if (!db.getCollection("estaciones")) {
    var estaciones =  db.addCollection("estaciones");
  if (!db.getCollection("rutas")) {
    var rutas =  db.addCollection("rutas");
  }
}
}


    $.ajax({
      method: "POST",
      data: '{"resource_id":"d0775af7-1706-4404-8bea-387194287d73","q":"","filters":{},"limit":1000,"offset":0}',
      url: "http://datosabiertos.bogota.gov.co/api/3/action/datastore_search",

    })
      .done(function (data) {

        data.result.records.forEach(item => {
          estaciones.insert({
            Estacion: item.Name,
            Troncal: item.Corredor,
            Codigo: item.Id,
            LatLon: { Lat: item.Latitud, Lon: item.Longitud },
            Rutas:[]
          });

        });

        // datosexcel.result.records.forEach(item => {
        //   rutas.insert({
        //     NombreRutas: item.Name,
        //     estacionRutas: item.Estacion,
        //   })
        // });
        
        // estaciones.where(function(item){
        //   if(item.Estacion==item.estacionRutas){
        //     item.Rutas=item.NombreRutas;
        //   }
        // })

            function VerWhere() {
      estaciones.where(function (estacion) {
        if(estacion.Estacion=="Universidad Nacional")
        {  
          estacion.Rutas = [
            { Ruta: "B12", Vagon:"2",Horario:"L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM"},
            { Ruta: "B28", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "C30", Vagon:"3",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "D22", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "E44", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "F28", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "G12", Vagon:"3",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "7", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B28", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "G30", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "G44", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "4", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "7", Vagon:"0",Horario:"L-V | 04:30 AM - 11:00 PM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            
            ];
        if(estacion.Estacion=="Campin"){
          estacion.Rutas=[
            { Ruta: "4", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "7", Vagon:"0",Horario:"L-V | 04:30 AM - 11:00 PM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "C30", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "G30", Vagon:"1",Horario:"L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM"},
            { Ruta: "G11", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B11", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            
          ]
        }
        if(estacion.Estacion=="Avenida 39"){
          estacion.Rutas=[
            { Ruta: "6", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "8", Vagon:"0",Horario:"L-V | 04:30 AM - 11:00 PM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B13", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H13", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B52", Vagon:"1",Horario:"L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM"},
            { Ruta: "B74", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "J74", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "C15", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H15", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "D21", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H21", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "D24", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "D51", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "F62", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H73", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "J24", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
          
          ]
        }
        if(estacion.Estacion=="Calle 45"){
          estacion.Rutas=[
            { Ruta: "6", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "8", Vagon:"0",Horario:"L-V | 04:30 AM - 11:00 PM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B14", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B18", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B23", Vagon:"1",Horario:"L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM"},
            { Ruta: "C19", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "D20", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "D50", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "D51", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "F14", Vagon:"3",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "F19", Vagon:"3",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "F62", Vagon:"3",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H15", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H20", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H73", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "K23", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "L18", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},

          ]
        }
        if(estacion.Estacion=="Marly"){
          estacion.Rutas=[
            { Ruta: "6", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "8", Vagon:"0",Horario:"L-V | 04:30 AM - 11:00 PM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B14", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B27", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "B75", Vagon:"1",Horario:"L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM"},
            { Ruta: "C15", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "C17", Vagon:"3",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "C19", Vagon:"0",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "D21", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "F14", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "F19", Vagon:"2",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H15", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H17", Vagon:"3",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H21", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H27", Vagon:"1",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},
            { Ruta: "H75", Vagon:"3",Horario:"L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM"},

          ]
        }
        }
        
      });
      }
         
        $("#title").html("Registro importados: " + data.result.records.length);
        var odin = estaciones.findOne({ Estacion:'BOSA' });
	      console.log(odin);
      });
     
