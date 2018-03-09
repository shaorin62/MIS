(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("statsbar_custom");
                this.set_scrollbars("none");
                this.set_titletext("[기획]실적현황차트");
                this._setFormPosition(0,0,218,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTR_MONEPL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"10\"/><Column id=\"MAID_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"MI01_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI02_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI03_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI04_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI05_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI06_AMOT\" type=\"STRING\" size=\"15\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static26", "absolute", "61", "0", "151", "18", null, null, this);
            obj.set_taborder("6");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "9", "27", "65", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("cmdTitle", "absolute", "26", "9", "191", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("2016년 실적현황(누계)");
            obj.set_cssclass("sta_MF_name");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "53", null, "35", "24", null, "38", this);
            obj.set_taborder("11");
            obj.set_text("합계");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "102", null, "35", "24", null, "38", this);
            obj.set_taborder("12");
            obj.set_text("계열");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "147", null, "45", "24", null, "38", this);
            obj.set_taborder("13");
            obj.set_text("비계열");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text7");
            obj.style.set_font("antialias 9 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "45", null, "150", "1", null, "60", this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_line2");
            this.addChild(obj.name, obj);

            obj = new Static("NOT_ALLIED_GOAL", "absolute", "155", null, "28", "50", null, "60", this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("GOAL_TOTAL", "absolute", "57", null, "28", "162", null, "60", this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("ALLIED_GOAL", "absolute", "106", null, "28", "130", null, "60", this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_chart1");
            this.addChild(obj.name, obj);

            obj = new Static("NOT_ALLIED_RESULT", "absolute", "155", null, "28", "34", null, "60", this);
            obj.set_taborder("21");
            obj.set_text("110\r\n73%");
            obj.set_cssclass("sta_MF_chart2");
            this.addChild(obj.name, obj);

            obj = new Static("RESULT_TOTAL", "absolute", "57", null, "28", "145", null, "60", this);
            obj.set_taborder("22");
            obj.set_text("560\r\n86%");
            obj.set_cssclass("sta_MF_chart2");
            obj.set_tooltiptype("default");
            this.addChild(obj.name, obj);

            obj = new Static("ALLIED_RESULT", "absolute", "106", null, "28", "100", null, "60", this);
            obj.set_taborder("23");
            obj.set_text("450\r\n90%");
            obj.set_cssclass("sta_MF_chart2");
            this.addChild(obj.name, obj);

            obj = new Static("NOT_ALLIED_NUMBER", "absolute", "152", null, "35", "20", null, "60", this);
            obj.set_taborder("24");
            obj.set_text("150");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);

            obj = new Static("ALLIED_NUMBER", "absolute", "102", null, "35", "20", null, "60", this);
            obj.set_taborder("25");
            obj.set_text("500");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);

            obj = new Static("TOTAL_NUMBER", "absolute", "53", null, "35", "20", null, "60", this);
            obj.set_taborder("26");
            obj.set_text("650");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 218, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[기획]실적현황차트");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("statsbar_custom.xfdl", "script::lib_script_common.xjs");
        this.registerScript("statsbar_custom.xfdl", function() {
         /***************************************************************************************************
         * # Program : 공통 대시보드>상단>상태바 
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.23		최인철		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/

        this.sPACKAGENAME = "ComStatsBar"; //해당 Form에서 사용 할 Package 명

        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function(obj,e)
        {
        	  
        	  var sDate = this.fnc_GetServerDateTime("DATE");
        	  this.cmdTitle.set_text(this.fnc_Left(sDate, 4) + "년실적현황(누계)");
        	  
        	  this.fn_Search("SEARCH00");
        	
        }

        /*-------------------------------------+
         |  일정등록 조회 함수      	       |
         +-------------------------------------*/
        this.fn_schSearch = function(){	
        	
        	this.fn_TransactionCall("SEARCH00");
        }

        
        this.fn_Search = function (obj) {

            this.fnc_DatasetClear("dsTR_MONEPL"); 
            
            var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_MONEPL=dsTR_MONEPL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;	

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDYEAR="  +  this.fnc_Quote(this.fnc_Trim(this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 6))); 				
        		//sReturnString += " STDYEAR="  +  '201701'; 				
        		sReturnString += " MAID="     + "FMT10";  
        	
        	} 

        	return sReturnString;
        	
        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        		
        	} else {

        		this.fn_PostProcess(sMethodName);

        	}
        }

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

            var MI01_AMOT =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT")) ;
            var MI02_AMOT =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT")) ;
            var MI03_AMOT =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")) ;	
            var MI04_AMOT =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT")) ;
            var MI05_AMOT =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT")) ;
            var MI06_AMOT =  this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")) ;	

        	
        	
        	if (sMethodName == "SEARCH00") {
        	   //nexacro.toNumber(this.fnc_Trim(this.dsTR_MONEPL.getColumn(iRow, "MI06_AMOT")));	
        	    //this.Static32.set_height("1000");	  
        	  //this.cmdTitle.set_text("123");
        	  //this.fnc_Message("TMM125", "123");
        	  
        	  /*상태바 크기변경 */
        //	   this.ALLIED_GOAL.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT"))/100 );	/* 계열     목표*/
        //	   this.NOT_ALLIED_GOAL.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT"))/100 );	/* 비계열   목표*/
        //	   this.ALLIED_RESULT.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT"))/100 );	/* 계열     실적*/
        //	   this.NOT_ALLIED_RESULT.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT"))/100 );	/* 비계열   실적*/
        	  // this.GOAL_TOTAL.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT"))/100 );	/* 계열     목표합*/	   
        	 //  this.RESULT_TOTAL.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT"))/100 );/* 비계열   실적합*/
        	   
        	    //5 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT")) 
        	   
        	   this.ALLIED_GOAL.set_height( 80 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT")) );	/* 계열     목표*/
        	   this.ALLIED_RESULT.set_height( 80 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT")) );	/* 계열     실적*/
        	   	
               this.NOT_ALLIED_GOAL.set_height( 40* this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT"))  );	/* 비계열   목표*/
        	   this.NOT_ALLIED_RESULT.set_height(40 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT")) );	/* 비계열   실적*/
        	   	
        	   this.GOAL_TOTAL.set_height( 120 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")));
        	   this.RESULT_TOTAL.set_height( 120 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")));
        	  
        	   /*목표 숫자 변경*/
        	   this.TOTAL_NUMBER.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")) );
        	   this.ALLIED_NUMBER.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT")) );
        	   this.NOT_ALLIED_NUMBER.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT")) );
        	   
        	   
        	   if(MI01_AMOT == 0 || MI04_AMOT == 0) {
        	   this.ALLIED_RESULT.set_text(   this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT"))  );
        	   }
        	   else
        	   {
        	   /*실적 숫자 변경*/
        	   //this.ALLIED_RESULT.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT")) );	/* 계열     실적*/
        	   this.ALLIED_RESULT.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT")) +"\r\n"+
        	   nexacro.round( this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT"))/this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT")) *100 )
        	   +"%");	/* 계열     실적*/
        	   }
        	   
        	   if(MI05_AMOT == 0 || MI02_AMOT == 0) {
               this.NOT_ALLIED_RESULT.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT"))  );	   	  
        	   }
        	   else
        	   {
        	   this.NOT_ALLIED_RESULT.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT")) +"\r\n"+
        	   nexacro.round( this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT"))/this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT")) *100 )
        	   +"%" );	/* 비계열   실적*/
        	   }
        	   
        	   if(MI06_AMOT == 0 || MI03_AMOT == 0) {
               this.RESULT_TOTAL.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")) );	   
        	   }
        	   else
        	   {
        	   this.RESULT_TOTAL.set_text(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")) +"\r\n"+
        	   nexacro.round( this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT"))/this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")) *100 )
        	   +"%");/* 비계열   실적합*/	
        	   }
        	   
        	   /*실적  툴팁*/
        	   if(MI01_AMOT == 0 || MI04_AMOT == 0) {
        	   this.ALLIED_NUMBER.set_tooltiptext(
        	    this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT"))
        	   );
        	   }
        	   else
        	   {
        	    this.ALLIED_NUMBER.set_tooltiptext(
        	    this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT")) +"\r\n"+
        	    nexacro.round( this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT"))/this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT")) *100 )
        	    +"%"
        	    );
        	    }
        	    
        	    if(MI05_AMOT == 0 || MI02_AMOT == 0) {
        	    this.NOT_ALLIED_NUMBER.set_tooltiptext(
        	    this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT"))	 
        	        );
        	    }
        	   else
        	   {
        	    this.NOT_ALLIED_NUMBER.set_tooltiptext(
        	    this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT")) +"\r\n"+
        	    nexacro.round( this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT"))/this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT")) *100 )
        	    +"%"
        	    );
        	    }
        	    
        	     if(MI06_AMOT == 0 || MI03_AMOT == 0) {
        	     
        	     this.TOTAL_NUMBER.set_tooltiptext(
        	    this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT"))	    
        	    );
        	    
        	     }
        	     else
        	     {
        	    this.TOTAL_NUMBER.set_tooltiptext(
        	    this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")) +"\r\n"+
        	    nexacro.round( this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT"))/this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")) *100 )
        	    +"%"
        	    );
        	    }
        	    
        	    
        	    
        	    /*목표 숫자 위치 변경*/
               this.ALLIED_NUMBER.set_height(80 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT"))  * 2  + 12);
               this.NOT_ALLIED_NUMBER.set_height(40 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT")) * 2 + 12);
               this.TOTAL_NUMBER.set_height(120 * this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")) / this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")) * 2  + 12 );
        	    
        	    
        	    //this.ALLIED_NUMBER.set_tooltiptext(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT")));
        	    //this.NOT_ALLIED_NUMBER.set_tooltiptext(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT")));
        	    //this.TOTAL_NUMBER.set_tooltiptext(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")));	    
        	    
        	    //this.RESULT_TOTAL.set_tooltiptext(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")));
        	  
        	   //this.ALLIED_RESULT.set_tooltiptext(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI04_AMOT")));
        	  
        	   //this.NOT_ALLIED_RESULT.set_tooltiptext(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI05_AMOT")));
        	   //this.GOAL_TOTAL.set_tooltiptext(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT")));
        	   //this.RESULT_TOTAL.set_tooltiptext(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI06_AMOT")));
        	
        	   /*목표 숫자 위치 변경*/
        	   //this.TOTAL_NUMBER.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI03_AMOT"))/100 * 2  + 12 );
        	   //this.ALLIED_NUMBER.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI01_AMOT"))/100 * 2  + 12);
        	   //this.NOT_ALLIED_NUMBER.set_height(this.fnc_Trim(this.dsTR_MONEPL.getColumn(0, "MI02_AMOT"))/100 * 2 + 12);
             
               

               
               
        	}
        }

        /*
         * 화면의 표시내용을 갱신한다.
         */
        this.fn_RefreshForm = function() {

        	trace(this.name + " " + this.titletext);
        	this.fn_FormLoadSetting(this, null);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTR_MONEPL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);

        };

        this.loadIncludeScript("statsbar_custom.xfdl");

       
    };
}
)();
