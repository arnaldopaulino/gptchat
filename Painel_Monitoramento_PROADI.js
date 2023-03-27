/*
 *    Fill in host and port for Qlik engine
 */

/*ARNALDO - FUNÇÃO PRINT DE TELA*/

    function print_page() {
        var css = '@page { size: 70cm 50cm; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        style.media = 'print';

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);

        window.print();

    }

/* FIM DA FUNÇÃO PRINT DE TELA*/

var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
//var app_1;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

// CRIADO POR ARNALDO
//var app_1;
/*require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});*/
//FIM


   $("#QV1-13").before('<div class="ds-title qvplaceholder" style="" id="QV1-13"></div><i class="fas fa-info-circle" aria-hidden="true"></i>'); 
   $("#QV1-14").before('<div class="ds-title qvplaceholder" style="" id="QV1-14"></div><i class="fas fa-info-circle" aria-hidden="true"></i>'); 
   $("#QV1-15").before('<div class="ds-title qvplaceholder" style="" id="QV1-15"></div><i class="fas fa-info-circle" aria-hidden="true"></i>'); 
                                                

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});

	qlik.theme.apply('tema-sage');
	
	
	

	//callbacks -- inserted here --
	//open apps -- inserted here --
	
	//var app = qlik.openApp('a4693d76-0450-4f67-9176-b9190df71a3d',config); //QSE PRONAS E PRONON
	var app_1 = qlik.openApp("e531ed84-8c05-4d88-ad76-0ae829f90af5", config); //OBJETOS_PROAD_1
	var app_2 = qlik.openApp("9dc9bce7-c772-4604-a592-06fa57e9e96f", config); //OBJETOS_PROAD_2
	 
	
	

	//get objects -- inserted here --
	
	
	
	
	
	
	
	
	
	
	//4º TRIENIO - OBJETOS PROADI 2//
	
	app_2.getObject("QV1-00030", "cHLdVdp");//FILTRO STATUS PROJETO
	app_2.getObject("QV1-00031", "MMJkquz");//SIGLA HOSPITAL
	app_2.getObject("QV1-00032", "MmSWFF");//ÁREA RESPONSAVEL
	app_2.getObject("QV1-00033", "aUSYRV");//ÁREA DE ATUAÇÃO
	app_2.getObject("QV1-28", "qmZsAY");//TABELA RELATORIO GERENCIAL PROADI
	app_2.getObject("QV1-27", "HmPpnUL");//PERCENTUAL DE PROPOSTAS SUBMETIDAS POR AREA RESPONSAVEL
	app_2.getObject("QV1-26", "JUFQJ");//TOTAL DE PROPOSTAS SUBMETIDAS POR INSTITUIÇÃO
	app_2.getObject("QV1-25", "BJNjmPR");//ROSCA PROJETOS APROVADOS POR AREA DE ATUAÇÃO PRINCIPAL
	app_2.getObject("QV1-24", "Pfa"); // BARRAS TOTAL DE PROJETOS APROVADOS POR ÁREA RESPONSÁVEL
	app_2.getObject("QV1-23", "xfUmR");
	app_2.getObject("QV1-22", "cGdPH");//RECURSOS AUTORIZADOS POR AREA DE ATUAÇÃO PRINCIPAL
	app_2.getObject("QV1-21", "cjUcBe");//TABELA RESUMO DA EXECUÇÃO FINANCEIRA
	app_2.getObject("QV1-20", "xpjBLBy");//GRAFICO DE BARRAS VALORES APROVADOS PARA EXECUÇÃO
	app_2.getObject("QV1-001", "MLDuVSj");
  //KPI OBJETOS PROADI 2
	
	app_2.getObject("KPI-05", "TvYwpMf");
	app_2.getObject("KPI-06", "mnPLV");
	app_2.getObject("KPI-07", "wpYjEy");
	app_2.getObject("KPI-08", "JkmjLpb");
	app_2.getObject("KPI-09", "EcQVMQQ");

	//OBJETOS PROADI 2 FIM//
  
	//OBJETOS EXECUÇÃO PROADI APP1 INICIO//
	app_1.getObject("QV1-19", "pskpyyr");
	//app_1.getObject("QV1-14", "PfuULM", {noSelections:"true"});//TABELA OUTROS PROJETOS EM EXECUÇÃO
	app_1.getObject("QV1-13", "ZMqKnS", {noSelections:"true"});//TABELA RELATORIO GERENCIAL PROADI
	app_1.getObject("QV1-12", "JUFQJ"); //MAPA DE ARVORE TOTAL DE PROPOSTAS SUBMETIDAS POR INSTITUIÇÃO
	app_1.getObject("QV1-11", "HmPpnUL");//ROSCA PERCENTAL DE POPOSTAS SUBMETIDAS POR ÁREA RESPONSÁVEL
	app_1.getObject("QV1-10", "hZzPy"); //ROSCA PROJETOS APROVADOS POR AREA DE ATUAÇÃO PRINCIPAL
	app_1.getObject("QV1-09", "Pfa"); // BARRAS TOTAL DE PROJETOS APROVADOS POR ÁREA RESPONSÁVEL
	app_1.getObject("QV1-08", "cjUcBe");
	app_1.getObject("QV1-07", "aDYmEx"); //BARRAS E LINHAS PROPOSTAS SUBMETIDAS X PROPOSTAS APROVADOS
	app_1.getObject("QV1-06", "MNFdPpa");//VELOCIMETRO HSL
	app_1.getObject("QV1-05", "JjMVTEH"); //VELOCIMETRO HAOC
	app_1.getObject("QV1-04", "Kqde");// VELOCIMETRO HIAE
	app_1.getObject("QV1-03", "VjZcnt");//VELOCIMETRO BP
	app_1.getObject("QV1-02", "mTHtNTm");//VELOCIMENTRO 
	app_1.getObject("QV1-01", "TyJVUe");//VELOCIMETRO AHMV
	//app_1.getObject("QV1-00", "kkfPmKL");//kkfPmKL
	app_1.getObject("QV1-00020", "ZzptQKD");//FILTRO STATUS DO PROJETO
	app_1.getObject("QV1-00021", "WsGaGFY");//FILTRO SIGLA DO HOSPITAL
	app_1.getObject("QV1-00022", "nKshZm");// FILTRO AREA RESPONSAVEL
	app_1.getObject("QV1-00023", "ypCPUq");//FILTRO AREA DE ATUAÇÃO
	//KPY  
	app_1.getObject("KPI-04", "TvYwpMf");//RECURSOS ALOCADOS
	app_1.getObject("KPI-03", "mnPLV");//TERMO DE AJUSTE
	app_1.getObject("KPI-02", "JkmjLpb");//PROJETOS APROVADOS
	app_1.getObject("KPI-001", "wpYjEy"); //PROPOSTAS SUBMETIDAS
	
	
	//OBJETOS EXECUÇÃO APP_1 FIM//
	
	

	
	
		app_1.getObject('QV1-13','0777f981-df3e-4ba4-9a43-98cf7dca4cdf').then(function(reply){
		$('#QV1-13_down').click(function(){
			var qTable = qlik.table(reply);
			qTable.exportData({download: true}); 
	/*		$("#QV1-G15D_menu").css("opacity", "0");     */
		});
	});
	
	app_1.getObject('QV1-14','965c3842-5ec8-4706-999e-ce3ba104bbdb').then(function(reply){
		$('#QV1-14_down').click(function(){
			var qTable = qlik.table(reply);
			qTable.exportData({download: true}); 
	/*		$("#QV1-G15D_menu").css("opacity", "0");     */
		});
	});
	
	app_1.getObject('QV1-15','0b6b28bb-af24-4c17-ac4e-24a51b1459c0').then(function(reply){
		$('#QV1-15_down').click(function(){
			var qTable = qlik.table(reply);
			qTable.exportData({download: true}); 
	/*		$("#QV1-G15D_menu").css("opacity", "0");     */
		});
	});
	
	
	
	
	app_1.getObject('QV1-08','cjUcBe').then(function(reply){
		$('#QV1-08_down').click(function(){
			var qTable = qlik.table(reply);
			qTable.exportData({download: true}); 
		$("#QV1-G15D_menu").css("opacity", "0");     
		});
	});
	
	
	
	
	

	
	
	
	
	//create cubes and lists -- inserted here --

