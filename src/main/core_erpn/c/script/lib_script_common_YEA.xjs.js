﻿//XJS=lib_script_common_YEA.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***********************************************************************************************
           함수명   : fnc_GetComboDs_YEA()
           설명     : 공통코드 콤보 설정
         ***********************************************************************************************/
        this.fnc_GetComboDs_YEA = function(oDataSet) {

        	// Combo List를 가지고 있는 DataSet의 이름 및 OBJECT 유무 체크
        	if (!this.isValidObject(oDataSet) || oDataSet.name != "dsCombo") {
        		this.fnc_Message("M1011");
        		return;
        	}

        	var sPACKAGENAME = "ComMakeCombo";
        	var sMethodName  = "GetCommCode_YEA";
        	var sInDataSet   = oDataSet.name + "=" + oDataSet.name;
        	var sOutDataSet  = "";
        	var sDataSetName = "";

        	for (var i = 0; i < oDataSet.getRowCount(); i++) {
        		sDataSetName = oDataSet.getColumn(i, "DSNAME");
        		this.fnc_CreateCommonCodeDataset(this.fnc_Trim(sDataSetName));
        		sOutDataSet += sDataSetName + "=" + sDataSetName + " ";
        	}

        	this.sArgument  = " pgm="    + this.fnc_Quote(sPACKAGENAME);
        	this.sArgument += " action=" + this.fnc_Quote(sMethodName);

        	this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, this.sArgument, "fn_CallBack", false);

        };

        /***********************************************************************************************
           함수명   : fnc_CommonCodeInnerBind_YEA()
           설명     : 공통코드 콤보 Component Inner Binding
         ***********************************************************************************************/
        this.fnc_CommonCodeInnerBind_YEA = function(arrParam) {

        	var iCount      = arrParam.length;
        	var arrParamCol = new Array();
        	var iColIndex   = 0;

        	// 전체 컴포넌트 바인딩 처리
        	for (var i = 0; i < iCount; i++) {
        		
        		// 세부 항목 Split(1:콤보, 그리드 구분, 2:Bind 할 Componect명, 3:Bind 될 Dataset명, 그리드 컬럼명
        		arrParamCol = this.fnc_Split(arrParam[i], ",");

        		if (arrParamCol.length == 4) {
        			
        			// 일반 콤보일 때 Bind 처리
        			if (this.fnc_ToUpper(arrParamCol[0]) == "COMBO") {

        				eval("this." + this.fnc_Trim(arrParamCol[1])).set_codecolumn("YEA_COMD_CD");
        				eval("this." + this.fnc_Trim(arrParamCol[1])).set_datacolumn("YEA_COMD_NM");
        				eval("this." + this.fnc_Trim(arrParamCol[1])).set_innerdataset(this.fnc_Trim(arrParamCol[2]));
        				eval("this." + this.fnc_Trim(arrParamCol[1])).set_index(0);

        			// Grid의 Column이 콤보 일 때 처리
        			} else if (this.fnc_ToUpper(arrParamCol[0]) == "GRID") {

        				iColIndex = eval("this." + this.fnc_Trim(arrParamCol[1])).getBindCellIndex("body", this.fnc_Trim(arrParamCol[3]));
        				eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combodataset", this.fnc_Trim(arrParamCol[2]));
        				eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combocodecol", "YEA_COMD_CD");
        				eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combodatacol", "YEA_COMD_NM");
        			
        			}
        		} else {
        			
        			this.fnc_Message("M1046", i + 1 + "번째 공통코드 Binding에 인자가 맞지 않습니다. 정확이 4개의 항목을 확인하세요!");
        			continue;
        			
        		}
        		
        	}
        	
        };

        /***********************************************************************************************
           함수명   : fnc_GetUserComboDs_YEA()
           설명     : 사용자 콤보 설정
         ***********************************************************************************************/
        this.fnc_GetUserComboDs_YEA = function(oDataSet) {
        	
        	// Combo List를 가지고 있는 DataSet의 이름 및 OBJECT 유무 체크
        	if (!this.isValidObject(oDataSet) || oDataSet.name != "dsUserCombo") {
        		this.fnc_Message("M1011");
        		return;
        	}

        	var sPACKAGENAME = "CommMakeCombo";
        	var sMethodName  = "GetUserComboCode_YEA";
        	var sInDataSet   = oDataSet.name + "=" + oDataSet.name;
        	var sOutDataSet  = "";
        	var sDataSetName = "";
        	var sArgument    = "";

        	for (var i = 0; i < oDataSet.rowcount; i++) {
        		sDataSetName = oDataSet.getColumn(i, "DSNAME");
        		this.fnc_CreateCommonCodeDataset(this.fnc_Trim(sDataSetName));
        		sOutDataSet += sDataSetName + "=" + sDataSetName + " ";
        	}

        	sArgument  = " pgm="    + this.fnc_Quote(sPACKAGENAME);
        	sArgument += " action=" + this.fnc_Quote(sMethodName);
        	this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        };

        /***********************************************************************************************
           함수명   : fnc_GetUserComboSingle_YEA()
           설명     : 사용자 콤보 단일건
         ***********************************************************************************************/
        this.fnc_GetUserComboSingle_YEA = function(arrParam1,arrParam2) {

        	this.fnc_CreateCommonCodeDataset(arrParam1[0]);

        	var sPACKAGENAME = "CommMakeCombo";
        	var sMethodName  = "GetUserComboCodeSingle_YEA";
        	var sInDataSet   = "";
        	var sOutDataSet  = this.fnc_Trim(arrParam1[0]) + "=" + this.fnc_Trim(arrParam1[0]);
        	var sArgument    = " pgm="      + this.fnc_Quote(sPACKAGENAME);
        		sArgument   += " action="   + this.fnc_Quote(sMethodName);
        		sArgument   += " DSNAME="   + arrParam1[0];   //Dataset ID
        		sArgument   += " COMBOID="  + arrParam1[1];   //콤보 ID
        		sArgument   += " HEADFLAG=" + arrParam1[2];   //HEAD Flag
        		sArgument   += " USEYSNO="  + arrParam1[3];   //Use YSNO
        		sArgument   += " PARAM="    + arrParam1[4];   //조회 조건

        	this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	this.fnc_UserComboInnerBind(arrParam2);

        };

        /***********************************************************************************************
           함수명   : fnc_UserComboInnerBind_YEA()
           설명     : 사용자 콤보 Component Inner Binding
         ***********************************************************************************************/
        this.fnc_UserComboInnerBind_YEA = function(arrParam) {

        	var iCount      = arrParam.length;
        	var arrParamCol = new Array();
        	var iColIndex   = 0;

        	// 전체 컴포넌트 바인딩 처리
        	for (var i = 0; i < iCount; i++) {
        		
        		// 세부 항목 Split(1:콤보, 그리드 구분, 2:Bind 할 Componect명, 3:Bind 될 Dataset명, 그리드 컬럼명
        		arrParamCol = this.fnc_Split(arrParam[i], ",");
        		
        		if (arrParamCol.length == 4) {

        			// 일반 콤보일 때 Bind 처리
        			if (this.fnc_ToUpper(arrParamCol[0]) == "COMBO") {
        				
        				eval("this." + this.fnc_Trim(arrParamCol[1])).set_codecolumn("YEA_COMD_CD");
        				eval("this." + this.fnc_Trim(arrParamCol[1])).set_datacolumn("YEA_COMD_NM");
        				eval("this." + this.fnc_Trim(arrParamCol[1])).set_innerdataset(this.fnc_Trim(arrParamCol[2]));
        				eval("this." + this.fnc_Trim(arrParamCol[1])).set_index(0);

        			// Grid의 Column이 콤보 일 때 처리
        			} else if (this.fnc_ToUpper(arrParamCol[0]) == "GRID") {

        				iColIndex = eval("this." + this.fnc_Trim(arrParamCol[1])).getBindCellIndex("body", this.fnc_Trim(arrParamCol[3]));
        				eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combodataset", this.fnc_Trim(arrParamCol[2]));
        				eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combocodecol", "YEA_COMD_CD");
        				eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combodatacol", "YEA_COMD_NM");

        			}

        		} else {

        			this.fnc_Message("M1046", i + 1 + "번째 공통코드 Binding에 인자가 맞지 않습니다. 정확이 4개의 항목을 확인하세요!");
        			continue;

        		}

        	}

        };
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
