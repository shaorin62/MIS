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
                this.set_classname("Sample_Move_Scroll");
                this.set_name("Sample_Move_Scroll");
                this.set_titletext("그리드 크로스탭");
                this._setFormPosition(0,0,830,559);
            }
            this.getSetter("inheritanceid").set("xForm");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH\" size=\"256\" type=\"STRING\"/><Column id=\"GUBUN\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200807\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200808\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200809\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200810\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200811\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200812\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200901\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200902\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200903\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200904\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200905\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200906\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200907\" size=\"256\" type=\"STRING\"/><Column id=\"COL_TEST\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"BRANCH\">전체</Col><Col id=\"GUBUN\">A</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">1</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트1</Col></Row><Row><Col id=\"BRANCH\">전체</Col><Col id=\"GUBUN\">B</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트2</Col></Row><Row><Col id=\"BRANCH\">전체</Col><Col id=\"GUBUN\">C</Col><Col id=\"COL_200807\">2</Col><Col id=\"COL_200808\">3</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트3</Col></Row><Row><Col id=\"BRANCH\">전체</Col><Col id=\"GUBUN\">B-C</Col><Col id=\"COL_200807\">3</Col><Col id=\"COL_200808\">4</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트4</Col></Row><Row><Col id=\"BRANCH\">강남지점</Col><Col id=\"GUBUN\">A</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트5</Col></Row><Row><Col id=\"BRANCH\">강남지점</Col><Col id=\"GUBUN\">B</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트6</Col></Row><Row><Col id=\"BRANCH\">강남지점</Col><Col id=\"GUBUN\">C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트7</Col></Row><Row><Col id=\"BRANCH\">강남지점</Col><Col id=\"GUBUN\">B-C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트8</Col></Row><Row><Col id=\"BRANCH\">중앙지점</Col><Col id=\"GUBUN\">A</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트9</Col></Row><Row><Col id=\"BRANCH\">중앙지점</Col><Col id=\"GUBUN\">B</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트10</Col></Row><Row><Col id=\"BRANCH\">중앙지점</Col><Col id=\"GUBUN\">C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트11</Col></Row><Row><Col id=\"BRANCH\">중앙지점</Col><Col id=\"GUBUN\">B-C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트12</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDispDate", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" size=\"256\" type=\"STRING\"/><Column id=\"DISP_HEAD1\" size=\"256\" type=\"STRING\"/><Column id=\"DISP_HEAD2\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"YYYYMM\">200807</Col><Col id=\"DISP_HEAD1\">08년 3분기</Col><Col id=\"DISP_HEAD2\">7월</Col></Row><Row><Col id=\"YYYYMM\">200808</Col><Col id=\"DISP_HEAD1\">08년 3분기</Col><Col id=\"DISP_HEAD2\">8월</Col></Row><Row><Col id=\"YYYYMM\">200809</Col><Col id=\"DISP_HEAD1\">08년 3분기</Col><Col id=\"DISP_HEAD2\">9월</Col></Row><Row><Col id=\"YYYYMM\">200810</Col><Col id=\"DISP_HEAD1\">08년 4분기</Col><Col id=\"DISP_HEAD2\">10월</Col></Row><Row><Col id=\"YYYYMM\">200811</Col><Col id=\"DISP_HEAD1\">08년 4분기</Col><Col id=\"DISP_HEAD2\">11월</Col></Row><Row><Col id=\"YYYYMM\">200812</Col><Col id=\"DISP_HEAD1\">08년 4분기</Col><Col id=\"DISP_HEAD2\">12월</Col></Row><Row><Col id=\"YYYYMM\">200901</Col><Col id=\"DISP_HEAD1\">09년 1분기</Col><Col id=\"DISP_HEAD2\">1월</Col></Row><Row><Col id=\"YYYYMM\">200902</Col><Col id=\"DISP_HEAD1\">09년 1분기</Col><Col id=\"DISP_HEAD2\">2월</Col></Row><Row><Col id=\"YYYYMM\">200903</Col><Col id=\"DISP_HEAD1\">09년 1분기</Col><Col id=\"DISP_HEAD2\">3월</Col></Row><Row><Col id=\"YYYYMM\">200904</Col><Col id=\"DISP_HEAD1\">09년 2분기</Col><Col id=\"DISP_HEAD2\">4월</Col></Row><Row><Col id=\"YYYYMM\">200905</Col><Col id=\"DISP_HEAD1\">09년 2분기</Col><Col id=\"DISP_HEAD2\">5월</Col></Row><Row><Col id=\"YYYYMM\">200906</Col><Col id=\"DISP_HEAD1\">09년 2분기</Col><Col id=\"DISP_HEAD2\">6월</Col></Row><Row><Col id=\"YYYYMM\">200907</Col><Col id=\"DISP_HEAD1\">09년 3분기</Col><Col id=\"DISP_HEAD2\">7월</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdSample", "absolute", "8", "144", "738", "198", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"23\"/><Row band=\"head\" size=\"23\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" rowspan=\"2\" text=\"구분\"/></Band><Band id=\"body\"><Cell suppress=\"1\" text=\"bind:BRANCH\"/><Cell col=\"1\" text=\"bind:GUBUN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "8", "116", "120", "24", null, null, this);
            obj.set_taborder("1");
            obj.set_text("실행1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "143", "115", "120", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_text("실행2");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "8", "343", "738", "157", null, null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "18", "779", "94", null, null, this);
            obj.set_text("Dynamic Column(Crosstab)생성\r\n\r\n* 실행1, 또는 실행2 버튼의 스크립트를 참조해서 개발하시기 바랍니다.\r\n* 동적으로 생성되는 컬럼 이외의 영역에 대해서 디자인 후에 스크립트를 작성하는 순서로 진행하면 됩니다.\r\n* 샘플에서 사용한 데이터셋은 2가지입니다. dsList(body 에 표시할 데이터), dsDispDate(Header 를 구성)\r\n\r\n");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 830, 559, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Move_Scroll");
            		p.getSetter("inheritanceid").set("xForm");
            		p.set_titletext("그리드 크로스탭");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data", "", "dsList");
            this._addPreloadList("data", "", "dsDispDate");
        };
        
        // User Script
        this.addIncludeScript("sample_griid_crosstab.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_griid_crosstab.xfdl", function() {
        //include "script::lib_script_common.xjs"

        this.Sample_Move_Scroll_onload = function (obj,e)
        {
        	
        }

        
        this.Button00_onclick = function (obj,e)
        {
        	var sFormats = "";
        	var sColumns = "";
        	var sRows = "";
        	var sBandHead = "";
        	var sBandBody = "";

        	// 이미 디자인된 영역에 대한 설정
        	// Column
        	sColumns += '<Column size="80" />\n';
        	sColumns += '<Column size="100" />\n';

        	// Row
        	sRows += '<Row size="23" band="head" />\n';
        	sRows += '<Row size="23" band="head" />\n';
        	sRows += '<Row size="20" />\n';

        	// Head
        	sBandHead += '<Cell rowspan="2" colspan="2" text="구분"/>\n';

        	// Body
        	sBandBody += '<Cell text="bind:BRANCH" suppress="1"/>\n';
        	sBandBody += '<Cell col="1" text="bind:GUBUN"/>\n';

        	// 포맷 생성
        	var sHeadText = '';
        	var iHeadColIdx = 2;
        	var iBodyColIdx = 2;
        	for (var i = 0; i < this.dsDispDate.getRowCount(); i++) 
        	{
        		// Column 생성
        		sColumns += '<Column size="60" />\n';

        		// Head 생성
        		if (sHeadText != this.dsDispDate.getColumn(i, "DISP_HEAD1")) 
        		{
        			sHeadText = this.dsDispDate.getColumn(i, "DISP_HEAD1");

        			var sColspan = this.dsDispDate.getCaseCount("DISP_HEAD1=='" + sHeadText + "'");

        			// Row 1
        			sBandHead += '<Cell col="' + iHeadColIdx + '" colspan="' + sColspan + '" text="' + sHeadText + '"/>\n';

        			// Row 2
        			for (var j = i; j < this.dsDispDate.getRowCount(); j++) 
        			{
        				if (sHeadText == this.dsDispDate.getColumn(j, "DISP_HEAD1")) 
        				{
        					sBandHead += '<Cell row="1" col="' + iHeadColIdx + '" text="' + this.dsDispDate.getColumn(j, "DISP_HEAD2") + '"/>\n';
        					iHeadColIdx++;
        				}
        			}
        		}

        		// Body 생성
        		sBandBody += '<Cell style="align:right;" col="' + iBodyColIdx + '" displaytype="number" text="bind:COL_' + this.dsDispDate.getColumn(i, "YYYYMM") + '"/>\n';
        		iBodyColIdx++;
        	}

        	this.fn_createCrosstab(this.grdSample, sColumns, sRows, sBandHead, sBandBody);

        	this.fnc_GridSetting(this);
        	
        		// 그리드 헤드 셀 클릭 정렬 기능 사용을 위한 초기화
        	
        	this.TextArea00.set_value(this.grdSample.getCurFormatString());
        }

        this.fn_createCrosstab = function (objGrid,sColumns,sRows,sBandHead,sBandBody)
        {
        	var sFormats = '<Formats>\n';
        	sFormats += '<Format id="default">\n';
        	sFormats += '<Columns>\n';
        	sFormats += sColumns;
        	sFormats += '</Columns>\n';
        	sFormats += '<Rows>\n';
        	sFormats += sRows;
        	sFormats += '</Rows>\n';
        	sFormats += '<Band id="head">\n';
        	sFormats += sBandHead;
        	sFormats += '</Band>\n';
        	sFormats += '<Band id="body">\n';
        	sFormats += sBandBody;
        	sFormats += '</Band>\n';
        	sFormats += '</Format>\n';
        	sFormats += '</Formats>\n';

        	 trace(sFormats);
        	objGrid.set_enableredraw(false);
        	objGrid.set_formats(sFormats);
        	objGrid.set_enableredraw(true);
        }

        this.Button01_onclick = function (obj,e)
        {
        	var v_StartCol = 2;
        	var v_StartCell = 2;

        	// 기본컬럼을 제외하고 삭제
        	for (var i = this.grdSample.getCellCount("body"); i > 1; i--) 
        	{
        		this.grdSample.deleteContentsCol("body", i, false);
        	}

        	// 컬럼 추가
        	for (var i = 0; i < this.dsDispDate.getRowCount(); i++) 
        	{
        		this.grdSample.appendContentsCol(false);
        	}

        	// Head 1 Level - Merge Cell
        	var v_CellIdx = v_StartCell;
        	for (var i = v_StartCell; i < this.grdSample.getCellCount("body"); i = i + 3) 
        	{
        		this.grdSample.mergeContentsCell("head", 0, i, 0, i + 2, v_CellIdx, false);
        		v_CellIdx++;
        	}

        	// Head 1 Level - Set Text
        	v_CellIdx = 1;
        	for (var i = 0; i < this.dsDispDate.getRowCount(); i = i + 3) 
        	{
        		this.grdSample.setCellProperty("head", v_CellIdx, "text", this.dsDispDate.getColumn(i, "DISP_HEAD1"));
        		v_CellIdx++;
        	}

        	// 컬럼 넓이 지정 & Text 지정 & Column binding
        	for (var i = v_StartCol; i < this.grdSample.getCellCount("body"); i++) 
        	{
        		this.grdSample.setRealColSize(i, 60, true);
        		this.grdSample.setCellProperty("head", v_CellIdx, "text", this.dsDispDate.getColumn(i - v_StartCol, "DISP_HEAD2"));

        		// grdSample.setCellProperty("body", i, "displaytype", "number");
        		// grdSample.setCellProperty("body", i, "style", "align:right;");
        		this.grdSample.setCellProperty("body", i, "text", "bind:COL_" + this.dsDispDate.getColumn(i - v_StartCol, "YYYYMM"));
        		v_CellIdx++;
        	}

        	this.fnc_GridSetting(this);

        	this.TextArea00.set_value(this.grdSample.getCurFormatString());
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Sample_Move_Scroll_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("sample_griid_crosstab.xfdl");
        this.loadPreloadList();
       
    };
}
)();
