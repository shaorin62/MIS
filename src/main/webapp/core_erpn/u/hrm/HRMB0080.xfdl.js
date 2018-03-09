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
                this.set_name("HRMB0080");
                this.set_titletext("인사기록변경승인");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CHRC_CODE</Col><Col id=\"DSNAME\">dsSHRCHRC_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">CHRC_CODE</Col><Col id=\"DSNAME\">dsCHRC_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">CHDV_CODE</Col><Col id=\"DSNAME\">dsCHDV_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">CGRG_CODE</Col><Col id=\"DSNAME\">dsSHRCGRG_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">CGRG_CODE</Col><Col id=\"DSNAME\">dsCGRG_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsDEDY_CODE</Col><Col id=\"CODEID\">DEDY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsDEGC_CODE</Col><Col id=\"CODEID\">DEGC_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsHALT_CODE</Col><Col id=\"CODEID\">HALT_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSVIM_YSNO</Col><Col id=\"CODEID\">SVIM_YSNO</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsREDN_CODE</Col><Col id=\"CODEID\">REDN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">FREL_CODE</Col><Col id=\"DSNAME\">dsFREL_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">SCDN_CODE</Col><Col id=\"DSNAME\">dsSCDN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">SCDN_NAME</Col><Col id=\"DSNAME\">dsSCDN_NAME</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">MJRA_NAME</Col><Col id=\"DSNAME\">dsMJRA_NAME</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">KFLG_CODE</Col><Col id=\"DSNAME\">dsKFLG_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsDGDN_CODE</Col><Col id=\"CODEID\">DGDN_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MSTCRQ", this);
            obj._setContents("<ColumnInfo><Column id=\"SELE_CHEK\" size=\"256\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" type=\"STRING\"/><Column id=\"CHRQ_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"256\" type=\"STRING\"/><Column id=\"CGRG_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"CHRC_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"RCGN_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"RJCT_PROW\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"256\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"SYST_LNCD\" size=\"256\" type=\"STRING\"/><Column id=\"WORK_USID\" size=\"256\" type=\"STRING\"/><Column id=\"WKNT_EMNR\" size=\"256\" type=\"STRING\"/><Column id=\"WKNT_TYCD\" size=\"256\" type=\"STRING\"/><Column id=\"SOUS_LNKY\" size=\"256\" type=\"STRING\"/><Column id=\"WKNT_CNTT\" size=\"256\" type=\"STRING\"/><Column id=\"STSD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCMP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SVIM_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEGC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HAAD_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTRQ", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CGRG_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RJCT_PROW\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCMP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAMR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MNOM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SVIM_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEGC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HAAD_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHNG_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FAMILY", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FREL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_SSEC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_BIRT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCCR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_JOBX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_TLNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LVTG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FALP_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DPSN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRDE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FMLYRQ", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHDV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FREL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_SSEC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_BIRT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCCR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_JOBX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_TLNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LVTG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FALP_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DPSN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRDE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_LICEXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LICE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LICE_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CTCS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"QFCA_LICN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_INNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADPO_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_LICERQ", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHDV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LICE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LICE_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CTCS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"QFCA_LICN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_INNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADPO_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_SCHCRR", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENIS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GRDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MJRA_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHGD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DNGB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCGN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_SEAT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GRDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DGDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HISL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENSC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_SCHLRQ", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHDV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENIS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GRDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MJRA_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHGD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DNGB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCGN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_SEAT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GRDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DGDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HISL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENSC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FRLANG", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"OACT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"OACT_NAME\" size=\"10\" type=\"STRING\"/><Column id=\"KFLG_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DFLG_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DFLG_NAME\" size=\"10\" type=\"STRING\"/><Column id=\"LADN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FOLG_SCOR\" size=\"20\" type=\"STRING\"/><Column id=\"PFSC_SCOR\" size=\"20\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FRLARQ", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHDV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"KFLG_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXMN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OACT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OACT_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FOLG_SCOR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_ORGT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAXX_SCOR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCOR_METE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HETY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_ATFILE", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divFRLANG", "absolute", "8", "263", null, null, "25", "15", this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST", "absolute", "0", "4", "89", "21", null, null, this.divFRLANG);
            obj.set_taborder("1");
            obj.set_text("현어학사항");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divFRLANG.addChild(obj.name, obj);
            obj = new Grid("grdHR_FRLANG", "absolute", "0", "25", null, "187", "0", null, this.divFRLANG);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_binddataset("dsHR_FRLANG");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"어학\"/><Cell col=\"1\" displaytype=\"text\" text=\"등급\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"언어구분\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"점수\"/><Cell col=\"4\" text=\"만점\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"취득일\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:OACT_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" text=\"bind:DFLG_NAME\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:KFLG_CODE\" editlimit=\"40\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:FOLG_SCOR\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:PFSC_SCOR\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ACQS_DATE\" editlimit=\"0\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divFRLANG.addChild(obj.name, obj);
            obj = new Grid("grdHR_FRLARQ", "absolute", "0", "237", null, null, "0", "0", this.divFRLANG);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("13");
            obj.set_binddataset("dsHR_FRLARQ");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"변경구분\"/><Cell col=\"1\" style=\"background: ;\" text=\"어학\"/><Cell col=\"2\" style=\"background: ;\" text=\"등급\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"언어구분\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"점수\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"만점\" editlimitbymask=\"both\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"취득일\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"color:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));color2:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));\" text=\"bind:CHDV_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:OACT_NAME\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:DFLG_NAME\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:KFLG_CODE\" editlimit=\"40\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:FOLG_SCOR\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:PFSC_SCOR\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ACQS_DATE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divFRLANG.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST00", "absolute", "0", "216", "102", "21", null, null, this.divFRLANG);
            obj.set_taborder("22");
            obj.set_text("변경요청내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divFRLANG.addChild(obj.name, obj);

            obj = new Div("divMASTXM", "absolute", "8", "263", null, null, "25", "222", this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "0", "25", null, "91", "0", null, this.divMASTXM);
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemBoxOut");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Shape02", "absolute", "0", "141", null, "91", "0", null, this.divMASTXM);
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemBoxOut");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static99", "absolute", "20", "34", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("7");
            obj.set_text("장애구분");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "286", "34", "79", "21", null, null, this.divMASTXM);
            obj.set_taborder("8");
            obj.set_text("장애등급");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "286", "60", "79", "21", null, null, this.divMASTXM);
            obj.set_taborder("9");
            obj.set_text("중증여부");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "536", "34", "71", "21", null, null, this.divMASTXM);
            obj.set_taborder("10");
            obj.set_text("장애유형");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "536", "60", "71", "21", null, null, this.divMASTXM);
            obj.set_taborder("11");
            obj.set_text("보훈구분");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "772", "34", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("12");
            obj.set_text("장애인정시기");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST", "absolute", "0", "4", "89", "21", null, null, this.divMASTXM);
            obj.set_taborder("13");
            obj.set_text("현장애보훈");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "772", "60", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("15");
            obj.set_text("보훈번호");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Edit("edtRCMP_NUMB_M", "absolute", "866", "60", "140", "21", null, null, this.divMASTXM);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Calendar("calHAAD_DATE_M", "absolute", "866", "34", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj = new Combo("cmbDEGC_CODE_M", "absolute", "604", "34", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchCombo");
            obj = new Combo("cmbREDN_CODE_M", "absolute", "604", "60", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj = new Combo("cmbDEDY_CODE_M", "absolute", "367", "34", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj = new Combo("cmbSVIM_YSNO_M", "absolute", "367", "60", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj = new Combo("cmbHALT_CODE_M", "absolute", "116", "34", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchCombo");
            obj = new Static("stGROP_LIST00", "absolute", "0", "120", "102", "21", null, null, this.divMASTXM);
            obj.set_taborder("23");
            obj.set_text("변경요청내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staHALT_CODE", "absolute", "20", "150", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("26");
            obj.set_text("장애구분");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staDEDY_CODE", "absolute", "286", "150", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("27");
            obj.set_text("장애등급");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staSVIM_YSNO", "absolute", "286", "176", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("28");
            obj.set_text("중증여부");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staDEGC_CODE", "absolute", "536", "150", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("29");
            obj.set_text("장애유형");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staREDN_CODE", "absolute", "536", "176", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("30");
            obj.set_text("보훈구분");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staHAAD_DATE", "absolute", "772", "150", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("31");
            obj.set_text("장애인정시기");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staRCMP_NUMB", "absolute", "772", "176", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("32");
            obj.set_text("보훈번호");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Edit("edtRCMP_NUMB", "absolute", "866", "176", "140", "21", null, null, this.divMASTXM);
            obj.set_taborder("33");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Calendar("calHAAD_DATE", "absolute", "866", "150", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Combo("cmbREDN_CODE", "absolute", "604", "176", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Combo("cmbDEDY_CODE", "absolute", "367", "150", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Combo("cmbSVIM_YSNO", "absolute", "367", "176", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Combo("cmbHALT_CODE", "absolute", "116", "150", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_readonly("true");
            obj = new Combo("cmbDEGC_CODE", "absolute", "604", "150", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static00", "absolute", "20", "60", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("45");
            obj.set_text("장애원인");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "20", "86", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("46");
            obj.set_text("보훈지정일자");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "286", "86", "79", "21", null, null, this.divMASTXM);
            obj.set_taborder("47");
            obj.set_text("유공자관계");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "536", "86", "71", "21", null, null, this.divMASTXM);
            obj.set_taborder("48");
            obj.set_text("유공자");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "772", "86", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("49");
            obj.set_text("해당지청");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Combo("cmbMAMR_CODE_M", "absolute", "367", "86", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj = new Edit("edtHDPP_NAME_M", "absolute", "866", "86", "140", "21", null, null, this.divMASTXM);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staRCMP_DATE", "absolute", "20", "202", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("53");
            obj.set_text("보훈지정일자");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staMAMR_CODE", "absolute", "286", "202", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("54");
            obj.set_text("유공자관계");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staMNOM_NAME", "absolute", "536", "202", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("55");
            obj.set_text("유공자");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staHDPP_NAME", "absolute", "772", "202", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("56");
            obj.set_text("해당지청");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Combo("cmbMAMR_CODE", "absolute", "367", "202", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.set_displayrowcount("10");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Edit("edtHDPP_NAME", "absolute", "866", "202", "140", "21", null, null, this.divMASTXM);
            obj.set_taborder("58");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Static("staHALT_PROW", "absolute", "20", "176", "95", "21", null, null, this.divMASTXM);
            obj.set_taborder("59");
            obj.set_text("장애원인");
            obj.set_cssclass("styFormItemCap");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Edit("edtHALT_PROW_M", "absolute", "116", "60", "140", "21", null, null, this.divMASTXM);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Edit("edtHALT_PROW", "absolute", "116", "176", "140", "21", null, null, this.divMASTXM);
            obj.set_taborder("61");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_readonly("true");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Calendar("calRCMP_DATE_M", "absolute", "116", "86", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj = new Calendar("calRCMP_DATE", "absolute", "116", "202", "140", "21", null, null, this.divMASTXM);
            this.divMASTXM.addChild(obj.name, obj);
            obj.set_taborder("63");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Edit("edtMNOM_NAME_M", "absolute", "604", "86", "140", "21", null, null, this.divMASTXM);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            this.divMASTXM.addChild(obj.name, obj);
            obj = new Edit("edtMNOM_NAME", "absolute", "604", "202", "140", "21", null, null, this.divMASTXM);
            obj.set_taborder("65");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divMASTXM.addChild(obj.name, obj);

            obj = new Div("divFAMILY", "absolute", "8", "263", null, null, "25", "15", this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Grid("grdHR_FAMILY", "absolute", "0", "25", null, "187", "0", null, this.divFAMILY);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_binddataset("dsHR_FAMILY");
            obj.set_wheelscrollrow("1");
            obj.set_readonly("true");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"92\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"성명\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"주민등록번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"관계명\"/><Cell col=\"3\" style=\"background: ;\" text=\"학력\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"직업\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"생년월일\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"부양여부\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" text=\"동거여부\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" text=\"건강보험등재여부\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" text=\"장애유형\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center\" text=\"bind:FMLY_NAME\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:FMLY_SSEC\" mask=\"######-#######\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:left\" text=\"bind:FREL_CODE\" editlimit=\"0\" editlengthunit=\"ascii\" combodisplayrowcount=\"15\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:SCCR_CODE\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left\" text=\"bind:FMLY_JOBX\" editlimit=\"40\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center\" text=\"bind:FMLY_BIRT\" editlimit=\"13\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:DOTE_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:LVTG_YSNO\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:HLIN_YSNO\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"combo\" style=\"align:left\" text=\"bind:HALT_CODE\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.divFAMILY.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST", "absolute", "0", "4", "89", "21", null, null, this.divFAMILY);
            obj.set_taborder("0");
            obj.set_text("현가족사항");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divFAMILY.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST00", "absolute", "0", "216", "102", "21", null, null, this.divFAMILY);
            obj.set_taborder("2");
            obj.set_text("변경요청내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divFAMILY.addChild(obj.name, obj);
            obj = new Grid("grdHR_FMLYRQ", "absolute", "0", "237", null, null, "0", "0", this.divFAMILY);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("12");
            obj.set_binddataset("dsHR_FMLYRQ");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"146\"/><Column size=\"90\"/><Column size=\"61\"/><Column size=\"61\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"변경구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"성명\"/><Cell col=\"2\" style=\"background: ;\" text=\"주민등록번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"관계명\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"학력\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"직업\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"생년월일\"/><Cell col=\"7\" style=\"background: ;\" text=\"부양여부\"/><Cell col=\"8\" style=\"background: ;\" text=\"동거여부\"/><Cell col=\"9\" style=\"background: ;\" text=\"건강보험등재여부\"/><Cell col=\"10\" style=\"background: ;\" text=\"장애유형\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align:center;color:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));color2:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));\" text=\"bind:CHDV_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:FMLY_NAME\" editlimit=\"0\" editlengthunit=\"ascii\" combodisplayrowcount=\"15\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:FMLY_SSEC\" mask=\"######-#######\" editlimit=\"13\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:left\" text=\"bind:FREL_CODE\" editlimit=\"40\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:SCCR_CODE\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left\" text=\"bind:FMLY_JOBX\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center;\" text=\"bind:FMLY_BIRT\" editlimit=\"100\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:SUPT_YSNO\"/><Cell col=\"8\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:LVTG_YSNO\"/><Cell col=\"9\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:HLIN_YSNO\"/><Cell col=\"10\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:HALT_CODE\"/></Band></Format></Formats>");
            this.divFAMILY.addChild(obj.name, obj);

            obj = new Div("divSCHCRR", "absolute", "8", "263", null, null, "25", "15", this);
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST", "absolute", "0", "4", "121", "21", null, null, this.divSCHCRR);
            obj.set_taborder("0");
            obj.set_text("현학력사항");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divSCHCRR.addChild(obj.name, obj);
            obj = new Grid("grdHR_SCHCRR", "absolute", "0", "25", null, "187", "0", null, this.divSCHCRR);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_binddataset("dsHR_SCHCRR");
            obj.set_wheelscrollrow("1");
            obj.set_readonly("true");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"105\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"학력\"/><Cell col=\"1\" text=\"학위\"/><Cell col=\"2\" text=\"학교명\"/><Cell col=\"3\" text=\"기타학교명\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"계열\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"전공\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"부/복수전공\"/><Cell col=\"7\" style=\"background: ;\" text=\"입학일\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" text=\"졸업일\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" text=\"소재지\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" text=\"최종학교여부\"/><Cell col=\"11\" displaytype=\"text\" style=\"background: ;\" text=\"입사전학력여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align:left;\" text=\"bind:SCDN_CODE\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:DGDN_CODE\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHL_CDNM\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHL_NAME\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:MJRA_CODE\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MAJR_CDNM\" editlimit=\"0\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MAJR_NAME\" editlimit=\"0\" editlengthunit=\"ascii\" combodisplayrowcount=\"15\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:ENIS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center;\" text=\"bind:GRDT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHL_SEAT\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:HISL_YSNO\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:ENSC_YSNO\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.divSCHCRR.addChild(obj.name, obj);
            obj = new Grid("grdHR_SCHLRQ", "absolute", "0", "237", null, null, "0", "0", this.divSCHCRR);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("12");
            obj.set_binddataset("dsHR_SCHLRQ");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"117\"/><Column size=\"95\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"102\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"67\"/><Column size=\"90\"/><Column size=\"105\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"변경구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"학력\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"학위\"/><Cell col=\"3\" style=\"background: ;\" text=\"학교명\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"기타학교명\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"계열\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"전공\"/><Cell col=\"7\" style=\"background: ;\" text=\"부/복수전공\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" text=\"입학일\"/><Cell col=\"9\" style=\"background: ;\" text=\"졸업일\"/><Cell col=\"10\" style=\"background: ;\" text=\"소재지\"/><Cell col=\"11\" style=\"background: ;\" text=\"최종학교여부\"/><Cell col=\"12\" style=\"background: ;\" text=\"입사전학력여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"color:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));color2:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));\" text=\"bind:CHDV_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:SCDN_CODE\" editlimit=\"0\" editlengthunit=\"ascii\" combodisplayrowcount=\"15\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:DGDN_CODE\" editlimit=\"0\" editlengthunit=\"ascii\" combodisplayrowcount=\"15\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHL_CDNM\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHL_NAME\" editlimit=\"40\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:MJRA_CODE\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MAJR_CDNM\" editlimit=\"0\" editlengthunit=\"ascii\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MAJR_NAME\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ENIS_DATE\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:GRDT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHL_SEAT\"/><Cell col=\"11\" displaytype=\"checkbox\" text=\"bind:HISL_YSNO\"/><Cell col=\"12\" displaytype=\"checkbox\" text=\"bind:ENSC_YSNO\"/></Band></Format></Formats>");
            this.divSCHCRR.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST00", "absolute", "0", "216", "124", "21", null, null, this.divSCHCRR);
            obj.set_taborder("21");
            obj.set_text("변경요청내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divSCHCRR.addChild(obj.name, obj);

            obj = new Div("divLICEXM", "absolute", "8", "263", null, null, "25", "15", this);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST", "absolute", "0", "4", "89", "21", null, null, this.divLICEXM);
            obj.set_taborder("1");
            obj.set_text("현자격사항");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divLICEXM.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST00", "absolute", "0", "216", "102", "21", null, null, this.divLICEXM);
            obj.set_taborder("3");
            obj.set_text("변경요청내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divLICEXM.addChild(obj.name, obj);
            obj = new Grid("grdHR_LICEXM", "absolute", "0", "25", null, "187", "0", null, this.divLICEXM);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_binddataset("dsHR_LICEXM");
            obj.set_wheelscrollrow("1");
            obj.set_readonly("true");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"200\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"자격면허명\"/><Cell col=\"1\" style=\"background: ;\" text=\"등급\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"취득일\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"발급기관\"/><Cell col=\"4\" text=\"자격면허번호\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"유효일\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:LICE_CDNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CTCS_CONM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ACQS_DATE\" editlimit=\"40\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ISSU_INNM\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:QFCA_LICN\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ENDX_DATE\" editlimit=\"0\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.divLICEXM.addChild(obj.name, obj);
            obj = new Grid("grdHR_LICERQ", "absolute", "0", "237", null, null, "0", "0", this.divLICEXM);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("13");
            obj.set_binddataset("dsHR_LICERQ");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"변경구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"자격면허명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"등급\"/><Cell col=\"3\" style=\"background: ;\" text=\"취득일\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"발급기관\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" text=\"자격면허번호\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"유효일\" editlimitbymask=\"both\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"color:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));color2:EXPR(CHDV_CODE == &quot;I&quot; ? &quot;#ff0000&quot; : ( CHDV_CODE == &quot;U&quot; ? &quot;#ff00ff&quot; : (CHDV_CODE == &quot;D&quot; ? &quot;#0000ff&quot; : &quot;#000000&quot;)));\" text=\"bind:CHDV_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:LICE_CDNM\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" combodisplayrowcount=\"15\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CTCS_CONM\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" combodisplayrowcount=\"15\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:ACQS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ISSU_INNM\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:QFCA_LICN\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ENDX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.divLICEXM.addChild(obj.name, obj);

            obj = new Grid("grdHR_MSTCRQ", "absolute", "8", "128", null, "135", "25", null, this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_MSTCRQ");
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_cssclass("styGrid01");
            obj.set_autoupdatetype("comboselect");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"169\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"승인구분\"/><Cell col=\"2\" text=\"신청구분\"/><Cell col=\"3\" text=\"신청일\"/><Cell col=\"4\" text=\"사원번호\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"소속\"/><Cell col=\"7\" text=\"부서\"/><Cell col=\"8\" displaytype=\"text\" text=\"신청내용\"/><Cell col=\"9\" displaytype=\"text\" text=\"증빙\"/><Cell col=\"10\" text=\"반려사유\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"expr:CHRC_CODE == &quot;1&quot; ? &quot;none&quot; : &quot;checkbox&quot;\" text=\"bind:SELE_CHEK\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:dataset.getOrgColumn(currow, &quot;CHRC_CODE&quot;) == &quot;1&quot; ? &quot;none&quot; : &quot;combo&quot;\" text=\"bind:CHRC_CODE\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:CGRG_CODE\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:CHRQ_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_100X\"/><Cell col=\"9\" displaytype=\"expr:FILE_IDXX == &quot;&quot; ? &quot;none&quot; : &quot;button&quot;\" edittype=\"expr:FILE_IDXX == &quot;&quot; ? &quot;none&quot; : &quot;button&quot;\" style=\"align:center;background: ;\" text=\"expr:FILE_IDXX == &quot;&quot; ? &quot;&quot; : &quot;다운로드&quot;\" editimemode=\"native\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"expr:CHRC_CODE == &quot;2&quot;? 'text' : 'none'\" style=\"align:left;\" text=\"bind:RJCT_PROW\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "191", "109", "573", "27", null, null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "168", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("10");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle4", "absolute", "345", "71", "49", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "387", "71", "70", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "459", "71", "22", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "482", "71", "80", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "583", "71", "49", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "625", "71", "70", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "697", "71", "22", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "720", "71", "80", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHRQ_STDT", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHRQ_ENDT", "absolute", "216", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRCHRC_CODE", "absolute", "1056", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchTitle01", "absolute", "987", "71", "76", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("승인구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCGRG_CODE", "absolute", "890", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchTitle02", "absolute", "821", "71", "76", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("신청구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CHRC_CODE", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("일괄승인");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("인사기록변경승인");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("28");
            obj.set_text("홈 > 인사관리 > 인사관리 > 인사기록변경승인");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("37");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("38");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "316", "61", "40", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "573", "263", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "647", "475", "80", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divFile", "absolute", "1195", "169", "407", "229", null, null, this);
            obj.set_taborder("25");
            obj.set_visible("false");
            obj.set_cssclass("divFile");
            this.addChild(obj.name, obj);
            obj = new Grid("grdTM_ATFILE", "absolute", "15", "48", "375", "136", null, null, this.divFile);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsTM_ATFILE");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"260\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"파일명\"/><Cell col=\"1\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"다운로드\"/></Band></Format></Formats>");
            this.divFile.addChild(obj.name, obj);
            obj = new Button("btnCancel", "absolute", null, "191", "62", "24", "14", null, this.divFile);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.divFile.addChild(obj.name, obj);
            obj = new Static("imgFormTitle", "absolute", "0", "0", null, "33", "0", null, this.divFile);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_cssclass("styFileTitle");
            this.divFile.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 442, this.divFRLANG,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.divFRLANG.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 450, this.divMASTXM,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.divMASTXM.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 450, this.divFAMILY,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.divFAMILY.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 450, this.divSCHCRR,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.divSCHCRR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 450, this.divLICEXM,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.divLICEXM.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 407, 229, this.divFile,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("25");
            		p.set_visible("false");
            		p.set_cssclass("divFile");

            	}
            );
            this.divFile.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인사기록변경승인");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","divMASTXM.edtRCMP_NUMB_M","value","dsHR_MASTXM","RCMP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divMASTXM.calHAAD_DATE_M","value","dsHR_MASTXM","HAAD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divMASTXM.cmbDEGC_CODE_M","value","dsHR_MASTXM","DEGC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divMASTXM.cmbREDN_CODE_M","value","dsHR_MASTXM","REDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divMASTXM.cmbDEDY_CODE_M","value","dsHR_MASTXM","DEDY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divMASTXM.cmbSVIM_YSNO_M","value","dsHR_MASTXM","SVIM_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divMASTXM.cmbHALT_CODE_M","value","dsHR_MASTXM","HALT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divMASTXM.edtRCMP_NUMB","value","dsHR_MASTRQ","RCMP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divMASTXM.calHAAD_DATE","value","dsHR_MASTRQ","HAAD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divMASTXM.cmbREDN_CODE","value","dsHR_MASTRQ","REDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divMASTXM.cmbDEDY_CODE","value","dsHR_MASTRQ","DEDY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","divMASTXM.cmbSVIM_YSNO","value","dsHR_MASTRQ","SVIM_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divMASTXM.cmbHALT_CODE","value","dsHR_MASTRQ","HALT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divMASTXM.cmbDEGC_CODE","value","dsHR_MASTRQ","DEGC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","divMASTXM.cmbMAMR_CODE_M","value","dsHR_MASTXM","MAMR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","divMASTXM.edtHDPP_NAME_M","value","dsHR_MASTXM","HDPP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","divMASTXM.cmbMAMR_CODE","value","dsHR_MASTRQ","MAMR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","divMASTXM.edtHDPP_NAME","value","dsHR_MASTRQ","HDPP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","divMASTXM.edtHALT_PROW_M","value","dsHR_MASTXM","HALT_PROW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divMASTXM.edtHALT_PROW","value","dsHR_MASTRQ","HALT_PROW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divMASTXM.calRCMP_DATE_M","value","dsHR_MASTXM","RCMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","divMASTXM.calRCMP_DATE","value","dsHR_MASTRQ","RCMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","divMASTXM.edtMNOM_NAME_M","value","dsHR_MASTXM","MNOM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","divMASTXM.edtMNOM_NAME","value","dsHR_MASTRQ","MNOM_NAME");
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
        this.addIncludeScript("HRMB0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMB0080.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMB0080 인사기록변경승인
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.24		안윤준		Initial Created.
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
        this.sBUTTONLIST  = "TTFFTTTF";
        this.sPACKAGENAME = "HRMB0080";

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
        	if ( this.sUSERLAVEL == "5" ) this.sBUTTONLIST    = "TTFFFFTF";
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.calSHRCHRQ_STDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ "01");
        	this.calSHRCHRQ_ENDT.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.cmbSHRCHRC_CODE.set_index("1");
        	
        	if ( this.sUSERLAVEL == "5" ) { // 개인
        		this.btn_CHRC_CODE.set_visible(false);
        		
        		this.edtSHRDEPT_CODE.set_enable(false);
        		this.imgHelpSHRDEPT_CODE.set_enable(false);
        		this.edtSHRDEPT_NAME.set_enable(false);
        		
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
                this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
                this.imgHelpSHREMPL_NUMB.set_enable(false);
                
                this.fnc_SetReadonly(this.edtSHREMPL_NUMB, true);
                this.fnc_SetReadonly(this.edtSHREMPL_NAME, true);
                this.grdHR_MSTCRQ.set_readonly(true);
                
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
        	this.fnc_DatasetClear("dsHR_MSTCRQ");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_MSTCRQ=dsHR_MSTCRQ";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

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

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsHR_MSTCRQ=dsHR_MSTCRQ:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
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
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_MSTCRQ", this);
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

        	if (this.fnc_DatasetChangeCheck("dsHR_MSTCRQ")) {
        		if (this.fnc_Message("TMM023") == false) return false;

        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_MSTCRQ")) {
        		this.fnc_Message("TMM003");
        		return false;

        	}

        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CHRQ_STDT=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHRQ_STDT.value));
        		sReturnString += " CHRQ_ENDT=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRCHRQ_ENDT.value));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " CGRG_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCGRG_CODE.value));
        		sReturnString += " CHRC_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCHRC_CODE.value));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);

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

        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsHR_MSTCRQ);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam 	= new Array();
        		var arrInt 		= 0;
        		arrParam[arrInt++] = "COMBO,cmbSHRCGRG_CODE,dsSHRCGRG_CODE,0";
        		arrParam[arrInt++] = "COMBO,cmbSHRCHRC_CODE,dsSHRCHRC_CODE,0";
        		arrParam[arrInt++] = "GRID,grdHR_MSTCRQ,dsCGRG_CODE,CGRG_CODE";
        		arrParam[arrInt++] = "GRID,grdHR_MSTCRQ,dsCHRC_CODE,CHRC_CODE";
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbHALT_CODE_M,dsHALT_CODE,0"; // 장애구분
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbDEDY_CODE_M,dsDEDY_CODE,0"; // 장애등급
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbDEGC_CODE_M,dsDEGC_CODE,0"; // 장애유형
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbREDN_CODE_M,dsREDN_CODE,0"; // 보훈구분
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbSVIM_YSNO_M,dsSVIM_YSNO,0"; // 중증여부
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbMAMR_CODE_M,dsFREL_CODE,0"; // 유공자관계
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbHALT_CODE,dsHALT_CODE,0"; // 장애구분
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbDEDY_CODE,dsDEDY_CODE,0"; // 장애등급
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbDEGC_CODE,dsDEGC_CODE,0"; // 장애유형
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbREDN_CODE,dsREDN_CODE,0"; // 보훈구분
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbSVIM_YSNO,dsSVIM_YSNO,0"; // 중증여부
        		arrParam[arrInt++] = "COMBO,divMASTXM.cmbMAMR_CODE,dsFREL_CODE,0"; // 유공자관계
        		arrParam[arrInt++] = "GRID,divFAMILY.grdHR_FMLYRQ,dsCHDV_CODE,CHDV_CODE";
        		arrParam[arrInt++] = "GRID,divFAMILY.grdHR_FMLYRQ,dsFREL_CODE,FREL_CODE";
        		arrParam[arrInt++] = "GRID,divFAMILY.grdHR_FMLYRQ,dsHALT_CODE,HALT_CODE";
        		arrParam[arrInt++] = "GRID,divFAMILY.grdHR_FMLYRQ,dsSCDN_CODE,SCCR_CODE";
        		arrParam[arrInt++] = "GRID,divFAMILY.grdHR_FAMILY,dsFREL_CODE,FREL_CODE";
        		arrParam[arrInt++] = "GRID,divFAMILY.grdHR_FAMILY,dsHALT_CODE,HALT_CODE";
        		arrParam[arrInt++] = "GRID,divFAMILY.grdHR_FAMILY,dsSCDN_CODE,SCCR_CODE";
        		arrParam[arrInt++] = "GRID,divSCHCRR.grdHR_SCHLRQ,dsCHDV_CODE,CHDV_CODE"; // 변경구분
        		arrParam[arrInt++] = "GRID,divSCHCRR.grdHR_SCHLRQ,dsSCDN_CODE,SCDN_CODE"; // 학교구분코드
        		arrParam[arrInt++] = "GRID,divSCHCRR.grdHR_SCHLRQ,dsMJRA_CODE,MJRA_CODE"; // 전공계열코드
        		arrParam[arrInt++] = "GRID,divSCHCRR.grdHR_SCHLRQ,dsDGDN_CODE,DGDN_CODE"; // 학위구분코드
        		arrParam[arrInt++] = "GRID,divSCHCRR.grdHR_SCHCRR,dsSCDN_CODE,SCDN_CODE"; // 학교구분코드
        		arrParam[arrInt++] = "GRID,divSCHCRR.grdHR_SCHCRR,dsMJRA_CODE,MJRA_CODE"; // 전공계열코드
        		arrParam[arrInt++] = "GRID,divSCHCRR.grdHR_SCHCRR,dsDGDN_CODE,DGDN_CODE"; // 학위구분코드
        		arrParam[arrInt++] = "GRID,divFRLANG.grdHR_FRLARQ,dsCHDV_CODE,CHDV_CODE";
        		arrParam[arrInt++] = "GRID,divFRLANG.grdHR_FRLARQ,dsKFLG_CODE,KFLG_CODE";
        		arrParam[arrInt++] = "GRID,divFRLANG.grdHR_FRLANG,dsKFLG_CODE,KFLG_CODE";
        		arrParam[arrInt++] = "GRID,divLICEXM.grdHR_LICERQ,dsCHDV_CODE,CHDV_CODE";
         		this.fnc_CommonCodeInnerBind(arrParam);

        		this.dsSHRCHRC_CODE.filter("COMD_CODE != 'S'");
        		this.dsCHRC_CODE.filter("COMD_CODE != 'S'");

         	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if(this.dsHR_MSTCRQ.getRowCount < 1) return;

        // 	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        // 
        // 		this.grdHR_MSTCRQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_MSTCRQ, "CHRQ_DATE"), "edittype", "normal");
        // 
        // 	} else {
        // 
        // 		this.grdHR_MSTCRQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_MSTCRQ, "CHRQ_DATE"), "edittype", "none");
        // 
        // 	}
        	
        	this.file_Search(); // 파일 검색
        	
        	this.divMASTXM.set_visible(false);
        	this.divFAMILY.set_visible(false);
        	this.divSCHCRR.set_visible(false);
        	this.divLICEXM.set_visible(false);
        	this.divFRLANG.set_visible(false);

        	//this.fnc_DatasetClear("dsHR_MASTXM,dsHR_FAMILY,dsHR_SCHCRR,dsHR_LICEXM,dsHR_FRLANG,dsHR_MASTRQ,dsHR_FMLYRQ,dsHR_SCHLRQ,dsHR_LICERQ,dsHR_FRLARQ");

        	var sCGRG_CODE = this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CGRG_CODE");

        	switch(sCGRG_CODE){

        		case "MASTXM" : //신상내역
        			this.divMASTXM.set_visible(true);

        			var sMethodName = "SEARCH00";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0020");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));

        			this.fnc_TransactionCall(this, "HRMB0020", sMethodName, sInDataSet, sOutDataSet, sArgument, "");

        			var sMethodName = "SEARCH01";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_MASTRQ=dsHR_MASTRQ";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0020");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));
        				sArgument += " CHRQ_DATE=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE"));
        				sArgument += " CHRQ_SEQN=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN"));

        			this.fnc_TransactionCall(this, "HRMB0020", sMethodName, sInDataSet, sOutDataSet, sArgument, "");

        			break;

        		case "FAMILY" : //가족
        			this.divFAMILY.set_visible(true);

        			var sMethodName = "SEARCH01";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_FAMILY=dsHR_FAMILY";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0030");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));

        			this.fnc_TransactionCall(this, "HRMB0030", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        			var sMethodName = "SEARCH02";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_FMLYRQ=dsHR_FMLYRQ";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0030");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));
        				sArgument += " CHRQ_DATE=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE"));
        				sArgument += " CHRQ_SEQN=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN"));

        			this.fnc_TransactionCall(this, "HRMB0030", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        			break;

        		case "SCHCRR" : //학력
        			this.divSCHCRR.set_visible(true);

        			var sMethodName = "SEARCH01";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_SCHCRR=dsHR_SCHCRR";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0040");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));

        			this.fnc_TransactionCall(this, "HRMB0040", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        			var sMethodName = "SEARCH02";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_SCHLRQ=dsHR_SCHLRQ";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0040");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));
        				sArgument += " CHRQ_DATE=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE"));
        				sArgument += " CHRQ_SEQN=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN"));

        			this.fnc_TransactionCall(this, "HRMB0040", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        			break;

        		case "LICEXM" : //자격
        			this.divLICEXM.set_visible(true);

        			var sMethodName = "SEARCH01";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_LICEXM=dsHR_LICEXM";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0060");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));

        			this.fnc_TransactionCall(this, "HRMB0060", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        			var sMethodName = "SEARCH02";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_LICERQ=dsHR_LICERQ";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0060");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));
        				sArgument += " CHRQ_DATE=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE"));
        				sArgument += " CHRQ_SEQN=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN"));

        			this.fnc_TransactionCall(this, "HRMB0060", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        			break;

        		case "FRLANG" : //외국어
        			this.divFRLANG.set_visible(true);

        			var sMethodName = "SEARCH01";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_FRLANG=dsHR_FRLANG";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0070");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));

        			this.fnc_TransactionCall(this, "HRMB0070", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        			var sMethodName = "SEARCH02";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_FRLARQ=dsHR_FRLARQ";
        			var sArgument  = " pgm="             + this.fnc_Quote("HRMB0070");
        				sArgument += " action="          + this.fnc_Quote(sMethodName);
        				sArgument += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "EMPL_NUMB"));
        				sArgument += " CHRQ_DATE=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_DATE"));
        				sArgument += " CHRQ_SEQN=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "CHRQ_SEQN"));

        			this.fnc_TransactionCall(this, "HRMB0070", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        			break;

        		default :
        			break;
        	}
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서SHR
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원SHR
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

        /*-------------------------------------+
         | 그리드 헤더 클릭 함수                 |
         +-------------------------------------*/
        this.grdHR_MSTCRQ_onheadclick = function(obj,e) {
        	if ( this.sUSERLAVEL == "5" ) return;
        	if ( e.cell == 0 ) {
        		var sCol = "SELE_CHEK";
        		var iCheckValue = 0;
        		var objDataSet = this.objects[obj.binddataset];
        		
        		if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        			obj.setCellProperty("head", e.cell, "text", "0");
        			iCheckValue = 0;
        		} else {
        			obj.setCellProperty("head", e.cell, "text", "1");
        			iCheckValue = 1;
        		}
        		
        		//obj.set_enableredraw(false);
        		for (var i = 0; i < objDataSet.rowcount; i++) {
        			if ( this.dsHR_MSTCRQ.getColumn(i, "CHRC_CODE") != "1" ) {
        				objDataSet.setColumn(i, sCol, iCheckValue);
        			}
        		}
        		//obj.set_enableredraw(true);this.dsHR_MSTCRQ.applyChange();
        		
        	}
        	
        }

        this.grd_oncellclick = function(obj,e) {
        	
        	if ( obj.name == "grdHR_MSTCRQ" ) {
        		if ( e.cell == 9 ) {
        			if ( this.dsHR_MSTCRQ.getColumn(e.row, "FILE_IDXX") == "" ) {
        				this.divFile.set_visible(false);
        			} else {
        				this.divFile.set_visible(true);
        				this.divFile.set_left(435);
        			}
        		}
        	} else if ( obj.name == "grdTM_ATFILE" ) {
        		if ( obj.getCellProperty("body", obj.currentcell, "text") == "다운로드" ) {
        			var filePath   = this.dsTM_ATFILE.getColumn(e.row,"FILE_PATH");
        			var phyFileNm  = this.dsTM_ATFILE.getColumn(e.row,"PFIL_NAME");
        			var realFileNm = this.dsTM_ATFILE.getColumn(e.row,"LFIL_NAME");
        			if (this.fnc_Length(filePath) > 0) {
        				this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        			}
        		}
        	}
        	
        }

        this.file_Search = function(){
        	var sMethodName = "SEARCH04";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_ATFILE=dsTM_ATFILE";
        	var sArgument  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sArgument += " action="          + this.fnc_Quote(sMethodName);
        		sArgument += " FILE_IDXX=" 		 + this.fnc_Quote(this.dsHR_MSTCRQ.getColumn(this.dsHR_MSTCRQ.rowposition, "FILE_IDXX"));

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.divFile_btnCancel_onclick = function(obj,e) {
        	this.divFile.set_visible(false);;
        }

        this.btn_CHRC_CODE_onclick = function(obj,e) {
        	
        	var saveChk = 0;
        	for ( var i=0; i<this.dsHR_MSTCRQ.getRowCount(); i++ ) {
        		if ( this.dsHR_MSTCRQ.getColumn(i, "SELE_CHEK") == "1" ) {
        			this.dsHR_MSTCRQ.setColumn(i, "CHRC_CODE", "1");
        			saveChk++;
        		}
        	}
        	
        	return;
        }

        this.dsHR_MSTCRQ_oncolumnchanged = function(obj,e){
        	
        	if (e.columnid == "CHRC_CODE"){
        		var sAppdName = "";
        		if(e.newvalue == "2" ) { // 반려
        			sAppdName = "반려";
        			this.grdHR_MSTCRQ.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdHR_MSTCRQ, "RJCT_PROW"),"cssclass" ,"Cellgrd_WF_essential");
        			
        		}else if(e.newvalue == "1" ) { //승인
        			sAppdName = "승인";
        			this.grdHR_MSTCRQ.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdHR_MSTCRQ, "RJCT_PROW"),"cssclass" ,"");
        		}
        		
        		//WORK 알림 저장 값 
        		this.dsHR_MSTCRQ.setColumn(e.row, "SYST_LNCD", application.GBL_LANGCD);
        		this.dsHR_MSTCRQ.setColumn(e.row, "WORK_USID", application.GBL_USERID);
        		this.dsHR_MSTCRQ.setColumn(e.row, "WKNT_EMNR", this.dsHR_MSTCRQ.getColumn(e.row, "EMPL_NUMB"));
        		this.dsHR_MSTCRQ.setColumn(e.row, "WKNT_TYCD", "HRM021");
        		this.dsHR_MSTCRQ.setColumn(e.row, "SOUS_LNKY", this.dsHR_MSTCRQ.getColumn(e.row, "EMPL_NUMB")+"-"+this.dsHR_MSTCRQ.getColumn(e.row, "CHRQ_DATE")+"-"+this.dsHR_MSTCRQ.getColumn(e.row, "CHRQ_SEQN"));
        		this.dsHR_MSTCRQ.setColumn(e.row, "WKNT_CNTT", this.dsHR_MSTCRQ.getColumn(e.row, "STSD_NAME") + " 변경 신청이 "+  sAppdName  +"되었습니다.");
        	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_MSTCRQ.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_MSTCRQ.addEventHandler("oncolumnchanged", this.dsHR_MSTCRQ_oncolumnchanged, this);
            this.dsHR_MASTXM.addEventHandler("oncolumnchanged", this.dsHR_MASTXM_oncolumnchanged, this);
            this.dsHR_MASTRQ.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divFRLANG.grdHR_FRLARQ.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.divMASTXM.edtRCMP_NUMB_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.calHAAD_DATE_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.edtRCMP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.calHAAD_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.edtHDPP_NAME_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.edtHDPP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.edtHALT_PROW_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.edtHALT_PROW.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.calRCMP_DATE_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.calRCMP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.edtMNOM_NAME_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divMASTXM.edtMNOM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divSCHCRR.grdHR_SCHLRQ.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.divSCHCRR.grdHR_SCHLRQ.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.divLICEXM.grdHR_LICERQ.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdHR_MSTCRQ.addEventHandler("onheadclick", this.grdHR_MSTCRQ_onheadclick, this);
            this.grdHR_MSTCRQ.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRCHRQ_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRCHRQ_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCHRC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCGRG_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_CHRC_CODE.addEventHandler("onclick", this.btn_CHRC_CODE_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.divFile.grdTM_ATFILE.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.divFile.btnCancel.addEventHandler("onclick", this.divFile_btnCancel_onclick, this);

        };

        this.loadIncludeScript("HRMB0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
