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
                this.set_name("frm_type08");
                this.set_classname("frm_type08");
                this.set_titletext("Grid 복사&붙여넣기");
                this._setFormPosition(0,0,761,430);
            }
            this.getSetter("inheritanceid").set("comp_workFrm");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111111111111111111111111111111111111111111</Col><Col id=\"Column1\">2222</Col><Col id=\"Column2\">3333</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">5</Col></Row><Row><Col id=\"Column0\">a</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">c</Col><Col id=\"Column3\">d</Col><Col id=\"Column4\">e</Col></Row><Row><Col id=\"Column0\">aa</Col><Col id=\"Column1\">bbb</Col><Col id=\"Column2\">cc</Col><Col id=\"Column3\">dd</Col><Col id=\"Column4\">ee</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">5</Col></Row><Row><Col id=\"Column0\">a</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">c</Col><Col id=\"Column3\">d</Col><Col id=\"Column4\">e</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_copy_paste", "absolute", "15", "56", "732", "169", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("none");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"161\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"160\"/><Column size=\"149\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목1\"/><Cell col=\"1\" text=\"항목2\"/><Cell col=\"2\" text=\"항목3\"/><Cell col=\"3\" text=\"항목4\"/><Cell col=\"4\" text=\"항목5\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:Column0\" autosizerow=\"default\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:Column1\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:Column2\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:Column3\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_copy_paste00", "absolute", "15", "246", "732", "169", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset01");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"161\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"160\"/><Column size=\"149\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목1\"/><Cell col=\"1\" text=\"항목2\"/><Cell col=\"2\" text=\"항목3\"/><Cell col=\"3\" text=\"항목4\"/><Cell col=\"4\" text=\"항목5\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:Column1\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:Column2\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:Column3\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "15", "360", "15", null, null, this);
            obj.set_text("row, multrow 만 지원");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 761, 430, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frm_type08");
            		p.set_titletext("Grid 복사&붙여넣기");
            		p.getSetter("inheritanceid").set("comp_workFrm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_grid_copyandpaste.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_grid_copyandpaste.xfdl", function() {
        //include "script::lib_script_common.xjs"

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_GridSetting(this);

        }

        /* Grid 키다운 이벤트 */
        this.grd_copy_paste_onkeydown = function (obj,e)
        {
        	// 복사(Ctrl + C), 붙여넣기(Ctrl + V) 키입력처리 공통함수 호출
        	this.fnc_GrdCopy_Paste(obj, e);
        }

        
        /**
         * Grid/Excel간 Copy & Paste
         * @param : obj	- Grid Object
         * @param e		- Event Info
         * @return : N/A
         * @example : fnc_GrdCopy_Paste(obj, e)
         */
        this.arrClipboard = "";
        this.fnc_GrdCopy_Paste = function (obj,e)
        {
        	if (e.ctrlKey) 
        	{
        		if (e.keycode == 67) 
        		{
        		
        		//trace("start : " + obj.selectstartrow + " / end : " + obj.selectendrow);
        			// Grid Binddataset
        			var strGrdDsNm = obj.binddataset;
        			var v_clip = "";
        			var strSeperate = "	";
        			for (var i = obj.selectstartrow; i <= obj.selectendrow; i++) 
        			{
        				for (var j = 0; j <= 4; j++) 
        				{
        					if (j < obj.selectendcol) 
        					{
        						v_clip += obj.getCellValue(i, j) + strSeperate;
        					}
        					else 
        					{
        						v_clip += obj.getCellValue(i, j) + strSeperate;
        					}
        				}
        				if (i < obj.selectendrow) 
        				{
        					v_clip += "\r\n";
        				}
        			}
        			v_clip += "\r\n";

        			system.clearClipboard();
        			system.setClipboard("CF_TEXT", v_clip);
        			//this.arrClipboard = v_clip;		
        		}
        		else if (e.keycode == 86) 
        		{
        			
        			var bAddrow = true;
        			if (!this.IsNull(this.fnc_GrdCopy_Paste.arguments[2])) 
        			{
        				bAddrow = this.fnc_GrdCopy_Paste.arguments[2];
        			}
        			// Grid Binddataset
        			var strGrdDsNm = obj.binddataset;
        			// cell count
        			var nGrdCellCnt = obj.getCellCount("body");
        			// cell position
        			var nGrdCellPos = obj.getCellPos();
        			// row position   			  
        			var nRowPos = this.Dataset01.rowposition;
        			// arrText2 index
        			var k = 0;
        			// Dataset rowcount
        			var nDsRowCnt = this.Dataset01.getRowCount();

        
        			var t_clip = system.getClipboard("CF_TEXT");
        			//var t_clip = this.arrClipboard;
        			//trace("["+t_clip+"]");
        			var strText = new String(t_clip);
        			var arrText = new Array();
        			var arrText2 = new Array();
        			arrText = strText.split("\r\n");
        			if (nDsRowCnt < (arrText.length + nRowPos - 1)) 
        			{
        				if (bAddrow) 
        				{
        				}
        				else 
        				{
        					return false;
        				}
        			}
        			// 복사한 Row만큼
        			for (var i = 0; i < arrText.length; i++) 
        			{
        				if (this.IsNull(arrText[i])) 
        				{
        					return;
        				}
        				arrText2 = arrText[i].split("	");

        				// 기존 dataset갯수보다 많은 경우
        				if (nDsRowCnt <= nRowPos) 
        				{
        					var nAddrow = eval("this."+strGrdDsNm).addRow();
        				}

        				var nLoopCnt = (nGrdCellPos + arrText2.length);
        				if (nLoopCnt > nGrdCellCnt) 
        				{
        					nLoopCnt = nGrdCellCnt;
        				}
        				// Dataset setcolumn
        				for (var j = 0; j < arrText2.length; j++) 
        				{
        					this.Dataset01.setColumn(nRowPos, j, arrText2[j]);
        					// 
        				}
        				nRowPos++;

        				eval("this."+strGrdDsNm).set_rowposition(eval("this."+strGrdDsNm).rowposition);
        				k = 0;
        			}
        			return true;
        		}
        	}
        }

         
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grd_copy_paste.addEventHandler("onkeydown", this.grd_copy_paste_onkeydown, this);
            this.grd_copy_paste00.addEventHandler("onkeydown", this.grd_copy_paste_onkeydown, this);

        };

        this.loadIncludeScript("sample_grid_copyandpaste.xfdl");

       
    };
}
)();
