(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("WWSA0030");
                this.set_classname("WWSA0030");
                this.getSetter("inheritanceid").set("");
                this.set_titletext("소스변환");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsConvert", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"BEF_STR\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BEF_STR\">quote(</Col><Col id=\"AFT_STR\">gfn_Quote(</Col></Row><Row><Col id=\"BEF_STR\">substr(</Col><Col id=\"AFT_STR\">gfn_SubStr(</Col></Row><Row><Col id=\"BEF_STR\">decode(</Col><Col id=\"AFT_STR\">gfn_Decode(</Col></Row><Row><Col id=\"BEF_STR\">trim(</Col><Col id=\"AFT_STR\">gfn_Trim(</Col></Row><Row><Col id=\"BEF_STR\">length(</Col><Col id=\"AFT_STR\">gfn_Length(</Col></Row><Row><Col id=\"BEF_STR\">space(</Col><Col id=\"AFT_STR\">gfn_Space(</Col></Row><Row><Col id=\"BEF_STR\">(ToUpper(</Col><Col id=\"AFT_STR\">(gfn_ToUpper(</Col></Row><Row><Col id=\"BEF_STR\">toUpper(</Col><Col id=\"AFT_STR\">gfn_ToUpper(</Col></Row><Row><Col id=\"BEF_STR\">split(</Col><Col id=\"AFT_STR\">gfn_Split(</Col></Row><Row><Col id=\"BEF_STR\">indexOf(</Col><Col id=\"AFT_STR\">gfn_IndexOf(</Col></Row><Row><Col id=\"BEF_STR\">Close(</Col><Col id=\"AFT_STR\">close(</Col></Row><Row><Col id=\"BEF_STR\">.Set</Col><Col id=\"AFT_STR\">.set</Col></Row><Row><Col id=\"BEF_STR\">.Show</Col><Col id=\"AFT_STR\">.show</Col></Row><Row><Col id=\"BEF_STR\">.Get</Col><Col id=\"AFT_STR\">.get</Col></Row><Row><Col id=\"BEF_STR\">.currow</Col><Col id=\"AFT_STR\">.rowposition</Col></Row><Row><Col id=\"BEF_STR\">.RowCount()</Col><Col id=\"AFT_STR\">.rowcount</Col></Row><Row><Col id=\"BEF_STR\">right(</Col><Col id=\"AFT_STR\">gfn_Right(</Col></Row><Row><Col id=\"BEF_STR\">.Reset()</Col><Col id=\"AFT_STR\">.reset()</Col></Row><Row><Col id=\"BEF_STR\">.Clear</Col><Col id=\"AFT_STR\">.clear</Col></Row><Row><Col id=\"BEF_STR\">.BindDataset</Col><Col id=\"AFT_STR\">.binddataset</Col></Row><Row><Col id=\"BEF_STR\">replace(</Col><Col id=\"AFT_STR\">gfn_Replace(</Col></Row><Row><Col id=\"BEF_STR\">fn_End(obj)</Col><Col id=\"AFT_STR\">fn_End(obj:Button,  e:ClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_Search(obj)</Col><Col id=\"AFT_STR\">fn_Search(obj:Button,  e:ClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_Input(obj)</Col><Col id=\"AFT_STR\">fn_Input(obj:Button,  e:ClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_Delete(obj)</Col><Col id=\"AFT_STR\">fn_Delete(obj:Button,  e:ClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_Cancel(obj)</Col><Col id=\"AFT_STR\">fn_Cancel(obj:Button,  e:ClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_Save(obj)</Col><Col id=\"AFT_STR\">fn_Save(obj:Button,  e:ClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_ToExcel(obj)</Col><Col id=\"AFT_STR\">fn_ToExcel(obj:Button,  e:ClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_KeyFieldDisible(obj,nOldRow,nRow)</Col><Col id=\"AFT_STR\">fn_KeyFieldDisible(obj:Dataset, e:DSRowPosChangeEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_Print(obj)</Col><Col id=\"AFT_STR\">fn_Print(obj:Button,  e:ClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fn_FormLoadSetting(obj)</Col><Col id=\"AFT_STR\">fn_FormLoadSetting(obj:Form, e:LoadEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fnc_TransactionCall(this, sMethodName</Col><Col id=\"AFT_STR\">fnc_TransactionCall(this, sPACKAGENAME, sMethodName</Col></Row><Row><Col id=\"BEF_STR\">fn_GridSort(obj,nCell,nX,nY)</Col><Col id=\"AFT_STR\">fn_GridSort(obj:Grid, e:GridClickEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fnc_GridSort(obj, this.all[obj.BindDataset), nCell)</Col><Col id=\"AFT_STR\">fnc_GridSort(obj, obj.binddataset, e.col)</Col></Row><Row><Col id=\"BEF_STR\">obj.GetRowType(</Col><Col id=\"AFT_STR\">GetRowType(obj,</Col></Row><Row><Col id=\"BEF_STR\">SetWaitCursor</Col><Col id=\"AFT_STR\">setWaitCursor</Col></Row><Row><Col id=\"BEF_STR\">.GetCellProp(</Col><Col id=\"AFT_STR\">.getCellProperty(</Col></Row><Row><Col id=\"BEF_STR\">.getCellProp(</Col><Col id=\"AFT_STR\">.getCellProperty(</Col></Row><Row><Col id=\"BEF_STR\">.SetCellProp(</Col><Col id=\"AFT_STR\">.setCellProperty(</Col></Row><Row><Col id=\"BEF_STR\">.setCellProp(</Col><Col id=\"AFT_STR\">.setCellProperty(</Col></Row><Row><Col id=\"BEF_STR\">isValid(</Col><Col id=\"AFT_STR\">isValidObject(</Col></Row><Row><Col id=\"BEF_STR\">.GetRowCount()</Col><Col id=\"AFT_STR\">.rowcount</Col></Row><Row><Col id=\"BEF_STR\">.ID</Col><Col id=\"AFT_STR\">.name</Col></Row><Row><Col id=\"BEF_STR\">object(</Col><Col id=\"AFT_STR\">this.all[</Col></Row><Row><Col id=\"BEF_STR\">.CodeColumn</Col><Col id=\"AFT_STR\">.codecolumn</Col></Row><Row><Col id=\"BEF_STR\">.DataColumn </Col><Col id=\"AFT_STR\">.datacolumn</Col></Row><Row><Col id=\"BEF_STR\">.Index</Col><Col id=\"AFT_STR\">.index</Col></Row><Row><Col id=\"BEF_STR\">.InnerDataset</Col><Col id=\"AFT_STR\">.innerdataset</Col></Row><Row><Col id=\"BEF_STR\">array()</Col><Col id=\"AFT_STR\">new Array()</Col></Row><Row><Col id=\"AFT_STR\">.moveToNextCell</Col><Col id=\"BEF_STR\">.MoveToNextCell</Col></Row><Row><Col id=\"BEF_STR\">GetNextComponent</Col><Col id=\"AFT_STR\">getNextComponent</Col></Row><Row><Col id=\"BEF_STR\">.CurrentCell</Col><Col id=\"AFT_STR\">.currentcell</Col></Row><Row><Col id=\"BEF_STR\">.Value</Col><Col id=\"AFT_STR\">.value</Col></Row><Row><Col id=\"BEF_STR\">.FireEvent</Col><Col id=\"AFT_STR\">.enableevent</Col></Row><Row><Col id=\"BEF_STR\">.js</Col><Col id=\"AFT_STR\">.xjs</Col></Row><Row><Col id=\"BEF_STR\">#include</Col><Col id=\"AFT_STR\">include</Col></Row><Row><Col id=\"BEF_STR\">script::lib_script_common.js</Col><Col id=\"AFT_STR\">lib::lib_common.xjs</Col></Row><Row><Col id=\"BEF_STR\">.Enable</Col><Col id=\"AFT_STR\">.enable</Col></Row><Row><Col id=\"BEF_STR\">.Readonly</Col><Col id=\"AFT_STR\">.readonly</Col></Row><Row><Col id=\"BEF_STR\">.Value</Col><Col id=\"AFT_STR\">.value</Col></Row><Row><Col id=\"BEF_STR\">.UserData</Col><Col id=\"AFT_STR\">.userData</Col></Row><Row><Col id=\"BEF_STR\">.GetRowType(</Col><Col id=\"AFT_STR\"> GetRowType(dsXX,</Col></Row><Row><Col id=\"BEF_STR\">fn_HotKey(obj,objSenderObj,nChar,bShift,bControl,bAlt,nLLParam,nHLParam)</Col><Col id=\"AFT_STR\">fn_HotKey(obj, e:KeyEventInfo)</Col></Row><Row><Col id=\"BEF_STR\">fnc_HotKey(this, objSenderObj, nChar, bShift, bControl, bAlt, nLLParam, nHLParam)</Col><Col id=\"AFT_STR\">fnc_HotKey(this, obj, e)</Col></Row><Row><Col id=\"BEF_STR\">.DeleteRow</Col><Col id=\"AFT_STR\">.deleteRow</Col></Row><Row><Col id=\"BEF_STR\">.FindRow</Col><Col id=\"AFT_STR\">.findRow</Col></Row><Row><Col id=\"AFT_STR\">.getDeletedRowCount()</Col><Col id=\"BEF_STR\">.GetDelRowCount()</Col></Row><Row><Col id=\"BEF_STR\">.DeleteSelected()</Col><Col id=\"AFT_STR\">.deleteSelectedRows()</Col></Row><Row><Col id=\"BEF_STR\">.BKColor</Col></Row><Row><Col id=\"BEF_STR\">.CaseCount(&quot;RowLevel==0&quot;)</Col><Col id=\"AFT_STR\">.rowcount</Col></Row><Row><Col id=\"BEF_STR\">.getCaseCount(&quot;RowLevel==0&quot;)</Col><Col id=\"AFT_STR\">.rowcount</Col></Row><Row><Col id=\"BEF_STR\">.InsertRow(</Col><Col id=\"AFT_STR\">.insertRow(</Col></Row><Row><Col id=\"BEF_STR\">.AddRow()</Col><Col id=\"AFT_STR\">.addRow()</Col></Row><Row><Col id=\"BEF_STR\">.Row;</Col><Col id=\"AFT_STR\">.rowposition;</Col></Row><Row><Col id=\"BEF_STR\">fnc_ToExcel(this.ID)</Col><Col id=\"AFT_STR\">fnc_ToExcel()</Col></Row><Row><Col id=\"BEF_STR\">.GetUpdate(</Col><Col id=\"AFT_STR\">GetUpdate(dsXx</Col></Row><Row><Col id=\"BEF_STR\">GetDay(</Col><Col id=\"AFT_STR\">gfn_GetDay(</Col></Row><Row><Col id=\"BEF_STR\">Today(</Col><Col id=\"AFT_STR\">gfn_Today(</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJava", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"BEF_STR\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BEF_STR\">, in_vl)</Col><Col id=\"AFT_STR\">, in_vl, session)</Col></Row><Row><Col id=\"BEF_STR\">(in_vl, in_dl)</Col><Col id=\"AFT_STR\">(in_vl, in_dl, session)</Col></Row><Row><Col id=\"BEF_STR\">(VariableList in_vl, DataSetList in_dl)</Col><Col id=\"AFT_STR\">(VariableList in_vl, DataSetList in_dl, HttpSession session)</Col></Row><Row><Col id=\"BEF_STR\">import java.util.List;</Col><Col id=\"AFT_STR\">import java.util.List; import javax.servlet.http.HttpSession;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("txtSource", "absolute", "22", "51", "945", "197", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnConvert", "absolute", "35", "8", "114", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("변환");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtTarget", "absolute", "22", "257", "945", "495", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridXML", "absolute", "726", "8", "114", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_text("그리드xml");
            this.addChild(obj.name, obj);

            obj = new Button("btnComboXml", "absolute", "846", "8", "114", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_text("콤보xml");
            this.addChild(obj.name, obj);

            obj = new Button("btnJava", "absolute", "159", "8", "114", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_text("자바변환");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear", "absolute", "280", "8", "114", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_text("클리어");
            this.addChild(obj.name, obj);

            obj = new Button("btnResiNum", "absolute", "608", "8", "114", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_text("주민번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edtResiNum", "absolute", "422", "13", "173", "27", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WWSA0030");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소스변환");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("WWSA0030.xfdl", "lib::lib_common.xjs");
        this.registerScript("WWSA0030.xfdl", function() {
        /************************
         *  공통 Script Include  *
         ************************/
        //include "lib::lib_common.xjs"

        this.btnConvert_onclick = function (obj,e)
        {
        	this.dsConvert.set_keystring("S:-BEF_STR");

        	var str = this.txtSource.value;

        	for (this.i = 0; this.i < this.dsConvert.rowcount; this.i++) 
        	{
        		var bef_str = this.gfn_ToString(this.dsConvert.getColumn(this.i, "BEF_STR"));
        		var aft_str = this.gfn_ToString(this.dsConvert.getColumn(this.i, "AFT_STR"));

        		str = str.split(bef_str).join(aft_str);
        	}

        	this.txtTarget.set_value(str);
        }

        this.btnConvert00_onclick = function (obj,e)
        {
        	var sep = String.fromCharCode(34);

        	var xmlText = '<ColumnInfo>';
        	xmlText += '<Column'
        		 + ' id=' + sep + 'codeName' + sep
        		 + ' type=' + sep + 'STRING' + sep
        		 + ' size=' + sep + '256' + sep
        		 + '/>';

        	xmlText += '<Column'
        		 + ' id=' + sep + 'No' + sep
        		 + ' type=' + sep + 'STRING' + sep
        		 + ' size=' + sep + '25' + sep
        		 + '/>';
        	xmlText += '</ColumnInfo>';

        	xmlText += '<Rows>';
        	xmlText += '<Row>';
        	xmlText += '<Col'
        		 + ' id=' + sep + 'codeName' + sep
        		 + '>'
        		 + '계정코드/명'
        		 + '</Col>';
        	xmlText += '<Col'
        		 + ' id=' + sep + 'No' + sep
        		 + '>'
        		 + '0'
        		 + '</Col>';
        	xmlText += '</Row>';
        	xmlText += '<Row>';
        	xmlText += '<Col'
        		 + ' id=' + sep + 'codeName' + sep
        		 + '>'
        		 + '계정코드/명1'
        		 + '</Col>';
        	xmlText += '<Col'
        		 + ' id=' + sep + 'No' + sep
        		 + '>'
        		 + '0'
        		 + '</Col>';
        	xmlText += '</Row>';
        	xmlText += '</Rows>';
        	// 

        	xmlText = '<root>' + xmlText + '</root>';

        	this.txtSource.set_value(xmlText);

        	var parser = new DomParser;
        	parser.onParseError = this.parseErrorHandler;

        	var xmlDoc = parser.parseFromString(xmlText);
        	// //	var x = xmlDoc.childNodes;

        	// // 	var x = xmlDoc.getElementsByTagName("ColumnInfo").childNodes;
        	// // 	if ( x.length > 0 ) {
        	// // 		trace("Node Source: " + x[0].nodeName);
        	// // 		var xChild = x[0].childNodes;
        	// //
        	// // 		for ( i = 0;i < xChild.length; i++)
        	// // 		{
        	// // 			trace("Node Name: " + xChild[i].nodeName);
        	// // 			var attrs = xChild[i].attributes;
        	// // 			for (j = 0; j < attrs.length; j++)
        	// // 			{
        	// // 				var attr = attrs.get_item(j);
        	// // 				trace("attr Name: " + attr.name);
        	// // 				trace("attr value: " + attr.value);
        	// // 			}
        	// //
        	// // 		}
        	// //
        	// // 	}

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

        				trace("attr id : " + id);
        				trace("attr type : " + type);
        				trace("attr size : " + size);
        			}
        		}
        	}

        	var nodes = xmlDoc.getElementsByTagName("Rows");
        	for (this.i = 0; this.i < nodes.length; this.i++) 
        	{
        		trace("Node Name : " + nodes[this.i].nodeName);
        		var xChild = nodes[this.i].childNodes;

        		for (this.i = 0; this.i < xChild.length; this.i++) 
        		{
        			trace("xChild Node Name: " + xChild[this.i].nodeName);
        			if (xChild[this.i].nodeName == "Row") 
        			{
        				var yChild = xChild[this.i].childNodes;
        				for (this.j = 0; this.j < yChild.length; this.j++) 
        				{
        					var columnName = yChild[this.j].attributes.get_item(0).value;
        					trace("columnName : " + columnName);
        					trace("Text : " + yChild[this.j].textContent);

        					var attrs = yChild[this.j].attributes;
        					for (this.k = 0; this.k < attrs.length; this.k++) 
        					{
        						var attr = attrs.get_item(this.k);
        						trace("attr Name: " + attr.name);
        						trace("attr value: " + attr.value);
        					}
        				}
        			}
        		}
        	}
        }

        this.parseErrorHandler = function (parser,parseException)
        {
        	trace("Parse Error: " + parseException.message + " (line: " + parseException.line + ", column: " + parseException.column + ")");
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this.Grid00);
        }

        this.btnGridXML_onclick = function (obj,e)
        {
        	// txtTarget.value = fnc_getXmlText(txtSource.value);
        	this.txtTarget.set_value(this.fnc_gridXml(this.txtSource.value));
        }

        this.btnComboXml_onclick = function (obj,e)
        {
        	this.txtTarget.set_value(this.fnc_comboXml(this.txtSource.value));
        }

        // function fn_getXmlText(txtSource)
        // {
        // var srcText = gfn_Replace(txtSource, '= ', '=');
        // srcText = gfn_Replace(srcText, '=', '="');
        // 
        // var xmlText = "";
        // 
        // var equalFound = false;
        // 
        // for(i=0;i < srcText.length;i++)
        // {
        // var chr = srcText.charAt(i);
        // 
        // if (chr == '=')
        // {
        // equalFound = true;
        // }
        // else if (equalFound)
        // {
        // if (chr == ' ' || chr == '/')
        // {
        // xmlText += '"';
        // equalFound = false;
        // }
        // }
        // 
        // xmlText += srcText.charAt(i);
        // }
        // 
        // return xmlText;
        // }
        // 
        // function fn_comboXml(txtSource)
        // {
        // var xmlText = fn_getXmlText(txtSource);
        // 
        // var parser = new DomParser;
        // parser.onParseError = parseErrorHandler;
        // 
        // var xmlDoc = parser.parseFromString(xmlText);
        // 
        // var targetStr = "";
        // var feed = String.fromCharCode(13);
        // 
        // targetStr += '<ColumnInfo>';
        // targetStr += feed;
        // 
        // var nodes = xmlDoc.getElementsByTagName("colinfo");
        // 
        // for(i=0;i<nodes.length;i++)
        // {
        // targetStr += gfn_Space(4) + '<Column ';
        // 
        // var attrs = nodes[i].attributes;
        // 
        // for (j = 0; j < attrs.length; j++)
        // {
        // var attr = attrs.get_item(j);
        // if (gfn_ToLower(attr.name) == 'id') { targetStr += ' id=' + gfn_Quote(attr.value);}
        // if (gfn_ToLower(attr.name) == 'type') { targetStr += ' type=' + gfn_Quote(attr.value);}
        // if (gfn_ToLower(attr.name) == 'size') {	targetStr += ' size=' + gfn_Quote(attr.value);}
        // }
        // 
        // targetStr += '/>';
        // targetStr += feed;
        // }
        // 
        // targetStr += '</ColumnInfo>';
        // targetStr += feed;
        // 
        // targetStr += '<Rows>';
        // targetStr += feed;
        // 
        // var nodes = xmlDoc.getElementsByTagName("record");
        // 
        // for(i=0;i<nodes.length;i++)
        // {
        // targetStr += gfn_Space(4) + '<Row>';
        // targetStr += feed;
        // 
        // var xChild = nodes[i].childNodes;
        // 
        // for ( i = 0;i < xChild.length; i++)
        // {
        // targetStr += gfn_Space(8)
        // + '<Col id=' + gfn_Quote(xChild[i].nodeName) + '>'
        // + xChild[i].textContent
        // + '</Col>' + feed
        // ;
        // }
        // 
        // targetStr += gfn_Space(4) + '</Row>' + feed;
        // }
        // 
        // targetStr += '</Rows>' + feed;
        // 
        // return targetStr;
        // }
        // 
        // function fn_gridXml(txtSource)
        // {
        // var xmlText = fn_getXmlText(txtSource);
        // 
        // var parser = new DomParser;
        // parser.onParseError = parseErrorHandler;
        // 
        // var xmlDoc = parser.parseFromString(xmlText);
        // 
        // var targetStr = "";
        // var feed = String.fromCharCode(13);
        // 
        // targetStr += '<Formats>' + feed;
        // targetStr += gfn_Space(4) + '<Format id="default">' + feed;
        // targetStr += gfn_Space(8) + '<Columns>' + feed;
        // 
        // var nodes = xmlDoc.getElementsByTagName("columns");
        // 
        // for(i=0;i<nodes.length;i++)
        // {
        // var xChild = nodes[i].childNodes;
        // 
        // for ( i = 0;i < xChild.length; i++)
        // {
        // targetStr += gfn_Space(12) + '<Column ';
        // 
        // var attrs = xChild[i].attributes;
        // 
        // for (j = 0; j < attrs.length; j++)
        // {
        // var attr = attrs.get_item(j);
        // if (gfn_ToLower(attr.name) == 'width') { targetStr += ' size=' + gfn_Quote(attr.value);}
        // }
        // 
        // targetStr += '/>';
        // targetStr += feed;
        // }
        // }
        // 
        // targetStr += gfn_Space(8) + '</Columns>' + feed;
        // 
        // targetStr += gfn_Space(8) + '<Rows>' + feed;
        // targetStr += gfn_Space(12) + '<Row size="24" band="head"/>' + feed;
        // targetStr += gfn_Space(12) + '<Row size="24"/>' + feed;
        // targetStr += gfn_Space(8) + '</Rows>' + feed;
        // 
        // targetStr += gfn_Space(8) + '<Band id="head">'  + feed;;
        // 
        // var nodes = xmlDoc.getElementsByTagName("head");
        // 
        // for(i=0;i<nodes.length;i++)
        // {
        // var xChild = nodes[i].childNodes;
        // 
        // for ( i = 0;i < xChild.length; i++)
        // {
        // targetStr += gfn_Space(12) + '<Cell ';
        // 
        // if (i != 0) { targetStr += 'col=' + gfn_Quote(i);}
        // 
        // var attrs = xChild[i].attributes;
        // 
        // for (j = 0; j < attrs.length; j++)
        // {
        // var attr = attrs.get_item(j);
        // if (gfn_ToLower(attr.name) == 'text') { targetStr += ' text=' + gfn_Quote(attr.value);}
        // }
        // 
        // targetStr += '/>' + feed;
        // }
        // }
        // 
        // targetStr += gfn_Space(8) + '</Band>' + feed;
        // 
        // targetStr += gfn_Space(8) + '<Band id="body">' + feed;;
        // 
        // var nodes = xmlDoc.getElementsByTagName("body");
        // 
        // for(i=0;i<nodes.length;i++)
        // {
        // var xChild = nodes[i].childNodes;
        // 
        // for ( i = 0;i < xChild.length; i++)
        // {
        // targetStr += gfn_Space(12) + '<Cell ';
        // 
        // if (i != 0) { targetStr += 'col=' + gfn_Quote(i);}
        // 
        // var attrs = xChild[i].attributes;
        // 
        // for (j = 0; j < attrs.length; j++)
        // {
        // var attr = attrs.get_item(j);
        // if (attr.name == 'colid') {	targetStr += ' text=' + gfn_Quote('bind:' + attr.value);}
        // if (attr.name == 'display') { targetStr += ' displaytype=' + gfn_Quote(attr.value);}
        // if (attr.name == 'align') {	targetStr += ' style=' + gfn_Quote('align:' + attr.value + ' middle;');}
        // }
        // 
        // targetStr += '/>'  + feed;;
        // }
        // }
        // 
        // targetStr += gfn_Space(8) + '</Band>'  + feed;;
        // targetStr += gfn_Space(4) + '</Format>'  + feed;;
        // 
        // targetStr += '</Formats>';
        // 
        // return targetStr;
        // }
        // 
        // 

        this.btnJava_onclick = function (obj,e)
        {
        	var str = this.txtSource.value;

        	for (this.i = 0; this.i < this.dsJava.rowcount; this.i++) 
        	{
        		var bef_str = this.gfn_ToString(this.dsJava.getColumn(this.i, "BEF_STR"));
        		var aft_str = this.gfn_ToString(this.dsJava.getColumn(this.i, "AFT_STR"));

        		str = str.split(bef_str).join(aft_str);
        	}

        	this.txtTarget.set_value(str);
        }

        this.btnClear_onclick = function (obj,e)
        {
        	this.txtSource.set_value("");
        	this.txtTarget.set_value("");
        }

        this.btnResiNum_onclick = function (obj,e)
        {
        	trace('-- : ' + this.gfn_MidB('', 0, 5));
        	trace(this.gfn_MidB('12사5칠구', 0, 5));

        	// var buff = new Buffer('12한구형');

        	// 
        	// for (i=0; i < buff.length; i++) {
        	// trace(" i --- " + i);
        	// trace(" buffer[i] --- " + buff.getText(0, i));
        	// }
        	// 

        	// // 	trace("edtResiNum --- " + edtResiNum.value);
        	// // 	trace("result --- " + fnc_ResidenceNumberCheck(edtResiNum.value));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnConvert.addEventHandler("onclick", this.btnConvert_onclick, this);
            this.btnGridXML.addEventHandler("onclick", this.btnGridXML_onclick, this);
            this.btnComboXml.addEventHandler("onclick", this.btnComboXml_onclick, this);
            this.btnJava.addEventHandler("onclick", this.btnJava_onclick, this);
            this.btnClear.addEventHandler("onclick", this.btnClear_onclick, this);
            this.btnResiNum.addEventHandler("onclick", this.btnResiNum_onclick, this);

        };

        this.loadIncludeScript("WWSA0030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