/*
	if (app) {
		
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
		
		$( "[
		]" ).on( 'click', function () {
			var $element = $( this );
			switch ( $element.data( 'qcmd' ) ) {
				//app level commands
				case 'clearAll':
					app.clearAll();
					break;
				case 'back':
					app.back();
					break;
				case 'forward':
					app.forward();
					break;
				case 'lockAll':
					app.lockAll();
					break;
				case 'unlockAll':
					app.unlockAll();
					break;
				case 'createBm':
					var title = $( "#bmtitle" ).val(), desc = $( "#bmdesc" ).val();
					app.bookmark.create( title, desc );
					$( '#createBmModal' ).modal( 'hide' );
					break;
			}
		} );
		
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
	
	//Get selection list
  
  
	app.getList("SelectionObject", function(reply){ 

      $selections = $("#tagselections");  //DOM node to append selections to
      $selections.html("");  //Clear node of any previous selections
      
      //Loop through array of fields that have selections
      $.each(reply.qSelectionObject.qSelections, function(key, value) {
        
        var field = value.qField;  //The field name
        var numSelected = value.qSelectedCount;  //Number of selections in field
        var total = value.qTotal;  //Total number of values in field
        var threshold = value.qSelectionThreshold;  //Threshold in which to display a number count instead of each value
        var selectedStr = value.qSelected;  //When numSelected is less than or equal to threshold, a string of the names of each value selected
        
        
        //If numSelected is below or equal to threshold, show string of names of each value selected
        if (numSelected <= threshold) {
          var html = "";
          html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
          html += 	"<span class='selected-field'>" + field + ": </span>";
          html += 	selectedStr;
          html += 	" <span class='clear-field'>X</span>";
          html += "</span>";
    	  $selections.append(html);
        }
        
        // If numSelected is greater than threshold, show the numSelected of total values
        else {
          var html = "";
          html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
          html += 	"<span class='selected-field'>" + field + ": </span>";
          html += 	numSelected + " of " + total;
          html += 	" <span class='clear-field'>X</span>";
          html += "</span>";
    	  $selections.append(html);
        }
        
      });
	
      //Event listener on .clear-field to clear that field's selections when clicked
      $(".clear-field").click(function() {
   		//console.log($(this).parent().attr("id"));
        var field = $(this).parent().attr("id");
        app.field(field).clear();
		
  	  }); 
	
	 if($("#tagselections").html() === ""){
		 $("#tagbar").css("margin-top", "0px");
	 } else {
	  	var offset = $("#tagbar").offset();
	 	if ($(window).scrollTop() > offset.top) {
        	$("#tagbar").css("margin-top", $(window).scrollTop() - offset.top);
        };
	 	
	 }
      
    });
	
});

//Mantem a barra de tags acompanhando o scroll da pagina, no caso de ter filtros selecionados
 $(function() {
            var offset = $("#tagbar").offset();
            var topPadding = 0;
			var isEmpty = $("#tagselections").html() == "";
			
            $(window).scroll(function() {
				isEmpty = $("#tagselections").html() == "";
                if ($(window).scrollTop() > offset.top && !isEmpty) {
                    $("#tagbar").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $("#tagbar").stop().animate({
                        marginTop: 0
                    });
                };
            });
        });*/
		
		
		
		
		
		
		//ARNALDO
		
