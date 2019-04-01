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

function grabar(){
  estaciones.where(function (estacion){
    if(estacion.Estacion == "LA DESPENSA"){
      estacion.Rutas = [{ruta:"G42",vagon:"1"},{ruta:"G43",vagon:"1"},{ruta:"G45",vagon:"2"},{ruta:"K42",vagon:"1"},{ruta:"K43",vagon:"1"}];
    }
    if(estacion.Estacion == "BOSA"){
      estacion.Rutas = [{ruta:"E44",vagon:"2"},{ruta:"G42",vagon:"2"},{ruta:"G44",vagon:"1"},{ruta:"G45",vagon:"1"},{ruta:"K42",vagon:"2"}];
    }
    if(estacion.Estacion == "LEON XIII"){
      estacion.Rutas = [{ruta:"G42",vagon:"2"},{ruta:"G43",vagon:"2"},{ruta:"G45",vagon:"1"},{ruta:"K42",vagon:"2"},{ruta:"K43",vagon:"2"}];
    }
    if(estacion.Estacion == "TERRERO-HOSPITAL CV"){
      estacion.Rutas = [{ruta:"E44",vagon:"2"},{ruta:"G42",vagon:"1"},{ruta:"G43",vagon:"1"},{ruta:"G44",vagon:"3"},{ruta:"G45",vagon:"3"},{ruta:"K42",vagon:"1"},{ruta:"K43",vagon:"1"}];
    }
    if(estacion.Estacion == "SAN MATEO"){
      estacion.Rutas = [{ruta:"E44",vagon:"2"},{ruta:"G42",vagon:"2"},{ruta:"G43",vagon:"3"},{ruta:"G44",vagon:"2"},{ruta:"G45",vagon:"2"},{ruta:"K42",vagon:"2"},{ruta:"K43",vagon:"3"}];
    }
    if(estacion.Estacion == "Quirigua"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"D21",vagon:"1"},{ruta:"H21",vagon:"1"}];
    }
    if(estacion.Estacion == "Carrera 90"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"B10",vagon:"1"},{ruta:"D10",vagon:"1"},{ruta:"D21",vagon:"1"},{ruta:"H21",vagon:"1"}];
    }
    if(estacion.Estacion == "Portal de la 80"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"B10",vagon:"1"},{ruta:"B55",vagon:"1"},{ruta:"D10",vagon:"1"},{ruta:"D20",vagon:"1"},{ruta:"D21",vagon:"1"},{ruta:"D22",vagon:"1"},{ruta:"D24",vagon:"1"},{ruta:"D50",vagon:"1"},{ruta:"D51",vagon:"1"},{ruta:"F62",vagon:"1"},{ruta:"G22",vagon:"1"},{ruta:"H20",vagon:"1"},{ruta:"H21",vagon:"1"},{ruta:"J24",vagon:"1"}];
    }
    if(estacion.Estacion == "Minuto de Dios"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"D21",vagon:"1"},{ruta:"D22",vagon:"1"},{ruta:"D50",vagon:"1"},{ruta:"D51",vagon:"1"},{ruta:"F62",vagon:"1"},{ruta:"G22",vagon:"1"},{ruta:"H21",vagon:"1"}];
    }
    if(estacion.Estacion == "Avenida Boyacá"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"D20",vagon:"1"},{ruta:"H20",vagon:"1"}];
    }
    if(estacion.Estacion == "Avenidad Ciudad de Cali"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"B10",vagon:"1"},{ruta:"D10",vagon:"1"},{ruta:"D20",vagon:"1"},{ruta:"D21",vagon:"1"},{ruta:"H20",vagon:"1"},{ruta:"H21",vagon:"1"}];
    }
    if(estacion.Estacion == "Granja - Carrera 77"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"B10",vagon:"3"},{ruta:"B55",vagon:"3"},{ruta:"D10",vagon:"3"},{ruta:"D20",vagon:"2"},{ruta:"D21",vagon:"1"},{ruta:"D22",vagon:"1"},{ruta:"D24",vagon:"1"},{ruta:"D50",vagon:"1"},{ruta:"D51",vagon:"1"},{ruta:"F62",vagon:"1"},{ruta:"G22",vagon:"1"},{ruta:"H20",vagon:"2"},{ruta:"H21",vagon:"1"},{ruta:"J24",vagon:"1"}];
    }
    if(estacion.Estacion == "Carrera 53"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"B10",vagon:"1"},{ruta:"D10",vagon:"1"}];
    }
    if(estacion.Estacion == "Av Chile"){
      estacion.Rutas = [{ruta:"4",vagon:"1"},{ruta:"7",vagon:"1"},{ruta:"B16",vagon:"1"},{ruta:"B28",vagon:"1"},{ruta:"B72",vagon:"1"},{ruta:"D22",vagon:"1"},{ruta:"E32",vagon:"1"},{ruta:"F28",vagon:"1"},{ruta:"F32",vagon:"1"},{ruta:"G22",vagon:"1"},{ruta:"H72",vagon:"1"},{ruta:"K16",vagon:"1"}];
    }
    if(estacion.Estacion == "NQS - Calle 75"){
      estacion.Rutas = [{ruta:"4",vagon:"1"},{ruta:"7",vagon:"1"},{ruta:"B12",vagon:"1"},{ruta:"C30",vagon:"2"},{ruta:"D22",vagon:"1"},{ruta:"E32",vagon:"2"},{ruta:"F32",vagon:"1"},{ruta:"G12",vagon:"2"},{ruta:"G22",vagon:"2"},{ruta:"G30",vagon:"1"}];
    }
    if(estacion.Estacion == "Carrera 47"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"B10",vagon:"1"},{ruta:"D10",vagon:"1"},{ruta:"D22",vagon:"1"},{ruta:"D81",vagon:"1"},{ruta:"G22",vagon:"1"},{ruta:"M81",vagon:"1"}];
    }
    if(estacion.Estacion == "Escuela Militar"){
      estacion.Rutas = [{ruta:"7",vagon:"1"},{ruta:"B50",vagon:"2"},{ruta:"C15",vagon:"1"},{ruta:"C50",vagon:"1"},{ruta:"H15",vagon:"2"}];
    }
    if(estacion.Estacion == "Calle 76"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"8",vagon:"1"},{ruta:"A52",vagon:"1"},{ruta:"A74",vagon:"3"},{ruta:"B27",vagon:"1"},{ruta:"B52",vagon:"3"},{ruta:"B74",vagon:"3"},{ruta:"B75",vagon:"3"},{ruta:"C15",vagon:"1"},{ruta:"C17",vagon:"1"},{ruta:"D21",vagon:"2"},{ruta:"D50",vagon:"2"},{ruta:"F62",vagon:"3"},{ruta:"G52",vagon:"1"},{ruta:"H15",vagon:"2"},{ruta:"H17",vagon:"1"},{ruta:"H21",vagon:"2"}];
    }
    if(estacion.Estacion == "Polo"){
      estacion.Rutas = [{ruta:"4",vagon:"1"},{ruta:"6",vagon:"1"},{ruta:"C17",vagon:"1"},{ruta:"D20",vagon:"1"},{ruta:"D24",vagon:"1"},{ruta:"H17",vagon:"1"},{ruta:"H20",vagon:"1"},{ruta:"J24",vagon:"1"}];
    }
    if(estacion.Estacion == "Héroes"){
      estacion.Rutas = [{ruta:"4",vagon:"1"},{ruta:"8",vagon:"1"},{ruta:"B11",vagon:"3"},{ruta:"B14",vagon:"1"},{ruta:"B50",vagon:"3"},{ruta:"B52",vagon:"2"},{ruta:"B55",vagon:"3"},{ruta:"B56",vagon:"2"},{ruta:"B71",vagon:"2"},{ruta:"B74",vagon:"2"},{ruta:"B75",vagon:"3"},{ruta:"C50",vagon:"3"},{ruta:"F14",vagon:"1"},{ruta:"G11",vagon:"3"},{ruta:"H75",vagon:"2"},{ruta:"J74",vagon:"1"}];
    }
    if(estacion.Estacion == "San Martín"){
      estacion.Rutas = [{ruta:"7",vagon:"1"},{ruta:"C17",vagon:"1"},{ruta:"C73",vagon:"1"},{ruta:"H17",vagon:"1"},{ruta:"J73",vagon:"1"}];
    }
    if(estacion.Estacion == "Rionegro"){
      estacion.Rutas = [{ruta:"7",vagon:"1"},{ruta:"B50",vagon:"2"},{ruta:"C15",vagon:"1"},{ruta:"C50",vagon:"1"},{ruta:"H15",vagon:"2"}];
    }
    if(estacion.Estacion == "La Castellana"){
      estacion.Rutas = [{ruta:"B12",vagon:"2"},{ruta:"B28",vagon:"1"},{ruta:"B72",vagon:"2"},{ruta:"F28",vagon:"2"},{ruta:"G12",vagon:"1"},{ruta:"H72",vagon:"2"}];
    }
    if(estacion.Estacion == "Calle 85"){
      estacion.Rutas = [{ruta:"8",vagon:"1"},{ruta:"B10",vagon:"2"},{ruta:"B11",vagon:"3"},{ruta:"B13",vagon:"1"},{ruta:"B14",vagon:"1"},{ruta:"B23",vagon:"1"},{ruta:"B27",vagon:"3"},{ruta:"B50",vagon:"1"},{ruta:"B71",vagon:"2"},{ruta:"C50",vagon:"3"},{ruta:"D10",vagon:"1"},{ruta:"F14",vagon:"2"},{ruta:"G11",vagon:"1"},{ruta:"H13",vagon:"3"},{ruta:"H27",vagon:"3"},{ruta:"K23",vagon:"1"}];
    }
    if(estacion.Estacion == "Virrey"){
      estacion.Rutas = [{ruta:"8",vagon:"1"},{ruta:"B10",vagon:"1"},{ruta:"B11",vagon:"2"},{ruta:"B18",vagon:"3"},{ruta:"B27",vagon:"1"},{ruta:"B50",vagon:"2"},{ruta:"B52",vagon:"2"},{ruta:"B71",vagon:"3"},{ruta:"B74",vagon:"3"},{ruta:"C50",vagon:"3"},{ruta:"D10",vagon:"1"},{ruta:"G11",vagon:"3"},{ruta:"H27",vagon:"2"},{ruta:"J74",vagon:"2"},{ruta:"L18",vagon:"2"}];
    }
    if(estacion.Estacion == "Las Ferias"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"D20",vagon:"1"},{ruta:"H20",vagon:"1"}];
    }
    if(estacion.Estacion == "Avenida 68"){
      estacion.Rutas = [{ruta:"6",vagon:"1"},{ruta:"D20",vagon:"1"},{ruta:"D24",vagon:"1"},{ruta:"D81",vagon:"1"},{ruta:"H20",vagon:"1"},{ruta:"J24",vagon:"1"},{ruta:"M81",vagon:"1"}];
    }
    if(estacion.Estacion == "Clinica Shaio"){
      estacion.Rutas = [{ruta:"7",vagon:"1"},{ruta:"B50",vagon:"2"},{ruta:"C17",vagon:"2"},{ruta:"C29",vagon:"1"},{ruta:"C30",vagon:"1"},{ruta:"C50",vagon:"2"},{ruta:"F29",vagon:"1"},{ruta:"G30",vagon:"1"},{ruta:"H17",vagon:"2"}];
    }
    if(estacion.Estacion == "Humedal Córdoba"){
      estacion.Rutas = [{ruta:"7",vagon:"1"},{ruta:"C15",vagon:"1"},{ruta:"H15",vagon:"1"}];
    }
    if(estacion.Estacion == "Niza - Calle 127"){
      estacion.Rutas = [{ruta:"7",vagon:"1"},{ruta:"C15",vagon:"1"},{ruta:"C73",vagon:"1"},{ruta:"H15",vagon:"2"},{ruta:"J73",vagon:"1"}];
    }
  });
}

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
});