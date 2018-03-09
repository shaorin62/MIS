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
                this.set_name("PAYF0075");
                this.set_titletext("퇴직추계액현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"DSNAME\">dsWRDV_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsAAGR_CODE</Col><Col id=\"CODEID\">AAGR_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSTDS_DATE</Col><Col id=\"COMBOID\">PAY0026</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">기준일</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTRESE", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"RCKN_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"CWRK_YCNT\" size=\"256\" type=\"STRING\"/><Column id=\"CWRK_MCNT\" size=\"256\" type=\"STRING\"/><Column id=\"CWRK_DCNT\" size=\"256\" type=\"STRING\"/><Column id=\"PAYX_RATE\" size=\"256\" type=\"STRING\"/><Column id=\"AVER_WAGE\" size=\"256\" type=\"STRING\"/><Column id=\"RETI_ALWN\" size=\"256\" type=\"STRING\"/><Column id=\"BEFO_ALWN\" size=\"256\" type=\"STRING\"/><Column id=\"OCUR_ALWN\" size=\"256\" type=\"STRING\"/><Column id=\"PAYX_YSNO\" size=\"256\" type=\"STRING\"/><Column id=\"REEP_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"WAGE_TAMT\" size=\"256\" type=\"STRING\"/><Column id=\"BONU_TAMT\" size=\"256\" type=\"STRING\"/><Column id=\"ANVA_TAMT\" size=\"256\" type=\"STRING\"/><Column id=\"AVEW_AMOT\" size=\"256\" type=\"STRING\"/><Column id=\"AVEY_AMOT\" size=\"256\" type=\"STRING\"/><Column id=\"AVBN_AMOT\" size=\"256\" type=\"STRING\"/><Column id=\"AVAV_AMOT\" size=\"256\" type=\"STRING\"/><Column id=\"WAGE_YAMT\" size=\"256\" type=\"STRING\"/><Column id=\"EMPL_DTOT\" size=\"256\" type=\"STRING\"/><Column id=\"RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WRDV_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RETR_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"AAGR_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTRESE_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCKN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CWRK_YCNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CWRK_MCNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CWRK_DCNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_RATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVER_WAGE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETI_ALWN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_ALWN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OCUR_ALWN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REEP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_TAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BONU_TAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ANVA_TAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVEW_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVEY_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVBN_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AVAV_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_YAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_DTOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("38");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTRESE", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("2");
            obj.set_binddataset("dsPY_RTRESE");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\" band=\"left\"/><Column size=\"77\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"주민번호\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"기산일\"/><Cell col=\"8\" text=\"근속년수\"/><Cell col=\"9\" text=\"급여 연간 지급액\"/><Cell col=\"10\" text=\"월 평균급여\"/><Cell col=\"11\" text=\"연차수당\"/><Cell col=\"12\" text=\"월 평균 연차수당\"/><Cell col=\"13\" text=\"상여 연간 지급액\"/><Cell col=\"14\" text=\"월 평균상여\"/><Cell col=\"15\" text=\"평균임금\"/><Cell col=\"16\" text=\"중간정산일\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" text=\"퇴직추계액\"/><Cell col=\"18\" text=\"연간 총 급여액\"/><Cell col=\"19\" text=\"임직원구분\"/><Cell col=\"20\" text=\"제도구분\"/><Cell col=\"21\" text=\"누진배수\"/><Cell col=\"22\" text=\"비용구분\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:RERN_NUMB\" mask=\"######-#{######}\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:ENCO_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:RCKN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:right;\" text=\"expr:CWRK_YCNT + '년' + CWRK_MCNT + '월' + CWRK_DCNT+'일'\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVEY_AMOT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVEW_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ANVA_TAMT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVAV_AMOT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BONU_TAMT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVBN_AMOT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVER_WAGE\"/><Cell col=\"16\" displaytype=\"date\" style=\"align: ;\" text=\"bind:RECP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:RETI_ALWN\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:WAGE_YAMT\"/><Cell col=\"19\" displaytype=\"combo\" edittype=\"none\" style=\"align: ;\" text=\"bind:WRDV_CODE\"/><Cell col=\"20\" edittype=\"none\" style=\"align: ;\" text=\"bind:REEP_NAME\"/><Cell col=\"21\" edittype=\"none\" style=\"align:right;\" text=\"bind:RETR_RATE\"/><Cell col=\"22\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:AAGR_CODE\"/></Band><Band id=\"summary\"><Cell style=\"align: ;\"/><Cell col=\"1\" style=\"align: ;\"/><Cell col=\"2\" style=\"align: ;\"/><Cell col=\"3\" style=\"align: ;\"/><Cell col=\"4\" style=\"align: ;\"/><Cell col=\"5\" style=\"align: ;\"/><Cell col=\"6\" style=\"align: ;\"/><Cell col=\"7\" style=\"align: ;\"/><Cell col=\"8\" style=\"align: ;\" text=\"합계\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVEY_AMOT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVEW_AMOT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ANVA_TAMT&quot;)\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVAV_AMOT&quot;)\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;BONU_TAMT&quot;)\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVBN_AMOT&quot;)\"/><Cell col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVER_WAGE&quot;)\"/><Cell col=\"16\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;RETI_ALWN&quot;)\"/><Cell col=\"18\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;WAGE_YAMT&quot;)\"/><Cell col=\"19\" style=\"align:right;\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;RETI_ALWN&quot;)\"/><Cell col=\"21\" style=\"align:right;\"/><Cell col=\"22\" style=\"align:right;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTRESE_DEPT", "absolute", "1206", "128", null, null, "-1173", "15", this);
            obj.set_taborder("3");
            obj.set_binddataset("dsPY_RTRESE");
            obj.set_wheelscrollrow("1");
            obj.set_visible("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"소속\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"사원수\"/><Cell col=\"3\" text=\"급여 연간 지급액\"/><Cell col=\"4\" text=\"월 평균급여\"/><Cell col=\"5\" text=\"연차수당\"/><Cell col=\"6\" text=\"월 평균 연차수당\"/><Cell col=\"7\" text=\"상여 연간 지급액\"/><Cell col=\"8\" text=\"월 평균상여\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"평균임금\"/><Cell col=\"10\" text=\"퇴직추계액\"/><Cell col=\"11\" text=\"연간 총 급여액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:EMPL_DTOT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVEY_AMOT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVEW_AMOT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ANVA_TAMT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVAV_AMOT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BONU_TAMT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVBN_AMOT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVER_WAGE\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:RETI_ALWN\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:WAGE_YAMT\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align: ;\" text=\"합계\"/><Cell col=\"2\" style=\"align: ;\" expr=\"expr:dataset.getSum(&quot;EMPL_DTOT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVEY_AMOT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVEW_AMOT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ANVA_TAMT&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVAV_AMOT&quot;)\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;BONU_TAMT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVBN_AMOT&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AVER_WAGE&quot;)\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('RETI_ALWN')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;WAGE_YAMT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "28", "71", "90", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTDS_DATE", "absolute", "85", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_displayrowcount("15");

            obj = new Static("Static37", "absolute", "753", "61", "40", "41", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSHRQUERY_TYPE", "absolute", "856", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoSHRQUERY_TYPE_innerdataset = new Dataset("rdoSHRQUERY_TYPE_innerdataset", this.rdoSHRQUERY_TYPE);
            rdoSHRQUERY_TYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">개인별</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">부서별</Col></Row></Rows>");
            obj.set_innerdataset(rdoSHRQUERY_TYPE_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("01");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Image00", "absolute", "781", "71", "68", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("조회조건");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("8");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("11");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "78", "61", "8", "41", null, null, this);
            obj.set_taborder("13");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("18");
            obj.set_text("홈 > 급여관리 > 퇴직추계관리 > 퇴직추계액현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("퇴직추계액현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("21");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "1213", "39", "322", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "304", "39", null, null, this.popINSERT);
            obj.set_taborder("44");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle", "absolute", "29", "18", "70", "21", null, null, this.popINSERT);
            obj.set_taborder("45");
            obj.set_text("지급조서");
            obj.set_cssclass("styFormSearchCapBe");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Radio("Radio01", "absolute", "100", "19", "186", "21", null, null, this.popINSERT);
            this.popINSERT.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.popINSERT.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">개인별</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">부서별</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Button("btnPrint", "absolute", "186", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("47");
            obj.set_text("출력");
            obj.set_cssclass("btn_POP_CRUD");
            obj.style.set_imagealign("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "251", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("48");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            obj.style.set_imagealign("left");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1214", "32", "8", "92", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1526", "32", "8", "92", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1210", "40", "182", "8", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1210", "119", "294", "8", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "498", "71", "52", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "548", "71", "80", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "630", "71", "21", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "653", "71", "100", "21", null, null, this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "468", "61", "40", "41", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "213", "71", "52", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "263", "71", "80", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "345", "71", "21", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "368", "71", "100", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "185", "61", "40", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 322, 90, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직추계액현황");

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
        this.addIncludeScript("PAYF0075.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PAYF0075.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PAYF0075.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0075 퇴직추계액 현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.19		김준수		Initial Created.
         *   2016.11.16     황치웅     수정.
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
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTFFFFTT"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PAYF0075";
        this.aKeyValue    = new Array(1);

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
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
            this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
            this.close();
            
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

            if (!this.fn_SearchItemCheck()) return;
            this.fnc_DatasetClear("dsPY_RTRESE");

            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTRESE=dsPY_RTRESE";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        // 기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
            // 기능없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
            // 기능없음
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
            this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
            this.fn_SelectPrint();
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsPY_RTRESE", this);
            if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
            this.fnc_FormUnload(obj,e);
        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
            this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
            this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE="  + this.fnc_Quote(this.cmbSHRSTDS_DATE.value);
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " QUERY_TYPE=" + this.fnc_Quote(this.fnc_Trim(this.rdoSHRQUERY_TYPE.value));
        		
        	} else if (sKind == "PRINT00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE="  + this.fnc_Quote(this.cmbSHRSTDS_DATE.value);
        		sReturnString += " QUERY_TYPE=" + this.fnc_Quote(this.fnc_Trim(this.popINSERT.Radio01.value));
        		
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
        		this.fnc_Information(this.stInformation, this.dsPY_RTRESE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_RTRESE.rowcount);
        	
        	} else if (sMethodName == "GetCommCode") {
                var arrParam = new Array();
                    arrParam[0] = "GRID,grdPY_RTRESE,dsWRDV_CODE,WRDV_CODE"; // 근무구분코드
                    arrParam[1] = "GRID,grdPY_RTRESE,dsAAGR_CODE,AAGR_CODE"; // 계정권한그룹코드
                this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "GetUserComboCode") {
                var arrParam = new Array();
                    arrParam[0] = "COMBO,cmbSHRSTDS_DATE,dsSTDS_DATE,0";
                this.fnc_UserComboInnerBind(arrParam);
                
            }
        	
        }
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/ 
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
            
            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서정보조회SHR(Popup)
                arrParam[0] = "TMM0004";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAME";
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원정보조회SHR(Popup)
                arrParam[0] = "HRM0001";
                arrParam[1] = this.edtSHRDEPT_CODE.value;
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHREMPL_NAME";
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
                arrParam[6] = "0,1";
            
            }
            
            if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        }

        this.rdoSHRQUERY_TYPE_onitemchanged = function(obj,e) {
        	this.fnc_DatasetClear("dsPY_RTRESE");
        	this.fnc_Information(this.stInformation, 0, "SHR");
        	if ( e.postvalue == 01 ) { // 개인별
        		this.grdPY_RTRESE.set_visible(true);
        		this.grdPY_RTRESE_DEPT.set_visible(false);
        		this.imgHelpSHREMPL_NUMB.set_enable(true);
        		this.edtSHREMPL_NAME.set_enable(true);
        		
        	} else if ( e.postvalue == 02 ) { // 부서별
        		this.grdPY_RTRESE.set_visible(false);
        		this.grdPY_RTRESE_DEPT.set_visible(true);
        		this.grdPY_RTRESE_DEPT.set_left(8);
        		this.grdPY_RTRESE_DEPT.set_right(25);
        		this.imgHelpSHREMPL_NUMB.set_enable(false);
        		this.edtSHREMPL_NAME.set_enable(false);
        		this.edtSHREMPL_NAME.set_value("");
        		this.edtSHREMPL_NUMB.set_value("");
        		
        		
        	}
        }

        this.fn_SelectPrint = function (obj,e) {
        	
        	var nX 	= system.clientToScreenX(this.div_ButtonList.btnPrint, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.div_ButtonList.btnPrint, this.div_ButtonList.btnPrint.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);

         	this.popINSERT.Radio01.set_value("01");	
        	this.popINSERT.trackPopup(nX, nY - 2);
        }

        /*------------+
         |  팝업닫기  |
         +------------*/
         this.popINSERT_btnClose_onclick = function(obj,e) {
         	this.popINSERT.Radio01.set_value("");
        	this.popINSERT.closePopup();
        	
        }

        this.fn_Print2 = function (obj,e) {
        	
        	var params   = " STDS_DATE#"  + this.cmbSHRSTDS_DATE.value;
        	    params  += "#STDS_TITL#"  + this.fnc_SubStr(this.cmbSHRSTDS_DATE.value, 0, 4) + "년 "+ this.fnc_SubStr(this.cmbSHRSTDS_DATE.value, 4, 2) +"월"; 
        	
        	var dataref = new Array();
        	
        	if (this.popINSERT.Radio01.value == '01') {
        		var reportfile = "/pay/PAYF0075R01.jrf";
        		
        	} else if (this.popINSERT.Radio01.value == '02') {
        		var reportfile = "/pay/PAYF0075R02.jrf";
        		
        	} 
        	
        	this.fnc_DatasetClear("dsPY_RTRESE_PRINT");
        	
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pay/PAYF0075_PRINT00.do";
        	dataref[0].inDataset 	= "";
        	dataref[0].outDataset 	= "dsPY_RTRESE_PRINT=dsPY_RTRESE_PRINT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.rdoSHRQUERY_TYPE.addEventHandler("onitemchanged", this.rdoSHRQUERY_TYPE_onitemchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popINSERT.Radio01.addEventHandler("onitemclick", this.popINSERT_Radio01_onitemclick, this);
            this.popINSERT.btnPrint.addEventHandler("onclick", this.fn_Print2, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_onclick, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PAYF0075.xfdl");
        this.loadPreloadList();
       
    };
}
)();
