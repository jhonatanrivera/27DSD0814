(function($, window, document)
{
	$(function() 
	{
		/*
		 * Deshabilitar autosubmit con el enter
		 */
		$(window).keydown(function(event){

			if(event.keyCode == 13) {
				event.preventDefault();
				return false;
			}

		});


		$(document).on("keyup",'input,select,textarea',function(e){
								var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
								var inputs = $(this).closest('form').find(":input:not(:disabled,:hidden,[readonly='readonly'])");
								if(key == 13) {
									inputs.eq( inputs.index(this)+1).focus(); 
								}
								else if (key == 27) {
									inputs.eq( inputs.index(this)-1).focus(); 
								}
								if($(this).attr('id') != 'S1_A_1') { $(this).trigger('change')};
							}
		);
		
		$(document).on("keyup",'.btn-primary,.btn-warning',function(e) {    
			var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
			if(key == 13)
			$(this).trigger('click');
		});

		// $(document).on("keyup",'.change',function(e) {
		// 	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
		// 	if(key == 13)
		// 	$(this).trigger('change');
		// });

	});

}(window.jQuery, window, document));




/********************************************************************************************
*********************************************************************************************
* 							VARIABLES GLOBALES
*
*********************************************************************************************
*********************************************************************************************/



	var cbo1 = '<option value="">Seleccione</option>';
	cbo1 += '<option value="C.S Villa Leticia de Cajamarquilla">C.S Villa Leticia de Cajamarquilla</option>';
	cbo1 += '<option value="P.S Casa Huerta La Campiña">P.S Casa Huerta La Campiña</option>';
	cbo1 += '<option value="P.S Villa Mercedes">P.S Villa Mercedes</option>';
	cbo1 += '<option value="C.S CLAS Nieveria del Paraíso">C.S CLAS Nieveria del Paraíso</option>';
	cbo1 += '<option value="P.S Viña San Francisco">P.S Viña San Francisco</option>';
	cbo1 += '<option value="C.S Cooperativa Universal">C.S Cooperativa Universal</option>';
	cbo1 += '<option value="P.S Santa Anita">P.S Santa Anita</option>';
	cbo1 += '<option value="C.S Fortaleza">C.S Fortaleza</option>';
	cbo1 += '<option value="P.S CLAS de Ate">P.S CLAS de Ate</option>';
	cbo1 += '<option value="C.S Alfa y Omega">C.S Alfa y Omega</option>';
	cbo1 += '<option value="C.S Huachipa">C.S Huachipa</option>';
	cbo1 += '<option value="P.S San Antonio">P.S San Antonio</option>';
	cbo1 += '<option value="C.S Playa Rímac">C.S Playa Rímac</option>';
	cbo1 += '<option value="C.S Chacra Colorada">C.S Chacra Colorada</option>';
	cbo1 += '<option value="C.S Chanca-Andahuaylas">C.S Chanca-Andahuaylas</option>';
	cbo1 += '<option value="C.S Micaela Bastidas">C.S Micaela Bastidas</option>';
	cbo1 += '<option value="C.S CLAS Carapongo">C.S CLAS Carapongo</option>';
	cbo1 += '<option value="C.S Santa Clara">C.S Santa Clara</option>';
	cbo1 += '<option value="C.S Nocheto">C.S Nocheto</option>';
	cbo1 += '<option value="C.S Atalaya">C.S Atalaya</option>';
	cbo1 += '<option value="C.S Manylsa">C.S Manylsa</option>';


	var cbo2 = '<option value="">Seleccione</option>';
	cbo2 += '<option value="Hospital de Vitarte ">Hospital de Vitarte </option>';
	cbo2 += '<option value="Hospital Hermilio Valdizan ">Hospital Hermilio Valdizan </option>';
	cbo2 += '<option value="Instituto Nacional Materno Perinatal- Maternidad de Lima ">Instituto Nacional Materno Perinatal- Maternidad de Lima </option>';
	cbo2 += '<option value="Instituto Nacional de Salud del Niño ">Instituto Nacional de Salud del Niño </option>';
	cbo2 += '<option value="Policlínico Chosica ">Policlínico Chosica </option>';
	cbo2 += '<option value="Hospital Hipólito Unanue ">Hospital Hipólito Unanue </option>';
	cbo2 += '<option value="Hospital Dos de Mayo ">Hospital Dos de Mayo </option>';
	cbo2 += '<option value="Hospital II Vitarte  ">Hospital II Vitarte  </option>';
	cbo2 += '<option value="Hospital Nacional Arzobispo Loayza ">Hospital Nacional Arzobispo Loayza </option>';
	cbo2 += '<option value="Hospital I Jorge Voto Bernales Corpancho ">Hospital I Jorge Voto Bernales Corpancho </option>';
	cbo2 += '<option value="Instituto Nacional de Enfermedad Neoplásicas">Instituto Nacional de Enfermedad Neoplásicas</option>';
	cbo2 += '<option value="Hospital I Aurelio Diaz Ufano y Peral ">Hospital I Aurelio Diaz Ufano y Peral </option>';
	cbo2 += '<option value="Hospital III de Emergencias Grau">Hospital III de Emergencias Grau</option>';
	cbo2 += '<option value="Hospital Nacional IV Guillermo Almenara Irigoyen">Hospital Nacional IV Guillermo Almenara Irigoyen</option>';
	cbo2 += '<option value="Hospital Central de la Policía Nacional del Perú">Hospital Central de la Policía Nacional del Perú</option>';
	cbo2 += '<option value="Centro de Atencion Primaria III El Agustino">Centro de Atencion Primaria III El Agustino</option>';
	cbo2 += '<option value="Hospital de Huaycan">Hospital de Huaycan</option>';
	cbo2 += '<option value="Policlínico de apoyo">Policlínico de apoyo</option>';
	cbo2 += '<option value="Hospital de San Juan de Lurigancho">Hospital de San Juan de Lurigancho</option>';
	cbo2 += '<option value="Hospital Santo Toribio de Mogrovejo">Hospital Santo Toribio de Mogrovejo</option>';
	cbo2 += '<option value="Hospital III Suarez Angamos">Hospital III Suarez Angamos</option>';
	cbo2 += '<option value="Ipress Gamarra">Ipress Gamarra</option>';
	cbo2 += '<option value="Centro Médico Casapalca">Centro Médico Casapalca</option>';
	cbo2 += '<option value="Hospital II Ramón Castilla">Hospital II Ramón Castilla</option>';
	cbo2 += '<option value="Hospital de Villa  el Salvador">Hospital de Villa  el Salvador</option>';


	var cbo3 = '<option value="">Seleccione</option>';
	cbo3 += '<option value="Hospital de la Solidaridad ">Hospital de la Solidaridad </option>'
	cbo3 += '<option value="Clínica San Benito">Clínica San Benito</option>';
	cbo3 += '<option value="Policlínico Medical">Policlínico Medical</option>';
	cbo3 += '<option value="Policlínico San Gregorio">Policlínico San Gregorio</option>';
	cbo3 += '<option value="Policlínico Aleman">Policlínico Aleman</option>';
	cbo3 += '<option value="Clínica San Antonio">Clínica San Antonio</option>';
	cbo3 += '<option value="Clínica Internacional">Clínica Internacional</option>';
	cbo3 += '<option value="Clínica Derrer">Clínica Derrer</option>';
	cbo3 += '<option value="Clínica Vitarte Salud">Clínica Vitarte Salud</option>';
	cbo3 += '<option value="Clínica Quito">Clínica Quito</option>';
	cbo3 += '<option value="Clínica Mi Salud">Clínica Mi Salud</option>';
	cbo3 += '<option value="Centro Medico Mi Vecino">Centro Medico Mi Vecino</option>';
	cbo3 += '<option value="Hogar Clínica San Juan de Dios">Hogar Clínica San Juan de Dios</option>';
	cbo3 += '<option value="Policlínico San Andres">Policlínico San Andres</option>';
	cbo3 += '<option value="Clínica Sanidad">Clínica Sanidad</option>';
	cbo3 += '<option value="Policlínico Sagrado Corazón de Jesus ">Policlínico Sagrado Corazón de Jesus </option>';
	cbo3 += '<option value="Policlínico Servisalud Parand">Policlínico Servisalud Parand</option>';
	cbo3 += '<option value="Clínica Hogar de La Madre">Clínica Hogar de La Madre</option>';
	cbo3 += '<option value="Clínica María del Socorro">Clínica María del Socorro</option>';
	cbo3 += '<option value="Clínica Italiana">Clínica Italiana</option>';
	cbo3 += '<option value="Policlínico Infantil Nuestra Señora del Sagrado Corazón">Policlínico Infantil Nuestra Señora del Sagrado Corazón</option>';
	cbo3 += '<option value="Clínica Particular Hinostroza">Clínica Particular Hinostroza</option>';
	cbo3 += '<option value="Policlínico Nueva Esperanza">Policlínico Nueva Esperanza</option>';
	cbo3 += '<option value="Clínica Montefiori">Clínica Montefiori</option>';
	cbo3 += '<option value="Policlínico Santa María">Policlínico Santa María</option>';
	cbo3 += '<option value="Policlínico Internacional">Policlínico Internacional</option>';
	cbo3 += '<option value="Clínica Mora">Clínica Mora</option>';
	cbo3 += '<option value="Clínica Centenario Peruano Japones">Clínica Centenario Peruano Japones</option>';
	cbo3 += '<option value="Policlínico Quime">Policlínico Quime</option>';
	cbo3 += '<option value="Policlínico Amauta">Policlínico Amauta</option>';
	cbo3 += '<option value="Policlínico San Gabriel">Policlínico San Gabriel</option>';
	cbo3 += '<option value="Policlínico La Esperanza">Policlínico La Esperanza</option>';
	cbo3 += '<option value="Policlínico Ramón Castilla">Policlínico Ramón Castilla</option>';
	cbo3 += '<option value="Clínica San Pablo">Clínica San Pablo</option>';
	cbo3 += '<option value="Clínica Ricardo Palma">Clínica Ricardo Palma</option>';
	cbo3 += '<option value="Clínica Santa Lucia">Clínica Santa Lucia</option>';
	cbo3 += '<option value="Clínica del Pacífico">Clínica del Pacífico</option>';
	cbo3 += '<option value="Policlínico La Luz">Policlínico La Luz</option>';

	var cbo4 = '<option value="">Seleccione</option>';
	cbo4 += '<option value="Botica Paraíso">Botica Paraíso</option>';
	cbo4 += '<option value="Botica Los Chanos">Botica Los Chanos</option>';
	cbo4 += '<option value="Botica Medic">Botica Medic</option>';
	cbo4 += '<option value="Farmacia Mi Farma ">Farmacia Mi Farma </option>';
	cbo4 += '<option value="Botica Nieveria">Botica Nieveria</option>';
	cbo4 += '<option value="Botica Villa Leticia">Botica Villa Leticia</option>';
	cbo4 += '<option value="Botica Mi Salud">Botica Mi Salud</option>';
	cbo4 += '<option value="Botica Miguelito">Botica Miguelito</option>';
	cbo4 += '<option value="Botica 24 Horas">Botica 24 Horas</option>';
	cbo4 += '<option value="Farmasalud">Farmasalud</option>';
	cbo4 += '<option value="Inkafarma">Inkafarma</option>';
	cbo4 += '<option value="Botica Seres">Botica Seres</option>';
	cbo4 += '<option value="Botica Mary">Botica Mary</option>';
	cbo4 += '<option value="Farmacia Mundo Farma">Farmacia Mundo Farma</option>';
	cbo4 += '<option value="Botica Ayllu">Botica Ayllu</option>';
	cbo4 += '<option value="Botica Manolito">Botica Manolito</option>';
	cbo4 += '<option value="Botica Magnolias">Botica Magnolias</option>';
	cbo4 += '<option value="Botica La Luz">Botica La Luz</option>';
	cbo4 += '<option value="Botica Las Torres">Botica Las Torres</option>';
	cbo4 += '<option value="Botica Mar Farma">Botica Mar Farma</option>';
	cbo4 += '<option value="Botica Angel">Botica Angel</option>';
	cbo4 += '<option value="Botica Elena">Botica Elena</option>';
	cbo4 += '<option value="Farmacia Carlos ">Farmacia Carlos </option>';
	cbo4 += '<option value="Botica Pedrito">Botica Pedrito</option>';
	cbo4 += '<option value="Farmacia Angelito">Farmacia Angelito</option>';


	/**************************************
	 *         Autocomplete				  *
	 **************************************/
	var DEPARTAMENTO = [
	"AMAZONAS",
	"ANCASH",
	"APURIMAC",
	"AREQUIPA",
	"AYACUCHO",
	"CAJAMARCA",
	"CALLAO",
	"CUSCO",
	"HUANCAVELICA",
	"HUANUCO",
	"ICA",
	"JUNIN",
	"LA LIBERTAD",
	"LAMBAYEQUE",
	"LIMA",
	"LORETO",
	"MADRE DE DIOS",
	"MOQUEGUA",
	"PASCO",
	"PIURA",
	"PUNO",
	"SAN MARTIN",
	"TACNA",
	"TUMBES",
	"UCAYALI"
	];


	var PROVINCIA = [
	"ABANCAY",
	"ACOBAMBA",
	"ACOMAYO",
	"AIJA",
	"ALTO AMAZONAS",
	"AMBO",
	"ANDAHUAYLAS",
	"ANGARAES",
	"ANTA",
	"ANTABAMBA",
	"ANTONIO RAYMONDI",
	"AREQUIPA",
	"ASCOPE",
	"ASUNCION",
	"ATALAYA",
	"AYABACA",
	"AYMARAES",
	"AZANGARO",
	"BAGUA",
	"BARRANCA",
	"BELLAVISTA",
	"BOLIVAR",
	"BOLOGNESI",
	"BONGARA",
	"CAJABAMBA",
	"CAJAMARCA",
	"CAJATAMBO",
	"CALCA",
	"CALLAO",
	"CAMANA",
	"CANAS",
	"CANCHIS",
	"CANDARAVE",
	"CAÑETE",
	"CANGALLO",
	"CANTA",
	"CARABAYA",
	"CARAVELI",
	"CARHUAZ",
	"CARLOS FERMIN FITZCARRALD",
	"CASMA",
	"CASTILLA",
	"CASTROVIRREYNA",
	"CAYLLOMA",
	"CELENDIN",
	"CHACHAPOYAS",
	"CHANCHAMAYO",
	"CHEPEN",
	"CHICLAYO",
	"CHINCHA",
	"CHINCHEROS",
	"CHOTA",
	"CHUCUITO",
	"CHUMBIVILCAS",
	"CHUPACA",
	"CHURCAMPA",
	"CONCEPCION",
	"CONDESUYOS",
	"CONDORCANQUI",
	"CONTRALMIRANTE VILLAR",
	"CONTUMAZA",
	"CORONEL PORTILLO",
	"CORONGO",
	"COTABAMBAS",
	"CUSCO",
	"CUTERVO",
	"DANIEL ALCIDES CARRION",
	"DATEM DEL MARAÑON",
	"DOS DE MAYO",
	"EL COLLAO",
	"EL DORADO",
	"ESPINAR",
	"FERREÑAFE",
	"GENERAL SANCHEZ CERRO",
	"GRAN CHIMU",
	"GRAU",
	"HUACAYBAMBA",
	"HUALGAYOC",
	"HUALLAGA",
	"HUAMALIES",
	"HUAMANGA",
	"HUANCA SANCOS",
	"HUANCABAMBA",
	"HUANCANE",
	"HUANCAVELICA",
	"HUANCAYO",
	"HUANTA",
	"HUANUCO",
	"HUARAL",
	"HUARAZ",
	"HUARI",
	"HUARMEY",
	"HUAROCHIRI",
	"HUAURA",
	"HUAYLAS",
	"HUAYTARA",
	"ICA",
	"ILO",
	"ISLAY",
	"JAEN",
	"JAUJA",
	"JORGE BASADRE",
	"JULCAN",
	"JUNIN",
	"LA CONVENCION",
	"LA MAR",
	"LA UNION",
	"LAMAS",
	"LAMBAYEQUE",
	"LAMPA",
	"LAURICOCHA",
	"LEONCIO PRADO",
	"LIMA",
	"LORETO",
	"LUCANAS",
	"LUYA",
	"MANU",
	"MARAÑON",
	"MARISCAL CACERES",
	"MARISCAL LUZURIAGA",
	"MARISCAL NIETO",
	"MARISCAL RAMON CASTILLA",
	"MAYNAS",
	"MELGAR",
	"MOHO",
	"MORROPON",
	"MOYOBAMBA",
	"NAZCA",
	"OCROS",
	"OTUZCO",
	"OXAPAMPA",
	"OYON",
	"PACASMAYO",
	"PACHITEA",
	"PADRE ABAD",
	"PAITA",
	"PALLASCA",
	"PALPA",
	"PARINACOCHAS",
	"PARURO",
	"PASCO",
	"PATAZ",
	"PAUCAR DEL SARA SARA",
	"PAUCARTAMBO",
	"PICOTA",
	"PISCO",
	"PIURA",
	"POMABAMBA",
	"PUERTO INCA",
	"PUNO",
	"PURUS",
	"QUISPICANCHI",
	"RECUAY",
	"REQUENA",
	"RIOJA",
	"RODRIGUEZ DE MENDOZA",
	"SAN ANTONIO DE PUTINA",
	"SAN IGNACIO",
	"SAN MARCOS",
	"SAN MARTIN",
	"SAN MIGUEL",
	"SAN PABLO",
	"SAN ROMAN",
	"SANCHEZ CARRION",
	"SANDIA",
	"SANTA",
	"SANTA CRUZ",
	"SANTIAGO DE CHUCO",
	"SATIPO",
	"SECHURA",
	"SIHUAS",
	"SUCRE",
	"SULLANA",
	"TACNA",
	"TAHUAMANU",
	"TALARA",
	"TAMBOPATA",
	"TARATA",
	"TARMA",
	"TAYACAJA",
	"TOCACHE",
	"TRUJILLO",
	"TUMBES",
	"UCAYALI",
	"URUBAMBA",
	"UTCUBAMBA",
	"VICTOR FAJARDO",
	"VILCAS HUAMAN",
	"VIRU",
	"YAROWILCA",
	"YAULI",
	"YAUYOS",
	"YUNGAY",
	"YUNGUYO",
	"ZARUMILLA"
	];


	var DISTRITO = [
	'ABANCAY',
	'ABELARDO PARDO LEZAMETA',
	'ACARI',
	'ACAS',
	'ACCHA',
	'ACCOMARCA',
	'ACHAYA',
	'ACHOMA',
	'ACO',
	'ACOBAMBA',
	'ACOBAMBILLA',
	'ACOCHACA',
	'ACOCRO',
	'ACOLLA',
	'ACOMAYO',
	'ACOPAMPA',
	'ACOPIA',
	'ACORA',
	'ACORIA',
	'ACOS',
	'ACOS VINCHOS',
	'ACOSTAMBO',
	'ACRAQUIA',
	'ACZO',
	'AGALLPAMPA',
	'AGUA BLANCA',
	'AGUAS VERDES',
	'AHUAC',
	'AHUAYCHA',
	'AIJA',
	'AJOYANI',
	'ALBERTO LEVEAU',
	'ALCA',
	'ALCAMENCA',
	'ALFONSO UGARTE',
	'ALIS',
	'ALONSO DE ALVARADO',
	'ALTO BIAVO',
	'ALTO DE LA ALIANZA',
	'ALTO INAMBARI',
	'ALTO LARAN',
	'ALTO NANAY',
	'ALTO PICHIGUA',
	'ALTO SAPOSOA',
	'ALTO SELVA ALEGRE',
	'ALTO TAPICHE',
	'AMANTANI',
	'AMARILIS',
	'AMASHCA',
	'AMBAR',
	'AMBO',
	'AMOTAPE',
	'ANANEA',
	'ANAPIA',
	'ANCAHUASI',
	'ANCHONGA',
	'ANCO',
	'ANCON',
	'ANCO_HUALLO',
	'ANDABAMBA',
	'ANDAGUA',
	'ANDAHUAYLAS',
	'ANDAHUAYLILLAS',
	'ANDAJES',
	'ANDAMARCA',
	'ANDARAPA',
	'ANDARAY',
	'ANDOAS',
	'ANGASMARCA',
	'ANGUIA',
	'ANRA',
	'ANTA',
	'ANTABAMBA',
	'ANTAUTA',
	'ANTIOQUIA',
	'ANTONIO RAYMONDI',
	'APARICIO POMARES',
	'APATA',
	'APLAO',
	'APONGO',
	'AQUIA',
	'ARAHUAY',
	'ARAMANGO',
	'ARANCAY',
	'ARAPA',
	'ARENAL',
	'AREQUIPA',
	'ARMA',
	'ASCENSION',
	'ASCOPE',
	'ASIA',
	'ASILLO',
	'ASQUIPATA',
	'ASUNCION',
	'ATAQUERO',
	'ATAURA',
	'ATAVILLOS ALTO',
	'ATAVILLOS BAJO',
	'ATE',
	'ATICO',
	'ATIQUIPA',
	'ATUNCOLLA',
	'AUCALLAMA',
	'AUCARA',
	'AURAHUA',
	'AWAJUN',
	'AYABACA',
	'AYACUCHO',
	'AYAHUANCO',
	'AYAPATA',
	'AYAUCA',
	'AYAVI',
	'AYAVIRI',
	'AYNA',
	'AYO',
	'AZANGARO',
	'BAGUA GRANDE',
	'BAJO BIAVO',
	'BALSAPUERTO',
	'BALSAS',
	'BAMBAMARCA',
	'BAMBAS',
	'BAÑOS',
	'BARRANCA',
	'BARRANCO',
	'BARRANQUITA',
	'BELEN',
	'BELLA UNION',
	'BELLAVISTA',
	'BELLAVISTA DE LA UNION',
	'BERNAL',
	'BOLIVAR',
	'BOLOGNESI',
	'BREÑA',
	'BUENA VISTA ALTA',
	'BUENOS AIRES',
	'BULDIBUYO',
	'CABANA',
	'CABANACONDE',
	'CABANILLA',
	'CABANILLAS',
	'CACATACHI',
	'CACERES DEL PERU',
	'CACHACHI',
	'CACHICADAN',
	'CACHIMAYO',
	'CACRA',
	'CAHUAC',
	'CAHUACHO',
	'CAHUAPANAS',
	'CAICAY',
	'CAIRANI',
	'CAJA',
	'CAJABAMBA',
	'CAJACAY',
	'CAJAMARCA',
	'CAJAMARQUILLA',
	'CAJARURO',
	'CAJATAMBO',
	'CAJAY',
	'CALAMARCA',
	'CALANA',
	'CALANGO',
	'CALAPUJA',
	'CALCA',
	'CALETA DE CARQUIN',
	'CALLAHUANCA',
	'CALLALLI',
	'CALLANMARCA',
	'CALLAO',
	'CALLAYUC',
	'CALLERIA',
	'CALQUIS',
	'CALZADA',
	'CAMANA',
	'CAMANTI',
	'CAMILACA',
	'CAMINACA',
	'CAMPANILLA',
	'CAMPORREDONDO',
	'CAMPOVERDE',
	'CANARIA',
	'CAÑARIS',
	'CANCHABAMBA',
	'CANCHAQUE',
	'CANCHAYLLO',
	'CANDARAVE',
	'CANGALLO',
	'CANIS',
	'CANOAS DE PUNTA SAL',
	'CANTA',
	'CAPACHICA',
	'CAPACMARCA',
	'CAPAYA',
	'CAPAZO',
	'CAPELO',
	'CAPILLAS',
	'CARABAMBA',
	'CARABAYLLO',
	'CARACOTO',
	'CARAMPOMA',
	'CARANIA',
	'CARAPO',
	'CARAVELI',
	'CARAYBAMBA',
	'CARAZ',
	'CARHUACALLANGA',
	'CARHUAMAYO',
	'CARHUANCA',
	'CARHUAPAMPA',
	'CARHUAZ',
	'CARMEN DE LA LEGUA REYNOSO',
	'CARMEN SALCEDO',
	'CARUMAS',
	'CASA GRANDE',
	'CASCA',
	'CASCAPARA',
	'CASCAS',
	'CASHAPAMPA',
	'CASITAS',
	'CASMA',
	'CASPISAPA',
	'CASTILLA',
	'CASTROVIRREYNA',
	'CATAC',
	'CATACAOS',
	'CATACHE',
	'CATAHUASI',
	'CATILLUC',
	'CAUJUL',
	'CAYALTI',
	'CAYARA',
	'CAYARANI',
	'CAYLLOMA',
	'CAYMA',
	'CAYNA',
	'CAYNARACHI',
	'CCAPI',
	'CCARHUAYO',
	'CCATCA',
	'CCOCHACCASA',
	'CCORCA',
	'CELENDIN',
	'CERRO AZUL',
	'CERRO COLORADO',
	'CHACABAMBA',
	'CHACAPALPA',
	'CHACAPAMPA',
	'CHACAS',
	'CHACAYAN',
	'CHACCHO',
	'CHACHAPOYAS',
	'CHACHAS',
	'CHACLACAYO',
	'CHACOCHE',
	'CHADIN',
	'CHAGLLA',
	'CHALA',
	'CHALACO',
	'CHALAMARCA',
	'CHALCOS',
	'CHALHUANCA',
	'CHALLABAMBA',
	'CHALLHUAHUACHO',
	'CHAMACA',
	'CHAMBARA',
	'CHANCAY',
	'CHANCAYBAÑOS',
	'CHANCHAMAYO',
	'CHANGUILLO',
	'CHAO',
	'CHAPARRA',
	'CHAPIMARCA',
	'CHARACATO',
	'CHARAT',
	'CHARCANA',
	'CHAUPIMARCA',
	'CHAVIN',
	'CHAVIN DE HUANTAR',
	'CHAVIN DE PARIARCA',
	'CHAVIÑA',
	'CHAVINILLO',
	'CHAZUTA',
	'CHECACUPE',
	'CHECCA',
	'CHECRAS',
	'CHEPEN',
	'CHETILLA',
	'CHETO',
	'CHIARA',
	'CHICAMA',
	'CHICCHE',
	'CHICHAS',
	'CHICLA',
	'CHICLAYO',
	'CHIGUATA',
	'CHIGUIRIP',
	'CHILCA',
	'CHILCAS',
	'CHILCAYMARCA',
	'CHILCAYOC',
	'CHILETE',
	'CHILIQUIN',
	'CHILLIA',
	'CHIMBAN',
	'CHIMBOTE',
	'CHINCHA ALTA',
	'CHINCHA BAJA',
	'CHINCHAO',
	'CHINCHAYPUJIO',
	'CHINCHERO',
	'CHINCHEROS',
	'CHINCHIHUASI',
	'CHINCHO',
	'CHINGALPO',
	'CHINGAS',
	'CHIPAO',
	'CHIPURANA',
	'CHIQUIAN',
	'CHIRIMOTO',
	'CHIRINOS',
	'CHISQUILLA',
	'CHIVAY',
	'CHOCHOPE',
	'CHOCO',
	'CHOCOPE',
	'CHOCOS',
	'CHOJATA',
	'CHOLON',
	'CHONGOS ALTO',
	'CHONGOS BAJO',
	'CHONGOYAPE',
	'CHONTABAMBA',
	'CHONTALI',
	'CHORAS',
	'CHOROPAMPA',
	'CHOROS',
	'CHORRILLOS',
	'CHOTA',
	'CHUCUITO',
	'CHUGAY',
	'CHUGUR',
	'CHULUCANAS',
	'CHUMPI',
	'CHUMUCH',
	'CHUNGUI',
	'CHUPA',
	'CHUPACA',
	'CHUPAMARCA',
	'CHUPURO',
	'CHUQUIBAMBA',
	'CHUQUIBAMBILLA',
	'CHUQUIS',
	'CHURCAMPA',
	'CHURUBAMBA',
	'CHURUJA',
	'CHUSCHI',
	'CIENEGUILLA',
	'CIRCA',
	'CIUDAD NUEVA',
	'COALAQUE',
	'COASA',
	'COATA',
	'COAYLLO',
	'COCABAMBA',
	'COCACHACRA',
	'COCAS',
	'COCHABAMBA',
	'COCHAMAL',
	'COCHAMARCA',
	'COCHAPETI',
	'COCHARCAS',
	'COCHAS',
	'COCHORCO',
	'CODO DEL POZUZO',
	'COISHCO',
	'COJATA',
	'COLAN',
	'COLASAY',
	'COLCA',
	'COLCABAMBA',
	'COLCAMAR',
	'COLCHA',
	'COLONIA',
	'COLPAS',
	'COLQUEMARCA',
	'COLQUEPATA',
	'COLQUIOC',
	'COLTA',
	'COMANDANTE NOEL',
	'COMAS',
	'COMBAPATA',
	'COMPIN',
	'CONAYCA',
	'CONCEPCION',
	'CONCHAMARCA',
	'CONCHAN',
	'CONCHUCOS',
	'CONDEBAMBA',
	'CONDORMARCA',
	'CONDOROMA',
	'CONDURIRI',
	'CONGALLA',
	'CONGAS',
	'CONILA',
	'CONIMA',
	'CONTAMANA',
	'CONTUMAZA',
	'COPA',
	'COPALLIN',
	'COPANI',
	'COPORAQUE',
	'CORACORA',
	'CORANI',
	'CORCULLA',
	'CORDOVA',
	'CORIS',
	'CORONEL CASTAÑEDA',
	'CORONEL GREGORIO ALBARRACIN LANCHIPA',
	'CORONGO',
	'COROSHA',
	'CORRALES',
	'CORTEGANA',
	'COSPAN',
	'COTABAMBAS',
	'COTAHUASI',
	'COTAPARACO',
	'COTARUSE',
	'COVIRIALI',
	'COYA',
	'COYLLURQUI',
	'CRISTO NOS VALGA',
	'CRUCERO',
	'CUCHUMBAYA',
	'CUENCA',
	'CUISPES',
	'CUJILLO',
	'CULEBRAS',
	'CULLHUAS',
	'CUMBA',
	'CUÑUMBUQUI',
	'CUPI',
	'CUPISNIQUE',
	'CURA MORI',
	'CURAHUASI',
	'CURASCO',
	'CURGOS',
	'CURIBAYA',
	'CURICACA',
	'CURIMANA',
	'CURPAHUASI',
	'CUSCA',
	'CUSCO',
	'CUSIPATA',
	'CUTERVO',
	'CUTURAPI',
	'CUYOCUYO',
	'ÐAHUIMPUQUIO',
	'DANIEL ALOMIAS ROBLES',
	'DANIEL HERNANDEZ',
	'DEAN VALDIVIA',
	'DESAGUADERO',
	'ECHARATE',
	'EDUARDO VILLANUEVA',
	'EL AGUSTINO',
	'EL ALGARROBAL',
	'EL ALTO',
	'EL CARMEN',
	'EL CARMEN DE LA FRONTERA',
	'EL CENEPA',
	'EL ESLABON',
	'EL INGENIO',
	'EL MANTARO',
	'EL MILAGRO',
	'EL ORO',
	'EL PARCO',
	'EL PORVENIR',
	'EL PRADO',
	'EL TALLAN',
	'EL TAMBO',
	'ELEAZAR GUZMAN BARRON',
	'ELIAS SOPLIN VARGAS',
	'EMILIO SAN MARTIN',
	'ENCAÑADA',
	'ESPINAR',
	'ESTIQUE',
	'ESTIQUE-PAMPA',
	'ETEN',
	'ETEN PUERTO',
	'FERNANDO LORES',
	'FERREÑAFE',
	'FIDEL OLIVAS ESCUDERO',
	'FITZCARRALD',
	'FLORENCIA DE MORA',
	'FLORIDA',
	'FRIAS',
	'GAMARRA',
	'GORGOR',
	'GOYLLARISQUIZGA',
	'GRANADA',
	'GREGORIO PITA',
	'GROCIO PRADO',
	'GUADALUPE',
	'GUADALUPITO',
	'GUZMANGO',
	'HABANA',
	'HAQUIRA',
	'HERMILIO VALDIZAN',
	'HEROES ALBARRACIN',
	'HEROINAS TOLEDO',
	'HONGOS',
	'HONORIA',
	'HUABAL',
	'HUAC-HUAS',
	'HUACACHI',
	'HUACAÑA',
	'HUACAR',
	'HUACASCHUQUE',
	'HUACAYBAMBA',
	'HUACCANA',
	'HUACCHIS',
	'HUACHAC',
	'HUACHIS',
	'HUACHO',
	'HUACHOCOLPA',
	'HUACHON',
	'HUACHOS',
	'HUACHUPAMPA',
	'HUACLLAN',
	'HUACRACHUCO',
	'HUACRAPUQUIO',
	'HUACULLANI',
	'HUALGAYOC',
	'HUALHUAS',
	'HUALLAGA',
	'HUALLANCA',
	'HUALMAY',
	'HUAMACHUCO',
	'HUAMALI',
	'HUAMANCACA CHICO',
	'HUAMANGUILLA',
	'HUAMANQUIQUIA',
	'HUAMANTANGA',
	'HUAMATAMBO',
	'HUAMBALPA',
	'HUAMBO',
	'HUAMBOS',
	'HUAMPARA',
	'HUANCA',
	'HUANCA-HUANCA',
	'HUANCABAMBA',
	'HUANCAN',
	'HUANCANE',
	'HUANCANO',
	'HUANCAPI',
	'HUANCAPON',
	'HUANCARAMA',
	'HUANCARANI',
	'HUANCARAY',
	'HUANCARAYLLA',
	'HUANCARQUI',
	'HUANCAS',
	'HUANCASPATA',
	'HUANCAVELICA',
	'HUANCAYA',
	'HUANCAYO',
	'HUANCHACO',
	'HUANCHAY',
	'HUANDO',
	'HUANDOVAL',
	'HUAÑEC',
	'HUANGASCAR',
	'HUANIPACA',
	'HUANOQUITE',
	'HUANTA',
	'HUANTAN',
	'HUANTAR',
	'HUANUARA',
	'HUANUCO',
	'HUANUHUANU',
	'HUANZA',
	'HUAQUIRCA',
	'HUARAL',
	'HUARANCHAL',
	'HUARANGO',
	'HUARAZ',
	'HUARI',
	'HUARIACA',
	'HUARIBAMBA',
	'HUARICOLCA',
	'HUARIPAMPA',
	'HUARMACA',
	'HUARMEY',
	'HUARO',
	'HUAROCHIRI',
	'HUAROCONDO',
	'HUAROS',
	'HUASAHUASI',
	'HUASICANCHA',
	'HUASMIN',
	'HUASO',
	'HUASTA',
	'HUATA',
	'HUATASANI',
	'HUAURA',
	'HUAY-HUAY',
	'HUAYA',
	'HUAYACUNDO ARMA',
	'HUAYAN',
	'HUAYANA',
	'HUAYLAS',
	'HUAYLILLAS',
	'HUAYLLABAMBA',
	'HUAYLLACAYAN',
	'HUAYLLAHUARA',
	'HUAYLLAN',
	'HUAYLLAPAMPA',
	'HUAYLLATI',
	'HUAYLLAY',
	'HUAYLLAY GRANDE',
	'HUAYLLO',
	'HUAYNACOTAS',
	'HUAYO',
	'HUAYOPATA',
	'HUAYRAPATA',
	'HUAYTARA',
	'HUAYUCACHI',
	'HUEPETUHE',
	'HUERTAS',
	'HUICUNGO',
	'HUIMBAYOC',
	'HUMAY',
	'IBERIA',
	'ICA',
	'ICHOCAN',
	'ICHUÑA',
	'ICHUPAMPA',
	'IGNACIO ESCUDERO',
	'IGUAIN',
	'IHUARI',
	'ILABAYA',
	'ILAVE',
	'ILLIMO',
	'ILO',
	'IMAZA',
	'IMPERIAL',
	'INAHUAYA',
	'INAMBARI',
	'IÑAPARI',
	'INCAHUASI',
	'INCHUPALLA',
	'INCLAN',
	'INDEPENDENCIA',
	'INDIANA',
	'INGENIO',
	'INGUILPATA',
	'IPARIA',
	'IQUITOS',
	'IRAY',
	'IRAZOLA',
	'ISLAY',
	'ITE',
	'ITUATA',
	'IZCUCHACA',
	'JACAS CHICO',
	'JACAS GRANDE',
	'JACOBO HUNTER',
	'JAEN',
	'JAMALCA',
	'JANGAS',
	'JANJAILLO',
	'JAQUI',
	'JAUJA',
	'JAYANCA',
	'JAZAN',
	'JEBEROS',
	'JENARO HERRERA',
	'JEPELACIO',
	'JEQUETEPEQUE',
	'JESUS',
	'JESUS MARIA',
	'JESUS NAZARENO',
	'JILILI',
	'JIRCAN',
	'JIVIA',
	'JORGE CHAVEZ',
	'JOSE CRESPO Y CASTILLO',
	'JOSE DOMINGO CHOQUEHUANCA',
	'JOSE GALVEZ',
	'JOSE LEONARDO ORTIZ',
	'JOSE LUIS BUSTAMANTE Y RIVERO',
	'JOSE MANUEL QUIROZ',
	'JOSE MARIA QUIMPER',
	'JOSE SABOGAL',
	'JUAN ESPINOZA MEDRANO',
	'JUAN GUERRA',
	'JUANJUI',
	'JULCAMARCA',
	'JULCAN',
	'JULI',
	'JULIACA',
	'JUMBILLA',
	'JUNIN',
	'JUSTO APU SAHUARAURA',
	'KAQUIABAMBA',
	'KELLUYO',
	'KIMBIRI',
	'KISHUARA',
	'KOSÑIPATA',
	'KUNTURKANKI',
	'LA ARENA',
	'LA BANDA DE SHILCAYO',
	'LA BREA',
	'LA CAPILLA',
	'LA COIPA',
	'LA CRUZ',
	'LA CUESTA',
	'LA ESPERANZA',
	'LA FLORIDA',
	'LA HUACA',
	'LA JALCA',
	'LA JOYA',
	'LA LIBERTAD',
	'LA LIBERTAD DE PALLAN',
	'LA MATANZA',
	'LA MERCED',
	'LA MOLINA',
	'LA OROYA',
	'LA PAMPA',
	'LA PECA',
	'LA PERLA',
	'LA PRIMAVERA',
	'LA PUNTA',
	'LA RAMADA',
	'LA TINGUIÑA',
	'LA UNION',
	'LA VICTORIA',
	'LABERINTO',
	'LACABAMBA',
	'LACHAQUI',
	'LAGUNAS',
	'LAHUAYTAMBO',
	'LAJAS',
	'LALAQUIZ',
	'LAMAS',
	'LAMAY',
	'LAMBAYEQUE',
	'LAMBRAMA',
	'LAMPA',
	'LAMPIAN',
	'LAMUD',
	'LANCONES',
	'LANGA',
	'LANGUI',
	'LARAMARCA',
	'LARAMATE',
	'LARAOS',
	'LAREDO',
	'LARES',
	'LARI',
	'LARIA',
	'LAS AMAZONAS',
	'LAS LOMAS',
	'LAS PIEDRAS',
	'LAS PIRIAS',
	'LAYO',
	'LEIMEBAMBA',
	'LEONCIO PRADO',
	'LEONOR ORDOÑEZ',
	'LEVANTO',
	'LIMA',
	'LIMABAMBA',
	'LIMATAMBO',
	'LIMBANI',
	'LINCE',
	'LINCHA',
	'LIRCAY',
	'LIVITACA',
	'LLACANORA',
	'LLACLLIN',
	'LLALLI',
	'LLAMA',
	'LLAMELLIN',
	'LLAPA',
	'LLAPO',
	'LLATA',
	'LLAUTA',
	'LLAYLLA',
	'LLIPA',
	'LLIPATA',
	'LLOCHEGUA',
	'LLOCLLAPAMPA',
	'LLOQUE',
	'LLUMPA',
	'LLUSCO',
	'LLUTA',
	'LOBITOS',
	'LOCROJA',
	'LOCUMBA',
	'LOMAS',
	'LONGAR',
	'LONGOTEA',
	'LONGUITA',
	'LONYA CHICO',
	'LONYA GRANDE',
	'LOS AQUIJES',
	'LOS BAÑOS DEL INCA',
	'LOS MOROCHUCOS',
	'LOS OLIVOS',
	'LOS ORGANOS',
	'LUCANAS',
	'LUCMA',
	'LUCRE',
	'LUIS CARRANZA',
	'LUNAHUANA',
	'LURICOCHA',
	'LURIGANCHO',
	'LURIGANCHO - CHOSICA',
	'LURIN',
	'LUYA',
	'LUYA VIEJO',
	'LUYANDO',
	'MACA',
	'MACARI',
	'MACATE',
	'MACHAGUAY',
	'MACHE',
	'MACHUPICCHU',
	'MACUSANI',
	'MADEAN',
	'MADRE DE DIOS',
	'MADRIGAL',
	'MAGDALENA',
	'MAGDALENA DE CAO',
	'MAGDALENA DEL MAR',
	'MAGDALENA VIEJA',
	'MAJES',
	'MALA',
	'MALVAS',
	'MAMARA',
	'MANANTAY',
	'MANAS',
	'MAÑAZO',
	'MANCORA',
	'MANCOS',
	'MANGAS',
	'MANSERICHE',
	'MANTA',
	'MANU',
	'MANUEL ANTONIO MESONES MURO',
	'MANZANARES',
	'MAQUIA',
	'MARA',
	'MARANGANI',
	'MARANURA',
	'MARAS',
	'MARCA',
	'MARCABAL',
	'MARCABAMBA',
	'MARCAPATA',
	'MARCAPOMACOCHA',
	'MARCARA',
	'MARCAS',
	'MARCAVELICA',
	'MARCO',
	'MARCONA',
	'MARGOS',
	'MARIA',
	'MARIA PARADO DE BELLIDO',
	'MARIANO DAMASO BERAUN',
	'MARIANO MELGAR',
	'MARIANO NICOLAS VALCARCEL',
	'MARIAS',
	'MARIATANA',
	'MARISCAL BENAVIDES',
	'MARISCAL CACERES',
	'MARISCAL CASTILLA',
	'MASIN',
	'MASISEA',
	'MASMA',
	'MASMA CHICCHE',
	'MATACOTO',
	'MATAHUASI',
	'MATALAQUE',
	'MATAPALO',
	'MATARA',
	'MATO',
	'MATUCANA',
	'MAZAMARI',
	'MAZAMARI-PANGOA',
	'MAZAN',
	'MEJIA',
	'MICAELA BASTIDAS',
	'MIGUEL CHECA',
	'MIGUEL IGLESIAS',
	'MILPUC',
	'MIRACOSTA',
	'MIRAFLORES',
	'MIRGAS',
	'MITO',
	'MOCHE',
	'MOCHUMI',
	'MOHO',
	'MOLINO',
	'MOLINOPAMPA',
	'MOLINOS',
	'MOLLEBAMBA',
	'MOLLEBAYA',
	'MOLLENDO',
	'MOLLEPAMPA',
	'MOLLEPATA',
	'MONOBAMBA',
	'MONSEFU',
	'MONTERO',
	'MONTEVIDEO',
	'MONZON',
	'MOQUEGUA',
	'MORALES',
	'MORCOLLA',
	'MORO',
	'MOROCOCHA',
	'MORONA',
	'MORROPE',
	'MORROPON',
	'MOSOC LLACTA',
	'MOTUPE',
	'MOYA',
	'MOYOBAMBA',
	'MUÑANI',
	'MUQUI',
	'MUQUIYAUYO',
	'MUSGA',
	'NAMBALLE',
	'NAMORA',
	'NANCHOC',
	'NAPO',
	'NAUTA',
	'NAVAN',
	'NAZCA',
	'NEPEÑA',
	'NICASIO',
	'NICOLAS DE PIEROLA',
	'NIEPOS',
	'NIEVA',
	'NINABAMBA',
	'NINACACA',
	'NUEVA ARICA',
	'NUEVA CAJAMARCA',
	'NUEVA REQUENA',
	'NUEVE DE JULIO',
	'NUEVO CHIMBOTE',
	'NUEVO IMPERIAL',
	'NUEVO OCCORO',
	'NUEVO PROGRESO',
	'NUÑOA',
	'OBAS',
	'OCALLI',
	'OCAÑA',
	'OCOBAMBA',
	'OCOÑA',
	'OCONGATE',
	'OCORURO',
	'OCOYO',
	'OCROS',
	'OCUCAJE',
	'OCUMAL',
	'OCUVIRI',
	'OLLACHEA',
	'OLLANTAYTAMBO',
	'OLLARAYA',
	'OLLEROS',
	'OLMOS',
	'OMACHA',
	'OMAS',
	'OMATE',
	'OMIA',
	'ONDORES',
	'ONGON',
	'ONGOY',
	'ORCOPAMPA',
	'ORCOTUNA',
	'OROPESA',
	'ORURILLO',
	'OTOCA',
	'OTUZCO',
	'OXAMARCA',
	'OXAPAMPA',
	'OYOLO',
	'OYON',
	'OYOTUN',
	'PACA',
	'PACAIPAMPA',
	'PACANGA',
	'PACAPAUSA',
	'PACARAN',
	'PACARAOS',
	'PACASMAYO',
	'PACAYCASA',
	'PACCARITAMBO',
	'PACCHA',
	'PACCHO',
	'PACHACAMAC',
	'PACHACONAS',
	'PACHACUTEC',
	'PACHAMARCA',
	'PACHANGARA',
	'PACHAS',
	'PACHIA',
	'PACHIZA',
	'PACLLON',
	'PACOBAMBA',
	'PACOCHA',
	'PACORA',
	'PACUCHA',
	'PADRE ABAD',
	'PADRE MARQUEZ',
	'PAICO',
	'PAIJAN',
	'PAIMAS',
	'PAITA',
	'PAJARILLO',
	'PALCA',
	'PALCAMAYO',
	'PALCAZU',
	'PALLANCHACRA',
	'PALLASCA',
	'PALLPATA',
	'PALPA',
	'PAMPA HERMOSA',
	'PAMPACHIRI',
	'PAMPACOLCA',
	'PAMPAMARCA',
	'PAMPAROMAS',
	'PAMPAS',
	'PAMPAS CHICO',
	'PAMPAS DE HOSPITAL',
	'PANAO',
	'PANCAN',
	'PANGOA',
	'PAPAPLAYA',
	'PAPAYAL',
	'PARACAS',
	'PARAMONGA',
	'PARANDAY',
	'PARARCA',
	'PARARIN',
	'PARAS',
	'PARATIA',
	'PARCO',
	'PARCONA',
	'PARCOY',
	'PARDO MIGUEL',
	'PARIACOTO',
	'PARIAHUANCA',
	'PARINARI',
	'PARIÑAS',
	'PAROBAMBA',
	'PARURO',
	'PASTAZA',
	'PATAMBUCO',
	'PATAPO',
	'PATAYPAMPA',
	'PATAZ',
	'PATIVILCA',
	'PAUCAR',
	'PAUCARA',
	'PAUCARBAMBA',
	'PAUCARCOLLA',
	'PAUCARPATA',
	'PAUCARTAMBO',
	'PAUCAS',
	'PAUSA',
	'PAZOS',
	'PEBAS',
	'PEDRO GALVEZ',
	'PEDRO VILCA APAZA',
	'PERENE',
	'PHARA',
	'PIAS',
	'PICHACANI',
	'PICHANAQUI',
	'PICHARI',
	'PICHIGUA',
	'PICHIRHUA',
	'PICOTA',
	'PICSI',
	'PILCHACA',
	'PILCOMAYO',
	'PILCUYO',
	'PILLCO MARCA',
	'PILLPINTO',
	'PILLUANA',
	'PILPICHACA',
	'PIMENTEL',
	'PIMPINGOS',
	'PINRA',
	'PINTO RECODO',
	'PION',
	'PIRA',
	'PISAC',
	'PISACOMA',
	'PISCO',
	'PISCOBAMBA',
	'PISCOYACU',
	'PISUQUIA',
	'PITIPO',
	'PITUMARCA',
	'PIURA',
	'PLATERIA',
	'POCOHUANCA',
	'POCOLLAY',
	'POCSI',
	'POLOBAYA',
	'POLVORA',
	'POMABAMBA',
	'POMACANCHA',
	'POMACANCHI',
	'POMACOCHA',
	'POMAHUACA',
	'POMALCA',
	'POMATA',
	'PONTO',
	'POROTO',
	'POROY',
	'POSIC',
	'POTONI',
	'POZUZO',
	'PROGRESO',
	'PROVIDENCIA',
	'PUCACACA',
	'PUCALA',
	'PUCARA',
	'PUCUSANA',
	'PUCYURA',
	'PUEBLO LIBRE',
	'PUEBLO NUEVO',
	'PUENTE PIEDRA',
	'PUERTO BERMUDEZ',
	'PUERTO INCA',
	'PUINAHUA',
	'PULAN',
	'PULLO',
	'PUNCHANA',
	'PUNCHAO',
	'PUNO',
	'PUÑOS',
	'PUNTA DE BOMBON',
	'PUNTA HERMOSA',
	'PUNTA NEGRA',
	'PUQUINA',
	'PUQUIO',
	'PURUS',
	'PUSI',
	'PUTINA',
	'PUTINZA',
	'PUTUMAYO',
	'PUYCA',
	'PUYUSCA',
	'QUECHUALLA',
	'QUEHUE',
	'QUELLOUNO',
	'QUEQUEÑA',
	'QUERCO',
	'QUERECOTILLO',
	'QUEROBAMBA',
	'QUEROCOTILLO',
	'QUEROCOTO',
	'QUEROPALCA',
	'QUIACA',
	'QUICACHA',
	'QUICHES',
	'QUICHUAY',
	'QUILAHUANI',
	'QUILCA',
	'QUILCAPUNCU',
	'QUILCAS',
	'QUILLO',
	'QUILMANA',
	'QUINCHES',
	'QUINISTAQUILLAS',
	'QUINJALCA',
	'QUINOCAY',
	'QUIÑOTA',
	'QUINUA',
	'QUINUABAMBA',
	'QUIQUIJANA',
	'QUIRUVILCA',
	'QUISHUAR',
	'QUISQUI',
	'QUITO-ARMA',
	'QUIVILLA',
	'RAGASH',
	'RAHUAPAMPA',
	'RAMON CASTILLA',
	'RANRACANCHA',
	'RANRAHIRCA',
	'RAPAYAN',
	'RAYMONDI',
	'RAZURI',
	'RECTA',
	'RECUAY',
	'REQUE',
	'REQUENA',
	'RICARDO PALMA',
	'RICRAN',
	'RIMAC',
	'RINCONADA LLICUAR',
	'RIO GRANDE',
	'RIO NEGRO',
	'RIO SANTIAGO',
	'RIO TAMBO',
	'RIOJA',
	'RIPAN',
	'RONDOCAN',
	'RONDOS',
	'ROSARIO',
	'ROSASPATA',
	'RUMISAPA',
	'RUPA-RUPA',
	'SABAINO',
	'SABANDIA',
	'SACANCHE',
	'SACHACA',
	'SACSAMARCA',
	'SAISA',
	'SALAMANCA',
	'SALAS',
	'SALAVERRY',
	'SALCABAMBA',
	'SALCAHUASI',
	'SALITRAL',
	'SALLIQUE',
	'SALPO',
	'SAMA',
	'SAMAN',
	'SAMANCO',
	'SAMEGUA',
	'SAMUEL PASTOR',
	'SAN AGUSTIN',
	'SAN ANDRES',
	'SAN ANDRES DE CUTERVO',
	'SAN ANDRES DE TUPICOCHA',
	'SAN ANTON',
	'SAN ANTONIO',
	'SAN ANTONIO DE ANTAPARCO',
	'SAN ANTONIO DE CACHI',
	'SAN ANTONIO DE CHUCA',
	'SAN ANTONIO DE CUSICANCHA',
	'SAN BARTOLO',
	'SAN BARTOLOME',
	'SAN BENITO',
	'SAN BERNARDINO',
	'SAN BORJA',
	'SAN BUENAVENTURA',
	'SAN CARLOS',
	'SAN CLEMENTE',
	'SAN CRISTOBAL',
	'SAN CRISTOBAL DE RAJAN',
	'SAN DAMIAN',
	'SAN FELIPE',
	'SAN FERNANDO',
	'SAN FRANCISCO',
	'SAN FRANCISCO DE ASIS',
	'SAN FRANCISCO DE ASIS DE YARUSYACAN',
	'SAN FRANCISCO DE CAYRAN',
	'SAN FRANCISCO DE DAGUAS',
	'SAN FRANCISCO DE RAVACAYCO',
	'SAN FRANCISCO DE SANGAYAICO',
	'SAN FRANCISCO DEL YESO',
	'SAN GABAN',
	'SAN GREGORIO',
	'SAN HILARION',
	'SAN IGNACIO',
	'SAN ISIDRO',
	'SAN ISIDRO DE MAINO',
	'SAN JACINTO',
	'SAN JAVIER DE ALPABAMBA',
	'SAN JERONIMO',
	'SAN JERONIMO DE TUNAN',
	'SAN JOAQUIN',
	'SAN JOSE',
	'SAN JOSE DE LOS MOLINOS',
	'SAN JOSE DE LOURDES',
	'SAN JOSE DE QUERO',
	'SAN JOSE DE SISA',
	'SAN JOSE DE TICLLAS',
	'SAN JOSE DE USHUA',
	'SAN JOSE DEL ALTO',
	'SAN JUAN',
	'SAN JUAN BAUTISTA',
	'SAN JUAN DE BIGOTE',
	'SAN JUAN DE CHACÑA',
	'SAN JUAN DE CUTERVO',
	'SAN JUAN DE IRIS',
	'SAN JUAN DE JARPA',
	'SAN JUAN DE LA VIRGEN',
	'SAN JUAN DE LICUPIS',
	'SAN JUAN DE LOPECANCHA',
	'SAN JUAN DE LURIGANCHO',
	'SAN JUAN DE MIRAFLORES',
	'SAN JUAN DE RONTOY',
	'SAN JUAN DE SALINAS',
	'SAN JUAN DE SIGUAS',
	'SAN JUAN DE TANTARANCHE',
	'SAN JUAN DE TARUCANI',
	'SAN JUAN DE YANAC',
	'SAN JUAN DE YSCOS',
	'SAN JUAN DEL ORO',
	'SAN LORENZO',
	'SAN LORENZO DE QUINTI',
	'SAN LUIS',
	'SAN LUIS DE LUCMA',
	'SAN LUIS DE SHUARO',
	'SAN MARCOS',
	'SAN MARCOS DE ROCCHAC',
	'SAN MARTIN',
	'SAN MARTIN DE PORRES',
	'SAN MATEO',
	'SAN MATEO DE OTAO',
	'SAN MIGUEL',
	'SAN MIGUEL DE ACO',
	'SAN MIGUEL DE ACOS',
	'SAN MIGUEL DE CAURI',
	'SAN MIGUEL DE CHACCRAMPA',
	'SAN MIGUEL DE CORPANQUI',
	'SAN MIGUEL DE EL FAIQUE',
	'SAN MIGUEL DE MAYOCC',
	'SAN NICOLAS',
	'SAN PABLO',
	'SAN PEDRO',
	'SAN PEDRO DE CACHORA',
	'SAN PEDRO DE CAJAS',
	'SAN PEDRO DE CASTA',
	'SAN PEDRO DE CHANA',
	'SAN PEDRO DE CHAULAN',
	'SAN PEDRO DE CHUNAN',
	'SAN PEDRO DE CORIS',
	'SAN PEDRO DE HUACARPANA',
	'SAN PEDRO DE HUANCAYRE',
	'SAN PEDRO DE LARCAY',
	'SAN PEDRO DE LLOC',
	'SAN PEDRO DE PALCO',
	'SAN PEDRO DE PILAS',
	'SAN PEDRO DE PILLAO',
	'SAN PEDRO DE PUTINA PUNCO',
	'SAN RAFAEL',
	'SAN RAMON',
	'SAN ROQUE DE CUMBAZA',
	'SAN SALVADOR',
	'SAN SALVADOR DE QUIJE',
	'SAN SEBASTIAN',
	'SAN SILVESTRE DE COCHAN',
	'SAN VICENTE DE CAÑETE',
	'SAÑA',
	'SANAGORAN',
	'SAÑAYCA',
	'SANCOS',
	'SANDIA',
	'SANGALLAYA',
	'SANGARARA',
	'SAÑO',
	'SANTA',
	'SANTA ANA',
	'SANTA ANA DE HUAYCAHUACHO',
	'SANTA ANA DE TUSI',
	'SANTA ANITA',
	'SANTA BARBARA DE CARHUACAYAN',
	'SANTA CATALINA',
	'SANTA CATALINA DE MOSSA',
	'SANTA CRUZ',
	'SANTA CRUZ DE ANDAMARCA',
	'SANTA CRUZ DE CHUCA',
	'SANTA CRUZ DE COCACHACRA',
	'SANTA CRUZ DE FLORES',
	'SANTA CRUZ DE TOLED',
	'SANTA EULALIA',
	'SANTA ISABEL DE SIGUAS',
	'SANTA LEONOR',
	'SANTA LUCIA',
	'SANTA MARIA',
	'SANTA MARIA DE CHICMO',
	'SANTA MARIA DEL MAR',
	'SANTA MARIA DEL VALLE',
	'SANTA RITA DE SIGUAS',
	'SANTA ROSA',
	'SANTA ROSA DE OCOPA',
	'SANTA ROSA DE QUIVES',
	'SANTA ROSA DE SACCO',
	'SANTA TERESA',
	'SANTIAGO',
	'SANTIAGO DE ANCHUCAYA',
	'SANTIAGO DE CAO',
	'SANTIAGO DE CHALLAS',
	'SANTIAGO DE CHILCAS',
	'SANTIAGO DE CHOCORVOS',
	'SANTIAGO DE CHUCO',
	'SANTIAGO DE LUCANAMARCA',
	'SANTIAGO DE PAUCARAY',
	'SANTIAGO DE PISCHA',
	'SANTIAGO DE PUPUJA',
	'SANTIAGO DE QUIRAHUARA',
	'SANTIAGO DE SURCO',
	'SANTIAGO DE TUNA',
	'SANTILLANA',
	'SANTO DOMINGO',
	'SANTO DOMINGO DE ACOBAMBA',
	'SANTO DOMINGO DE CAPILLAS',
	'SANTO DOMINGO DE LA CAPILLA',
	'SANTO DOMINGO DE LOS OLLEROS',
	'SANTO TOMAS',
	'SANTO TOMAS DE PATA',
	'SANTO TORIBIO',
	'SAPALLANGA',
	'SAPILLICA',
	'SAPOSOA',
	'SAQUENA',
	'SARA SARA',
	'SARAYACU',
	'SARHUA',
	'SARIN',
	'SARTIMBAMBA',
	'SATIPO',
	'SAUCE',
	'SAUCEPAMPA',
	'SAURAMA',
	'SAUSA',
	'SAYAN',
	'SAYAPULLO',
	'SAYLA',
	'SAYLLA',
	'SECCLLA',
	'SECHURA',
	'SEPAHUA',
	'SEXI',
	'SHAMBOYACU',
	'SHANAO',
	'SHAPAJA',
	'SHATOJA',
	'SHILLA',
	'SHIPASBAMBA',
	'SHUNQUI',
	'SHUNTE',
	'SHUPLUY',
	'SIBAYO',
	'SICAYA',
	'SICCHEZ',
	'SICSIBAMBA',
	'SICUANI',
	'SIHUAS',
	'SILLAPATA',
	'SIMBAL',
	'SIMON BOLIVAR',
	'SINA',
	'SINCOS',
	'SINGA',
	'SINSICAP',
	'SITABAMBA',
	'SITACOCHA',
	'SITAJARA',
	'SIVIA',
	'SOCABAYA',
	'SOCOS',
	'SOCOTA',
	'SOLOCO',
	'SONCHE',
	'SONDOR',
	'SONDORILLO',
	'SOPLIN',
	'SORAS',
	'SORAYA',
	'SORITOR',
	'SOROCHUCO',
	'SUBTANJALLA',
	'SUCCHA',
	'SUCRE',
	'SUITUCANCHA',
	'SULLANA',
	'SUMBILCA',
	'SUNAMPE',
	'SUPE',
	'SUPE PUERTO',
	'SURCO',
	'SURCUBAMBA',
	'SURQUILLO',
	'SUSAPAYA',
	'SUYCKUTAMBO',
	'SUYO',
	'TABACONAS',
	'TABALOSOS',
	'TACABAMBA',
	'TACNA',
	'TAHUAMANU',
	'TAHUANIA',
	'TALAVERA',
	'TAMARINDO',
	'TAMBILLO',
	'TAMBO',
	'TAMBO DE MORA',
	'TAMBO GRANDE',
	'TAMBOBAMBA',
	'TAMBOPATA',
	'TAMBURCO',
	'TANTA',
	'TANTAMAYO',
	'TANTARA',
	'TANTARICA',
	'TAPACOCHA',
	'TAPAIRIHUA',
	'TAPAY',
	'TAPICHE',
	'TAPO',
	'TAPUC',
	'TARACO',
	'TARAPOTO',
	'TARATA',
	'TARAY',
	'TARICA',
	'TARMA',
	'TARUCACHI',
	'TATE',
	'TAUCA',
	'TAURIA',
	'TAURIJA',
	'TAURIPAMPA',
	'TAYABAMBA',
	'TENIENTE CESAR LOPEZ ROJAS',
	'TENIENTE MANUEL CLAVERO',
	'TIABAYA',
	'TIBILLO',
	'TICACO',
	'TICAPAMPA',
	'TICLACAYAN',
	'TICLLOS',
	'TICRAPO',
	'TIGRE',
	'TILALI',
	'TINCO',
	'TINGO',
	'TINGO DE PONASA',
	'TINGO DE SAPOSOA',
	'TINICACHI',
	'TINTA',
	'TINTAY',
	'TINTAY PUNCU',
	'TINYAHUARCO',
	'TIPAN',
	'TIQUILLACA',
	'TIRAPATA',
	'TISCO',
	'TOCACHE',
	'TOCMOCHE',
	'TOMAS',
	'TOMAY KICHWA',
	'TOMEPAMPA',
	'TONGOD',
	'TORATA',
	'TORAYA',
	'TORIBIO CASANOVA',
	'TORO',
	'TORRES CAUSANA',
	'TOTORA',
	'TOTOS',
	'TOURNAVISTA',
	'TRES DE DICIEMBRE',
	'TRES UNIDOS',
	'TRITA',
	'TROMPETEROS',
	'TRUJILLO',
	'TUCUME',
	'TUMAN',
	'TUMAY HUARACA',
	'TUMBADEN',
	'TUMBES',
	'TUNAN MARCA',
	'TUPAC AMARU',
	'TUPAC AMARU INCA',
	'TUPE',
	'TURPAY',
	'TURPO',
	'TUTI',
	'UBINAS',
	'UCHIZA',
	'UCHUMARCA',
	'UCHUMAYO',
	'UCO',
	'UCUNCHA',
	'ULCUMAYO',
	'UMACHIRI',
	'UMARI',
	'UNICACHI',
	'UNION AGUA BLANCA',
	'UÑON',
	'UPAHUACHO',
	'URACA',
	'URANMARCA',
	'URARINAS',
	'URCOS',
	'URPAY',
	'URUBAMBA',
	'USICAYOS',
	'USQUIL',
	'UTCO',
	'UTICYACU',
	'VALERA',
	'VARGAS GUERRA',
	'VEGUETA',
	'VEINTISIETE DE NOVIEMBRE',
	'VELILLE',
	'VENTANILLA',
	'VICCO',
	'VICE',
	'VICHAYAL',
	'VICTOR LARCO HERRERA',
	'VILAVILA',
	'VILCA',
	'VILCABAMBA',
	'VILCANCHOS',
	'VILCAS HUAMAN',
	'VILLA EL SALVADOR',
	'VILLA MARIA DEL TRIUNFO',
	'VILLA RICA',
	'VILQUE',
	'VILQUE CHICO',
	'VIÑAC',
	'VINCHOS',
	'VIQUES',
	'VIRACO',
	'VIRU',
	'VIRUNDO',
	'VISCHONGO',
	'VISTA ALEGRE',
	'VITIS',
	'VITOC',
	'VITOR',
	'WANCHAQ',
	'YAMANGO',
	'YAMBRASBAMBA',
	'YAMON',
	'YANAC',
	'YANACA',
	'YANACANCHA',
	'YANAHUANCA',
	'YANAHUARA',
	'YANAHUAYA',
	'YANAMA',
	'YANAOCA',
	'YANAQUIHUA',
	'YANAS',
	'YANATILE',
	'YANQUE',
	'YANTALO',
	'YAQUERANA',
	'YARABAMBA',
	'YARINACOCHA',
	'YARUMAYO',
	'YAUCA',
	'YAUCA DEL ROSARIO',
	'YAULI',
	'YAURISQUE',
	'YAUTAN',
	'YAUYA',
	'YAUYOS',
	'YAUYUCAN',
	'YAVARI',
	'YONAN',
	'YORONGOS',
	'YUCAY',
	'YUNGA',
	'YUNGAR',
	'YUNGAY',
	'YUNGUYO',
	'YUPAN',
	'YURA',
	'YURACMARCA',
	'YURACYACU',
	'YURIMAGUAS',
	'YURUA',
	'YUYAPICHIS',
	'ZAPATERO',
	'ZARUMILLA',
	'ZEPITA',
	'ZORRITOS',
	'ZUÑIGA',
	'ZURITE'
	];


	var AutoNomEst = ['C.S Villa Leticia de Cajamarquilla',
	'P.S Casa Huerta La Campiña',
	'P.S Villa Mercedes',
	'C.S CLAS Nieveria del Paraíso',
	'P.S Viña San Francisco',
	'C.S Cooperativa Universal',
	'P.S Santa Anita',
	'C.S Fortaleza',
	'P.S CLAS de Ate',
	'C.S Alfa y Omega',
	'C.S Huachipa',
	'P.S San Antonio',
	'C.S Playa Rímac',
	'C.S Chacra Colorada',
	'C.S Chanca-Andahuaylas',
	'C.S Micaela Bastidas',
	'C.S CLAS Carapongo',
	'C.S Santa Clara',
	'C.S Nocheto',
	'C.S Atalaya',
	'C.S Manylsa',
	'Hospital de Vitarte ',
	'Hospital Hermilio Valdizan ',
	'Instituto Nacional Materno Perinatal- Maternidad de Lima ',
	'Instituto Nacional de Salud del Niño ',
	'Policlínico Chosica ',
	'Hospital Hipólito Unanue ',
	'Hospital Dos de Mayo ',
	'Hospital II Vitarte  ',
	'Hospital Nacional Arzobispo Loayza ',
	'Hospital I Jorge Voto Bernales Corpancho ',
	'Instituto Nacional de Enfermedad Neoplásicas',
	'Hospital I Aurelio Diaz Ufano y Peral ',
	'Hospital III de Emergencias Grau',
	'Hospital Nacional IV Guillermo Almenara Irigoyen',
	'Hospital Central de la Policía Nacional del Perú',
	'Centro de Atencion Primaria III El Agustino',
	'Hospital de Huaycan',
	'Policlínico de apoyo',
	'Hospital de San Juan de Lurigancho',
	'Hospital Santo Toribio de Mogrovejo',
	'Hospital III Suarez Angamos',
	'Ipress Gamarra',
	'Centro Médico Casapalca',
	'Hospital II Ramón Castilla',
	'Hospital de Villa  el Salvador',
	'Centri Medico Naval',
	'Hospital de la Solidaridad ',
	'Clínica San Benito',
	'Policlínico Medical',
	'Policlínico San Gregorio',
	'Policlínico Aleman',
	'Clínica San Antonio',
	'Clínica Internacional',
	'Clínica Derrer',
	'Clínica Vitarte Salud',
	'Clínica Quito',
	'Clínica Mi Salud',
	'Centro Medico Mi Vecino',
	'Hogar Clínica San Juan de Dios',
	'Policlínico San Andres',
	'Clínica Sanidad',
	'Policlínico Sagrado Corazón de Jesus ',
	'Policlínico Servisalud Parand',
	'Clínica Hogar de La Madre',
	'Clínica María del Socorro',
	'Clínica Italiana',
	'Policlínico Infantil Nuestra Señora del Sagrado Corazón',
	'Clínica Particular Hinostroza',
	'Policlínico Nueva Esperanza',
	'Clínica Montefiori',
	'Policlínico Santa María',
	'Policlínico Internacional',
	'Clínica Mora',
	'Clínica Centenario Peruano Japones',
	'Policlínico Quime',
	'Policlínico Amauta',
	'Policlínico San Gabriel',
	'Policlínico La Esperanza',
	'Policlínico Ramón Castilla',
	'Clínica San Pablo',
	'Clínica Ricardo Palma',
	'Clínica Santa Lucia',
	'Clínica del Pacífico',
	'Policlínico La Luz',
	'Botica Paraíso',
	'Botica Los Chanos',
	'Botica Medic',
	'Farmacia Mi Farma ',
	'Botica Nieveria',
	'Botica Villa Leticia',
	'Botica Mi Salud',
	'Botica Miguelito',
	'Botica 24 Horas',
	'Farmasalud',
	'Inkafarma',
	'Botica Seres',
	'Botica Mary',
	'Farmacia Mundo Farma',
	'Botica Ayllu',
	'Botica Manolito',
	'Botica Magnolias',
	'Botica La Luz',
	'Botica Las Torres',
	'Botica Mar Farma',
	'Botica Angel',
	'Botica Elena',
	'Farmacia Carlos ',
	'Botica Pedrito',
	'Farmacia Angelito'];










