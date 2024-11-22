const numDireccionesInput = document.getElementById("num_direcciones");
const btnAgregar = document.getElementById("btn_agregar");
const direccionesContainer = document.getElementById("direcciones_container");
const btnCalcular = document.getElementById("btn_calcular");
const resultadosDiv = document.getElementById("resultados");
const datosCSV = `Poblacion;Codigo postal;valor
Madrid;28000;0
Madrid;28001;0
Madrid;28002;0
Madrid;28003;0
Madrid;28004;0
Madrid;28005;0
Madrid;28006;0
Madrid;28007;0
Madrid;28008;0
Madrid;28009;0
Madrid;28010;0
Madrid;28011;12
Madrid;28012;0
Madrid;28013;0
Madrid;28014;0
Madrid;28015;0
Madrid;28016;0
Madrid;28017;14
Madrid;28018;12
Madrid;28019;8
Madrid;28020;0
Madrid;28021;24
Madrid;28022;26
Madrid;28023;22
Madrid;28024;22
Madrid;28025;12
Madrid;28026;10
Madrid;28027;16
Madrid;28028;0
Madrid;28029;0
Madrid;28030;16
Madrid;28031;28
Madrid;28032;22
Madrid;28033;20
Madrid;28034;22
Madrid;28035;20
Madrid;28036;0
Madrid;28037;16
Madrid;28038;12
Madrid;28039;0
Madrid;28040;0
Madrid;28041;16
Madrid;28042;30
Madrid;28043;18
Madrid;28044;18
Madrid;28045;0
Madrid;28046;0
Madrid;28047;12
Madrid;28048;32
Madrid;28049;34
Madrid;28050;26
Madrid;28051;30
Madrid;28052;34
Madrid;28053;18
Madrid;28054;18
Madrid;28055;30
Alcobendas;28100;46
Alcobendas;28108;34
Alcobendas;28109;40
Algete;28110;70
Algete;28120;66
Algete;28119;78
Valdeolmos-Alalpardo;28130;78
Fuente el Saz de Jarama;28140;70
Valdetorres de Jarama;28150;84
Talamanca de Jarama;28160;100
Valdepiélagos;28170;102
Torrelaguna;28180;114
El Atazar;28189;130
Patones;28189;124
Torremocha de Jarama;28189;120
Montejo de la Sierra;28190;182
Puebla de la Sierra;28190;214
La Hiruela;28191;202
Horcajuelo de la Sierra;28191;184
Prádena del Rincón;28191;178
El Berrueco;28192;130
Cervera de Buitrago;28193;162
Berzosa del Lozoya;28194;166
Robledillo de la Jara;28194;158
Puentes Viejas;28195;176
Puentes Viejas;28196;170
San Lorenzo de El Escorial;28200;102
Navalagamella;28210;78
Valdemorillo;28210;78
El Escorial;28211;98
El Escorial;28212;98
Navalagamella;28212;96
Colmenar del Arroyo;28213;112
Fresnedillas de la Oliva;28214;108
El Escorial;28219;98
Majadahonda;28220;48
Majadahonda;28221;38
Majadahonda;28222;50
Pozuelo de Alarcón;28223;28
Pozuelo de Alarcón;28224;26
Villanueva del Pardillo;28229;56
Las Rozas de Madrid;28231;44
Las Rozas de Madrid;28232;54
Hoyo de Manzanares;28240;76
Hoyo de Manzanares;28248;76
Galapagar;28250;66
Torrelodones;28250;66
Galapagar;28260;70
Colmenarejo;28270;76
Galapagar;28270;76
Colmenarejo;28279;78
El Escorial;28280;88
Las Rozas de Madrid;28290;56
El Escorial;28292;96
Galapagar;28292;76
Zarzalejo;28293;114
Robledo de Chavela;28294;118
Valdemaqueda;28295;130
Santa María de la Alameda;28296;146
Santa María de la Alameda;28297;124
Aranjuez;28300;98
Pinto;28320;50
San Martín de la Vega;28330;54
Valdemoro;28340;58
Ciempozuelos;28350;72
Titulcia;28359;80
Villaconejos;28360;98
Chinchón;28370;96
Colmenar de Oreja;28380;104
Belmonte de Tajo;28390;112
Valdelaguna;28391;102
Collado Villalba;28400;86
Galapagar;28400;76
Alpedrete;28409;94
Manzanares el Real;28410;102
Moralzarzal;28411;104
El Boalo;28412;98
El Boalo;28413;102
Galapagar;28420;76
Alpedrete;28430;94
Guadarrama;28430;94
Guadarrama;28440;104
Collado Mediano;28450;104
Los Molinos;28460;116
Cercedilla;28470;120
Manzanares el Real;28470;102
Guadarrama;28480;108
Becerril de la Sierra;28490;108
Navacerrada;28491;114
El Boalo;28492;102
Arganda del Rey;28500;56
Campo Real;28510;68
Valdilecha;28511;90
Villar del Olmo;28512;96
Nuevo Baztán;28514;90
Olmeda de las Fuentes;28515;108
Rivas-Vaciamadrid;28521;56
Rivas-Vaciamadrid;28522;40
Rivas-Vaciamadrid;28523;40
Rivas-Vaciamadrid;28524;38
Rivas-Vaciamadrid;28529;36
Morata de Tajuña;28530;72
Perales de Tajuña;28540;82
Tielmes;28550;96
Carabaña;28560;108
Orusco de Tajuña;28570;104
Ambite;28580;108
Villarejo de Salvanés;28590;104
Valdaracete;28594;120
Estremera;28595;142
Brea de Tajo;28596;132
Fuentidueña de Tajo;28597;126
Villamanrique de Tajo;28598;126
Navalcarnero;28600;72
El Álamo;28607;82
Sevilla la Nueva;28609;82
Villamantilla;28609;104
Villanueva de Perales;28609;92
Villamanta;28610;92
Aldea del Fresno;28620;110
Villa del Prado;28630;132
Móstoles;28635;34
Cadalso de los Vidrios;28640;162
Cadalso de los Vidrios;28648;174
Rozas de Puerto Real;28649;172
Cenicientos;28650;172
Boadilla del Monte;28660;36
Boadilla del Monte;28669;50
Villaviciosa de Odón;28670;48
San Martín de Valdeiglesias;28680;154
Brunete;28690;62
Villanueva de la Cañada;28691;66
Villanueva de la Cañada;28692;60
Quijorna;28693;76
Chapinería;28694;110
Navas del Rey;28695;120
Pelayos de la Presa;28696;142
San Sebastián de los Reyes;28700;46
San Sebastián de los Reyes;28701;50
San Sebastián de los Reyes;28702;46
San Sebastián de los Reyes;28703;44
San Sebastián de los Reyes;28706;58
Colmenar Viejo;28707;68
San Sebastián de los Reyes;28707;68
San Sebastián de los Reyes;28708;54
San Sebastián de los Reyes;28709;52
Bustarviejo;28720;116
Cabanillas de la Sierra;28721;116
Redueña;28721;116
El Vellón;28722;102
Pedrezuela;28723;94
Navalafuente;28729;112
Valdemanco;28729;128
Venturada;28729;110
Buitrago del Lozoya;28730;156
Braojos;28737;172
Gascones;28737;168
Piñuécar-Gandullas;28737;166
La Serna del Monte;28737;166
Garganta de los Montes;28739;158
Gargantilla del Lozoya y Pinilla de Buitrago;28739;160
Navarredonda y San Mamés;28739;166
Villavieja del Lozoya;28739;168
Rascafría;28740;150
Alameda del Valle;28742;152
Lozoya;28742;170
Canencia;28743;142
Garganta de los Montes;28743;158
Pinilla del Valle;28749;158
Rascafría;28749;154
Colmenar Viejo;28750;70
San Agustín del Guadalix;28750;74
San Lorenzo de El Escorial;28750;102
La Cabrera;28751;126
Lozoyuela-Navas-Sieteiglesias;28752;142
Lozoyuela-Navas-Sieteiglesias;28753;140
Lozoyuela-Navas-Sieteiglesias;28754;142
Puentes Viejas;28754;150
La Acebeda;28755;182
Horcajo de la Sierra-Aoslos;28755;182
Madarcos;28755;184
Robregordo;28755;186
Somosierra;28756;190
Tres Cantos;28760;50
Tres Cantos;28761;50
Colmenar Viejo;28770;70
Soto del Real;28791;92
Miraflores de la Sierra;28792;108
Guadalix de la Sierra;28794;102
Alcalá de Henares;28801;70
Alcalá de Henares;28802;64
Alcalá de Henares;28803;70
Alcalá de Henares;28804;82
Alcalá de Henares;28805;78
Alcalá de Henares;28806;70
El Álamo;28807;82
Alcalá de Henares;28807;68
Villalbilla;28810;86
Corpa;28811;90
Pezuela de las Torres;28812;106
Valverde de Alcalá;28812;82
Pozuelo del Rey;28813;76
Torres de la Alameda;28813;70
Daganzo de Arriba;28814;58
Fresno de Torote;28815;70
Ribatejada;28815;84
Camarma de Esteruelas;28816;76
Valdeavero;28816;82
Los Santos de la Humosa;28817;94
Anchuelo;28818;92
Santorcaz;28818;104
Coslada;28820;28
Coslada;28821;28
Coslada;28822;32
Coslada;28823;34
San Fernando de Henares;28830;40
Mejorada del Campo;28840;48
Torrejón de Ardoz;28850;52
Paracuellos de Jarama;28860;42
Paracuellos de Jarama;28861;46
Paracuellos de Jarama;28862;50
Cobeña;28863;58
Ajalvir;28864;52
Meco;28880;82
Loeches;28890;58
Velilla de San Antonio;28891;44
Getafe;28901;42
Getafe;28902;28
Getafe;28903;28
Getafe;28904;28
Getafe;28905;34
Getafe;28906;34
Getafe;28907;26
Getafe;28909;34
Leganés;28911;26
Leganés;28912;24
Leganés;28913;26
Leganés;28914;32
Leganés;28915;26
Leganés;28916;24
Leganés;28917;24
Leganés;28918;26
Leganés;28919;16
Alcorcón;28921;34
Alcorcón;28922;34
Alcorcón;28923;32
Alcorcón;28924;30
Alcorcón;28925;30
Móstoles;28931;44
Móstoles;28932;44
Móstoles;28933;44
Móstoles;28934;46
Móstoles;28935;56
Móstoles;28936;42
Móstoles;28937;42
Móstoles;28938;46
Arroyomolinos;28939;60
Batres;28939;74
Fuenlabrada;28941;38
Fuenlabrada;28942;42
Fuenlabrada;28943;40
Fuenlabrada;28944;42
Fuenlabrada;28945;36
Fuenlabrada;28946;42
Fuenlabrada;28947;40
Moraleja de Enmedio;28950;52
Navalagamella;28954;96
Humanes de Madrid;28970;48
Griñón;28971;56
Batres;28976;74
Casarrubuelos;28977;66
Cubas de la Sagra;28978;62
Serranillos del Valle;28979;62
Parla;28980;50
Parla;28981;54
Parla;28982;48
Parla;28983;50
Parla;28984;52
Torrejón de Velasco;28990;62
Torrejón de la Calzada;28991;54`;
btnAgregar.addEventListener("click", () => {
    const numDirecciones = numDireccionesInput.value;
    direccionesContainer.innerHTML = "";
    for (let i = 0; i < numDirecciones; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Código postal ${i + 1}`;
        input.classList.add("codigo_postal");
        direccionesContainer.appendChild(input);
    }
});

btnCalcular.addEventListener("click", () => {
    const codigosPostales = Array.from(document.querySelectorAll(".codigo_postal")).map(input => input.value);

    const data = procesarCSV(datosCSV); // Pasar los datosCSV directamente
    const resultado = calcularPresupuesto(codigosPostales, data);
    mostrarResultados(resultado);
});

function procesarCSV(csvData) {
    const lineas = csvData.split("\n");
    const data = {};
    const encabezados = lineas[0].split(";");
    for (let i = 1; i < lineas.length; i++) {
        const partes = lineas[i].split(";");
        if (partes.length === encabezados.length) {
            const codigoPostal = partes[encabezados.indexOf("Codigo postal")].trim();
            const valor = parseFloat(partes[encabezados.indexOf("valor")].trim());
            const poblacion = partes[encabezados.indexOf("Poblacion")].trim();
            data[codigoPostal] = { valor, poblacion };
        } else if (partes.length > 0) {
            console.error(`Error en la línea ${i + 1}: número incorrecto de campos`);
        }
    }
    return data;
}

function calcularPresupuesto(codigosPostales, data) {
    let total = 0;
    const resultado = [];
    for (const codigo of codigosPostales) {
        const item = data[codigo] || { valor: 0, poblacion: "" };
        total += item.valor;
        resultado.push({ codigo, valor: item.valor, poblacion: item.poblacion });
    }
    return { resultado, total };
}

function mostrarResultados(resultado) {
    let resultadoHtml = "<h2>Resultados:</h2>";
    resultado.resultado.forEach(item => {
        resultadoHtml += `<p>Código ${item.codigo}: ${item.poblacion} - Valor: ${item.valor}</p>`;
    });
    resultadoHtml += `<p>Total: ${resultado.total}</p>`;
    resultadosDiv.innerHTML = resultadoHtml;
}
