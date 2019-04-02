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
  });

function grabar() {
  estaciones.where(function (estacion) {
    if (estacion.Estacion == "LA DESPENSA") {
      estacion.Rutas = [{ ruta: "G42", vagon: "1" }, { ruta: "G43", vagon: "1" }, { ruta: "G45", vagon: "2" }, { ruta: "K42", vagon: "1" }, { ruta: "K43", vagon: "1" }];
    }
    if (estacion.Estacion == "BOSA") {
      estacion.Rutas = [{ ruta: "E44", vagon: "2" }, { ruta: "G42", vagon: "2" }, { ruta: "G44", vagon: "1" }, { ruta: "G45", vagon: "1" }, { ruta: "K42", vagon: "2" }];
    }
    if (estacion.Estacion == "LEON XIII") {
      estacion.Rutas = [{ ruta: "G42", vagon: "2" }, { ruta: "G43", vagon: "2" }, { ruta: "G45", vagon: "1" }, { ruta: "K42", vagon: "2" }, { ruta: "K43", vagon: "2" }];
    }
    if (estacion.Estacion == "TERRERO-HOSPITAL CV") {
      estacion.Rutas = [{ ruta: "E44", vagon: "2" }, { ruta: "G42", vagon: "1" }, { ruta: "G43", vagon: "1" }, { ruta: "G44", vagon: "3" }, { ruta: "G45", vagon: "3" }, { ruta: "K42", vagon: "1" }, { ruta: "K43", vagon: "1" }];
    }
    if (estacion.Estacion == "SAN MATEO") {
      estacion.Rutas = [{ ruta: "E44", vagon: "2" }, { ruta: "G42", vagon: "2" }, { ruta: "G43", vagon: "3" }, { ruta: "G44", vagon: "2" }, { ruta: "G45", vagon: "2" }, { ruta: "K42", vagon: "2" }, { ruta: "K43", vagon: "3" }];
    }
    if (estacion.Estacion == "Quirigua") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "D21", vagon: "1" }, { ruta: "H21", vagon: "1" }];
    }
    if (estacion.Estacion == "Carrera 90") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "B10", vagon: "1" }, { ruta: "D10", vagon: "1" }, { ruta: "D21", vagon: "1" }, { ruta: "H21", vagon: "1" }];
    }
    if (estacion.Estacion == "Portal de la 80") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "B10", vagon: "1" }, { ruta: "B55", vagon: "1" }, { ruta: "D10", vagon: "1" }, { ruta: "D20", vagon: "1" }, { ruta: "D21", vagon: "1" }, { ruta: "D22", vagon: "1" }, { ruta: "D24", vagon: "1" }, { ruta: "D50", vagon: "1" }, { ruta: "D51", vagon: "1" }, { ruta: "F62", vagon: "1" }, { ruta: "G22", vagon: "1" }, { ruta: "H20", vagon: "1" }, { ruta: "H21", vagon: "1" }, { ruta: "J24", vagon: "1" }];
    }
    if (estacion.Estacion == "Minuto de Dios") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "D21", vagon: "1" }, { ruta: "D22", vagon: "1" }, { ruta: "D50", vagon: "1" }, { ruta: "D51", vagon: "1" }, { ruta: "F62", vagon: "1" }, { ruta: "G22", vagon: "1" }, { ruta: "H21", vagon: "1" }];
    }
    if (estacion.Estacion == "Avenida Boyacá") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "D20", vagon: "1" }, { ruta: "H20", vagon: "1" }];
    }
    if (estacion.Estacion == "Avenidad Ciudad de Cali") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "B10", vagon: "1" }, { ruta: "D10", vagon: "1" }, { ruta: "D20", vagon: "1" }, { ruta: "D21", vagon: "1" }, { ruta: "H20", vagon: "1" }, { ruta: "H21", vagon: "1" }];
    }
    if (estacion.Estacion == "Granja - Carrera 77") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "B10", vagon: "3" }, { ruta: "B55", vagon: "3" }, { ruta: "D10", vagon: "3" }, { ruta: "D20", vagon: "2" }, { ruta: "D21", vagon: "1" }, { ruta: "D22", vagon: "1" }, { ruta: "D24", vagon: "1" }, { ruta: "D50", vagon: "1" }, { ruta: "D51", vagon: "1" }, { ruta: "F62", vagon: "1" }, { ruta: "G22", vagon: "1" }, { ruta: "H20", vagon: "2" }, { ruta: "H21", vagon: "1" }, { ruta: "J24", vagon: "1" }];
    }
    if (estacion.Estacion == "Carrera 53") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "B10", vagon: "1" }, { ruta: "D10", vagon: "1" }];
    }
    if (estacion.Estacion == "Av Chile") {
      estacion.Rutas = [{ ruta: "4", vagon: "1" }, { ruta: "7", vagon: "1" }, { ruta: "B16", vagon: "1" }, { ruta: "B28", vagon: "1" }, { ruta: "B72", vagon: "1" }, { ruta: "D22", vagon: "1" }, { ruta: "E32", vagon: "1" }, { ruta: "F28", vagon: "1" }, { ruta: "F32", vagon: "1" }, { ruta: "G22", vagon: "1" }, { ruta: "H72", vagon: "1" }, { ruta: "K16", vagon: "1" }];
    }
    if (estacion.Estacion == "NQS - Calle 75") {
      estacion.Rutas = [{ ruta: "4", vagon: "1" }, { ruta: "7", vagon: "1" }, { ruta: "B12", vagon: "1" }, { ruta: "C30", vagon: "2" }, { ruta: "D22", vagon: "1" }, { ruta: "E32", vagon: "2" }, { ruta: "F32", vagon: "1" }, { ruta: "G12", vagon: "2" }, { ruta: "G22", vagon: "2" }, { ruta: "G30", vagon: "1" }];
    }
    if (estacion.Estacion == "Carrera 47") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "B10", vagon: "1" }, { ruta: "D10", vagon: "1" }, { ruta: "D22", vagon: "1" }, { ruta: "D81", vagon: "1" }, { ruta: "G22", vagon: "1" }, { ruta: "M81", vagon: "1" }];
    }
    if (estacion.Estacion == "Escuela Militar") {
      estacion.Rutas = [{ ruta: "7", vagon: "1" }, { ruta: "B50", vagon: "2" }, { ruta: "C15", vagon: "1" }, { ruta: "C50", vagon: "1" }, { ruta: "H15", vagon: "2" }];
    }
    if (estacion.Estacion == "Calle 76") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "8", vagon: "1" }, { ruta: "A52", vagon: "1" }, { ruta: "A74", vagon: "3" }, { ruta: "B27", vagon: "1" }, { ruta: "B52", vagon: "3" }, { ruta: "B74", vagon: "3" }, { ruta: "B75", vagon: "3" }, { ruta: "C15", vagon: "1" }, { ruta: "C17", vagon: "1" }, { ruta: "D21", vagon: "2" }, { ruta: "D50", vagon: "2" }, { ruta: "F62", vagon: "3" }, { ruta: "G52", vagon: "1" }, { ruta: "H15", vagon: "2" }, { ruta: "H17", vagon: "1" }, { ruta: "H21", vagon: "2" }];
    }
    if (estacion.Estacion == "Polo") {
      estacion.Rutas = [{ ruta: "4", vagon: "1" }, { ruta: "6", vagon: "1" }, { ruta: "C17", vagon: "1" }, { ruta: "D20", vagon: "1" }, { ruta: "D24", vagon: "1" }, { ruta: "H17", vagon: "1" }, { ruta: "H20", vagon: "1" }, { ruta: "J24", vagon: "1" }];
    }
    if (estacion.Estacion == "Héroes") {
      estacion.Rutas = [{ ruta: "4", vagon: "1" }, { ruta: "8", vagon: "1" }, { ruta: "B11", vagon: "3" }, { ruta: "B14", vagon: "1" }, { ruta: "B50", vagon: "3" }, { ruta: "B52", vagon: "2" }, { ruta: "B55", vagon: "3" }, { ruta: "B56", vagon: "2" }, { ruta: "B71", vagon: "2" }, { ruta: "B74", vagon: "2" }, { ruta: "B75", vagon: "3" }, { ruta: "C50", vagon: "3" }, { ruta: "F14", vagon: "1" }, { ruta: "G11", vagon: "3" }, { ruta: "H75", vagon: "2" }, { ruta: "J74", vagon: "1" }];
    }
    if (estacion.Estacion == "San Martín") {
      estacion.Rutas = [{ ruta: "7", vagon: "1" }, { ruta: "C17", vagon: "1" }, { ruta: "C73", vagon: "1" }, { ruta: "H17", vagon: "1" }, { ruta: "J73", vagon: "1" }];
    }
    if (estacion.Estacion == "Rionegro") {
      estacion.Rutas = [{ ruta: "7", vagon: "1" }, { ruta: "B50", vagon: "2" }, { ruta: "C15", vagon: "1" }, { ruta: "C50", vagon: "1" }, { ruta: "H15", vagon: "2" }];
    }
    if (estacion.Estacion == "La Castellana") {
      estacion.Rutas = [{ ruta: "B12", vagon: "2" }, { ruta: "B28", vagon: "1" }, { ruta: "B72", vagon: "2" }, { ruta: "F28", vagon: "2" }, { ruta: "G12", vagon: "1" }, { ruta: "H72", vagon: "2" }];
    }
    if (estacion.Estacion == "Calle 85") {
      estacion.Rutas = [{ ruta: "8", vagon: "1" }, { ruta: "B10", vagon: "2" }, { ruta: "B11", vagon: "3" }, { ruta: "B13", vagon: "1" }, { ruta: "B14", vagon: "1" }, { ruta: "B23", vagon: "1" }, { ruta: "B27", vagon: "3" }, { ruta: "B50", vagon: "1" }, { ruta: "B71", vagon: "2" }, { ruta: "C50", vagon: "3" }, { ruta: "D10", vagon: "1" }, { ruta: "F14", vagon: "2" }, { ruta: "G11", vagon: "1" }, { ruta: "H13", vagon: "3" }, { ruta: "H27", vagon: "3" }, { ruta: "K23", vagon: "1" }];
    }
    if (estacion.Estacion == "Virrey") {
      estacion.Rutas = [{ ruta: "8", vagon: "1" }, { ruta: "B10", vagon: "1" }, { ruta: "B11", vagon: "2" }, { ruta: "B18", vagon: "3" }, { ruta: "B27", vagon: "1" }, { ruta: "B50", vagon: "2" }, { ruta: "B52", vagon: "2" }, { ruta: "B71", vagon: "3" }, { ruta: "B74", vagon: "3" }, { ruta: "C50", vagon: "3" }, { ruta: "D10", vagon: "1" }, { ruta: "G11", vagon: "3" }, { ruta: "H27", vagon: "2" }, { ruta: "J74", vagon: "2" }, { ruta: "L18", vagon: "2" }];
    }
    if (estacion.Estacion == "Las Ferias") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "D20", vagon: "1" }, { ruta: "H20", vagon: "1" }];
    }
    if (estacion.Estacion == "Avenida 68") {
      estacion.Rutas = [{ ruta: "6", vagon: "1" }, { ruta: "D20", vagon: "1" }, { ruta: "D24", vagon: "1" }, { ruta: "D81", vagon: "1" }, { ruta: "H20", vagon: "1" }, { ruta: "J24", vagon: "1" }, { ruta: "M81", vagon: "1" }];
    }
    if (estacion.Estacion == "Clinica Shaio") {
      estacion.Rutas = [{ ruta: "7", vagon: "1" }, { ruta: "B50", vagon: "2" }, { ruta: "C17", vagon: "2" }, { ruta: "C29", vagon: "1" }, { ruta: "C30", vagon: "1" }, { ruta: "C50", vagon: "2" }, { ruta: "F29", vagon: "1" }, { ruta: "G30", vagon: "1" }, { ruta: "H17", vagon: "2" }];
    }
    if (estacion.Estacion == "Humedal Córdoba") {
      estacion.Rutas = [{ ruta: "7", vagon: "1" }, { ruta: "C15", vagon: "1" }, { ruta: "H15", vagon: "1" }];
    }
    if (estacion.Estacion == "Niza - Calle 127") {
      estacion.Rutas = [{ ruta: "7", vagon: "1" }, { ruta: "C15", vagon: "1" }, { ruta: "C73", vagon: "1" }, { ruta: "H15", vagon: "2" }, { ruta: "J73", vagon: "1" }];
    }
    if (estacion.Estacion == "Suba - Calle 100") {
      estacion.Rutas = [{ Ruta: "7", sentido: "Ricaurte - Portal Suba", Vagon: "1", Horario: "LV:4:30AM-11PM S:5AM-11PM D-F:5:30AM-10PM" },
      { Ruta: "7", sentido: " Portal Suba - Ricaurte", vagon: "1", Horario: "LV:4:30AM-11PM S:5AM-11PM D-F:5:30AM-10PM" },
      { Ruta: "C19", vagon: "0", Horario: "L-D | 05:30 AM - 10:00 PM" },
      { Ruta: "C29", vagon: "0", Horario: "L-V | 05:30 AM - 08:30 AM L-V | 04:30 PM - 08:00 PM" },
      { Ruta: "C84", vagon: "0", Horario: "L-S | 05:00 AM - 11:00 PM D-F | 06:00 AM - 10:00 PM" },
      { Ruta: "F19", vagon: "2", Horario: "L-D | 05:30 AM - 10:00 PM" },
      { Ruta: "F29", vagon: "2", Horario: "L-V | 05:30 AM - 08:30 AM L-V | 04:30 PM - 08:00 PM" },
      { Ruta: "M84", vagon: "0", Horario: "L-S | 05:00 AM - 11:00 PM D-F | 06:00 AM - 10:00 PM" }
      ];
    }
    if (estacion.Estacion == "Suba - Calle 95") {
      estacion.Rutas = [{ Ruta: "7", sentido: "Ricaurte - Portal Suba", Vagon: "1", Horario: "LV:4:30AM-11PM S:5AM-11PM D-F:5:30AM-10PM" },
      { Ruta: "7", sentido: " Portal Suba - Ricaurte", vagon: "1", Horario: "LV:4:30AM-11PM S:5AM-11PM D-F:5:30AM-10PM" },
      { Ruta: "C19", vagon: "2", Horario: "L-D | 05:30 AM - 10:00 PM" },
      { Ruta: "C30", vagon: "1", Horario: "L-V | 05:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 05:00 AM - 03:00 PM" },
      { Ruta: "C84", vagon: "0", Horario: "L-S | 05:00 AM - 11:00 PM D-F | 06:00 AM - 10:00 PM" },
      { Ruta: "F19", vagon: "1", Horario: "L-D | 05:30 AM - 10:00 PM" },
      { Ruta: "G30", vagon: "2", Horario: "L-V | 05:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 05:00 AM - 03:00 PM" },
      ];
    }
    if (estacion.Estacion == "Puentelargo") {
      estacion.Rutas = [
        { Ruta: "7", sentido: "Ricaurte - Portal Suba", Vagon: "1", Horario: "LV:4:30AM-11PM S:5AM-11PM D-F:5:30AM-10PM" },
        { Ruta: "7", sentido: " Portal Suba - Ricaurte", vagon: "1", Horario: "LV:4:30AM-11PM S:5AM-11PM D-F:5:30AM-10PM" },
        { Ruta: "C15", vagon: "0", Horario: "L-S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "C17", vagon: "2", Horario: "L-V | 05:00 AM - 08:00 PM S | 05:00 AM - 08:00 PM" },
        { Ruta: "C19", vagon: "0", Horario: "L-D | 05:30 AM - 10:00 PM" },
        { Ruta: "C29", vagon: "0", Horario: "L-V | 05:30 AM - 08:30 AM L-V | 04:30 PM - 08:00 PM" },
        { Ruta: "C30", vagon: "1", Horario: "L-V | 05:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 05:00 AM - 03:00 PM" },
        { Ruta: "C73", vagon: "2", Horario: "L-V | 04:00 PM - 10:30 PM" },
        { Ruta: "F19", vagon: "1", Horario: "L-D | 05:30 AM - 10:00 PM" },
        { Ruta: "F29", vagon: "2", Horario: "L-V | 05:30 AM - 08:30 AM L-V | 04:30 PM - 08:00 PM" },
        { Ruta: "G30", vagon: "1", Horario: "L-V | 05:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 05:00 AM - 03:00 PM" },
        { Ruta: "H15", vagon: "2", Horario: "L-S | 05:30 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "H17", vagon: "2", Horario: "L-V | 05:00 AM - 08:00 PM S | 05:00 AM - 08:00 PM" },
        { Ruta: "J73", vagon: "1", Horario: "L-V | 04:00 PM - 10:30 PM" },
      ];
    }
    if (estacion.Estacion == "Calle 100") {
      estacion.Rutas = [{ Ruta: "8", sentido: "Terminal - Guatoque Veraguas", Vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
      { Ruta: "8", sentido: "Terminal - Guatoque Veraguas ", vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
      { Ruta: "B10", vagon: "2", Horario: "L-V | 05:00 AM - 09:30 PM S | 05:30 AM - 09:30 PM D-F | 06:30 AM - 08:00 PM" },
      { Ruta: "B12", vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM" },
      { Ruta: "B13", vagon: "1", Horario: "L-V | 05:00 AM - 10:00 PM S | 05:30 AM - 09:30 PM" },
      { Ruta: "B14", vagon: "3", Horario: "L-V | 04:30 AM - 09:30 PM S | 05:00 AM - 09:30 PM D-F | 05:00 AM - 10:00 PM" },
      { Ruta: "B50", vagon: "2", Horario: "L-V | 06:00 AM - 08:30 AM L-V | 05:00 PM - 07:30 PM" },
      { Ruta: "B71", vagon: "3", Horario: "L-V | 05:30 AM - 08:30 AM S | 05:30 AM - 09:00 AM" },
      { Ruta: "B74", vagon: "3", Horario: "L-S | 09:00 AM - 04:00 PM L-V | 04:00 PM - 10:30 PM S | 07:00 AM - 09:00 AM S | 04:00 PM - 08:30 PM" },
      { Ruta: "B75", vagon: "2", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
      { Ruta: "C50", vagon: "2", Horario: "L-V | 06:00 AM - 08:30 AM L-V | 05:00 PM - 07:30 PM" },
      { Ruta: "D10", vagon: "3", Horario: "L-V | 05:00 AM - 09:30 PM S | 05:30 AM - 09:30 PM D-F | 06:30 AM - 08:00 PM" },
      { Ruta: "F14", vagon: "3", Horario: "L-V | 04:30 AM - 09:30 PM S | 05:00 AM - 09:30 PM D-F | 05:00 AM - 10:00 PM" },
      { Ruta: "G12", vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM" },
      { Ruta: "H13", vagon: "2", Horario: "L-V | 05:00 AM - 10:00 PM S | 05:30 AM - 09:30 PM" },
      { Ruta: "H75", vagon: "2", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
      { Ruta: "J74", vagon: "3", Horario: "L-S | 09:00 AM - 04:00 PM L-V | 04:00 PM - 10:30 PM S | 07:00 AM - 09:00 AM S | 04:00 PM - 08:30 PM" },
      ];
    }
    if (estacion.Estacion == "Calle 106") {
      estacion.Rutas = [{ Ruta: "8", sentido: "Terminal - Guatoque Veraguas", Vagon: "2", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
      { Ruta: "8", sentido: "Terminal - Guatoque Veraguas ", vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
      { Ruta: "B10", vagon: "1", Horario: "L-V | 05:00 AM - 09:30 PM S | 05:30 AM - 09:30 PM D-F | 06:30 AM - 08:00 PM" },
      { Ruta: "B11", vagon: "2", Horario: "L-V | 05:30 AM - 09:00 PM S | 06:00 AM - 09:30 PM" },
      { Ruta: "B13", vagon: "1", Horario: "L-V | 05:00 AM - 10:00 PM S | 05:30 AM - 09:30 PM" },
      { Ruta: "B28", vagon: "2", Horario: "L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM" },
      { Ruta: "D10", vagon: "2", Horario: "L-V | 05:00 AM - 09:30 PM S | 05:30 AM - 09:30 PM D-F | 06:30 AM - 08:00 PM" },
      { Ruta: "F28", vagon: "1", Horario: "L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM" },
      { Ruta: "G11", vagon: "1", Horario: "L-V | 05:30 AM - 09:00 PM S | 06:00 AM - 09:30 PM" },
      { Ruta: "H13", vagon: "2", Horario: "L-V | 05:30 AM - 10:00 PM S | 06:30 AM - 10:00 PM" },
      ];
    }
    if (estacion.Estacion == "Pepe Sierra") {
      estacion.Rutas = [
        { Ruta: "8", sentido: "Terminal - Guatoque Veraguas", Vagon: "2", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "8", sentido: "Terminal - Guatoque Veraguas ", vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "B10", vagon: "1", Horario: "L-V | 05:00 AM - 09:30 PM S | 05:30 AM - 09:30 PM D-F | 06:30 AM - 08:00 PM" },
        { Ruta: "B11", vagon: "2", Horario: "L-V | 05:30 AM - 09:00 PM S | 06:00 AM - 09:30 PM" },
        { Ruta: "B16", vagon: "1", Horario: "L-V | 05:30 AM - 10:30 PM S | 05:30 AM - 10:00 PM" },
        { Ruta: "B18", vagon: "1", Horario: "L-V | 04:30 AM - 10:00 PM S | 05:00 AM - 09:30 PM" },
        { Ruta: "B28", vagon: "2", Horario: "L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM" },
        { Ruta: "B71", vagon: "3", Horario: "L-V | 05:30 AM - 08:30 AM S | 05:30 AM - 09:00 AM" },
        { Ruta: "B72", vagon: "2", Horario: "L-S | 05:30 AM - 11:00 PM" },
        { Ruta: "D10", vagon: "1", Horario: "L-V | 05:00 AM - 09:30 PM S | 05:30 AM - 09:30 PM D-F | 06:30 AM - 08:00 PM" },
        { Ruta: "F28", vagon: "2", Horario: "L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM" },
        { Ruta: "G11", vagon: "1", Horario: "L-V | 05:30 AM - 09:00 PM S | 06:00 AM - 09:30 PM" },
        { Ruta: "H51", vagon: "2", Horario: "L-V | 06:00 AM - 09:00 AM" },
        { Ruta: "H72", vagon: "2", Horario: "L-S | 05:30 AM - 11:00 PM" },
        { Ruta: "K16", vagon: "2", Horario: "L-V | 05:30 AM - 10:30 PM S | 05:30 AM - 10:00 PM" },
        { Ruta: "L18", vagon: "2", Horario: "L-V | 04:30 AM - 10:00 PM S | 05:00 AM - 09:30 PM" },
      ];
    }
    if (estacion.Estacion == "Calle 127") {
      estacion.Rutas = [
        { Ruta: "8", sentido: "Terminal - Guatoque Veraguas", Vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "8", sentido: "Terminal - Guatoque Veraguas ", vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "B10", vagon: "1", Horario: "L-V | 05:00 AM - 09:30 PM S | 05:30 AM - 09:30 PM D-F | 06:30 AM - 08:00 PM" },
        { Ruta: "B11", vagon: "2", Horario: "L-V | 05:30 AM - 09:00 PM S | 06:00 AM - 09:30 PM" },
        { Ruta: "B16", vagon: "1", Horario: "L-V | 05:30 AM - 10:30 PM S | 05:30 AM - 10:00 PM" },
        { Ruta: "B18", vagon: "1", Horario: "L-V | 04:30 AM - 10:00 PM S | 05:00 AM - 09:30 PM" },
        { Ruta: "B28", vagon: "2", Horario: "L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM" },
        { Ruta: "B72", vagon: "2", Horario: "L-S | 05:30 AM - 11:00 PM" },
        { Ruta: "D10", vagon: "1", Horario: "L-V | 05:00 AM - 09:30 PM S | 05:30 AM - 09:30 PM D-F | 06:30 AM - 08:00 PM" },
        { Ruta: "F28", vagon: "2", Horario: "L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM" },
        { Ruta: "G11", vagon: "1", Horario: "L-V | 05:30 AM - 09:00 PM S | 06:00 AM - 09:30 PM" },
        { Ruta: "H51", vagon: "2", Horario: "L-V | 06:00 AM - 09:00 AM" },
        { Ruta: "H72", vagon: "2", Horario: "L-S | 05:30 AM - 11:00 PM" },
        { Ruta: "K16", vagon: "2", Horario: "L-V | 05:30 AM - 10:30 PM S | 05:30 AM - 10:00 PM" },
        { Ruta: "L18", vagon: "2", Horario: "L-V | 04:30 AM - 10:00 PM S | 05:00 AM - 09:30 PM" },
      ];
    }
    if (estacion.Estacion == "Prado Veraniego") {
      estacion.Rutas = [
        { Ruta: "8", sentido: "Terminal - Guatoque Veraguas", Vagon: "2", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "8", sentido: "Terminal - Guatoque Veraguas ", vagon: "2", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "A74", vagon: "1", Horario: "L-V | 06:00 AM - 08:30 AM" },
        { Ruta: "B12", vagon: "3", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM" },
        { Ruta: "B23", vagon: "3", Horario: "L-V | 05:00 AM - 10:00 PM S | 05:30 AM - 10:00 PM" },
        { Ruta: "B28", vagon: "1", Horario: "L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM" },
        { Ruta: "B71", vagon: "3", Horario: "L-V | 05:30 AM - 08:30 AM S | 05:30 AM - 09:00 AM" },
        { Ruta: "B74", vagon: "3", Horario: "L-S | 09:00 AM - 04:00 PM L-V | 04:00 PM - 10:30 PM S | 07:00 AM - 09:00 AM S | 04:00 PM - 08:30 PM" },
        { Ruta: "B75", vagon: "2", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "F28", vagon: "2", Horario: "L-V | 04:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 04:30 AM - 09:00 AM" },
        { Ruta: "G12", vagon: "3", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:00 AM - 10:00 PM" },
        { Ruta: "H75", vagon: "1", Horario: "L-V | 04:30 AM - 11:00 PM S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "J70", vagon: "2", Horario: "L-V | 05:30 AM - 09:00 AM" },
        { Ruta: "J74", vagon: "2", Horario: "L-S | 09:00 AM - 04:00 PM L-V | 04:00 PM - 10:30 PM S | 07:00 AM - 09:00 AM S | 04:00 PM - 08:30 PM" },
        { Ruta: "K23", vagon: "3", Horario: "L-V | 05:00 AM - 10:00 PM S | 05:30 AM - 10:00 PM" },
      ];
    }
    if (estacion.Estacion == "Portal de Suba") {
      estacion.Rutas = [
        { Ruta: "7", sentido: "Ricaurte - Portal Suba", Vagon: "0", Horario: "LV:4:30AM-11PM S:5AM-11PM D-F:5:30AM-10PM" },
        { Ruta: "7", sentido: " Portal Suba - Ricaurte", vagon: "0", Horario: "LV:4:30AM-11PM S:5AM-11PM D-F:5:30AM-10PM" },
        { Ruta: "B50", vagon: "0", Horario: "L-V | 06:00 AM - 08:30 AM L-V | 05:00 PM - 07:30 PM" },
        { Ruta: "B56", vagon: "0", Horario: "L-V | 06:00 AM - 08:00 AM" },
        { Ruta: "C15", vagon: "0", Horario: "L-S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "C17", vagon: "0", Horario: "L-V | 05:00 AM - 08:00 PM S | 05:00 AM - 08:00 PM" },
        { Ruta: "C19", vagon: "0", Horario: "L-D | 05:30 AM - 10:00 PM" },
        { Ruta: "C29", vagon: "0", Horario: "L-V | 05:30 AM - 08:30 AM L-V | 04:30 PM - 08:00 PM" },
        { Ruta: "C30", vagon: "0", Horario: "L-V | 05:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 05:00 AM - 03:00 PM" },
        { Ruta: "C50", vagon: "0", Horario: "L-V | 06:00 AM - 08:30 AM L-V | 05:00 PM - 07:30 PM" },
        { Ruta: "C73", vagon: "0", Horario: "L-V | 04:00 PM - 10:30 PM" },
        { Ruta: "F19", vagon: "0", Horario: "L-D | 05:30 AM - 10:00 PM" },
        { Ruta: "F29", vagon: "0", Horario: "L-V | 05:30 AM - 08:30 AM L-V | 04:30 PM - 08:00 PM" },
        { Ruta: "G30", vagon: "0", Horario: "L-V | 05:00 AM - 09:00 AM L-V | 04:00 PM - 08:00 PM S | 05:00 AM - 03:00 PM" },
        { Ruta: "H15", vagon: "0", Horario: "L-S | 05:00 AM - 11:00 PM D-F | 05:30 AM - 10:00 PM" },
        { Ruta: "H17", vagon: "0", Horario: "L-V | 05:00 AM - 08:00 PM S | 05:00 AM - 08:00 PM" },
        { Ruta: "J73", vagon: "0", Horario: "L-V | 05:30 AM - 09:00 AM" },

      ];
    }
  });

  
}


function imprimir(data){
  document.getElementById(data).innerHTML='';
  const panel=document.getElementById(data);
  const contenedor=document.createElement('div');
  contenedor.setAttribute('class','contenedor');
  panel.appendChild(contenedor);
  contenedor.innerHTML='';
  estaciones.find({'Troncal':data}).forEach(item=>
  { const uli=document.createElement('ul');
    uli.setAttribute('class','uli');
    const li=document.createElement('li');
    const btn=document.createElement('input');
    btn.setAttribute('type','button');
    btn.setAttribute('class','btn');
    li.textContent=item.Estacion;
    btn.value=item.Estacion;
    contenedor.appendChild(uli);
    uli.appendChild(btn);
    
     if($(".btn").click(
     function(){
      const contenedor2=document.createElement('div');
      contenedor2.setAttribute('class','contenedor2');
      contenedor2.setAttribute('style','float:right')
      panel.appendChild(contenedor2);
      estaciones.find({'Estacion':btn.value}).forEach(item=>
      {  
         const uli2=document.createElement('ul');
         uli2.setAttribute('class','uli2');
         const btn2=document.createElement('input');
         btn2.setAttribute('type','button');
         btn2.value=item.Rutas; //aqui se pasar la coleccion de rutas
         contenedor2.appendChild(uli2);
         uli2.appendChild(btn2);
         
      });
    }
    ));

  });

 
  
  
}
