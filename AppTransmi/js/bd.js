var x;
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
      Nomest: item.estacion,
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

function imprimir(data) {
  
  document.getElementById(data).innerHTML = '';
  const panel = document.getElementById(data);
  const contenedor = document.createElement('div');
  contenedor.setAttribute('class', 'contenedor');
  panel.appendChild(contenedor);
  contenedor.innerHTML = '';
  
  estaciones.find({ 'Troncal': data }).forEach(item => {
  
    const btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn');
    
    btn.value = item.Estacion;
    contenedor.appendChild(btn);
    

  });

  if ($(".btn").click(
    function () {
      
      const contenedor2 = document.createElement('div');
      contenedor2.setAttribute('class', 'contenedor2');
      contenedor2.setAttribute('style', 'float:right')
      panel.appendChild(contenedor2);
      contenedor2.innerHTML='';
      $('.contenedor2').empty();
      
      $.each(MostrarRutas(this.value), function (index,value) {
        const btn2 = document.createElement('input');
        btn2.setAttribute('type', 'button');
        btn2.setAttribute('class','btn2');
        // this.value=$(this).val();
        // $(this).data('valestacion',$(this.Nomest));
        btn2.value = value.Ruta;
        // $(this).data('valestacion',$(this).val());
        contenedor2.appendChild(btn2);
        x=value.Nomest;
      });
      

      if ($(".btn2").click(function(){
        
        $('.contenedor2').empty();
        $('.contenedor').empty();

      const contenedor3 = document.createElement('div');
      contenedor3.setAttribute('class', 'contenedor3');
      panel.appendChild(contenedor3);
      contenedor3.innerHTML='';
      
      $.each(MostrarVagon(x,this.value), function (index,value) {
        const info = document.createElement('textarea');
        // btn3.setAttribute('style', 'readonly');
        info.setAttribute('class','info');
        info.value = value.Vagon;
        contenedor3.appendChild(info);
        $('contenedor3').css("float","left");
      });
  
    }));
        
    }

    
  ));

 
 
}

function MostrarRutas(dato) {
  var resultado = $.grep(rutas.data, function (value) {
    return value.Nomest == dato;
  });
  return resultado;
}
function Limpiar(){
  $(".data").empty();
  
}

function MostrarVagon(datoest,datorut){
  var resultado = $.grep(rutas.data, function (value) {
    return value.Nomest==datoest && value.Ruta== datorut;
  });
  
  return resultado;
}