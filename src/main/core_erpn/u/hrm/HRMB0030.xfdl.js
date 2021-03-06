﻿(function()
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
                this.set_name("HRMB0030");
                this.set_titletext("가족사항변경요청");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CHRC_CODE</Col><Col id=\"DSNAME\">dsCHRC_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">CHDV_CODE</Col><Col id=\"DSNAME\">dsCHDV_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">FREL_CODE</Col><Col id=\"DSNAME\">dsFREL_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">HALT_CODE</Col><Col id=\"DSNAME\">dsHALT_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">SCDN_CODE</Col><Col id=\"DSNAME\">dsSCDN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FMLYRQ", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CHRQ_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CHDV_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FMLY_SSEC\" size=\"32\" type=\"STRING\"/><Column id=\"FMLY_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"FREL_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SCCR_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"FMLY_JOBX\" size=\"50\" type=\"STRING\"/><Column id=\"FMLY_BIRT\" size=\"8\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"WORK_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"LVTG_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"FALP_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SUPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"HLIN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"FRDE_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"ENDX_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MSTCRQ", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CGRG_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RJCT_PROW\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WKNT_EMNR\" size=\"256\" type=\"STRING\"/><Column id=\"WKNT_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"WKNT_TIME\" size=\"256\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FAMILY", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FMLY_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"FMLY_SSEC\" size=\"32\" type=\"STRING\"/><Column id=\"FREL_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SCCR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FMLY_JOBX\" size=\"50\" type=\"STRING\"/><Column id=\"FMLY_BIRT\" size=\"8\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"WORK_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"LVTG_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"FALP_YSNO\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SUPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FRDE_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"ENDX_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"HLIN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_ATFILE", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FITY_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "603", "205", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_MSTCRQ", "absolute", "8", "624", null, null, "327", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("59");
            obj.set_tabstop("false");
            obj.set_binddataset("dsHR_MSTCRQ");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"97\"/><Column size=\"108\"/><Column size=\"249\"/><Column size=\"93\"/><Column size=\"205\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"신청일\"/><Cell col=\"1\" text=\"승인구분\"/><Cell col=\"2\" text=\"신청내용\"/><Cell col=\"3\" text=\"승인일\"/><Cell col=\"4\" text=\"반려사유\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CHRQ_DATE\" editlimit=\"8\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CHRC_CODE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_100X\" editimemode=\"hangul\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:RCGN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:RJCT_PROW\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "28", "71", "49", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "152", "71", "21", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_align("top");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "175", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST", "absolute", "8", "107", "113", "21", null, null, this);
            obj.set_taborder("213");
            obj.set_text("현가족사항");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, "107", "320", "21", "11", null, this);
            obj.set_taborder("214");
            obj.set_text("해당 변경내역에 대한 증빙서류를 첨부하여야 합니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST00", "absolute", "8", "342", "116", "21", null, null, this);
            obj.set_taborder("255");
            obj.set_text("변경요청내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "-824", "-552", "600", "23", null, null, this);
            obj.set_taborder("279");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST02", "absolute", null, "603", "105", "21", "192", null, this);
            obj.set_taborder("281");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddFile", "absolute", null, "599", "74", "21", "101", null, this);
            obj.set_taborder("282");
            obj.set_text("파일첨부");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelFile", "absolute", null, "599", "74", "21", "25", null, this);
            obj.set_taborder("283");
            obj.set_text("파일삭제");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_ATFILE", "absolute", null, "624", "272", null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("284");
            obj.set_binddataset("dsTM_ATFILE");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"90\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"파일명\"/><Cell col=\"1\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangeReq", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("변경요청");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnReqCancel", "absolute", "84", "35", "74", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("요청취소");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_FAMILY", "absolute", "8", "128", null, "200", "25", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("286");
            obj.set_binddataset("dsHR_FAMILY");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"92\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"성명\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"주민등록번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"관계명\"/><Cell col=\"3\" style=\"background: ;\" text=\"학력\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"직업\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"생년월일\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"부양여부\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" text=\"동거여부\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" text=\"건강보험등재여부\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" text=\"장애유형\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:center\" text=\"bind:FMLY_NAME\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:FMLY_SSEC\" mask=\"######-#######\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:left\" text=\"bind:FREL_CODE\" editlimit=\"0\" editlengthunit=\"ascii\" combodisplayrowcount=\"15\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SCCR_CODE\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:left\" text=\"bind:FMLY_JOBX\" editlimit=\"40\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" style=\"align:center\" text=\"bind:FMLY_BIRT\" editlimit=\"13\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:DOTE_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:LVTG_YSNO\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:HLIN_YSNO\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" style=\"align:left\" text=\"bind:HALT_CODE\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_100X", "absolute", null, "338", "400", "21", "177", null, this);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MSTCRQ");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", null, "338", "71", "21", "575", null, this);
            obj.set_taborder("290");
            obj.set_text("신청내용");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCHRQ_DATE", "absolute", null, "338", "100", "21", "655", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MSTCRQ");

            obj = new Static("Static67", "absolute", null, "338", "63", "21", "747", null, this);
            obj.set_taborder("292");
            obj.set_text("신청일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow", "absolute", null, "338", "62", "21", "90", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow", "absolute", null, "338", "62", "21", "25", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_FMLYRQ", "absolute", "8", "363", null, "226", "25", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("295");
            obj.set_binddataset("dsHR_FMLYRQ");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"146\"/><Column size=\"90\"/><Column size=\"61\"/><Column size=\"61\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"변경구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민등록번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"관계명\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"학력\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직업\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"생년월일\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부양여부\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"동거여부\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"건강보험등재여부\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"장애유형\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" style=\"align:center;color:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));color2:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));\" text=\"bind:CHDV_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:FMLY_NAME\" editlimit=\"0\" editlengthunit=\"ascii\" combodisplayrowcount=\"15\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;\" text=\"bind:FMLY_SSEC\" mask=\"######-#######\" editlimit=\"13\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left\" text=\"bind:FREL_CODE\" editlimit=\"40\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:SCCR_CODE\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" style=\"align:left\" text=\"bind:FMLY_JOBX\" editlimit=\"0\" editlengthunit=\"ascii\" combodisplayrowcount=\"20\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center;\" text=\"bind:FMLY_BIRT\" editlimit=\"100\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:SUPT_YSNO\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:LVTG_YSNO\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:HLIN_YSNO\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:HALT_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("296");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("297");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("298");
            obj.set_text("가족사항변경요청");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("299");
            obj.set_text("홈 > 인사관리 > 가족사항변경요청");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("300");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("301");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("302");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("303");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("304");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("305");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("307");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("308");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("309");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "275", "61", "40", "41", null, null, this);
            obj.set_taborder("310");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "568", "103", "80", "25", null, null, this);
            obj.set_taborder("311");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "272", "328", "80", "35", null, null, this);
            obj.set_taborder("313");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "584", "589", "80", "35", null, null, this);
            obj.set_taborder("314");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("315");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "860", "630", "30", "67", null, null, this);
            obj.set_taborder("316");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1023", "324", "12", "23", null, null, this);
            obj.set_taborder("317");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1010", "324", "12", "23", null, null, this);
            obj.set_taborder("318");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "338", "7", "21", "158", null, this);
            obj.set_taborder("319");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1069", "328", "80", "10", null, null, this);
            obj.set_taborder("320");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("가족사항변경요청");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item41","edtREMK_100X","value","dsHR_MSTCRQ","REMK_100X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","calCHRQ_DATE","value","dsHR_MSTCRQ","CHRQ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRMB0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMB0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMB0030 가족사항변경요청
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.22		안윤준		Initial Created.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  	= "TTTTTTTF";
        this.sPACKAGENAME 	= "HRMB0030";
        this.sSAVE_CODE   	= "";			//저장(""),변경요청("R"),변경요청취소("C") 구분코드
        this.sKeyValue 		= new Array();

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

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_SetReadonly(this.edtSHREMPL_NUMB, true);
        	
        	if ( this.sUSERLAVEL == "1" ) {
        		this.edtSHREMPL_NAME.set_enable(true);
        		this.imgHelpSHREMPL_NUMB.set_enable(true);
        		this.edtSHREMPL_NAME.setFocus();

        	} else {
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        		this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        		this.edtSHREMPL_NAME.set_enable(false);
        		this.imgHelpSHREMPL_NUMB.set_enable(false);
        		this.fn_Search();

        	}
        	
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
        	this.fnc_DatasetClear("dsHR_MSTCRQ,dsHR_FAMILY,dsHR_FMLYRQ,dsTM_ATFILE");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_MSTCRQ=dsHR_MSTCRQ";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        		sMethodName = "SEARCH01";
        		sInDataSet  = "";
        		sOutDataSet = "dsHR_FAMILY=dsHR_FAMILY";
        		sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	if (this.fnc_Length(this.edtSHREMPL_NUMB.value) < 1) {
        		this.fnc_Message("HRM035");
        		return;
        	}
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_FMLYRQ")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	this.fnc_DatasetClear("dsHR_FMLYRQ,dsTM_ATFILE");

        	this.dsHR_MSTCRQ.set_enableevent(false);  // 컴포넌트 이벤트 방지~
        	var iRow = this.dsHR_MSTCRQ.addRow();
        	
        	this.dsHR_MSTCRQ.setColumn(iRow, "EMPL_NUMB", this.edtSHREMPL_NUMB.value); 			//사원번호
        	this.dsHR_MSTCRQ.setColumn(iRow, "CHRQ_DATE", this.fnc_GetServerDateTime("DATE")); 	//신청일
        	this.dsHR_MSTCRQ.setColumn(iRow, "CHRC_CODE", "S");									//승인구분
        	this.dsHR_MSTCRQ.setColumn(iRow, "CHRQ_SEQN", this.fnc_GetSequence("HR_MSTCRQ","CHRQ_SEQN",this.edtSHREMPL_NUMB.value,"")); //변경 요청 일련번호								//일련번호
        	this.dsHR_MSTCRQ.setColumn(iRow, "CGRG_CODE", "FAMILY");							//변경요청구분코드 
        	
        	this.dsHR_MSTCRQ.set_enableevent(true);
        	
        	//컴포넌트 활성화
        	this.calCHRQ_DATE.set_readonly(true);
        	this.edtREMK_100X.set_readonly(false);
        	this.btnChangeReq.set_enable(false);	//변경요청
        	this.btnReqCancel.set_enable(false);	//요청취소
        	
        	this.div_ButtonList.btnDelete.set_enable(true);	// 삭제버튼
        	
        	this.btnAddFile.set_enable(true);		//파일첨부
        	this.btnDelFile.set_enable(true);		//파일삭제
        	
        	this.btnAddRow.set_enable(true);		//행추가
        	this.btnDeleteRow.set_enable(true);		//행삭제
        	
        	this.grdHR_FMLYRQ.set_readonly(false);
        	this.grdTM_ATFILE.set_readonly(false);
        		
        	this.dsHR_FMLYRQ.set_updatecontrol(false);	// 데이터셋이 변경된 행에 대해 rowtype 을 자동으로 변경하지 않음/
        	this.dsHR_FMLYRQ.set_enableevent(false);	
        	
        	this.dsHR_FMLYRQ.mergeData(this.dsHR_FAMILY);	//현재 데이터셋에 지정하는 데이터셋을 통합
        	 
        	for (var i = 0; i < this.dsHR_FMLYRQ.getRowCount(); i++) {
        		
        		this.dsHR_FMLYRQ.setColumn(i, "CHDV_CODE", "N"); 	// 변경구분코드 I-신규,D-삭제 ,U-변경 ,N-기존
        		this.dsHR_FMLYRQ.setColumn(i, "CHRQ_DATE", this.fnc_GetServerDateTime("DATE"));
        		this.dsHR_FMLYRQ.setColumn(i, "CHRQ_SEQN", this.dsHR_MSTCRQ.getColumn(iRow, "CHRQ_SEQN")); 
        	
        		this.dsHR_FMLYRQ.setRowType(i, Dataset.ROWTYPE_INSERT);
        	} 
        	
        	this.dsHR_FMLYRQ.set_updatecontrol(true);
        	this.dsHR_FMLYRQ.set_enableevent(true);
        	
        	this.edtREMK_100X.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck("dsHR_MSTCRQ")){
        		this.dsHR_MSTCRQ.deleteRow(this.dsHR_MSTCRQ.rowposition);
        		this.fnc_DatasetClear("dsHR_FMLYRQ,dsTM_ATFILE");
        		this.fn_KeyFieldDisible();
        		
        	}
        	
        	this.grdHR_MSTCRQ.setFocus();
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_MSTCRQ");
        	this.grdHR_MSTCRQ.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition,"CHRQ_SEQN");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsHR_MSTCRQ=dsHR_MSTCRQ:U dsHR_FMLYRQ=dsHR_FMLYRQ:U dsTM_ATFILE=dsTM_ATFILE:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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
        	
        }

        /*------------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_MSTCRQ,dsHR_FMLYRQ,dsTM_ATFILE", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        	
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsHR_MSTCRQ,dsHR_FMLYRQ,dsTM_ATFILE")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if ( this.fnc_Length(this.edtSHREMPL_NUMB.value) < 1 ) {
        		return this.fnc_CheckPostAction("TMM072", "사원번호", "", "", this.edtSHREMPL_NAME, "");
        	}
        	
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	if (obj == "dsHR_MSTCRQ") {
        	
        		if (this.dsHR_MSTCRQ.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}  
        		
        		var sQuestionText = "요청일:" + this.fnc_Trim(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE"));
        		return this.fnc_Message("TMM002", sQuestionText);
        	
        	} else if (obj == "dsHR_FMLYRQ") {
        	
        		if (this.dsHR_FMLYRQ.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		var sQuestionText = "가족성명:" + this.fnc_Trim(this.dsHR_FMLYRQ.getColumn(this.dsHR_FMLYRQ.rowposition, "FMLY_NAME")); 
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_MSTCRQ,dsHR_FMLYRQ,dsTM_ATFILE")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsHR_FMLYRQ.getRowCount(); i++) { // 가족사항
        		
        		if (this.fnc_ToUpper(this.dsHR_FMLYRQ.getRowType(i)) == Dataset.ROWTYPE_NORMAL)	continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_FMLYRQ.getColumn(i, "FMLY_NAME"))) < 1) { 
        			return this.fnc_CheckPostAction("TMM072", "성명", this.dsHR_FMLYRQ, i, this.grdHR_FMLYRQ, "FMLY_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_FMLYRQ.getColumn(i, "FMLY_SSEC"))) < 13) {  
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_FMLYRQ.getColumn(i, "FMLY_SSEC"))) != 7) {  
        				return this.fnc_CheckPostAction("TMM072", "가족주민번호", this.dsHR_FMLYRQ, i, this.grdHR_FMLYRQ, "FMLY_SSEC");
        			}
        		}
        		
        		// TODO TEST를 위해 막아둠
        		if (this.fnc_ToUpper(this.dsHR_FMLYRQ.getRowType(i)) != Dataset.ROWTYPE_NORMAL)	{
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_FMLYRQ.getColumn(i, "FMLY_SSEC"))) == 13) {  
        				var sFMLY_SSEC = this.fnc_Replace(this.dsHR_FMLYRQ.getColumn(i, "FMLY_SSEC"), "-");
        				// 올바른 주민번호 체크
        				if (!this.fnc_ResidenceNumberCheck(sFMLY_SSEC)) { 
        					return this.fnc_CheckPostAction("TMM009", "", this.dsHR_FMLYRQ, i, this.grdHR_FMLYRQ, "FMLY_SSEC");
        				}
        			}
         		}
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_FMLYRQ.getColumn(i, "FREL_CODE"))) < 1) { 	
        			return this.fnc_CheckPostAction("TMM072", "관계", this.dsHR_FMLYRQ, i, this.grdHR_FMLYRQ, "FREL_CODE");
        		}

         	}
        	
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
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value); //사원번호
        		sReturnString += " CGRG_CODE=FAMILY"; 			//가족사항변경
        	
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		
        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value); //사원번호
        		sReturnString += " CHRQ_DATE=" 	+ this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE")); //날짜
        		sReturnString += " CHRQ_SEQN=" 	+ this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN")); //일련번호

        	} else if (sKind == "SEARCH04") {
        		sReturnString   = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString  += " action="    + this.fnc_Quote(sKind);
        		sReturnString  += " CGRG_CODE=FAMILY";
        		sReturnString  += " EMPL_NUMB=" + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));
        		sReturnString  += " FILE_IDXX=" + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "FILE_IDXX"));
        		sReturnString  += " CHRQ_DATE=" + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE"));
        		sReturnString  += " CHRQ_SEQN=" + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN"));

        	} else if (sKind == "SAVE00") {	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		if ( this.sSAVE_CODE == "R" || this.sSAVE_CODE == "C" ) {
        			sReturnString += " SYST_LNCD=" + this.fnc_Quote(application.GBL_LANGCD); //사용자언어코드
        			sReturnString += " WORK_USID=" + this.fnc_Quote(application.GBL_USERID); //작업자ID
        			sReturnString += " WKNT_TYCD=" + this.fnc_Quote("HRM020"); // 작업알림유형코드
        			sReturnString += " SOUS_LNKY=" + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB")+"-"+this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE")+"-"+this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN")); //출처연결키
        			sReturnString += " WKNT_CNTT=" + this.fnc_Quote("가족사항변경요청 신청이 등록되었습니다."); // 작업알림내용
        		}
        		sReturnString += " SAVE_CODE=" + this.fnc_Quote(this.sSAVE_CODE); // 작업알림내용
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
        	
        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsHR_MSTCRQ.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_MSTCRQ.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdHR_MSTCRQ.setFocus();
        		
        		if ( this.sKeyValue[0] != "" ) {
        			var irow = this.dsHR_MSTCRQ.findRow("CHRQ_SEQN",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow<0) irow=0;
        			this.dsHR_MSTCRQ.set_rowposition(irow);
        		}		
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fn_KeyFieldDisible(this.dsHR_FMLYRQ);

        		if (this.sSAVE_CODE == "R") {
        			this.fnc_Message("HRM040", true);
        			this.sSAVE_CODE = "";
        			this.fn_KeyFieldDisible();
        			
        		} else if (this.sSAVE_CODE == "C") {
        			this.fnc_Message("HRM041", true);
        			this.sSAVE_CODE = "";
        			this.fn_KeyFieldDisible();
        			
        		} else {
        			this.fnc_Information(this.stInformation, 0, "SAVE");		
        			this.fnc_Message("TMM103");
        			this.fn_KeyFieldDisible();
        		}
        		
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array(); 
        			arrParam[0] = "GRID,grdHR_MSTCRQ,dsCHRC_CODE,CHRC_CODE";
        			arrParam[1] = "GRID,grdHR_FMLYRQ,dsCHDV_CODE,CHDV_CODE";
        			arrParam[2] = "GRID,grdHR_FMLYRQ,dsFREL_CODE,FREL_CODE";
        			arrParam[3] = "GRID,grdHR_FMLYRQ,dsHALT_CODE,HALT_CODE";
        			arrParam[4] = "GRID,grdHR_FMLYRQ,dsSCDN_CODE,SCCR_CODE";
        			arrParam[5] = "GRID,grdHR_FAMILY,dsFREL_CODE,FREL_CODE";
        			arrParam[6] = "GRID,grdHR_FAMILY,dsHALT_CODE,HALT_CODE";
        			arrParam[7] = "GRID,grdHR_FAMILY,dsSCDN_CODE,SCCR_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if(this.dsHR_MSTCRQ.rowcount < 1 ) return;
         
        	//승인구분이 S(임시저장)이 아닌경우 전체 readonly
        	switch (this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRC_CODE")) {
        		case "S" :	//임시저장
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(false);
        		
        			if ( this.fnc_ToUpper(this.dsHR_MSTCRQ.getRowType(this.dsHR_MSTCRQ.rowposition)) == "INSERT" ) {	
        				//신규입력행에는 확인요청 버튼을 막음
        				this.btnChangeReq.set_enable(false);
        				
        			} else {
        				this.btnChangeReq.set_enable(true);
        				
        			}
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(true);
        			
        			this.btnAddFile.set_enable(true);
        			this.btnDelFile.set_enable(true);
        			
        			this.btnAddRow.set_enable(true);
        			this.btnDeleteRow.set_enable(true);

        			this.grdHR_FMLYRQ.set_readonly(false);
        			this.grdTM_ATFILE.set_readonly(false);
        			break;
        		case "0" : //변경요청
        		
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true); 
        			
        			this.btnChangeReq.set_enable(false);
        			this.btnReqCancel.set_enable(true);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			
        			this.btnAddFile.set_enable(false);
        			this.btnDelFile.set_enable(false);
        			
        			this.btnAddRow.set_enable(false);
        			this.btnDeleteRow.set_enable(false);
        			
        			this.grdHR_FMLYRQ.set_readonly(true);
        			this.grdTM_ATFILE.set_readonly(true);
        			break;
        		case "1" : //승인
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true); 
        			
        			this.btnChangeReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			
        			this.btnAddFile.set_enable(false);
        			this.btnDelFile.set_enable(false);
        			
        			this.btnAddRow.set_enable(false);
        			this.btnDeleteRow.set_enable(false);
        			
        			this.grdHR_FMLYRQ.set_readonly(true);
        			this.grdTM_ATFILE.set_readonly(true);
        			break;
        		case "2" : //반려
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true); 
        			
        			this.btnChangeReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			
        			this.btnAddFile.set_enable(false);
        			this.btnDelFile.set_enable(false);
        			
        			this.btnAddRow.set_enable(false);
        			this.btnDeleteRow.set_enable(false);

        			this.grdHR_FMLYRQ.set_readonly(true);
        			this.grdTM_ATFILE.set_readonly(true);
        			break;
        			
        		default :
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true);  
        			
        			this.btnChangeReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false); 
        			
        			this.btnAddFile.set_enable(false);
        			this.btnDelFile.set_enable(false);
        			
        			this.btnAddRow.set_enable(false);
        			this.btnDeleteRow.set_enable(false); 
        			this.grdHR_FMLYRQ.set_readonly(true);
        			this.grdTM_ATFILE.set_readonly(true);
        			
        			break;
        	}

        	this.fnc_DatasetClear("dsHR_FMLYRQ");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_FMLYRQ=dsHR_FMLYRQ";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.dsTM_ATFILE_search04();
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        		if ( this.fnc_Length(this.edtSHREMPL_NUMB.value) > 0 ) this.fn_Search();
        	}

        }

        /*------------------+
         |  변경요청내용 추가  |
         +------------------*/
        this.fn_btnAddRow_OnClick = function (obj,e) {

        	if (this.fnc_Length(this.edtSHREMPL_NUMB.value) < 1 || this.dsHR_MSTCRQ.getRowCount() < 1) {
        		this.fnc_Message("HRM017");
        		return false;
        	}
        	
        	var iRow = this.dsHR_FMLYRQ.addRow();

        	this.dsHR_FMLYRQ.setColumn(iRow, "EMPL_NUMB", this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));
        	this.dsHR_FMLYRQ.setColumn(iRow, "CHRQ_DATE", this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE"));
        	this.dsHR_FMLYRQ.setColumn(iRow, "CHRQ_SEQN", this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN"));
        	this.dsHR_FMLYRQ.setColumn(iRow, "CHDV_CODE", "I");
        	
        	this.grdHR_FMLYRQ.setFocus();
        	this.grdHR_FMLYRQ.setCellPos(this.fnc_GridColumnIndex(this.grdHR_FMLYRQ, "FMLY_NAME"));
        	
        	return;
        }

        /*------------------+
         |  변경요청내용 삭제  |
         +------------------*/
        this.fn_btnDelRow_OnClick = function (obj,e) {

        	if (this.fn_DeleteCheck("dsHR_FMLYRQ")) {
        		//신규행일경우 삭제처리하고 신규행이 아닐경우 삭제요청상태로 변경
        		if(this.dsHR_FMLYRQ.getColumn(this.dsHR_FMLYRQ.rowposition, "CHDV_CODE") == "I"){
        			this.dsHR_FMLYRQ.deleteRow(this.dsHR_FMLYRQ.rowposition);
        			
        		} else {
        			this.dsHR_FMLYRQ.setColumn(this.dsHR_FMLYRQ.rowposition, "CHDV_CODE", "D");

        		}
        		
        	}
        	
        	this.grdHR_FMLYRQ.setFocus();

        }

        /*-----------------------+
         |  변경요청 버튼 클릭 時  |
         +-----------------------*/
        this.fn_btnChangeReq = function(obj,e) {
        	
        	var row = this.dsHR_MSTCRQ.rowposition;
        	
        	if (row < 0) {
        		this.fnc_Message("TMM010");   //Message 처리 후
        		this.grdHR_MSTCRQ.setFocus();
        		return;
        	}

        	/*
        		//증빙파일이 있는 지 체크
        		if (dtlTM_ATFILE.getRowCount() < 1) {
        			//해당 변경내역에 대한 증빙서류를 첨부하여야 합니다!
        			this.fnc_Message("HRM044");
        			this.btnAddFile.setFocus();
        			return false;
        		}
        	*/
        			
        	if ( this.fnc_Message("HRM015")) {
        		this.dsHR_MSTCRQ.setColumn(row, "CHRC_CODE", "0");
        		this.sSAVE_CODE = "R";	//변경요청
        		this.fn_Save();
        	}
        }

        /*-----------------------+
         |  요청취소 버튼 클릭 時  |
         +-----------------------*/
        this.fn_btnReqCancel_OnClick = function(obj,e) {
        	
        	var row = this.dsHR_MSTCRQ.rowposition;
        	
        	if (row < 0) {
        		this.fnc_Message("TMM010");   //Message 처리 후
        		this.grdHR_MSTCRQ.setFocus();
        		return;
        	}

        	if ( this.fnc_Message("HRM016")) {
        		this.dsHR_MSTCRQ.setColumn(row, "CHRC_CODE", "S");
        		this.sSAVE_CODE = "C";	//요청취소
        		this.fn_Save();
        	}
        }

        /*-------------------------+
         |  DATASET COLUMN 변경 후 |
         +-------------------------*/
        this.dsHR_FMLYRQ_oncolumnchanged = function(obj,e) {

        	if ( e.columnid == "FMLY_SSEC" ) {
        		var sBirthDay 	= "";
        		if ( this.fnc_SubStr(e.newvalue, 6, 1) == "1" || this.fnc_SubStr(e.newvalue, 6, 1) == "2"
        		|| 	 this.fnc_SubStr(e.newvalue, 6, 1) == "5" || this.fnc_SubStr(e.newvalue, 6, 1) == "6" ) {
        			sBirthDay 	= "19"+this.fnc_SubStr(e.newvalue, 0, 6);
        			this.dsHR_FMLYRQ.setColumn(e.row, "FMLY_BIRT", sBirthDay);
        			
        		} else {
        			sBirthDay 	= "20"+this.fnc_SubStr(e.newvalue, 0, 6);
        			this.dsHR_FMLYRQ.setColumn(e.row, "FMLY_BIRT", sBirthDay);
        			
        		}
        	}
        	var iRow = e.row;

        	if (this.dsHR_FMLYRQ.getColumn(iRow, "CHDV_CODE") == "D") return;
         	
        	var vSRAL_NUMB 	= this.dsHR_FMLYRQ.getColumn(iRow, "SRAL_NUMB");
        	var iFindRow 	= this.dsHR_FAMILY.findRow("SRAL_NUMB", vSRAL_NUMB);
        	
        	if (iFindRow < -1) {
        		this.dsHR_FMLYRQ.setColumn(row, "CHDV_CODE", "I");
        	
        	} else {
        		for(var i = 0; i < this.dsHR_FAMILY.getColCount(); i++) {
        		
        			//원본데이터를 기준으로 비교하면 요청데이터의 변경구분 컬럼은 비교 안함.
        			if (this.fnc_Quote(this.dsHR_FAMILY.getColumn(iFindRow, this.dsHR_FAMILY.getColID(i))) != this.fnc_Quote(this.dsHR_FMLYRQ.getColumn(iFindRow, this.dsHR_FAMILY.getColID(i)))){
        				this.dsHR_FMLYRQ.setColumn(iRow, "CHDV_CODE", "U");
        				return;
        			}
        			
        		}
        	}
        	
        }

        /*----------------------+
         |  DATASET ROW 변경 전 |
         +----------------------*/
        this.dsHR_MSTCRQ_canrowposchange = function(obj,e) {
        	if (this.fnc_DatasetChangeCheck("dsHR_FMLYRQ")) {
        		if (this.fnc_Message("TMM023") == false)  { 
        			return false;
        		} else {
        			return true;
        		}
        	}
        	
        }

        /*--------------+
         |  성명 변경 시 |
         +--------------*/
        this.edtSHREMPL_NAME_onchar = function(obj,e) {
        	this.fnc_DatasetClear("dsHR_MSTCRQ,dsHR_FAMILY,dsHR_FMLYRQ,dsTM_ATFILE");
        	this.edtSHREMPL_NUMB.set_value("");
        	
        }

        /*-----------+
         |  파일 검색 |
         +-----------*/
        this.dsTM_ATFILE_search04 = function(){
        	var sMethodName = "SEARCH04";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_ATFILE=dsTM_ATFILE";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        /*--------------------------+
         |  파일첨부&파일삭제 클릭 시 |
         +--------------------------*/
        this.btnFile_onclick = function(obj,e) {
        	
        	if (this.fnc_Length(this.edtSHREMPL_NUMB.value) < 1 || this.dsHR_MSTCRQ.getRowCount() < 1) {
        		this.fnc_Message("HRM035");
        		return;
        	}
        	
        	if ( obj.name == "btnAddFile" ) {
        		this.fnc_CallFileUplod(5, "", "fn_CallFileUplodCallback");
        		
        	} else if ( obj.name == "btnDelFile" ) {
        		if (this.fn_checkDeleteFile()) this.dsTM_ATFILE.deleteMultiRows(this.grdTM_ATFILE.getSelectedDatasetRows());
        		
        	}
        	
        }

        /*-------------------+
         |  파일첨부 callback |
         +-------------------*/
        this.fn_CallFileUplodCallback = function(robjds,form) {

        	var objds 		= form.dsTM_ATFILE;
        	var objmainds 	= form.dsHR_MSTCRQ;
        	
        	if ( objmainds.getColumn(objmainds.rowposition, "FILE_IDXX") == "" ) {
        		objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        	} else {
        		for ( var i=0; i<robjds.rowcount; i++ ) {
        			robjds.setColumn(i, "FILE_IDXX", objmainds.getColumn(objmainds.rowposition, "FILE_IDXX"));
        		}
        	}
        	
        	for(i = 0; i < robjds.rowcount; i++){
        		var iRow = objds.addRow();
        		objds.copyRow(iRow, robjds, i);
        		objds.setColumn(iRow, "FITY_CODE", "HRM001-04");
        		
        		if(objds.updatecontrol){
        		}else{
        			objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		}
        	}
        	
        }

        /*---------------------+
         |  파일삭제 여부 체크  |
         +---------------------*/
        this.fn_checkDeleteFile = function () {
        	
        	if (this.dsTM_ATFILE.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTM_ATFILE);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = this.dsTM_ATFILE.getColumn(this.dsTM_ATFILE.rowposition, "LFIL_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*-----------------------+
         |  그리드 Cell 클릭 함수 |
         +-----------------------*/
        this.grdTM_ATFILE_oncellclick = function(obj,e) {
        	if( obj.getCellText(e.row, e.col) == "다운로드" ) {
        		var filePath   = this.dsTM_ATFILE.getColumn(e.row,"FILE_PATH");
        		var phyFileNm  = this.dsTM_ATFILE.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.dsTM_ATFILE.getColumn(e.row,"LFIL_NAME");

        		if (this.fnc_Length(filePath) > 0) {
        			this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_FMLYRQ.addEventHandler("oncolumnchanged", this.dsHR_FMLYRQ_oncolumnchanged, this);
            this.dsHR_MSTCRQ.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_MSTCRQ.addEventHandler("canrowposchange", this.dsHR_MSTCRQ_canrowposchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onchar", this.edtSHREMPL_NAME_onchar, this);
            this.btnAddFile.addEventHandler("onclick", this.btnFile_onclick, this);
            this.btnDelFile.addEventHandler("onclick", this.btnFile_onclick, this);
            this.grdTM_ATFILE.addEventHandler("oncellclick", this.grdTM_ATFILE_oncellclick, this);
            this.btnChangeReq.addEventHandler("onclick", this.fn_btnChangeReq, this);
            this.btnReqCancel.addEventHandler("onclick", this.fn_btnReqCancel_OnClick, this);
            this.edtREMK_100X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCHRQ_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnAddRow.addEventHandler("onclick", this.fn_btnAddRow_OnClick, this);
            this.btnDeleteRow.addEventHandler("onclick", this.fn_btnDelRow_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
