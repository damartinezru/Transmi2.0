

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
        $("#title").html("Registro importados: " + data.result.records.length);
        var odin = estaciones.findOne({ Estacion:'BOSA' });
	      console.log(odin);
      });
     
