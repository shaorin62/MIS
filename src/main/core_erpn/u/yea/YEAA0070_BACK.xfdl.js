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
                this.set_name("YEAA0070");
                this.set_titletext("퇴직금정산내역");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsWODN_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"REMK\"/></Row><Row><Col id=\"CODEID\">FRDE_CODE</Col><Col id=\"DSNAME\">dsFRDE_CODE</Col><Col id=\"REMK\"/><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">LFDN_CODE</Col><Col id=\"DSNAME\">dsLFDN_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"CODEID\">HALT_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/><Col id=\"DSNAME\">dsHALT_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/><Col id=\"CODEID\">EEDI_CODE</Col><Col id=\"DSNAME\">dsEEDI_CODE</Col></Row><Row><Col id=\"CODEID\">BEPW_YSNO</Col><Col id=\"DSNAME\">dsBEPW_YSNO</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/><Col id=\"CODEID\">NTAX_CODE</Col><Col id=\"DSNAME\">dsNTAX_CODE</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/><Col id=\"CODEID\">PIDD_CODE</Col><Col id=\"DSNAME\">dsPIDD_CODE</Col></Row><Row><Col id=\"DSNAME\">dsHUSF_CODE</Col><Col id=\"CODEID\">HUSF_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/><Col id=\"CODEID\">METE_CODE</Col><Col id=\"DSNAME\">dsMETE_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("연말정산처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("11");
            obj.set_text("홈 > 급여관리 > 연말정산 > 연말정산처리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "552", "129", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "689", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_MASTXM", "absolute", "8", "154", "330", null, null, "15", this);
            obj.set_taborder("7");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj.set_binddataset("dsYEA_MASTXM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" displaytype=\"text\" text=\"확정여부\"/><Cell col=\"8\" displaytype=\"text\" text=\"마감\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:YEA_CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_EMP_NO\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_EMP_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:YEA_SECTOR_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:YEA_DEPT_NM\"/><Cell col=\"5\" text=\"bind:YEA_POST_NM\"/><Cell col=\"6\" text=\"bind:YEA_RANK_NM\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:YEA_PRC_STR001\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:YEA_INC_STR025\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "209", "61", "40", "67", null, null, this);
            obj.set_taborder("116");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "524", "61", "40", "67", null, null, this);
            obj.set_taborder("117");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", "71", "80", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "28", "98", "80", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "96", "98", "113", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchBox");

            obj = new Static("Static32", "absolute", "263", "71", "50", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "305", "71", "80", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "387", "71", "21", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "410", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "595", "71", "80", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "677", "71", "21", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "700", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "553", "71", "50", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "587", "61", "8", "41", null, null, this);
            obj.set_taborder("141");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRYEA_STD_YY", "absolute", "96", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy");
            obj.set_type("spin");
            obj.set_value("null");
            obj.set_editformat("yyyy");

            obj = new Static("Static10", "absolute", "830", "71", "80", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "800", "61", "40", "67", null, null, this);
            obj.set_taborder("144");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "338", "156", "20", "60", null, null, this);
            obj.set_taborder("145");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "361", "154", null, null, "25", "15", this);
            obj.set_taborder("146");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_multiline("false");
            obj.set_tabjustify("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("부양가족");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divTabpage01", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_url("yea::YEAA0070T01.xfdl");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("근로소득");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divTabpage02", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.set_url("yea::YEAA0070T02.xfdl");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("종근무지");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divTabpage03", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage3);
            obj.set_taborder("0");
            obj.set_url("yea::YEAA0070T03.xfdl");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("연금저축");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divTabpage04", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage4);
            obj.set_taborder("0");
            obj.set_url("yea::YEAA0070T04.xfdl");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab00);
            obj.set_text("월세저축");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divTabpage05", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage5);
            obj.set_taborder("0");
            obj.set_url("yea::YEAA0070T05.xfdl");
            this.Tab00.tabpage5.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.Tab00);
            obj.set_text("의료명세");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divTabpage06", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage6);
            obj.set_taborder("0");
            obj.set_url("yea::YEAA0070T06.xfdl");
            this.Tab00.tabpage6.addChild(obj.name, obj);
            obj = new Tabpage("tabpage7", this.Tab00);
            obj.set_text("기부명세");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage8", this.Tab00);
            obj.set_text("소득공제");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage9", this.Tab00);
            obj.set_text("연말정산");
            this.Tab00.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "898", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("0");

            obj = new Button("btnPROC00", "absolute", "8", "35", "79", "21", null, null, this);
            obj.set_taborder("148");
            obj.set_text("부양가족처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnPROC01", "absolute", "90", "35", "79", "21", null, null, this);
            obj.set_taborder("149");
            obj.set_text("근로소득처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "996", "61", "40", "67", null, null, this);
            obj.set_taborder("150");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRENDX_DATE", "absolute", "424", "98", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static16", "absolute", "409", "98", "14", "21", null, null, this);
            obj.set_taborder("152");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBGIN_DATE", "absolute", "304", "98", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("imgSearchTitle0", "absolute", "236", "98", "84", "21", null, null, this);
            obj.set_taborder("154");
            obj.set_text("퇴사일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("부양가족");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("근로소득");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("종근무지");

            	}
            );
            this.Tab00.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage4,
            	//-- Layout function
            	function(p) {
            		p.set_text("연금저축");

            	}
            );
            this.Tab00.tabpage4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage5,
            	//-- Layout function
            	function(p) {
            		p.set_text("월세저축");

            	}
            );
            this.Tab00.tabpage5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage6,
            	//-- Layout function
            	function(p) {
            		p.set_text("의료명세");

            	}
            );
            this.Tab00.tabpage6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직금정산내역");

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
            this._addPreloadList("fdl", "yea::YEAA0070T01.xfdl");
            this._addPreloadList("fdl", "yea::YEAA0070T02.xfdl");
            this._addPreloadList("fdl", "yea::YEAA0070T03.xfdl");
            this._addPreloadList("fdl", "yea::YEAA0070T04.xfdl");
            this._addPreloadList("fdl", "yea::YEAA0070T05.xfdl");
            this._addPreloadList("fdl", "yea::YEAA0070T06.xfdl");
        };
        
        // User Script
        this.addIncludeScript("YEAA0070_BACK.xfdl", "script::lib_script_common.xjs");
        this.registerScript("YEAA0070_BACK.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0070 연말정산처리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		안윤준		Initial Created.
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
        this.sBUTTONLIST  = "TTFFFTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "YEAA0070";
        this.sSaveRowChk  = "T";
        this.sSelectGrid  = "1";

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

        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	
        	this.calSHRYEA_STD_YY.set_value(sNowDate);
        	this.calSHRYEA_STD_YY.setFocus();
        	
        	//this.calSHRBGIN_DATE.set_value(this.fnc_SubStr(iNowDate, 0, 4) + "0101");
        	//this.calSHRENDX_DATE.set_value(this.fnc_SubStr(iNowDate)); 
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
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsYEA_YEFAMI=dsYEA_YEFAMI:U ";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdYEA_INCDEC.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD", this);
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
            if (this.fnc_DatasetChangeCheck("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD")) 
        	{
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRYEA_STD_YY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRPASE_STDT);
        	}
        	/*	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBGIN_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "퇴사시작일", this.calSHRBGIN_DATE);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRENDX_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "퇴사종료일", this.calSHRENDX_DATE);
        	}
        	*/
        	if (this.calSHRBGIN_DATE.value > this.calSHRENDX_DATE.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "퇴사시작일,퇴사종료일", this.calSHRBGIN_DATE);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () 
        {	
        	var sQuestionText;
        	if (this.Tab00.tabindex == "0") {
        	    //부양가족 삭제 여부 확인
        		sQuestionText = "성명 : " + this.dsYEA_YEFAMI.getColumn(this.dsYEA_YEFAMI.rowposition, "YEA_FAM_STR003");
        	} else if (this.Tab00.tabindex == "2") {
        	    if(this.sSelectGrid == "1"){
        			//종근무지 근로소득내역 삭제 여부 확인
        			sQuestionText = "회사명 : " + this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_BFW_STR002");
        	    } else {
        	        //종근무지 비과세소득내역 삭제 여부 확인
        			sQuestionText = "비과세코드 : " + this.dsYEA_BFNTAX.getColumn(this.dsYEA_BFNTAX.rowposition, "YEA_NON_TAX_CD");
        	    }		
        	} else if (this.Tab00.tabindex == "5") {
        	    //의료명세 삭제 여부 확인
        		sQuestionText = "상호 : " + this.dsYEA_MEDISP.getColumn(this.dsYEA_MEDISP.rowposition, "YEA_MES_STR006");
        	} else if (this.Tab00.tabindex == "6") {
        		if(this.sSelectGrid == "1"){
        			//기부명세 삭제 여부 확인
        			sQuestionText = "상호 : " + this.dsYEA_DONASP.getColumn(this.dsYEA_DONASP.rowposition, "YEA_DOS_STR007");
        	    } else {
        	        //기부명세 기부금 조정세액 삭제 여부 확인
        			
        	    }
        	}
        	
        	this.sSelectGrid = "1";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
            if (!this.fnc_DatasetChangeCheck("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD")) 
        	{
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	//부양가족 저장 체크(Tabpage01)
        	for (var i = 0; i < this.dsYEA_YEFAMI.getRowCount(); i++) 
        	{
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR001"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","관계", this.dsYEA_YEFAMI, i, this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR001");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR002"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","내외국인", this.dsYEA_YEFAMI, i, this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR002");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR003"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","성명", this.dsYEA_YEFAMI, i, this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR003");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR004"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","주민등록번호", this.dsYEA_YEFAMI, i, this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR004");
        		}
        		
        		var sYEA_FAM_STR004 = this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(i, "YEA_FAM_STR004"));
        		for (var j = 0; j < this.dsYEA_YEFAMI.getRowCount(); j++) {
        			if (i != j){
        				if (sYEA_FAM_STR004 == this.fnc_Trim(this.dsYEA_YEFAMI.getColumn(j, "YEA_FAM_STR004"))){
        					return this.fnc_CheckPostAction("TMM161", "동일한 주민등록번호가", this.dsYEA_YEFAMI, j, this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR004");
        				}
        			}
        		}
        	}
        	
        	//종근무지(Tabpage03)
        	for (var i=0; i < this.dsYEA_BFWORK.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_BFWORK.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i,"YEA_BIZ_NO"))) != 10) {
        			return this.fnc_CheckPostAction("TMM114","사업자번호", this.dsYEA_BFWORK, i, this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK, "YEA_BIZ_NO");
        		}	
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i,"YEA_BFW_STR001"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","구분", this.dsYEA_BFWORK, i, this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK, "YEA_BFW_STR001");
        		}	
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i,"YEA_BFW_STR002"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","회사명", this.dsYEA_BFWORK, i, this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK, "YEA_BFW_STR002");
        		}
        		
        		var sYEA_BIZ_NO = this.fnc_Trim(this.dsYEA_BFWORK.getColumn(i, "YEA_BIZ_NO"));
        		for (var j = 0; j < this.dsYEA_BFWORK.getRowCount(); j++) {
        			if (i != j){
        				if (sYEA_BIZ_NO == this.fnc_Trim(this.dsYEA_BFWORK.getColumn(j, "YEA_BIZ_NO"))){
        					return this.fnc_CheckPostAction("TMM161", "동일한 사업자번호", this.dsYEA_BFWORK, j, this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK, "YEA_BIZ_NO");
        				}
        			}
        		}
        	}
        	
        	//종근무지비과세(Tabpage03)
        	for (var i=0; i < this.dsYEA_BFNTAX.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_BFNTAX.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFNTAX.getColumn(i,"YEA_NON_TAX_CD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114","비과세항목", this.dsYEA_BFNTAX, i, this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX, "YEA_NON_TAX_CD");
        		}	
        		
        		var sYEA_NON_TAX_CD = this.fnc_Trim(this.dsYEA_BFNTAX.getColumn(i, "YEA_NON_TAX_CD"));
        		for (var j = 0; j < this.dsYEA_BFNTAX.getRowCount(); j++) {
        			if (i != j){
        				if (sYEA_NON_TAX_CD == this.fnc_Trim(this.dsYEA_BFNTAX.getColumn(j, "YEA_NON_TAX_CD"))){
        					return this.fnc_CheckPostAction("TMM161", "동일한 비과세항목", this.dsYEA_BFNTAX, j, this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX, "YEA_NON_TAX_CD");
        				}
        			}
        		}
        	}
        		
        	//연금저축_퇴직연금공제(Tabpage04)
        	for (var i=0; i < this.dsYEA_PENSAV1.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_PENSAV1.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV1,i,"YEA_PEN_STR001")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","퇴직연금구분", this.dsYEA_PENSAV1, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV1, "YEA_PEN_STR001");
        		}		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV1,i,"YEA_PEN_STR002")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","금융기관", this.dsYEA_PENSAV1, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV1, "YEA_PEN_FINA_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV1,i,"YEA_PEN_STR003")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","계좌번호", this.dsYEA_PENSAV1, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV1, "YEA_PEN_STR003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_PENSAV1,i,"YEA_PEN_NUM001")) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_PENSAV1, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV1, "YEA_PEN_NUM001");
        		}   
        	}
        	
        	//연금저축_연금저축공제(Tabpage04)
        	for (var i=0; i < this.dsYEA_PENSAV2.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_PENSAV2.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV2,i,"YEA_PEN_STR001")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","연금저축구분", this.dsYEA_PENSAV2, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV2, "YEA_PEN_STR001");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV2,i,"YEA_PEN_STR002")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","금융기관", this.dsYEA_PENSAV2, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV2, "YEA_PEN_FINA_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV2,i,"YEA_PEN_STR003")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","계좌번호", this.dsYEA_PENSAV2, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV2, "YEA_PEN_STR003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_PENSAV2,i,"YEA_PEN_NUM001")) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_PENSAV2, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV2, "YEA_PEN_NUM001");
        		}
        	}
        	
        	//연금저축_주택마련저축공제(Tabpage04)
        	for (var i=0; i < this.dsYEA_PENSAV3.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_PENSAV3.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV3,i,"YEA_PEN_STR001")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","저축구분", this.dsYEA_PENSAV3, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV3, "YEA_PEN_STR001");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV3,i,"YEA_PEN_STR002")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","금융기관", this.dsYEA_PENSAV3, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV3, "YEA_PEN_FINA_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV3,i,"YEA_PEN_STR003")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","계좌번호", this.dsYEA_PENSAV3, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV3, "YEA_PEN_STR003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_PENSAV3,i,"YEA_PEN_NUM001")) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_PENSAV3, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV3, "YEA_PEN_NUM001");
        		}
        	}
        	
        	//연금저축_장기집합투자증권저축공제(Tabpage04)
        	for (var i=0; i < this.dsYEA_PENSAV4.getRowCount(); i++) 
        	{	
        		if(this.fnc_ToUpper(this.dsYEA_PENSAV4.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV4,i,"YEA_PEN_STR002")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","금융기관", this.dsYEA_PENSAV4, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV4, "YEA_PEN_FINA_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_PENSAV4,i,"YEA_PEN_STR003")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","계좌번호", this.dsYEA_PENSAV4, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV4, "YEA_PEN_STR003");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_PENSAV4,i,"YEA_PEN_NUM001")) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_PENSAV4, i, this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV4, "YEA_PEN_NUM001");
        		}
        	}
        	
            //월세주택_월세액 소득공제 명세서 (Tabpage05)
            for (var i=0; i < this.dsYEA_RENTA1.getRowCount(); i++) 
            {   
                if(this.fnc_ToUpper(this.dsYEA_RENTA1.getRowType(i))==Dataset.ROWTYPE_DELETE) continue;        
                if(this.fnc_ToUpper(this.dsYEA_RENTA1.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
                
                if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1,i,"YEA_RT1_STR001")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","임대인성명", this.dsYEA_RENTA1, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA1, "YEA_RT1_STR001");
        		}
                if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1,i,"YEA_RT1_STR003")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","주택유형", this.dsYEA_RENTA1, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA1, "YEA_RT1_STR003");
        		}
                if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1,i,"YEA_RT1_NUM003")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","주택계약면적", this.dsYEA_RENTA1, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA1, "YEA_RT1_NUM003");
        		}
                if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA1,i,"YEA_RT1_STR004")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","계약서상주소지", this.dsYEA_RENTA1, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA1, "YEA_RT1_STR004");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_RENTA1,i,"YEA_RT1_NUM001")) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","불입금액", this.dsYEA_RENTA1, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA1, "YEA_RT1_NUM001");
        		}   
            }
            
            //월세주택_금전소비대차 계약내용/임대차 계약내용 (Tabpage05)
            for (var i=0; i < this.dsYEA_RENTA2.getRowCount(); i++) {
                if(this.fnc_ToUpper(this.dsYEA_RENTA2.getRowType(i))==Dataset.ROWTYPE_DELETE) continue;
                if(this.fnc_ToUpper(this.dsYEA_RENTA2.getRowType(i))==Dataset.ROWTYPE_NORMAL) continue;
                    
                //[2013귀속] EXPR이므로 setColumn 함!!!
        		this.dsYEA_RENTA2.setColumn(i, "YEA_RT2_NUM002", parseFloat(this.dsYEA_RENTA2.getColumn(i, "YEA_RT2_NUM003")) + parseFloat(this.dsYEA_RENTA2.getColumn(i, "YEA_RT2_NUM004")));
        	
        	    if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_STR001")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","대주성명", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_1, "YEA_RT2_STR001");
        		}
        	    if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_STR002")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","주민등록번호", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_1, "YEA_RT2_STR002");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_STR001")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","대주성명", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_1, "YEA_RT2_STR001");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_NUM002")) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","원리금상환액(계)", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_1, "YEA_RT2_NUM003");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_STR005")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","임대인성명", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_2, "YEA_RT2_STR005");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_STR006")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","주민등록번호", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_2, "YEA_RT2_STR006");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_STR007")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","주택유형", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_2, "YEA_RT2_STR007");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_NUM006")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","주택계약면적", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_2, "YEA_RT2_NUM006");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_STR008")) < 1) {
        			return this.fnc_CheckPostAction("TMM114","임대차계약서상 주소지", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_2, "YEA_RT2_STR008");
        		}
        		if (nexacro.toNumber(this.fnc_Trim(this.dsYEA_RENTA2,i,"YEA_RT2_NUM007")) <= 0) {
        			return this.fnc_CheckPostAction("TMM114","전세보증금", this.dsYEA_RENTA2, i, this.Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_2, "YEA_RT2_NUM007");
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
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY="		 + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRYEA_STD_YY.value,0 ,4))); 
        		sReturnString += " YEA_DEPT_CD=" 	 + this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " YEA_EMP_NO=" 	 + this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		sReturnString += " YEA_EMP_CD="      + this.fnc_Quote(this.cmbSHRCLSD_CODE.value);
        		sReturnString += " YEA_INOFFICE_CD=" + this.fnc_Quote(this.cmbSHRWODN_CODE.value);
        		//sReturnString += " BGIN_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRBGIN_DATE.value)); 
        		//sReturnString += " ENDX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRENDX_DATE.value)); 
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY="		+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRYEA_STD_YY.value,0 ,4))); 
        		sReturnString += " YEA_EMP_NO="	    + this.fnc_Quote(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"));
        		
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
        		this.fnc_Information(this.stInformation, this.dsYEA_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsYEA_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.dsYEA_MASTXM.set_rowposition(0); 
        		this.grdYEA_MASTXM.selectRow(0);
        		this.grdYEA_MASTXM.setFocus();
                
            } else if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.Tab00.tabpage1.divTabpage01.stInformation, this.dsYEA_YEFAMI.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsYEA_YEFAMI.getCaseCount("dataset.getRowLevel(currow)==0"));
        		//this.grdYEA_MASTXM.setFocus();
                
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		//this.fn_Search();
        		//Tabpage 그리드 조회
        	    this.fn_SearchDetail();
        		
        	// 부양가족처리 Argument 생성
        	} else if (sMethodName == 'PROC00') {	
        		for (var nRow = 0; nRow < this.dsYEA_MASTXM.rowcount; nRow++) {
        			this.dsYEA_MASTXM.setColumn(nRow, "YEA_CHK", "0");
        		}
        		this.dsYEA_MASTXM.applyChange();		
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	// 근로소득처리 Argument 생성
        	} else if (sMethodName == 'PROC01') {	
        		for (var nRow = 0; nRow < this.dsYEA_MASTXM.rowcount; nRow++) {
        			this.dsYEA_MASTXM.setColumn(nRow, "YEA_CHK", "0");
        		}
        		this.dsYEA_MASTXM.applyChange();		
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;
        		arrParam[arrInt++]  = "COMBO,cmbSHRWODN_CODE,dsWODN_CODE,0"; //SHR 재직구분SHR
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI,dsFRDE_CODE,YEA_FAM_STR001";   // 가족구분
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI,dsLFDN_CODE,YEA_FAM_STR002";   // 내외국인구분
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI,dsHALT_CODE,YEA_FAM_STR009";   // 장애인유형
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI,dsEEDI_CODE,YEA_FAM_STR010";   // 교육비구분		
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage3.divTabpage03.grdYEA_BFWORK,dsBEPW_YSNO,YEA_BFW_STR001";   // 근로소득내역 구분
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX,dsNTAX_CODE,YEA_NON_TAX_CD";   // 비과세항목		
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage4.divTabpage04.grdYEA_PENSAV1,dsPIDD_CODE,YEA_PEN_STR001";  // 연금저축구분
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage4.divTabpage04.grdYEA_PENSAV2,dsPIDD_CODE,YEA_PEN_STR001";  // 연금저축구분
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage4.divTabpage04.grdYEA_PENSAV3,dsPIDD_CODE,YEA_PEN_STR001";  // 연금저축구분
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage4.divTabpage04.grdYEA_PENSAV4,dsPIDD_CODE,YEA_PEN_STR001";  // 연금저축구분		
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage5.divTabpage05.grdYEA_RENTA1,dsHUSF_CODE,YEA_RT1_STR003";   // 주거형태구분
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_2,dsHUSF_CODE,YEA_RT2_STR007"; // 주거형태구분		
        		arrParam[arrInt++]  = "GRID,Tab00.tabpage6.divTabpage06.grdYEA_MEDISP,dsMETE_CODE,YEA_MES_STR001";   // 의료증빙코드
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
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
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        	} else if (obj.name == "grdYEA_PENSAV1" || obj.name == "this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV1") {	
        		if (sColumnID == "YEA_PEN_FINA_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "YEA_PEN_FINA_NAME") {				
        			arrParam[0] = "PAY0003";
        			arrParam[1] = "";
        			arrParam[2] = "YEA_PEN_FINA_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab00.tabpage4.divTabpage04.grdYEA_PENSAV1";
        			arrParam[5] = "YEA_PEN_STR002,YEA_PEN_FINA_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} 
        	} else if (obj.name == "grdYEA_PENSAV2" || obj.name == "this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV2") {	
        		if (sColumnID == "YEA_PEN_FINA_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "YEA_PEN_FINA_NAME") {				
        			arrParam[0] = "PAY0003";
        			arrParam[1] = "";
        			arrParam[2] = "YEA_PEN_FINA_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab00.tabpage4.divTabpage04.grdYEA_PENSAV2";
        			arrParam[5] = "YEA_PEN_STR002,YEA_PEN_FINA_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} 
        	} else if (obj.name == "grdYEA_PENSAV3" || obj.name == "this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV3") {	
        		if (sColumnID == "YEA_PEN_FINA_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "YEA_PEN_FINA_NAME") {				
        			arrParam[0] = "PAY0003";
        			arrParam[1] = "";
        			arrParam[2] = "YEA_PEN_FINA_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab00.tabpage4.divTabpage04.grdYEA_PENSAV3";
        			arrParam[5] = "YEA_PEN_STR002,YEA_PEN_FINA_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} 
        	} else if (obj.name == "grdYEA_PENSAV4" || obj.name == "this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV4") {	
        		if (sColumnID == "YEA_PEN_FINA_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "YEA_PEN_FINA_NAME") {				
        			arrParam[0] = "PAY0003";
        			arrParam[1] = "";
        			arrParam[2] = "YEA_PEN_FINA_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab00.tabpage4.divTabpage04.grdYEA_PENSAV4";
        			arrParam[5] = "YEA_PEN_STR002,YEA_PEN_FINA_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} 
        	}
        	

        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*----------------------------------------------------------- PROC function start -------------------------------------------------------------------*/
        /*-------------------------------+
         |  부양가족처리 Button Click  |
         +-------------------------------*/
        this.btnPROC00_onclick = function(obj,e)
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
        this.btnPROC01_onclick = function(obj,e)
        {
        	if (!this.fnc_DatasetChangeCheck("dsYEA_MASTXM")) {
        		this.fnc_Message("TMM013");
        		return false;
        	}
        	
        	if (this.fnc_Message("PAY002","근로소득") == false) return false;
        	
        	var sMethodName = "PROC01";
        	var sInDataSet  = "dsYEA_MASTXM=dsYEA_MASTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        /*----------------------------------------------------------- PROC function end   -------------------------------------------------------------------*/

        /*----------------------------------------------------------- Grid function start -------------------------------------------------------------------*/
        /*----------------+
         |   목록        |
         +----------------*/
        this.grdYEA_MASTXM_onheadclick = function(obj,e)
        {	
        	var sCol = "YEA_CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        }

        this.dsYEA_MASTXM_canrowposchange = function(obj,e)
        {
        	this.sSaveRowChk = "T";
        	if (this.fnc_DatasetChangeCheck("dsYEA_YEFAMI,dsYEA_PAYDTL,dsYEA_BFWORK,dsYEA_BFNTAX,dsYEA_PENSAV1,dsYEA_PENSAV2,dsYEA_PENSAV3,dsYEA_PENSAV4,dsYEA_RENTA1,dsYEA_RENTA2,dsYEA_MEDISP,dsYEA_DONASP,dsYEA_DONAAD")) 
        	{
        		this.sSaveRowChk = "F";
        		if (this.fnc_Message("TMM023") == false) return false;
        		this.sSaveRowChk = "T";
        	}
        }

        this.dsYEA_MASTXM_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowCount < 0) return;
        	if (this.sSaveRowChk == "F") return false;
        	
        	//Tabpage 그리드 조회
        	this.fn_SearchDetail();
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
        		this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK, "YEA_BIZ_NO"), "edittype", "mask");
        	} else {
        		this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK, "YEA_BIZ_NO"), "edittype", "none");
        	}
        	this.dsYEA_BFNTAX.filter("YEA_BIZ_NO=='" + this.dsYEA_BFWORK.getColumn(e.newrow, "YEA_BIZ_NO") + "'");
        	this.fnc_Information(this.Tab00.tabpage3.divTabpage03.stInformation1, this.dsYEA_BFNTAX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        }

        /*---------------------------------------------------------+
         |  (Tabpage03) 종근무지 비과세소득내역 데이터  변경  |
         +---------------------------------------------------------*/
        this.dsYEA_BFNTAX_OnRowPosChanged = function(obj,e)
        {
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX, "YEA_NON_TAX_CD"), "edittype", "combo");
        	} else {
        		this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX, "YEA_NON_TAX_CD"), "edittype", "none");
        	}
        }

        /*-------------------------------------------------------+
         |  (Tabpage04) 연금저축 퇴직연금공제 데이터  변경  |
         +-------------------------------------------------------*/
        this.dsYEA_PENSAV1_OnColumnChanged = function(obj,e)
        {
        	if (e.columnid == "YEA_PEN_FINA_NAME") {
        		this.fn_HelpDialoge(this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV1, 'YES', e.oldvalue);
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
        		this.fn_HelpDialoge(this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV2, 'YES', e.oldvalue);
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
        		this.fn_HelpDialoge(this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV3, 'YES', e.oldvalue);
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
        		this.fn_HelpDialoge(this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV4, 'YES', e.oldvalue);
        	} else if (e.columnid == "YEA_PEN_STR001" || e.columnid == "YEA_PEN_NUM001") {
        		this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition,"YEA_INC_NUM047", this.dsYEA_PENSAV4.getCaseSum("YEA_PEN_STR001 == '51'", "YEA_PEN_NUM001")); //장기집합투자증권저축
        	}
        }

        this.dsYEA_RENTA1_OnColumnChanged = function(obj,e)
        {
        	
        }

        this.dsYEA_RENTA2_OnColumnChanged = function(obj,e)
        {
        	
        }

        this.dsYEA_MEDISP_OnColumnChanged = function(obj,e)
        {
        	
        }

        this.dsYEA_MEDISP_OnRowPosChanged = function(obj,e)
        {
        	
        }

        this.dsYEA_DONASP_OnColumnChanged = function(obj,e)
        {
        	
        }

        this.dsYEA_DONASP_OnRowPosChanged = function(obj,e)
        {
        	
        }

        this.dsYEA_DONAAD_OnColumnChanged = function(obj,e)
        {
        	
        }

        this.dsYEA_INCDEC_OnColumnChanged = function(obj,e)
        {
        	
        }

        /*----------------------------------------------------------- Grid function end   -------------------------------------------------------------------*/

        /*-----------------------------------------------------------      function start -------------------------------------------------------------------*/
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
        				this.dsYEA_90012.filter("YEA_COMD_CD != '0'");
        				this.Tab00.tabpage1.divTabpage01.btnDelRow.set_enable(true);
        			} else {
        				this.dsYEA_90012.filter("YEA_COMD_CD == '0'");
        				this.Tab00.tabpage1.divTabpage01.btnDelRow.set_enable(false);
        			}
        			this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_NUM002"), "edittype", "none"); 
        			this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_NUM001"), "edittype", "none"); 
        		    this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_NUM002"), "edittype", "none"); 
        		    this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_NUM002"), "edittype", "none"); 
        			
        			if (this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAMI_SEQ") == "1") {
        				// 본인
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR001"), "edittype", "none"); //가족관계신고코드
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR003"), "edittype", "none"); //성명
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR004"), "edittype", "none"); //주민등록번호
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR005"), "edittype", "none"); //기본공제여부
        				
        				// 부녀자공제 (여자일경우만 가능)
        				if (this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), 6, 1) == "2" || this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), 6, 1) == "4" ||
        					this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), 6, 1) == "6" || this.fnc_SubStr(this.dsYEA_YEFAMI.getColumn(nRow, "YEA_FAM_STR004"), 6, 1) == "8") 
        				{
        					this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR007"), "edittype", "checkbox"); //부녀자공제					
        				} else {
        					this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR007"), "edittype", "none"); //부녀자공제
        				}
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR008"), "edittype", "checkbox"); //[2013년 귀속] 한부모공제
        				
        			} else {
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR001"), "edittype", "combo"); //가족관계신고코드
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR003"), "edittype", "normal"); //성명
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR004"), "edittype", "mask"); //주민등록번호
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR005"), "edittype", "checkbox"); //기본공제여부

        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR007"), "edittype", "none"); //부녀자공제
        				this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR008"), "edittype", "none"); //[2013년 귀속] 한부모공제
        			
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
        				this.dsYEA_90014.filter("YEA_COMD_CD != '1'");
        			} else {
        				this.dsYEA_90014.filter("YEA_COMD_CD == '1' || YEA_COMD_CD = '' ");
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

        /*-----------------------------------------------------------  Tab function start -------------------------------------------------------------------*/
        /*------------------------------------------------+
         |  (Tabpage01) 부양가족 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_FamiAddRow = function () 
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
        	this.dsYEA_YEFAMI.setCellPos(this.fnc_GridColumnIndex(this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI, "YEA_FAM_STR001"));
        	this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.selectRow(iRow);
            this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage01) 부양가족 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_FamiDelRow = function () 
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
        	
        	this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setFocus();			
        }

        /*------------------------------------------------+
         |  (Tabpage03) 근로소득내역 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_BfworkAddRow = function () 
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
        	this.dsYEA_BFWORK.setCellPos(this.fnc_GridColumnIndex(this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK, "YEA_FAM_STR001"));
            this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK.selectRow(iRow);
            this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK.setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage03) 근로소득내역 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_BfworkDelRow = function () 
        {
        	this.sSelectGrid = "1";
        	
        	//근로소득내역 삭제 체크
        	if (this.dsYEA_BFWORK.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	if (this.fn_DeleteCheck()) this.dsYEA_BFWORK.deleteRow(this.dsYEA_BFWORK.rowposition);
        	this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM001", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM007"));	//국민연금
        	this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM011", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008"));	//건강보험
        	this.dsYEA_INCDEC.setColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_NUM013", this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));	//고용보험
        	this.dsYEA_YEFAMI.setColumn(0,"YEA_FAM_NUM002",this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM022")+this.dsYEA_PAYDTL.getSum("YEA_PAY_NUM023")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM008")+this.dsYEA_BFWORK.getSum("YEA_BFW_NUM009"));		//부양가족 건강보험+고용보험
        			
        	this.Tab00.tabpage3.divTabpage03.grdYEA_BFWORK.setFocus();
        }

        /*-------------------------------------------------------+
         |  (Tabpage03) 비과세소득내역 행추가 버튼 클릭 時  |
         +-------------------------------------------------------*/
        this.fn_BfntaxAddRow = function () 
        {
        	// 종근무지 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_BIZ_NO"))) < 1) {
        		this.fnc_Message("YEA006"); // 종근무지 사업자번호를 입력하세요.
        		return false;
        	}

        	var iRow = this.dsYEA_YEFAMI.addRow();
        	
        	this.dsYEA_BFNTAX.setColumn(iRow, 'YEA_STD_YY', this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_STD_YY")); //정산년월
        	this.dsYEA_BFNTAX.setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_EMP_NO")); //사번
        	this.dsYEA_BFNTAX.setColumn(iRow, 'YEA_BIZ_NO', this.dsYEA_BFWORK.getColumn(this.dsYEA_BFWORK.rowposition, "YEA_BIZ_NO")); //사업자번호
        	
        	this.dsYEA_BFNTAX.set_rowposition(iRow); 
        	this.dsYEA_BFNTAX.setCellPos(this.fnc_GridColumnIndex(this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX, "YEA_NON_TAX_CD"));
            this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX.selectRow(iRow);
            this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX.setFocus();
        }

        /*-------------------------------------------------------+
         |  (Tabpage03) 비과세소득내역 행삭제 버튼 클릭 時  |
         +-------------------------------------------------------*/
        this.fn_BfntaxDelRow = function () 
        {
        	this.sSelectGrid = "2";
        	
        	//비과세소득내역 삭제 체크
        	if (this.dsYEA_BFNTAX.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        		
        	if (this.fn_DeleteCheck()) this.dsYEA_BFNTAX.deleteRow(this.dsYEA_BFNTAX.rowposition);
        	this.Tab00.tabpage3.divTabpage03.grdYEA_BFNTAX.setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage04) 연금저축 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_PensavAddRow = function (obj,e)
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
        	eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).selectRow(iRow);
        	eval("this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setFocus(); 	//세부항목 코드 Fucus
        	eval("this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setCellPos(0);	//Cell의 위치를 품목코드로 설정
        }

        /*------------------------------------------------+
         |  (Tabpage04) 연금저축 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_PensavDelRow = function (obj,e) 
        {
        	//비과세소득내역 삭제 체크
        	if (eval("this.dsYEA_PENSAV" + this.fnc_Right(obj.name, 1)).getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	if (this.fn_DeleteCheck1()) 
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
        	eval("this.Tab00.tabpage4.divTabpage04.grdYEA_PENSAV" + this.fnc_Right(obj.name, 1)).setFocus();   //세부항목 코드 Fucus
        }

        
        /*------------------------------------------------+
         |  (Tabpage05) 월세주택 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_PensavAddRow = function (obj,e)
        {
        	// 사원 선택 체크
        	if (this.fnc_Length(this.fnc_Trim(this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO"))) < 1) {
        		this.fnc_Message("TMM013"); //사원을 먼저 선택하세요..
        		return false;
        	}

            var iRow = eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).addRow();
        	var sObjName = "Tab00.tabpage5.divTabpage05.grdYEA_RENTA1";

        	if (this.fnc_Right(obj.name, 1) != "1") {
        		sObjName = "Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_1";
        	}
        	
        	eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).setColumn(iRow, 'YEA_STD_YY', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_STD_YY")); //정산년월
        	eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).setColumn(iRow, 'YEA_EMP_NO', this.dsYEA_MASTXM.getColumn(this.dsYEA_MASTXM.rowposition, "YEA_EMP_NO")); //사번
        	
        	eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).set_rowposition(iRow); 
        	eval("this.dsYEA_RENTA" + this.fnc_Right(obj.name, 1)).selectRow(iRow);
        	eval("this."+sObjName).setFocus(); 				//세부항목 코드 Fucus
        	eval("this."+sObjName).setCellPos(0); 			//Cell의 위치를 품목코드로 설정

        }

        /*------------------------------------------------+
         |  (Tabpage05) 월세주택 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_PensavDelRow = function (obj,e) 
        {
        	//비과세소득내역 삭제 체크
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
        	
        	var sObjName = "Tab00.tabpage5.divTabpage05.grdYEA_RENTA1";

        	if (this.fnc_Right(obj.name, 1) != "1") {
        		sObjName = "Tab00.tabpage5.divTabpage05.grdYEA_RENTA2_1";
        	}
        	eval("this."+sObjName).setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage06) 의료명세 행추가 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_MedispAddRow = function () 
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
        	this.dsYEA_MEDISP.setCellPos(this.fnc_GridColumnIndex(this.Tab00.tabpage6.divTabpage06.grdYEA_MEDISP, "YEA_FAM_STR001"));
        	this.Tab00.tabpage6.divTabpage06.grdYEA_MEDISP.selectRow(iRow);
            this.Tab00.tabpage6.divTabpage06.grdYEA_MEDISP.setFocus();
        }

        /*------------------------------------------------+
         |  (Tabpage06) 의료명세 행삭제 버튼 클릭 時  |
         +------------------------------------------------*/
        this.fn_MedispDelRow = function () 
        {
        	//부양가족 삭제 체크
        	if (this.dsYEA_MEDISP.getRowCount() < 1) 
        	{
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	if (this.fn_DeleteCheck()) this.dsYEA_MEDISP.deleteRow(this.dsYEA_MEDISP.rowposition);
        	this.Tab00.tabpage1.divTabpage01.grdYEA_YEFAMI.setFocus();			
        }
        /*-----------------------------------------------------------  Tab function end   -------------------------------------------------------------------*/

        this.fn_DeleteCheck1 = function (sGubn) 
        {	
        	var sQuestionText;
        	if (sGubn == "1") {
        	    //부양가족 삭제 여부 확인
        		sQuestionText = "퇴직연금구분 : " + this.dsPIDD_CODE.getColumn(this.dsPIDD_CODE.findRow("COMM_CODE", this.dsYEA_PENSAV1.getColumn(this.dsYEA_PENSAV1.rowposition, "YEA_PEN_STR001")), "COMD_CDNM");
        	} else if (sGubn == "2") {
        	    //종근무지 근로소득내역 삭제 여부 확인
        		sQuestionText = "연금저축구분 : " + this.dsPIDD_CODE.getColumn(this.dsPIDD_CODE.findRow("COMM_CODE", this.dsYEA_PENSAV2.getColumn(this.dsYEA_PENSAV2.rowposition, "YEA_PEN_STR001")), "COMD_CDNM");
        	} else if (sGubn == "3") {
        	    //의료명세 삭제 여부 확인
        		sQuestionText = "저축구분 : " + this.dsPIDD_CODE.getColumn(this.dsPIDD_CODE.findRow("COMM_CODE", this.dsYEA_PENSAV3.getColumn(this.dsYEA_PENSAV3.rowposition, "YEA_PEN_STR001")), "COMD_CDNM");
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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsYEA_MASTXM.addEventHandler("onrowposchanged", this.dsYEA_MASTXM_onrowposchanged, this);
            this.dsYEA_MASTXM.addEventHandler("canrowposchange", this.dsYEA_MASTXM_canrowposchange, this);
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
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdYEA_MASTXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdYEA_MASTXM.addEventHandler("onheadclick", this.grdYEA_MASTXM_onheadclick, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRCLSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnPROC00.addEventHandler("onclick", this.btnPROC00_onclick, this);
            this.btnPROC01.addEventHandler("onclick", this.btnPROC01_onclick, this);
            this.calSHRENDX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBGIN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("YEAA0070_BACK.xfdl");
        this.loadPreloadList();
       
    };
}
)();
