//XJS=lib_script_common_new.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*************************************************************************************************
         * Comment : Grid에서 헤더를 클릭하면 해당 셀들이 소트된다
         *           (ASC,DESC 토글)
         *
         *        1.GridObj : 그리드 콤포넌트의 이름 (예 : gridInsert)
         *        2.dsObj   : 데이터셋 콤포넌트의 이름 (예 : dsGrid01)
         *        3.nCell   : 해당셀번호 (HeadClick 이벤트에서 받은 nCell을 그대로 지정)
         **************************************************************************************************/
        this.fnc_GridSort = function (Gridobj,dsObj,nCell)
        {
        	var CONST_ASC_MARK = "▲";
        	var CONST_DESC_MARK = "▼";

        	var str_head,isASC,i;
        	var head_col = 0;
        	var columns = "";
        	this.setWaitCursor(true);

        	str_head = Gridobj.getCellProperty("head", nCell, "text");
        	isASC = (this.lookupFunc("gfn_IndexOf").call(str_head, CONST_ASC_MARK) == -1); //dsObj = object(Gridobj.binddataset);

        	// Sort : 선택한 title cell과 같은 위치(col값이 같은)인 body cell 기준. head가 여러 Line 일 경우, 해당위치 body 찾아서
        	head_col = Gridobj.getCellProperty("head", nCell, "col");
        	for (i = 0; i < Gridobj.getCellCount("body"); i++) 
        	{
        		if (Gridobj.getCellProperty("body", i, "col") == head_col) 
        		{
        			columns += "," + Gridobj.getCellProperty("body", i, "colid");
        		}
        	}

        	if (this.gfn_Length(columns) > 0) 
        	{
        		columns = this.lookupFunc("gfn_Right").call(columns, this.gfn_Length(columns) - 1);
        	}

        	trace("sort columns : " + columns);
        	dsObj.set_keystring(("S:" + columns));

        	// dsObj.sort(columns, isASC);

        	// 해당하는 셀의 타이틀의 소트마크를 추가 또는 변경한다.
        	if (isASC) 
        	{
        		str_head = this.lookupFunc("gfn_Replace").call(str_head, CONST_DESC_MARK, "") + CONST_ASC_MARK;
        	}
        	else 
        	{
        		str_head = this.lookupFunc("gfn_Replace").call(str_head, CONST_ASC_MARK, "") + CONST_DESC_MARK;
        	}

        	Gridobj.setCellProperty("head", nCell, "text", str_head);

        	// 해당하는 셀 이외의 해더 타이틀의 소트마크를 제거한다.
        	for (i = 0; i < Gridobj.getCellCount("head"); i++) 
        	{
        		if (nCell == i) 
        		{
        			continue;
        		}

        		str_head = Gridobj.getCellProperty("head", i, "text");

        		if (this.lookupFunc("gfn_Pos").call(str_head, CONST_ASC_MARK) > -1) 
        		{
        			Gridobj.setCellProperty("head", i, "text", this.lookupFunc("gfn_Replace").call(str_head, CONST_ASC_MARK, ""));
        		}
        		else if (this.lookupFunc("gfn_Pos").call(str_head, CONST_DESC_MARK) > -1) 
        		{
        			Gridobj.setCellProperty("head", i, "text", this.lookupFunc("gfn_Replace").call(str_head, CONST_DESC_MARK, ""));
        		}
        	}

        	this.setWaitCursor(false);

        	if (isASC) 
        	{
        		return CONST_ASC_MARK;
        	}
        	else 
        	{
        		return CONST_DESC_MARK;
        	}
        }

        
        /*********************************************************************
         *  Export To Excel                                                   *
         *    1)  Error Code, Error Message                                   *
         *********************************************************************/
        this.fnc_ToExcel = function (grdiObj)
        {
        	var ExtObj0 = new ExportObject;

        	ExtObj0.exporttype = this.lookup("ExportTypes").EXCEL;
        	ExtObj0.activepagename = "sheet1";
        	// var nIndex = ExtObj0.addExportItem(ExportItemTypes.GRID, grdiObj, "sheet1!A1" );
        	var nIndex = ExtObj0.addExportItem(this.lookup("ExportItemTypes").GRID, grdiObj, "Sheet1!A1", "allband", "allrecord", "nosuppress");
        	trace("fnc_ToExcel EXPORT Count --- : " + nIndex);

        	ExtObj0.exportExcel();

        	// ExtObj0.clear();

        	// var arrContents = object(sFormName).components();     //MDI에서 활성된 폼의 Control을 배열에 할당한다.
        	// var sDataset    = '';                                 //그리드의 Bind 된 Dataset Name
        	// 
        	// for(var i=0; i < length(arrContents); i++ ) {         //MID Form에서 Componect 만큼 돌면서
        	// 
        	// if (arrContents[i].getType() = "Grid") {          //Grid만 찾아 냄
        	// 
        	// sDataset = arrContents[i].BindDataset;        //해당 그리드의 Bind된 DataSet명 구하기
        	// if (fnc_DatasetChangeCheck(sDataset)) {       //해당 자료의 변경 여부 체크
        	// fnc_Message("M1072",'엑셀저장');
        	// return;
        	// }
        	// 
        	// }
        	// 
        	// }
        	// 
        	// //Export 할 화면 Call
        	// Dialog("common::comExcel.xml", "sTopWindow="+ sFormName, 1054, 834, "titlebar=true", -1, -1);
        	// 
        }

        /*********************************************************************
         *  팦업화면에서 필요한 콤보 데이터셋의 컬럼을 만든다                  *
         *    - 2010.10.22 (김석두)                                           *
         *********************************************************************/
        this.fnc_setDatasetColumn = function (obj,xmlStr)
        {
        	var xmlText = '<root>' + xmlStr + '</root>';

        	trace(xmlText);

        	var parser = new DomParser;
        	parser.onParseError = this.fnc_parseErrorHandler;

        	var xmlDoc = parser.parseFromString(xmlText);

        	var nodes = xmlDoc.getElementsByTagName("ColumnInfo");
        	for (this.i = 0; this.i < nodes.length; this.i++) 
        	{
        		trace("Node Name : " + nodes[this.i].nodeName);
        		var xChild = nodes[this.i].childNodes;

        		for (this.i = 0; this.i < xChild.length; this.i++) 
        		{
        			trace("xChild Node Name: " + xChild[this.i].nodeName);
        			if (xChild[this.i].nodeName == "Column") 
        			{
        				var attrs = xChild[this.i].attributes;

        				var id = "";
        				var type = "";
        				var size = "";

        				for (this.j = 0; this.j < attrs.length; this.j++) 
        				{
        					var attr = attrs.get_item(this.j);
        					trace("attr Name: " + attr.name);
        					trace("attr value: " + attr.value);

        					if (attr.name == "id") 
        					{
        						id = attr.value;
        					}
        					else if (attr.name == "type") 
        					{
        						type = attr.value;
        					}
        					else if (attr.name == "size") 
        					{
        						size = attr.value;
        					}
        				}

        				trace("컬럼 id : " + id + " 컬럼 type : " + type + " 컬럼 size : " + size);

        				obj.addColumn(id, type, size);
        			}
        		}
        	}

        	var nodes = xmlDoc.getElementsByTagName("Rows");

        	trace("Node Name : " + nodes[0].nodeName);
        	var xChild = nodes[0].childNodes;

        	for (this.i = 0; this.i < xChild.length; this.i++) 
        	{
        		trace("xChild Node Name: " + xChild[this.i].nodeName);

        		var yChild = xChild[this.i].childNodes;
        		var nRow = obj.addRow();

        		for (this.j = 0; this.j < yChild.length; this.j++) 
        		{
        			var columnName = yChild[this.j].attributes.get_item(0).value;
        			var columnValue = yChild[this.j].textContent;

        			trace("columnName  : " + columnName + " columnValue : " + columnValue);

        			obj.setColumn(nRow, columnName, columnValue);
        		}
        	}
        }

        this.fnc_parseErrorHandler = function (parser,parseException)
        {
        	var errStr = "콤보데이터셋 컬럼 생성시 에러: "
        		 + parseException.message
        		 + " (line: " + parseException.line
        		 + ", column: " + parseException.column + ")";

        	trace(errStr);

        	this.fnc_Message("M1046", errStr);
        }

        /**********************************************************************************************
         마이 콤보, 팝업 xml을 X 로 변환 전 xml 정리한다.
         2010.11.25 김석두
         ***********************************************************************************************/
        this.fnc_getXmlText = function (txtSource)
        {
        	trace("fnc_getXmlText txtSource " + txtSource);

        	var srcText = this.lookupFunc("gfn_Replace").call(txtSource, '"', '');
        	srcText = this.lookupFunc("gfn_Replace").call(srcText, '= ', '=');
        	srcText = this.lookupFunc("gfn_Replace").call(srcText, '=', '="');

        	var xmlText = "";

        	var equalFound = false;

        	for (this.i = 0; this.i < srcText.length; this.i++) 
        	{
        		var chr = srcText.charAt(this.i);

        		if (chr == '=') 
        		{
        			equalFound = true;
        		}
        		else if (equalFound) 
        		{
        			if (chr == ' ' || chr == '/' || chr == '>') 
        			{
        				xmlText += '"';
        				equalFound = false;
        			}
        		}

        		xmlText += srcText.charAt(this.i);
        	}

        	trace("fnc_getXmlText xmlText " + xmlText);

        	return xmlText;
        }

        /**********************************************************************************************
         마이 콤보 xml을 X 로 변환
         2010.11.25 김석두
         ***********************************************************************************************/
        this.fnc_comboXml = function (txtSource)
        {
        	if (this.gfn_Length(this.gfn_Trim(txtSource)) < 1) 
        	{
        		return "";
        	}

        	var xmlText = this.fnc_getXmlText(txtSource);

        	var parser = new DomParser;
        	parser.onParseError = this.fnc_parseErrorHandler;

        	var xmlDoc = parser.parseFromString(xmlText);

        	var targetStr = "";
        	var feed = String.fromCharCode(13);

        	targetStr += '<ColumnInfo>';
        	targetStr += feed;

        	var nodes = xmlDoc.getElementsByTagName("colinfo");

        	for (this.i = 0; this.i < nodes.length; this.i++) 
        	{
        		targetStr += this.lookupFunc("gfn_Space").call(4) + '<Column ';

        		var attrs = nodes[this.i].attributes;

        		for (this.j = 0; this.j < attrs.length; this.j++) 
        		{
        			var attr = attrs.get_item(this.j);
        			if (this.lookupFunc("gfn_ToLower").call(attr.name) == 'id') 
        			{
        				targetStr += ' id=' + this.lookupFunc("gfn_Quote").call(attr.value);
        			}
        			if (this.lookupFunc("gfn_ToLower").call(attr.name) == 'type') 
        			{
        				var typeValue = this.lookupFunc("gfn_Quote").call(attr.value);
        				if (typeValue == 'DECIMAL') 
        				{
        					typeValue = 'BIGDECIMAL';
        				}
        				targetStr += ' type=' + typeValue;
        			}
        			if (this.lookupFunc("gfn_ToLower").call(attr.name) == 'size') 
        			{
        				targetStr += ' size=' + this.lookupFunc("gfn_Quote").call(attr.value);
        			}
        		}

        		targetStr += '/>';
        		targetStr += feed;
        	}

        	targetStr += '</ColumnInfo>';
        	targetStr += feed;

        	targetStr += '<Rows>';
        	targetStr += feed;

        	var nodes = xmlDoc.getElementsByTagName("record");

        	for (this.i = 0; this.i < nodes.length; this.i++) 
        	{
        		targetStr += this.lookupFunc("gfn_Space").call(4) + '<Row>';
        		targetStr += feed;

        		var xChild = nodes[this.i].childNodes;

        		for (this.j = 0; this.j < xChild.length; this.j++) 
        		{
        			targetStr += this.lookupFunc("gfn_Space").call(8)
        				 + '<Col id=' + this.lookupFunc("gfn_Quote").call(xChild[this.j].nodeName) + '>'
        				 + xChild[this.j].textContent
        				 + '</Col>' + feed;
        		}

        		targetStr += this.lookupFunc("gfn_Space").call(4) + '</Row>' + feed;
        	}

        	targetStr += '</Rows>' + feed;

        	return targetStr;
        }

        /**********************************************************************************************
         마이그리드 xml을 X 로 변환
         2010.11.25 김석두
         ***********************************************************************************************/
        this.fnc_gridXml = function (txtSource)
        {
        	var xmlText = this.fnc_getXmlText(txtSource);

        	var parser = new DomParser;
        	parser.onParseError = this.fnc_parseErrorHandler;

        	var xmlDoc = parser.parseFromString(xmlText);

        	var targetStr = "";
        	var feed = String.fromCharCode(13);

        	targetStr += '<Formats>' + feed;
        	targetStr += this.lookupFunc("gfn_Space").call(4) + '<Format id="default">' + feed;
        	targetStr += this.lookupFunc("gfn_Space").call(8) + '<Columns>' + feed;

        	var nodes = xmlDoc.getElementsByTagName("columns");

        	for (this.i = 0; this.i < nodes.length; this.i++) 
        	{
        		var xChild = nodes[this.i].childNodes;

        		for (this.j = 0; this.j < xChild.length; this.j++) 
        		{
        			targetStr += this.lookupFunc("gfn_Space").call(12) + '<Column ';

        			var attrs = xChild[this.j].attributes;

        			for (this.k = 0; this.k < attrs.length; this.k++) 
        			{
        				var attr = attrs.get_item(this.k);
        				if (this.lookupFunc("gfn_ToLower").call(attr.name) == 'width') 
        				{
        					targetStr += ' size=' + this.lookupFunc("gfn_Quote").call(attr.value);
        				}
        			}

        			targetStr += '/>';
        			targetStr += feed;
        		}
        	}

        	targetStr += this.lookupFunc("gfn_Space").call(8) + '</Columns>' + feed;

        	targetStr += this.lookupFunc("gfn_Space").call(8) + '<Rows>' + feed;
        	targetStr += this.lookupFunc("gfn_Space").call(12) + '<Row size="24" band="head"/>' + feed;
        	targetStr += this.lookupFunc("gfn_Space").call(12) + '<Row size="24"/>' + feed;
        	targetStr += this.lookupFunc("gfn_Space").call(8) + '</Rows>' + feed;

        	targetStr += this.lookupFunc("gfn_Space").call(8) + '<Band id="head">' + feed;

        	var nodes = xmlDoc.getElementsByTagName("head");

        	for (this.i = 0; this.i < nodes.length; this.i++) 
        	{
        		var xChild = nodes[this.i].childNodes;

        		for (this.i = 0; this.i < xChild.length; this.i++) 
        		{
        			targetStr += this.lookupFunc("gfn_Space").call(12) + '<Cell ';

        			if (this.i != 0) 
        			{
        				targetStr += 'col=' + this.lookupFunc("gfn_Quote").call(this.i);
        			}

        			var attrs = xChild[this.i].attributes;

        			for (this.j = 0; this.j < attrs.length; this.j++) 
        			{
        				var attr = attrs.get_item(this.j);
        				if (this.lookupFunc("gfn_ToLower").call(attr.name) == 'text') 
        				{
        					targetStr += ' text=' + this.lookupFunc("gfn_Quote").call(attr.value);
        				}
        			}

        			targetStr += '/>' + feed;
        		}
        	}

        	targetStr += this.lookupFunc("gfn_Space").call(8) + '</Band>' + feed;

        	targetStr += this.lookupFunc("gfn_Space").call(8) + '<Band id="body">' + feed;

        	var nodes = xmlDoc.getElementsByTagName("body");

        	for (this.i = 0; this.i < nodes.length; this.i++) 
        	{
        		var xChild = nodes[this.i].childNodes;

        		for (this.i = 0; this.i < xChild.length; this.i++) 
        		{
        			targetStr += this.lookupFunc("gfn_Space").call(12) + '<Cell ';

        			if (this.i != 0) 
        			{
        				targetStr += 'col=' + this.lookupFunc("gfn_Quote").call(this.i);
        			}

        			var attrs = xChild[this.i].attributes;

        			for (this.j = 0; this.j < attrs.length; this.j++) 
        			{
        				var attr = attrs.get_item(this.j);
        				if (attr.name == 'colid') 
        				{
        					targetStr += ' text=' + this.lookupFunc("gfn_Quote").call('bind:' + attr.value);
        				}
        				if (attr.name == 'display') 
        				{
        					targetStr += ' displaytype=' + this.lookupFunc("gfn_Quote").call(attr.value);
        				}
        				if (attr.name == 'align') 
        				{
        					targetStr += ' style=' + this.lookupFunc("gfn_Quote").call('align:' + attr.value + ' middle;');
        				}
        			}

        			targetStr += '/>' + feed;
        		}
        	}

        	targetStr += this.lookupFunc("gfn_Space").call(8) + '</Band>' + feed;
        	targetStr += this.lookupFunc("gfn_Space").call(4) + '</Format>' + feed;

        	targetStr += '</Formats>';

        	return targetStr;
        }

        /**********************************************************************************************
         xml parseErrorHandler
         2010.11.25 김석두
         ***********************************************************************************************/
        this.fnc_parseErrorHandler = function (parser,parseException)
        {
        	trace("Parse Error: " + parseException.message + " (line: " + parseException.line + ", column: " + parseException.column + ")");
        }

        
        /*************************************************************************************************
         * Comment: 법인 번호 체크로직
         * para   :
         *        1. strNum : 법인 번호 13자리
         **************************************************************************************************/
        this.fnc_CorpNumberCheck = function (strNum)
        {
        	strNum = this.gfn_Trim(strNum);

        	if (nexacro.isNumeric(strNum) == false) 
        	{
        		return false;
        	}
        	// 숫자   체크
        	if (this.gfn_Length(this.gfn_Trim(strNum)) != 13) 
        	{
        		return false;
        	}
        	// 자리수 체크

        	var sumMod = 0;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 0, 1)) * 1;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 1, 1)) * 2;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 2, 1)) * 1;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 3, 1)) * 2;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 4, 1)) * 1;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 5, 1)) * 2;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 6, 1)) * 1;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 7, 1)) * 2;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 8, 1)) * 1;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 9, 1)) * 2;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 10, 1)) * 1;
        	sumMod += nexacro.toNumber(this.gfn_SubStr(strNum, 11, 1)) * 2;

        	var lastMod = nexacro.toNumber(this.gfn_SubStr(strNum, 12, 1));

        	var chkSum = sumMod % 10;
        	chkSum = 10 - chkSum;

        	if (chkSum != lastMod) 
        	{
        		return false;
        	}
        	return true;
        }

        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
