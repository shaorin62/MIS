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
                this.set_name("YEAA0070_2015");
                this.set_titletext("연말정산처리(2015)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">FRDE_CODE</Col><Col id=\"DSNAME\">dsFRDE_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">LFDN_CODE</Col><Col id=\"DSNAME\">dsLFDN_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">HALT_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsHALT_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"CODEID\">EEDI_CODE</Col><Col id=\"DSNAME\">dsEEDI_CODE</Col></Row><Row><Col id=\"DSNAME\">dsBEPW_YSNO</Col><Col id=\"CODEID\">BEPW_YSNO</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsNTAX_CODE</Col><Col id=\"CODEID\">NTAX_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsPIDD_CODE</Col><Col id=\"CODEID\">PIDD_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsPIDD_CODE1</Col><Col id=\"CODEID\">PIDD_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsPIDD_CODE2</Col><Col id=\"CODEID\">PIDD_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsPIDD_CODE3</Col><Col id=\"CODEID\">PIDD_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsPIDD_CODE4</Col><Col id=\"CODEID\">PIDD_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsHUSF_CODE</Col><Col id=\"CODEID\">HUSF_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsMETE_CODE</Col><Col id=\"CODEID\">METE_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DOTE_CODE</Col><Col id=\"DSNAME\">dsDOTE_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"CODEID\">DTDN_CODE</Col><Col id=\"DSNAME\">dsDTDN_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">YEAA0010</Col><Col id=\"DSNAME\">dsYEA_MEDISP_FAMI</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row><Row><Col id=\"COMBOID\">YEAA0011</Col><Col id=\"DSNAME\">dsYEA_DONASP_FAMI</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_CHK\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_STD_YY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DEPT_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INOFFICE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INOFFICE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_POST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RANK_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DEPT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_SECTOR_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DEPT_FULL_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_POST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RANK_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INOFFICE_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR025\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_YEFAMI", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAMI_SEQ\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM001\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM002\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM003\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM004\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM005\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM006\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM007\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM008\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM009\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM010\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM011\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM012\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM013\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM014\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM015\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM016\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM017\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM018\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM019\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM020\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM021\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM022\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_FAM_NUM023\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ETC\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PAYDTL", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PAY_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PAY_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM020\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM021\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM022\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM023\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM024\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM025\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM026\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_BFWORK", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR006\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_BFNTAX", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_NON_TAX_CD\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PENSAV1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PENS_SEQ\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_STR001\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR002\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR003\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_FINA_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PENSAV2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PENS_SEQ\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_STR001\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR002\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR003\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_FINA_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PENSAV3", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PENS_SEQ\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_STR001\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR002\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR003\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_FINA_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PENSAV4", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PENS_SEQ\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_STR001\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR002\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR003\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_FINA_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_RENTA1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RENT_SEQ1\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT1_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR006\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT1_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT1_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_RENTA2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RENT_SEQ2\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR006\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR007\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR008\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR009\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR010\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_MEDISP", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAMI_SEQ\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_MEDI_SEQ\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_MES_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR008\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR006\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR007\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_MES_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_DONASP", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAMI_SEQ\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DONA_SEQ\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR006\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR007\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR008\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR009\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_DONAAD", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DONA_SEQ\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOA_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOA_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOA_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOA_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOA_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOA_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_INCDEC", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM020\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM021\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM077\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM078\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM079\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM080\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM022\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM023\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM024\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM081\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM025\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM026\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM082\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM029\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM030\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM031\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM032\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM033\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM027\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM028\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM083\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM084\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM034\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM035\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM036\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM037\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM038\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM039\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM040\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM041\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM042\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM085\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM086\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM087\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM043\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM045\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM046\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM047\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM048\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM088\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM089\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM049\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM050\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM051\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM052\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM053\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM054\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM055\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM056\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM057\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM058\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM059\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM060\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM061\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM062\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM063\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM064\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM065\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM066\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM067\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM044\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM068\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM069\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM070\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM071\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM072\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM073\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM074\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM075\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM076\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_STR001\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR006\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR007\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR008\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR009\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR010\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR011\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR012\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR013\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR014\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR015\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR016\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR017\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR018\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR019\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR020\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR021\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR022\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR023\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR024\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR025\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR026\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR048\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR049\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR050\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_SSN\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_YEPROC", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM020\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM021\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM022\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM023\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM024\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM025\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM026\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM027\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM104\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM105\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM106\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM107\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM028\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM029\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM030\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM031\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM032\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM033\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM034\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM035\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM036\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM037\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM038\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM040\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM041\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM042\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM043\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM044\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM045\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM046\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM047\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM048\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM049\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM050\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM051\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM052\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM053\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM054\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM098\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM099\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM100\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM101\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM055\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM056\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM057\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM058\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM059\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM060\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM061\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM062\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM063\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM064\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM065\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM066\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM067\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM068\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM069\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM070\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM071\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM072\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM039\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM108\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM073\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM074\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM075\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM076\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM077\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM078\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM079\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM080\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM081\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM082\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM083\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM084\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM085\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM086\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM087\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM088\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM089\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM090\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM091\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM092\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM093\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM094\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM095\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM096\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM097\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM098\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM099\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM100\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM101\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM102\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM103\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_INCDEC_RPT1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_SSN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_HIRE_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_QUIT_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM020\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM021\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM022\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM023\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM024\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM025\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM026\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM034\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM035\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM036\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM037\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM038\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM039\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM040\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM041\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM042\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM043\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM044\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM045\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM046\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM047\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM048\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_STR001\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR002\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR004\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR005\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR006\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR007\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR008\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR009\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_NUM049\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM050\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM051\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM052\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM053\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM054\" size=\"2\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM055\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM056\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM057\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM058\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM059\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM060\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM061\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM062\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM063\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM064\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM065\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM066\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM067\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM068\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM070\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM071\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM072\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_STR010\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR011\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR012\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR013\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR014\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR015\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_NUM073\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM074\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RATE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR016\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR017\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_NUM075\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM076\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_STR018\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR020\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR021\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR022\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR023\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR024\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_HOME_ADDRESS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_HOME_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_ADDRESS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_TEL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_TAXOFFIC_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_LIVE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_NATION_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_NATION_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_CNT001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_INCDEC_RPT2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_FAM_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR004\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR005\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR006\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR007\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR008\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR009\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PENSAV_RPT1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_PENS_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_FINA_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PENSAV_RPT2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_PENS_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_FINA_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PENSAV_RPT3", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_PENS_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_FINA_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PENSAV_RPT4", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_PENS_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PEN_FINA_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PEN_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_RENTA1_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RENT_SEQ1\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT1_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_STR006\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT1_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT1_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT1_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_RENTA2_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RENT_SEQ2\" size=\"5\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR005\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR006\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR007\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR008\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR009\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_STR010\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RT2_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_RT2_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_MEDISP_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_MES_STR005\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR006\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR007\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_MES_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_MES_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR004\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_MES_STR008\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_DONASP_RPT1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_DOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR006\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR009\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR007\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR008\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR005\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_DONASP_RPT2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_DOS_STR005\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOS_SUM\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_SUM_10\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_SUM_20\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_SUM_40\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_SUM_41\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_SUM_42\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_DOS_SUM_50\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_DONAAD_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_DONA_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_NUM001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_NUM002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_NUM003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_NUM004\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_NUM005\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DOA_NUM006\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_YEPROC_RPT1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_EMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_LIVE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_LOFO_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RATE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_LIVE_NATION_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_LIVE_NATION_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_NATION_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_NATION_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR024\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_ADDRESS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_SSN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_HOME_ADDRESS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_HIRE_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_QUIT_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PAY_SUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_SUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM026\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM027\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_SUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_STR002_1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO_1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR003_1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR004_1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR005_1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR006_1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_NUM001_1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM002_1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM003_1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM004_1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM005_1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM006_1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_SUM001_1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FORE_AMT1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NIGH_NTAX1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_REAR_NTAX1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_41\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_51\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_61\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_71\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_251\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_19_1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_REDU_TOT1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_TOT1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_STR002_2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO_2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR003_2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR004_2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR005_2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR006_2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_NUM001_2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM002_2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM003_2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM004_2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM005_2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM006_2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_SUM001_2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FORE_AMT2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NIGH_NTAX2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_REAR_NTAX2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_42\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_52\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_62\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_72\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_252\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_19_2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_REDU_TOT2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_TOT2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_STR002_3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO_3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR003_3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR004_3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR005_3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_STR006_3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BFW_NUM001_3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM002_3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM003_3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM004_3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM005_3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_NUM006_3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_BFW_SUM001_3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FORE_AMT3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NIGH_NTAX3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_REAR_NTAX3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_43\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_53\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_63\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_73\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_18_253\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_19_3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_REDU_TOT3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_NTAX_TOT3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM083\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM084\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM085\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INCO_AMT1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_JUMI_AMT1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FARM_AMT1\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INCO_AMT2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_JUMI_AMT2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FARM_AMT2\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INCO_AMT3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_JUMI_AMT3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FARM_AMT3\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM089\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM090\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM095\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM096\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM097\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM091\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM092\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM093\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM094\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM020\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM021\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM022\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM023\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM024\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM025\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM026\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM027\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM028\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM029\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM030 \" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM031\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM032\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM033\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM034\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM035\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM036\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM037\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM038\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM039\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM040\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM041\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM042\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM043\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM044\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM045\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM046\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM047\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM048\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM049\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM050\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM051\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM052\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM053\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM054\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM055\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM056\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM057\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM058\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM059\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM060\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM061\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM062\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM063\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM064\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM065\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM066\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM067\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM068\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM069\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM070\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM071\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM072\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM073\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM074\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM075\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM076\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM077\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM078\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM079\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM080\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM081\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM082\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_CNT005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_SUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_SUM021\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_SUM022\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_SUM023\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM104\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM105\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM106\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PRC_NUM107\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_YEPROC_RPT2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_FAM_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR003\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR004\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR005\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR006\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR007\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR008\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_STR009\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAM_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM008   \" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM010 \" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAM_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PAYDTL_RPT1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BIZ_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_SSN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAMI_CNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_ADDRESS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_HIRE_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_QUIT_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_LOFO_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_NATION_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_NATION_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CHILD_CNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EXEMPT_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EXEMPT_RULE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EXEMPT_SDATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EXEMPT_EDATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_PAYDTL_RPT2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_EMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PAY_YYMM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PAY_SUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_SUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PAY_NUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM010\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM026\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM027\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_SUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM020\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM021\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM022\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_NUM023\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_SUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_PAY_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "3", "262", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_MASTXM", "absolute", "8", "22", "331", null, null, "15", this);
            obj.set_taborder("3");
            obj.set_binddataset("dsYEA_MASTXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" displaytype=\"text\" text=\"확정여부\"/><Cell col=\"8\" displaytype=\"text\" text=\"마감\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:YEA_CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background2: ;\" text=\"bind:YEA_EMP_NO\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;background2: ;\" text=\"bind:YEA_EMP_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:YEA_SECTOR_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:YEA_DEPT_NM\"/><Cell col=\"5\" text=\"bind:YEA_POST_NM\"/><Cell col=\"6\" text=\"bind:YEA_RANK_NM\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:YEA_PRC_STR001\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:YEA_INC_STR025\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "339", "28", "20", "60", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab0", "absolute", "359", "22", null, null, "8", "15", this);
            obj.set_tabindex("0");
            obj.set_multiline("false");
            obj.set_cssclass("styTabControl");
            obj.style.set_buttonpadding("8 12 6 12");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.Tab0);
            obj.set_text("부양가족");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "6", "246", "21", null, null, this.Tab0.tab1);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdYEA_YEFAMI", "absolute", "10", "25", null, null, "10", "10", this.Tab0.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsYEA_YEFAMI");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"79\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"22\" band=\"head\"/><Row size=\"22\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"관계\" wordwrap=\"true\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"2\" colspan=\"4\" displaytype=\"text\" text=\"인적공제항목\"/><Cell col=\"6\" rowspan=\"3\" displaytype=\"text\" text=\"구분\"/><Cell col=\"7\" colspan=\"13\" displaytype=\"text\" text=\"각종 소득공제 항목\"/><Cell row=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"내외&#10;국인\" wordwrap=\"true\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민등록번호\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"기본공제\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"장애인공제\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"경로우대\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"출산입양\"/><Cell row=\"1\" col=\"7\" colspan=\"3\" displaytype=\"text\" text=\"보험료\"/><Cell row=\"1\" col=\"10\" colspan=\"2\" displaytype=\"text\" text=\"의료비\"/><Cell row=\"1\" col=\"12\" rowspan=\"2\" colspan=\"2\" displaytype=\"text\" text=\"교육비\"/><Cell row=\"1\" col=\"14\" colspan=\"5\" displaytype=\"text\" text=\"신용카드 등 사용액공제\"/><Cell row=\"1\" col=\"19\" rowspan=\"2\" displaytype=\"text\" text=\"기부금\"/><Cell row=\"2\" col=\"2\" displaytype=\"text\" text=\"부녀자공제\"/><Cell row=\"2\" col=\"3\" displaytype=\"text\" text=\"한부모\"/><Cell row=\"2\" col=\"4\" displaytype=\"text\" text=\"6세이하\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"7\" displaytype=\"text\" text=\"건강고용등\"/><Cell row=\"2\" col=\"8\" text=\"보장성\"/><Cell row=\"2\" col=\"9\" text=\"장애인\"/><Cell row=\"2\" col=\"10\" displaytype=\"text\" text=\"의료비\"/><Cell row=\"2\" col=\"11\" displaytype=\"text\" text=\"난임시술비\"/><Cell row=\"2\" col=\"14\" displaytype=\"text\" text=\"신용카드\"/><Cell row=\"2\" col=\"15\" displaytype=\"text\" text=\"직불카드\"/><Cell row=\"2\" col=\"16\" displaytype=\"text\" text=\"현금영수증\"/><Cell row=\"2\" col=\"17\" displaytype=\"text\" text=\"전통시장\"/><Cell row=\"2\" col=\"18\" displaytype=\"text\" text=\"대중교통\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR001\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR003\" editlimit=\"30\" editimemode=\"native\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR005\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background2: ;\" text=\"bind:YEA_FAM_STR009\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR006\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR012\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;background2: ;\" text=\"국세청자료\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM001\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM003\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM020\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" editfilter=\"none\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM005\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" editfilter=\"none\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM022\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background2: ;\" text=\"bind:YEA_FAM_STR010\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM007\" editlimit=\"15\" editautoselect=\"false\" editlengthunit=\"ascii\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM009\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM011\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM013\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM014\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM016\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"19\" displaytype=\"number\" edittype=\"none\" editfilter=\"none\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM018\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR002\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" edittype=\"masknumber\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR004\" mask=\"######-#######\"/><Cell row=\"1\" col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR007\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR008\"/><Cell row=\"1\" col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background2: ;\" text=\"bind:YEA_FAM_STR011\"/><Cell row=\"1\" col=\"5\" style=\"background2: ;\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" style=\"align:center;background2: ;\" text=\"그밖의자료\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM002\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM004\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM021\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" edittype=\"none\" editfilter=\"none\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM006\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"none\" editfilter=\"none\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM023\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM008\" editlimit=\"15\" editautoselect=\"false\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM010\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM012\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"16\" celltype=\"none\" displaytype=\"number\" style=\"align:right;background2: ;\"/><Cell row=\"1\" col=\"17\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM015\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"18\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM017\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"19\" displaytype=\"number\" edittype=\"none\" editfilter=\"none\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAM_NUM019\" editlimit=\"15\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM001&quot;) + dataset.getSum(&quot;YEA_FAM_NUM002&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM003&quot;) + dataset.getSum(&quot;YEA_FAM_NUM004&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM020&quot;) + dataset.getSum(&quot;YEA_FAM_NUM021&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM005&quot;) + dataset.getSum(&quot;YEA_FAM_NUM006&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM022&quot;) + dataset.getSum(&quot;YEA_FAM_NUM023&quot;)\"/><Cell col=\"12\" displaytype=\"text\" style=\"align:right;\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM007&quot;) + dataset.getSum(&quot;YEA_FAM_NUM008&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM009&quot;) + dataset.getSum(&quot;YEA_FAM_NUM010&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM011&quot;) + dataset.getSum(&quot;YEA_FAM_NUM012&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM013&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM014&quot;) + dataset.getSum(&quot;YEA_FAM_NUM015&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM016&quot;) + dataset.getSum(&quot;YEA_FAM_NUM017&quot;)\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_FAM_NUM018&quot;) + dataset.getSum(&quot;YEA_FAM_NUM019&quot;)\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "4", "60", "19", "73", null, this.Tab0.tab1);
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "4", "60", "19", "10", null, this.Tab0.tab1);
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.Tab0);
            obj.set_text("근로소득");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "170", "20", null, null, this.Tab0.tab2);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            obj.set_usedecorate("true");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdYEA_PAYDTL", "absolute", "10", "25", null, null, "10", "10", this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsYEA_PAYDTL");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"22\" band=\"head\"/><Row size=\"22\" band=\"head\"/><Row size=\"22\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" displaytype=\"text\" text=\"귀속년월\"/><Cell col=\"1\" colspan=\"7\" displaytype=\"text\" text=\"근로소득지급명세\"/><Cell col=\"8\" colspan=\"4\" displaytype=\"text\" text=\"비과세소득\"/><Cell col=\"12\" colspan=\"12\" displaytype=\"text\" text=\"근로소득원천징수액\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"급여액\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"기타소득\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"상여액\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"인정상여\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"주식매수&#10;선택권&#10;행사이익\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"우리사주&#10;인출금\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"임원&#10;퇴직소득&#10;한도초과액\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" displaytype=\"text\" text=\"국외근로\"/><Cell row=\"1\" col=\"9\" rowspan=\"2\" displaytype=\"text\" text=\"출산보육수당\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" displaytype=\"text\" text=\"비과세학자금\"/><Cell row=\"1\" col=\"11\" rowspan=\"2\" displaytype=\"text\" text=\"신고제외&#10;비과세\"/><Cell row=\"1\" col=\"12\" rowspan=\"2\" displaytype=\"text\" text=\"감면세액\"/><Cell row=\"1\" col=\"13\" colspan=\"3\" displaytype=\"text\" text=\"기납부세액\"/><Cell row=\"1\" col=\"16\" colspan=\"3\" text=\"납부특례세액\"/><Cell row=\"1\" col=\"19\" colspan=\"5\" displaytype=\"text\" text=\"징수의무자 자체증빙 지출액\"/><Cell row=\"2\" col=\"13\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"2\" col=\"14\" displaytype=\"text\" text=\"지방소득세\"/><Cell row=\"2\" col=\"15\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"2\" col=\"16\" text=\"소득세\"/><Cell row=\"2\" col=\"17\" text=\"지방소득세\"/><Cell row=\"2\" col=\"18\" text=\"농특세\"/><Cell row=\"2\" col=\"19\" displaytype=\"text\" text=\"연금보험\"/><Cell row=\"2\" col=\"20\" displaytype=\"text\" text=\"건강보험\"/><Cell row=\"2\" col=\"21\" displaytype=\"text\" text=\"고용보험\"/><Cell row=\"2\" col=\"22\" displaytype=\"text\" text=\"노동조합비\"/><Cell row=\"2\" col=\"23\" displaytype=\"text\" text=\"기부금\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:YEA_PAY_YYMM\" mask=\"####-##\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM002\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM003\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM004\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM005\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM006\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right\" text=\"bind:YEA_PAY_NUM007\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM009\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM011\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM026\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM013\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM014\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM015\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM016\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM017\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM018\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM019\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM020\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"19\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM021\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"20\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM022\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"21\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM023\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"22\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM024\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM025\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM001&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM002&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM003&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM004&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM005&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM006&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"dataset.getSum(&quot;YEA_PAY_NUM007&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM009&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM011&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM026&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM013&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM014&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM015&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM016&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM017&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM018&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM019&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM020&quot;)\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM021&quot;)\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM022&quot;)\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM023&quot;)\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM024&quot;)\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM025&quot;)\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Tabpage("tab3", this.Tab0);
            obj.set_text("종근무지");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdYEA_BFWORK", "absolute", "10", "25", null, "216", "10", null, this.Tab0.tab3);
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsYEA_BFWORK");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"79\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사업자번호\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"구분\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"회사명\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근무시작일\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근무종료일\"/><Cell col=\"5\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"감면시작일\"/><Cell col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"감면종료일\"/><Cell col=\"7\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"급여총액\"/><Cell col=\"8\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"상여총액\"/><Cell col=\"9\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"인정상여\"/><Cell col=\"10\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"주식매수선택권행사이익\"/><Cell col=\"11\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"우리사주인출금\"/><Cell col=\"12\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"임원퇴직소득한도초과액\"/><Cell col=\"13\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"국민연금\"/><Cell col=\"14\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"건강보험\"/><Cell col=\"15\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"고용보험\"/><Cell col=\"16\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"소득세\"/><Cell col=\"17\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"지방소득세\"/><Cell col=\"18\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"농특세\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background2: ;\" text=\"bind:YEA_BIZ_NO\" mask=\"###-##-#####\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background2: ;\" text=\"bind:YEA_BFW_STR001\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background2: ;\" text=\"bind:YEA_BFW_STR002\" editlimit=\"40\" editimemode=\"native\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background2: ;\" text=\"bind:YEA_BFW_STR003\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background2: ;\" text=\"bind:YEA_BFW_STR004\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background2: ;\" text=\"bind:YEA_BFW_STR005\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background2: ;\" text=\"bind:YEA_BFW_STR006\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM001\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM002\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM003\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM004\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM005\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM006\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM007\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM008\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM009\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM010\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM011\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_BFW_NUM012\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"text\"/><Cell col=\"3\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"text\"/><Cell col=\"5\" displaytype=\"text\"/><Cell col=\"6\" displaytype=\"text\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM001&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM002&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM003&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM004&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM005&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM006&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM007&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM008&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM009&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM010&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM011&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM012&quot;)\"/></Band></Format></Formats>");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Grid("grdYEA_BFNTAX", "absolute", "10", "266", null, null, "10", "10", this.Tab0.tab3);
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsYEA_BFNTAX");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"239\" band=\"left\"/><Column size=\"172\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"비과세/감면 항목\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"비과세액/감면금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_NON_TAX_CD\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_BFN_NUM001\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFN_NUM001&quot;)\"/></Band></Format></Formats>");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "3", "60", "19", "73", null, this.Tab0.tab3);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "3", "60", "19", "10", null, this.Tab0.tab3);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Button("btnAddRow1", "absolute", null, "244", "60", "19", "73", null, this.Tab0.tab3);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Button("btnDelRow1", "absolute", null, "244", "60", "19", "10", null, this.Tab0.tab3);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "10", "6", "93", "21", null, null, this.Tab0.tab3);
            obj.set_taborder("19");
            obj.set_text("근로소득내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "126", "6", "243", "21", null, null, this.Tab0.tab3);
            obj.set_taborder("20");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Static("stInformation04", "absolute", "115", "9", "10", "13", null, null, this.Tab0.tab3);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "247", "93", "21", null, null, this.Tab0.tab3);
            obj.set_taborder("23");
            obj.set_text("근로소득내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Static("stInformation1", "absolute", "126", "247", "243", "21", null, null, this.Tab0.tab3);
            obj.set_taborder("24");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "115", "250", "10", "13", null, null, this.Tab0.tab3);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Tabpage("tab4", this.Tab0);
            obj.set_text("연금·저축");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdYEA_PENSAV1", "absolute", "10", "25", null, "94", "10", null, this.Tab0.tab4);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("21");
            obj.set_binddataset("dsYEA_PENSAV1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"218\"/><Column size=\"175\"/><Column size=\"183\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"퇴직연금구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"불입금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR001\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_FINA_NAME\" editimemode=\"native\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR003\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PEN_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Grid("grdYEA_PENSAV2", "absolute", "10", "144", null, "92", "10", null, this.Tab0.tab4);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("23");
            obj.set_binddataset("dsYEA_PENSAV2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"218\"/><Column size=\"175\"/><Column size=\"183\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"연금저축구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"불입금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR001\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_FINA_NAME\" editimemode=\"native\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR003\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PEN_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Grid("grdYEA_PENSAV3", "absolute", "10", "261", null, "92", "10", null, this.Tab0.tab4);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("25");
            obj.set_binddataset("dsYEA_PENSAV3");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"105\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"저축구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"불입금액\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"2015.01.01 이후&#10;가입 여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR001\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_FINA_NAME\" editimemode=\"native\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR003\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PEN_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"4\" celltype=\"none\" displaytype=\"checkbox\" edittype=\"expr:YEA_PEN_STR001 == '34'? 'none' : 'checkbox'\" editfilter=\"none\" style=\"align:center;background:white;background2:white;\" text=\"bind:YEA_PEN_STR005\" editlimit=\"-1\" editlengthunit=\"utf16\"/></Band></Format></Formats>");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Grid("grdYEA_PENSAV4", "absolute", "10", "378", null, null, "10", "10", this.Tab0.tab4);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("33");
            obj.set_binddataset("dsYEA_PENSAV4");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"240\"/><Column size=\"240\"/><Column size=\"240\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"불입금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_FINA_NAME\" editimemode=\"native\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR003\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PEN_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnAddRow1", "absolute", null, "3", "60", "19", "73", null, this.Tab0.tab4);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnDelRow1", "absolute", null, "3", "60", "19", "10", null, this.Tab0.tab4);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnAddRow2", "absolute", null, "122", "60", "19", "73", null, this.Tab0.tab4);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnDelRow2", "absolute", null, "122", "60", "19", "10", null, this.Tab0.tab4);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnAddRow3", "absolute", null, "239", "60", "19", "73", null, this.Tab0.tab4);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnDelRow3", "absolute", null, "239", "60", "19", "10", null, this.Tab0.tab4);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnAddRow4", "absolute", null, "356", "60", "19", "73", null, this.Tab0.tab4);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnDelRow4", "absolute", null, "356", "60", "19", "10", null, this.Tab0.tab4);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "10", "6", "95", "21", null, null, this.Tab0.tab4);
            obj.set_taborder("37");
            obj.set_text("퇴직연금공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "126", "6", "168", "21", null, null, this.Tab0.tab4);
            obj.set_taborder("38");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation04", "absolute", "115", "9", "10", "13", null, null, this.Tab0.tab4);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "125", "95", "21", null, null, this.Tab0.tab4);
            obj.set_taborder("41");
            obj.set_text("연금저축공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "126", "125", "168", "21", null, null, this.Tab0.tab4);
            obj.set_taborder("42");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "115", "128", "10", "13", null, null, this.Tab0.tab4);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "10", "242", "132", "21", null, null, this.Tab0.tab4);
            obj.set_taborder("45");
            obj.set_text("주택마련저축공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation03", "absolute", "141", "245", "10", "13", null, null, this.Tab0.tab4);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "10", "359", "182", "21", null, null, this.Tab0.tab4);
            obj.set_taborder("48");
            obj.set_text("장기집합투자증권저축공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation05", "absolute", "205", "359", "168", "21", null, null, this.Tab0.tab4);
            obj.set_taborder("49");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation06", "absolute", "193", "362", "10", "13", null, null, this.Tab0.tab4);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation02", "absolute", "152", "242", "168", "21", null, null, this.Tab0.tab4);
            obj.set_taborder("52");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Tabpage("tab5", this.Tab0);
            obj.set_text("월세주택");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdYEA_RENTA1", "absolute", "10", "25", null, "171", "10", null, this.Tab0.tab5);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("15");
            obj.set_binddataset("dsYEA_RENTA1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"22\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대인&#10;성명\" wordwrap=\"true\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민(사업자)&#10;번호\" wordwrap=\"true\"/><Cell col=\"2\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주택유형\" wordwrap=\"true\"/><Cell col=\"3\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주택계약&#10;면적(㎡)\" wordwrap=\"true\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대차계약서상&#10;주소지\" wordwrap=\"true\"/><Cell col=\"5\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대차계약&#10;개시일\" wordwrap=\"true\"/><Cell col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대차계약&#10;종료일\" wordwrap=\"true\"/><Cell col=\"7\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"연간월세액\"/><Cell col=\"8\" displaytype=\"text\" style=\"backgroundimage:&#10;;\" text=\"공제금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:&#10;;\" text=\"bind:YEA_RT1_STR001\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;background:&#10;;\" text=\"bind:YEA_RT1_STR002\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:YEA_RT1_STR003\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:YEA_RT1_NUM003\" mask=\"###.##\" editlimit=\"-1\" editautoselect=\"true\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:&#10;;\" text=\"bind:YEA_RT1_STR004\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background:&#10;;\" text=\"bind:YEA_RT1_STR005\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background:&#10;;\" text=\"bind:YEA_RT1_STR006\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:&#10;;\" text=\"bind:YEA_RT1_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YEA_RT1_NUM002\" mask=\"#,##0\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Grid("grdYEA_RENTA2_1", "absolute", "10", "221", null, "158", "6", null, this.Tab0.tab5);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("16");
            obj.set_binddataset("dsYEA_RENTA2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"22\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"대주&#10;성명\" wordwrap=\"true\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민등록번호\" wordwrap=\"true\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금전소비&#10;대차계약&#10;시작일\" wordwrap=\"true\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금전소비&#10;대차계약&#10;종료일\" wordwrap=\"true\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"차입금&#10;이자율&#10;(%)\" wordwrap=\"true\"/><Cell col=\"5\" colspan=\"3\" displaytype=\"text\" text=\"원리금 상환액\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"text\" text=\"공제금액\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"계\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"원리금\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"이자\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:&#10;;\" text=\"bind:YEA_RT2_STR001\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;background:&#10;;\" text=\"bind:YEA_RT2_STR002\" mask=\"######-#######\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:YEA_RT2_STR003\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:YEA_RT2_STR004\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" style=\"align:right;background:&#10;;\" text=\"bind:YEA_RT2_NUM001\" mask=\"##.##\" editlimit=\"2\" editautoselect=\"true\" editlimitbymask=\"both\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YEA_RT2_NUM002\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:&#10;;\" text=\"bind:YEA_RT2_NUM003\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:&#10;;\" text=\"bind:YEA_RT2_NUM004\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YEA_RT2_NUM005\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Grid("grdYEA_RENTA2_2", "absolute", "10", "404", null, null, "6", "10", this.Tab0.tab5);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("19");
            obj.set_binddataset("dsYEA_RENTA2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"22\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대인&#10;성명\" wordwrap=\"true\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민등록번호\" wordwrap=\"true\"/><Cell col=\"2\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주택유형\" wordwrap=\"true\"/><Cell col=\"3\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주택계약&#10;면적(㎡)\" wordwrap=\"true\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대차계약서상&#10;주소지\" wordwrap=\"true\"/><Cell col=\"5\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대차계약&#10;개시일\" wordwrap=\"true\"/><Cell col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대차계약&#10;종료일\" wordwrap=\"true\"/><Cell col=\"7\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전세보증금\" wordwrap=\"true\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_RT2_STR005\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;background: ;\" text=\"bind:YEA_RT2_STR006\" mask=\"######-#######\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:YEA_RT2_STR007\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:YEA_RT2_NUM006\" mask=\"###.##\" editautoselect=\"true\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_RT2_STR008\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_RT2_STR009\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_RT2_STR010\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_RT2_NUM007\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Button("btnAddRow1", "absolute", null, "3", "60", "19", "73", null, this.Tab0.tab5);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Button("btnDelRow1", "absolute", null, "3", "60", "19", "10", null, this.Tab0.tab5);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Button("btnAddRow2", "absolute", null, "199", "60", "19", "71", null, this.Tab0.tab5);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Button("btnDelRow2", "absolute", null, "199", "60", "19", "8", null, this.Tab0.tab5);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "10", "6", "159", "21", null, null, this.Tab0.tab5);
            obj.set_taborder("25");
            obj.set_text("월세액 소득공제 명세서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "188", "6", "176", "21", null, null, this.Tab0.tab5);
            obj.set_taborder("26");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("stInformation04", "absolute", "177", "9", "10", "13", null, null, this.Tab0.tab5);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "202", "165", "21", null, null, this.Tab0.tab5);
            obj.set_taborder("29");
            obj.set_text("금전소비대차 계약내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "183", "202", "176", "21", null, null, this.Tab0.tab5);
            obj.set_taborder("30");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "172", "205", "10", "13", null, null, this.Tab0.tab5);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "10", "385", "119", "21", null, null, this.Tab0.tab5);
            obj.set_taborder("33");
            obj.set_text("임대차 계약내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("stInformation02", "absolute", "144", "385", "176", "21", null, null, this.Tab0.tab5);
            obj.set_taborder("34");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("stInformation03", "absolute", "133", "388", "10", "13", null, null, this.Tab0.tab5);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Tabpage("tab6", this.Tab0);
            obj.set_text("의료명세");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "6", "328", "21", null, null, this.Tab0.tab6);
            obj.set_taborder("7");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tab6.addChild(obj.name, obj);
            obj = new Grid("grdYEA_MEDISP", "absolute", "10", "25", null, null, "10", "10", this.Tab0.tab6);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("8");
            obj.set_binddataset("dsYEA_MEDISP");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"94\" band=\"left\"/><Column size=\"111\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사업자번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"상호\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"지급&#10;건수\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급액\"/><Cell col=\"5\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"의료증빙코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"난임시술비&#10;여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:YEA_MES_STR003\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;background: ;\" text=\"bind:YEA_MES_STR007\" mask=\"###-##-#####\" editimemode=\"native\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_MES_STR006\" editlimit=\"40\" editimemode=\"native\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_MES_NUM001\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_MES_NUM002\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_MES_STR001\" combodataset=\"dsEVID_CODE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" editfilter=\"none\" style=\"align:center;background:white;background2:white;\" text=\"bind:YEA_MES_STR008\" editlimit=\"-1\" editlengthunit=\"utf16\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"text\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_MES_NUM001&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_MES_NUM002&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.Tab0.tab6.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "3", "60", "19", "73", null, this.Tab0.tab6);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab6.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "3", "60", "19", "10", null, this.Tab0.tab6);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab6.addChild(obj.name, obj);
            obj = new Tabpage("tab7", this.Tab0);
            obj.set_text("기부명세");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "6", "216", "21", null, null, this.Tab0.tab7);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Grid("grdYEA_DONASP", "absolute", "10", "25", null, "337", "10", null, this.Tab0.tab7);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("11");
            obj.set_binddataset("dsYEA_DONASP");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"156\"/><Column size=\"129\"/><Column size=\"96\"/><Column size=\"61\"/><Column size=\"53\"/><Column size=\"79\"/><Column size=\"72\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"기부자&#10;성명\" wordwrap=\"true\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" text=\"기부처 인적사항\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"기부유형\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"기부내용\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"기부&#10;건수\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"기부액\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"자료구분\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사업자(주민)번호(-제외)\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"상호\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:YEA_DOS_STR003\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;background: ;\" text=\"bind:YEA_DOS_STR008\" editimemode=\"native\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_DOS_STR007\" editlimit=\"40\" editimemode=\"native\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:YEA_DOS_STR006\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_DOS_STR009\" editlimit=\"100\" editimemode=\"native\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_DOS_NUM001\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_DOS_NUM002\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_DOS_STR001\" editimemode=\"native\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:right;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:right;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:right;\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_DOS_NUM001&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_DOS_NUM002&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\"/></Band></Format></Formats>");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Grid("grdYEA_DONAAD", "absolute", "10", "387", null, null, "10", "10", this.Tab0.tab7);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("12");
            obj.set_binddataset("dsYEA_DONAAD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selectchangetype("up");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"66\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"95\"/><Column size=\"101\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"기부금코드\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"기부연도\" wordwrap=\"true\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"기부금액\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"전년까지&#10;공제된금액\" wordwrap=\"true\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"공제대상&#10;금액\" wordwrap=\"true\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"해당연도&#10;공제금액\" wordwrap=\"true\"/><Cell col=\"6\" colspan=\"2\" displaytype=\"text\" text=\"해당연도에 공제받지 못한 금액\" wordwrap=\"true\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"소멸금액\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"이월금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:YEA_DOA_STR001\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" editfilter=\"number\" style=\"align:center;background: ;\" text=\"bind:YEA_DOA_STR002\" mask=\"####\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_DOA_NUM001\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_DOA_NUM002\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_DOA_NUM003\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_DOA_NUM004\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_DOA_NUM005\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_DOA_NUM006\" editlimit=\"15\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_DOA_NUM001&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_DOA_NUM002&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_DOA_NUM003&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_DOA_NUM004&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_DOA_NUM005&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_DOA_NUM006&quot;)\"/></Band></Format></Formats>");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "3", "60", "19", "73", null, this.Tab0.tab7);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "3", "60", "19", "10", null, this.Tab0.tab7);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Button("btnAddRow2", "absolute", null, "365", "60", "19", "73", null, this.Tab0.tab7);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Button("btnDelRow2", "absolute", null, "365", "60", "19", "10", null, this.Tab0.tab7);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Static("stInformation03", "absolute", "132", "371", "10", "13", null, null, this.Tab0.tab7);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Static("stInformation1", "absolute", "143", "368", "168", "21", null, null, this.Tab0.tab7);
            obj.set_taborder("19");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "9", "368", "111", "21", null, null, this.Tab0.tab7);
            obj.set_taborder("20");
            obj.set_text("기부금 조정명세");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab7.addChild(obj.name, obj);
            obj = new Tabpage("tab8", this.Tab0);
            obj.set_text("소득공제");
            obj.set_scrollbars("none");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdYEA_INCDEC", "absolute", "8", "8", null, null, "8", "8", this.Tab0.tab8);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_binddataset("dsYEA_INCDEC");
            obj.set_scrollpixel("all");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selectchangetype("up");
            obj.set_useselcolor("false");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"65\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"55\"/><Column size=\"115\"/><Column size=\"110\"/></Columns><Rows><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"19\"/><Row size=\"21\"/><Row size=\"19\"/><Row size=\"19\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"21\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"19\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/></Rows><Band id=\"body\"><Cell colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"구분\"/><Cell col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"지출명세\"/><Cell col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"지출구분\"/><Cell col=\"8\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"금액\"/><Cell row=\"1\" rowspan=\"11\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"연&#10;금&#10;보&#10;험&#10;료&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"1\" col=\"1\" rowspan=\"11\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"연금보험료&#10;(국민연금,&#10;공무원연금,&#10;군인연금,&#10;교직원연금,&#10;퇴직연금&#10;등)\" wordwrap=\"true\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"국민연금보험료\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"종(전)근무지\"/><Cell row=\"1\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"1\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM001\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"2\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주(현)근무지\"/><Cell row=\"2\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"2\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM002\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"3\" col=\"2\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기타연금보험료 (공무원연금)\" wordwrap=\"true\"/><Cell row=\"3\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"종(전)근무지\"/><Cell row=\"3\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"3\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM003\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"4\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주(현)근무지\"/><Cell row=\"4\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"4\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM004\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"5\" col=\"2\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기타연금보험료 (군인연금)\" wordwrap=\"true\"/><Cell row=\"5\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"종(전)근무지\"/><Cell row=\"5\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"5\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM005\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"6\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주(현)근무지\"/><Cell row=\"6\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"6\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM006\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"7\" col=\"2\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기타연금보험료 (사립학교교직원연금)\" wordwrap=\"true\"/><Cell row=\"7\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"종(전)근무지\"/><Cell row=\"7\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"7\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM007\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"8\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주(현)근무지\"/><Cell row=\"8\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"8\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM008\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"9\" col=\"2\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기타연금보험료 (별정우체국연금)\" wordwrap=\"true\"/><Cell row=\"9\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"종(전)근무지\"/><Cell row=\"9\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"9\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM009\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"10\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주(현)근무지\"/><Cell row=\"10\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"10\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM010\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"11\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"연금보험료 계\"/><Cell row=\"11\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#ebebebff;\"/><Cell row=\"11\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM001+YEA_INC_NUM002+YEA_INC_NUM003+YEA_INC_NUM004+YEA_INC_NUM005+YEA_INC_NUM006+YEA_INC_NUM007+YEA_INC_NUM008+YEA_INC_NUM009+YEA_INC_NUM010\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"12\" rowspan=\"17\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"특&#10;별&#10;소&#10;득&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"12\" col=\"1\" rowspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"12\" col=\"2\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"국민건강보험 (노인장기요양보험포함)\" wordwrap=\"true\"/><Cell row=\"12\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"종(전)근무지\"/><Cell row=\"12\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"12\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM011\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"13\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주(현)근무지\"/><Cell row=\"13\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"13\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM012\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"14\" col=\"2\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"고용보험\"/><Cell row=\"14\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"종(전)근무지\"/><Cell row=\"14\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"14\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM013\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"15\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주(현)근무지\"/><Cell row=\"15\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"15\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM014\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"16\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료 계\"/><Cell row=\"16\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#ebebebff;\"/><Cell row=\"16\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM011+YEA_INC_NUM012+YEA_INC_NUM013+YEA_INC_NUM014\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"17\" col=\"1\" rowspan=\"12\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주택자금\"/><Cell row=\"17\" col=\"2\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주택임차차입금\"/><Cell row=\"17\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"대출기관차입\"/><Cell row=\"17\" col=\"7\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"원리금상환액\"/><Cell row=\"17\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM015\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"18\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"거주자차입\"/><Cell row=\"18\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM016\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"19\" col=\"2\" rowspan=\"3\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"장기주택저당차입금&#10;(2011년이전)\" wordwrap=\"true\"/><Cell row=\"19\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"15년 미만\"/><Cell row=\"19\" col=\"7\" rowspan=\"9\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"이자 상환액\"/><Cell row=\"19\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM017\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"20\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"15년~29년\"/><Cell row=\"20\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM018\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"21\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"30년 이상\"/><Cell row=\"21\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM019\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"22\" col=\"2\" rowspan=\"2\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"장기주택저당차입금&#10;(2012년이후)\" wordwrap=\"true\"/><Cell row=\"22\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"고정금리이면서, 비거치\"/><Cell row=\"22\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM020\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"23\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기타대출\"/><Cell row=\"23\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM021\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"24\" col=\"2\" rowspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"장기주택저당차입금&#10;(2015년이후)\"/><Cell row=\"24\" col=\"3\" rowspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"15년이상\"/><Cell row=\"24\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"고정금리이면서, 비거치\"/><Cell row=\"24\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM077\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"25\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"고정금리이거나, 비거치\"/><Cell row=\"25\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM078\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"26\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기타대출\"/><Cell row=\"26\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM079\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"27\" col=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"10~15년\"/><Cell row=\"27\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"고정금리이거나, 비거치\"/><Cell row=\"27\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM080\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"28\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주택자금 공제액 계\"/><Cell row=\"28\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#ebebebff;\"/><Cell row=\"28\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM015+YEA_INC_NUM016+YEA_INC_NUM017+YEA_INC_NUM018+YEA_INC_NUM019+YEA_INC_NUM020+YEA_INC_NUM021+YEA_INC_NUM077+YEA_INC_NUM078+YEA_INC_NUM079+YEA_INC_NUM080\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"29\" rowspan=\"40\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"그&#10;밖&#10;의&#10;소&#10;득&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"29\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"개인연금저축(2000년 이전 가입)\" wordwrap=\"true\"/><Cell row=\"29\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납입금액\"/><Cell row=\"29\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM022\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"30\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"소기업,소상공인 공제부금 소득공제\"/><Cell row=\"30\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"불입금액\"/><Cell row=\"30\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM023\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"31\" col=\"1\" rowspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주택마련저축&#10;소득공제\" wordwrap=\"true\"/><Cell row=\"31\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"청약저축(2014.12.31 이전 가입분)\"/><Cell row=\"31\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납입금액\"/><Cell row=\"31\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM024\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"32\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"청약저축(2015.01.01 이후 가입분)\"/><Cell row=\"32\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납입금액\"/><Cell row=\"32\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM081\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"33\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"근로자주택마련저축\"/><Cell row=\"33\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납입금액\"/><Cell row=\"33\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM025\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"34\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주택청약종합저축(2014.12.31 이전 가입분)\"/><Cell row=\"34\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납입금액\"/><Cell row=\"34\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM026\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"35\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주택청약종합저축(2015.01.01 이후 가입분)\"/><Cell row=\"35\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납입금액\"/><Cell row=\"35\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM082\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"36\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주택마련저축소득공제 계\"/><Cell row=\"36\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#ebebebff;\"/><Cell row=\"36\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM024+YEA_INC_NUM025+YEA_INC_NUM026+YEA_INC_NUM081+YEA_INC_NUM082\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"37\" col=\"1\" rowspan=\"10\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"투자조합&#10;출자공제\" wordwrap=\"true\"/><Cell row=\"37\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ① 2013년 출자 · 투자분(10% 해당분)\"/><Cell row=\"37\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"37\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM029\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"38\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ② 2013년 출자 · 투자분(30% 해당분)\"/><Cell row=\"38\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"38\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM030\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"39\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ③ 2014년 출자 · 투자분(10% 해당분)\"/><Cell row=\"39\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"39\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM031\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"40\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ④ 2014년 출자 · 투자분(50% 해당분)\"/><Cell row=\"40\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"40\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM032\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"41\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑤ 2014년 출자 · 투자분(30% 해당분)\"/><Cell row=\"41\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"41\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM033\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"42\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑥ 2015년 이후 출자 · 투자분(10% 해당분)\"/><Cell row=\"42\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"42\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM027\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"43\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑦ 2015년 이후 출자 · 투자분(100% 해당분)\"/><Cell row=\"43\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"43\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM028\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"44\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑧ 2015년 이후 출자 · 투자분(50% 해당분)\"/><Cell row=\"44\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"44\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM083\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"45\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑨ 2015년 이후 출자 · 투자분(30% 해당분)\"/><Cell row=\"45\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출자,투자금액\"/><Cell row=\"45\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM084\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"46\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"투자조합 출자공제 계\"/><Cell row=\"46\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"align:left;background:#ebebebff;\"/><Cell row=\"46\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM027+YEA_INC_NUM028+YEA_INC_NUM029+YEA_INC_NUM030+YEA_INC_NUM031+YEA_INC_NUM032+YEA_INC_NUM033 +YEA_INC_NUM083 +YEA_INC_NUM084\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"47\" col=\"1\" rowspan=\"13\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"신용카드등&#10;사용액&#10;소득공제\" wordwrap=\"true\"/><Cell row=\"47\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ① 신용카드 (전통시장·대중교통사용분 제외)\"/><Cell row=\"47\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"47\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM034\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"48\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ② 직불·선불카드 (전통시장·대중교통사용분 제외)\"/><Cell row=\"48\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"48\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM035\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"49\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ③ 현금영수증 (전통시장·대중교통사용분 제외)\"/><Cell row=\"49\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"49\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM036\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"50\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ④ 전통시장사용분\"/><Cell row=\"50\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"50\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM037\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"51\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑤ 대중교통이용분\"/><Cell row=\"51\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"51\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM038\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"52\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"계(①+②+③+④+⑤)\"/><Cell row=\"52\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#ebebebff;\"/><Cell row=\"52\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM034+YEA_INC_NUM035+YEA_INC_NUM036+YEA_INC_NUM037+YEA_INC_NUM038\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"53\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑥ 본인 신용카드 사용액(2013년)\"/><Cell row=\"53\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"53\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM039\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"54\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑦ 본인 신용카드 사용액(2014년)\"/><Cell row=\"54\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"54\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM040\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"55\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑧ 본인 추가공제율 사용분(2013년)\"/><Cell row=\"55\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"55\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM041\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"56\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑨ 본인 추가공제율 사용분(2015년 상반기)\"/><Cell row=\"56\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"56\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM042\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"57\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑩ 본인 신용카드등 사용액(2015년)\"/><Cell row=\"57\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"57\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM085\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"58\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑪ 본인 추가공제율 사용분(2014년)\"/><Cell row=\"58\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"58\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM086\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"59\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\"   ⑫ 본인 추가공제율 사용분(2015년 하반기)\"/><Cell row=\"59\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"사용금액\"/><Cell row=\"59\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM087\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"60\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"우리사주 출연금 소득공제\"/><Cell row=\"60\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"출연금액\"/><Cell row=\"60\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_INC_NUM043\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"61\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"고용유지중소기업 근로자 소득공제\"/><Cell row=\"61\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"임금삭감액\"/><Cell row=\"61\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM045\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"62\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"목돈 안드는 전세 이자상환액\"/><Cell row=\"62\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"이자상환액\"/><Cell row=\"62\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM046\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"63\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"장기집합투자증권저축\"/><Cell row=\"63\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납입금액\"/><Cell row=\"63\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM047\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"64\" rowspan=\"43\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"세&#10;액&#10;감&#10;면&#10;및&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"64\" col=\"1\" rowspan=\"9\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"세액감면\"/><Cell row=\"64\" col=\"2\" rowspan=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"외국인 근로자\" wordwrap=\"true\"/><Cell row=\"64\" col=\"3\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"입국목적\"/><Cell row=\"64\" col=\"8\" celltype=\"body\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR001\"/><Cell row=\"65\" col=\"3\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기술도입계약 또는 근로제공일\"/><Cell row=\"65\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR002\" calendardisplaynulltype=\"none\"/><Cell row=\"66\" col=\"3\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"감면기간 만료일\"/><Cell row=\"66\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR003\" calendardisplaynulltype=\"none\"/><Cell row=\"67\" col=\"3\" rowspan=\"2\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"외국인근로소득 감면\"/><Cell row=\"67\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"접수일\"/><Cell row=\"67\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR004\" calendardisplaynulltype=\"none\"/><Cell row=\"68\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"제출일\"/><Cell row=\"68\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR005\" calendardisplaynulltype=\"none\"/><Cell row=\"69\" col=\"3\" rowspan=\"2\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"근로소득에 대한 조세조약상 면제\" wordwrap=\"true\"/><Cell row=\"69\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"접수일\"/><Cell row=\"69\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR006\" calendardisplaynulltype=\"none\"/><Cell row=\"70\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"제출일\"/><Cell row=\"70\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR007\" calendardisplaynulltype=\"none\"/><Cell row=\"71\" col=\"2\" rowspan=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"중소기업 취업 청년 감면\"/><Cell row=\"71\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"취업일\"/><Cell row=\"71\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR008\" calendardisplaynulltype=\"none\"/><Cell row=\"72\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"감면기간 종료일\"/><Cell row=\"72\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR009\" calendardisplaynulltype=\"none\"/><Cell row=\"73\" col=\"1\" rowspan=\"34\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"세액공제\"/><Cell row=\"73\" col=\"2\" rowspan=\"4\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"연금계좌\"/><Cell row=\"73\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"과학기술인공제\"/><Cell row=\"73\" col=\"7\" rowspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"73\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM049\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"74\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"근로자퇴직급여보장법에따른 퇴직연금\"/><Cell row=\"74\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM050\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"75\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"연금저축\"/><Cell row=\"75\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM051\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"76\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"연금계좌 계\"/><Cell row=\"76\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"background:#ebebebff;\"/><Cell row=\"76\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM049+YEA_INC_NUM050+YEA_INC_NUM051\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"77\" col=\"2\" rowspan=\"18\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"특별세액공제\"/><Cell row=\"77\" col=\"3\" rowspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료\"/><Cell row=\"77\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"일반보장성보험\"/><Cell row=\"77\" col=\"7\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"지출액\"/><Cell row=\"77\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM052\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"78\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"장애인전용보장성보험\"/><Cell row=\"78\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM053\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"79\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"보험료 계\"/><Cell row=\"79\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"background:#ebebebff;\"/><Cell row=\"79\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM052+YEA_INC_NUM053\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"80\" col=\"3\" rowspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"의료비\"/><Cell row=\"80\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"본인·65세이상·장애인·난임시술비\"/><Cell row=\"80\" col=\"7\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"지출액\"/><Cell row=\"80\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM054\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"81\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"그밖의 공제대상자\"/><Cell row=\"81\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM055\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"82\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"의료비 계\"/><Cell row=\"82\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"background:#ebebebff;\"/><Cell row=\"82\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM054+YEA_INC_NUM055\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"83\" col=\"3\" rowspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"교육비\"/><Cell row=\"83\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"소득자본인\"/><Cell row=\"83\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"공납금(대학원포함)\"/><Cell row=\"83\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM056\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"84\" col=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#deebfeff;\" text=\"취학전아동\"/><Cell row=\"84\" col=\"5\" celltype=\"body\" displaytype=\"number\" style=\"background:#ebebebff;\" text=\"bind:YEA_INC_NUM057\"/><Cell row=\"84\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\" 명\"/><Cell row=\"84\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"유치원비,학원비등\"/><Cell row=\"84\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM058\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"85\" col=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#deebfeff;\" text=\"초,중,고등학교\"/><Cell row=\"85\" col=\"5\" celltype=\"body\" displaytype=\"number\" style=\"background:#ebebebff;\" text=\"bind:YEA_INC_NUM059\"/><Cell row=\"85\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\" 명\"/><Cell row=\"85\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"공납금\"/><Cell row=\"85\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM060\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"86\" col=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#deebfeff;\" text=\"대학생(대학원불포함)\"/><Cell row=\"86\" col=\"5\" celltype=\"body\" displaytype=\"number\" style=\"background:#ebebebff;\" text=\"bind:YEA_INC_NUM061\"/><Cell row=\"86\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\" 명\"/><Cell row=\"86\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"공납금\"/><Cell row=\"86\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM062\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"87\" col=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#deebfeff;\" text=\"장애인\"/><Cell row=\"87\" col=\"5\" celltype=\"body\" displaytype=\"number\" style=\"background:#ebebebff;\" text=\"bind:YEA_INC_NUM063\"/><Cell row=\"87\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#deebfeff;\" text=\" 명\"/><Cell row=\"87\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"특수교육비\"/><Cell row=\"87\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM064\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"88\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"교육비 계\"/><Cell row=\"88\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"background:#ebebebff;\"/><Cell row=\"88\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM056+YEA_INC_NUM058+YEA_INC_NUM060+YEA_INC_NUM062+YEA_INC_NUM064\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"89\" col=\"3\" rowspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기부금\"/><Cell row=\"89\" col=\"4\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"정치자금기부금\"/><Cell row=\"89\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"10만원이하\"/><Cell row=\"89\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기부금액\"/><Cell row=\"89\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM065\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"90\" col=\"5\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"10만원초과\"/><Cell row=\"90\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기부금액\"/><Cell row=\"90\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM066\" mask=\"#,##0\"/><Cell row=\"91\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"법정기부금\"/><Cell row=\"91\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기부금액\"/><Cell row=\"91\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM067\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"92\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"우리사주조합기부금\"/><Cell row=\"92\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기부금액\"/><Cell row=\"92\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM044\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"93\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"지정기부금\"/><Cell row=\"93\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기부금액\"/><Cell row=\"93\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM068\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"94\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"기부금 계\"/><Cell row=\"94\" col=\"7\" celltype=\"body\" displaytype=\"text\" style=\"background:#ebebebff;\"/><Cell row=\"94\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" expr=\"YEA_INC_NUM065+YEA_INC_NUM066+YEA_INC_NUM067+YEA_INC_NUM068+YEA_INC_NUM044\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell row=\"95\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"공제종류\"/><Cell row=\"95\" col=\"7\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"내역\"/><Cell row=\"96\" col=\"2\" rowspan=\"9\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"외국납부세액\"/><Cell row=\"96\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"국외원천소득\"/><Cell row=\"96\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM070\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"97\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납세액(외화)\"/><Cell row=\"97\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM071\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"98\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납세액(원화)\"/><Cell row=\"98\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM072\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"99\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납세국명\"/><Cell row=\"99\" col=\"8\" celltype=\"body\" displaytype=\"text\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR010\" editautoselect=\"true\"/><Cell row=\"100\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"납부일\"/><Cell row=\"100\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR011\" calendardisplaynulltype=\"none\"/><Cell row=\"101\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"신청서제출일\"/><Cell row=\"101\" col=\"8\" celltype=\"body\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR012\" calendardisplaynulltype=\"none\"/><Cell row=\"102\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"국외근무처\"/><Cell row=\"102\" col=\"8\" celltype=\"body\" displaytype=\"text\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR013\" editautoselect=\"true\"/><Cell row=\"103\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"근무기간\"/><Cell row=\"103\" col=\"8\" celltype=\"body\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR014\" editautoselect=\"true\"/><Cell row=\"104\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"직책\"/><Cell row=\"104\" col=\"8\" celltype=\"body\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;background: ;\" text=\"bind:YEA_INC_STR015\" editautoselect=\"true\"/><Cell row=\"105\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"주택자금 차입금 이자 세액공제\"/><Cell row=\"105\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"이자상환액\"/><Cell row=\"105\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_INC_NUM073\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell row=\"106\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"월세세액공제\"/><Cell row=\"106\" col=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"지출액\"/><Cell row=\"106\" col=\"8\" celltype=\"body\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;\" text=\"bind:YEA_INC_NUM074\"/><Cell row=\"107\" colspan=\"8\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#deebfeff;\" text=\"세대주여부\"/><Cell row=\"107\" col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:YEA_INC_STR024\"/></Band></Format></Formats>");
            this.Tab0.tab8.addChild(obj.name, obj);
            obj = new Tabpage("tab9", this.Tab0);
            obj.set_text("연말정산");
            obj.set_scrollbars("none");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdYEA_YEPROC", "absolute", "10", "10", null, null, "10", "10", this.Tab0.tab9);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsYEA_YEPROC");
            obj.set_scrollpixel("all");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_useselcolor("false");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"45\"/><Column size=\"38\"/><Column size=\"55\"/><Column size=\"86\"/><Column size=\"0\"/><Column size=\"99\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"64\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"20\"/></Rows><Band id=\"body\"><Cell rowspan=\"44\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#d6d6d6ff;background2:#d6d6d6ff;selectbackground:#d6d6d6ff;selectcolor: ;\" text=\"정&#10;산&#10;명&#10;세\"/><Cell col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#f6f6f6ff;selectcolor:#e9e9e9ff;\" text=\"총급여\"/><Cell col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM001\"/><Cell col=\"9\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"소득공제종합한도초과액\" wordwrap=\"true\"/><Cell col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM044\"/><Cell row=\"1\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#f6f6f6ff;selectcolor:#e9e9e9ff;\" text=\"근로소득공제\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM002\"/><Cell row=\"1\" col=\"9\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"종합소득 과세표준\" wordwrap=\"true\"/><Cell row=\"1\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM045\"/><Cell row=\"2\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#f6f6f6ff;selectcolor:#e9e9e9ff;\" text=\"근로소득금액\"/><Cell row=\"2\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM003\"/><Cell row=\"2\" col=\"9\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"산출세액\"/><Cell row=\"2\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM046\"/><Cell row=\"3\" col=\"1\" rowspan=\"28\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"종&#10;합&#10;소&#10;득&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"3\" col=\"2\" rowspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"기&#10;본&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"3\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"본인\"/><Cell row=\"3\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM004\"/><Cell row=\"3\" col=\"9\" rowspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"세&#10;액&#10;감&#10;면\"/><Cell row=\"3\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"소득세법\"/><Cell row=\"3\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM047\"/><Cell row=\"4\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"배우자\"/><Cell row=\"4\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM005\"/><Cell row=\"4\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"조세특례제한법 (제30조 제외)\"/><Cell row=\"4\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM048\"/><Cell row=\"5\" col=\"3\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"부양가족(\"/><Cell row=\"5\" col=\"5\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"bind:YEA_PRC_NUM006\"/><Cell row=\"5\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"명)\"/><Cell row=\"5\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM007\"/><Cell row=\"5\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"조세특례제한법 제30조\"/><Cell row=\"5\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM049\"/><Cell row=\"6\" col=\"2\" rowspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"추&#10;가&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"6\" col=\"3\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"경로우대(\"/><Cell row=\"6\" col=\"5\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"bind:YEA_PRC_NUM008\"/><Cell row=\"6\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"명)\"/><Cell row=\"6\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM009\"/><Cell row=\"6\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"조세조약\"/><Cell row=\"6\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM050\"/><Cell row=\"7\" col=\"3\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"장애인(\"/><Cell row=\"7\" col=\"5\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"bind:YEA_PRC_NUM010\"/><Cell row=\"7\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"명)\"/><Cell row=\"7\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM011\"/><Cell row=\"7\" col=\"9\" rowspan=\"33\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#d6d6d6ff;selectcolor:#e9e9e9ff;\" text=\"세&#10;액&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"7\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"근로소득\"/><Cell row=\"7\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM052\"/><Cell row=\"8\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"부녀자\"/><Cell row=\"8\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM012\"/><Cell row=\"8\" col=\"10\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"자녀(\"/><Cell row=\"8\" col=\"13\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"bind:YEA_PRC_NUM053\"/><Cell row=\"8\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\")명\"/><Cell row=\"8\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM054\"/><Cell row=\"9\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"한부모가족\"/><Cell row=\"9\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM013\"/><Cell row=\"9\" col=\"10\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"6세이하자녀(\"/><Cell row=\"9\" col=\"13\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"bind:YEA_PRC_NUM098\"/><Cell row=\"9\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\")명\"/><Cell row=\"9\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM099\"/><Cell row=\"10\" col=\"2\" rowspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"연&#10;금&#10;보&#10;험&#10;료&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"10\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"국민연금보험료공제\"/><Cell row=\"10\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM014\"/><Cell row=\"10\" col=\"10\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:right;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#e9e9e9ff;selectcolor:#f6f6f6ff;\" text=\"출산입양(\"/><Cell row=\"10\" col=\"13\" celltype=\"body\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"bind:YEA_PRC_NUM100\"/><Cell row=\"10\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\")명\"/><Cell row=\"10\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM101\"/><Cell row=\"11\" col=\"3\" rowspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"기타&#10;연금&#10;보험료&#10;공제\" wordwrap=\"true\"/><Cell row=\"11\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공무원연금\"/><Cell row=\"11\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM015\"/><Cell row=\"11\" col=\"10\" rowspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"연&#10;금&#10;계&#10;좌\" wordwrap=\"true\"/><Cell row=\"11\" col=\"11\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground: ;selectcolor:#f6f6f6ff;\" text=\"과학기술인공제\"/><Cell row=\"11\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground: ;selectcolor:#f6f6f6ff;\" text=\"공제대상금액\" wordwrap=\"true\"/><Cell row=\"11\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM055\"/><Cell row=\"12\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"군인연금\"/><Cell row=\"12\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM016\"/><Cell row=\"12\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground: ;selectcolor:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"12\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM056\"/><Cell row=\"13\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"사립학교교직원연금\"/><Cell row=\"13\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM017\"/><Cell row=\"13\" col=\"11\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"근로자퇴직급여보장법\"/><Cell row=\"13\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"13\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM057\"/><Cell row=\"14\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"별정우체국연금\"/><Cell row=\"14\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM018\"/><Cell row=\"14\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"14\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM058\"/><Cell row=\"15\" col=\"2\" rowspan=\"16\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"특&#10;별&#10;소&#10;득&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"15\" col=\"3\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"보&#10;험&#10;료\" wordwrap=\"true\"/><Cell row=\"15\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"건강보험료\"/><Cell row=\"15\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM019\"/><Cell row=\"15\" col=\"11\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"연금저축\"/><Cell row=\"15\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"15\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM059\"/><Cell row=\"16\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"고용보험료\"/><Cell row=\"16\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM020\"/><Cell row=\"16\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"16\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM060\"/><Cell row=\"17\" col=\"3\" rowspan=\"12\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"주택자금\"/><Cell row=\"17\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"주택임차차입금(대출기관)\"/><Cell row=\"17\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM021\"/><Cell row=\"17\" col=\"10\" rowspan=\"20\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"특&#10;별&#10;세&#10;액&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"17\" col=\"11\" rowspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"보&#10;험&#10;료\"/><Cell row=\"17\" col=\"12\" rowspan=\"2\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"보장성\"/><Cell row=\"17\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"17\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM061\"/><Cell row=\"18\" col=\"4\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"주택임차차입금(거주자)\"/><Cell row=\"18\" col=\"7\" rowspan=\"2\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM022\"/><Cell row=\"18\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"18\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM062\"/><Cell row=\"19\" col=\"12\" rowspan=\"2\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"장애인전용\"/><Cell row=\"19\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"19\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM102\"/><Cell row=\"20\" col=\"4\" rowspan=\"9\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"장기&#10;주택&#10;저당&#10;차입금&#10;이자&#10;상환액\" wordwrap=\"true\"/><Cell row=\"20\" col=\"5\" rowspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"2011년&#10;이전&#10;차입분\" wordwrap=\"true\"/><Cell row=\"20\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"15년미만\"/><Cell row=\"20\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM023\"/><Cell row=\"20\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"20\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM103\"/><Cell row=\"21\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"15년~29년\"/><Cell row=\"21\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM024\"/><Cell row=\"21\" col=\"11\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"의료비\"/><Cell row=\"21\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"21\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM063\"/><Cell row=\"22\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"30년이상\"/><Cell row=\"22\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM025\"/><Cell row=\"22\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"22\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM064\"/><Cell row=\"23\" col=\"5\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"2012년&#10;이후&#10;차입분\" wordwrap=\"true\"/><Cell row=\"23\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"고정금리비거치\"/><Cell row=\"23\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM026\"/><Cell row=\"23\" col=\"11\" rowspan=\"2\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"교육비\" wordwrap=\"true\"/><Cell row=\"23\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"23\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM065\"/><Cell row=\"24\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"기타대출\"/><Cell row=\"24\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM027\"/><Cell row=\"24\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제\"/><Cell row=\"24\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM066\"/><Cell row=\"25\" col=\"5\" rowspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"2015년&#10;이후&#10;차입분&#10;(15년이상)\" wordwrap=\"true\"/><Cell row=\"25\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"고정금리이면서,비거치\"/><Cell row=\"25\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM104\"/><Cell row=\"25\" col=\"11\" rowspan=\"10\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"기&#10;부&#10;금\" wordwrap=\"true\"/><Cell row=\"25\" col=\"12\" rowspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"정치자금&#10;기부금\" wordwrap=\"true\"/><Cell row=\"25\" col=\"13\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"10만원&#10;이하\" wordwrap=\"true\"/><Cell row=\"25\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"25\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM067\"/><Cell row=\"26\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"고정금리이거나,비거치\"/><Cell row=\"26\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM105\"/><Cell row=\"26\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"26\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM068\"/><Cell row=\"27\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"기타대출\"/><Cell row=\"27\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM106\"/><Cell row=\"27\" col=\"13\" rowspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"10만원&#10;초과\"/><Cell row=\"27\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"27\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM069\"/><Cell row=\"28\" col=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"2015년&#10;이후&#10;차입분&#10;(10~15년)\" wordwrap=\"true\"/><Cell row=\"28\" col=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"고정금리비거치\"/><Cell row=\"28\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM107\"/><Cell row=\"28\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"28\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM070\"/><Cell row=\"29\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;selectcolor:#e9e9e9ff;\" text=\"기부금(이월분)\"/><Cell row=\"29\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM028\"/><Cell row=\"29\" col=\"12\" rowspan=\"2\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"법정기부금\"/><Cell row=\"29\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"29\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM071\"/><Cell row=\"30\" col=\"3\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#f6f6f6ff;selectcolor:#e9e9e9ff;\" text=\"계\"/><Cell row=\"30\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM029\"/><Cell row=\"30\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"30\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM072\"/><Cell row=\"31\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;selectcolor: ;\" text=\"차감소득금액\"/><Cell row=\"31\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM030\"/><Cell row=\"31\" col=\"12\" rowspan=\"2\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"우리사주조합기부금\"/><Cell row=\"31\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"31\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM039\"/><Cell row=\"32\" col=\"1\" rowspan=\"12\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"그&#10;밖&#10;의&#10;소&#10;득&#10;공&#10;제\" wordwrap=\"true\"/><Cell row=\"32\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"개인연금저축\"/><Cell row=\"32\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM031\"/><Cell row=\"32\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"32\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM108\"/><Cell row=\"33\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"소기업소상공인 공제부금\"/><Cell row=\"33\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM032\"/><Cell row=\"33\" col=\"12\" rowspan=\"2\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"지정기부금\"/><Cell row=\"33\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"공제대상금액\"/><Cell row=\"33\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM073\"/><Cell row=\"34\" col=\"2\" rowspan=\"3\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"주택마련&#10;저축&#10;소득공제\" wordwrap=\"true\"/><Cell row=\"34\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"청약저축\"/><Cell row=\"34\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM033\"/><Cell row=\"34\" col=\"14\" celltype=\"head\" displaytype=\"text\" style=\"align:left;padding:0 0 0 8;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"세액공제액\"/><Cell row=\"34\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM074\"/><Cell row=\"35\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"주택청약종합저축\"/><Cell row=\"35\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM034\"/><Cell row=\"35\" col=\"11\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;selectcolor:#e9e9e9ff;\" text=\"계\"/><Cell row=\"35\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM075\"/><Cell row=\"36\" col=\"4\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectcolor:#f6f6f6ff;\" text=\"근로자주택마련저축\"/><Cell row=\"36\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM035\"/><Cell row=\"36\" col=\"11\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"표준세액공제\"/><Cell row=\"36\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM076\"/><Cell row=\"37\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"투자조합출자소득공제\"/><Cell row=\"37\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM036\"/><Cell row=\"37\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"납세조합공제\"/><Cell row=\"37\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM077\"/><Cell row=\"38\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"신용카드등 소득공제\"/><Cell row=\"38\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM037\"/><Cell row=\"38\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"주택차입금\"/><Cell row=\"38\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM078\"/><Cell row=\"39\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"우리사주조합출연금\"/><Cell row=\"39\" col=\"7\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:COMP_STOC\"/><Cell row=\"39\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM038\"/><Cell row=\"39\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"외국납부\"/><Cell row=\"39\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM079\"/><Cell row=\"40\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"고용유지중소기업근로\"/><Cell row=\"40\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM040\"/><Cell row=\"40\" col=\"9\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\"/><Cell row=\"40\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"월세세액공제\"/><Cell row=\"40\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM081\"/><Cell row=\"41\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"목돈안드는 전세이자상환액\"/><Cell row=\"41\" col=\"7\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM041\"/><Cell row=\"41\" col=\"9\" celltype=\"head\" displaytype=\"text\" style=\"align:left;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\"/><Cell row=\"41\" col=\"10\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#f6f6f6ff;selectcolor:#e9e9e9ff;\" text=\"세액공제 계\"/><Cell row=\"41\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM082\"/><Cell row=\"42\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"장기집합투자증권저축\"/><Cell row=\"42\" col=\"7\" style=\"background: ;\"/><Cell row=\"42\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM042\"/><Cell row=\"42\" col=\"9\" colspan=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:left;selectcolor: ;\"/><Cell row=\"43\" col=\"2\" colspan=\"5\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#f6f6f6ff;selectcolor:#e9e9e9ff;\" text=\"그밖의 소득공제 계\"/><Cell row=\"43\" col=\"8\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM043\" tooltiptext=\"bind:YEA_PRC_NUM043\"/><Cell row=\"43\" col=\"9\" colspan=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:left;selectcolor: ;\"/><Cell row=\"44\" rowspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#d6d6d6ff;background2:#d6d6d6ff;selectbackground:#d6d6d6ff;selectcolor: ;\" text=\"세&#10;액&#10;명&#10;세\" wordwrap=\"true\"/><Cell row=\"44\" col=\"1\" colspan=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"구분\"/><Cell row=\"44\" col=\"8\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;selectcolor: ;\" text=\"소득세\"/><Cell row=\"44\" col=\"10\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;selectcolor: ;\" text=\"지방소득세\"/><Cell row=\"44\" col=\"13\" colspan=\"2\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;selectcolor: ;\" text=\"농어촌특별세\"/><Cell row=\"44\" col=\"15\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;selectcolor: ;\" text=\"계\"/><Cell row=\"45\" col=\"1\" colspan=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"결정세액\"/><Cell row=\"45\" col=\"8\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM083\"/><Cell row=\"45\" col=\"10\" colspan=\"3\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM084\"/><Cell row=\"45\" col=\"13\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM085\"/><Cell row=\"45\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" expr=\"expr:YEA_PRC_NUM083+YEA_PRC_NUM084+YEA_PRC_NUM085\"/><Cell row=\"46\" col=\"1\" rowspan=\"2\" colspan=\"4\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"기납부 세액\"/><Cell row=\"46\" col=\"5\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"종(전)근무지\"/><Cell row=\"46\" col=\"8\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM086\"/><Cell row=\"46\" col=\"10\" colspan=\"3\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM087\"/><Cell row=\"46\" col=\"13\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM088\"/><Cell row=\"46\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" expr=\"expr:YEA_PRC_NUM086+YEA_PRC_NUM087+YEA_PRC_NUM088\"/><Cell row=\"47\" col=\"5\" colspan=\"3\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"주(현)근무지\"/><Cell row=\"47\" col=\"8\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM089\"/><Cell row=\"47\" col=\"10\" colspan=\"3\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM090\"/><Cell row=\"47\" col=\"13\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM091\"/><Cell row=\"47\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" expr=\"expr:YEA_PRC_NUM089+YEA_PRC_NUM090+YEA_PRC_NUM091\"/><Cell row=\"48\" col=\"1\" colspan=\"6\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"납부특례세액\"/><Cell row=\"48\" col=\"7\" style=\"background:#deebfeff;\"/><Cell row=\"48\" col=\"8\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM095\"/><Cell row=\"48\" col=\"10\" colspan=\"3\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM096\"/><Cell row=\"48\" col=\"13\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM097\"/><Cell row=\"48\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" expr=\"expr:YEA_PRC_NUM095+YEA_PRC_NUM096+YEA_PRC_NUM097\"/><Cell row=\"49\" col=\"1\" colspan=\"7\" celltype=\"head\" displaytype=\"text\" style=\"align:center;background:#e9e9e9ff;background2:#e9e9e9ff;selectcolor:#e9e9e9ff;\" text=\"차감징수세액\"/><Cell row=\"49\" col=\"8\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM092\"/><Cell row=\"49\" col=\"10\" colspan=\"3\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM093\"/><Cell row=\"49\" col=\"13\" colspan=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PRC_NUM094\"/><Cell row=\"49\" col=\"15\" celltype=\"body\" displaytype=\"number\" style=\"align:right;background: ;\" expr=\"expr:YEA_PRC_NUM092+YEA_PRC_NUM093+YEA_PRC_NUM094\"/></Band></Format></Formats>");
            this.Tab0.tab9.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "373", "0", "80", "22", null, null, this);
            obj.set_taborder("5");
            obj.set_text("h22");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "802", "50", "80", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("h25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "360", "140", "10", "60", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1168", "140", "10", "60", null, null, this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "609", "518", "80", "10", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("부양가족");

            	}
            );
            this.Tab0.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("근로소득");

            	}
            );
            this.Tab0.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab3,
            	//-- Layout function
            	function(p) {
            		p.set_text("종근무지");

            	}
            );
            this.Tab0.tab3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab4,
            	//-- Layout function
            	function(p) {
            		p.set_text("연금·저축");

            	}
            );
            this.Tab0.tab4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab5,
            	//-- Layout function
            	function(p) {
            		p.set_text("월세주택");

            	}
            );
            this.Tab0.tab5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab6,
            	//-- Layout function
            	function(p) {
            		p.set_text("의료명세");

            	}
            );
            this.Tab0.tab6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab7,
            	//-- Layout function
            	function(p) {
            		p.set_text("기부명세");

            	}
            );
            this.Tab0.tab7.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 761, 621, this.Tab0.tab8,
            	//-- Layout function
            	function(p) {
            		p.set_text("소득공제");
            		p.set_scrollbars("none");

            	}
            );
            this.Tab0.tab8.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab9,
            	//-- Layout function
            	function(p) {
            		p.set_text("연말정산");
            		p.set_scrollbars("none");

            	}
            );
            this.Tab0.tab9.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연말정산처리(2015)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("YEAA0070_2015.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("YEAA0070_2015.xfdl", "script::lib_script_common_YEA.xjs");
        this.addIncludeScript("YEAA0070_2015.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("YEAA0070_2015.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0070 연말정산처리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		김석영		Initial Created.
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
        //include "script::lib_script_common.xjs";
        //include "script::lib_script_common_YEA.xjs";			  //연말정산용 추가!!!
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "YEAA0070_2015"; //해당 Form에서 사용 할 Package 명
        this.sSaveRowChk  = "T";
        this.sSelectGrid  = "1";
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined)
        {
        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = "";   //Form의 Title 정보
        	this.sFORMLOCATION = "";   //Form의 Location 정보
        	this.sUSERLAVEL    = "";   //Form의 Location 정보
        }else{
        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /****************************************************************************************************
         *                                         공통 Event 처리 부분                                     *
         ****************************************************************************************************/

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function(obj,e) {
        	this.fnc_FormLoadSetting(obj.parent, this.parent.sFORMCAPTION, this.parent.sFORMLOCATION, this.parent.sBUTTONLIST, this.parent.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);	
        	this.Tab0.set_tabindex(0);
        	
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
            //목록 그리드 조회
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsYEA_MASTXM");    

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsYEA_MASTXM=dsYEA_MASTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        this.fn_SearchDetail = function (obj) {
            // Tabpage 그리드 조회	
        	this.fnc_DatasetClear("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD,dsYEA_INCDEC,dsYEA_YEPROC");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsYEA_YEFAMI=dsYEA_YEFAMI dsYEA_PAYDTL=dsYEA_PAYDTL dsYEA_BFWORK=dsYEA_BFWORK dsYEA_BFNTAX=dsYEA_BFNTAX dsYEA_PENSAV1=dsYEA_PENSAV1 dsYEA_PENSAV2=dsYEA_PENSAV2 dsYEA_PENSAV3=dsYEA_PENSAV3 dsYEA_PENSAV4=dsYEA_PENSAV4 dsYEA_RENTA1=dsYEA_RENTA1 dsYEA_RENTA2=dsYEA_RENTA2	dsYEA_MEDISP=dsYEA_MEDISP dsYEA_DONASP=dsYEA_DONASP dsYEA_DONAAD=dsYEA_DONAAD dsYEA_INCDEC=dsYEA_INCDEC dsYEA_YEPROC=dsYEA_YEPROC";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function(obj) {
        	// 기능 없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function(obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function(obj) {
        	//[2013귀속] dsYEA_PENSAV4 없어졌지만 그냥 둠, dsYEA_RENTA1 추가, dsYEA_RENTA2 추가	
        	this.fnc_DataSetCancel("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_INCDEC,dsYEA_YEPROC,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2");
        	this.grdYEA_YEPROC.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsYEA_YEFAMI=dsYEA_YEFAMI:U dsYEA_PAYDTL=dsYEA_PAYDTL:U dsYEA_BFWORK=dsYEA_BFWORK:U dsYEA_BFNTAX=dsYEA_BFNTAX:U dsYEA_PENSAV1=dsYEA_PENSAV1:U dsYEA_PENSAV2=dsYEA_PENSAV2:U dsYEA_PENSAV3=dsYEA_PENSAV3:U dsYEA_PENSAV4=dsYEA_PENSAV4:U dsYEA_RENTA1=dsYEA_RENTA1:U dsYEA_RENTA2=dsYEA_RENTA2:U dsYEA_INCDEC=dsYEA_INCDEC:U dsYEA_MEDISP=dsYEA_MEDISP:U dsYEA_DONASP=dsYEA_DONASP:U dsYEA_DONAAD=dsYEA_DONAAD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdYEA_MASTXM.setFocus();

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function(obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function(obj) {
        	//상위 프레임에 있음!
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	var sMessage = this.fnc_FormUnloadCheck("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_INCDEC,dsYEA_YEPROC,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function(obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
        }
         
        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function(obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function(obj) {
        	this.fnc_EditFocus(obj);
        	
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
            if (this.fnc_DatasetChangeCheck("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD")) 
        	{
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.parent.spnSHRYEA_STD_YY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.parent.calSHRPASE_STDT);
        	}
        	/*	
        	if (this.fnc_Length(this.fnc_Trim(this.parent.calSHRBGIN_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "퇴사시작일", this.parent.calSHRBGIN_DATE);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.parent.calSHRENDX_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "퇴사종료일", this.parent.calSHRENDX_DATE);
        	}
        	*/
        	if (this.parent.calSHRBGIN_DATE.value > this.parent.calSHRENDX_DATE.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "퇴사시작일,퇴사종료일", this.parent.calSHRBGIN_DATE);
        	}
        	
        	return true;
        }

        /*---------------------+
         |  삭제 여부 체크!    |
         +---------------------*/
        this.fn_DeleteCheck = function() {
        	this.fn_DeleteCheck0();
        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
            if (!this.fnc_DatasetChangeCheck("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_INCDEC,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD")) 
        	{
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	//부양가족 저장 체크(tab1)
        	for (var i = 0; i < this.dsYEA_YEFAMI.getRowCount(); i++) 
        	{
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR001"))) < 1) {
        			//this.dsYEA_YEFAMI.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR001"));
        			return this.fnc_CheckPostAction("TMM114","관계", this.dsYEA_YEFAMI, i, this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR001");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR002"))) < 1) {
        			//this.dsYEA_YEFAMI.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR002"));
        			return this.fnc_CheckPostAction("TMM114","내외국인", this.dsYEA_YEFAMI, i, this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR002");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR003"))) < 1) {
        			//this.dsYEA_YEFAMI.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR003"));
        			return this.fnc_CheckPostAction("TMM114","성명", this.dsYEA_YEFAMI, i, this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR003");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR004"))) < 1) {
        			//this.dsYEA_YEFAMI.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR004"));
        			return this.fnc_CheckPostAction("TMM114","주민등록번호", this.dsYEA_YEFAMI, i, this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR004");
        		}
        		
        		var sYEA_FAM_STR004 = this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR004"));
        		for (var j = 0; j < this.dsYEA_YEFAMI.getRowCount(); j++) {
        			if (i != j){
        				if (sYEA_FAM_STR004 == this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(j, "YEA_FAM_STR004"))){
        					//this.dsYEA_YEFAMI.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR004"));
        					return this.fnc_CheckPostAction("TMM161", "동일한 주민등록번호가", this.dsYEA_YEFAMI, j, this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR004");
        				}
        			}
        		}
        	}
        	
        	//종근무지(tab3)
        	for (var i=0; i < this.dsYEA_BFWORK.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_BFWORK.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i,"YEA_BIZ_NO"))) != 10) {
        			//this.dsYEA_BFWORK.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_BIZ_NO"));
        			return this.fnc_CheckPostAction("TMM114","사업자번호", this.dsYEA_BFWORK, i, this.Tab0.tab3.grdYEA_BFWORK, "YEA_BIZ_NO");
        		}	
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i,"YEA_BFW_STR001"))) < 1) {
        			//this.dsYEA_BFWORK.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_BFW_STR001"));
        			return this.fnc_CheckPostAction("TMM114","구분", this.dsYEA_BFWORK, i, this.Tab0.tab3.grdYEA_BFWORK, "YEA_BFW_STR001");
        		}	
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i,"YEA_BFW_STR002"))) < 1) {
        			//this.dsYEA_BFWORK.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_BFW_STR002"));
        			return this.fnc_CheckPostAction("TMM114","회사명", this.dsYEA_BFWORK, i, this.Tab0.tab3.grdYEA_BFWORK, "YEA_BFW_STR002");
        		}			
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i,"YEA_BFW_STR003"))) < 1) {
        			//this.dsYEA_BFWORK.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_BFW_STR003"));
        			return this.fnc_CheckPostAction("TMM114","근무시작일", this.dsYEA_BFWORK, i, this.Tab0.tab3.grdYEA_BFWORK, "YEA_BFW_STR003");
        		}	
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i,"YEA_BFW_STR004"))) < 1) {
        			//this.dsYEA_BFWORK.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_BFW_STR004"));
        			return this.fnc_CheckPostAction("TMM114","근무종료일", this.dsYEA_BFWORK, i, this.Tab0.tab3.grdYEA_BFWORK, "YEA_BFW_STR004");
        		}
        		
        		var sYEA_BIZ_NO = this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i, "YEA_BIZ_NO"));
        		for (var j = 0; j < this.dsYEA_BFWORK.getRowCount(); j++) {
        			if (i != j){
        				if (sYEA_BIZ_NO == this.fnc_Trim(this.dsYEA_BFWORK.getColumn(j, "YEA_BIZ_NO"))){
        					//this.dsYEA_BFWORK.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_BIZ_NO"));
        					return this.fnc_CheckPostAction("TMM161", "동일한 사업자번호", this.dsYEA_BFWORK, j, this.Tab0.tab3.grdYEA_BFWORK, "YEA_BIZ_NO");
        				}
        			}
        		}
        	}
        	
        	//종근무지비과세(tab3)
        	for (var i=0; i < this.dsYEA_BFNTAX.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_BFNTAX.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFNTAX.getColumn(i,"YEA_NON_TAX_CD"))) < 1) {
        			//this.dsYEA_BFNTAX.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFNTAX, "YEA_NON_TAX_CD"));
        			return this.fnc_CheckPostAction("TMM114","비과세항목", this.dsYEA_BFNTAX, i, this.Tab0.tab3.grdYEA_BFNTAX, "YEA_NON_TAX_CD");
        		}	
        		
        		var sYEA_NON_TAX_CD = this.fnc_Trim(this.dsYEA_BFNTAX.getColumn(i, "YEA_NON_TAX_CD"));
        		for (var j = 0; j < this.dsYEA_BFNTAX.getRowCount(); j++) {
        			if (i != j){
        				if (sYEA_NON_TAX_CD == this.fnc_Trim(this.dsYEA_BFNTAX.getColumn(j, "YEA_NON_TAX_CD"))){
        					//this.dsYEA_BFNTAX.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFNTAX, "YEA_NON_TAX_CD"));
        					return this.fnc_CheckPostAction("TMM161", "동일한 비과세항목", this.dsYEA_BFNTAX, j, this.Tab0.tab3.grdYEA_BFNTAX, "YEA_NON_TAX_CD");
        				}
        			}
        		}
        	}
        		
        	//연금저축_퇴직연금공제(tab4)
        	for (var i=0; i < this.dsYEA_PENSAV1.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_PENSAV1.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV1.getColumn(i,"YEA_PEN_STR001"))) < 1) {
        			//this.dsYEA_PENSAV1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV1, "YEA_PEN_STR001"));
        			return this.fnc_CheckPostAction("TMM114","퇴직연금구분", this.dsYEA_PENSAV1, i, this.Tab0.tab4.grdYEA_PENSAV1, "YEA_PEN_STR001");
        		}		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV1.getColumn(i,"YEA_PEN_STR002"))) < 1) {
        			//this.dsYEA_PENSAV1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV1, "YEA_PEN_STR002"));
        			return this.fnc_CheckPostAction("TMM114","금융기관", this.dsYEA_PENSAV1, i, this.Tab0.tab4.grdYEA_PENSAV1, "YEA_PEN_FINA_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV1.getColumn(i,"YEA_PEN_STR003"))) < 1) {
        			//this.dsYEA_PENSAV1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV1, "YEA_PEN_STR003"));
        			return this.fnc_CheckPostAction("TMM114","계좌번호", this.dsYEA_PENSAV1, i, this.Tab0.tab4.grdYEA_PENSAV1, "YEA_PEN_STR003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_PENSAV1.getColumn(i,"YEA_PEN_NUM001"))) <= 0) {
        			//this.dsYEA_PENSAV1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV1, "YEA_PEN_NUM001"));
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_PENSAV1, i, this.Tab0.tab4.grdYEA_PENSAV1, "YEA_PEN_NUM001");
        		}   
        	}
        	
        	//연금저축_연금저축공제(tab4)
        	for (var i=0; i < this.dsYEA_PENSAV2.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_PENSAV2.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV2.getColumn(i,"YEA_PEN_STR001"))) < 1) {
        			//this.dsYEA_PENSAV2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV2, "YEA_PEN_STR001"));
        			return this.fnc_CheckPostAction("TMM114","연금저축구분", this.dsYEA_PENSAV2, i, this.Tab0.tab4.grdYEA_PENSAV2, "YEA_PEN_STR001");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV2.getColumn(i,"YEA_PEN_STR002"))) < 1) {
        			//this.dsYEA_PENSAV2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV2, "YEA_PEN_STR002"));
        			return this.fnc_CheckPostAction("TMM114","금융기관", this.dsYEA_PENSAV2, i, this.Tab0.tab4.grdYEA_PENSAV2, "YEA_PEN_FINA_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV2.getColumn(i,"YEA_PEN_STR003"))) < 1) {
        			//this.dsYEA_PENSAV2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV2, "YEA_PEN_STR003"));
        			return this.fnc_CheckPostAction("TMM114","계좌번호", this.dsYEA_PENSAV2, i, this.Tab0.tab4.grdYEA_PENSAV2, "YEA_PEN_STR003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_PENSAV2.getColumn(i,"YEA_PEN_NUM001"))) <= 0) {
        			//this.dsYEA_PENSAV2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV2, "YEA_PEN_NUM001"));
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_PENSAV2, i, this.Tab0.tab4.grdYEA_PENSAV2, "YEA_PEN_NUM001");
        		}
        	}
        	
        	//연금저축_주택마련저축공제(tab4)
        	for (var i=0; i < this.dsYEA_PENSAV3.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_PENSAV3.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV3.getColumn(i,"YEA_PEN_STR001"))) < 1) {
        			//this.dsYEA_PENSAV3.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV3, "YEA_PEN_STR001"));
        			return this.fnc_CheckPostAction("TMM114","저축구분", this.dsYEA_PENSAV3, i, this.Tab0.tab4.grdYEA_PENSAV3, "YEA_PEN_STR001");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV3.getColumn(i,"YEA_PEN_STR002"))) < 1) {
        			//this.dsYEA_PENSAV3.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV3, "YEA_PEN_STR002"));
        			return this.fnc_CheckPostAction("TMM114","금융기관", this.dsYEA_PENSAV3, i, this.Tab0.tab4.grdYEA_PENSAV3, "YEA_PEN_FINA_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV3.getColumn(i,"YEA_PEN_STR003"))) < 1) {
        			//this.dsYEA_PENSAV3.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV3, "YEA_PEN_STR003"));
        			return this.fnc_CheckPostAction("TMM114","계좌번호", this.dsYEA_PENSAV3, i, this.Tab0.tab4.grdYEA_PENSAV3, "YEA_PEN_STR003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_PENSAV3.getColumn(i,"YEA_PEN_NUM001"))) <= 0) {
        			//this.dsYEA_PENSAV3.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV3, "YEA_PEN_NUM001"));
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_PENSAV3, i, this.Tab0.tab4.grdYEA_PENSAV3, "YEA_PEN_NUM001");
        		}
        	}
        	
        	//연금저축_장기집합투자증권저축공제(tab4)
        	for (var i=0; i < this.dsYEA_PENSAV4.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_PENSAV4.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV4.getColumn(i,"YEA_PEN_STR002"))) < 1) {
        			//this.dsYEA_PENSAV4.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV4, "YEA_PEN_STR002"));
        			return this.fnc_CheckPostAction("TMM114","금융기관", this.dsYEA_PENSAV4, i, this.Tab0.tab4.grdYEA_PENSAV4, "YEA_PEN_FINA_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV4.getColumn(i,"YEA_PEN_STR003"))) < 1) {
        			//this.dsYEA_PENSAV4.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV4, "YEA_PEN_STR003"));
        			return this.fnc_CheckPostAction("TMM114","계좌번호", this.dsYEA_PENSAV4, i, this.Tab0.tab4.grdYEA_PENSAV4, "YEA_PEN_STR003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_PENSAV4.getColumn(i,"YEA_PEN_NUM001"))) <= 0) {
        			//this.dsYEA_PENSAV4.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab4.grdYEA_PENSAV4, "YEA_PEN_NUM001"));
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_PENSAV4, i, this.Tab0.tab4.grdYEA_PENSAV4, "YEA_PEN_NUM001");
        		}
        	}
        	
            //월세주택_월세액 소득공제 명세서 (tab5)
            for (var i=0; i < this.dsYEA_RENTA1.getRowCount(); i++) 
            {   
                if(this.fnc_ToUpper(this.dsYEA_RENTA1.getRowType(i))==Dataset.ROWTYPE_DELETE) continue;        
                if(this.fnc_ToUpper(this.dsYEA_RENTA1.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
                
                if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_STR001"))) < 1) {
        			//this.dsYEA_RENTA1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR001"));
        			return this.fnc_CheckPostAction("TMM114","임대인성명", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR001");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_STR002"))) < 1) {
        			//this.dsYEA_RENTA1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR003"));
        			return this.fnc_CheckPostAction("TMM114","주민(사업자)번호", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR002");
        		}
                if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_STR003"))) < 1) {
        			//this.dsYEA_RENTA1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR003"));
        			return this.fnc_CheckPostAction("TMM114","주택유형", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR003");
        		}
                if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_NUM003"))) < 1) {
        			//this.dsYEA_RENTA1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_NUM003"));
        			return this.fnc_CheckPostAction("TMM114","주택계약면적", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_NUM003");
        		}
                if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_STR004"))) < 1) {
        			//this.dsYEA_RENTA1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR004"));
        			return this.fnc_CheckPostAction("TMM114","계약서상주소지", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR004");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_STR005"))) < 1) {
        			//this.dsYEA_RENTA1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR004"));
        			return this.fnc_CheckPostAction("TMM114","임대차계약개시일", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR005");
        		}   
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_STR006"))) < 1) {
        			//this.dsYEA_RENTA1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR004"));
        			return this.fnc_CheckPostAction("TMM114","임대차계약종료일", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR006");
        		}
        		if (this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_STR005")) > this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_STR006"))) {
        			return this.fnc_CheckPostAction("TMM042","임대차계약개시일,임대차계약종료일", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_STR006");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_RENTA1.getColumn(i,"YEA_RT1_NUM001"))) <= 0) {
        			//this.dsYEA_RENTA1.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_NUM001"));
        			return this.fnc_CheckPostAction("TMM114","연간월세액", this.dsYEA_RENTA1, i, this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT1_NUM001");
        		}   
            }
            
            //월세주택_금전소비대차 계약내용/임대차 계약내용 (tab5)
            for (var i=0; i < this.dsYEA_RENTA2.getRowCount(); i++) {
                if(this.fnc_ToUpper(this.dsYEA_RENTA2.getRowType(i))==Dataset.ROWTYPE_DELETE) continue;
                if(this.fnc_ToUpper(this.dsYEA_RENTA2.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
                    
                //[2013귀속] EXPR이므로 setColumn 함!!!
        		this.dsYEA_RENTA2.setColumn(i, "YEA_RT2_NUM002", parseFloat(this.dsYEA_RENTA2.getColumn(i, "YEA_RT2_NUM003")) + parseFloat(this.dsYEA_RENTA2.getColumn(i, "YEA_RT2_NUM004")));
        	
        	    if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR001"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_STR001"));
        			return this.fnc_CheckPostAction("TMM114","대주성명", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_STR001");
        		}
        	    if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR002"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_STR002"));
        			return this.fnc_CheckPostAction("TMM114","주민등록번호", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_STR002");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR003"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_STR003"));
        			return this.fnc_CheckPostAction("TMM114","금전소비대차계약시작일", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_STR003");
        		}   
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR004"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA1, "YEA_RT2_STR004"));
        			return this.fnc_CheckPostAction("TMM114","금전소비대차계약종료일", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_STR004");
        		}
        		if (this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR003")) > this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR004"))) {
        			return this.fnc_CheckPostAction("TMM042","금전소비대차계약시작일,금전소비대차계약종료일", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_STR004");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_NUM001"))) <= 0) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_NUM001"));
        			return this.fnc_CheckPostAction("TMM114","차입금이자율(%)", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_NUM001");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_NUM003"))) <= 0) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_NUM003"));
        			return this.fnc_CheckPostAction("TMM114","원리금", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_NUM003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_NUM004"))) <= 0) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_NUM004"));
        			return this.fnc_CheckPostAction("TMM114","이자", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_1, "YEA_RT2_NUM004");
        		}		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR005"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR005"));
        			return this.fnc_CheckPostAction("TMM114","임대인성명", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR005");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR006"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR006"));
        			return this.fnc_CheckPostAction("TMM114","주민등록번호", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR006");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR007"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR007"));
        			return this.fnc_CheckPostAction("TMM114","주택유형", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR007");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_NUM006"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_NUM006"));
        			return this.fnc_CheckPostAction("TMM114","주택계약면적", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_NUM006");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR008"))) < 1) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR008"));
        			return this.fnc_CheckPostAction("TMM114","임대차계약서상 주소지", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR008");
        		}		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR009"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","임대차계약개시일", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR009");
        		}   
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR010"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","임대차계약종료일", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR010");
        		}
        		if (this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR009")) > this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_STR010"))) {
        			return this.fnc_CheckPostAction("TMM042","임대차계약개시일,임대차계약종료일", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_STR010");
        		}		
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_RENTA2.getColumn(i,"YEA_RT2_NUM007"))) <= 0) {
        			//this.dsYEA_RENTA2.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_NUM007"));
        			return this.fnc_CheckPostAction("TMM114","전세보증금", this.dsYEA_RENTA2, i, this.Tab0.tab5.grdYEA_RENTA2_2, "YEA_RT2_NUM007");
        		}   
            }	
            
            //의료비명세서(tab6)	
        	for (var i=0; i < this.dsYEA_MEDISP.getRowCount(); i++) 
        	{
        		if(this.fnc_ToUpper(this.dsYEA_MEDISP.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;			
        			
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MEDISP.getColumn(i,"YEA_MES_STR003"))) < 1) {
        			//this.dsYEA_MEDISP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR003"));
        			return this.fnc_CheckPostAction("TMM114","성명", this.dsYEA_MEDISP, i, this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR003");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MEDISP.getColumn(i,"YEA_MES_STR007"))) < 1) {
        			//this.dsYEA_MEDISP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR007"));
        			return this.fnc_CheckPostAction("TMM114","사업자번호", this.dsYEA_MEDISP, i, this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR007");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MEDISP.getColumn(i,"YEA_MES_STR006"))) < 1) {
        			//this.dsYEA_MEDISP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR006"));
        			return this.fnc_CheckPostAction("TMM114","상호", this.dsYEA_MEDISP, i, this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR006");
        		}	
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_MEDISP.getColumn(i,"YEA_MES_NUM002"))) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","지급액", this.dsYEA_MEDISP, i, this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_NUM002");
        		}   
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MEDISP.getColumn(i,"YEA_MES_STR001"))) < 1) {
        			//this.dsYEA_MEDISP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR001"));
        			return this.fnc_CheckPostAction("TMM114","의료증빙코드", this.dsYEA_MEDISP, i, this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR001");
        		}   
        	}
        	
        	//기부금명세서(tab7)
        	for (var i=0; i < this.dsYEA_DONASP.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_DONASP.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;			
        			
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_DONASP.getColumn(i,"YEA_DOS_STR003"))) < 1) {
        			//this.dsYEA_DONASP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR003"));
        			return this.fnc_CheckPostAction("TMM114","기부자성명", this.dsYEA_DONASP, i, this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR003");
        		}		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_DONASP.getColumn(i,"YEA_DOS_STR008"))) != 10 && this.fnc_Length(this.fnc_Trim(this.dsYEA_DONASP.getColumn(i,"YEA_DOS_STR008"))) != 13 && this.fnc_Length(this.fnc_Trim(this.dsYEA_DONASP.getColumn(i,"DONA_TYPE"))) != "20"  ) {
        			//this.dsYEA_DONASP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR008"));
        			return this.fnc_CheckPostAction("TMM114","사업자(주민)번호", this.dsYEA_DONASP, i, this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR008");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_DONASP.getColumn(i,"YEA_DOS_STR007"))) < 1) {
        			//this.dsYEA_DONASP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR007"));
        			return this.fnc_CheckPostAction("TMM114","상호", this.dsYEA_DONASP, i, this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR007");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_DONASP.getColumn(i,"YEA_DOS_STR006"))) < 1) {
        			//this.dsYEA_DONASP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR006"));
        			return this.fnc_CheckPostAction("TMM114","기부유형", this.dsYEA_DONASP, i, this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR006");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_DONASP.getColumn(i,"YEA_DOS_NUM002"))) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","지급액", this.dsYEA_DONASP, i, this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_NUM002");
        		}   
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_DONASP.getColumn(i,"YEA_DOS_STR001"))) < 1) {
        			//this.dsYEA_DONASP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR001"));
        			return this.fnc_CheckPostAction("TMM114","자료구분", this.dsYEA_DONASP, i, this.Tab0.tab7.grdYEA_DONASP, "YEA_DOS_STR001");
        		}
        	}
        	
        	//기부금조정명세서(tab7)
        	for (var i=0; i < this.dsYEA_DONAAD.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_DONAAD.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_DONAAD.getColumn(i,"YEA_DOA_STR001"))) < 1) {
        			//this.dsYEA_DONAAD.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab7.grdYEA_DONAAD, "YEA_DOA_STR001"));
        			return this.fnc_CheckPostAction("TMM114","기부금코드", this.dsYEA_DONAAD, i, this.Tab0.tab7.grdYEA_DONAAD, "YEA_DOA_STR001");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_DONAAD.getColumn(i,"YEA_DOA_STR002"))) < 1) {
        			//this.dsYEA_DONAAD.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab7.grdYEA_DONAAD, "YEA_DOA_STR002"));
        			return this.fnc_CheckPostAction("TMM114","기부연도", this.dsYEA_DONAAD, i, this.Tab0.tab7.grdYEA_DONAAD, "YEA_DOA_STR002");
        		}		
        	}
        	return true;
        }

        
        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
            
            //alert(this.dsYEA_MASTXM.rowposition);    
            if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY="		 + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.parent.spnSHRYEA_STD_YY.value,0 ,4))); 
        		sReturnString += " YEA_DEPT_CD=" 	 + this.fnc_Quote(this.parent.edtSHRDEPT_CODE.value);
        		sReturnString += " YEA_EMP_NO=" 	 + this.fnc_Quote(this.parent.edtSHREMPL_NUMB.value);
        		sReturnString += " YEA_EMP_CD=" 	 + this.fnc_Quote(this.parent.cmbSHRCLSD_CODE.value);
        		sReturnString += " YEA_INOFFICE_CD=" + this.fnc_Quote(this.parent.cmbSHRWODN_CODE.value);		
        		sReturnString += " YEA_BGIN_DATE="   + this.fnc_Quote(this.fnc_Trim(this.parent.calSHRBGIN_DATE.value));
        		sReturnString += " YEA_ENDX_DATE="   + this.fnc_Quote(this.fnc_Trim(this.parent.calSHRENDX_DATE.value));
        		
        		if ( this.parent.sUSERLAVEL == "1" ) {	    //정산구분(9:임시처리, 1:연말정산, 2:중도정산-애는 안씀!)	
        			sReturnString += " YEA_PRC_STR002=" + this.fnc_Quote("9");
        		} else {
        			sReturnString += " YEA_PRC_STR002=" + this.fnc_Quote("1");
        		}
        		
        	} else if (sKind == "SEARCH01") {
        	    var rowPos = this.dsYEA_MASTXM.rowposition;	    
        	    if(rowPos < 0) rowPos = 0;
        	    var aa = this.dsYEA_MASTXM.getColumn(rowPos, "YEA_STD_YY");
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY="		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY"));
        		sReturnString += " YEA_EMP_NO="	    + this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"));
        		
        			
        	// 가족콤보 조회 Argument 생성
        	} else if (sKind == "SEARCH99") {
        	
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_STD_YY"));    //정산년월
        		sReturnString += " YEA_EMP_NO=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_EMP_NO"));    //사번
        		
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        	
        	// 부양가족처리 Argument 생성
        	} else if (sKind == 'PROC00') {	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
            // 근로소득족처리 Argument 생성
        	} else if (sKind == 'PROC01') {	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
        	// 연말정산 Argument 생성
        	} else if (sKind == "PROC02") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " USERLAVEL=" 			+ this.fnc_Quote(this.parent.sUSERLAVEL);   //[2014귀속] 소득공제신고서에서는 임시처리하기 위함
        		
        	// 입력마감 Argument 생성
        	} else if (sKind == "PROC03") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		
        	// 확정 Argument 생성
        	} else if (sKind == "PROC04") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		//귀속년도2014년 연말정산 재정산(소급) 1값(연말정산)으로 고정
        		sReturnString += " YCAL_GUBN=" 			+ this.fnc_Quote("1");    //정산년월
        		
        	// PDF업로드 Argument 생성
        	} else if (sKind == "PROC07") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        	
        	} else if (sKind == "PRINT00") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_STD_YY"));    //정산년월
        		sReturnString += " YEA_EMP_NO=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_EMP_NO"));    //사번
        		
        	} else if (sKind == "PRINT01") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_STD_YY"));    //정산년월
        		sReturnString += " YEA_EMP_NO=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_EMP_NO"));    //사번
        		
        	} else if (sKind == "PRINT02") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_STD_YY"));    //정산년월
        		sReturnString += " YEA_EMP_NO=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_EMP_NO"));    //사번
        		
        	} else if (sKind == "PRINT03") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_STD_YY"));    //정산년월
        		sReturnString += " YEA_EMP_NO=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_EMP_NO"));    //사번
        		
        	} else if (sKind == "PRINT04") {
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_STD_YY"));    //정산년월
        		sReturnString += " YEA_EMP_NO=" 		+ this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition,"YEA_EMP_NO"));    //사번
        		
        	}
        	
        	return sReturnString;

        }

        /*-------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function(sMethodName,ErrorCode,ErrorMSG) {

        	this.setWaitCursor(false);

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
            this.grdYEA_MASTXM.setCellProperty("Head", 0, "text", "0");

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsYEA_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsYEA_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdYEA_MASTXM.selectRow(0);		
        		this.fnc_GridSetCellFocus(this.grdYEA_MASTXM, "YEA_EMP_NO");		
        		this.dsYEA_MASTXM.set_rowposition(0); 
        	
        	    this.fn_SearchDetail();     
            } else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.Tab0.tab1.stInformation, this.dsYEA_YEFAMI.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		for (var nRow = 0; nRow < this.dsYEA_YEFAMI.rowcount; nRow++) {
        			this.dsYEA_YEFAMI.setColumn(nRow, "NTS", application.GBL_HTTPURL + this.dsYEA_YEFAMI.getColumn(nRow, "NTS"));
        			this.dsYEA_YEFAMI.setColumn(nRow, "ETC", application.GBL_HTTPURL + this.dsYEA_YEFAMI.getColumn(nRow, "ETC"));
        		}
        		
        		this.dsYEA_YEFAMI.applyChange();	
        			
        		this.fnc_Information(this.Tab0.tab2.stInformation , this.dsYEA_PAYDTL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); 
        		this.fnc_Information(this.Tab0.tab3.stInformation , this.dsYEA_BFWORK.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); 
        		this.fnc_Information(this.Tab0.tab3.stInformation1, this.dsYEA_BFNTAX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); 
        		this.fnc_Information(this.Tab0.tab6.stInformation , this.dsYEA_MEDISP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); 
        		this.fnc_Information(this.Tab0.tab7.stInformation , this.dsYEA_DONASP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); 
        		this.fnc_Information(this.Tab0.tab7.stInformation1, this.dsYEA_DONAAD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); 
        		
        		if(this.dsYEA_INCDEC.rowcount == 0) {
        			var iRow = this.dsYEA_INCDEC.addRow();  				
        			this.dsYEA_INCDEC.setColumn(iRow, "YEA_STD_YY", this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.currow, "YEA_STD_YY"));	//정산년도
        			this.dsYEA_INCDEC.setColumn(iRow, "YEA_EMP_NO", this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.currow, "YEA_EMP_NO"));	//사번			
        			this.dsYEA_YEPROC.addRow();  			
        		}

        		// 의료비, 기부금 가족사항 콤보
        		// 세부 콤보 생성
        		var arrParam1 = new Array();
        		arrParam1[0] = "dsYEA_MEDISP_FAMI"; //받을 Dataset명
        		arrParam1[1] = "YEAA0012"; //조회 콤보 ID
        		arrParam1[2] = ""; //Head Flas
        		arrParam1[3] = "0"; //사용여부
        		arrParam1[4] = this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY") + "," + this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"); //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        		arrParam2[0] = "GRID,Tab0.tab6.grdYEA_MEDISP,dsYEA_MEDISP_FAMI,YEA_MES_STR003";
        		//this.fnc_GetUserComboSingle_YEA(arrParam1, arrParam2);
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        	
        		arrParam1 = new Array();
        		arrParam1[0] = "dsYEA_DONASP_FAMI"; //받을 Dataset명
        		arrParam1[1] = "YEAA0013"; //조회 콤보 ID
        		arrParam1[2] = ""; //Head Flas
        		arrParam1[3] = "0"; //사용여부
        		arrParam1[4] = this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY") + "," + this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"); //조회 조건

        		// Bind 처리
        		arrParam2 = new Array();
        		arrParam2[0] = "GRID,Tab0.tab7.grdYEA_DONASP,dsYEA_DONASP_FAMI,YEA_DOS_STR003";
        		//this.fnc_GetUserComboSingle_YEA(arrParam1, arrParam2);
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        				
        		//입력마감여부, 확정여부, 정산구분
        		//입력마감인경우 수정못하도록
        		if ( this.dsYEA_INCDEC.getColumn(0, "YEA_INC_STR025") == "1" ) {
        			this.Tab0.tab1.btnAddRow.set_visible(false);
        			this.Tab0.tab1.btnDelRow.set_visible(false);
        			this.Tab0.tab1.grdYEA_YEFAMI.set_readonly(true);
        						
        			this.Tab0.tab2.grdYEA_PAYDTL.set_readonly(true);
        			
        			this.Tab0.tab3.btnAddRow.set_visible(false);
        			this.Tab0.tab3.btnAddRow1.set_visible(false);
        			this.Tab0.tab3.btnDelRow.set_visible(false);
        			this.Tab0.tab3.btnDelRow1.set_visible(false);
        			this.Tab0.tab3.grdYEA_BFWORK.set_readonly(true);
        			this.Tab0.tab3.grdYEA_BFNTAX.set_readonly(true);
        			
        			this.Tab0.tab4.btnAddRow1.set_visible(false);
        			this.Tab0.tab4.btnAddRow2.set_visible(false);
        			this.Tab0.tab4.btnAddRow3.set_visible(false);	
        			this.Tab0.tab4.btnAddRow4.set_visible(false);
        			this.Tab0.tab4.btnDelRow1.set_visible(false);
        			this.Tab0.tab4.btnDelRow2.set_visible(false);
        			this.Tab0.tab4.btnDelRow3.set_visible(false);
        			this.Tab0.tab4.btnDelRow4.set_visible(false);
        			this.Tab0.tab4.grdYEA_PENSAV1.set_readonly(true);
        			this.Tab0.tab4.grdYEA_PENSAV2.set_readonly(true);
        			this.Tab0.tab4.grdYEA_PENSAV3.set_readonly(true);
        			this.Tab0.tab4.grdYEA_PENSAV4.set_readonly(true);
        						
        			//월세주택임차차입금 [2013귀속] 추가
                    this.Tab0.tab5.btnAddRow1.set_visible(false);
                    this.Tab0.tab5.btnAddRow2.set_visible(false);
                    this.Tab0.tab5.btnDelRow1.set_visible(false);
                    this.Tab0.tab5.btnDelRow2.set_visible(false);
                    this.Tab0.tab5.grdYEA_RENTA1.set_readonly(true);
                    this.Tab0.tab5.grdYEA_RENTA2_1.set_readonly(true);
                    this.Tab0.tab5.grdYEA_RENTA2_2.set_readonly(true);
        			
        			this.Tab0.tab6.btnAddRow.set_visible(false);			
        			this.Tab0.tab6.btnDelRow.set_visible(false);
        			this.Tab0.tab6.grdYEA_MEDISP.set_readonly(true);
        			
        			this.Tab0.tab7.btnAddRow.set_visible(false);
        			this.Tab0.tab7.btnAddRow2.set_visible(false);
        			this.Tab0.tab7.btnDelRow.set_visible(false);
        			this.Tab0.tab7.btnDelRow2.set_visible(false);
        			this.Tab0.tab7.grdYEA_DONASP.set_readonly(true);
        			this.Tab0.tab7.grdYEA_DONAAD.set_readonly(true);
        			
        			this.Tab0.tab8.grdYEA_INCDEC.set_readonly(true);		
                    
        			this.parent.popPRINT.btnReport00.set_enable(true);
        			
        		} else {
        			this.Tab0.tab1.btnAddRow.set_visible(true);
        			this.Tab0.tab1.btnDelRow.set_visible(true);
        			this.Tab0.tab1.grdYEA_YEFAMI.set_readonly(false);
        			
        			if ( this.parent.sUSERLAVEL == "5" ) {			
        				this.Tab0.tab2.grdYEA_PAYDTL.set_readonly(false);
        			}
        			
        			this.Tab0.tab3.btnAddRow.set_visible(true);
        			this.Tab0.tab3.btnAddRow1.set_visible(true);
        			this.Tab0.tab3.btnDelRow.set_visible(true);
        			this.Tab0.tab3.btnDelRow1.set_visible(true);
        			this.Tab0.tab3.grdYEA_BFWORK.set_readonly(false);
        			this.Tab0.tab3.grdYEA_BFNTAX.set_readonly(false);
        			
        			this.Tab0.tab4.btnAddRow1.set_visible(true);
        			this.Tab0.tab4.btnAddRow2.set_visible(true);
        			this.Tab0.tab4.btnAddRow3.set_visible(true);
        			this.Tab0.tab4.btnAddRow4.set_visible(true);
        			this.Tab0.tab4.btnDelRow1.set_visible(true);
        			this.Tab0.tab4.btnDelRow2.set_visible(true);
        			this.Tab0.tab4.btnDelRow3.set_visible(true);
        			this.Tab0.tab4.btnDelRow4.set_visible(true);
        			this.Tab0.tab4.grdYEA_PENSAV1.set_readonly(false);
        			this.Tab0.tab4.grdYEA_PENSAV2.set_readonly(false);
        			this.Tab0.tab4.grdYEA_PENSAV3.set_readonly(false);
        			this.Tab0.tab4.grdYEA_PENSAV4.set_readonly(false);
        			
        			//월세주택임차차입금 [2013귀속] 추가
                    this.Tab0.tab5.btnAddRow1.set_visible(true);
                    this.Tab0.tab5.btnAddRow2.set_visible(true);
                    this.Tab0.tab5.btnDelRow1.set_visible(true);
                    this.Tab0.tab5.btnDelRow2.set_visible(true);
                    this.Tab0.tab5.grdYEA_RENTA1.set_readonly(false);
                    this.Tab0.tab5.grdYEA_RENTA2_1.set_readonly(false);
                    this.Tab0.tab5.grdYEA_RENTA2_2.set_readonly(false);
        			
        			this.Tab0.tab6.btnAddRow.set_visible(true);			
        			this.Tab0.tab6.btnDelRow.set_visible(true);
        			this.Tab0.tab6.grdYEA_MEDISP.set_readonly(false);
        			
        			this.Tab0.tab7.btnAddRow.set_visible(true);
        			this.Tab0.tab7.btnAddRow2.set_visible(true);
        			this.Tab0.tab7.btnDelRow.set_visible(true);
        			this.Tab0.tab7.btnDelRow2.set_visible(true);
        			this.Tab0.tab7.grdYEA_DONASP.set_readonly(false);
        			this.Tab0.tab7.grdYEA_DONAAD.set_readonly(false);
        			
        			this.Tab0.tab8.grdYEA_INCDEC.set_readonly(false);
        			
        			this.parent.popPRINT.btnReport10.set_enable(false);
        		}
        		
        		if ( this.dsYEA_YEPROC.getColumn(0,"YEA_PRC_STR001") == "1") {
        			this.parent.popPRINT.btnReport10.set_enable(true);
        			this.parent.popPRINT.btnReport40.set_enable(true);
        		} else {
        			this.parent.popPRINT.btnReport10.set_enable(false);
        			this.parent.popPRINT.btnReport40.set_enable(false);
        		}
        		
        		//this.fn_search99();
        		this.fnc_GetComboDs(this.dsCombo);
        	} else if (sMethodName=="SEARCH99") {	
        		        
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		//this.fn_Search();
        		//tab 그리드 조회
        	    this.fn_SearchDetail();
        		
        	// 부양가족처리 Argument 생성
        	} else if (sMethodName == 'PROC00') {	
        		for (var nRow = 0; nRow < this.dsYEA_MASTXM.rowcount; nRow++) {
        			this.dsYEA_MASTXM.setColumn(nRow, "YEA_CHK", "0");
        		}
        		this.dsYEA_MASTXM.applyChange();		
        		this.fnc_Message("TMM103");
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		//this.fn_Search();();
        		
        	    this.fn_SearchDetail();

        				
        	// 근로소득처리 Argument 생성
        	} else if (sMethodName == 'PROC01') {	
        		for (var nRow = 0; nRow < this.dsYEA_MASTXM.rowcount; nRow++) {
        			this.dsYEA_MASTXM.setColumn(nRow, "YEA_CHK", "0");
        		}
        		this.dsYEA_MASTXM.applyChange();		
        		this.fnc_Message("TMM103");
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		//this.fn_Search();();
        		//tab 그리드 조회
        	    this.fn_SearchDetail();

        
        	} else if (sMethodName=="PROC02") {
        		for (var nRow = 0; nRow < this.dsYEA_MASTXM.rowcount; nRow++) {
        			this.dsYEA_MASTXM.setColumn(nRow, "YEA_CHK", "0");
        		}
        		this.dsYEA_MASTXM.applyChange();		
        		this.fnc_Message("TMM103");
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		//this.fn_Search();();
        		//tab 그리드 조회
        	    this.fn_SearchDetail();
        	
        	} else if (sMethodName=="PROC03") {
        		for (var nRow = 0; nRow < this.dsYEA_MASTXM.rowcount; nRow++) {
        			this.dsYEA_MASTXM.setColumn(nRow, "YEA_CHK", "0");
        		}
        		this.dsYEA_MASTXM.applyChange();		
        		this.fnc_Message("TMM103");
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		//this.fn_Search();();
        		//tab 그리드 조회
        	    this.fn_SearchDetail();

        		
        	} else if (sMethodName=="PROC04") {
        		for (var nRow = 0; nRow < this.dsYEA_MASTXM.rowcount; nRow++) {
        			this.dsYEA_MASTXM.setColumn(nRow, "YEA_CHK", "0");
        		}
        		this.dsYEA_MASTXM.applyChange();		
        		this.fnc_Message("TMM103");
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		//this.fn_Search();();
        		//tab 그리드 조회
        	    this.fn_SearchDetail();
        		
        	} else if (sMethodName == "PROC07") {
        	    this.fnc_Message("TMM103", "업로드");
        		this.fn_Search();
        		this.parent.divButtonList.btnUpload.appendItem();		
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;
        		
        		arrParam[arrInt++]  = "GRID,Tab0.tab1.grdYEA_YEFAMI,dsFRDE_CODE,YEA_FAM_STR001";   // 가족구분
        		arrParam[arrInt++]  = "GRID,Tab0.tab1.grdYEA_YEFAMI,dsLFDN_CODE,YEA_FAM_STR002";   // 내외국인구분
        		arrParam[arrInt++]  = "GRID,Tab0.tab1.grdYEA_YEFAMI,dsHALT_CODE,YEA_FAM_STR009";   // 장애인유형
        		arrParam[arrInt++]  = "GRID,Tab0.tab1.grdYEA_YEFAMI,dsEEDI_CODE,YEA_FAM_STR010";   // 교육비구분		
        		arrParam[arrInt++]  = "GRID,Tab0.tab3.grdYEA_BFWORK,dsBEPW_YSNO,YEA_BFW_STR001";   // 근로소득내역 구분
        		arrParam[arrInt++]  = "GRID,Tab0.tab3.grdYEA_BFNTAX,dsNTAX_CODE,YEA_NON_TAX_CD";   // 비과세항목		
        		arrParam[arrInt++]  = "GRID,Tab0.tab4.grdYEA_PENSAV1,dsPIDD_CODE1,YEA_PEN_STR001";  // 연금저축구분
        		arrParam[arrInt++]  = "GRID,Tab0.tab4.grdYEA_PENSAV2,dsPIDD_CODE2,YEA_PEN_STR001";  // 연금저축구분
        		arrParam[arrInt++]  = "GRID,Tab0.tab4.grdYEA_PENSAV3,dsPIDD_CODE3,YEA_PEN_STR001";  // 연금저축구분
        		arrParam[arrInt++]  = "GRID,Tab0.tab5.grdYEA_RENTA1,dsHUSF_CODE,YEA_RT1_STR003";   // 주거형태구분
        		arrParam[arrInt++]  = "GRID,Tab0.tab5.grdYEA_RENTA2_2,dsHUSF_CODE,YEA_RT2_STR007"; // 주거형태구분		
        		arrParam[arrInt++]  = "GRID,Tab0.tab6.grdYEA_MEDISP,dsMETE_CODE,YEA_MES_STR001";   // 의료증빙코드
        		arrParam[arrInt++]  = "GRID,Tab0.tab7.grdYEA_DONASP,dsDOTE_CODE,YEA_DOS_STR006";   // 기부유형코드
        		arrParam[arrInt++]  = "GRID,Tab0.tab7.grdYEA_DONASP,dsDTDN_CODE,YEA_DOS_STR001";   // 자료구분코드
        		arrParam[arrInt++]  = "GRID,Tab0.tab7.grdYEA_DONAAD,dsDOTE_CODE,YEA_DOA_STR001";   // 기부유형코드
        		this.fnc_CommonCodeInnerBind(arrParam);	
        		
        	}
        }

        

        /*---------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +---------------------------------------*/
        this.fn_KeyFieldDisible = function(obj) 
        {
        	if (obj.rowposition < 0) return;

        	this.setWaitCursor(true);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdYEA_MASTXM.setFocus();
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();
        	if ( this.dsYEA_INCDEC.getColumn(0, "YEA_INC_STR025") == "1" ) {
        		return false;
        	}
        	
        	if (obj.name == "grdYEA_PENSAV1") {	
        		if (sColumnID == "YEA_PEN_FINA_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "YEA_PEN_FINA_NAME") {				
        			arrParam[0] = "PAY0003";
        			arrParam[1] = "";
        			arrParam[2] = "YEA_PEN_FINA_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab0.tab4.grdYEA_PENSAV1";
        			arrParam[5] = "YEA_PEN_STR002,YEA_PEN_FINA_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} 
        	} else if (obj.name == "grdYEA_PENSAV2") {	
        		if (sColumnID == "YEA_PEN_FINA_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "YEA_PEN_FINA_NAME") {				
        			arrParam[0] = "PAY0003";
        			arrParam[1] = "";
        			arrParam[2] = "YEA_PEN_FINA_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab0.tab4.grdYEA_PENSAV2";
        			arrParam[5] = "YEA_PEN_STR002,YEA_PEN_FINA_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} 
        	} else if (obj.name == "grdYEA_PENSAV3") {	
        		if (sColumnID == "YEA_PEN_FINA_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "YEA_PEN_FINA_NAME") {				
        			arrParam[0] = "PAY0003";
        			arrParam[1] = "";
        			arrParam[2] = "YEA_PEN_FINA_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab0.tab4.grdYEA_PENSAV3";
        			arrParam[5] = "YEA_PEN_STR002,YEA_PEN_FINA_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} 
        	} else if (obj.name == "grdYEA_PENSAV4") {	
        		if (sColumnID == "YEA_PEN_FINA_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "YEA_PEN_FINA_NAME") {				
        			arrParam[0] = "PAY0003";
        			arrParam[1] = "";
        			arrParam[2] = "YEA_PEN_FINA_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab0.tab4.grdYEA_PENSAV4";
        			arrParam[5] = "YEA_PEN_STR002,YEA_PEN_FINA_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} 
        	}	

        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);	
        }

        /*-----------------------------------------------------------  Tab function start -------------------------------------------------------------------*/
        /*------------------------------------------------+
         |  (Tabpage01) 부양가족 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab1_btnAddRow_OnClick = function (obj,e) 
        {
        	// 사원 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"))) < 1) {
        		this.fnc_Message("TMM013"); //사원을 먼저 선택하세요..
        		return false;
        	}

        	var iRow = this.dsYEA_YEFAMI.addRow();
        	
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_STD_YY', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY"));  //정산년월
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"));  //사번	
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_FAM_STR005', "0");	//기본공제
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_FAM_STR009', "0");	//장애인여부
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_FAM_STR007', "0");	//부녀자여부
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_FAM_STR008', "0");	//한부모여부
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_FAM_STR006', "0");	//경로자여부
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_FAM_STR0011', "0");	//6세이하
        	this.dsYEA_YEFAMI.setColumn(iRow, 'YEA_FAM_STR0012', "0");	//출산입양
        	
        	this.dsYEA_YEFAMI.set_rowposition(iRow); 
        	this.dsYEA_YEFAMI.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR001"));
        	this.Tab0.tab1.grdYEA_YEFAMI.selectRow(iRow);
            this.Tab0.tab1.grdYEA_YEFAMI.setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage01) 부양가족 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab1_btnDelRow_OnClick = function (obj,e) 
        {
        	//부양가족 삭제 체크
        	if (this.dsYEA_YEFAMI.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	if (this.fn_DeleteCheck()) this.dsYEA_YEFAMI.deleteRow(this.dsYEA_YEFAMI.rowposition);
        	
        	this.SET_YEA_INCDEC("INSU");	//보험료
        	this.SET_YEA_INCDEC("INS2");	//장애인
        	this.SET_YEA_INCDEC("MEDI");	//의료비
        	this.SET_YEA_INCDEC("EDUC");	//교육비
        	this.SET_YEA_INCDEC("CARD");	//카드
        	this.SET_YEA_INCDEC("DCAD");	//직불카드
        	this.SET_YEA_INCDEC("CASH");	//현금영수증
        	this.SET_YEA_INCDEC("MRKT");	//전통시장		
        	this.SET_YEA_INCDEC("PTRA");    //대중교통
        	
        	this.Tab0.tab1.grdYEA_YEFAMI.setFocus();			
        }

        /*------------------------------------------------+
         |  (Tabpage03) 종근무지 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab3_btnAddRow_OnClick = function (obj,e) 
        {
        	// 사원 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"))) < 1) {
        		this.fnc_Message("TMM013"); //사원을 먼저 선택하세요..
        		return false;
        	}
        	
        	var iRow = this.dsYEA_BFWORK.addRow();
        	
        	this.dsYEA_BFWORK.setColumn(iRow, 'YEA_STD_YY', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY"));  //정산년월
        	this.dsYEA_BFWORK.setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"));  //사번	

        	this.dsYEA_BFWORK.set_rowposition(iRow); 
        	this.dsYEA_BFWORK.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_FAM_STR001"));
            this.Tab0.tab3.grdYEA_BFWORK.selectRow(iRow);
            this.Tab0.tab3.grdYEA_BFWORK.setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage03) 종근무지 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab3_btnDelRow_OnClick = function (obj,e) 
        {
        	//근로소득내역 삭제 체크
        	if (this.dsYEA_BFWORK.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	this.sSelectGrid = "1";
        	if (this.fn_DeleteCheck()) this.dsYEA_BFWORK.deleteRow(this.dsYEA_BFWORK.rowposition);
        	this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM001", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM007"));	//국민연금
        	this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM011", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008"));	//건강보험
        	this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM013", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));	//고용보험
        	this.dsYEA_YEFAMI.setColumn(0,"YEA_FAM_NUM002",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022")+this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));		//부양가족 건강보험+고용보험
        			
        	this.Tab0.tab3.grdYEA_BFWORK.setFocus();
        }

        
        /*-------------------------------------------------------+
         |  (Tabpage03) 비과세소득내역 행추가 버튼 클릭 時  |
         +-------------------------------------------------------*/
        this.Tab0_tab3_btnAddRow1_OnClick = function (obj,e) 
        {
        	// 종근무지 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_BIZ_NO"))) < 1) {
        		this.fnc_Message("YEA006"); // 종근무지 사업자번호를 입력하세요.
        		return false;
        	}

        	var iRow = this.dsYEA_BFNTAX.addRow();
        	
        	this.dsYEA_BFNTAX.setColumn(iRow, 'YEA_STD_YY', this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_STD_YY")); //정산년월
        	this.dsYEA_BFNTAX.setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_EMP_NO")); //사번
        	this.dsYEA_BFNTAX.setColumn(iRow, 'YEA_BIZ_NO', this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_BIZ_NO")); //사업자번호
        	
        	this.dsYEA_BFNTAX.set_rowposition(iRow); 
        	this.Tab0.tab3.grdYEA_BFNTAX.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFNTAX, "YEA_NON_TAX_CD"));
            this.Tab0.tab3.grdYEA_BFNTAX.selectRow(iRow);
            this.Tab0.tab3.grdYEA_BFNTAX.setFocus();
        }

        /*-------------------------------------------------------+
         |  (Tabpage03) 비과세소득내역 행삭제 버튼 클릭 時  |
         +-------------------------------------------------------*/
        this.Tab0_tab3_btnDelRow1_OnClick = function (obj,e) 
        {
        	//비과세소득내역 삭제 체크
        	if (this.dsYEA_BFNTAX.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	this.sSelectGrid = "2";
        	if (this.fn_DeleteCheck()) this.dsYEA_BFNTAX.deleteRow(this.dsYEA_BFNTAX.rowposition);
        	this.Tab0.tab3.grdYEA_BFNTAX.setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage04) 연금저축 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab4_btnAddRow_OnClick = function (obj,e)
        {
        	// 사원 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"))) < 1) {
        		this.fnc_Message("TMM013"); //사원을 먼저 선택하세요..
        		return false;
        	}

            var iRow = eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).addRow();
        	
        	eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setColumn(iRow, 'YEA_STD_YY', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY")); //정산년월
        	eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO")); //사번

        	// [2013귀속] 없어졌지만 그냥 둠...
        	if (this.fnc_Right(obj.name, 1) == "4") {
        		eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setColumn(iRow, 'YEA_PEN_STR001', "51");
        	}
        	
        	eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).set_rowposition(iRow); 
        	eval("this.Tab0.tab4.grdYEA_PENSAV" + this.fnc_Right(obj.name, 1)).selectRow(iRow);
        	eval("this.Tab0.tab4.grdYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setFocus(); 	//세부항목 코드 Fucus
        	eval("this.Tab0.tab4.grdYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setCellPos(0);	//Cell의 위치를 품목코드로 설정
        }

        /*------------------------------------------------+
         |  (Tabpage04) 연금저축 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab4_btnDelRow_OnClick = function (obj,e)
        {
        	//연금저축 삭제 체크
        	if (eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	if (this.fn_DeleteCheck1(this.fnc_Right(obj.name, 1))) 
        	{
        		eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).deleteRow(eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).rowposition);
        		
        		if (this.fnc_Right(obj.name, 1) == "1") {
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM049", this.dsYEA_PENSAV1.getCaseSum("YEA_PEN_STR001 == '12'", "YEA_PEN_NUM001")); //과학기술인공제
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM050", this.dsYEA_PENSAV1.getCaseSum("YEA_PEN_STR001 == '11'", "YEA_PEN_NUM001")); //퇴직연금
        		} else if (this.fnc_Right(obj.name, 1) == "2") {
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM022", this.dsYEA_PENSAV2.getCaseSum("YEA_PEN_STR001 == '21'", "YEA_PEN_NUM001")); //개인연금저축
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM051", this.dsYEA_PENSAV2.getCaseSum("YEA_PEN_STR001 == '22'", "YEA_PEN_NUM001")); //연금저축
        		} else if (this.fnc_Right(obj.name, 1) == "3") {
        			/*[2015귀속]_로직변경*/		
        			var nAmt1 = 0;
        			var nAmt2 = 0;
        			var nAmt3 = 0;
        			var nAmt4 = 0;	//[2015귀속]쳥약저축(2015.01.01 이후가입분)
        			var nAmt5 = 0; 	//[2015귀속]주택청약종합저축(2015.01.01 이후가입분)
        			
        			for (var i=0; i<this.dsYEA_PENSAV3.getRowCount(); i++) {
        				if(this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR005" ) == "1") {
        					if(this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "31") {							
        						nAmt4 += nAmt4 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));		//[2015귀속]쳥약저축(2015.01.01 이후가입분)
        					} else if (this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "32") {							
        						nAmt5 += nAmt5 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));		//[2015귀속]쳥약저축(2015.01.01 이후가입분)
        					} 
        				} else {
        					if(this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "31") {							
        						nAmt1 += nAmt1 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));
        					} else if (this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "32") {							
        						nAmt2 += nAmt2 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));
        					} else if (this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "34") {							
        						nAmt3 += nAmt3 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));
        					}
        				}
        			}
        			
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM024", nAmt1); //2015 귀속 연말정산_청약저축_2014.12.31 이전
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM026", nAmt2); //2015 귀속 연말정산_주택청약종합_2014.12.31 이전
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM025", nAmt3); //근로자주택마련 
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM081", nAmt4); //2015 귀속 연말정산_청약저축_2015.01.01 이후 
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM082", nAmt5); //2015 귀속 연말정산_주택청약종합_2015.01.01 이전
        			/*[2015귀속]_로직변경끝*/		
        			
        		} else if (this.fnc_Right(obj.name, 1) == "4") {
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM047", this.dsYEA_PENSAV4.getCaseSum("YEA_PEN_STR001 == '51'", "YEA_PEN_NUM001")); //장기집합투자증권저축
        		}
        	}
        	eval("this.Tab0.tab4.grdYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setFocus();   //세부항목 코드 Fucus
        }

        /*------------------------------------------------+
         |  (Tabpage05) 월세주택 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab5_btnAddRow_OnClick = function (obj,e)
        {
        	// 사원 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"))) < 1) {
        		this.fnc_Message("TMM013"); //사원을 먼저 선택하세요..
        		return false;
        	}

            var iRow = eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).addRow();
        	var sObjName = "Tab0.tab5.grdYEA_RENTA1";

        	if (this.fnc_Right(obj.name, 1) != "1") {
        		sObjName = "Tab0.tab5.grdYEA_RENTA2_1";
        	}
        	
        	eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).setColumn(iRow, 'YEA_STD_YY', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY")); //정산년월
        	eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO")); //사번
        	
        	eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).set_rowposition(iRow); 
        	eval("this."+sObjName).selectRow(iRow);
        	eval("this."+sObjName).setFocus(); 				//세부항목 코드 Fucus
        	eval("this."+sObjName).setCellPos(0); 			//Cell의 위치를 품목코드로 설정

        }

        /*------------------------------------------------+
         |  (Tabpage05) 월세주택 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab5_btnDelRow_OnClick = function (obj,e) 
        {
        	//월세주택 내역 삭제 체크
        	if (eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	if (this.fn_DeleteCheck2(this.fnc_Right(obj.name, 1))) 
        	{
        		eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).deleteRow(eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).rowposition);

        		if (this.fnc_Right(obj.name, 1) == "1") {
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM074", this.dsYEA_RENTA1.getSum("YEA_RT1_NUM001")); //주택자금 월세액
        		}else if (this.fnc_Right(obj.name, 1) == "2") {
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM016", parseFloat(this.dsYEA_RENTA2.getSum("YEA_RT2_NUM003")) + parseFloat(this.dsYEA_RENTA2.Sum("YEA_RT2_NUM004")));  //주택임차거주자차입상환
        		}
        	}
        	
        	var sObjName = "Tab0.tab5.grdYEA_RENTA1";

        	if (this.fnc_Right(obj.name, 1) != "1") {
        		sObjName = "Tab0.tab5.grdYEA_RENTA2_1";
        	}
        	eval("this."+sObjName).setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage06) 의료명세 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab6_btnAddRow_OnClick = function (obj,e) 
        {
        	// 사원 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"))) < 1) {
        		this.fnc_Message("TMM013"); //사원을 먼저 선택하세요..
        		return false;
        	}

        	var iRow = this.dsYEA_MEDISP.addRow();
        	
        	this.dsYEA_MEDISP.setColumn(iRow, 'YEA_STD_YY', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY"));  //정산년월
        	this.dsYEA_MEDISP.setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"));  //사번	
        	
        	this.dsYEA_MEDISP.set_rowposition(iRow); 
        	this.Tab0.tab6.grdYEA_MEDISP.setCellPos(0);
        	this.Tab0.tab6.grdYEA_MEDISP.selectRow(iRow);
            this.Tab0.tab6.grdYEA_MEDISP.setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage06) 의료명세 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.Tab0_tab6_btnDelRow_OnClick = function (obj,e) 
        {
        	//의료명세 삭제 체크
        	if (this.dsYEA_MEDISP.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	if (this.fn_DeleteCheck()) this.dsYEA_MEDISP.deleteRow(this.dsYEA_MEDISP.rowposition);
        	this.Tab0.tabpage6.grdYEA_MEDISP.setFocus();			
        }

        /*----------------------------------------+
         | (Tabpage07) 기부금명세서 추가 처리  |
         +----------------------------------------*/
        this.Tab0_tab7_btnAddRow_OnClick = function (obj,e) 
        {
            // 사원 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"))) < 1) {
        		this.fnc_Message("TMM013"); //사원을 먼저 선택하세요..
        		return false;
        	}

        	var iRow = this.dsYEA_DONASP.addRow();				//Record Add
        	
        	this.dsYEA_DONASP.setColumn(iRow, 'YEA_STD_YY', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY")); //정산년월
        	this.dsYEA_DONASP.setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO")); //사번

        	this.dsYEA_DONASP.set_rowposition(iRow); 
        	this.Tab0.tab7.grdYEA_DONASP.setCellPos(0);
        	this.Tab0.tab7.grdYEA_DONASP.selectRow(iRow);
            this.Tab0.tab7.grdYEA_DONASP.setFocus();
        }

        /*----------------------------------------+
         | (Tabpage07) 기부금명세서 제거 처리  |
         +----------------------------------------*/
        this.Tab0_tab7_btnDelRow_OnClick = function (obj,e) 
        {
        	//기부금명세서 삭제 체크
        	if (this.dsYEA_DONASP.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	this.sSelectGrid = "1";
        	if (this.fn_DeleteCheck()) this.dsYEA_DONASP.deleteRow(this.dsYEA_DONASP.rowposition);
        	this.Tab0.tabpage6.grdYEA_DONASP.setFocus();	
        }

        /*---------------------------------------------+
         | (Tabpage07) 기부금조정명세서 추가 처리  |
         +---------------------------------------------*/
        this.Tab0_tab7_btnAddRow2_OnClick = function (obj,e) 
        {
            // 사원 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"))) < 1) {
        		this.fnc_Message("TMM013"); //사원을 먼저 선택하세요..
        		return false;
        	}

        	var iRow = this.dsYEA_DONAAD.addRow();				           //Record Add
        	
        	this.dsYEA_DONAAD.setColumn(iRow, 'YEA_STD_YY', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY")); //정산년월
        	this.dsYEA_DONAAD.setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO")); //사번

        	this.Tab0.tab7.grdYEA_DONAAD.setFocus();
        	this.Tab0.tab7.grdYEA_DONAAD.setCellPos(this.Tab0.tab7.grdYEA_DONAAD.getBindCellIndex("body", "YEA_DOA_STR001")); 		//Cell의 위치를 기부유형코드로 설정
        }

        /*----------------------------------------+
         | (Tabpage07) 기부금명세서 제거 처리  |
         +----------------------------------------*/
        this.Tab0_tab7_btnDelRow2_OnClick = function (obj,e) 
        {
        	//기부금명세서 삭제 체크
        	if (this.dsYEA_DONAAD.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	this.sSelectGrid = "2";
        	if (this.fn_DeleteCheck()) this.dsYEA_DONAAD.deleteRow(this.dsYEA_DONAAD.rowposition);
        	this.Tab0.tab7.grdYEA_DONAAD.setFocus();
        }
        /*-----------------------------------------------------------  Tab function end   -------------------------------------------------------------------*/
        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck0 = function () 
        {	
        	var sQuestionText;
        	if (this.Tab0.tabindex == "0") {
        	    //부양가족 삭제 여부 확인
        		sQuestionText = "성명 : " + this.dsYEA_YEFAMI.getColumn(this.dsYEA_YEFAMI.rowposition, "YEA_FAM_STR003");
        	} else if (this.Tab0.tabindex == "2") {
        	    if(this.sSelectGrid == "1"){
        			//종근무지 근로소득내역 삭제 여부 확인
        			sQuestionText = "회사명 : " + this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_BFW_STR002");
        	    } else {
        	        //종근무지 비과세소득내역 삭제 여부 확인
        			sQuestionText = "비과세코드 : " + this.dsYEA_BFNTAX.getColumn(this.dsYEA_BFNTAX.rowposition, "YEA_NON_TAX_CD");
        	    }		
        	} else if (this.Tab0.tabindex == "5") {
        	    //의료명세 삭제 여부 확인
        		sQuestionText = "상호 : " + this.dsYEA_MEDISP.getColumn(this.dsYEA_MEDISP.rowposition, "YEA_MES_STR006");
        	} else if (this.Tab0.tabindex == "6") {
        		if(this.sSelectGrid == "1"){
        			//기부명세 삭제 여부 확인
        			sQuestionText = "상호 : " + this.dsYEA_DONASP.getColumn(this.dsYEA_DONASP.rowposition, "YEA_DOS_STR007");
        	    } else {
        	        //기부명세 기부금 조정세액 삭제 여부 확인
        			//QuestionText = "기부금코드 : " + this.dsYEA_90010.getColumn(this.dsYEA_90010.findRow("YEA_COMD_CD", this.dsYEA_DONAAD.getColumn(this.dsYEA_DONAAD.rowposition, "YEA_DOA_STR001")), "YEA_COMD_NM");
        	    }
        	}
        	
        	this.sSelectGrid = "1";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        this.fn_DeleteCheck1 = function (sGubn) 
        {	
        	var sQuestionText;
        	if (sGubn == "1") {
        	    //부양가족 삭제 여부 확인
        		sQuestionText = "퇴직연금구분 : " + this.dsPIDD_CODE.getColumn(this.dsPIDD_CODE.findRow("COMD_CODE", this.dsYEA_PENSAV1.getColumn(this.dsYEA_PENSAV1.rowposition, "YEA_PEN_STR001")), "COMD_CDNM");
        	} else if (sGubn == "2") {
        	    //종근무지 근로소득내역 삭제 여부 확인
        		sQuestionText = "연금저축구분 : " + this.dsPIDD_CODE.getColumn(this.dsPIDD_CODE.findRow("COMD_CODE", this.dsYEA_PENSAV2.getColumn(this.dsYEA_PENSAV2.rowposition, "YEA_PEN_STR001")), "COMD_CDNM");
        	} else if (sGubn == "3") {
        	    //의료명세 삭제 여부 확인
        		sQuestionText = "저축구분 : " + this.dsPIDD_CODE.getColumn(this.dsPIDD_CODE.findRow("COMD_CODE", this.dsYEA_PENSAV3.getColumn(this.dsYEA_PENSAV3.rowposition, "YEA_PEN_STR001")), "COMD_CDNM");
        	} else if (sGubn == "4") {
        		//기부명세 삭제 여부 확인
        		sQuestionText = "금융기관 : " + this.dsYEA_PENSAV4.getColumn(this.dsYEA_PENSAV4.rowposition, "YEA_PEN_FINA_NAME");
        	}
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        this.fn_DeleteCheck2 = function (sGubn) 
        {	
        	var sQuestionText;
        	if (sGubn == "1") {
        		sQuestionText = "임대인성명 : " + this.dsYEA_RENTA1.getColumn(this.dsYEA_RENTA1.rowposition, "YEA_RT1_STR001");
        	} else {
        		sQuestionText = "대주성명 : " + this.dsYEA_RENTA2.getColumn(this.dsYEA_RENTA2.rowposition, "YEA_RT2_STR001");
        		sQuestionText += ", 임대인성명 : " + this.dsYEA_RENTA2.getColumn(this.dsYEA_RENTA2.rowposition, "YEA_RT2_STR005");
        	}
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-----------------------------------------------------------      function start -------------------------------------------------------------------*/
         /*------------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e) 
        {
        	if (obj.getCellProperty("Head", e.cell, "edittype") == "checkbox") {
        		this.fn_GridSelChk(obj, "YEA_CHK", e.cell);
        	}
        }

        /*------------------------+
         |  Grid 일괄 Check 처리  |
         +------------------------*/
        this.fn_GridSelChk = function (objGrd,chk_col,nCell) 
        {
        	var objDs = objGrd.binddataset;

        	if (objGrd.getCellProperty("Head", nCell, "text") == 1) {
        		objGrd.setCellProperty("Head", nCell, "text", "0");
        		this.fn_SetGrdChk(0, objDs, chk_col);
        	} else {
        		objGrd.setCellProperty("head", nCell, "text", "1");
        		this.fn_SetGrdChk(1, objDs, chk_col);
        	}
        }

        /*---------------------------+
         | Dataset Check Toggle 처리 |
         +---------------------------*/
        this.fn_SetGrdChk = function (chk_val,objDs,chk_col) 
        {
        	for (this.i = 0; this.i < eval("this."+objDs).rowcount; this.i++) {
        		eval("this."+objDs).setColumn(this.i, chk_col, chk_val);
        	}

        }
        /*----------------------------------+
         |  주민등록번호에서 나이 계산  |
         +----------------------------------*/
        this.GetAge = function (juminNum,baseDate) 
        {
        	var nYear;
        	var nMonth;
        	var nDay;
        	var nAge;
        	var strTemp = this.fnc_SubStr(juminNum, 0, 2);

        	if (this.fnc_SubStr(juminNum, 6, 1) == "3" || this.fnc_SubStr(juminNum, 6, 1) == "4" || this.fnc_SubStr(juminNum, 6, 1) == "7" || this.fnc_SubStr(juminNum, 6, 1) == "8") {
        		nYear = 2000 + nexacro.toNumber(strTemp,0);
        	} else {
        		nYear = 1900 + nexacro.toNumber(strTemp,0);
        	}

        	nMonth = nexacro.toNumber(this.fnc_SubStr(juminNum, 2, 2),0);
        	nDay   = nexacro.toNumber(this.fnc_SubStr(juminNum, 4, 2),0);
        	nAge   = nexacro.toNumber(this.fnc_SubStr(baseDate, 0, 4),0) - nYear;

        	// 생일이 안 지난 경우 -1
        	if (nMonth == nexacro.toNumber(this.fnc_SubStr(baseDate, 4, 2),0)) {
        		if (nDay > nexacro.toNumber(this.fnc_SubStr(baseDate, 6, 2),0)) {
        			nAge -= 1;
        		}
        	} else if (nMonth > nexacro.toNumber(this.fnc_SubStr(baseDate, 4, 2),0)) {
        		nAge -= 1;
        	}
        	
        	if (juminNum == undefined)  {
        		nAge = 0;
        	}
        	
        	return nAge;	
        }

        /*-----------------------+
         |  가족사항 변경  |
         +------------------------*/
        this.SET_YEA_YEFAMI = function (param,nRow) 
        {
        	switch (param) {
        		case "SING":
        			// 신고코드 0 선택 불가, 신고코드 0이면 삭제불가
        			if (nRow > 0) { 
        				//this.dsFRDE_CODE.filter("YEA_COMD_CD != '0'");
        				this.dsFRDE_CODE.filter("COMD_CODE != '0'");
        				this.Tab0.tab1.btnDelRow.set_enable(true);
        			} else {
        				//this.dsFRDE_CODE.filter("YEA_COMD_CD == '0'");  
        				this.dsFRDE_CODE.filter("COMD_CODE == '0'");
        				this.Tab0.tab1.btnDelRow.set_enable(false);
        			}
        			this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_NUM002"), "edittype", "none"); 
        			this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_NUM001"), "edittype", "none"); 
        		    this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_NUM002"), "edittype", "none"); 
        		    this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_NUM002"), "edittype", "none"); 
        			
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAMI_SEQ") == "1") {
        				// 본인
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR001"), "edittype", "none"); //가족관계신고코드
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR003"), "edittype", "none"); //성명
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR004"), "edittype", "none"); //주민등록번호
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR005"), "edittype", "none"); //기본공제여부
        				
        				// 부녀자공제 (여자일경우만 가능)
        				if (this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), 6, 1) == "2" || this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), 6, 1) == "4" ||
        					this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), 6, 1) == "6" || this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), 6, 1) == "8") 
        				{
        					this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR007"), "edittype", "checkbox"); //부녀자공제					
        				} else {
        					this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR007"), "edittype", "none"); //부녀자공제
        				}
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR008"), "edittype", "checkbox"); //[2013년 귀속] 한부모공제
        				
        			} else {
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR001"), "edittype", "combo"); //가족관계신고코드
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR003"), "edittype", "normal"); //성명
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR004"), "edittype", "mask"); //주민등록번호
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR005"), "edittype", "checkbox"); //기본공제여부

        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR007"), "edittype", "none"); //부녀자공제
        				this.Tab0.tab1.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab1.grdYEA_YEFAMI, "YEA_FAM_STR008"), "edittype", "none"); //[2013년 귀속] 한부모공제
        			
        			}

        			break;
        		case "WOME":
        			// [2013년 귀속]
        			// 부녀자 혹은 한부모만 선택 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR007") == "1") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR008", "0");
        			}
        			break;
        		case "WOSI":
        			// [2013년 귀속]
        			// 부녀자 혹은 한부모만 선택 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR008") == "1") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR007", "0");
        			}
        			break;
        		case "BASE":

        			break;
        		case "DISA":
        			// 기본공제대상자만 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR005") != "1") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR009", "0");
        			}

        			break;
        		case "AGED":
        		
        			// 기본공제대상자이면서 만 70세이상만 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR005") == "1" && this.GetAge(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_STD_YY"), 0, 4) + "1231") >= 70) {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR006", "1");
        			} else {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR006", "0");
        			} 
        			break;
        		case "REAR":
        			//6세 이하 -신고코드 4,8이면서 만 6세이하만 가능
        			if (( this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR005") == "1" 
        			     && this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "4" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "8")
        				 && this.GetAge(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_STD_YY"), 0, 4) + "1231") <= 6) {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR011", "1");
        			}else{
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR011", "0");
        			}

        			break;
        		case "BABY":
        			//출산양육 - 
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR005") == "1"
        				 && this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "4"
        				 && this.GetAge(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_STD_YY"), 0, 4) + "1231") == 0) {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR012", "1");
        			}else{
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR012", "0");
        			}
        			
        			break;
        		//보장성보험료	
        		case "INSU":
        			// 기본공제대상자만가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR005") != "1") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM003", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM004", "0");
        			}

        			break;
        			
        		case "INS2":
        			// 기본공제대상자만가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR005") != "1") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM020", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM021", "0");
        			}

        			break;
        			
        		//교육비
        		case "EDUC":
        			// 본인 교육비는 신고코드가 0인 경우만 가능 
        			if (nRow > 0) {
        				//this.dsEEDI_CODE.filter("YEA_COMD_CD != '1'");
        				this.dsEEDI_CODE.filter("COMD_CODE != '1'");
        			} else {
        				//this.dsEEDI_CODE.filter("YEA_COMD_CD == '1' || YEA_COMD_CD = '' ");
        				this.dsEEDI_CODE.filter("COMD_CODE == '1' || COMD_CODE = '' ");
        			}

        			// 초중대학생은 직계존속 제외
        			if ((this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "1" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "2")
        		     && (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR010") == "2" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR010") == "3" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR010") == "4")) 
        		    {	 
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM007", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM008", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR010", "");
        			}

        			// 장애인교육비는 장애인공제 대상자만 가능
        			// [2013년 귀속] 장애인여부 코드화
        			if (parseFloat(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR009")) < 1 && this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR010") == "5") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM007", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM008", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_STR010", "");
        			}

        			// 교육비구분이 없으면 금액 0
        			if (this.fnc_ToString(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR010")) == "") {			
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM007", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM008", "0");
        			}

        			break;
        		//카드
        		case "CARD":
        			// 관계코드가 6,7,8 이 아닌경우만 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "6" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "7" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "8") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM009", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM010", "0");
        			}
        			break;
        			
        		//직불카드
        		case "DCAD":
        			// 관계코드가 6,7,8이 아닌경우만 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "6" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "7" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "8") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM011", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM012", "0");
        			}

        			break;
        			
        		//현금영수증
        		case "CASH":
        			// 관계코드가 6,7,8 이 아닌경우만 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "6" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "7" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "8") 
        			{
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM013", "0");
        			}
        			break;

        		
        		//전통시장
        		case "MRKT":
        			// 관계코드가 6,7,8이 아닌경우만 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "6" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "7" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "8") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM014", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM015", "0");
        			}
        			break;
        			
        		//대중교통	
        		case "PTRA":
        			// [2013년 귀속]
        			// 관계코드가 6,7,8이 아닌경우만 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "6" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "7" || this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") == "8") {
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM016", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM017", "0");
        			}
        			break;
        			
                //기부
        		case "DONA":
        			// 관계코드가 0,3,4,5 만 가능
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") != "0" && this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") != "3" &&
        				this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") != "4" && this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR001") != "5") 
        			{
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM019", "0");
        				this.dsYEA_YEFAMI.setColumn(nRow, "YEA_FAM_NUM020", "0");
        			}

        			break;
        		default:
        			break;
        	}
        }

        /*--------------------------+
         |  소득공제신고서 변경  |
         +--------------------------*/
        this.SET_YEA_INCDEC = function (param) 
        {
        	switch (param) 
        	{
        		case "INSU":
        			// 보장성보험료
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM052", this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM003") + this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM004"));
        			break;
        			
        		case "INS2":
        			//장애인전용
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM053", this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM020") + this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM021"));
        			break;	
        			
        		case "MEDI":
        			// 의료비
        			var nAmt1 = 0;
        			var nAmt2 = 0;
        			var nAmt3 = 0;	/*[2015귀속]_난임시술비*/
        			for (var i = 0; i < this.dsYEA_YEFAMI.rowcount; i++) {
        				//2014 귀속연말정산 난임시술비 추가
        				if (parseFloat(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR009")) >= 1
        					||  this.GetAge(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR004"), this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(i, "YEA_STD_YY"), 0, 4) + "1231") >= 65
        					||  this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR001") == "0") {
        					nAmt1 += nexacro.toNumber(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM005"),0) + nexacro.toNumber(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM006"),0); /*+ nexacro.toNumber(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM022"),0) + nexacro.toNumber(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM023"),0);*/
        				} else {
        					nAmt2 += nexacro.toNumber(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM005"),0) + nexacro.toNumber(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM006"),0);
        				}
        				
        				/*[2015귀속]_난임시술비(국세청,기타)*/
        				if ((this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM022") > 0) || (this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM023") > 0 )) { 
        					nAmt3 += nexacro.toNumber(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM022")) +nexacro.toNumber(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_NUM023"));
        				}
        				
        			}
        			
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM054", nAmt1 + nAmt3); /*[2015귀속]_난임시술비(국세청,기타)*/
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM055", nAmt2);
        			break;
        			
        		case "EDUC":
        			// 교육비인원
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM057", this.dsYEA_YEFAMI.getCaseCount("YEA_FAM_STR010 == '2'", "YEA_FAMI_SEQ"));	//취학전
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM059", this.dsYEA_YEFAMI.getCaseCount("YEA_FAM_STR010 == '3'", "YEA_FAMI_SEQ"));	//초중고
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM061", this.dsYEA_YEFAMI.getCaseCount("YEA_FAM_STR010 == '4'", "YEA_FAMI_SEQ"));	//대학생
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM063", this.dsYEA_YEFAMI.getCaseCount("YEA_FAM_STR010 == '5'", "YEA_FAMI_SEQ"));	//장애인

        			// 교육비
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM056", this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '1'", "YEA_FAM_NUM007") + this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '1'", "YEA_FAM_NUM008"));
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM058", this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '2'", "YEA_FAM_NUM007") + this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '2'", "YEA_FAM_NUM008"));
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM060", this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '3'", "YEA_FAM_NUM007") + this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '3'", "YEA_FAM_NUM008"));
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM062", this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '4'", "YEA_FAM_NUM007") + this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '4'", "YEA_FAM_NUM008"));
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM064", this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '5'", "YEA_FAM_NUM007") + this.dsYEA_YEFAMI.getCaseSum("YEA_FAM_STR010 == '5'", "YEA_FAM_NUM008"));
        			break;
        			
        		case "CARD":
        			// 신용카드
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM034", this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM009") + this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM010"));
        			break;
        		case "DCAD":
        			// 직불카드
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM035", this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM011") + this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM012"));
        			break;
        			
        		case "CASH":
        			// 현금영수증
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM036", this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM013"));
        			break;

        		case "MRKT":
        			// 전통시장
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM037", this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM014") + this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM015"));			
        			break;
        			
        		case "PTRA":
        			// 대중교통
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM038", this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM016") + this.dsYEA_YEFAMI.getSum("YEA_FAM_NUM017"));			
        			break;
        			
        		default:
        			break;
        	}
        }
        /*-----------------------------------------------------------      function end   -------------------------------------------------------------------*/
        /*----------------------------------------------------------- PROC function start -------------------------------------------------------------------*/
        /*-------------------------------+
         |  부양가족처리 Button Click  |
         +-------------------------------*/
        this.divButtonList_btnYEFAMI_onclick = function(obj,e) 
        {
        	if (!this.fnc_DatasetChangeCheck("dsYEA_MASTXM")) {
        		this.fnc_Message("TMM013");
        		return false;
        	}
        	
        	if (this.fnc_Message("PAY002","가족사항") == false) return false;
        	
        	var sMethodName = "PROC00";
        	var sInDataSet  = "dsYEA_MASTXM=dsYEA_MASTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-------------------------------+
         |  근로소득처리 Button Click  |
         +-------------------------------*/
        this.divButtonList_btnPAYDTL_onclick = function(obj,e)
        {
        	if (!this.fnc_DatasetChangeCheck("dsYEA_MASTXM")) {
        		this.fnc_Message("TMM013");
        		return false;
        	}
        	
        	if (this.fnc_Message("PAY002","근로소득지급명세") == false) return false;
        	
        	var sMethodName = "PROC01";
        	var sInDataSet  = "dsYEA_MASTXM=dsYEA_MASTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------+
        |  연말정산 처리  |
        +------------------------*/
        this.divButtonList_btnYEPROC_onclick = function(obj,e) 
        {
        	if (!this.fnc_DatasetChangeCheck("dsYEA_MASTXM")) {
        		this.fnc_Message("TMM013");
        		return false;
        	}
        	
        	//선택한 사원의 급여지급명세 를 처리하시겠습니까?	
        	if ( this.parent.sUSERLAVEL == "1" ) {
        		if (this.fnc_Message("PAY002","임시정산") == false) return false;
        	} else {
        		if (this.fnc_Message("PAY002","연말정산") == false) return false;
        	}
        	
        	var sMethodName = "PROC02";
        	var sInDataSet  = "dsYEA_MASTXM=dsYEA_MASTXM:U";
        	var sOutDataSet = "";            
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	application.httptimeout = 300;
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	
        	this.grdYEA_MASTXM.setFocus();                            
        }

        /*-----------------------+
        |  입력마감 처리  |
        +------------------------*/
        this.divButtonList_btnINCDEC_onclick = function(obj,e) 
        {
        	if (!this.fnc_DatasetChangeCheck("dsYEA_MASTXM")) {
        		this.fnc_Message("TMM013");
        		return false;
        	}
        	
        	if (this.fnc_Message("PAY002","입력마감") == false) return false;
        		
        	var sMethodName = "PROC03";
        	var sInDataSet  = "dsYEA_MASTXM=dsYEA_MASTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	application.httptimeout = 300;
        	
        	/****입렵마감일경우 체크된 사용자는 모두 입력마감값으로 치환****/
        	for(var i = 0; i<this.dsYEA_MASTXM.rowcount; i++){ 
        		if(this.dsYEA_MASTXM.getColumn(i,"YEA_CHK") == "1") {		
        			this.dsYEA_MASTXM.setColumn(i, 'YEA_PRC_STR002', "1");
        		}
        	}
        	/****입렵마감일경우 체크된 사용자는 모두 입력마감값으로 치환****/
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	
        	this.grdYEA_MASTXM.setFocus(); 
        }

        /*-----------------------+
        |  확정처리 처리  |
        +------------------------*/
        this.divButtonList_btnCADN_onclick = function(obj,e) {
        	if (!this.fnc_DatasetChangeCheck("dsYEA_MASTXM")) {
        		
        		//사원을 먼저 선택하세요.
        		this.fnc_Alert("사원을 먼저 선택하세요.");
        		return false;
        		
        	} 
        	
        	//귀속년도2014년 연말정산 재정산(소급)
        	/*
        	if (length(parent.popDECIDE.cmbYCAL_GUBN.Value) < 1 ) {
        		fnc_Alert("[정산구분] 값은 반드시 입력 하셔야 합니다!");		//Message 처리
        		parent.popDECIDE.cmbYCAL_GUBN.setFocus();              //사번
        		return false;
        	}
        	*/
        	
        	//선택한 사원의 급여지급명세 를 처리하시겠습니까?	
        	if (!this.fnc_Confirm("선택한 직원들의 [확정]를 처리하시겠습니까?")) return;
        		
        	var sMethodName = "PROC04";                             //서버에서 호출 될 Method 명
        	var sInDataSet  = "dsYEA_MASTXM=dsYEA_MASTXM:U";          //자료 저장 시 보낼 DataSet 명칭
        	var sOutDataSet = "";            //조회 후 돌려 받을 DataSet 명칭
        	var sArgument   = this.fn_CreateArgument(sMethodName);       //조회 시 넘길 Argument 생성
        	
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	
        	this.grdYEA_MASTXM.setFocus(); 
        }

        /*-----------------------+
        |  공제자료 업로드  |
        +------------------------*/
        this.divButtonList_btnUpload_onsuccess = function(obj,e) {
        	var sMethodName = "PROC07";
        	var sInDataSet = "dsYEA_INCDEC=dsYEA_INCDEC";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        /*------------------------+
         |  소득공제신고서 인쇄   |
         +------------------------*/
        this.popPRINT_btnReport00_onclick = function (obj,e) {

        	if (this.dsYEA_MASTXM.getRowCount() < 0 || this.dsYEA_INCDEC.rowcount == 0) {
        		this.fnc_Message("YEA014");
        		return;
        	}

        	// 해당 Row가 있는지 확인
        	if (this.dsYEA_MASTXM.rowposition < 0) {
        		this.fnc_Message("YEA015", "인쇄 할 데이터");
        		return;
        	}
        	
        	var reportfile = "/yea/YEAA0070_2015R01.jrf";
        	var params     = "";
        	var dataref    = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/yea/YEAA0070_2015_REPORT00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsYEA_PENSAV_RPT1=dsYEA_PENSAV_RPT1 dsYEA_PENSAV_RPT2=dsYEA_PENSAV_RPT2 dsYEA_PENSAV_RPT3=dsYEA_PENSAV_RPT3 dsYEA_PENSAV_RPT4=dsYEA_PENSAV_RPT4 dsYEA_RENTA1_RPT=dsYEA_RENTA1_RPT dsYEA_RENTA2_RPT=dsYEA_RENTA2_RPT dsYEA_INCDEC_RPT2=dsYEA_INCDEC_RPT2 dsYEA_INCDEC_RPT1=dsYEA_INCDEC_RPT1"
        	dataref[0].arg = this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        }

        
        /*----------------------+
         |  의료비 명세서 인쇄   |
         +-----------------------*/
        this.popPRINT_btnReport10_onclick = function (obj) {

        	if (this.dsYEA_MASTXM.getRowCount() < 0 || this.dsYEA_MEDISP.rowcount == 0) {
        		this.fnc_Message("YEA014");
        		return;
        	}

        	// 해당 Row가 있는지 확인
        	if (this.dsYEA_MASTXM.rowposition < 0) {
        		this.fnc_Message("YEA015", "인쇄 할 데이터");
        		return;
        	}
        	
        	var reportfile = "/yea/YEAA0070_2015R04.jrf";
        	var params     = "";
        	var dataref    = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/yea/YEAA0070_2015_REPORT03.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsYEA_INCDEC_RPT1=dsYEA_INCDEC_RPT1 dsYEA_MEDISP_RPT=dsYEA_MEDISP_RPT"
        	dataref[0].arg = this.fn_CreateArgument("PRINT03");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        }

        
        /*----------------------+
         |  기부금 명세서 인쇄   |
         +-----------------------*/
        this.popPRINT_btnReport20_onclick = function (obj) {

        	if (this.dsYEA_MASTXM.getRowCount() < 0 || this.dsYEA_DONASP.rowcount == 0) {
        		this.fnc_Message("YEA014");
        		return;
        	}

        	// 해당 Row가 있는지 확인
        	if (this.dsYEA_MASTXM.rowposition < 0) {
        		this.fnc_Message("YEA015", "인쇄 할 데이터");
        		return;
        	}
        	
        	var reportfile = "/yea/YEAA0070_2015R03.jrf";
        	var params     = "";
        	var dataref    = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/yea/YEAA0070_2015_REPORT02.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsYEA_INCDEC_RPT1=dsYEA_INCDEC_RPT1 dsYEA_DONASP_RPT1=dsYEA_DONASP_RPT1 dsYEA_DONASP_RPT2=dsYEA_DONASP_RPT2 dsYEA_DONAAD_RPT=dsYEA_DONAAD_RPT"
        	dataref[0].arg = this.fn_CreateArgument("PRINT02");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        }

        
        /*------------------------+
         |  원천징수영수증 인쇄   |
         +------------------------*/
        this.popPRINT_btnReport30_onclick = function (obj,e) {

        	if (this.dsYEA_MASTXM.getRowCount() < 0 || this.dsYEA_YEPROC.rowcount == 0) {
        		this.fnc_Message("YEA014");
        		return;
        	}

        	// 해당 Row가 있는지 확인
        	if (this.dsYEA_MASTXM.rowposition < 0) {
        		this.fnc_Message("YEA015", "인쇄 할 데이터");
        		return;
        	}	 
        	
        	var reportfile = "/yea/YEAA0070_2015R02.jrf";
        	var params     = "";
        	var dataref    = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/yea/YEAA0070_2015_REPORT01.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsYEA_YEPROC_RPT1=dsYEA_YEPROC_RPT1 dsYEA_YEPROC_RPT2=dsYEA_YEPROC_RPT2"
        	dataref[0].arg = this.fn_CreateArgument("PRINT01");
        	
        	this.fn_UbiReport(reportfile, params, dataref);              //Report Viewing
        	 
        }

        
        /*------------------------+
         |  원천징수부 인쇄   |
         +------------------------*/
        this.popPRINT_btnReport40_onclick = function (obj,e) {

        	if (this.dsYEA_MASTXM.getRowCount() < 0 || this.dsYEA_YEPROC.rowcount == 0) {
        		this.fnc_Message("YEA014");
        		return;
        	}

        	// 해당 Row가 있는지 확인
        	if (this.dsYEA_MASTXM.rowposition < 0) {
        		this.fnc_Message("YEA015", "인쇄 할 데이터");
        		return;
        	}
        	
        	var reportfile = "/yea/YEAA0070_2015R05.jrf";
        	var params     = "";
        	var dataref    = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/yea/YEAA0070_2015_REPORT04.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsYEA_PAYDTL_RPT1=dsYEA_PAYDTL_RPT1 dsYEA_PAYDTL_RPT2=dsYEA_PAYDTL_RPT2"
        	dataref[0].arg = this.fn_CreateArgument("PRINT04");
        	
        	this.fn_UbiReport(reportfile, params, dataref);              //Report Viewing
        	 
        }
        /*----------------------------------------------------------- PROC function end   -------------------------------------------------------------------*/
        /*----------------------------------------------------------- Grid function start -------------------------------------------------------------------*/
        /*-----------------------+
        |  목록                 |
        +------------------------*/
        /*this.dsYEA_MASTXM_canrowposchange = function(obj:Dataset, e:nexacro.DSRowPosChangeEventInfo)
        {
        	this.sSaveRowChk = "T";
        	if (this.fnc_DatasetChangeCheck("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD")) 
        	{
        		this.sSaveRowChk = "F";
        		if (this.fnc_Message("TMM023") == false) return false;
        		this.sSaveRowChk = "T";
        	}
        }
        */
        this.dsYEA_MASTXM_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowCount < 0) return;
        	if (obj.rowposition < 0) return;
        	//if (this.sSaveRowChk == "F") return false;
        	
        	//Tabpage 그리드 조회
        	//this.fn_SearchDetail(); 
        }

        this.grdYEA_MASTXM_OnSelectChanged = function(obj,e)
        {
        	if (e.cell == 0) {
        	} else {
        		//Tabpage 그리드 조회
        		this.fn_SearchDetail(); 
        	}
        }
        /*-------------------------------------------------+
         |  (Tabpage01) 가족사항 데이터  변경           |
         +-------------------------------------------------*/
        this.dsYEA_YEFAMI_OnColumnChanged = function (obj,e) 
        {
        	if (e.oldvalue == e.newvalue) return;

        	switch (e.columnid) {
        		case "YEA_FAM_STR001":	//가족관계신고코드
        			this.SET_YEA_YEFAMI("EDUC", e.row);
        			this.SET_YEA_YEFAMI("CARD", e.row);
        			this.SET_YEA_YEFAMI("DCAD", e.row);
        			this.SET_YEA_YEFAMI("CASH", e.row);
        			this.SET_YEA_YEFAMI("MRKT", e.row);
                    this.SET_YEA_YEFAMI("PTRA", e.row);    
                    this.SET_YEA_YEFAMI("DONA", e.row);
        			this.SET_YEA_INCDEC("MEDI");			
        			break;
        			
        		case "YEA_FAM_STR007":	//부녀자여부
        			// [2013년 귀속]
        			this.SET_YEA_YEFAMI("WOME", e.row);
        			break;
        		case "YEA_FAM_STR008":	//한부모여부
        			// [2013년 귀속]
        			this.SET_YEA_YEFAMI("WOSI", e.row);
        			break;
        		case "YEA_FAM_STR004":		//주민등록번
        			// 기본공제여부, 내외국인코드, 경로우대여부, 육세이하자녀여부의 변경
        			if (this.fnc_Length(e.newvalue) == 13) {
        				this.SET_YEA_YEFAMI("AGED", e.row);
        				this.SET_YEA_YEFAMI("REAR", e.row);	//2015 귀속 연말정산 계산 누락 수정
        				this.SET_YEA_YEFAMI("BABY", e.row);	//2015 귀속 연말정산 계산 누락 수정

        				// 내외국인코드
        				if (this.fnc_SubStr(e.newvalue, 6, 1) == "1" || this.fnc_SubStr(e.newvalue, 6, 1) == "2" || 
        				    this.fnc_SubStr(e.newvalue, 6, 1) == "3" || this.fnc_SubStr(e.newvalue, 6, 1) == "4") 
        				{
        					this.dsYEA_YEFAMI.setColumn(e.row, "YEA_FAM_STR002", "1");
        				} else {
        					this.dsYEA_YEFAMI.setColumn(e.row, "YEA_FAM_STR002", "9");
        				}

        				// 의료비 변경
        				this.SET_YEA_INCDEC("MEDI");
        			}

        			break;
        		case "YEA_FAM_STR005":	//기본공제여부
        			this.SET_YEA_YEFAMI("DISA", e.row);
        			this.SET_YEA_YEFAMI("AGED", e.row);
        			this.SET_YEA_YEFAMI("INSU", e.row);

        			break;
        		case "YEA_FAM_STR009":	//장애인여부
        			this.SET_YEA_YEFAMI("DISA", e.row);
        			this.SET_YEA_YEFAMI("EDUC", e.row);

        			// 의료비변경
        			this.SET_YEA_INCDEC("MEDI");
        			break;
        			
        		case "YEA_FAM_STR006":// 경로우대여부			
        			this.SET_YEA_YEFAMI("AGED", e.row);
        			break;
        			
        		case "YEA_FAM_STR011":	//6세이하
        			this.SET_YEA_YEFAMI("REAR", e.row);
        			break;
        			
        		case "YEA_FAM_STR012":	// 출산입양여부
        			this.SET_YEA_YEFAMI("BABY", e.row);			
        			break;
        			
        		case "YEA_FAM_NUM003":	// 보험료국세청_보장성			
        			this.SET_YEA_YEFAMI("INSU", e.row);
        			this.SET_YEA_INCDEC("INSU");
        			break;

        		case "YEA_FAM_NUM004":	// 보험료기타_보장성
        			this.SET_YEA_YEFAMI("INSU", e.row);
        			this.SET_YEA_INCDEC("INSU");
        			break;
        			
        		case "YEA_FAM_NUM020":	// 보험료_장애인_국세청			
        			this.SET_YEA_YEFAMI("INS2", e.row);
        			this.SET_YEA_INCDEC("INS2");
        			break;

        		case "YEA_FAM_NUM021":	// 보험료_장애인_그밖의자료			
        			this.SET_YEA_YEFAMI("INS2", e.row);
        			this.SET_YEA_INCDEC("INS2");
        			break;

        		case "YEA_FAM_NUM005":	// 의료비국세청			
        			this.SET_YEA_INCDEC("MEDI");
        			break;

        		case "YEA_FAM_NUM006":	// 의료비기타
        			this.SET_YEA_INCDEC("MEDI");
        			break;
        			
        		case "YEA_FAM_STR010":		// 교육비구분코드	
        			this.SET_YEA_YEFAMI("EDUC", e.row);
        			this.SET_YEA_INCDEC("EDUC");
        			break;
        			
        		case "YEA_FAM_NUM007":			// 교육비국세청
        			this.SET_YEA_YEFAMI("EDUC", e.row);
        			this.SET_YEA_INCDEC("EDUC");
        			break;
        			
        		case "YEA_FAM_NUM008":			// 교육비기타
        			this.SET_YEA_YEFAMI("EDUC", e.row);
        			this.SET_YEA_INCDEC("EDUC");
        			break;
        			
        		case "YEA_FAM_NUM009":			// 신용카드국세청
        			this.SET_YEA_YEFAMI("CARD", e.row);
        			this.SET_YEA_INCDEC("CARD");			
        			break;
        			
        		case "YEA_FAM_NUM010":	// 신용카드기타			
        			this.SET_YEA_YEFAMI("CARD", e.row);
        			this.SET_YEA_INCDEC("CARD");
        			break;
        			
        		case "YEA_FAM_NUM011":	// 직불카드국세청
        			this.SET_YEA_YEFAMI("DCAD", e.row);
        			this.SET_YEA_INCDEC("DCAD");
        			break;
        			
        		case "YEA_FAM_NUM012":	// 직불카드기타			
        			this.SET_YEA_YEFAMI("DCAD", e.row);
        			this.SET_YEA_INCDEC("DCAD");
        			break;
        			
        		case "YEA_FAM_NUM013":	// 현금영수증국세청			
        			this.SET_YEA_YEFAMI("CASH", e.row);
        			this.SET_YEA_INCDEC("CASH");						
        			break;
        			
        		case "YEA_FAM_NUM014":	// 전통시장국세청			
        			this.SET_YEA_YEFAMI("MRKT", e.row);
        			this.SET_YEA_INCDEC("MRKT");
        			break;
        			
        		case "YEA_FAM_NUM015":	// 전통시장기타			
        			this.SET_YEA_YEFAMI("MRKT", e.row);
        			this.SET_YEA_INCDEC("MRKT");			
        			break;
        			
        		case "YEA_FAM_NUM016":	// 대중교통국세청
        			this.SET_YEA_YEFAMI("PTRA", e.row);
        			this.SET_YEA_INCDEC("PTRA");
        			break;

        		case "YEA_FAM_NUM017":	// 대중교통기타
        			this.SET_YEA_YEFAMI("PTRA", e.row);
        			this.SET_YEA_INCDEC("PTRA");
        			break;
        			
        		case "YEA_FAM_NUM018":	// 기부금국세청
        			this.SET_YEA_YEFAMI("DONA", e.row);
        			break;
        			
        		case "YEA_FAM_NUM019":		// 기부금국세청
        			this.SET_YEA_YEFAMI("DONA", e.row);
        			break;
        			
        		/*[2015귀속] 추가*/
        		case "YEA_FAM_NUM022":	//난임시술비국세청
        			this.SET_YEA_INCDEC("MEDI");
        			break;
        			
        		case "YEA_FAM_NUM023":	//난임시술비기타
        			this.SET_YEA_INCDEC("MEDI");
        			break;		
          		/*[2015귀속] 추가끝*/	
        		default:
        			break;
        	}
        }

        this.dsYEA_YEFAMI_OnRowPosChanged = function(obj,e)
        {
        	this.SET_YEA_YEFAMI("SING", e.newrow);
        	this.SET_YEA_YEFAMI("EDUC", e.newrow);
        }

        
        /*-------------------------------------------------+
         |  (Tabpage02) 근로소득지급명세 데이터  변경  |
         +-------------------------------------------------*/
        this.dsYEA_PAYDTL_OnColumnChanged = function(obj,e)
        {
        	if (e.oldvalue == e.newvalue) return;
        	
        	//공란 입력시 합계 계산 오류가 발생하여 추가
        	if (this.fnc_Length(e.newvalue) == 0){
        		obj.setColumn(e.row,e.col,0);
        	}
        	
        	switch (e.columnid) {
        		case "YEA_PAY_NUM021":
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM002", this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM021"));	//국민연금
        			break;
        		case "YEA_PAY_NUM022":
        			if (this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022") < 0) { 	//건강보험정산으로인해 마이너스금액이 나왔을경우 고용보험금액만
        				this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM012",0);		//건강보험
        				this.dsYEA_YEFAMI.setColumn(0,"YEA_FAM_NUM002",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));		//부양가족 건강보험+고용보험
        			} else {
        				this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM012",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022"));		//건강보험
        				this.dsYEA_YEFAMI.setColumn(0,"YEA_FAM_NUM002",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022")+this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));		//부양가족 건강보험+고용보험
        			}
        			break;
        			
        		case "YEA_PAY_NUM023":
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM014",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023"));		//고용보험
        			if (this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022") < 0) { 	//건강보험정산으로인해 마이너스금액이 나왔을경우 고용보험금액만
        				this.dsYEA_YEFAMI.setColumn(0,"YEA_FAM_NUM002",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));		//부양가족 건강보험+고용보험
        			} else {
        				this.dsYEA_YEFAMI.setColumn(0,"YEA_FAM_NUM002",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022")+this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));		//부양가족 건강보험+고용보험
        			}
        			break;		
        			
        		default:
        			break;
        	}
        }

        /*--------------------------------------------------------+
         |  (Tabpage03) 종 근무지 근로소득내역 데이터  변경  |
         +--------------------------------------------------------*/
        this.dsYEA_BFWORK_OnColumnChanged = function(obj,e)
        {
        	if (e.oldvalue == e.newvalue) return;	

        	switch (e.columnid) {
        		case "YEA_BFW_NUM007":
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM001", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM007"));	//국민연금
        			break;
        		case "YEA_BFW_NUM008":
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM011", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008"));	//건강보험	
        			this.dsYEA_YEFAMI.setColumn(0,"YEA_FAM_NUM002",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022")+this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));		//부양가족 건강보험+고용보험
        			break;
        		case "YEA_BFW_NUM009":
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM013", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));	//고용보험 
        			this.dsYEA_YEFAMI.setColumn(0,"YEA_FAM_NUM002",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022")+this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));		//부양가족 건강보험+고용보험
        			break;
        		case "YEA_BIZ_NO":
        			for (var i = 0; i < this.dsYEA_BFNTAX.rowcount; i++) {
        				this.dsYEA_BFNTAX.setColumn(i, "YEA_BIZ_NO", e.newvalue);
        			}
        		default:
        			break;
        	}
        }

        this.dsYEA_BFWORK_OnRowPosChanged = function(obj,e)
        {
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {	
        		this.Tab0.tab3.grdYEA_BFWORK.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_BIZ_NO"), "edittype", "mask");
        	} else {
        		this.Tab0.tab3.grdYEA_BFWORK.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFWORK, "YEA_BIZ_NO"), "edittype", "none");
        	}
        	this.dsYEA_BFNTAX.filter("YEA_BIZ_NO=='" + this.dsYEA_BFWORK.getColumn(e.newrow, "YEA_BIZ_NO") + "'");
        	this.fnc_Information(this.Tab0.tab3.stInformation1, this.dsYEA_BFNTAX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        }

        /*---------------------------------------------------------+
         |  (Tabpage03) 종근무지 비과세소득내역 데이터  변경  |
         +---------------------------------------------------------*/
        this.dsYEA_BFNTAX_OnRowPosChanged = function(obj,e)
        {
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.Tab0.tab3.grdYEA_BFNTAX.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFNTAX, "YEA_NON_TAX_CD"), "edittype", "combo");
        	} else {
        		this.Tab0.tab3.grdYEA_BFNTAX.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab3.grdYEA_BFNTAX, "YEA_NON_TAX_CD"), "edittype", "none");
        	}
        }

        // [2013귀속] 사용중만 표시!
        this.Tab0_tab4_grdYEA_PENSAV1_OnFocus = function (obj,e) {
        	//this.dsPIDD_CODE.filter("YEA_RE2F_VALUE == '1'");
        	this.dsPIDD_CODE1.filter("COMD_CODE == '11'||COMD_CODE == '12'");
        }

        // [2013귀속] 사용중만 표시!
        this.Tab0_tab4_grdYEA_PENSAV2_OnFocus = function (obj,e) {
        	//this.dsPIDD_CODE.filter("YEA_RE2F_VALUE == '2'");
        	this.dsPIDD_CODE2.filter("COMD_CODE == '21'||COMD_CODE == '22'");
        }

        // [2013귀속] 사용중만 표시!
        this.Tab0_tab4_grdYEA_PENSAV3_OnFocus = function (obj,e) {
        	//this.dsPIDD_CODE.filter("YEA_RE2F_VALUE == '3'");
        	this.dsPIDD_CODE3.filter("COMD_CODE == '31'||COMD_CODE == '32'");
        }

        this.Tab0_tab4_grdYEA_PENSAV4_OnFocus = function (obj,e) {
        }

        /*-------------------------------------------------------+
         |  (Tabpage04) 연금저축 퇴직연금공제 데이터  변경  |
         +-------------------------------------------------------*/
        this.dsYEA_PENSAV1_OnColumnChanged = function(obj,e)
        {
        	if (e.columnid == "YEA_PEN_FINA_NAME") {
        		this.fn_HelpDialoge(this.Tab0.tab4.grdYEA_PENSAV1, 'YES', e.oldvalue);
        	} else if (e.columnid == "YEA_PEN_STR001" || e.columnid == "YEA_PEN_NUM001") {
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM049", this.dsYEA_PENSAV1.getCaseSum("YEA_PEN_STR001 == '12'", "YEA_PEN_NUM001")); //과학기술인공제
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM050", this.dsYEA_PENSAV1.getCaseSum("YEA_PEN_STR001 == '11'", "YEA_PEN_NUM001")); //퇴직연금
        	}
        }

        /*-------------------------------------------------------+
         |  (Tabpage04) 연금저축 연금저축공제 데이터  변경  |
         +------------------------------------------------------*/
        this.dsYEA_PENSAV2_OnColumnChanged = function(obj,e)
        {
        	if (e.columnid == "YEA_PEN_FINA_NAME") {
        		this.fn_HelpDialoge(this.Tab0.tab4.grdYEA_PENSAV2, 'YES', e.oldvalue);
        	} else if (e.columnid == "YEA_PEN_STR001" || e.columnid == "YEA_PEN_NUM001") {
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM022", this.dsYEA_PENSAV2.getCaseSum("YEA_PEN_STR001 == '21'", "YEA_PEN_NUM001")); //개인연금저축
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM051", this.dsYEA_PENSAV2.getCaseSum("YEA_PEN_STR001 == '22'", "YEA_PEN_NUM001")); //연금저축
        	}	
        }

        /*-----------------------------------------------------------+
         |  (Tabpage04) 연금저축 주택마련저축공제 데이터  변경  |
         +-----------------------------------------------------------*/
        this.dsYEA_PENSAV3_OnColumnChanged = function(obj,e)
        {
        	if (e.columnid == "YEA_PEN_FINA_NAME") {
        		this.fn_HelpDialoge(this.Tab0.tab4.grdYEA_PENSAV3, 'YES', e.oldvalue);
        	} else if (e.columnid == "YEA_PEN_STR001" || e.columnid == "YEA_PEN_NUM001" || e.columnid == "YEA_PEN_STR005") {
        		/*[2015귀속]_로직변경*/		
        		var nAmt1 = 0;
        		var nAmt2 = 0;
        		var nAmt3 = 0;
        		var nAmt4 = 0;	//[2015귀속]쳥약저축(2015.01.01 이후가입분)
        		var nAmt5 = 0; 	//[2015귀속]주택청약종합저축(2015.01.01 이후가입분)
        		
        		for (var i=0; i<this.dsYEA_PENSAV3.getRowCount(); i++) {
        			if(this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR005" ) == "1") {
        				if(this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "31") {						
        					nAmt4 += nAmt4 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));		//[2015귀속]쳥약저축(2015.01.01 이후가입분)
        				} else if (this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "32") {				
        					nAmt5 += nAmt5 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));	//[2015귀속]쳥약저축(2015.01.01 이후가입분)
        				} 
        			} else {
        				if(this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "31") {					
        					nAmt1 += nAmt1 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));
        				} else if (this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "32") {					
        					nAmt2 += nAmt2 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));
        				} else if (this.dsYEA_PENSAV3.getColumn( i , "YEA_PEN_STR001" ) == "34") {					
        					nAmt3 += nAmt3 + nexacro.toNumber(this.dsYEA_PENSAV3.getColumn(i, "YEA_PEN_NUM001"));
        				}
        			}
        		}
        		
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM024", nAmt1); //[2015귀속]_청약저축(2014.01.01 이전가입분)
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM026", nAmt2); //[2015귀속]_주택청약종합(2014.01.01 이전가입분)
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM025", nAmt3); //근로자주택마련
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM081", nAmt4); //[2015귀속]_청약저축(2015.01.01 이후가입분)
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM082", nAmt5); //[2015귀속]_주택청약종합(2015.01.01 이후가입분)
        	}
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage04) 연금저축 장기집합투자증권저축공제 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_PENSAV4_OnColumnChanged = function(obj,e)
        {
        	if (e.columnid == "YEA_PEN_FINA_NAME") {
        		this.fn_HelpDialoge(this.Tab0.tab4.grdYEA_PENSAV4, 'YES', e.oldvalue);
        	} else if (e.columnid == "YEA_PEN_STR001" || e.columnid == "YEA_PEN_NUM001") {
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM047", this.dsYEA_PENSAV4.getCaseSum("YEA_PEN_STR001 == '51'", "YEA_PEN_NUM001")); //장기집합투자증권저축
        	}
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage05) 월세주택 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_RENTA1_OnColumnChanged = function(obj,e)
        {
        	if (e.columnid == "YEA_RT1_NUM001") {
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM074", this.dsYEA_RENTA1.getSum("YEA_RT1_NUM001")); //주택자금 월세액
        	}
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage05) 월세주택 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_RENTA2_OnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "YEA_RT2_NUM003" || e.columnid == "YEA_RT2_NUM004") {
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM016", nexacro.toNumber(this.dsYEA_RENTA2.getSum("YEA_RT2_NUM003")) + nexacro.toNumber(this.dsYEA_RENTA2.getSum("YEA_RT2_NUM004"))); //주택임차거주자차입상환
            }
        }

        this.fn_OpenGridPopup = function (obj,e) {
        	this.fn_OpenDetailWindow(obj, e.row, e.cell, this.getExpandCellValue(obj, e), -1);
        	obj.moveToNextCell();
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage06) 의료명세 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_MEDISP_OnColumnChanged = function(obj,e)
        {
        	if (e.oldvalue == e.newvalue) return;

        	if ((e.columnid == "YEA_MES_NUM002" || e.columnid == "YEA_MES_STR001" || e.columnid == "YEA_MES_STR003" || e.columnid == "YEA_MES_STR008") && this.dsYEA_MEDISP.getColumn(e.row, "YEA_MES_STR003") != "") 
        	{	
        		/*[2015귀속]_난임시술비여부*/
        		var ssecNumb = this.dsYEA_MEDISP.getColumn(e.row, "YEA_MES_STR003");
        		var mediNtsx = 0;
        		var mediRest = 0;
        		var mediNtsx1 = 0;	/*[2015귀속]_난임시술비_국세청*/
        		var mediRest1 = 0;	/*[2015귀속]_난임시술비_기타*/

        		for (this.i = 0; this.i <= this.dsYEA_MEDISP.getRowCount(); this.i++) {
        			if (ssecNumb == this.dsYEA_MEDISP.getColumn(this.i, "YEA_MES_STR003")) {
        			
        				if ( this.dsYEA_MEDISP.getColumn(this.i, "YEA_MES_STR008") == "1" ) {	/*[2015귀속]_난임시술비여부*/
        					if (this.dsYEA_MEDISP.getColumn(this.i, "YEA_MES_STR001") == "1") {
        						mediNtsx1 = mediNtsx1 + nexacro.toNumber(this.dsYEA_MEDISP.getColumn(this.i, "YEA_MES_NUM002"),0);
        					} else {
        						mediRest1 = mediRest1 + nexacro.toNumber(this.dsYEA_MEDISP.getColumn(this.i, "YEA_MES_NUM002"),0);
        					}
        				}else{
        					if (this.dsYEA_MEDISP.getColumn(this.i, "YEA_MES_STR001") == "1") {
        						mediNtsx = mediNtsx + nexacro.toNumber(this.dsYEA_MEDISP.getColumn(this.i, "YEA_MES_NUM002"),0);
        					} else {
        						mediRest = mediRest + nexacro.toNumber(this.dsYEA_MEDISP.getColumn(this.i, "YEA_MES_NUM002"),0);
        					}
        				}
        			}
        		}

        		this.dsYEA_YEFAMI.setColumn(this.dsYEA_YEFAMI.findRow("YEA_FAM_STR004", this.dsYEA_MEDISP.getColumn(e.row, "YEA_MES_STR003")), "YEA_FAM_NUM005", mediNtsx);
        		this.dsYEA_YEFAMI.setColumn(this.dsYEA_YEFAMI.findRow("YEA_FAM_STR004", this.dsYEA_MEDISP.getColumn(e.row, "YEA_MES_STR003")), "YEA_FAM_NUM006", mediRest);
        		this.dsYEA_YEFAMI.setColumn(this.dsYEA_YEFAMI.findRow("YEA_FAM_STR004", this.dsYEA_MEDISP.getColumn(e.row, "YEA_MES_STR003")), "YEA_FAM_NUM022", mediNtsx1); /*[2015귀속]_난임시술비_국세청*/
        		this.dsYEA_YEFAMI.setColumn(this.dsYEA_YEFAMI.findRow("YEA_FAM_STR004", this.dsYEA_MEDISP.getColumn(e.row, "YEA_MES_STR003")), "YEA_FAM_NUM023", mediRest1); /*[2015귀속]_난임시술비_기타*/
        	}	
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage06) 의료명세 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_MEDISP_OnRowPosChanged = function(obj,e)
        {
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.Tab0.tab6.grdYEA_MEDISP.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR003"), "edittype", "combo");
        	} else {
        		this.Tab0.tab6.grdYEA_MEDISP.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab6.grdYEA_MEDISP, "YEA_MES_STR003"), "edittype", "none");
        	}
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage07) 기부명세 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_DONASP_OnColumnChanged = function(obj,e)
        {
        	if ((e.columnid == "YEA_DOS_NUM002" || e.columnid == "YEA_DOS_STR003" || e.columnid == "YEA_DOS_STR006" || e.columnid == "YEA_DOS_STR001") && this.fnc_Length(this.dsYEA_DONASP.getColumn(e.row, "YEA_DOS_STR003")) > 0) 
        	{
        		var ssecNumb = this.dsYEA_DONASP.getColumn(e.row, "YEA_DOS_STR003");
        		var donaNtsx = 0;
        		var donaRest = 0;
        		var politicaldown = 0; /*[2015귀속]_정치자금기부금 10만원이하*/		

        		for (this.i = 0; this.i <= this.dsYEA_DONASP.getRowCount(); this.i++) {
        			if (ssecNumb == this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_STR003")) {
        				if (this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_STR001") == "1") {
        					donaNtsx = donaNtsx + nexacro.toNumber(this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_NUM002"),0);
        				} else {
        					donaRest = donaRest + nexacro.toNumber(this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_NUM002"),0);
        				}
        				
        				/*[2015귀속]_정치자금기부금 로직변경*/
        				if ( this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_STR006") == "20" && this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_NUM002") >= 100000 ) {
        					politicaldown = 100000;			
        				} else if ( this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_STR006") == "20" && this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_NUM002") < 100000 ) {					
        					politicaldown =  nexacro.toNumber(this.dsYEA_DONASP.getColumn(this.i, "YEA_DOS_NUM002"));	
        				}
        			}
        		}

        		this.dsYEA_YEFAMI.setColumn(this.dsYEA_YEFAMI.findRow("YEA_FAM_STR004", this.dsYEA_DONASP.getColumn(e.row, "YEA_DOS_STR003")), "YEA_FAM_NUM018", donaNtsx);
        		this.dsYEA_YEFAMI.setColumn(this.dsYEA_YEFAMI.findRow("YEA_FAM_STR004", this.dsYEA_DONASP.getColumn(e.row, "YEA_DOS_STR003")), "YEA_FAM_NUM019", donaRest);

        		/*[2015귀속]_정치자금기부금 로직변경*/
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM065",politicaldown);  //정치기부금_10만원이하
        		if(politicaldown >= 100000) {
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM066",this.dsYEA_DONASP.getCaseSum("YEA_DOS_STR006 == '20'","YEA_DOS_NUM002") - politicaldown);  //정치기부금_10만원초과
        		} else {
        			this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.currow,"YEA_INC_NUM066",0);  //정치기부금_10만원초과			
        		}
        		
        		//this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "DONA_POLI", this.dsYEA_DONASP.getCaseSum("DONA_TYPE == '20'", "DONA_AMOT"));	//정치기부금
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM067", this.dsYEA_DONASP.getCaseSum("YEA_DOS_STR006 == '10'", "YEA_DOS_NUM002")); //법정기부금
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM044", this.dsYEA_DONASP.getCaseSum("YEA_DOS_STR006 == '42'", "YEA_DOS_NUM002")); //우리사주조합기부금
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM068", this.dsYEA_DONASP.getCaseSum("YEA_DOS_STR006 == '40'", "YEA_DOS_NUM002") +  + this.dsYEA_DONASP.getCaseSum("YEA_DOS_STR006 == '41' ","YEA_DOS_NUM002")); //지정기부금
        		//this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM068",this.dsYEA_DONASP.CaseSum("YEA_DOS_STR006 = '41' ","YEA_DOS_NUM002") ); //종교기부금
        	}
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage07) 기부명세 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_DONASP_OnRowPosChanged = function(obj,e)
        {
        	
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage07) 기부명세 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_DONAAD_OnColumnChanged = function(obj,e)
        {
        	if (e.columnid == "YEA_DOA_NUM001" || e.columnid == "YEA_DOA_NUM002") {
        		this.dsYEA_DONAAD.setColumn(e.row, "YEA_DOA_NUM003", nexacro.toNumber(this.dsYEA_DONAAD.getColumn(e.row, "YEA_DOA_NUM001"),0) - nexacro.toNumber(this.dsYEA_DONAAD.getColumn(e.row, "YEA_DOA_NUM002"),0)); //1년차
        	}	
        }

        /*--------------------------------------------------------------------+
         |  (Tabpage08) 소득공제 데이터  변경  |
         +--------------------------------------------------------------------*/
        this.dsYEA_INCDEC_OnColumnChanged = function(obj,e)
        {
        	if (e.oldvalue == e.newvalue) return;

        	switch (e.columnid) {
        		case "YEA_INC_NUM053":
        			this.SET_YEA_INCDEC("INSU");
        			break;
        						
        		default:
        			break;
        	}
        }

        
        this.Tab0_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsYEA_MASTXM.addEventHandler("onrowposchanged", this.dsYEA_MASTXM_onrowposchanged, this);
            this.dsYEA_YEFAMI.addEventHandler("oncolumnchanged", this.dsYEA_YEFAMI_OnColumnChanged, this);
            this.dsYEA_YEFAMI.addEventHandler("onrowposchanged", this.dsYEA_YEFAMI_OnRowPosChanged, this);
            this.dsYEA_PAYDTL.addEventHandler("oncolumnchanged", this.dsYEA_PAYDTL_OnColumnChanged, this);
            this.dsYEA_BFWORK.addEventHandler("oncolumnchanged", this.dsYEA_BFWORK_OnColumnChanged, this);
            this.dsYEA_BFWORK.addEventHandler("onrowposchanged", this.dsYEA_BFWORK_OnRowPosChanged, this);
            this.dsYEA_BFNTAX.addEventHandler("onrowposchanged", this.dsYEA_BFNTAX_OnRowPosChanged, this);
            this.dsYEA_PENSAV1.addEventHandler("oncolumnchanged", this.dsYEA_PENSAV1_OnColumnChanged, this);
            this.dsYEA_PENSAV2.addEventHandler("oncolumnchanged", this.dsYEA_PENSAV2_OnColumnChanged, this);
            this.dsYEA_PENSAV3.addEventHandler("oncolumnchanged", this.dsYEA_PENSAV3_OnColumnChanged, this);
            this.dsYEA_PENSAV4.addEventHandler("oncolumnchanged", this.dsYEA_PENSAV4_OnColumnChanged, this);
            this.dsYEA_RENTA1.addEventHandler("oncolumnchanged", this.dsYEA_RENTA1_OnColumnChanged, this);
            this.dsYEA_RENTA2.addEventHandler("oncolumnchanged", this.dsYEA_RENTA2_OnColumnChanged, this);
            this.dsYEA_MEDISP.addEventHandler("oncolumnchanged", this.dsYEA_MEDISP_OnColumnChanged, this);
            this.dsYEA_MEDISP.addEventHandler("onrowposchanged", this.dsYEA_MEDISP_OnRowPosChanged, this);
            this.dsYEA_DONASP.addEventHandler("oncolumnchanged", this.dsYEA_DONASP_OnColumnChanged, this);
            this.dsYEA_DONASP.addEventHandler("onrowposchanged", this.dsYEA_DONASP_OnRowPosChanged, this);
            this.dsYEA_DONAAD.addEventHandler("oncolumnchanged", this.dsYEA_DONAAD_OnColumnChanged, this);
            this.dsYEA_DONAAD.addEventHandler("onrowposchanged", this.dsYEA_DONASP_OnRowPosChanged, this);
            this.dsYEA_INCDEC.addEventHandler("oncolumnchanged", this.dsYEA_INCDEC_OnColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdYEA_MASTXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdYEA_MASTXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdYEA_MASTXM.addEventHandler("onselectchanged", this.grdYEA_MASTXM_OnSelectChanged, this);
            this.Tab0.addEventHandler("onchanged", this.Tab0_onchanged, this);
            this.Tab0.tab1.btnAddRow.addEventHandler("onclick", this.Tab0_tab1_btnAddRow_OnClick, this);
            this.Tab0.tab1.btnDelRow.addEventHandler("onclick", this.Tab0_tab1_btnDelRow_OnClick, this);
            this.Tab0.tab3.btnAddRow.addEventHandler("onclick", this.Tab0_tab3_btnAddRow_OnClick, this);
            this.Tab0.tab3.btnDelRow.addEventHandler("onclick", this.Tab0_tab3_btnDelRow_OnClick, this);
            this.Tab0.tab3.btnAddRow1.addEventHandler("onclick", this.Tab0_tab3_btnAddRow1_OnClick, this);
            this.Tab0.tab3.btnDelRow1.addEventHandler("onclick", this.Tab0_tab3_btnDelRow1_OnClick, this);
            this.Tab0.tab4.grdYEA_PENSAV1.addEventHandler("onsetfocus", this.Tab0_tab4_grdYEA_PENSAV1_OnFocus, this);
            this.Tab0.tab4.grdYEA_PENSAV1.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tab4.grdYEA_PENSAV2.addEventHandler("onsetfocus", this.Tab0_tab4_grdYEA_PENSAV2_OnFocus, this);
            this.Tab0.tab4.grdYEA_PENSAV2.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tab4.grdYEA_PENSAV3.addEventHandler("onsetfocus", this.Tab0_tab4_grdYEA_PENSAV3_OnFocus, this);
            this.Tab0.tab4.grdYEA_PENSAV3.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tab4.grdYEA_PENSAV4.addEventHandler("onsetfocus", this.Tab0_tab4_grdYEA_PENSAV4_OnFocus, this);
            this.Tab0.tab4.grdYEA_PENSAV4.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tab4.btnAddRow1.addEventHandler("onclick", this.Tab0_tab4_btnAddRow_OnClick, this);
            this.Tab0.tab4.btnDelRow1.addEventHandler("onclick", this.Tab0_tab4_btnDelRow_OnClick, this);
            this.Tab0.tab4.btnAddRow2.addEventHandler("onclick", this.Tab0_tab4_btnAddRow_OnClick, this);
            this.Tab0.tab4.btnDelRow2.addEventHandler("onclick", this.Tab0_tab4_btnDelRow_OnClick, this);
            this.Tab0.tab4.btnAddRow3.addEventHandler("onclick", this.Tab0_tab4_btnAddRow_OnClick, this);
            this.Tab0.tab4.btnDelRow3.addEventHandler("onclick", this.Tab0_tab4_btnDelRow_OnClick, this);
            this.Tab0.tab4.btnAddRow4.addEventHandler("onclick", this.Tab0_tab4_btnAddRow_OnClick, this);
            this.Tab0.tab4.btnDelRow4.addEventHandler("onclick", this.Tab0_tab4_btnDelRow_OnClick, this);
            this.Tab0.tab5.grdYEA_RENTA1.addEventHandler("onexpanddown", this.fn_OpenGridPopup, this);
            this.Tab0.tab5.grdYEA_RENTA2_1.addEventHandler("onexpanddown", this.fn_OpenGridPopup, this);
            this.Tab0.tab5.grdYEA_RENTA2_2.addEventHandler("onexpanddown", this.fn_OpenGridPopup, this);
            this.Tab0.tab5.btnAddRow1.addEventHandler("onclick", this.Tab0_tab5_btnAddRow_OnClick, this);
            this.Tab0.tab5.btnDelRow1.addEventHandler("onclick", this.Tab0_tab5_btnDelRow_OnClick, this);
            this.Tab0.tab5.btnAddRow2.addEventHandler("onclick", this.Tab0_tab5_btnAddRow_OnClick, this);
            this.Tab0.tab5.btnDelRow2.addEventHandler("onclick", this.Tab0_tab5_btnDelRow_OnClick, this);
            this.Tab0.tab6.btnAddRow.addEventHandler("onclick", this.Tab0_tab6_btnAddRow_OnClick, this);
            this.Tab0.tab6.btnDelRow.addEventHandler("onclick", this.Tab0_tab6_btnDelRow_OnClick, this);
            this.Tab0.tab7.grdYEA_DONASP.addEventHandler("onsetfocus", this.Tab0_tab7_grdYEA_DONASP_onsetfocus, this);
            this.Tab0.tab7.grdYEA_DONAAD.addEventHandler("onsetfocus", this.Tab0_tab7_grdYEA_DONAAD_onsetfocus, this);
            this.Tab0.tab7.btnAddRow.addEventHandler("onclick", this.Tab0_tab7_btnAddRow_OnClick, this);
            this.Tab0.tab7.btnDelRow.addEventHandler("onclick", this.Tab0_tab7_btnDelRow_OnClick, this);
            this.Tab0.tab7.btnAddRow2.addEventHandler("onclick", this.Tab0_tab7_btnAddRow2_OnClick, this);
            this.Tab0.tab7.btnDelRow2.addEventHandler("onclick", this.Tab0_tab7_btnDelRow2_OnClick, this);

        };

        this.loadIncludeScript("YEAA0070_2015.xfdl");

       
    };
}
)();
