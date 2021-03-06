﻿//XJS=lib_script_multilang.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /****************************************************************************************************
         * # File : lib_script_multilang.xjs	다국어처리 공통 스크립트
         * 
         * # Modification Information
         * --------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * --------------------------------------------------------------------------------------------------
         *   2016.12.13		jsh			Initial Created.
         * --------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *  다국어 언어 처리를 위한 스크립트 함수입니다.
         *  
         *  
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR**JSH***/
         
         
         /**
          * 해당 폼의 라벨 등을 시스템 언어코드 셋에 맞게 변환하여 표시한다.
          * 
          * @param {Object} oForm 시스템 언어코드에 맞춰 변환하고자 하는 Form 객체
          */
        this.fnc_SetFormLanguage = function(oForm) {
        	
        	var oLangDs = this.dsLangSet;
        	
        	// 언어코드셋 변환을 위한 데이터셋이 정의되어 있지 않다면 동적으로 생성
        	if (!oLangDs) {
        		
        		this.dsLangSet = new Dataset;
        		oLangDs = this.dsLangSet;
        		oLangDs.addColumn("SYST_LNCD", "string");	// 시스템언어코드
        		oLangDs.addColumn("MTLN_TGTY", "string");	// 다국어대상유형
        		oLangDs.addColumn("MTLN_DTCD", "string");	// 다국어자료코드
        		oLangDs.addColumn("MTLN_DDCD", "string");	// 다국어세부자료코드
        		oLangDs.addColumn("OBJX_TYPE", "string");	// 다국어적용타입코드(컴포넌트 : COMP , 그리드 : GRID)
        		oLangDs.addColumn("APLY_OBNM", "string");	// 다국어적용객체id
        		oLangDs.addColumn("APLY_CLNM", "string");	// 다국어적용그리드컬럼(인덱스)
        		oLangDs.addColumn("APLY_TEXT", "string");	// 다국어적용 라벨 텍스트(받아오는 라벨명)
        		//oForm.addChild("dsLangSet", this.dsLangSet);
        	
        	}
        	
        	var arrChilds = null;
        	var oComp = null;
        	var row = -1;
        	
        	var props = null;
        	var labelId = "";
        	
        	if (oForm.components) {
        		
        		arrChilds = oForm.components;
        		
        		// Form 내의 컴포넌트를 탐색하며 다국어적용을 위한 라벨키를 데이터셋에 추가.
        		for(var idx = 0; idx < arrChilds.length; idx++) {
        			
        			oComp = arrChilds[idx];
        			
        			// 그리드 컴포넌트(각 셀별 다국어 라벨 키 확인)
        			if (oComp instanceof nexacro.Grid) {
        				
        				var cellCount = oComp.getCellCount("Head");
        				
        				for (var cellIdx = 0; cellIdx < cellCount ; cellIdx++ ) {
        				
        					props = oComp.getCellProperty("head", cellIdx, "accessibility");
        					if (props) labelId = props.description;
        					
        					if (labelId) {
        						row = oLangDs.addRow();
        						oLangDs.setColumn(row, "SYST_LNCD", application.GBL_LANGCD);	// 시스템언어코드
        						oLangDs.setColumn(row, "MTLN_TGTY", "LABEL");	// 다국어대상유형
        						oLangDs.setColumn(row, "MTLN_DTCD", oForm.sPACKAGENAME);	// 다국어자료코드
        						//oLangDs.setColumn(row, "APLY_TEXT", "string");	// 다국어적용 라벨 텍스트(받아오는 라벨명)
        						
        						oLangDs.setColumn(row, "MTLN_DDCD", labelId);	// 다국어세부자료코드
        						oLangDs.setColumn(row, "OBJX_TYPE", "GRID");	// 다국어적용타입코드(컴포넌트 : COMP , 그리드 : GRID)
        						oLangDs.setColumn(row, "APLY_OBNM", oComp.name);	// 다국어적용객체id
        						oLangDs.setColumn(row, "APLY_CLNM", cellIdx);	// 다국어적용그리드컬럼(인덱스)
        					}

        				}
        			
        			} else {
        				
        				props = oComp.style.accessibility;
        				if (props) labelId = props.description;
        				
        				if (labelId) {
        					row = oLangDs.addRow();
        					oLangDs.setColumn(row, "SYST_LNCD", application.GBL_LANGCD);	// 시스템언어코드
        					oLangDs.setColumn(row, "MTLN_TGTY", "LABEL");	// 다국어대상유형
        					oLangDs.setColumn(row, "MTLN_DTCD", oForm.sPACKAGENAME);	// 다국어자료코드
        					//oLangDs.setColumn(row, "APLY_TEXT", "string");	// 다국어적용 라벨 텍스트(받아오는 라벨명)
        					
        					oLangDs.setColumn(row, "MTLN_DDCD", labelId);	// 다국어세부자료코드
        					oLangDs.setColumn(row, "OBJX_TYPE", "COMP");	// 다국어적용타입코드(컴포넌트 : COMP , 그리드 : GRID)
        					oLangDs.setColumn(row, "APLY_OBNM", oComp.name);	// 다국어적용객체id
        					oLangDs.setColumn(row, "APLY_CLNM", "-1");	// 다국어적용그리드컬럼(인덱스)
        				}
        				
        			}
        			
        			props = undefined;
        			labelId = undefined;
        			cellIdx = -1;
        			
        		}
        		
        	}
        	
        	// 변경할 언어 정보가 있으면... 트랜젝션
        	if (this.dsLangSet.rowcount > 0) {
        		var sPackageName = "ComMultiLang";
        		var sMethodName = "translateLang";
        		var sInDataSet = "dsLangSet=dsLangSet:A";
        		var sOutDataSet = "dsLangSet=dsLangSet";
        		var sArgs = "";
        		var sCallbackFnName = "fn_SetFormTranslate";
        		this.fnc_TransactionCall(this, sPackageName, sMethodName, sInDataSet, sOutDataSet, sArgs, sCallbackFnName, false);
        	}
        	
        }

         /**
          * 다국어적용 서비스 콜백함수. 서버에서 변경된 다국어 정보를 Form에 반영한다.
          * 
          * @param {Object} methodName 
          */
        this.fn_SetFormTranslate = function(methodName,errorCode,errorMsg) {
        	
        	if (errorCode == -1) {
        		trace("Multilanguage transalte fail. Code : " + errorCode + ", message : " + errorMsg);
        		return;
        	}
        	
        	if (this.dsLangSet) {
        		
        		var rowCount = this.dsLangSet.rowcount;
        		var objType = "";
        		var objName = "";
        		var colIndex = -1;
        		var aplyText = "";
        		var oComp = undefined;
        		
        		for (var row = 0; row < rowCount; row++) {
        			
        			objType = this.dsLangSet.getColumn(row, "OBJX_TYPE");
        			objName = this.dsLangSet.getColumn(row, "APLY_OBNM");
        			colIndex = this.dsLangSet.getColumn(row, "APLY_CLNM");
        			aplyText = this.dsLangSet.getColumn(row, "APLY_TEXT");
        			
        			oComp = this.lookup(objName);
        			
        			if (objType == "COMP") {
        				oComp.set_text(aplyText);
        				if (oComp instanceof nexacro.Button) {
        					oComp.set_tooltiptext(aplyText);
        				}
        				//oComp.style.set_accessibility("");
        			} else if (objType == "GRID") {
        				//oComp.setCellProperty("head", colIndex, "accessibility", "");
        				oComp.setCellProperty("head", colIndex, "text", aplyText);
        			}
        			
        		}
        	
        	}

        }
         
         
         
         
         
         
         
         
         
         
         
         
         
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