// $.validator.setDefaults({
//     showErrors: function (errorMap, errorList) {
//         this.defaultShowErrors();                            
//         // destroy tooltips on valid elements                              
//         $("." + this.settings.validClass)                    
//             .tooltip("destroy");
//             //$("div.message").remove();   
//         // add/update tooltips 
//         for (var i = 0; i < errorList.length; i++) {
//             var error = errorList[i];
                         
//             $("#" + error.element.id)
//                //.tooltip({ trigger: "change" ,placement:'left'})
//                 //.attr("data-original-title", error.message)                
//         }
//     }
// });



    
/********************************************************************************************
*********************************************************************************************
* 							Reglas de validacion
*
*********************************************************************************************
*********************************************************************************************/

 jQuery.validator.addClassRules("rNotReq", {
   required: false,
 });
 jQuery.validator.addClassRules("rLen2", {
   maxlength: 2,
 });
 jQuery.validator.addClassRules("rLen3", {
   maxlength: 3,
 });
 jQuery.validator.addClassRules("rLen4", {
   maxlength: 4,
 });
 jQuery.validator.addClassRules("rLen5", {
   maxlength: 5,
 });
 jQuery.validator.addClassRules("rLen6", {
   maxlength: 6,
 });
 jQuery.validator.addClassRules("rLen7", {
   maxlength: 7,
 });
 jQuery.validator.addClassRules("rLen8", {
   maxlength: 8,
 });
 jQuery.validator.addClassRules("rLenE8", {
   minlength: 8, maxlength: 8,
 });
 jQuery.validator.addClassRules("rLen11", {
   maxlength: 11,
 });
 jQuery.validator.addClassRules("rLenE11", {
   minlength: 11, maxlength: 11,
 });
 jQuery.validator.addClassRules("rNombre", {
   required: true, maxlength: 80, validName: true,
 });
 jQuery.validator.addClassRules("rN", {
   required: true, maxlength: 80, enteros: true,
 });
 jQuery.validator.addClassRules("rAN", {
   required: true, maxlength: 80, alfaNumerico: true,
 });
 jQuery.validator.addClassRules("rA", {
   required: true, maxlength: 80, lettersonly: true,
 });
 jQuery.validator.addClassRules("rBin", {
   required: true, maxlength: 1, enteros: true, ranges: [ [0,1], [9] ],
 });
 jQuery.validator.addClassRules("rDig1-2", {
   required: true, maxlength: 1, enteros: true, ranges: [ [1,2], [9] ],
 });
 jQuery.validator.addClassRules("rDig1-3", {
   required: true, maxlength: 1, enteros: true, ranges: [ [1,3], [9] ],
 });
 jQuery.validator.addClassRules("rDig1-4", {
   required: true, maxlength: 1, enteros: true, ranges: [ [1,4], [9] ],
 });
 jQuery.validator.addClassRules("rDig1-5", {
   required: true, maxlength: 1, enteros: true, ranges: [ [1,5], [9] ],
 });
 jQuery.validator.addClassRules("rDig1-6", {
   required: true, maxlength: 1, enteros: true, ranges: [ [1,6], [9] ],
 });
 jQuery.validator.addClassRules("rDig1-7", {
   required: true, maxlength: 1, enteros: true, ranges: [ [1,7], [9] ],
 });
 jQuery.validator.addClassRules("rDig1-8", {
   required: true, maxlength: 1, enteros: true, ranges: [ [1,8], [9] ],
 });
 jQuery.validator.addClassRules("rDig1-9", {
   required: true, maxlength: 2, enteros: true, ranges: [ [1,9], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-10", {
  required: true, maxlength: 2, enteros: true, ranges: [ [1,10], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-11", {
   required: true, maxlength: 2, enteros: true, ranges: [ [1,11], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-12", {
   required: true, maxlength: 2, enteros: true, ranges: [ [1,12], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-13", {
   required: true, maxlength: 2, enteros: true, ranges: [ [1,13], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-14", {
   required: true, maxlength: 2, enteros: true, ranges: [ [1,14], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-15", {
   required: true, maxlength: 2, enteros: true, ranges: [ [1,15], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-16", {
   required: true, maxlength: 2, enteros: true, ranges: [ [1,16], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-17", {
   required: true, maxlength: 2, enteros: true, ranges: [ [1,16], [99] ],
 });
 jQuery.validator.addClassRules("rDig1-19", {
   required: true, maxlength: 4, enteros: true, range: [1,19],
 });
 jQuery.validator.addClassRules("rDia", {
   required: true, exactlength: 2, enteros: true, ranges: [ [1,31], [99] ],
 });
 jQuery.validator.addClassRules("rMes", {
   required: true, exactlength: 2, enteros: true, ranges: [ [1,12], [99] ],
 });
 jQuery.validator.addClassRules("rAno", {
   required: true, exactlength: 4, enteros: true, ranges: [ [1900,2014], [9999] ],
 });
 jQuery.validator.addClassRules("rAnos", {
   required: true, maxlength: 2, enteros: true, range: [0,99],
 });
 jQuery.validator.addClassRules("rMeses", {
   required: true, maxlength: 2, enteros: true, range: [0,11],
 });
 jQuery.validator.addClassRules("rDias", {
   required: true, maxlength: 2, enteros: true, range: [0,29],
 });
 jQuery.validator.addClassRules("ruleFecha", {
   maxlength: 10, fechaLocal: true,
 });
 jQuery.validator.addClassRules("ruleHora", {
   maxlength: 6, horaLocal: true,
 });
 jQuery.validator.addClassRules("rReq", {
   required: true,
 });
 jQuery.validator.addClassRules("rEspN", {
   required: true,
 });
 jQuery.validator.addClassRules("rTel", {
   required: true, ranges:[[200000,8999999],[900000000,999999998]], minlength:6, maxlength:9,
 });

/*
* Metodos de validacion
*/

jQuery.validator.addMethod("validName", function(value, element) {
    return this.optional(element) || /^[a-zA-ZàáâäãåąćęèéêëìíîïłńòóôöõøùúûüÿýżźñçčšžÀÁÂÄÃÅĄĆĘÈÉÊËÌÍÎÏŁŃÒÓÔÖÕØÙÚÛÜŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(value);
}, "Caracter no permitido"); 
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zA-ZñÑ\s]+$/.test(value);
}, "Caracter no permitido"); 
 jQuery.validator.addMethod("exactlength", function(value, element, param) {
    return this.optional(element) || value.length == param;
}, jQuery.validator.format("Ingrese {0} caracteres."));

jQuery.validator.addMethod("alfaNumerico", function(value, element) {
    return this.optional(element) || /^[ñÑa-z0-9\s]+$/i.test(value);
}, "Solo letras o numeros");
jQuery.validator.addMethod("enteros", function(value, element) {
    return this.optional(element) || /^[0-9]+$/i.test(value);
}, "Solo numeros");

jQuery.validator.addMethod("domain", function(value, element) {
  return this.optional(element) || /^http:\/\/mycorporatedomain.com/.test(value);
}, "Please specify the correct domain for your documents");

 $.validator.addMethod( "ranges", function(value, element, ranges) {
        var noUpperBound = false;
        var valid = false;
        for(var i=0; i<ranges.length; i++) {
            if(ranges[i].length == 1) { 
                noUpperBound = true;
            }
            if(value >= ranges[i][0] && (value <= ranges[i][1] || noUpperBound)) {
                valid = true;
                break;
            }            
        }
        return this.optional(element) || valid;
    },
    "Fuera de rango {0} y {1}"
 );
$.validator.addMethod("fechaLocal",function(value, element) {
    //return value.match(/^\d\d?\-\d\d?\-\d\d\d\d$/);
    return this.optional(element) || /^[0-9-]+$/i.test(value);
}, "Formato: dd-mm-aaaa");
$.validator.addMethod("horaLocal",function(value, element) {
    //return value.match(/^\d\d?\:\d\d$/);
    return this.optional(element) || /^[0-9:]+$/i.test(value);
}, "Formato: 00:00");



$.extend(jQuery.validator.messages, {
    required: "Campo obligatorio",
    // remote: "Please fix this field.",
    email: "Ingrese un email válido",
    // url: "Please enter a valid URL.",
     date: "Ingrese una fecha válida",
    // dateISO: "Please enter a valid date (ISO).",
    number: "Solo números",
    digits: "Solo números",
    range: jQuery.validator.format("Fuera de rango {0} y {1}."),
    // creditcard: "Please enter a valid credit card number.",
    // equalTo: "Please enter the same value again.",
    // accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Fuera de rango {0}"),
    // minlength: jQuery.validator.format("Please enter at least {0} characters."),
    // rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    // range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    // max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    // min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

/************************************************************************************************
/************************************************************************************************
*
*  FUNCIONES GLOBALES
*
/************************************************************************************************
*************************************************************************************************/

	function setFlujo (obj,valor,bloqueos) {
		var objVal = $(obj).val();
		var sel;
		if (objVal == valor || $.inArray(parseInt(objVal),valor)>=0) {/* BLOQUEA*/
			for (var i = 1; i <= bloqueos; i++) {
				sel = $(':input:eq(' + ($(':input').index(obj) + i) + ')'); sel.attr('disabled','disabled'); sel.val('');
			};
		}else{
			for (var i = 1; i <= bloqueos; i++) {
				sel = $(':input:eq(' + ($(':input').index(obj) + i) + ')'); if(!sel.hasClass('spec')) { sel.removeAttr('disabled'); }
			};			
		};
	}

	function setEspecificar (obj,valor,bloqueos) {
		var objVal = $(obj).val();
		var sel;
		if( $(obj).val() && valor == 'any'){/* Cualquier valor  */
				sel = $(obj).next('input'); 
				if(sel.prop('disabled')) { sel.removeAttr('disabled');}
		}else if (objVal == valor || $.inArray(parseInt(objVal),valor)>=0) {
			for (var i = 1; i <= bloqueos; i++) {
				sel = $(':input:eq(' + ($(':input').index(obj) + i) + ')'); sel.removeAttr('disabled');
			};
		}else{
			for (var i = 1; i <= bloqueos; i++) {
				sel = $(':input:eq(' + ($(':input').index(obj) + i) + ')'); sel.attr('disabled','disabled'); sel.val('');sel.prev('div.message').remove();sel.removeClass('hgError');
			};			
		};
	}

	function especificar(obj,valor,saltos){
		var espec = $(':input:eq(' + ($(':input').index(obj) + 1) + ')');
		var espec2 = $(':input:eq(' + ($(':input').index(obj) + 2) + ')');
		if ($(obj).val() == valor || $.inArray(parseInt($(obj).val()),valor)>=0) { 
			espec.removeAttr('disabled'); 
			if(saltos == 2){espec2.removeAttr('disabled');}
		}else{
			espec.attr('disabled','disabled'); espec.val("");espec.prev('div.message').remove();espec.removeClass('hgError');
			if(saltos == 2){espec2.attr('disabled','disabled'); espec.val("");espec2.prev('div.message').remove();espec2.removeClass('hgError');}
		}
	}


	function addRow(k){
		if (k>1) {
			var rowTable1 = '<tr><td><input type="text" class="form-control rDig1-19" id="COD_IDENT-'+k+'" name="COD_IDENT['+k+']" readonly="readonly" required value="'+k+'"/></td><td><input type="text" class="form-control rNombre" id="S1_A_1_NOM-'+k+'" name="S1_A_1_NOM['+k+']"/></td><td><input type="text" class="form-control rNombre" id="S1_A_1_AP-'+k+'" name="S1_A_1_AP['+k+']"/></td><td><input type="text" class="form-control rNombre" id="S1_A_1_AM-'+k+'" name="S1_A_1_AM['+k+']"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-11 passTD" id="S1_A_2-'+k+'" name="S1_A_2['+k+']" maxlength="2" onchange="especificar(this,11)"/><input type="text" class="form-control wd-inner-70 rA" id="S1_A_2_O-'+k+'" name="S1_A_2_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control rDig1-2" id="S1_A_3-'+k+'" name="S1_A_3['+k+']" maxlength="1"/></td><td><input type="text" class="form-control rAnos setFlujo" id="S1_A_4_A-'+k+'" name="S1_A_4_A['+k+']" maxlength="2" onchange="set4A(this,'+k+')"/></td><td><input type="text" class="form-control rMeses" id="S1_A_4_M-'+k+'" name="S1_A_4_M['+k+']" maxlength="2"/></td><td><input type="text" class="form-control rDias" id="S1_A_4_D-'+k+'" name="S1_A_4_D['+k+']" maxlength="2"/></td></tr>';
			var rowTable2 = '<tr id="tr5-'+k+'"><td class="hgCenter"><label for="S1_A_5-'+k+'">'+k+'</label></td><td><input type="text" class="form-control rDig1-6" id="S1_A_5-'+k+'" name="S1_A_5['+k+']" maxlength="1"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-4 passTD" id="S1_A_6-'+k+'" name="S1_A_6['+k+']" maxlength="1" onchange="especificar(this,4)"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_A_6_O-'+k+'" name="S1_A_6_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-6 passTD" id="S1_A_7-'+k+'" name="S1_A_7['+k+']" maxlength="1" onchange="especificar(this,6)"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_A_7_O-'+k+'" name="S1_A_7_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control rDig1-2" id="S1_A_8-'+k+'" name="S1_A_8['+k+']" maxlength="1" /></td><td><input type="text" class="form-control rDig1-10 setFlujo" id="S1_A_9_N-'+k+'" name="S1_A_9_N['+k+']" maxlength="2" onchange="setFlujo(this,1,1)"/></td><td><input type="text" class="form-control rDig1-8 rNotReq" id="S1_A_9_AG-'+k+'" name="S1_A_9_AG['+k+']" maxlength="1"/></td></tr>';
			var rowTable3 = '<tr id="tr10-'+k+'"><td class="hgCenter"><label for="S1_B_10-'+k+'">'+k+'</label></td><td><input type="text" class="form-control rDig1-2 setFlujo" id="S1_B_10-'+k+'" name="S1_B_10['+k+']" maxlength="1" onchange="setFlujo(this,2,2)"/></td><td><input type="text" class="form-control" id="S1_B_11-'+k+'" name="S1_B_11['+k+']"/></td><td><input type="text" class="form-control rDig1-2 setFlujo" id="S1_B_12-'+k+'" name="S1_B_12['+k+']" maxlength="1" onchange="setFlujo(this,1,2)"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-12 passTD" id="S1_B_13-'+k+'" name="S1_B_13['+k+']" maxlength="2" onchange="especificar(this,12)"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_B_13_O-'+k+'" name="S1_B_13_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control rDig1-2 setFlujo" id="S1_B_14-'+k+'" name="S1_B_14['+k+']" maxlength="1" onchange="setFlujo(this,2,4)"/></td><td><input type="text" class="form-control rDig1-6" id="S1_B_15_N-'+k+'" name="S1_B_15_N['+k+']" maxlength="1"/></td><td><input type="text" class="form-control rDig1-8" id="S1_B_15_AG-'+k+'" name="S1_B_15_AG['+k+']" maxlength="1"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-5 passTD" id="S1_B_16-'+k+'" name="S1_B_16['+k+']" maxlength="1" onchange="especificar(this,5)"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_B_16_O-'+k+'" name="S1_B_16_O['+k+']" placeholder="Especifique" disabled="disabled"/></td></tr>';
			var rowTable4 = '<tr><td class="hgCenter"><label for="S1_C_17_1_DEP-'+k+'">'+k+'</label></td><td><input type="text" class="form-control rReq AutoD" id="S1_C_17_1_DEP-'+k+'" name="S1_C_17_1_DEP['+k+']"/></td><td><input type="text" class="form-control rReq AutoP" id="S1_C_17_2_PROV-'+k+'" name="S1_C_17_2_PROV['+k+']"/></td><td><input type="text" class="form-control rReq AutoDt" id="S1_C_17_3_DIST-'+k+'" name="S1_C_17_3_DIST['+k+']"/></td><td><input type="text" class="form-control rDig1-2 setFlujo" id="S1_C_18-'+k+'" name="S1_C_18['+k+']" maxlength="1" onchange="setFlujo(this,2,1)"/></td><td><input type="text" class="form-control rAno" id="S1_C_19-'+k+'" name="S1_C_19['+k+']" maxlength="4"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-6 passTD" id="S1_C_20-'+k+'" name="S1_C_20['+k+']" maxlength="1" onchange="especificar(this,6)"/><input type="text" class="form-control wd-inner-70 rA" id="S1_C_20_O-'+k+'" name="S1_C_20_O['+k+']" placeholder="Especifique" disabled="disabled"/></td></tr>';
			var rowTable5 = '<tr><td class="hgCenter"><label for="S1_C_21_DEP-'+k+'">'+k+'</label></td><td><input type="text" class="form-control rReq AutoD" id="S1_C_21_1_DEP-'+k+'" name="S1_C_21_1_DEP['+k+']"/></td><td><input type="text" class="form-control rReq AutoP" id="S1_C_21_2_PROV-'+k+'" name="S1_C_21_2_PROV['+k+']"/></td><td><input type="text" class="form-control rReq AutoDt" id="S1_C_21_3_DIST-'+k+'" name="S1_C_21_3_DIST['+k+']"/></td><td><input type="text" class="form-control rA rNotReq" id="S1_C_21_4_OTRO-'+k+'" name="S1_C_21_4_OTRO['+k+']"/></td></tr>';
			var rowTable6 = '<tr id="tr22-'+k+'"><td class="hgCenter"><label for="S1_C_22-'+k+'">'+k+'</label></td><td><input type="text" class="form-control rDig1-2 setFlujo" id="S1_C_22-'+k+'" name="S1_C_22['+k+']" maxlength="1" onchange="set22(this,'+k+')"/></td><td><input type="text" class="form-control rN" id="S1_C_23-'+k+'" name="S1_C_23['+k+']" maxlength="2"/></td><td><input type="text" class="form-control rReq AutoD" id="S1_C_24_1_DEP-'+k+'" name="S1_C_24_1_DEP['+k+']"/></td><td><input type="text" class="form-control rReq AutoP" id="S1_C_24_2_PROV-'+k+'" name="S1_C_24_2_PROV['+k+']"/></td><td><input type="text" class="form-control rReq AutoDt" id="S1_C_24_3_DIST-'+k+'" name="S1_C_24_3_DIST['+k+']"/></td><td><input type="text" class="form-control rA rNotReq" id="S1_C_24_4_OTRO-'+k+'" name="S1_C_24_4_OTRO['+k+']"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-5 passTD" id="S1_C_25-'+k+'" name="S1_C_25['+k+']" maxlength="1" onchange="especificar(this,5)"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_C_25_O-'+k+'" name="S1_C_25_O['+k+']" placeholder="Especifique" disabled="disabled"/></td></tr>';
			var rowTable7 = '<tr id="tr26-'+k+'"><td class="hgCenter"><label for="S1_D_26_COD1-'+k+'">'+k+'</label></td><td class="tdNo"><input type="text" class="form-control wd-inner-10 rBin passTD" id="S1_D_26_COD1-'+k+'" name="S1_D_26_COD1['+k+']" placeholder="p1" maxlength="1" onchange="especificar(this,1)"/><input type="text" class="form-control wd-inner-20 rA" id="S1_D_26_DESC1-'+k+'" name="S1_D_26_DESC1['+k+']" placeholder="Describir" disabled="disabled"/><input type="text" class="form-control wd-inner-10 rBin passTD" id="S1_D_26_COD2-'+k+'" name="S1_D_26_COD2['+k+']" placeholder="p2" maxlength="1" onchange="especificar(this,1)"/><input type="text" class="form-control wd-inner-20 rA" id="S1_D_26_DESC2-'+k+'" name="S1_D_26_DESC2['+k+']" placeholder="Describir" disabled="disabled"/><input type="text" class="form-control wd-inner-10 rBin passTD" id="S1_D_26_COD3-'+k+'" name="S1_D_26_COD3['+k+']" placeholder="p3" maxlength="1" onchange="especificar(this,1)"/><input type="text" class="form-control wd-inner-20 rA" id="S1_D_26_DESC3-'+k+'" name="S1_D_26_DESC3['+k+']" placeholder="Describir" disabled="disabled"/><br><input type="text" class="form-control wd-inner-10 rBin passTD" id="S1_D_26_COD4-'+k+'" name="S1_D_26_COD4['+k+']" placeholder="p4" maxlength="1" onchange="especificar(this,1)"/><input type="text" class="form-control wd-inner-20 rA" id="S1_D_26_DESC4-'+k+'" name="S1_D_26_DESC4['+k+']" placeholder="Describir" disabled="disabled"/><input type="text" class="form-control wd-inner-10 rBin passTD" id="S1_D_26_COD5-'+k+'" name="S1_D_26_COD5['+k+']" placeholder="p5" maxlength="1" onchange="especificar(this,1)"/><input type="text" class="form-control wd-inner-20 rA" id="S1_D_26_DESC5-'+k+'" name="S1_D_26_DESC5['+k+']" placeholder="Describir" disabled="disabled"/><input type="text" class="form-control wd-inner-10 rBin passTD" id="S1_D_26_COD6-'+k+'" name="S1_D_26_COD6['+k+']" placeholder="p6" maxlength="1" onchange="especificar(this,1)"/><input type="text" class="form-control wd-inner-20 rA" id="S1_D_26_DESC6-'+k+'" name="S1_D_26_DESC6['+k+']" placeholder="Describir" disabled="disabled"/><br><input type="text" class="form-control wd-inner-10 rBin passTD" id="S1_D_26_COD7-'+k+'" name="S1_D_26_COD7['+k+']" placeholder="p7" maxlength="1" onchange="especificar(this,1,2)"/><input type="text" class="form-control wd-inner-30 rA" id="S1_D_26_COD7_O-'+k+'" name="S1_D_26_COD7_O['+k+']" placeholder="Especifique" disabled="disabled"/><input type="text" class="form-control wd-inner-20 rA" id="S1_D_26_DESC7-'+k+'" name="S1_D_26_DESC7['+k+']" placeholder="Describir" disabled="disabled"/><input type="text" class="form-control wd-inner-10 rBin setFlujo" id="S1_D_26_COD8-'+k+'" name="S1_D_26_COD8['+k+']" placeholder="p8" maxlength="1" onchange="set26(this,'+k+')"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-14 C27 setFlujo" id="S1_D_27_COD-'+k+'" name="S1_D_27_COD['+k+']" maxlength="2"  onchange="set27(this,'+k+')"/><input type="text" class="form-control wd-inner-70 rA rNotReq spec" id="S1_D_27_COD_O-'+k+'" name="S1_D_27_COD_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control rAN rNotReq" id="S1_D_27_UBIC-'+k+'" name="S1_D_27_UBIC['+k+']"/></td><td><input type="text" class="form-control AutoNomEst rNotReq" id="S1_D_27_NOM-'+k+'" name="S1_D_27_NOM['+k+']"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-7 setFlujo" id="S1_D_28-'+k+'" name="S1_D_28['+k+']" maxlength="1" onchange="set28(this,'+k+')"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_D_28_O-'+k+'" name="S1_D_28_O['+k+']" placeholder="Especifique" disabled="disabled"/></td></tr>';
			var rowTable8 = '<tr id="tr29-'+k+'"><td class="hgCenter"><label for="S1_D_29_1-'+k+'">'+k+'</label></td><td class="td29"><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_1-'+k+'" name="S1_D_29_1['+k+']" placeholder="p1" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_2-'+k+'" name="S1_D_29_2['+k+']" placeholder="p2" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_3-'+k+'" name="S1_D_29_3['+k+']" placeholder="p3" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_4-'+k+'" name="S1_D_29_4['+k+']" placeholder="p4" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_5-'+k+'" name="S1_D_29_5['+k+']" placeholder="p5" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_6-'+k+'" name="S1_D_29_6['+k+']" placeholder="p6" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_7-'+k+'" name="S1_D_29_7['+k+']" placeholder="p7" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_8-'+k+'" name="S1_D_29_8['+k+']" placeholder="p8" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_9-'+k+'" name="S1_D_29_9['+k+']" placeholder="p9" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_29_10-'+k+'" name="S1_D_29_10['+k+']" placeholder="p10" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin passTD" id="S1_D_29_11-'+k+'" name="S1_D_29_11['+k+']" placeholder="p11" maxlength="1" onchange="especificar(this,1)"/><input type="text" class="form-control wd-inner-80 rA" id="S1_D_29_11_O-'+k+'" name="S1_D_29_11_O['+k+']" disabled="disabled" placeholder="Especifique"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-14 passTD" id="S1_D_30_COD-'+k+'" name="S1_D_30_COD['+k+']" maxlength="2" onchange="set30(this,'+k+')"/><input type="text" class="form-control wd-inner-70 rA" id="S1_D_30_COD_O-'+k+'" name="S1_D_30_COD_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control rA" id="S1_D_30_UBIC-'+k+'" name="S1_D_30_UBIC['+k+']"/></td><td><input type="text" class="form-control AutoNomEst" id="S1_D_30_NOM-'+k+'" name="S1_D_30_NOM['+k+']"/></td><td class="tdNo"><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_31_1-'+k+'" name="S1_D_31_1['+k+']" placeholder="p1" maxlength="1" /><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_31_2-'+k+'" name="S1_D_31_2['+k+']" placeholder="p2" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_31_3-'+k+'" name="S1_D_31_3['+k+']" placeholder="p3" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_31_4-'+k+'" name="S1_D_31_4['+k+']" placeholder="p4" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_31_5-'+k+'" name="S1_D_31_5['+k+']" placeholder="p5" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_31_6-'+k+'" name="S1_D_31_6['+k+']" placeholder="p6" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin" id="S1_D_31_7-'+k+'" name="S1_D_31_7['+k+']" placeholder="p7" maxlength="1"/><input type="text" class="form-control wd-inner-20 rBin passTD" id="S1_D_31_8-'+k+'" name="S1_D_31_8['+k+']" placeholder="p8" maxlength="1" onchange="especificar(this,1)"/><input type="text" class="form-control wd-inner-40 rA" id="S1_D_31_8_O-'+k+'" name="S1_D_31_8_O['+k+']" disabled="disabled" placeholder="Especifique"/><input type="text" class="form-control wd-inner-20 rBin setFlujo" id="S1_D_31_9-'+k+'" name="S1_D_31_9['+k+']" placeholder="p9" maxlength="1" onchange="set31(this,'+k+')"/></td><td><input type="text" class="form-control rDig1-2" id="S1_D_31A-'+k+'" name="S1_D_31A['+k+']" maxlength="1"/></td></tr>';
			var rowTable9 = '<tr><td class="hgCenter"><label for="S1_D_32-'+k+'">'+k+'</label></td><td><input type="text" class="form-control wd-inner-50 rDig1-5 setFlujo" id="S1_D_32-'+k+'" name="S1_D_32['+k+']" maxlength="1" onchange="setFlujo(this,5,2)"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-7 passTD" id="S1_D_33-'+k+'" name="S1_D_33['+k+']" maxlength="1" onchange="especificar(this,7)"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_D_33_O-'+k+'" name="S1_D_33_O['+k+']" placeholder="Especifique" disabled="disabled"/></td></tr>';
			var rowTable10 = '<tr id="tr34-'+k+'"><td class="hgCenter"><label for="S1_E_34-'+k+'">'+k+'</label></td><td><input type="text" class="form-control rDig1-2 setFlujo" id="S1_E_34-'+k+'" name="S1_E_34['+k+']" maxlength="1" onchange="setFlujo(this,1,3)"/></td><td><input type="text" class="form-control rDig1-5 setFlujo" id="S1_E_35-'+k+'" name="S1_E_35['+k+']" maxlength="1" onchange="set35(this,'+k+')"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-7 setFlujo" id="S1_E_36-'+k+'" name="S1_E_36['+k+']" maxlength="1" onchange="set36(this,'+k+')"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_E_36_O-'+k+'" name="S1_E_36_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control rA rNotReq" id="S1_E_37-'+k+'" name="S1_E_37['+k+']"/></td><td><input type="text" class="form-control rA" id="S1_E_38-'+k+'" name="S1_E_38['+k+']"/></td></tr>';
			var rowTable11 = '<tr id="tr39-'+k+'"><td class="hgCenter"><label for="S1_E_39-'+k+'">'+k+'</label></td><td><input type="text" class="form-control wd-inner-30 rDig1-7 setFlujo" id="S1_E_39-'+k+'" name="S1_E_39['+k+']" maxlength="1" onchange="set39(this,'+k+')"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_E_39_O-'+k+'" name="S1_E_39_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-6 passTD" id="S1_E_40-'+k+'" name="S1_E_40['+k+']" maxlength="1" onchange="especificar(this,6)"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_E_40_O-'+k+'" name="S1_E_40_O['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control rDig1-2 setFlujo" id="S1_E_41-'+k+'" name="S1_E_41['+k+']" maxlength="1" onchange="set41(this,'+k+')"/></td><td><input type="text" class="form-control rA" id="S1_E_42-'+k+'" name="S1_E_42['+k+']"/></td><td><input type="text" class="form-control rA" id="S1_E_43-'+k+'" name="S1_E_43['+k+']"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-7 passTD" id="S1_E_44-'+k+'" name="S1_E_44['+k+']" maxlength="1" onchange="especificar(this,7)"/><input type="text" class="form-control wd-inner-70 rA spec" id="S1_E_44_O-'+k+'" name="S1_E_44_O['+k+']" placeholder="Especifique" disabled="disabled"/></td></tr>';
			var rowTable12 = '<tr id="tr45-'+k+'"><td class="hgCenter"><label for="S1_E_45-'+k+'">'+k+'</label></td><td><input type="text" class="form-control wd-inner-30 rDig1-7 passTD" id="S1_E_45-'+k+'" name="S1_E_45['+k+']" maxlength="1" onchange="especificar(this,[1,6])"/><input type="text" class="form-control wd-inner-70 rN spec" id="S1_E_45_Esp-'+k+'" name="S1_E_45_Esp['+k+']" placeholder="Especifique" disabled="disabled"/></td><td><input type="text" class="form-control wd-inner-30 rDig1-7 passTD" id="S1_E_46-'+k+'" name="S1_E_46['+k+']" maxlength="1" onchange="especificar(this,[1,6])"/><input type="text" class="form-control wd-inner-70 rN spec" id="S1_E_46_Esp-'+k+'" name="S1_E_46_Esp['+k+']" placeholder="Especifique" disabled="disabled"/></td><td></td></tr>';

			$("#table1 tbody").append(rowTable1);
			$("#table2 tbody").append(rowTable2);
			$("#table3 tbody").append(rowTable3);
			$("#table4 tbody").append(rowTable4);
			$("#table5 tbody").append(rowTable5);
			$("#table6 tbody").append(rowTable6);
			$("#table7 tbody").append(rowTable7);
			$("#table8 tbody").append(rowTable8);
			$("#table9 tbody").append(rowTable9);
			$("#table10 tbody").append(rowTable10);
			$("#table11 tbody").append(rowTable11);
			$("#table12 tbody").append(rowTable12);
			$("#NUM_MIEMBROS").val(k);
			$(".AutoD").autocomplete({ source:DEPARTAMENTO });
			$(".AutoP").autocomplete({ source:PROVINCIA });
			$(".AutoDt").autocomplete({ source:DISTRITO });
			$(".AutoNomEst").autocomplete({ source:AutoNomEst });
		};
	}
	function removeRow(k) {
		$("#table1 tbody tr:eq("+k+")").remove();
		$("#table2 tbody tr:eq("+k+")").remove();
		$("#table3 tbody tr:eq("+k+")").remove();
		$("#table4 tbody tr:eq("+k+")").remove();
		$("#table5 tbody tr:eq("+k+")").remove();
		$("#table6 tbody tr:eq("+k+")").remove();
		$("#table7 tbody tr:eq("+k+")").remove();
		$("#table8 tbody tr:eq("+k+")").remove();
		$("#table9 tbody tr:eq("+k+")").remove();
		$("#table10 tbody tr:eq("+k+")").remove();
		$("#table11 tbody tr:eq("+k+")").remove();
		$("#table12 tbody tr:eq("+k+")").remove();
	}






/************************************************************************************************
/************************************************************************************************
*
*  FUNCIONES ESPECIFICAS
*
/************************************************************************************************
*************************************************************************************************/
function set4A (obj,n) {
	var sel = $("#tr10-"+n+" input"); 
	var sel2 = $("#S1_A_7-"+n+",#S1_A_7_O-"+n+",#S1_A_8-"+n+",#S1_A_9_N-"+n+",#S1_A_9_AG-"+n);
	var sel3 = $("#S1_A_5-"+n+",#S1_A_6-"+n+",#S1_A_6_O-"+n);
	var sel4 = $("#tr34-"+n+" input,#tr39-"+n+" input,#tr45-"+n+" input");
	var objVal = parseInt($(obj).val());
	if( objVal >=3 ){
		sel2.not('.spec').removeAttr('disabled');
		if(objVal>=6){
			sel4.not('.spec').removeAttr('disabled');
		}else{
			sel4.attr('disabled','disabled').val('');sel4.prev('div.message').remove();sel4.removeClass('hgError');
		}
		if(objVal>=12){
			sel3.not('.spec').removeAttr('disabled');
		}else{
			sel3.attr('disabled','disabled').val('');sel3.prev('div.message').remove();sel3.removeClass('hgError');
		}
		if(objVal<=24){
			sel.not('.spec').removeAttr('disabled');
		}else{
			sel.attr('disabled','disabled').val('');sel.prev('div.message').remove();sel.removeClass('hgError');
		}
	}else{
		sel.attr('disabled','disabled').val('');
		sel2.attr('disabled','disabled').val('');
		sel3.attr('disabled','disabled').val('');
		sel4.attr('disabled','disabled').val('');
	}
}

function set22 (obj,n) {
	var sel = $("#tr22-"+n+" input").not(obj); 
	if($(obj).val() == 2){
		sel.attr('disabled','disabled').val(''); sel.prev('div.message').remove();sel.removeClass('hgError');
	}else{
		sel.not('.spec').removeAttr('disabled');
	}
}
function set26 (obj,n) {
	var sel = $("#S1_D_27_COD-"+n+",#S1_D_27_COD_O-"+n+",#S1_D_27_UBIC-"+n+",#S1_D_27_NOM-"+n+",#S1_D_28-"+n+",#S1_D_28_O-"+n+",#tr29-"+n+" .td29 input,#S1_D_27_NOM-"+n).not(obj); 
	if($(obj).val() == 1){
		sel.attr('disabled','disabled').val(''); sel.prev('div.message').remove();sel.removeClass('hgError');
	}else{
		sel.not('.rA,.spec').removeAttr('disabled');
	}
}
function set28 (obj,n) {
	var sel = $("#tr29-"+n+" .td29 input"); 
	var objVal = $(obj).val();
	if( $.inArray(objVal,['1','2','3','4','5','6','7','9'])>=0){
		sel.attr('disabled','disabled').val(''); sel.prev('div.message').remove(); sel.removeClass('hgError');
		if( objVal == 6){
			$("#S1_D_28_O-"+n).removeAttr('disabled');
		}else{
			$("#S1_D_28_O-"+n).attr('disabled','disabled'); $("#S1_D_28_O-"+n).removeClass('hgError'); $("#S1_D_28_O-"+n).prev('div.message').remove()
		}
	}else{
		sel.not('.rA,.spec').removeAttr('disabled'); $("#S1_D_28_O-"+n).attr('disabled','disabled'); $("#S1_D_28_O-"+n).removeClass('hgError');
	}
}

function set27 (obj,n) {
	var sel  = $("#S1_D_27_COD_O-"+n); 
	var sel2 = $("#S1_D_27_UBIC-"+n+",#S1_D_27_NOM-"+n); 
	var sel3 = $("#S1_D_28-"+n+",#S1_D_28_O-"+n); 
	var tVal = $(obj).val();
	if(tVal<=9 || tVal == 99){
		sel.attr('disabled','disabled'); sel3.not('.spec').removeAttr('disabled'); sel.prev('div.message').remove(); sel.removeClass('hgError');
	}else if(tVal <=14){
		sel3.attr('disabled','disabled'); sel3.prev('div.message').remove(); sel3.removeClass('hgError');
		if(tVal == 14){
			sel.removeAttr('disabled');
		}else{
			sel.attr('disabled','disabled'); sel.prev('div.message').remove(); sel.removeClass('hgError');
		}
	}
}

function set30 (obj,n) {
	var sel = $("#S1_D_30_COD_O-"+n).not(obj); 
	var sel2 = $("#S1_D_30_UBIC-"+n+",#S1_D_30_NOM-"+n); 
	var tVal = $(obj).val();
	if(tVal == 13 ){
		sel.attr('disabled','disabled'); sel2.attr('disabled','disabled'); sel.prev('div.message').remove(); sel.removeClass('hgError'); sel2.prev('div.message').remove(); sel2.removeClass('hgError');
	}else if(tVal == 14 ){
		sel.removeAttr('disabled'); sel2.removeAttr('disabled');
	}else {
		sel.attr('disabled','disabled'); sel.prev('div.message').remove(); sel.removeClass('hgError');
		sel2.removeAttr('disabled');
	}
}


function set31 (obj,n) {
	var sel = $("#S1_D_31A-"+n).not(obj); 
	if($(obj).val() == 1){
		sel.attr('disabled','disabled').val('');sel.prev('div.message').remove();sel.removeClass('hgError');
	}else{
		sel.not('.rA').removeAttr('disabled');
	}
}
function set35 (obj,n) {
	var sel = $("#S1_E_36-"+n+",#S1_E_36_O-"+n); 
	if($.inArray($(obj).val(),['1','2','3','4'])>=0){
		sel.attr('disabled','disabled').val('');
	}else{
		sel.not('.rA').removeAttr('disabled');
	}
}

function set36 (obj,n) {
	var sel = $("#S1_E_37-"+n+",#S1_E_38-"+n+",#tr39-"+n+" input,#tr45-"+n+" input:not(#S1_E_47-1,#S1_E_47_Esp-1)"); 
	var objVal = $(obj).val();
	if($.inArray(objVal,['1','2','3','4','5','6','7'])>=0){
		if(objVal == '7'){
			sel.not('#S1_E_36_O-'+n).attr('disabled','disabled').val(''); $('#S1_E_36_O-'+n).removeAttr('disabled');sel.prev('div.message').remove();sel.removeClass('hgError');
		}else{
			sel.attr('disabled','disabled').val(''); }
	}else{
		sel.not('.spec').removeAttr('disabled');
	}
}
function set39 (obj,n) {
	var sel = $("#S1_E_39_O-"+n); 
	var sel2 = $("#S1_E_40-"+n+",#S1_E_40_O-"+n); 
	var objVal = $(obj).val();
	if($.inArray(objVal,['1','2','5'])>=0){
		sel2.not('.spec').removeAttr('disabled');
		sel.attr('disabled','disabled').val(''); sel.prev('div.message').remove();sel.removeClass('hgError');
	}else if(objVal == 7){
		sel.removeAttr('disabled');
		sel2.attr('disabled','disabled').val(''); sel2.prev('div.message').remove();sel.removeClass('hgError');
	}else{
		sel.attr('disabled','disabled').val('');sel.prev('div.message').remove();sel.removeClass('hgError');
		sel2.attr('disabled','disabled').val('');sel2.prev('div.message').remove();sel2.removeClass('hgError');
	}
}
function set41 (obj,n) {
	var sel = $("#S1_E_42-"+n+",#S1_E_43-"+n+",#S1_E_44-"+n+",#S1_E_44_O-"+n+",#S1_E_46-"+n);  
	if($(obj).val() == 2){
		sel.attr('disabled','disabled').val(''); sel.prev('div.message').remove();sel.removeClass('hgError');
	}else{
		sel.not('.spec').removeAttr('disabled');
	}
}
function set73 (obj) {
	var s = $(obj).closest('tr'); var sel = s.find('input,select').not(obj) 
	var objVal =  $(obj).val();
	if($(obj).val() == 2){
		sel.attr('disabled','disabled').val(''); sel.prev('div.message').remove();sel.removeClass('hgError');
	}else{
		sel.not('.spec').removeAttr('disabled');
	}
}
function setEspecifiqueTD (argument) {
	var num = $("#S1_A_1").val();
	$("#table1 input.passTD:not(:disabled)").trigger('change');
    setTimeout(function(){
        $("#table2 input.passTD:not(:disabled)").trigger('change');
    },num*200);	
    setTimeout(function(){
        $("#table3 input.passTD:not(:disabled)").trigger('change');
    },num*300);	
    setTimeout(function(){
        $("#table4 input.passTD:not(:disabled)").trigger('change');
    },num*500);	
    setTimeout(function(){
        $("#table5 input.passTD:not(:disabled)").trigger('change');
    },num*800);	
    setTimeout(function(){
        $("#table6 input.passTD:not(:disabled)").trigger('change');
    },num*1000);	
    setTimeout(function(){
        $("#table7 input.passTD:not(:disabled)").trigger('change');
    },num*1500);	 
    setTimeout(function(){
        $("#table8 input.passTD:not(:disabled)").trigger('change');
    },num*1750);	
    setTimeout(function(){
        $("#table9 input.passTD:not(:disabled)").trigger('change');
    },num*1900);	
    setTimeout(function(){
        $("#table10 input.passTD:not(:disabled)").trigger('change');
    },num*2100);	
    setTimeout(function(){
        $("#table11 input.passTD:not(:disabled)").trigger('change');
    },num*2300);
    setTimeout(function(){
        $("#table12 input.passTD:not(:disabled)").trigger('change');
    },num*2400);    
                               
}
	/* Pregunta 27: Fill combos segun ingreso */
	// $(document).on('change','.C27',function () {/**/
	// 	var sel = ($(this).attr('id')).split('-');
	// 	var tVal = $(this).val();
	// 	if (tVal == 1 || tVal == 2 || tVal == 3) {
	// 		$("#S1_D_27_NOM-"+sel[1]).html(cbo1);
	// 	}else if(tVal == 5 || tVal == 6){
	// 		$("#S1_D_27_NOM-"+sel[1]).html(cbo2);
	// 	}else if(tVal == 9){
	// 		$("#S1_D_27_NOM-"+sel[1]).html(cbo3);
	// 	}else if(tVal == 10){
	// 		$("#S1_D_27_NOM-"+sel[1]).html(cbo4);
	// 	}else{
	// 		$("#S1_D_27_NOM-"+sel[1]).html('<option value=""></option>');
	// 	};

	// });

	$(".AutoD").autocomplete({ source:DEPARTAMENTO });
	$(".AutoP").autocomplete({ source:PROVINCIA });
	$(".AutoDt").autocomplete({ source:DISTRITO });
	$(".AutoNomEst").autocomplete({ source:AutoNomEst });



function ajax_msg (msgT,msg,error) {
	
	var errorA = [];
	errorA[1] = 'info'; /* Exitoso */
	errorA[2] = 'success'; 
	errorA[3] = 'warning'; /* Info*/
	errorA[4] = 'danger';	
	var divMsg = '';
	divMsg += '<div id="divAlert" class="alert alert-'+errorA[error]+' alert-dismissable">';
  	divMsg += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
  	divMsg += '<strong>'+msgT+'</strong><br>'+msg;
	divMsg += '</div>';
	$("#divMsg").css('z-index','99888');
	$("#divMsg").html(divMsg);
	$("#divMsg").show();
   setTimeout(function() {
        $("#divMsg").fadeOut(1500);
        setTimeout(function() {
        	$("#divMsg").css('z-index','-1');
        },1500);
		
    },3000); 





}

function ajax_btn(b,op){
	var btn = $("#"+b); 
	if (op == 1) {
		btn.css({'background-image':'url('+CI.base_url+'resources/images/loader-ajax.gif)','background-size':'100% 100%','background-position':'center center'});
		btn.val('Guardando...');btn.attr('disabled','disabled'); 		
	}else{
		btn.removeAttr('disabled'); btn.css('background-image','none'); btn.val('Guardar');	
	}
}





