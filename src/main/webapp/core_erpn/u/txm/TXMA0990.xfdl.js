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
                this.set_name("TXMA0990");
                this.set_titletext("부가세코드등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_VATCDH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VATH_TYPECD\" size=\"10\" type=\"STRING\"/><Column id=\"VATH_TYPENM\" size=\"256\" type=\"STRING\"/><Column id=\"SALE_TYPECD\" size=\"10\" type=\"STRING\"/><Column id=\"IS_USED\" size=\"1\" type=\"STRING\"/><Column id=\"IS_SHOWED\" size=\"1\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VATCDD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VATH_TYPECD\" size=\"10\" type=\"STRING\"/><Column id=\"VATD_TYPECD\" size=\"24\" type=\"STRING\"/><Column id=\"VATD_TYPENM\" size=\"256\" type=\"STRING\"/><Column id=\"VAT_LINKCD1\" size=\"6\" type=\"STRING\"/><Column id=\"VAT_LINKCD2\" size=\"6\" type=\"STRING\"/><Column id=\"VAT_LINKCD3\" size=\"6\" type=\"STRING\"/><Column id=\"VAT_LINKCD4\" size=\"6\" type=\"STRING\"/><Column id=\"VAT_LINKCD5\" size=\"6\" type=\"STRING\"/><Column id=\"IS_USED\" size=\"1\" type=\"STRING\"/><Column id=\"IS_SHOWED\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V101\" size=\"64\" type=\"STRING\"/><Column id=\"APPL_V102\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V142\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V117\" size=\"2\" type=\"STRING\"/><Column id=\"APPL_V106\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V111\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V120\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V112\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V115\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V104\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V105\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V109\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V110\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V141\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V144\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V146\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V147\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V148\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V149\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V153\" size=\"3\" type=\"STRING\"/><Column id=\"APPL_V154\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V155\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V164\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V165\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V166\" size=\"3\" type=\"STRING\"/><Column id=\"APPL_V167\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V168\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V169\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V170\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V171\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V172\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V173\" size=\"1\" type=\"STRING\"/><Column id=\"APPL_V174\" size=\"1\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">매출/매입</Col></Row><Row><Col id=\"DSNAME\">dsEVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">증빙구분그리드</Col></Row><Row><Col id=\"DSNAME\">dsVATX_TYPE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">부가세종류</Col><Col id=\"CODEID\">VATX_TYPE</Col></Row><Row><Col id=\"DSNAME\">dsPURC_GUBN</Col><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">부가세유형</Col></Row><Row><Col id=\"DSNAME\">dsBULG_GUBN</Col><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">불공제세부</Col></Row><Row><Col id=\"DSNAME\">dsCOMX_YSNO</Col><Col id=\"CODEID\">COMX_YSNO</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">매출처별세금계산서</Col></Row><Row><Col id=\"DSNAME\">dsEVID_EDOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">증빙구분</Col></Row><Row><Col id=\"DSNAME\">dsAPPL_V149</Col><Col id=\"CODEID\">APPL_V149</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">건물등감가상각</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUSEYN_V117", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">과세-카드</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">3</Col><Col id=\"SUBNAME\">과세-현금영수증</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">5</Col><Col id=\"SUBNAME\">면세-카드</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">7</Col><Col id=\"SUBNAME\">면세-현금영수증</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">9</Col><Col id=\"SUBNAME\">봉사료-카드</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">11</Col><Col id=\"SUBNAME\">봉사료-현금영수증</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">13</Col><Col id=\"SUBNAME\">세금계산서교부금액</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">15</Col><Col id=\"SUBNAME\">계산서교부금액</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUSEYN_V112", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">대손</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">2</Col><Col id=\"SUBNAME\">변제</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUSEYN_V166", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A01</Col><Col id=\"SUBNAME\">매출과세세금계산서</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A02</Col><Col id=\"SUBNAME\">매출과세기타</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A03</Col><Col id=\"SUBNAME\">매출영세세금계산서</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A04</Col><Col id=\"SUBNAME\">매출영세기타</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">B01</Col><Col id=\"SUBNAME\">매입과세</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUSEYN_V153", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A01</Col><Col id=\"SUBNAME\">불공제-필요적기재사항누락</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A02</Col><Col id=\"SUBNAME\">불공제-사업과직접관련없는지출</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A03</Col><Col id=\"SUBNAME\">불공제-비영업용소형승용차구입,유지및임차</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A04</Col><Col id=\"SUBNAME\">불공제-접대비및이와유사한비용관련</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A05</Col><Col id=\"SUBNAME\">불공제-면세사업관련</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A06</Col><Col id=\"SUBNAME\">불공제-토지의자본적지출관련</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A07</Col><Col id=\"SUBNAME\">불공제-사업자등록전매입세액</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">A08</Col><Col id=\"SUBNAME\">불공제-금거래계좌미사용관련매입세액</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">B01</Col><Col id=\"SUBNAME\">공통매입세액안분계산내역</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUSEYN_V164", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">신용카드및직불카드</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">2</Col><Col id=\"SUBNAME\">현금영수증</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">3</Col><Col id=\"SUBNAME\">화물운송복지카드</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">4</Col><Col id=\"SUBNAME\">사업용신용카드</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUSEYN_V149", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">6</Col><Col id=\"SUBNAME\">건물,구축물</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">7</Col><Col id=\"SUBNAME\">기계장치</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">8</Col><Col id=\"SUBNAME\">차량운반구</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">9</Col><Col id=\"SUBNAME\">그밖의감가상각자산</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_VATCDD", "absolute", "300", "138", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("none");
            obj.set_binddataset("dsTA_VATCDD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"118\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"297\"/><Column size=\"35\"/><Column size=\"226\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"188\"/><Column size=\"202\"/><Column size=\"194\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_edit\" text=\"증빙구분\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"부가세종류\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"부가세유형\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"불공제세부\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"세부유형명\"/><Cell col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"사용\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"부가신고서\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"매출처별&#13;&#10;세금계산서\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"매출처별&#13;&#10;계산서\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"매입처별&#13;&#10;세금계산서\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"매입처별&#13;&#10;계산서\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_edit\" text=\"공제받지못할매입세액명세서\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_edit\" text=\"건물등감가상각자산취득명세서\" combodataset=\"dsUSEYN_V149\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_edit\" text=\"신용카드매출전표등수취명세서\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_edit\" text=\"영세율첨부서류&#13;&#10;제출명세서\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_edit\" text=\"신용카드&#13;&#10;매출전표\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"부동산임대&#13;&#10;공급가액명세서\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_edit\" text=\"대손세액공제&#13;&#10;(변제)신고서\"/><Cell col=\"18\" cssclass=\"Cellgrd_WF_edit\" text=\"수출실적&#13;&#10;명세서\"/><Cell col=\"19\" cssclass=\"Cellgrd_WF_edit\" text=\"사업장별&#13;&#10;부가가치세\"/><Cell col=\"20\" cssclass=\"Cellgrd_WF_edit\" text=\"사업자단위과세\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;combo&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:VAT_LINKCD1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;combo&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:VAT_LINKCD2\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;combo&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:VAT_LINKCD3\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;combo&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:VAT_LINKCD4\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:VATD_TYPENM\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:IS_USED\"/><Cell col=\"6\" edittype=\"text\" style=\"align:left;\" text=\"bind:APPL_V101\" editlimit=\"64\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPL_V104\" editlimit=\"1\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPL_V110\" editlimit=\"1\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPL_V105\" editlimit=\"1\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPL_V109\" editlimit=\"1\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:APPL_V153\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:APPL_V149\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:APPL_V164\" combodataset=\"dsUSEYN_V164\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPL_V106\" editlimit=\"1\"/><Cell col=\"15\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:APPL_V117\" editlimit=\"2\" combodataset=\"dsUSEYN_V117\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPL_V120\" editlimit=\"1\"/><Cell col=\"17\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:APPL_V112\" editlimit=\"1\" combodataset=\"dsUSEYN_V112\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPL_V141\" editlimit=\"1\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPL_V115\" editlimit=\"1\"/><Cell col=\"20\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:APPL_V166\" combodataset=\"dsUSEYN_V166\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VATCDH", "absolute", "8", "138", "272", null, null, "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VATCDH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"30\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"과세유형\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"과세유형명\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"매입/매출\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"사용\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:VATH_TYPECD\" editlimit=\"10\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:VATH_TYPENM\" editlimit=\"256\" editimemode=\"hangul\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SALE_TYPECD\" editlimit=\"10\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:IS_USED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "117", "180", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "417", "117", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow1", "absolute", "153", "113", "62", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow2", "absolute", null, "113", "62", "21", "90", null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow2", "absolute", null, "113", "62", "21", "25", null, this);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow1", "absolute", "218", "113", "62", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "28", "72", "62", "22", null, null, this);
            obj.set_text("증빙구분");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_LINKCD1", "absolute", "96", "71", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static21", "absolute", "300", "117", "127", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("증빙세부내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("부가세코드등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("19");
            obj.set_text("홈 > 재무관리 > 세무회계 > 부가세신고자료관리 > 부가세코드등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "509", "103", "80", "35", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.set_text("h 35");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("30");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("32");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "236", "61", "40", "41", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "280", "237", "20", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "300", "132", "48", "6", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "393", "99", "12", "23", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "406", "99", "12", "23", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "405", "120", "10", "13", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부가세코드등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TXMA0990.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMA0990.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMA0990 부가세코드등록
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		신민규		Initial Created.
         *   2016.08.03		안윤준		수정
         *   2016.08.11		강창선		수정
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
         ********************************************************************************INBUS*CO*KR********/
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFFTTTF";
        this.sPACKAGENAME 	= "TXMA0990";

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	this.sUSERAUTH     = "";
        	this.sFORMCAPTION  = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL    = "";

        } else {

        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];

        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.fn_Search();
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsTA_VATCDH,dsTA_VATCDD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_VATCDH=dsTA_VATCDH dsTA_VATCDD=dsTA_VATCDD";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_VATCDH.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
           //기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
           //기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_VATCDH,dsTA_VATCDD");
        	this.grdTA_VATCDH.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
            
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_VATCDH=dsTA_VATCDH:U dsTA_VATCDD=dsTA_VATCDD:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
          //기능없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VATCDH,dsTA_VATCDD", this);
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);

        }
        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_VATCDH,dsTA_VATCDD")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}
        	return true;
        }

        
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (dsobj) {

        	if ( dsobj == "dsTA_VATCDH") {
        		if (this.dsTA_VATCDD.getRowCount() > 0) {
        			this.fnc_Message("TMM125", "증빙세부내역이 존재하는 과세유형은 삭제 할수 없습니다.");
        			return false;
        			
        		}
        		
        		var sQuestionText = "(" + this.fnc_Trim(this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "VATH_TYPECD")) + ") 과세유형";
        		return this.fnc_Message("TMM002", sQuestionText);

        	} else if ( dsobj == "dsTA_VATCDD") {
        	
        		if (this.dsTA_VATCDD.getRowCount() < 1) {
        		    this.fnc_Message("TMM007");
        		    return;
        	    }

        		var sQuestionText = "(" + this.fnc_Trim(this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "VATH_TYPECD")) + ") 과세유형의";
        			sQuestionText += " (" + this.fnc_Trim(this.dsTA_VATCDD.getColumn(this.dsTA_VATCDD.rowposition, "VATD_TYPENM")) + ") 세부유형명 ";
        		
        		return this.fnc_Message("TMM002", sQuestionText);

        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	//변경된 데이터가 없습니다.
        	if (!this.fnc_DatasetChangeCheck("dsTA_VATCDH,dsTA_VATCDD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsTA_VATCDH.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_VATCDH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATCDH.getColumn(i, "VATH_TYPECD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "과세유형", this.dsTA_VATCDH, i, this.grdTA_VATCDH, "VATH_TYPECD");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATCDH.getColumn(i, "VATH_TYPENM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "과세유형명", this.dsTA_VATCDH, i, this.grdTA_VATCDH, "VATH_TYPENM");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATCDH.getColumn(i, "SALE_TYPECD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매입/매출", this.dsTA_VATCDH, i, this.grdTA_VATCDH, "SALE_TYPECD");
        		}
        		
        	}

        	for (var i = 0; i < this.dsTA_VATCDD.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_VATCDD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATCDD.getColumn(i, "VATD_TYPECD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "세부유형", this.dsTA_VATCDD, i, this.grdTA_VATCDD, "VATD_TYPECD");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATCDD.getColumn(i, "VATD_TYPENM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "세부유형명", this.dsTA_VATCDD, i, this.grdTA_VATCDD, "VATD_TYPENM");
        		}
        		
        // 			if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATCDD.getColumn(i, "VAT_LINKCD1"))) < 1) {
        // 				return this.fnc_CheckPostAction("TMM072", "증빙구분", this.dsTA_VATCDD, i, this.grdTA_VATCDD, "VAT_LINKCD1");
        // 			}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATCDD.getColumn(i, "VAT_LINKCD2"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부가세종류", this.dsTA_VATCDD, i, this.grdTA_VATCDD, "VAT_LINKCD2");
        		}
        		
        		var sVATD_TYPECD3 = this.dsTA_VATCDD.getColumn(this.dsTA_VATCDD.rowposition, "VAT_LINKCD3");
        		var sREF1_FILD  = this.dsPURC_GUBN.getColumn(this.dsPURC_GUBN.findRow("COMD_CODE", sVATD_TYPECD3), "REF1_FILD");

        		if (sREF1_FILD == 1) {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATCDD.getColumn(i, "VAT_LINKCD4"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "불공제세부", this.dsTA_VATCDD, i, this.grdTA_VATCDD, "VAT_LINKCD4");
        			}
        		}
        		
        	}

        	return true;
        	
        }
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	var sTAVATCDH = this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "VATH_TYPECD"); // 코드가 길어져서 축약
        	
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		//sReturnString += " VAT_LINKCD1=" 	+ this.fnc_Quote(this.cmbVAT_LINKCD1.value);
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " VATH_TYPECD=" 	+ this.fnc_Quote(sTAVATCDH);
        		sReturnString += " VAT_LINKCD1=" 	+ this.fnc_Quote(this.cmbVAT_LINKCD1.value);
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation1, this.dsTA_VATCDH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display

        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.stInformation2, this.dsTA_VATCDD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display

        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        	
        	        this.dsEVID_DOCU.filter("REF2_FILD == '1'");	//EVID_DOCU.증빙종류 <REF2_FILD.증빙자료생성여부>
        	        this.dsAPPL_V149.filter("REF1_FILD == '1'");	//APPL_V149.건물등감가상각취득명세서 <REF1_FILD.항목사용여부>
        	        
        	        //trace(this.dsAPPL_V149.saveXML())
        			    
        		var arrParam = new Array();
        		    arrParam[0]  = "COMBO,cmbVAT_LINKCD1,dsEVID_EDOCU,0";
        			arrParam[1]  = "GRID,grdTA_VATCDH,dsVATX_GUBN,SALE_TYPECD";
        			arrParam[2]  = "GRID,grdTA_VATCDD,dsEVID_DOCU,VAT_LINKCD1";
        			arrParam[3]  = "GRID,grdTA_VATCDD,dsVATX_TYPE,VAT_LINKCD2";
        			arrParam[4]  = "GRID,grdTA_VATCDD,dsPURC_GUBN,VAT_LINKCD3";
        			arrParam[5]  = "GRID,grdTA_VATCDD,dsBULG_GUBN,VAT_LINKCD4";
        			arrParam[6]  = "GRID,grdTA_VATCDD,dsCOMX_YSNO,APPL_V104";
        			arrParam[7]  = "GRID,grdTA_VATCDD,dsBULG_GUBN,APPL_V153";
        			arrParam[8]  = "GRID,grdTA_VATCDD,dsCOMX_YSNO,APPL_V110";
        			arrParam[9]  = "GRID,grdTA_VATCDD,dsCOMX_YSNO,APPL_V105";
        			arrParam[10] = "GRID,grdTA_VATCDD,dsCOMX_YSNO,APPL_V109";
        			arrParam[11] = "GRID,grdTA_VATCDD,dsCOMX_YSNO,APPL_V106";
        			arrParam[12] = "GRID,grdTA_VATCDD,dsCOMX_YSNO,APPL_V141";
        			arrParam[13] = "GRID,grdTA_VATCDD,dsCOMX_YSNO,APPL_V120";
        			arrParam[14] = "GRID,grdTA_VATCDD,dsCOMX_YSNO,APPL_V115";
        			arrParam[15] = "GRID,grdTA_VATCDD,dsAPPL_V149,APPL_V149";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        } 

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  과세유형에서 추가하기.  |
         +------------------------*/
        this.btnAddRow1_OnClick = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsTA_VATCDD")) { 
        		if (this.fnc_Message("TMM140", "증빙세부내역에 변경내역이 있습니다. 계속진행하게 되면 증빙세부내역은 초기화 됩니다. 계속진행하시겠습니까") == false) {
        		   return false;
        		} 
        	}
        	   
        	var iRow = this.dsTA_VATCDH.addRow();
        	this.dsTA_VATCDH.setColumn(iRow, "IS_USED", "1");
        	
        	this.dsTA_VATCDD.clearData();
        			
        }
        /*-----------------------+
         |  세부유형에서 추가하기.  |
         +------------------------*/
        this.btnAddRow2_OnClick = function (obj,e) {
             
        	var iRow = this.dsTA_VATCDD.insertRow(this.dsTA_VATCDD.rowposition + 1);

        	this.dsTA_VATCDD.setColumn(iRow, "VATH_TYPECD", this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "VATH_TYPECD"));
        	this.dsTA_VATCDD.setColumn(iRow, "IS_USED", "1"); 	//디폴트를 "사용"으로

        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V101", ""); 	//디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V117", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V106", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V112", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V104", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V105", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V109", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V110", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V141", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V149", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V153", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V164", "0"); //디폴트를 "미사용"으로
        	this.dsTA_VATCDD.setColumn(iRow, "APPL_V166", "0"); //디폴트를 "미사용"으로

        	this.fnc_GridSetCellFocus(this.grdTA_VATCDD, "VAT_LINKCD1");
        	
        }

        /*-----------------------+
         |  과세유형에서 삭제하기.  |
         +------------------------*/
        this.btnDelRow1_OnClick = function (obj,e) {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_VATCDD")) { 
        		if (this.fnc_Message("TMM140", "증빙세부내역에 변경내역이 있습니다. 계속진행하게 되면 증빙세부내역은 초기화 됩니다. 계속진행하시겠습니까") == false) {
        			return false;
        		} 
        	}

        	if (!this.fn_DeleteCheck("dsTA_VATCDH")) return;

        	//디테일을 원복한다.
        	this.fnc_DataSetCancel("dsTA_VATCDD");
        	
        	this.dsTA_VATCDH.deleteRow(this.dsTA_VATCDH.rowposition);

        	this.grdTA_VATCDH.setFocus();
        	
        }

        /*-----------------------+
         |  세부유형에서 삭제하기.  |
         +------------------------*/
        this.btnDelRow2_OnClick = function (obj,e) {

        	if (!this.fn_DeleteCheck("dsTA_VATCDD")) return;

        	this.dsTA_VATCDD.deleteRow(this.dsTA_VATCDD.rowposition);
        	
        	this.grdTA_VATCDD.setFocus();
        	
        }

        /*---------------------------------------------------------+
         |  Key Field Enabled & Detail 조회.                        |
         +---------------------------------------------------------*/

        this.dsTA_VATCDH_CanRowPosChange = function (obj,e) {
            
        	if (this.fnc_DatasetChangeCheck("dsTA_VATCDD")) { 
        		if (this.fnc_Message("TMM140", "증빙세부내역에 변경내역이 있습니다. 계속진행하게 되면 증빙세부내역은 초기화 됩니다. 계속진행하시겠습니까") == false) {
        			return false;
        		} 
        	}

        	//디테일을 원복한다.
        	this.fnc_DataSetCancel("dsTA_VATCDD");

        	return true;   
        }

        /*-------------------------------+
         |  데이터셋 ROW 변경 시 팝업호출  |
         +-------------------------------*/
        this.dsTA_VATCDH_OnRowPosChanged = function (obj,e) {

        	if (this.dsTA_VATCDH.getRowCount() < 1) return;

        	if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {
        		 
        	    this.btnAddRow2.set_visible(false);
        	    this.btnDelRow2.set_visible(false);

        		this.dsTA_VATCDD.clearData();
        		
        	} else {
        	
           	    this.btnAddRow2.set_visible(true);
        	    this.btnDelRow2.set_visible(true);

        		this.dsTA_VATCDD.clearData();

        		var sMethodName = "SEARCH01";
        		var sInDataSet 	= "";
        		var sOutDataSet = "dsTA_VATCDD=dsTA_VATCDD";
        		var sArgument 	= this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.grdTA_VATCDH.setFocus();
            }
        }
        /*-------------------------------+
         |  콤보리스트 값 셋팅  |
         +-------------------------------*/
        this.dsTA_VATCDD_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "VAT_LINKCD1" || e.columnid == "VAT_LINKCD2" || e.columnid == "VAT_LINKCD3" || e.columnid == "VAT_LINKCD4") {
        	
        		var sVATD_TYPECD1 = this.fnc_Trim(this.dsTA_VATCDD.getColumn(this.dsTA_VATCDD.rowposition, "VAT_LINKCD1"));
        		var sVATD_TYPECD2 = this.fnc_Trim(this.dsTA_VATCDD.getColumn(this.dsTA_VATCDD.rowposition, "VAT_LINKCD2"));
        		var sVATD_TYPECD3 = this.fnc_Trim(this.dsTA_VATCDD.getColumn(this.dsTA_VATCDD.rowposition, "VAT_LINKCD3"));
        		var sVATD_TYPECD4 = this.fnc_Trim(this.dsTA_VATCDD.getColumn(this.dsTA_VATCDD.rowposition, "VAT_LINKCD4"));

        		var sVATD_TYPENM1 = this.fnc_Trim(this.dsEVID_DOCU.getColumn(this.dsEVID_DOCU.findRow("COMD_CODE", sVATD_TYPECD1), "COMD_CDNM"));
        		var sVATD_TYPENM2 = this.fnc_Trim(this.dsVATX_TYPE.getColumn(this.dsVATX_TYPE.findRow("COMD_CODE", sVATD_TYPECD2), "COMD_CDNM"));
        		var sVATD_TYPENM3 = this.fnc_Trim(this.dsPURC_GUBN.getColumn(this.dsPURC_GUBN.findRow("COMD_CODE", sVATD_TYPECD3), "COMD_CDNM"));
        		var sVATD_TYPENM4 = this.fnc_Trim(this.dsBULG_GUBN.getColumn(this.dsBULG_GUBN.findRow("COMD_CODE", sVATD_TYPECD4), "COMD_CDNM"));

        		this.dsTA_VATCDD.setColumn(e.row, "VATD_TYPECD", sVATD_TYPECD1 + "/" + sVATD_TYPECD2 + "/" + sVATD_TYPECD3 + "/" + sVATD_TYPECD4);
        		this.dsTA_VATCDD.setColumn(e.row, "VATD_TYPENM", sVATD_TYPENM1 + "/" + sVATD_TYPENM2 + "/" + sVATD_TYPENM3 + "/" + sVATD_TYPENM4);
        	
        	}
        	
        	if (e.columnid == "VAT_LINKCD4") {

        	    this.dsTA_VATCDD.setColumn(e.row, "APPL_V153", this.dsTA_VATCDD.getColumn(this.dsTA_VATCDD.rowposition, "VAT_LINKCD4"));
        	  
        	}

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VATCDH.addEventHandler("canrowposchange", this.dsTA_VATCDH_CanRowPosChange, this);
            this.dsTA_VATCDH.addEventHandler("onrowposchanged", this.dsTA_VATCDH_OnRowPosChanged, this);
            this.dsTA_VATCDD.addEventHandler("oncolumnchanged", this.dsTA_VATCDD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.btnAddRow1.addEventHandler("onclick", this.btnAddRow1_OnClick, this);
            this.btnAddRow2.addEventHandler("onclick", this.btnAddRow2_OnClick, this);
            this.btnDelRow2.addEventHandler("onclick", this.btnDelRow2_OnClick, this);
            this.btnDelRow1.addEventHandler("onclick", this.btnDelRow1_OnClick, this);
            this.cmbVAT_LINKCD1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TXMA0990.xfdl");
        this.loadPreloadList();
       
    };
}
)();