//create cubes and lists -- inserted here --

	document.querySelector('.nav').addEventListener('pointermove', (event) => {
		qlik.resize();
	});
	//create cubes and lists -- inserted here --

	if (app_1) {
		app_1.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
		
		$( "[data-qcmd]" ).on( 'click', function () {
			var $element = $( this );
			switch ( $element.data( 'qcmd' ) ) {
				//app_1 level commands
				case 'clearAll':
					app_1.clearAll();
					break;
				case 'back':
					app_1.back();
					break;
				case 'forward':
					app_1.forward();
					break;
				case 'lockAll':
					app_1.lockAll();
					break;
				case 'unlockAll':
					app_1.unlockAll();
					break;
				case 'createBm':
					var title = $( "#bmtitle" ).val(), desc = $( "#bmdesc" ).val();
					app_1.bookmark.create( title, desc );
					$( '#createBmModal' ).modal( 'hide' );
					break;
			}
		} );
		
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
	
		if (app_2) {
		app_2.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
		
		$( "[data-qcmd]" ).on( 'click', function () {
			var $element = $( this );
			switch ( $element.data( 'qcmd' ) ) {
				//app_2 level commands
				case 'clearAll':
					app_2.clearAll();
					break;
				case 'back':
					app_2.back();
					break;
				case 'forward':
					app_2.forward();
					break;
				case 'lockAll':
					app_2.lockAll();
					break;
				case 'unlockAll':
					app_2.unlockAll();
					break;
				case 'createBm':
					var title = $( "#bmtitle" ).val(), desc = $( "#bmdesc" ).val();
					app_2.bookmark.create( title, desc );
					$( '#createBmModal' ).modal( 'hide' );
					break;
			}
		} );
		
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
	
	//Get selection list
  
  
	app_1.getList("SelectionObject", function(reply){ 

      $selections = $("#tagselections_app1");  //DOM node to app_1 end selections to
      $selections.html("");  //Clear node of any previous selections
      
      //Loop through array of fields that have selections
      $.each(reply.qSelectionObject.qSelections, function(key, value) {
        
        var field = value.qField;  //The field name
        var numSelected = value.qSelectedCount;  //Number of selections in field
        var total = value.qTotal;  //Total number of values in field
        var threshold = value.qSelectionThreshold;  //Threshold in which to display a number count instead of each value
        var selectedStr = value.qSelected;  //When numSelected is less than or equal to threshold, a string of the names of each value selected
        
        
        //If numSelected is below or equal to threshold, show string of names of each value selected
        if (numSelected <= threshold) {
            var html = "";
            html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
            html += 	"<span class='selected-field'>" + field + ": </span>";
            html += 	selectedStr;
            html += 	" <span class='clear-field'>X</span>";
            html += "</span>";
            $selections.append(html);
        }
        
        // If numSelected is greater than threshold, show the numSelected of total values
        else {
            var html = "";
            html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
            html += 	"<span class='selected-field'>" + field + ": </span>";
            html += 	numSelected + " of " + total;
            html += 	" <span class='clear-field'>X</span>";
            html += "</span>";
            $selections.append(html);
        }
        
      });
	
      //Event listener on .clear-field to clear that field's selections when clicked
      $(".clear-field").click(function() {
   		//console.log($(this).parent().attr("id"));
        var field = $(this).parent().attr("id");
        app_1.field(field).clear();
		
  	  }); 
	
	 if($("#tagselections").html() === ""){
		 $("#tagbar").css("margin-top", "0px");
	 } else {
	  	var offset = $("#tagbar").offset();
	 	if ($(window).scrollTop() > offset.top) {
        	$("#tagbar").css("margin-top", $(window).scrollTop() - offset.top);
        };
	 	
	 }
      
    });
	
	//Mostrar filtros do APP_2
	
	  app_2.getList("SelectionObject", function(reply){ 

      $selections = $("#tagselections_app2");  //DOM node to app_2 end selections to
      $selections.html("");  //Clear node of any previous selections
      
      //Loop through array of fields that have selections
      $.each(reply.qSelectionObject.qSelections, function(key, value) {
        
        var field = value.qField;  //The field name
        var numSelected = value.qSelectedCount;  //Number of selections in field
        var total = value.qTotal;  //Total number of values in field
        var threshold = value.qSelectionThreshold;  //Threshold in which to display a number count instead of each value
        var selectedStr = value.qSelected;  //When numSelected is less than or equal to threshold, a string of the names of each value selected
        
        
        //If numSelected is below or equal to threshold, show string of names of each value selected
        if (numSelected <= threshold) {
            var html = "";
            html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
            html += 	"<span class='selected-field'>" + field + ": </span>";
            html += 	selectedStr;
            html += 	" <span class='clear-field'>X</span>";
            html += "</span>";
            $selections.append(html);
        }
        
        // If numSelected is greater than threshold, show the numSelected of total values
        else {
            var html = "";
            html += "<span class='br-tag text selected-field-container' id='" + field + "'>";
            html += 	"<span class='selected-field'>" + field + ": </span>";
            html += 	numSelected + " of " + total;
            html += 	" <span class='clear-field'>X</span>";
            html += "</span>";
            $selections.append(html);
        }
        
      });
	
      //Event listener on .clear-field to clear that field's selections when clicked
      $(".clear-field").click(function() {
   		//console.log($(this).parent().attr("id"));
        var field = $(this).parent().attr("id");
        app_2.field(field).clear();
		
  	  }); 
	
	 if($("#tagselections").html() === ""){
		 $("#tagbar").css("margin-top", "0px");
	 } else {
	  	var offset = $("#tagbar").offset();
	 	if ($(window).scrollTop() > offset.top) {
        	$("#tagbar").css("margin-top", $(window).scrollTop() - offset.top);
        };
	 	
	 }
      
    });
	
	
	
	
	
});

//Mantem a barra de tags acompanhando o scroll da pagina, no caso de ter filtros selecionados
 $(function() {
            var offset = $("#tagbar").offset();
            var topPadding = 0;
			var isEmpty = $("#tagselections").html() == "";
			
            $(window).scroll(function() {
				isEmpty = $("#tagselections").html() == "";
                if ($(window).scrollTop() > offset.top && !isEmpty) {
                    $("#tagbar").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $("#tagbar").stop().animate({
                        marginTop: 0
                    });
                };
            });
        });
	document.querySelector('.nav').addEventListener('pointermove', (event) => {
		qlik.resize();
	});
