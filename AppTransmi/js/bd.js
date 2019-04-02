var db = new loki('trasmilenio.db', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});
var estaciones = db.addCollection('estaciones');
var rutas = db.addCollection("rutas");

function databaseInitialize() {
  if (!db.getCollection("estaciones")) {
    var estaciones = db.addCollection("estaciones");
    if (!db.getCollection("rutas")) {
      var rutas = db.addCollection("rutas");
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
        Rutas: []
      });
    });
    $("#title").html("Registro importados: " + data.result.records.length);
    console.log(estaciones.find());
    LeerJson();
  });

function LeerJson() {
  var RJ = JSON.parse(rutasJson);
  RJ.forEach(item => {
    rutas.insert({
      Ruta: item.ruta,
      Vagon: item.vagon,
      Nomest: item.nombreEstacion,
    })
  });
  console.log(rutas.find());
}

// function grabar() {
//   estaciones.where(function (estacion) {

//     estacion.find(Codigo==rutas.idEst).forEach(item=>{
//          item.Rutas=[(rutas.Ruta)];
//       });

//   });

// }

//crea el html donde se van a pintar los datos
function imprimir(data) {
  //
  document.getElementById(data).innerHTML = '';
  const panel = document.getElementById(data);
  const contenedor = document.createElement('div');
  contenedor.setAttribute('class', 'contenedor');
  panel.appendChild(contenedor);
  contenedor.innerHTML = '';
  estaciones.find({ 'Troncal': data }).forEach(item => {
    const uli = document.createElement('ul');
    uli.setAttribute('class', 'uli');
    
    const btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn');
    btn.value = item.Estacion;
    contenedor.appendChild(uli);
    uli.appendChild(btn);

  });


  if ($(".btn").click(
    function () {
      const contenedor2 = document.createElement('div');
      contenedor2.setAttribute('class', 'contenedor2');
      contenedor2.setAttribute('style', 'float:right')
      panel.appendChild(contenedor2);

      const uli2 = document.createElement('ul');
      uli2.setAttribute('class', 'uli2');
      
      
      $.each(MostrarRutas(this.value), function (index,value) {
        const btn2 = document.createElement('input');
        btn2.setAttribute('type', 'button');
        btn2.value = value.Ruta;
        contenedor2.appendChild(uli2);
        uli2.appendChild(btn2);
        
      });

    }
  ));

}

function MostrarRutas(dato) {
  var resultado = $.grep(rutas.data, function (value) {
    return value.Nomest == dato;
  });
  return resultado;

}



