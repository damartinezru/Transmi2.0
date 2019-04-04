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

//crea el html donde se van a pintar los datos
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

    if(data=='Autonorte'){
      $('.btn').css({'background':'#95B734','margin':'10px 5px 10px 5px','color':'white'});
      }else if(data=='Caracas'){
        $('.btn').css({'background':'#00398B','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='Calle 26'){
        $('.btn').css({'background':'#CAB07C','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='Calle 80'){
        $('.btn').css({'background':'#7B6CA7','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='Suba'){
        $('.btn').css({'background':'#EABF3B','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='Américas'){
        $('.btn').css({'background':'#BB0615','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='Eje Ambiental'){
        $('.btn').css({'background':'#D0A2AA','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='NQS Central'){
        $('.btn').css({'background':'#9C6C0C','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='NQS Sur'){
        $('.btn').css({'background':'#D88C00','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='Carrera 7'){
        $('.btn').css({'background':'#8A0079','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='Carrera 10'){
        $('.btn').css({'background':'#00949C','margin':'10px 5px 10px 5px','color':'white'});
      
      }else if(data=='Caracas Sur'){
        $('.btn').css({'background':'#D88C00','margin':'10px 5px 10px 5px','color':'white'});
      
      }
    

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
        btn2.value = value.Ruta;
        contenedor2.appendChild(btn2);
        $('.btn2').addClass("btn btn-outline-danger");
        $('.btn').css({'margin':'10px 5px 10px 5px'});
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
        info.setAttribute('class','info');
        info.setAttribute('cols','60' );
        info.setAttribute('rows','2');
        info.value = "Este bus para en el vagon:"+value.Vagon;
        contenedor3.appendChild(info);
        
        $('.contenedor3').css({'float':'left','width':'140px'});
        $('.info').css({'float':'left','background-color':'transparent','border':'none','font-family': ('Rubik', 'sans-serif'),'font-size': '40px','padding':'10%','color': '#C60000'});
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