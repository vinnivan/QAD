
    
   var msg = msg || {}; 
      

        msg.ARBEND = function() {
        return {
        	MSGID: "ARBEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CLK_NBR: cdt.VariableManager.getLocalVariable("CLK_NBR"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	COMP_SIT: cdt.VariableManager.getLocalVariable("COMP_SIT"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	ROUTING: cdt.VariableManager.getLocalVariable("ROUTING"),
	BOM_CODE: cdt.VariableManager.getLocalVariable("BOM_CODE"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	QTY_PROC: cdt.VariableManager.getLocalVariable("QTY_PROC"),
	QTY_SCRAP: cdt.VariableManager.getLocalVariable("QTY_SCRAP"),
	SCRAP_RSN: cdt.VariableManager.getLocalVariable("SCRAP_RSN"),
	QTY_REJECT: cdt.VariableManager.getLocalVariable("QTY_REJECT"),
	RJCT_RSN: cdt.VariableManager.getLocalVariable("RJCT_RSN"),
	YES_NO: cdt.VariableManager.getLocalVariable("YES_NO"),
	MOD_BKFL: cdt.VariableManager.getLocalVariable("MOD_BKFL"),
	ACT_RTME: cdt.VariableManager.getLocalVariable("ACT_RTME"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	TO_STATUS: cdt.VariableManager.getLocalVariable("TO_STATUS"),
	BKFL_TYPE: cdt.VariableManager.getLocalVariable("BKFL_TYPE"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	COMP_LOC: cdt.VariableManager.getLocalVariable("COMP_LOC"),
	SHIFT: cdt.VariableManager.getLocalVariable("SHIFT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ARBENX = function() {
        return {
        	MSGID: "ARBENX",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CLK_NBR: cdt.VariableManager.getLocalVariable("CLK_NBR"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	COMP_SIT: cdt.VariableManager.getLocalVariable("COMP_SIT"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	ROUTING: cdt.VariableManager.getLocalVariable("ROUTING"),
	BOM_CODE: cdt.VariableManager.getLocalVariable("BOM_CODE"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	QTY_PROC: cdt.VariableManager.getLocalVariable("QTY_PROC"),
	QTY_SCRAP: cdt.VariableManager.getLocalVariable("QTY_SCRAP"),
	SCRAP_RSN: cdt.VariableManager.getLocalVariable("SCRAP_RSN"),
	QTY_REJECT: cdt.VariableManager.getLocalVariable("QTY_REJECT"),
	RJCT_RSN: cdt.VariableManager.getLocalVariable("RJCT_RSN"),
	YES_NO: cdt.VariableManager.getLocalVariable("YES_NO"),
	MOD_BKFL: cdt.VariableManager.getLocalVariable("MOD_BKFL"),
	ACT_RTME: cdt.VariableManager.getLocalVariable("ACT_RTME"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	TO_STATUS: cdt.VariableManager.getLocalVariable("TO_STATUS"),
	BKFL_TYPE: cdt.VariableManager.getLocalVariable("BKFL_TYPE"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	COMP_LOC: cdt.VariableManager.getLocalVariable("COMP_LOC"),
	SHIFT: cdt.VariableManager.getLocalVariable("SHIFT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	RGRhs1: ""
        }
    };
    
    

        msg.ARBKFL = function() {
        return {
        	MSGID: "ARBKFL",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	COMP_ITM: cdt.VariableManager.getLocalVariable("COMP_ITM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SUBST: cdt.VariableManager.getLocalVariable("SUBST"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ARBSTR = function() {
        return {
        	MSGID: "ARBSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ARBWIP = function() {
        return {
        	MSGID: "ARBWIP",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	WIP_LOT: cdt.VariableManager.getLocalVariable("WIP_LOT"),
	WIP_REF: cdt.VariableManager.getLocalVariable("WIP_REF"),
	WIP_QTY: cdt.VariableManager.getLocalVariable("WIP_QTY"),
	RGRhs1: ""
        }
    };
    
    

        msg.ARSCRP = function() {
        return {
        	MSGID: "ARSCRP",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	EMPLOYEE: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	SHIFT: cdt.VariableManager.getLocalVariable("SHIFT"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	ROUTING: cdt.VariableManager.getLocalVariable("ROUTING"),
	BOM_CODE: cdt.VariableManager.getLocalVariable("BOM_CODE"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	U_OF_M: cdt.VariableManager.getLocalVariable("U_OF_M"),
	CONV: cdt.VariableManager.getLocalVariable("CONV"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	RSN_CODE: cdt.VariableManager.getLocalVariable("RSN_CODE"),
	RJCT_QTY: cdt.VariableManager.getLocalVariable("RJCT_QTY"),
	RJCT_RSN: cdt.VariableManager.getLocalVariable("RJCT_RSN"),
	RGRhs1: ""
        }
    };
    
    

        msg.ARSETL = function() {
        return {
        	MSGID: "ARSETL",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	BOM_CODE: cdt.VariableManager.getLocalVariable("BOM_CODE"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	ROUTING: cdt.VariableManager.getLocalVariable("ROUTING"),
	EMPLOYEE: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	EARN_CD: cdt.VariableManager.getLocalVariable("EARN_CD"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	ACT_TIME: cdt.VariableManager.getLocalVariable("ACT_TIME"),
	TIME_START: cdt.VariableManager.getLocalVariable("TIME_START"),
	TIME_STOP: cdt.VariableManager.getLocalVariable("TIME_STOP"),
	SHIFT: cdt.VariableManager.getLocalVariable("SHIFT"),
	RGRhs1: ""
        }
    };
    
    

        msg.ASNRBD = function() {
        return {
        	MSGID: "ASNRBD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	SCAC: cdt.VariableManager.getLocalVariable("SCAC"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ASNRED = function() {
        return {
        	MSGID: "ASNRED",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	SHIP_TYPE: cdt.VariableManager.getLocalVariable("SHIP_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO")
        }
    };
    
    

        msg.ASNRST = function() {
        return {
        	MSGID: "ASNRST",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM")
        }
    };
    
    

        msg.CILABEL = function() {
        return {
        	MSGID: "CILABEL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ILABEL: cdt.VariableManager.getLocalVariable("ILABEL"),
	ISTATUS: cdt.VariableManager.getLocalVariable("ISTATUS"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.CLKIN = function() {
        return {
        	MSGID: "CLKIN",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CLK_DATE: cdt.VariableManager.getLocalVariable("CLK_DATE"),
	CLK_TIME: cdt.VariableManager.getLocalVariable("CLK_TIME"),
	CLK_NBR: cdt.VariableManager.getLocalVariable("CLK_NBR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DARBC1 = function() {
        return {
        	MSGID: "DARBC1",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DELCQT = function() {
        return {
        	MSGID: "DELCQT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	CEQUENT_LOC: cdt.VariableManager.getGlobalVariable("DOCK_LOC"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP")
        }
    };
    
    

        msg.DOSEND = function() {
        return {
        	MSGID: "DOSEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DUE_DATE: cdt.VariableManager.getLocalVariable("DUE_DATE"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	COMMENTS: cdt.VariableManager.getLocalVariable("COMMENTS"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	FOB_PRT: cdt.VariableManager.getLocalVariable("FOB_PRT"),
	SHIP_VIA: cdt.VariableManager.getLocalVariable("SHIP_VIA"),
	BOL: cdt.VariableManager.getLocalVariable("BOL"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DST_TYPE: cdt.VariableManager.getLocalVariable("DST_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DOSSTR = function() {
        return {
        	MSGID: "DOSSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DSDEND = function() {
        return {
        	MSGID: "DSDEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DSDMUP = function() {
        return {
        	MSGID: "DSDMUP",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	ORDERNBR: cdt.VariableManager.getLocalVariable("ORDERNBR"),
	ORDERNBR1: cdt.VariableManager.getLocalVariable("ORDERNBR1"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SITE1: cdt.VariableManager.getLocalVariable("SITE1"),
	FR_SITE: cdt.VariableManager.getLocalVariable("FR_SITE"),
	FR_SITE1: cdt.VariableManager.getLocalVariable("FR_SITE1"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	REQ_NUM1: cdt.VariableManager.getLocalVariable("REQ_NUM1"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	ITEM1: cdt.VariableManager.getLocalVariable("ITEM1"),
	SHP_DATE: cdt.VariableManager.getLocalVariable("SHP_DATE"),
	SHP_DATE1: cdt.VariableManager.getLocalVariable("SHP_DATE1"),
	DUE_DATE: cdt.VariableManager.getLocalVariable("DUE_DATE"),
	DUE_DATE1: cdt.VariableManager.getLocalVariable("DUE_DATE1"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	DEL_YN: cdt.VariableManager.getLocalVariable("DEL_YN"),
	ARCHIVE_YN: cdt.VariableManager.getLocalVariable("ARCHIVE_YN"),
	OUTPUT: cdt.VariableManager.getLocalVariable("OUTPUT"),
	BATCH_ID: cdt.VariableManager.getLocalVariable("BATCH_ID"),
	USERID: cdt.VariableManager.getLocalVariable("Gvr.USERID")
        }
    };
    
    

        msg.DSDOIS = function() {
        return {
        	MSGID: "DSDOIS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DSDORC = function() {
        return {
        	MSGID: "DSDORC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DSDSTR = function() {
        return {
        	MSGID: "DSDSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DSRBLD = function() {
        return {
        	MSGID: "DSRBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	ORD_DATE: cdt.VariableManager.getLocalVariable("ORD_DATE"),
	DUE_DATE: cdt.VariableManager.getLocalVariable("DUE_DATE"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	QTY_ORD: cdt.VariableManager.getLocalVariable("QTY_ORD"),
	TRANSPORT: cdt.VariableManager.getLocalVariable("TRANSPORT")
        }
    };
    
    

        msg.DSREND = function() {
        return {
        	MSGID: "DSREND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	ORD_DATE: cdt.VariableManager.getLocalVariable("ORD_DATE"),
	DUE_DATE: cdt.VariableManager.getLocalVariable("DUE_DATE"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	QTY_ORD: cdt.VariableManager.getLocalVariable("QTY_ORD"),
	TRANSPORT: cdt.VariableManager.getLocalVariable("TRANSPORT"),
	REMARKS2: cdt.VariableManager.getLocalVariable("REMARKS2"),
	COMMENTS: cdt.VariableManager.getLocalVariable("COMMENTS"),
	COMMENTS2: cdt.VariableManager.getLocalVariable("COMMENTS2")
        }
    };
    
    

        msg.DSRSTR = function() {
        return {
        	MSGID: "DSRSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DWNDOS = function() {
        return {
        	MSGID: "DWNDOS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DWNINV = function() {
        return {
        	MSGID: "DWNINV",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	MAX_RCDS: cdt.VariableManager.getGlobalVariable("MAX_RCDS")
        }
    };
    
    

        msg.DWNINX = function() {
        return {
        	MSGID: "DWNINX",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	MAX_RCDS: cdt.VariableManager.getGlobalVariable("MAX_RCDS"),
	FR_LOC: cdt.VariableManager.getLocalVariable("FR_LOC"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TO_LOC"),
	USE_QUEUE: cdt.VariableManager.getLocalVariable("USE_QUEUE")
        }
    };
    
    

        msg.DWNLAD = function() {
        return {
        	MSGID: "DWNLAD",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DWNPOD = function() {
        return {
        	MSGID: "DWNPOD",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	USE_QUEUE: cdt.VariableManager.getLocalVariable("USE_QUEUE"),
	PART: cdt.VariableManager.getLocalVariable("PART"),
	DOMAIN: cdt.VariableManager.getLocalVariable("DOMAIN"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM")
        }
    };
    
    

        msg.DWNPOM = function() {
        return {
        	MSGID: "DWNPOM",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	USE_QUEUE: cdt.VariableManager.getLocalVariable("USE_QUEUE"),
	PART: cdt.VariableManager.getLocalVariable("PART"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	DOMAIN: cdt.VariableManager.getLocalVariable("DOMAIN"),
	SITE: cdt.VariableManager.getLocalVariable("SITE")
        }
    };
    
    

        msg.DWNSOD = function() {
        return {
        	MSGID: "DWNSOD",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getLocalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getLocalVariable("DOMAIN"),
	USE_QUEUE: cdt.VariableManager.getLocalVariable("USE_QUEUE")
        }
    };
    
    

        msg.DWNSOS = function() {
        return {
        	MSGID: "DWNSOS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.DWNWOD = function() {
        return {
        	MSGID: "DWNWOD",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getLocalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	USE_QUEUE: cdt.VariableManager.getLocalVariable("USE_QUEUE"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION")
        }
    };
    
    

        msg.DWXDOS = function() {
        return {
        	MSGID: "DWXDOS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	DOMAIN: cdt.VariableManager.getLocalVariable("DO_DOMAIN"),
	ITEMSCH: cdt.VariableManager.getLocalVariable("ITEMSCH")
        }
    };
    
    

        msg.DWXSOS = function() {
        return {
        	MSGID: "DWXSOS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	USE_QUEUE: cdt.VariableManager.getLocalVariable("USE_QUEUE"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	ITEMSCH: cdt.VariableManager.getLocalVariable("ITEMSCH"),
	CEQUENT_LOC: cdt.VariableManager.getGlobalVariable("DOCK_LOC")
        }
    };
    
    

        msg.EDXASN = function() {
        return {
        	MSGID: "EDXASN",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIP_ID: cdt.VariableManager.getLocalVariable("SHIP_ID"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.FSOREL = function() {
        return {
        	MSGID: "FSOREL",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.FSRMAI = function() {
        return {
        	MSGID: "FSRMAI",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	ORDERLINE: cdt.VariableManager.getLocalVariable("ORDERLINE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICCCAJ = function() {
        return {
        	MSGID: "ICCCAJ",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	INITIAL: "INITIAL",
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	U_OF_M: cdt.VariableManager.getLocalVariable("U_OF_M"),
	CONV: cdt.VariableManager.getLocalVariable("CONV"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	CRED_ACTNUM: cdt.VariableManager.getLocalVariable("CRED_ACTNUM"),
	CST_CTR: cdt.VariableManager.getLocalVariable("CST_CTR"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICCCAR = function() {
        return {
        	MSGID: "ICCCAR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	INITIAL: "RECOUNT",
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	U_OF_M: cdt.VariableManager.getLocalVariable("U_OF_M"),
	CONV: cdt.VariableManager.getLocalVariable("CONV"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	CRED_ACTNUM: cdt.VariableManager.getLocalVariable("CRED_ACTNUM"),
	CST_CTR: cdt.VariableManager.getLocalVariable("CST_CTR"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICCRPT = function() {
        return {
        	MSGID: "ICCRPT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CNT_DATE: cdt.VariableManager.getLocalVariable("CNT_DATE"),
	TXT_PTR: cdt.VariableManager.getLocalVariable("TXT_PTR"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	TO_ITEM: cdt.VariableManager.getLocalVariable("TO_ITEM"),
	FR_LOC: cdt.VariableManager.getLocalVariable("FR_LOC"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TO_LOC"),
	FR_SITE: cdt.VariableManager.getLocalVariable("FR_SITE"),
	TO_SITE: cdt.VariableManager.getLocalVariable("TO_SITE"),
	FEATURES: cdt.VariableManager.getLocalVariable("FEATURES"),
	SHOW_INIT: cdt.VariableManager.getLocalVariable("SHOW_INIT"),
	SHOW_RECNT: cdt.VariableManager.getLocalVariable("SHOW_RECNT"),
	SHOW_ERR: cdt.VariableManager.getLocalVariable("SHOW_ERR"),
	OUTPUT: cdt.VariableManager.getLocalVariable("OUTPUT"),
	BATCH_ID: cdt.VariableManager.getLocalVariable("BATCH_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICDLAJ = function() {
        return {
        	MSGID: "ICDLAJ",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICLDMT = function() {
        return {
        	MSGID: "ICLDMT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	EXP_DATE: cdt.VariableManager.getLocalVariable("EXP_DATE"),
	GRADE: cdt.VariableManager.getLocalVariable("GRADE"),
	ASSAY: cdt.VariableManager.getLocalVariable("ASSAY"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICLOLS = function() {
        return {
        	MSGID: "ICLOLS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	FR_SITE: cdt.VariableManager.getLocalVariable("FR_SITE"),
	FR_LOC: cdt.VariableManager.getLocalVariable("FR_LOC"),
	FR_LOT_SER: cdt.VariableManager.getLocalVariable("FR_LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	TO_SITE: cdt.VariableManager.getLocalVariable("TO_SITE"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TO_LOC"),
	TO_LOT_SER: cdt.VariableManager.getLocalVariable("TO_LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	TO_LOT_SER_REF: cdt.VariableManager.getLocalVariable("TO_LOT_SER_REF"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	ST_FLAG: cdt.VariableManager.getLocalVariable("ST_FLAG"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICLOTM = function() {
        return {
        	MSGID: "ICLOT_SERM",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	FR_ITEM: cdt.VariableManager.getLocalVariable("FR_ITEM"),
	TO_ITEM: cdt.VariableManager.getLocalVariable("TO_ITEM"),
	FR_LINE: cdt.VariableManager.getLocalVariable("FR_LINE"),
	TO_LINE: cdt.VariableManager.getLocalVariable("TO_LINE"),
	FR_SUPPL: cdt.VariableManager.getLocalVariable("FR_SUPPL"),
	TO_SUPPL: cdt.VariableManager.getLocalVariable("TO_SUPPL"),
	ABC_CLAS: cdt.VariableManager.getLocalVariable("ABC_CLAS"),
	TO_ABC: cdt.VariableManager.getLocalVariable("TO_ABC"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	FR_SITE: cdt.VariableManager.getLocalVariable("FR_SITE"),
	FR_LOC: cdt.VariableManager.getLocalVariable("FR_LOC"),
	TO_SITE: cdt.VariableManager.getLocalVariable("TO_SITE"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TO_LOC"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DIF_STAT: cdt.VariableManager.getLocalVariable("DIF_STAT"),
	ZERO_HND: cdt.VariableManager.getLocalVariable("ZERO_HND"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICLOTR = function() {
        return {
        	MSGID: "ICLOTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	FR_SITE: cdt.VariableManager.getLocalVariable("FR_SITE"),
	FR_LOC: cdt.VariableManager.getLocalVariable("FR_LOC"),
	FR_LOT_SER: cdt.VariableManager.getLocalVariable("FR_LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	TO_SITE: cdt.VariableManager.getLocalVariable("TO_SITE"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TO_LOC"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	FR_REF: cdt.VariableManager.getLocalVariable("FR_REF"),
	ORDER: cdt.VariableManager.getLocalVariable("ORDER"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICLOTR_FULL = function() {
        return {
        	MSGID: "ICLOT_SERR_FULL",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	FR_SITE: cdt.VariableManager.getLocalVariable("FR_SITE"),
	FR_LOC: cdt.VariableManager.getLocalVariable("FR_LOC"),
	FR_LOT_SER: cdt.VariableManager.getLocalVariable("FR_LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	TO_SITE: cdt.VariableManager.getLocalVariable("TO_SITE"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TO_LOC"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	FR_REF: cdt.VariableManager.getLocalVariable("FR_REF"),
	ORDER: cdt.VariableManager.getLocalVariable("ORDER"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICRCPR = function() {
        return {
        	MSGID: "ICRCPR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	ILBL_ST: cdt.VariableManager.getLocalVariable("ILBL_ST"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	QTY_ONLB: cdt.VariableManager.getLocalVariable("QTY_ONLB"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICREND = function() {
        return {
        	MSGID: "ICREND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	ORDERLINE: cdt.VariableManager.getLocalVariable("ORDERLINE"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	ADDR: cdt.VariableManager.getLocalVariable("ADDR"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DR_ACTNUM: cdt.VariableManager.getLocalVariable("DR_ACTNUM"),
	CST_CTR: cdt.VariableManager.getLocalVariable("CST_CTR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICRSRC = function() {
        return {
        	MSGID: "ICRSRC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICRSTR = function() {
        return {
        	MSGID: "ICRSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICSORC = function() {
        return {
        	MSGID: "ICSORC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICUNBE = function() {
        return {
        	MSGID: "ICUNBE",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICUNIS = function() {
        return {
        	MSGID: "ICUNIS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ICUNRC = function() {
        return {
        	MSGID: "ICUNRC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ILABEL = function() {
        return {
        	MSGID: "ILABEL",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DEVICE: cdt.VariableManager.getGlobalVariable("DEVICE"),
	ILABEL: cdt.VariableManager.getLocalVariable("ILABEL"),
	TYPE: cdt.VariableManager.getLocalVariable("ITYPE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	ISTATUS: cdt.VariableManager.getLocalVariable("ISTATUS"),
	NO_OF_LABELS: cdt.VariableManager.getLocalVariable("iNO_OF_LABELS"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ILMBLD = function() {
        return {
        	MSGID: "ILMBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	PALLET: cdt.VariableManager.getLocalVariable("PALLET"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ILMEND = function() {
        return {
        	MSGID: "ILMEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	LBL_TYPE: cdt.VariableManager.getLocalVariable("LBL_TYPE"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	PRT_FLAG: cdt.VariableManager.getLocalVariable("PRT_FLAG"),
	PALLET: cdt.VariableManager.getLocalVariable("PALLET"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	ILBLDOPT: cdt.VariableManager.getLocalVariable("ILBLDOPT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ILMRMB = function() {
        return {
        	MSGID: "ILMRMB",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	MMILBLSR: cdt.VariableManager.getLocalVariable("MMILBLSR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ILMRME = function() {
        return {
        	MSGID: "ILMRME",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	LBL_TYPE: cdt.VariableManager.getLocalVariable("LBL_TYPE"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	PRT_FLAG: cdt.VariableManager.getLocalVariable("PRT_FLAG"),
	MMILBLSR: cdt.VariableManager.getLocalVariable("MMILBLSR"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ILMRMS = function() {
        return {
        	MSGID: "ILMRMS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	MMILBLSR: cdt.VariableManager.getLocalVariable("MMILBLSR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ILMSTR = function() {
        return {
        	MSGID: "ILMSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ILOCMT = function() {
        return {
        	MSGID: "ILOCMT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DESC: cdt.VariableManager.getLocalVariable("DESC"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	DATE: cdt.VariableManager.getLocalVariable("DATE"),
	PERM: cdt.VariableManager.getLocalVariable("PERM"),
	TYPE: cdt.VariableManager.getLocalVariable("TYPE"),
	S_ITEM: cdt.VariableManager.getLocalVariable("S_ITEM"),
	S_LOT: cdt.VariableManager.getLocalVariable("S_LOT"),
	CAPACITY: cdt.VariableManager.getLocalVariable("CAPACITY"),
	CAPACITYUM: cdt.VariableManager.getLocalVariable("CAPACITYUM"),
	RESERVED: cdt.VariableManager.getLocalVariable("RESERVED"),
	RGRhs1: ""
        }
    };
    
    

        msg.ISOEND = function() {
        return {
        	MSGID: "ISOEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	ORDERLINE: cdt.VariableManager.getLocalVariable("ORDERLINE"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	ADDR: cdt.VariableManager.getLocalVariable("ADDR"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	EF_DATE2: cdt.VariableManager.getLocalVariable("EF_DATE2"),
	DR_ACTNUM: cdt.VariableManager.getLocalVariable("DR_ACTNUM"),
	CST_CTR: cdt.VariableManager.getLocalVariable("CST_CTR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.ISOSTR = function() {
        return {
        	MSGID: "ISOSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.KBEXEC = function() {
        return {
        	MSGID: "KBEXEC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SUP_SITE: cdt.VariableManager.getLocalVariable("SUP_SITE"),
	SUP_REF: cdt.VariableManager.getLocalVariable("SUP_REF"),
	CON_SITE: cdt.VariableManager.getLocalVariable("CON_SITE"),
	CON_REF: cdt.VariableManager.getLocalVariable("CON_REF"),
	KB_TRXTP: cdt.VariableManager.getLocalVariable("KB_TRXTP"),
	CARD_TP: cdt.VariableManager.getLocalVariable("CARD_TP"),
	KANBANID: cdt.VariableManager.getLocalVariable("KANBANID"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LABSEN = function() {
        return {
        	MSGID: "LABSEN",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DATE: cdt.VariableManager.getLocalVariable("DATE"),
	TIME: cdt.VariableManager.getLocalVariable("TIME"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	QTY_COMP: cdt.VariableManager.getLocalVariable("QTY_COMP"),
	OP_COMPL: cdt.VariableManager.getLocalVariable("OP_COMPL"),
	MV_OP: cdt.VariableManager.getLocalVariable("MV_OP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LABSIN = function() {
        return {
        	MSGID: "LABSIN",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DATE: cdt.VariableManager.getLocalVariable("DATE"),
	TIME: cdt.VariableManager.getLocalVariable("TIME"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	RSN_CODE: cdt.VariableManager.getLocalVariable("RSN_CODE"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	ACTNUM: cdt.VariableManager.getLocalVariable("ACTNUM"),
	QTY_COMP: cdt.VariableManager.getLocalVariable("QTY_COMP"),
	OP_COMPL: cdt.VariableManager.getLocalVariable("OP_COMPL"),
	MV_OP: cdt.VariableManager.getLocalVariable("MV_OP"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LABSWO = function() {
        return {
        	MSGID: "LABSWO",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ACT_DATE: cdt.VariableManager.getLocalVariable("ACT_DATE"),
	ACT_TIME: cdt.VariableManager.getLocalVariable("ACT_TIME"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	SETRUN: cdt.VariableManager.getLocalVariable("SETRUN"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	QTY_COMP: cdt.VariableManager.getLocalVariable("QTY_COMP"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OP_COMPL: cdt.VariableManager.getLocalVariable("OP_COMPL"),
	MV_OP: cdt.VariableManager.getLocalVariable("MV_OP"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LBLPRT = function() {
        return {
        	MSGID: "LBLPRT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LBL_QTY: cdt.VariableManager.getLocalVariable("LBL_QTY"),
	ILBL_ST: cdt.VariableManager.getLocalVariable("ILBL_ST"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	QTY_ONLB: cdt.VariableManager.getLocalVariable("QTY_ONLB"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LBREWO = function() {
        return {
        	MSGID: "LBREWO",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	CLK_NBR: cdt.VariableManager.getLocalVariable("CLK_NBR"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	OP_COMP: cdt.VariableManager.getLocalVariable("OP_COMP"),
	QTY_COMP: cdt.VariableManager.getLocalVariable("QTY_COMP"),
	MVNEXTOP: cdt.VariableManager.getLocalVariable("MVNEXTOP"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	RSN_CODE: cdt.VariableManager.getLocalVariable("RSN_CODE"),
	QTY_SCRAP: cdt.VariableManager.getLocalVariable("QTY_SCRAP"),
	SETRUN: cdt.VariableManager.getLocalVariable("SETRUN"),
	RGRhs1: ""
        }
    };
    
    

        msg.LBRSWO = function() {
        return {
        	MSGID: "LBRSWO",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	CLK_NBR: cdt.VariableManager.getLocalVariable("CLK_NBR"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	OP_COMP: cdt.VariableManager.getLocalVariable("OP_COMP"),
	QTY_COMP: cdt.VariableManager.getLocalVariable("QTY_COMP"),
	MVNEXTOP: cdt.VariableManager.getLocalVariable("MVNEXTOP"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	RSN_CODE: cdt.VariableManager.getLocalVariable("RSN_CODE"),
	SETRUN: cdt.VariableManager.getLocalVariable("SETRUN"),
	RGRhs1: ""
        }
    };
    
    

        msg.LDOREC = function() {
        return {
        	MSGID: "LDOREC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LDTLIL = function() {
        return {
        	MSGID: "LDTLIL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DEVICE: cdt.VariableManager.getLocalVariable("Var.DET_ALLC"),
	ILABEL: cdt.VariableManager.getLocalVariable("ILABEL"),
	TYPE: cdt.VariableManager.getLocalVariable("Var.TYPE"),
	ITEM: cdt.VariableManager.getLocalVariable("Var.ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("Var.LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("iQTY"),
	ISTATUS: cdt.VariableManager.getLocalVariable("ISTATUS"),
	NO_OF_LABELS: cdt.VariableManager.getLocalVariable("iNO_OF_LABELS"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LNITEM = function() {
        return {
        	MSGID: "LNITEM",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LNITEX = function() {
        return {
        	MSGID: "LNITEX",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	WKCTR: cdt.VariableManager.getLocalVariable("WKCTR"),
	RGRhs1: ""
        }
    };
    
    

        msg.LPOREC = function() {
        return {
        	MSGID: "LPOREC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	PO_LINE: cdt.VariableManager.getLocalVariable("PO_LINE"),
	EXP_DATE: cdt.VariableManager.getLocalVariable("EXP_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LRMREC = function() {
        return {
        	MSGID: "LRMREC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.LWOREC = function() {
        return {
        	MSGID: "LWOREC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.MLBFWO = function() {
        return {
        	MSGID: "MLBFWO",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ACT_DATE: cdt.VariableManager.getLocalVariable("ACT_DATE"),
	ACT_TIME: cdt.VariableManager.getLocalVariable("ACT_TIME"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	SETRUN: cdt.VariableManager.getLocalVariable("SETRUN"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	QTY_COMP: cdt.VariableManager.getLocalVariable("QTY_COMP"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OP_COMPL: cdt.VariableManager.getLocalVariable("OP_COMPL"),
	MV_OP: cdt.VariableManager.getLocalVariable("MV_OP"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	EMPLOYEE: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	SHIFT: cdt.VariableManager.getLocalVariable("SHIFT"),
	PAYCODE: cdt.VariableManager.getLocalVariable("PAYCODE"),
	REJECT: cdt.VariableManager.getLocalVariable("REJECT"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	STRT_SETUP: cdt.VariableManager.getLocalVariable("STRT_SETUP"),
	STRT_RUN: cdt.VariableManager.getLocalVariable("STRT_RUN"),
	STOP_RUN: cdt.VariableManager.getLocalVariable("STOP_RUN"),
	STOP_SETUP: cdt.VariableManager.getLocalVariable("STOP_SETUP"),
	DOWNTIME: cdt.VariableManager.getLocalVariable("DOWNTIME"),
	DWN_RSN: cdt.VariableManager.getLocalVariable("DWN_RSN"),
	REJ_RSN: cdt.VariableManager.getLocalVariable("REJ_RSN"),
	REJ_QTY: cdt.VariableManager.getLocalVariable("REJ_QTY"),
	COMMENTS: cdt.VariableManager.getLocalVariable("COMMENTS")
        }
    };
    
    

        msg.PINLBL = function() {
        return {
        	MSGID: "PINLBL",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	ILBL_ST: cdt.VariableManager.getLocalVariable("ILBL_ST"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	QTY_ONLB: cdt.VariableManager.getLocalVariable("QTY_ONLB"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.PINLBX = function() {
        return {
        	MSGID: "PINLBX",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	ILBL_ST: cdt.VariableManager.getLocalVariable("ILBL_ST"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	BC_PRTR: cdt.VariableManager.getLocalVariable("BC_PRTR"),
	QTY_ONLB: cdt.VariableManager.getLocalVariable("QTY_ONLB"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	BCIL_TYPE: cdt.VariableManager.getLocalVariable("BCIL_TYPE"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	OPER: cdt.VariableManager.getLocalVariable("OPER"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	SO_PO: cdt.VariableManager.getLocalVariable("SO_PO"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	SSCC: cdt.VariableManager.getLocalVariable("SSCC"),
	RFID: cdt.VariableManager.getLocalVariable("RFID"),
	RGRhs1: ""
        }
    };
    
    

        msg.PINUPD = function() {
        return {
        	MSGID: "PINUPD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	ILBL_ST: cdt.VariableManager.getLocalVariable("ILBL_ST"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	BCIL_TYPE: cdt.VariableManager.getLocalVariable("BCIL_TYPE"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	CHAR1: cdt.VariableManager.getLocalVariable("CHAR1"),
	CHAR2: cdt.VariableManager.getLocalVariable("CHAR2"),
	CHAR3: cdt.VariableManager.getLocalVariable("CHAR3"),
	DTE1: cdt.VariableManager.getLocalVariable("DTE1"),
	DTE2: cdt.VariableManager.getLocalVariable("DTE2"),
	DTE3: cdt.VariableManager.getLocalVariable("DTE3"),
	SO_PO: cdt.VariableManager.getLocalVariable("SO_PO"),
	SSCC: cdt.VariableManager.getLocalVariable("SSCC"),
	RFID: cdt.VariableManager.getLocalVariable("RFID"),
	RGRhs1: ""
        }
    };
    
    

        msg.PINUPL = function() {
        return {
        	MSGID: "PINUPD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: "",
	QTY: "",
	ILBL_ST: "",
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	BCIL_TYPE: "",
	SHIPPER: "",
	WOID: "",
	SO_JOB: "",
	PO: "",
	CHAR1: "",
	CHAR2: "",
	CHAR3: "",
	DTE1: "",
	DTE2: "",
	DTE3: "",
	SO_PO: "",
	SSCC: "",
	RFID: "",
	RGRhs1: ""
        }
    };
    
    

        msg.PITCMR = function() {
        return {
        	MSGID: "PITCMR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	TAG: cdt.VariableManager.getLocalVariable("TAG"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	U_OF_M: cdt.VariableManager.getLocalVariable("U_OF_M"),
	CONV: cdt.VariableManager.getLocalVariable("CONV"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.PITCMT = function() {
        return {
        	MSGID: "PITCMT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	TAG: cdt.VariableManager.getLocalVariable("TAG"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	U_OF_M: cdt.VariableManager.getLocalVariable("U_OF_M"),
	CONV: cdt.VariableManager.getLocalVariable("CONV"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.PORECT = function() {
        return {
        	MSGID: "PORECT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	PO_LINE: cdt.VariableManager.getLocalVariable("PO_LINE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	PACK_QTY: cdt.VariableManager.getLocalVariable("PACK_QTY"),
	EXP_DATE: cdt.VariableManager.getLocalVariable("EXP_DATE"),
	SUPP_LOT_SER: cdt.VariableManager.getLocalVariable("SUPP_LOT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	ASY_ACTIVE: cdt.VariableManager.getLocalVariable("ASY_ACTIVE"),
	GR_ACTIVE: cdt.VariableManager.getLocalVariable("GR_ACTIVE"),
	ST_ACTIVE: cdt.VariableManager.getLocalVariable("ST_ACTIVE"),
	SITE: cdt.VariableManager.getLocalVariable("SITE")
        }
    };
    
    

        msg.POREND = function() {
        return {
        	MSGID: "POREND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	PACKLIST: cdt.VariableManager.getLocalVariable("PACKLIST"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	ACTIVE: cdt.VariableManager.getLocalVariable("ACTIVE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	ASY_ACTIVE: cdt.VariableManager.getLocalVariable("ASY_ACTIVE"),
	GR_ACTIVE: cdt.VariableManager.getLocalVariable("GR_ACTIVE"),
	ST_ACTIVE: cdt.VariableManager.getLocalVariable("ST_ACTIVE"),
	SITE: cdt.VariableManager.getLocalVariable("SITE")
        }
    };
    
    

        msg.PORSTR = function() {
        return {
        	MSGID: "PORSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.PSHBLD = function() {
        return {
        	MSGID: "PSHBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.PSHEND = function() {
        return {
        	MSGID: "PSHEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.PSHSTR = function() {
        return {
        	MSGID: "PSHSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.q_TMS_MY_TASKS = function() {
        return {
        	MSGID: "q_TMS_MY_TASKS",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_REGION: cdt.VariableManager.getLocalVariable("TMS_REGION"),
	USE_QUEUE: "Y"
        }
    };
    
    

        msg.q_TMSTaskDetails = function() {
        return {
        	MSGID: "q_TMSTaskDetails",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_REGION: cdt.VariableManager.getLocalVariable("TMS_REGION"),
	USE_QUEUE: "Y",
	TMS_WAREHOUSE: cdt.VariableManager.getGlobalVariable("TMS_WAREHOUSE"),
	TMS_COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY")
        }
    };
    
    

        msg.q_TMSTasks = function() {
        return {
        	MSGID: "q_TMSTasks",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_REGION: cdt.VariableManager.getLocalVariable("TMS_REGION"),
	USE_QUEUE: "Y",
	TMS_WAREHOUSE: cdt.VariableManager.getGlobalVariable("TMS_WAREHOUSE"),
	TMS_COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY")
        }
    };
    
    

        msg.RBEEND = function() {
        return {
        	MSGID: "RBEEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WIP_SITE: cdt.VariableManager.getLocalVariable("WIP_SITE"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	ADDR: cdt.VariableManager.getLocalVariable("ADDR"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	DR_ACTNUM: cdt.VariableManager.getLocalVariable("DR_ACTNUM"),
	CST_CTR: cdt.VariableManager.getLocalVariable("CST_CTR"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.RBESTR = function() {
        return {
        	MSGID: "RBESTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.RCRP13 = function() {
        return {
        	MSGID: "RCRP13",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SH_FR_THRU: cdt.VariableManager.getLocalVariable("SH_FR_THRU"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	SH_TO_THRU: cdt.VariableManager.getLocalVariable("SH_TO_THRU"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	EN_SHPPR: cdt.VariableManager.getLocalVariable("EN_SHPPR"),
	IN_MV_CD: cdt.VariableManager.getLocalVariable("IN_MV_CD"),
	MV_CD_TO: cdt.VariableManager.getLocalVariable("MV_CD_TO"),
	FORMAT: cdt.VariableManager.getLocalVariable("FORMAT"),
	FORMAT_TO: cdt.VariableManager.getLocalVariable("FORMAT_TO"),
	CARRIER_FR: cdt.VariableManager.getLocalVariable("CARRIER_FR"),
	CARRIER_TO: cdt.VariableManager.getLocalVariable("CARRIER_TO"),
	PRINT_PS: cdt.VariableManager.getLocalVariable("PRINT_PS"),
	INCL_PS: cdt.VariableManager.getLocalVariable("INCL_PS"),
	FEATURES: cdt.VariableManager.getLocalVariable("FEATURES"),
	SHIP_NBR: cdt.VariableManager.getLocalVariable("SHIP_NBR"),
	SHP_SEQ: cdt.VariableManager.getLocalVariable("SHP_SEQ"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	PICK_REM: cdt.VariableManager.getLocalVariable("PICK_REM"),
	PRT_SODT: cdt.VariableManager.getLocalVariable("PRT_SODT"),
	DSP_SOQT: cdt.VariableManager.getLocalVariable("DSP_SOQT"),
	TXT_PTR: cdt.VariableManager.getLocalVariable("TXT_PTR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.RECDEF = function() {
        return {
        	MSGID: "RECDEF",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	OP_COMPL: cdt.VariableManager.getLocalVariable("OP_COMPL"),
	MV_OP: cdt.VariableManager.getLocalVariable("MV_OP"),
	PRV_OP: cdt.VariableManager.getLocalVariable("PRV_OP"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	RSN_CODE: cdt.VariableManager.getLocalVariable("RSN_CODE"),
	RJCT_QTY: cdt.VariableManager.getLocalVariable("RJCT_QTY"),
	REJ_FLAG: cdt.VariableManager.getLocalVariable("REJ_FLAG"),
	DEPT: cdt.VariableManager.getLocalVariable("DEPT"),
	SHIFT: cdt.VariableManager.getLocalVariable("SHIFT"),
	EARN_CD: cdt.VariableManager.getLocalVariable("EARN_CD"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE"),
	REW_FLAG: cdt.VariableManager.getLocalVariable("REW_FLAG"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	ST_SETUP: cdt.VariableManager.getLocalVariable("ST_SETUP"),
	STRT_RUN: cdt.VariableManager.getLocalVariable("STRT_RUN"),
	STOP_RUN: cdt.VariableManager.getLocalVariable("STOP_RUN"),
	DOWNTIME: cdt.VariableManager.getLocalVariable("DOWNTIME"),
	DT_RSN: cdt.VariableManager.getLocalVariable("DT_RSN"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	COMMENTS: cdt.VariableManager.getLocalVariable("COMMENTS"),
	REW_QTY: cdt.VariableManager.getLocalVariable("REW_QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.REPKIS = function() {
        return {
        	MSGID: "REPKIS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	PICK_NUM: cdt.VariableManager.getLocalVariable("PICK_NUM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SEQ: cdt.VariableManager.getLocalVariable("SEQ"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR")
        }
    };
    
    

        msg.RMAEND = function() {
        return {
        	MSGID: "RMAEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	SVC_CHG: cdt.VariableManager.getLocalVariable("SVC_CHG"),
	FRT_CHG: cdt.VariableManager.getLocalVariable("FRT_CHG"),
	SPCL_CHG: cdt.VariableManager.getLocalVariable("SPCL_CHG"),
	SHIP_VIA: cdt.VariableManager.getLocalVariable("SHIP_VIA"),
	SHP_DATE: cdt.VariableManager.getLocalVariable("SHP_DATE"),
	BOL: cdt.VariableManager.getLocalVariable("BOL"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	INV_NO: cdt.VariableManager.getLocalVariable("INV_NO"),
	RDY_INVC: cdt.VariableManager.getLocalVariable("RDY_INVC"),
	INV_FLAG: cdt.VariableManager.getLocalVariable("INV_FLAG"),
	FRT_MINW: cdt.VariableManager.getLocalVariable("FRT_MINW"),
	FRT_TERM: cdt.VariableManager.getLocalVariable("FRT_TERM"),
	CLC_FRT: cdt.VariableManager.getLocalVariable("CLC_FRT"),
	DISP_WT: cdt.VariableManager.getLocalVariable("DISP_WT"),
	FRT_CLAS: cdt.VariableManager.getLocalVariable("FRT_CLAS"),
	FRT_WT: cdt.VariableManager.getLocalVariable("FRT_WT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.RMASHB = function() {
        return {
        	MSGID: "RMASHB",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	ORDERLINE: cdt.VariableManager.getLocalVariable("ORDERLINE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	CNCL_BO: cdt.VariableManager.getLocalVariable("CNCL_BO"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.RMASHE = function() {
        return {
        	MSGID: "RMASHE",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	SHIP_ALC: cdt.VariableManager.getLocalVariable("SHIP_ALC"),
	SHIP_PCK: cdt.VariableManager.getLocalVariable("SHIP_PCK"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	SVC_CHG: cdt.VariableManager.getLocalVariable("SVC_CHG"),
	FRT_CHG: cdt.VariableManager.getLocalVariable("FRT_CHG"),
	SPCL_CHG: cdt.VariableManager.getLocalVariable("SPCL_CHG"),
	SHIP_VIA: cdt.VariableManager.getLocalVariable("SHIP_VIA"),
	SHP_DATE: cdt.VariableManager.getLocalVariable("SHP_DATE"),
	BOL: cdt.VariableManager.getLocalVariable("BOL"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	INV_NO: cdt.VariableManager.getLocalVariable("INV_NO"),
	RDY_INVC: cdt.VariableManager.getLocalVariable("RDY_INVC"),
	INV_FLAG: cdt.VariableManager.getLocalVariable("INV_FLAG"),
	FRT_MINW: cdt.VariableManager.getLocalVariable("FRT_MINW"),
	FRT_TERM: cdt.VariableManager.getLocalVariable("FRT_TERM"),
	CLC_FRT: cdt.VariableManager.getLocalVariable("CLC_FRT"),
	DISP_WT: cdt.VariableManager.getLocalVariable("DISP_WT"),
	FRT_CLAS: cdt.VariableManager.getLocalVariable("FRT_CLAS"),
	FRT_WT: cdt.VariableManager.getLocalVariable("FRT_WT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.RMASHS = function() {
        return {
        	MSGID: "RMASHS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.RMASTR = function() {
        return {
        	MSGID: "RMASTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.RSPORC = function() {
        return {
        	MSGID: "RSPORC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SUPPLIER: cdt.VariableManager.getLocalVariable("SUPPLIER"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM")
        }
    };
    
    

        msg.SFOPTR = function() {
        return {
        	MSGID: "SFOPTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHCBLD = function() {
        return {
        	MSGID: "SHCBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	CNT_ITEM: cdt.VariableManager.getLocalVariable("CNT_ITEM"),
	CNT_LOC: cdt.VariableManager.getLocalVariable("CNT_LOC"),
	CNT_SITE: cdt.VariableManager.getLocalVariable("CNT_SITE"),
	CNT_QTY: cdt.VariableManager.getLocalVariable("CNT_QTY"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHCEND = function() {
        return {
        	MSGID: "SHCEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHCSTR = function() {
        return {
        	MSGID: "SHCSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHGATE = function() {
        return {
        	MSGID: "SHGATE",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SHIP_TYPE: cdt.VariableManager.getLocalVariable("SHIP_TYPE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	PART: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	ORDER: cdt.VariableManager.getLocalVariable("ORDER"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	SHIP_PAR: cdt.VariableManager.getLocalVariable("SHIP_PAR"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	QTY_UM: cdt.VariableManager.getLocalVariable("QTY_UM"),
	WGHT_UM: cdt.VariableManager.getLocalVariable("WGHT_UM"),
	VOL: cdt.VariableManager.getLocalVariable("VOL"),
	VOL_UM: cdt.VariableManager.getLocalVariable("VOL_UM"),
	SHIP_VIA: cdt.VariableManager.getLocalVariable("SHIP_VIA"),
	FOB_PRT: cdt.VariableManager.getLocalVariable("FOB_PRT"),
	CAR_REF: cdt.VariableManager.getLocalVariable("CAR_REF"),
	TRNS_MOD: cdt.VariableManager.getLocalVariable("TRNS_MOD"),
	VEH_REF: cdt.VariableManager.getLocalVariable("VEH_REF"),
	KANBANID: cdt.VariableManager.getLocalVariable("KANBANID"),
	CUST_JOB: cdt.VariableManager.getLocalVariable("CUST_JOB"),
	CUST_SEQ: cdt.VariableManager.getLocalVariable("CUST_SEQ"),
	CUST_DOCK: cdt.VariableManager.getLocalVariable("CUST_DOCK"),
	LINE_FEED: cdt.VariableManager.getLocalVariable("LINE_FEED"),
	SEQ_STAT: cdt.VariableManager.getLocalVariable("SEQ_STAT"),
	CUST_REF: cdt.VariableManager.getLocalVariable("CUST_REF"),
	MODELYR: cdt.VariableManager.getLocalVariable("MODELYR"),
	SHIP_ID: cdt.VariableManager.getLocalVariable("SHIP_ID"),
	WGHT: cdt.VariableManager.getLocalVariable("WGHT"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	USERID: cdt.VariableManager.getLocalVariable("Gvr.USERID"),
	NET_WGHT: cdt.VariableManager.getLocalVariable("NET_WGHT")
        }
    };
    
    

        msg.SHGEND = function() {
        return {
        	MSGID: "SHGEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	CEQUENT_LOC: cdt.VariableManager.getGlobalVariable("DOCK_LOC")
        }
    };
    
    

        msg.SHGSTR = function() {
        return {
        	MSGID: "SHGSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	RGRhs1: ""
        }
    };
    
    

        msg.SHLRPR = function() {
        return {
        	MSGID: "SHLRPR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	SUB_CON: cdt.VariableManager.getLocalVariable("SUB_CON"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHVBLD = function() {
        return {
        	MSGID: "SHVBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	SCAC: cdt.VariableManager.getLocalVariable("SCAC"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHVEND = function() {
        return {
        	MSGID: "SHVEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	SHIP_TYPE: cdt.VariableManager.getLocalVariable("SHIP_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHVSTR = function() {
        return {
        	MSGID: "SHVSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHWBDC = function() {
        return {
        	MSGID: "SHWBDC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHWBDE = function() {
        return {
        	MSGID: "SHWBDE",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHWBDS = function() {
        return {
        	MSGID: "SHWBDS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHWBL2 = function() {
        return {
        	MSGID: "SHWBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	CONT_SER: cdt.VariableManager.getLocalVariable("BLANK"),
	CNT_ITEM: cdt.VariableManager.getLocalVariable("BLANK"),
	CNT_SITE: cdt.VariableManager.getLocalVariable("BLANK"),
	CNT_LOC: cdt.VariableManager.getLocalVariable("BLANK"),
	CNT_QTY: cdt.VariableManager.getLocalVariable("BLANK"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY_SHIP"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("SV_LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	RAN_KAN: cdt.VariableManager.getLocalVariable("RAN_KAN"),
	ILBL_SCN: cdt.VariableManager.getLocalVariable("ILBL_SCN"),
	PICK_REM: cdt.VariableManager.getLocalVariable("PICK_REM"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getLocalVariable("DOMAIN"),
	CONF_ITEM: cdt.VariableManager.getLocalVariable("CONF_ITEM")
        }
    };
    
    

        msg.SHWBLD = function() {
        return {
        	MSGID: "SHWBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	CNT_ITEM: cdt.VariableManager.getLocalVariable("CNT_ITEM"),
	CNT_SITE: cdt.VariableManager.getLocalVariable("CNT_SITE"),
	CNT_LOC: cdt.VariableManager.getLocalVariable("CNT_LOC"),
	CNT_QTY: cdt.VariableManager.getLocalVariable("CNT_QTY"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	RAN_KAN: cdt.VariableManager.getLocalVariable("RAN_KAN"),
	ILBL_SCN: cdt.VariableManager.getLocalVariable("ILBL_SCN"),
	PICK_REM: cdt.VariableManager.getLocalVariable("PICK_REM"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHWEND = function() {
        return {
        	MSGID: "SHWEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	IN_MV_CD: cdt.VariableManager.getLocalVariable("IN_MV_CD"),
	CARRIER: cdt.VariableManager.getLocalVariable("CARRIER"),
	SHIP_VIA: cdt.VariableManager.getLocalVariable("SHIP_VIA"),
	FOB_PRT: cdt.VariableManager.getLocalVariable("FOB_PRT"),
	TRNS_MOD: cdt.VariableManager.getLocalVariable("TRNS_MOD"),
	CAR_REF: cdt.VariableManager.getLocalVariable("CAR_REF"),
	VEH_REF: cdt.VariableManager.getLocalVariable("VEH_REF"),
	FORMAT: cdt.VariableManager.getLocalVariable("FORMAT"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	PRE_SHIP: cdt.VariableManager.getLocalVariable("PRE_SHIP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SHWENX = function() {
        return {
        	MSGID: "SHWENX",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	IN_MV_CD: cdt.VariableManager.getLocalVariable("IN_MV_CD"),
	CARRIER: cdt.VariableManager.getLocalVariable("CARRIER"),
	SHIP_VIA: cdt.VariableManager.getLocalVariable("SHIP_VIA"),
	FOB_PRT: cdt.VariableManager.getLocalVariable("FOB_PRT"),
	TRNS_MOD: cdt.VariableManager.getLocalVariable("TRNS_MOD"),
	CAR_REF: cdt.VariableManager.getLocalVariable("CAR_REF"),
	VEH_REF: cdt.VariableManager.getLocalVariable("VEH_REF"),
	FORMAT: cdt.VariableManager.getLocalVariable("FORMAT"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	PRE_SHIP: cdt.VariableManager.getLocalVariable("PRE_SHIP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	PRINT_BOL: cdt.VariableManager.getLocalVariable("PRINT_BOL"),
	RGRhs1: ""
        }
    };
    
    

        msg.SHWSTR = function() {
        return {
        	MSGID: "SHWSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SLRPSH = function() {
        return {
        	MSGID: "SLRPSH",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SUB_CON: cdt.VariableManager.getLocalVariable("SUB_CON"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SMABLD = function() {
        return {
        	MSGID: "SMABLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	PICK_QTY: cdt.VariableManager.getLocalVariable("PICK_QTY"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SMAEND = function() {
        return {
        	MSGID: "SMAEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	ALLC_DAY: cdt.VariableManager.getLocalVariable("ALLC_DAY"),
	ALLC_AVL: cdt.VariableManager.getLocalVariable("ALLC_AVL"),
	DET_ALLC: cdt.VariableManager.getLocalVariable("DET_ALLC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SMASTR = function() {
        return {
        	MSGID: "SMASTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SOSBLD = function() {
        return {
        	MSGID: "SOSBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	ORDERLINE: cdt.VariableManager.getLocalVariable("ORDERLINE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	CNCL_BO: cdt.VariableManager.getLocalVariable("CNCL_BO"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SOSEND = function() {
        return {
        	MSGID: "SOSEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	SHIP_ALC: cdt.VariableManager.getLocalVariable("SHIP_ALC"),
	SHIP_PCK: cdt.VariableManager.getLocalVariable("SHIP_PCK"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	SVC_CHG: cdt.VariableManager.getLocalVariable("SVC_CHG"),
	FRT_CHG: cdt.VariableManager.getLocalVariable("FRT_CHG"),
	SPCL_CHG: cdt.VariableManager.getLocalVariable("SPCL_CHG"),
	SHIP_VIA: cdt.VariableManager.getLocalVariable("SHIP_VIA"),
	SHP_DATE: cdt.VariableManager.getLocalVariable("SHP_DATE"),
	BOL: cdt.VariableManager.getLocalVariable("BOL"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	INV_NO: cdt.VariableManager.getLocalVariable("INV_NO"),
	RDY_INVC: cdt.VariableManager.getLocalVariable("RDY_INVC"),
	INV_FLAG: cdt.VariableManager.getLocalVariable("INV_FLAG"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	SAL_TYPE: cdt.VariableManager.getLocalVariable("SAL_TYPE"),
	OVERSHIP: cdt.VariableManager.getLocalVariable("OVERSHIP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SOSSTR = function() {
        return {
        	MSGID: "SOSSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SSMBLD = function() {
        return {
        	MSGID: "SSMBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SO_LINE: cdt.VariableManager.getLocalVariable("SO_LINE"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SSMEND = function() {
        return {
        	MSGID: "SSMEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	IN_MV_CD: cdt.VariableManager.getLocalVariable("IN_MV_CD"),
	CARRIER: cdt.VariableManager.getLocalVariable("CARRIER"),
	SHIP_VIA: cdt.VariableManager.getLocalVariable("SHIP_VIA"),
	FOB_PRT: cdt.VariableManager.getLocalVariable("FOB_PRT"),
	TRNS_MOD: cdt.VariableManager.getLocalVariable("TRNS_MOD"),
	CAR_REF: cdt.VariableManager.getLocalVariable("CAR_REF"),
	VEH_REF: cdt.VariableManager.getLocalVariable("VEH_REF"),
	FORMAT: cdt.VariableManager.getLocalVariable("FORMAT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.SSMSTR = function() {
        return {
        	MSGID: "SSMSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.t_TMS_Cancel_Task = function() {
        return {
        	MSGID: "t_TMS_Cancel_Task",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY"),
	WHS: cdt.VariableManager.getGlobalVariable("TMS_WHS"),
	TMS_BIN: cdt.VariableManager.getLocalVariable("TMS_BIN"),
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE"),
	TMS_TASK_TYPE2: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE2"),
	TMS_ITEM: cdt.VariableManager.getLocalVariable("TMS_ITEM")
        }
    };
    
    

        msg.t_TMS_Cancel_TaskByBin = function() {
        return {
        	MSGID: "t_TMS_Cancel_TaskByBin",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	TMS_USERID: cdt.VariableManager.getLocalVariable("TMS_USERID"),
	COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY"),
	WHS: cdt.VariableManager.getGlobalVariable("TMS_WHS"),
	TMS_BIN: cdt.VariableManager.getLocalVariable("TMS_BIN"),
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE"),
	TMS_TASK_TYPE2: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE2")
        }
    };
    
    

        msg.t_TMS_Cancel_TaskByItem = function() {
        return {
        	MSGID: "t_TMS_Cancel_TaskByItem",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	TMS_USERID: cdt.VariableManager.getLocalVariable("TMS_USERID"),
	COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY"),
	WHS: cdt.VariableManager.getGlobalVariable("TMS_WHS"),
	TMS_ITEM: cdt.VariableManager.getLocalVariable("TMS_ITEM"),
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE"),
	TMS_TASK_TYPE2: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE2")
        }
    };
    
    

        msg.t_TMS_Create_Task = function() {
        return {
        	MSGID: "t_TMS_Create_Task",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	TMS_COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY"),
	TMS_WAREHOUSE: cdt.VariableManager.getGlobalVariable("TMS_WAREHOUSE"),
	TMS_BIN: cdt.VariableManager.getLocalVariable("TMS_BIN"),
	TMS_FROM_BIN: cdt.VariableManager.getLocalVariable("TMS_FROM_BIN"),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_REGION: cdt.VariableManager.getLocalVariable("TMS_REGION"),
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE"),
	RGRhs1: "",
	TMS_TO_BIN: cdt.VariableManager.getLocalVariable("TMS_TO_BIN"),
	TMS_STATUS: "UNASSIGNED",
	TMS_SERIAL: cdt.VariableManager.getLocalVariable("TMS_SERIAL"),
	TMS_DESCRIPTION: "Putaway from Stage Location",
	TMS_REFERENCE: cdt.VariableManager.getLocalVariable("TMS_REFERENCE"),
	TMS_PRIORITY: cdt.VariableManager.getLocalVariable("TMS_PRIORITY"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	TO_BIN: cdt.VariableManager.getLocalVariable("TO_BIN")
        }
    };
    
    

        msg.t_TMSCreateReplenishmentTask = function() {
        return {
        	MSGID: "t_TMSCreateReplenishmentTask",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	COMPANY: cdt.VariableManager.getLocalVariable("COMPANY"),
	WHS: cdt.VariableManager.getLocalVariable("WHS"),
	FR_LOC: cdt.VariableManager.getLocalVariable("FR_LOC"),
	REGION1: cdt.VariableManager.getLocalVariable("REGION1"),
	URGENCY: cdt.VariableManager.getLocalVariable("URGENCY"),
	TYPE: cdt.VariableManager.getLocalVariable("TYPE"),
	UNIT: cdt.VariableManager.getLocalVariable("UNIT"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TO_LOC")
        }
    };
    
    

        msg.t_TMSStatusComplete = function() {
        return {
        	MSGID: "t_TMSStatusComplete",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	TMS_TASK_ID: cdt.VariableManager.getLocalVariable("TMS_TASK_ID"),
	TMS_USER_ID: cdt.VariableManager.getGlobalVariable("TMS_USER_ID"),
	RGRhs1: ""
        }
    };
    
    

        msg.t_TMSStatusReject = function() {
        return {
        	MSGID: "t_TMSStatusReject",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	TMS_TASK_ID: cdt.VariableManager.getLocalVariable("TMS_TASK_ID"),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_REASON: cdt.VariableManager.getLocalVariable("TMS_REASON"),
	RGRhs1: " "
        }
    };
    
    

        msg.t_TMSStatusStart = function() {
        return {
        	MSGID: "t_TMSStatusStart",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	TMS_TASK_ID: cdt.VariableManager.getLocalVariable("TMS_TASK_ID"),
	TMS_USER_ID: cdt.VariableManager.getGlobalVariable("TMS_USER_ID"),
	RGRhs1: ""
        }
    };
    
    

        msg.t_TMSTaskOFF = function() {
        return {
        	MSGID: "t_TMSTaskOFF",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	TMS_USER_ID: cdt.VariableManager.getGlobalVariable("TMS_USER_ID"),
	RGRhs1: ""
        }
    };
    
    

        msg.t_TMSTaskON = function() {
        return {
        	MSGID: "t_TMSTaskON",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_REGION: cdt.VariableManager.getLocalVariable("TMS_REGION"),
	TMS_COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY"),
	TMS_WAREHOUSE: cdt.VariableManager.getGlobalVariable("TMS_WAREHOUSE"),
	TMS_IP_ADD: cdt.VariableManager.getLocalVariable("TMS_IP_ADD"),
	RGRhs1: ""
        }
    };
    
    

        msg.til_AddLotSerial_Intelli = function() {
        return {
        	MSGID: "til_AddLotSerial_Intelli",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	COMPANY: cdt.VariableManager.getLocalVariable("COMPANY"),
	COPIES: cdt.VariableManager.getLocalVariable("COPIES"),
	OPERATOR: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	FORMAT: cdt.VariableManager.getLocalVariable("FORMAT"),
	QUEUE: cdt.VariableManager.getLocalVariable("QUEUE"),
	PART: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT: cdt.VariableManager.getLocalVariable("LOT_SER"),
	MHU: cdt.VariableManager.getLocalVariable("MHU"),
	QTY_1: cdt.VariableManager.getLocalVariable("QTY_PROC"),
	UOM_1: cdt.VariableManager.getLocalVariable("UOM_1"),
	INT_STAT: cdt.VariableManager.getLocalVariable("INT_STAT"),
	INT_SER: cdt.VariableManager.getLocalVariable("INT_SER"),
	INT_ACTION: cdt.VariableManager.getLocalVariable("INT_ACTION"),
	INT_MASTER: cdt.VariableManager.getLocalVariable("INT_MASTER"),
	INT_PRINT: cdt.VariableManager.getLocalVariable("INT_PRINT"),
	DESP_NOTE: cdt.VariableManager.getLocalVariable("DESP_NOTE"),
	IN_PROCESS: cdt.VariableManager.getLocalVariable("IN_PROCESS"),
	JOB: cdt.VariableManager.getLocalVariable("JOB"),
	RGRhs1: ""
        }
    };
    
    

        msg.til_Update_Intellilabel = function() {
        return {
        	RGRhs1: "",
	MSGID: "til_Update_Intellilabel",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	PROJECT_ID: cdt.VariableManager.getLocalVariable("PROJECT_ID"),
	ACTIVITY_SEQ: cdt.VariableManager.getLocalVariable("ACTIVITY_SEQ"),
	CONFIGURATION_ID: cdt.VariableManager.getLocalVariable("CONFIGURATION_ID"),
	ENG_CHG_LEVEL: cdt.VariableManager.getLocalVariable("ENG_CHG_LEVEL"),
	EXPIRATION_DATE: cdt.VariableManager.getLocalVariable("EXPIRATION_DATE"),
	WAIV_DEV_REJ_NO: cdt.VariableManager.getLocalVariable("WAIV_DEV_REJ_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	INTELLILABEL: cdt.VariableManager.getLocalVariable("INTELLILABEL"),
	UNIT_CODE: cdt.VariableManager.getLocalVariable("UNIT_CODE"),
	PART_NO: cdt.VariableManager.getLocalVariable("PART_NO"),
	LOT_BATCH_NO: cdt.VariableManager.getLocalVariable("LOT_BATCH_NO"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	QTY: cdt.VariableManager.getLocalVariable("QTY")
        }
    };
    
    

        msg.til_Update_IntelliLabel = function() {
        return {
        	MSGID: "til_Update_IntelliLabel",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	COMPANY: cdt.VariableManager.getLocalVariable("COMPANY"),
	COPIES: cdt.VariableManager.getLocalVariable("COPIES"),
	OPERATOR: cdt.VariableManager.getLocalVariable("OPERATOR"),
	FORMAT: cdt.VariableManager.getLocalVariable("FORMAT"),
	QUEUE: cdt.VariableManager.getLocalVariable("QUEUE"),
	PART: cdt.VariableManager.getLocalVariable("PART"),
	LOT: cdt.VariableManager.getLocalVariable("LOT"),
	MHU: cdt.VariableManager.getLocalVariable("MHU"),
	QTY_1: cdt.VariableManager.getLocalVariable("QTY_1"),
	UOM_1: cdt.VariableManager.getLocalVariable("UOM_1"),
	INT_STAT: cdt.VariableManager.getLocalVariable("INT_STAT"),
	INT_SER: cdt.VariableManager.getLocalVariable("INT_SER"),
	INT_ACTION: cdt.VariableManager.getLocalVariable("INT_ACTION"),
	INT_MASTER: cdt.VariableManager.getLocalVariable("INT_MASTER"),
	INT_PRINT: cdt.VariableManager.getLocalVariable("INT_PRINT"),
	DESP_NOTE: cdt.VariableManager.getLocalVariable("DESP_NOTE"),
	IN_PROCESS: cdt.VariableManager.getLocalVariable("IN_PROCESS"),
	RGRhs1: " "
        }
    };
    
    

        msg.til_Update_Intellilabel_BKFL = function() {
        return {
        	RGRhs1: "",
	MSGID: "til_Update_Intellilabel",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	INT_SER: cdt.VariableManager.getLocalVariable("INT_SER"),
	OPERATOR: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	ISTATUS: cdt.VariableManager.getLocalVariable("STATUS")
        }
    };
    
    

        msg.til_Update_Intellilabel_BKFL_CMP1 = function() {
        return {
        	RGRhs1: "",
	MSGID: "til_Update_Intellilabel",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	ISSUE_INTELLI: cdt.VariableManager.getLocalVariable("INTELLILABEL"),
	INT_SER: cdt.VariableManager.getLocalVariable("INTELLILABEL_CMP1"),
	OPERATOR: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	ISTATUS: "Issued"
        }
    };
    
    

        msg.til_Update_Intellilabel_BKFL_CMP2 = function() {
        return {
        	RGRhs1: "",
	MSGID: "til_Update_Intellilabel",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	ISSUE_INTELLI: cdt.VariableManager.getLocalVariable("INTELLILABEL"),
	INT_SER: cdt.VariableManager.getLocalVariable("INTELLILABEL_CMP2"),
	OPERATOR: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	ISTATUS: "Issued"
        }
    };
    
    

        msg.til_Update_Intellilabel_BKFL_CMP3 = function() {
        return {
        	RGRhs1: "",
	MSGID: "til_Update_Intellilabel",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	ISSUE_INTELLI: cdt.VariableManager.getLocalVariable("INTELLILABEL"),
	INT_SER: cdt.VariableManager.getLocalVariable("INTELLILABEL_CMP3"),
	OPERATOR: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	ISTATUS: "Issued"
        }
    };
    
    

        msg.til_Update_Intellilabel_SHIP = function() {
        return {
        	RGRhs1: "",
	MSGID: "til_Update_Intellilabel",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	SAL_ORD: "SO10033",
	SHIPPER: "00000120",
	SAL_ORDL: "2",
	OPERATOR: cdt.VariableManager.getGlobalVariable("USERID"),
	INT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	ISTATUS: "Built"
        }
    };
    
    

        msg.til_Update_Intellilabel_VERIFY = function() {
        return {
        	RGRhs1: "",
	MSGID: "til_Update_Intellilabel",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	SHIPPER: "00000120",
	INT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	OPERATOR: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: "SO10033",
	SAL_ORDL: "2",
	ISTATUS: "Shipped"
        }
    };
    
    

        msg.til_Update_LotSerial = function() {
        return {
        	MSGID: "til_Update_LotSerial",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	COMPANY: cdt.VariableManager.getLocalVariable("COMPANY"),
	COPIES: cdt.VariableManager.getLocalVariable("COPIES"),
	OPERATOR: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	FORMAT: cdt.VariableManager.getLocalVariable("FORMAT"),
	QUEUE: cdt.VariableManager.getLocalVariable("QUEUE"),
	PART: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT: "",
	MHU: cdt.VariableManager.getLocalVariable("MHU"),
	QTY_1: "0",
	UOM_1: cdt.VariableManager.getLocalVariable("UOM_1"),
	INT_STAT: cdt.VariableManager.getLocalVariable("INT_STAT"),
	INT_SER: cdt.VariableManager.getLocalVariable("INT_SER"),
	INT_ACTION: cdt.VariableManager.getLocalVariable("INT_ACTION"),
	INT_MASTER: cdt.VariableManager.getLocalVariable("INT_MASTER"),
	INT_PRINT: cdt.VariableManager.getLocalVariable("INT_PRINT"),
	DESP_NOTE: cdt.VariableManager.getLocalVariable("DESP_NOTE"),
	IN_PROCESS: cdt.VariableManager.getLocalVariable("IN_PROCESS"),
	JOB: cdt.VariableManager.getLocalVariable("JOB"),
	RGRhs1: "",
	QTY: "0"
        }
    };
    
    

        msg.TRANSACTION = function() {
        return {
        	MSGID: "",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	RGRhs1: ""
        }
    };
    
    

        msg.TRNMNT = function() {
        return {
        	MSGID: "TRNMNT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RGRhs1: "",
	TABLE: cdt.VariableManager.getLocalVariable("TABLE"),
	IDX_FLD_NM: cdt.VariableManager.getLocalVariable("IDX_FLD_NM"),
	IDX_FLD_VL: cdt.VariableManager.getLocalVariable("IDX_FLD_VL"),
	TRN_DAT_ITM: cdt.VariableManager.getLocalVariable("TRN_DAT_ITM"),
	TRN_DAT_VAL: cdt.VariableManager.getLocalVariable("TRN_DAT_VAL"),
	DOMAIN: cdt.VariableManager.getLocalVariable("DOMAIN")
        }
    };
    
    

        msg.UISEND = function() {
        return {
        	MSGID: "UISEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	ORDERLINE: cdt.VariableManager.getLocalVariable("ORDERLINE"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	ADDR: cdt.VariableManager.getLocalVariable("ADDR"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	DR_ACTNUM: cdt.VariableManager.getLocalVariable("DR_ACTNUM"),
	CST_CTR: cdt.VariableManager.getLocalVariable("CST_CTR"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.UISSTR = function() {
        return {
        	MSGID: "UISSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.URCEND = function() {
        return {
        	MSGID: "URCEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ORDERNBR: cdt.VariableManager.getLocalVariable("ORDERNBR"),
	ORDERLINE: cdt.VariableManager.getLocalVariable("ORDERLINE"),
	SO_JOB: cdt.VariableManager.getLocalVariable("SO_JOB"),
	ADDR: cdt.VariableManager.getLocalVariable("ADDR"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	ACTNUM: cdt.VariableManager.getLocalVariable("ACTNUM"),
	CST_CTR: cdt.VariableManager.getLocalVariable("CST_CTR"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.URCSTR = function() {
        return {
        	MSGID: "URCSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.v_TMS_MY_TASKS = function() {
        return {
        	MSGID: "v_TMS_MY_TASKS",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID")
        }
    };
    
    

        msg.v_TMSFindReplenishment = function() {
        return {
        	MSGID: "v_TMSFindReplenishment",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	REGION1: cdt.VariableManager.getLocalVariable("REGION1"),
	REGION2: cdt.VariableManager.getLocalVariable("REGION2"),
	WHS: cdt.VariableManager.getGlobalVariable("TMS_WAREHOUSE"),
	COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TMS_BIN"),
	NUM_UNITS: cdt.VariableManager.getLocalVariable("NUM_UNITS"),
	URGENCY: cdt.VariableManager.getLocalVariable("URGENCY"),
	TASKTYPE1: cdt.VariableManager.getLocalVariable("TASKTYPE1"),
	TASKTYPE2: cdt.VariableManager.getLocalVariable("TASKTYPE2"),
	TMS_ZONE: cdt.VariableManager.getLocalVariable("TMS_ZONE"),
	TMS_PICKING_BIN: cdt.VariableManager.getLocalVariable("TMS_PICKING_BIN"),
	BULK: cdt.VariableManager.getLocalVariable("BULK")
        }
    };
    
    

        msg.v_TMSGetCountingTask = function() {
        return {
        	MSGID: "v_TMSGetTaskDetails",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_TASK_ID: cdt.VariableManager.getLocalVariable("TMS_TASK_ID")
        }
    };
    
    

        msg.v_TMSGetCurrentTask = function() {
        return {
        	MSGID: "v_TMSGetCurrentTask",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getGlobalVariable("TMS_USER_ID")
        }
    };
    
    

        msg.v_TMSGetPickingTask = function() {
        return {
        	MSGID: "v_TMSGetTaskDetails",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_TASK_ID: cdt.VariableManager.getLocalVariable("TMS_TASK_ID")
        }
    };
    
    

        msg.v_TMSGetTaskDetails = function() {
        return {
        	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_TASK_ID: cdt.VariableManager.getLocalVariable("TMS_TASK_ID"),
	MSGID: "v_TMSGetTaskDetails",
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE"),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID")
        }
    };
    
    

        msg.v_TMSGetTaskForBin = function() {
        return {
        	MSGID: "v_TMSGetTaskforBinInXML",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_BIN: cdt.VariableManager.getLocalVariable("TMS_BIN"),
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE"),
	TMS_TASK_TYPE2: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE2")
        }
    };
    
    

        msg.v_TMSGetTaskforBinInXML = function() {
        return {
        	MSGID: "v_TMSGetTaskforBinInXML",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_BIN: cdt.VariableManager.getLocalVariable("TMS_BIN"),
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE"),
	TMS_TASK_TYPE2: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE2")
        }
    };
    
    

        msg.v_TMSGetTaskforIlabel = function() {
        return {
        	MSGID: "v_TMSGetTaskforSerial",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getGlobalVariable("TMS_USER_ID"),
	TMS_SERIAL: cdt.VariableManager.getLocalVariable("ILABEL")
        }
    };
    
    

        msg.v_TMSGetTaskforSerial = function() {
        return {
        	MSGID: "v_TMSGetTaskforSerial",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getGlobalVariable("TMS_USER_ID"),
	TMS_SERIAL: cdt.VariableManager.getLocalVariable("TMS_SERIAL")
        }
    };
    
    

        msg.v_TMSGetTaskType = function() {
        return {
        	MSGID: "v_TMSGetTaskType",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE")
        }
    };
    
    

        msg.v_TMSNumberTasksAssigned = function() {
        return {
        	MSGID: "v_TMUser",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID")
        }
    };
    
    

        msg.v_TMSNumTask = function() {
        return {
        	MSGID: "v_TMSNumTask",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_REGION: cdt.VariableManager.getGlobalVariable("TMS_REGION"),
	TMS_WAREHOUSE: cdt.VariableManager.getGlobalVariable("TMS_WAREHOUSE"),
	TMS_COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY")
        }
    };
    
    

        msg.v_TMSPassBin = function() {
        return {
        	MSGID: "v_TMSPassBin",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_REGION: cdt.VariableManager.getLocalVariable("TMS_REGION"),
	TMS_WAREHOUSE: cdt.VariableManager.getGlobalVariable("SITE"),
	TMS_COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY"),
	TMS_BIN_ID: cdt.VariableManager.getLocalVariable("TMS_BIN")
        }
    };
    
    

        msg.v_TMSReason = function() {
        return {
        	MSGID: "v_TMSReason",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_REASON: cdt.VariableManager.getLocalVariable("TMS_REASON"),
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE")
        }
    };
    
    

        msg.v_TMSTask = function() {
        return {
        	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_TASK_ID: cdt.VariableManager.getLocalVariable("TMS_TASK_ID"),
	MSGID: "v_TMSTask",
	TMS_TASK_TYPE: cdt.VariableManager.getLocalVariable("TMS_TASK_TYPE")
        }
    };
    
    

        msg.v_TMSUser = function() {
        return {
        	MSGID: "v_TMSUser",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID")
        }
    };
    
    

        msg.v_TMSUserRegion = function() {
        return {
        	MSGID: "v_TMSUserRegion",
	DT: new Date().toISOString(),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_USER_ID: cdt.VariableManager.getLocalVariable("TMS_USER_ID"),
	TMS_REGION: cdt.VariableManager.getLocalVariable("TMS_REGION"),
	TMS_WAREHOUSE: cdt.VariableManager.getLocalVariable("TMS_WAREHOUSE"),
	TMS_COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY")
        }
    };
    
    

        msg.v_TMSWarehouse = function() {
        return {
        	MSGID: "v_TMSWarehouse",
	DT: new Date().toISOString(),
	TMS_WAREHOUSE: cdt.VariableManager.getLocalVariable("TMS_WAREHOUSE"),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	TMS_COMPANY: cdt.VariableManager.getGlobalVariable("TMS_COMPANY")
        }
    };
    
    

        msg.VALIDATION = function() {
        return {
        	MSGID: "",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString()
        }
    };
    
    

        msg.VARBFL = function() {
        return {
        	MSGID: "VARBFL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VBKFSH = function() {
        return {
        	MSGID: "VBKFSH",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	ROUTING: cdt.VariableManager.getLocalVariable("ROUTING"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VBOMCD = function() {
        return {
        	MSGID: "VBOMCD",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	BOM_CODE: cdt.VariableManager.getLocalVariable("BOM_CODE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VCDRSN = function() {
        return {
        	MSGID: "VCDRSN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RSN_CODE: cdt.VariableManager.getLocalVariable("RSN_CODE"),
	TRX_CODE: cdt.VariableManager.getLocalVariable("TRX_CODE"),
	TRX_TYPE: cdt.VariableManager.getLocalVariable("TRX_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VCIBOM = function() {
        return {
        	MSGID: "VCIBOM",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	COMP_ITM: cdt.VariableManager.getLocalVariable("COMP_ITM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VCLKNO = function() {
        return {
        	MSGID: "VCLKNO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	DATE: cdt.VariableManager.getLocalVariable("DATE"),
	TIME: cdt.VariableManager.getLocalVariable("TIME"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VCNTNE = function() {
        return {
        	MSGID: "VCNTNE",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VCPITM = function() {
        return {
        	MSGID: "VCPITM",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	COMP_ITM: cdt.VariableManager.getLocalVariable("COMP_ITM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VCYTOL = function() {
        return {
        	MSGID: "VCYTOL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDATE = function() {
        return {
        	MSGID: "VDATE",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	DATE: cdt.VariableManager.getLocalVariable("DATE")
        }
    };
    
    

        msg.VDMAIN = function() {
        return {
        	MSGID: "VDMAIN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDOMAN = function() {
        return {
        	MSGID: "VDOMAN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDOQIT = function() {
        return {
        	MSGID: "VDOQIT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSDIT = function() {
        return {
        	MSGID: "VDSDIT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSDMP = function() {
        return {
        	MSGID: "VDSDMP",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	ORDERNBR: cdt.VariableManager.getLocalVariable("ORDERNBR"),
	ORDERNBR1: cdt.VariableManager.getLocalVariable("ORDERNBR1"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SITE1: cdt.VariableManager.getLocalVariable("SITE1"),
	FR_SITE: cdt.VariableManager.getLocalVariable("FR_SITE"),
	FR_SITE1: cdt.VariableManager.getLocalVariable("FR_SITE1"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	REQ_NUM1: cdt.VariableManager.getLocalVariable("REQ_NUM1"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	ITEM1: cdt.VariableManager.getLocalVariable("ITEM1"),
	SHP_DATE: cdt.VariableManager.getLocalVariable("SHP_DATE"),
	SHP_DATE1: cdt.VariableManager.getLocalVariable("SHP_DATE1"),
	DUE_DATE: cdt.VariableManager.getLocalVariable("DUE_DATE"),
	DUE_DATE1: cdt.VariableManager.getLocalVariable("DUE_DATE1"),
	PROJECT: cdt.VariableManager.getLocalVariable("PROJECT"),
	DOMAIN: cdt.VariableManager.getLocalVariable("Gvr.DOMAIN")
        }
    };
    
    

        msg.VDSDNO = function() {
        return {
        	MSGID: "VDSDNO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSDOI = function() {
        return {
        	MSGID: "VDSDOI",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSDQT = function() {
        return {
        	MSGID: "VDSDQT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSDRQ = function() {
        return {
        	MSGID: "VDSDRQ",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSDRT = function() {
        return {
        	MSGID: "VDSDRT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSDSS = function() {
        return {
        	MSGID: "VDSDSS",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DIST_ORD: cdt.VariableManager.getLocalVariable("DIST_ORD"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSRNW = function() {
        return {
        	MSGID: "VDSRNW",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VDSRRQ = function() {
        return {
        	MSGID: "VDSRRQ",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	REQ_NUM: cdt.VariableManager.getLocalVariable("REQ_NUM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VEMPLY = function() {
        return {
        	MSGID: "VEMPLY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	EMPLOYEE: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VEMPNO = function() {
        return {
        	MSGID: "VEMPNO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CLK_NBR: cdt.VariableManager.getLocalVariable("CLK_NBR"),
	CLK_DATE: cdt.VariableManager.getLocalVariable("CLK_DATE"),
	CLK_TIME: cdt.VariableManager.getLocalVariable("CLK_TIME"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VGETIL = function() {
        return {
        	MSGID: "VGETIL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	TYPE: cdt.VariableManager.getLocalVariable("TYPE"),
	IL_STATUS: cdt.VariableManager.getLocalVariable("IL_STATUS"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	OPER: cdt.VariableManager.getLocalVariable("OPER"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	SO_PO: cdt.VariableManager.getLocalVariable("SO_PO"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	SSCC: cdt.VariableManager.getLocalVariable("SSCC"),
	RFID: cdt.VariableManager.getLocalVariable("RFID"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE")
        }
    };
    
    

        msg.VGETIL_HONDA_CONT = function() {
        return {
        	MSGID: "VGETIL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	TYPE: cdt.VariableManager.getLocalVariable("TYPE"),
	IL_STATUS: cdt.VariableManager.getLocalVariable("IL_STATUS"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	ITEM: "C690",
	OPER: cdt.VariableManager.getLocalVariable("OPER"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	SO_PO: cdt.VariableManager.getLocalVariable("SO_PO"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	SSCC: cdt.VariableManager.getLocalVariable("SSCC"),
	RFID: cdt.VariableManager.getLocalVariable("RFID"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE")
        }
    };
    
    

        msg.VGETIL_HONDA_PALLET = function() {
        return {
        	MSGID: "VGETIL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	TYPE: cdt.VariableManager.getLocalVariable("TYPE"),
	IL_STATUS: cdt.VariableManager.getLocalVariable("IL_STATUS"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	ITEM: "PALLET",
	OPER: cdt.VariableManager.getLocalVariable("OPER"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	SO_PO: cdt.VariableManager.getLocalVariable("SO_PO"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	SSCC: cdt.VariableManager.getLocalVariable("SSCC"),
	RFID: cdt.VariableManager.getLocalVariable("RFID"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE")
        }
    };
    
    

        msg.VGLACC = function() {
        return {
        	MSGID: "VGLACC",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ACTNUM: cdt.VariableManager.getLocalVariable("ACTNUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VGLCC = function() {
        return {
        	MSGID: "VGLCC",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ACTNUM: cdt.VariableManager.getLocalVariable("ACTNUM"),
	CST_CTR: cdt.VariableManager.getLocalVariable("CST_CTR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VILABEL = function() {
        return {
        	MSGID: "",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ILABEL: cdt.VariableManager.getLocalVariable("ILABEL"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VILASX = function() {
        return {
        	MSGID: "VILASX",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	TO_STATUS: cdt.VariableManager.getLocalVariable("TO_STATUS"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	PCKD_ITEM: cdt.VariableManager.getLocalVariable("PCKD_ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VILBLE = function() {
        return {
        	MSGID: "VILBLE",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	TO_STATUS: cdt.VariableManager.getLocalVariable("TO_STATUS"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	PCKD_ITEM: cdt.VariableManager.getLocalVariable("PCKD_ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VILBLX = function() {
        return {
        	MSGID: "VILBLX",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	TO_STATUS: cdt.VariableManager.getLocalVariable("TO_STATUS"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	PCKD_ITEM: cdt.VariableManager.getLocalVariable("PCKD_ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM")
        }
    };
    
    

        msg.VILMDR = function() {
        return {
        	MSGID: "VILMDR",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	MMILBLSR: cdt.VariableManager.getLocalVariable("MMILBLSR"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VILMST = function() {
        return {
        	MSGID: "VILMST",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	MMILBLSR: cdt.VariableManager.getLocalVariable("MMILBLSR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VILQTY = function() {
        return {
        	MSGID: "VILQTY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	INT_ID: cdt.VariableManager.getLocalVariable("INT_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VILSER = function() {
        return {
        	MSGID: "VILSER",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	TO_LOT_SER: cdt.VariableManager.getLocalVariable("TO_LOT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VINTLI = function() {
        return {
        	MSGID: "VINTLI",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	TO_STATUS: cdt.VariableManager.getLocalVariable("TO_STATUS"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	PCKD_ITEM: cdt.VariableManager.getLocalVariable("PCKD_ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VISSTS = function() {
        return {
        	MSGID: "VISSTS",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	STATUS: cdt.VariableManager.getLocalVariable("STATUS"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VITEM = function() {
        return {
        	MSGID: "VITEM",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: "Grv.USERID",
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VITMSO = function() {
        return {
        	MSGID: "VITMSO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	PART: cdt.VariableManager.getLocalVariable("ITEM")
        }
    };
    
    

        msg.VITMSP = function() {
        return {
        	MSGID: "VITMSP",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VKBCRD = function() {
        return {
        	MSGID: "VKBCRD",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	KANBANID: cdt.VariableManager.getLocalVariable("KANBANID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VLDDET = function() {
        return {
        	MSGID: "VLDDET",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VLLSCO = function() {
        return {
        	MSGID: "VLLSCO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	TRX_ID: cdt.VariableManager.getLocalVariable("TRX_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VLOCLT = function() {
        return {
        	MSGID: "VLOCLT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VLOCNO = function() {
        return {
        	MSGID: "VLOCNO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VLOCNX = function() {
        return {
        	MSGID: "VLOCNX",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	RT_STAT: cdt.VariableManager.getLocalVariable("RT_STAT")
        }
    };
    
    

        msg.VLOGON = function() {
        return {
        	MSGID: "VLOGON",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWD: cdt.VariableManager.getGlobalVariable("PASSWD")
        }
    };
    
    

        msg.VLOT = function() {
        return {
        	MSGID: "",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER")
        }
    };
    
    

        msg.VLSQTY = function() {
        return {
        	MSGID: "VLSQTY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VLTMST = function() {
        return {
        	MSGID: "VLTMST",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VMAQTY = function() {
        return {
        	MSGID: "VMAQTY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VMSDET = function() {
        return {
        	MSGID: "VMSDET",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	CONT_SER_DETAIL: cdt.VariableManager.getLocalVariable("CONT_SER_DETAIL"),
	CONT_SER_MASTER: cdt.VariableManager.getLocalVariable("CONT_SER_MASTER"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER")
        }
    };
    
    

        msg.VNXTJB = function() {
        return {
        	MSGID: "VNXTJB",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	DATE: cdt.VariableManager.getLocalVariable("DATE"),
	TIME: cdt.VariableManager.getLocalVariable("TIME"),
	CLK_NBR: cdt.VariableManager.getLocalVariable("CLK_NBR"),
	LAST_OP: cdt.VariableManager.getLocalVariable("LAST_OP"),
	LAST_WO: cdt.VariableManager.getLocalVariable("LAST_WO"),
	TRX_TIME: cdt.VariableManager.getLocalVariable("TRX_TIME")
        }
    };
    
    

        msg.VOPRTN = function() {
        return {
        	MSGID: "VOPRTN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ROUTING: cdt.VariableManager.getLocalVariable("ROUTING"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VORDER = function() {
        return {
        	MSGID: "VORDER",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPART = function() {
        return {
        	MSGID: "VPART",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: "Grv.USERID",
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPARTN = function() {
        return {
        	MSGID: "VPARTN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPARTX = function() {
        return {
        	MSGID: "VPARTX",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPKLST = function() {
        return {
        	MSGID: "VPKLST",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	PICK_NUM: cdt.VariableManager.getLocalVariable("PICK_NUM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE")
        }
    };
    
    

        msg.VPOITM = function() {
        return {
        	MSGID: "VPOITM",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPOITQ = function() {
        return {
        	MSGID: "VPOITQ",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	PO_LINE: cdt.VariableManager.getLocalVariable("PO_LINE"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPOLIN = function() {
        return {
        	MSGID: "VPOLIN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPONBR = function() {
        return {
        	MSGID: "VPONBR",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PO: cdt.VariableManager.getLocalVariable("PO"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPRDLN = function() {
        return {
        	MSGID: "VPRDLN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SITE: cdt.VariableManager.getLocalVariable("SITE")
        }
    };
    
    

        msg.VPSHPR = function() {
        return {
        	MSGID: "VPSHPR",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPSITM = function() {
        return {
        	MSGID: "VPSITM",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VPSQTY = function() {
        return {
        	MSGID: "VPSQTY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VRAN = function() {
        return {
        	MSGID: "VRAN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	RAN_KAN: cdt.VariableManager.getLocalVariable("RAN_KAN"),
	REL_ID: cdt.VariableManager.getLocalVariable("REL_ID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VRANF = function() {
        return {
        	MSGID: "VRANF",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	SAL_ORDL: cdt.VariableManager.getLocalVariable("SAL_ORDL"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	TYPE: cdt.VariableManager.getLocalVariable("TYPE")
        }
    };
    
    

        msg.VREFX = function() {
        return {
        	MSGID: "VREFX",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOT: cdt.VariableManager.getLocalVariable("LOT"),
	LOC: cdt.VariableManager.getLocalVariable("LOC")
        }
    };
    
    

        msg.VREPLN = function() {
        return {
        	MSGID: "VREPLN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LINE: cdt.VariableManager.getLocalVariable("LINE"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VRMAIT = function() {
        return {
        	MSGID: "VRMAIT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VRMANO = function() {
        return {
        	MSGID: "VRMANO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VRMASN = function() {
        return {
        	MSGID: "VRMASN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VRMRIT = function() {
        return {
        	MSGID: "VRMRIT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	RMA_NUM: cdt.VariableManager.getLocalVariable("RMA_NUM"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VROUTE = function() {
        return {
        	MSGID: "VROUTE",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	ROUTING: cdt.VariableManager.getLocalVariable("ROUTING"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VRPART = function() {
        return {
        	MSGID: "VRPART",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSCALX = function() {
        return {
        	MSGID: "VSCALX",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SCALE_NAME: cdt.VariableManager.getLocalVariable("SCALE_NAME")
        }
    };
    
    

        msg.VSCRTY = function() {
        return {
        	MSGID: "VSCRTY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	PASSWD: cdt.VariableManager.getGlobalVariable("PASSWD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSENEE = function() {
        return {
        	MSGID: "VSENEE",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSENUE = function() {
        return {
        	MSGID: "VSENUE",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	TRX_TYPE: cdt.VariableManager.getLocalVariable("TRX_TYPE"),
	COMP_ITM: cdt.VariableManager.getLocalVariable("COMP_ITM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSER = function() {
        return {
        	MSGID: "VSER",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSERNE = function() {
        return {
        	MSGID: "VSERNE",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSETRN = function() {
        return {
        	MSGID: "VSETRN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SETRUN: cdt.VariableManager.getLocalVariable("SETRUN"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSFQTY = function() {
        return {
        	MSGID: "VSFQTY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	RJCT_QTY: cdt.VariableManager.getLocalVariable("RJCT_QTY"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSHCMP = function() {
        return {
        	MSGID: "VSHCMP",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSHPID = function() {
        return {
        	MSGID: "VSHPID",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SUPPLIER: cdt.VariableManager.getLocalVariable("SUPPLIER"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSHPPR = function() {
        return {
        	MSGID: "VSHPPR",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSHPST = function() {
        return {
        	MSGID: "VSHPST",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSHPTO = function() {
        return {
        	MSGID: "VSHPTO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_TO: cdt.VariableManager.getLocalVariable("SHIP_TO"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSITEN = function() {
        return {
        	MSGID: "VSITEN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSOITM = function() {
        return {
        	MSGID: "VSOITM",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSOLIN = function() {
        return {
        	MSGID: "VSOLIN",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	ORDERLINE: cdt.VariableManager.getLocalVariable("ORDERLINE"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSONMA = function() {
        return {
        	MSGID: "VSONMA",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSOQTY = function() {
        return {
        	MSGID: "VSOQTY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	OVERSHIP: cdt.VariableManager.getLocalVariable("OVERSHIP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD")
        }
    };
    
    

        msg.VSORDR = function() {
        return {
        	MSGID: "VSORDR",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSOREL = function() {
        return {
        	MSGID: "VSOREL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSOSTE = function() {
        return {
        	MSGID: "VSOSTE",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSSMDL = function() {
        return {
        	MSGID: "VSSMDL",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SHIP_FROM: cdt.VariableManager.getLocalVariable("SHIP_FROM"),
	SHIPPER: cdt.VariableManager.getLocalVariable("SHIPPER"),
	PCK_SHP: cdt.VariableManager.getLocalVariable("PCK_SHP"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VSUPLR = function() {
        return {
        	MSGID: "VSUPLR",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SUPPLIER: cdt.VariableManager.getLocalVariable("SUPPLIER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VTAGNO = function() {
        return {
        	MSGID: "VTAGNO",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	TAG: cdt.VariableManager.getLocalVariable("TAG"),
	CNT_FLAG: cdt.VariableManager.getLocalVariable("CNT_FLAG"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VTOLOC = function() {
        return {
        	MSGID: "VTOLOC",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VTRSPT = function() {
        return {
        	MSGID: "VTRSPT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	TRANSPORT: cdt.VariableManager.getLocalVariable("TRANSPORT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VTSTAT = function() {
        return {
        	MSGID: "VTSTAT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	TRAN_TYPE: cdt.VariableManager.getLocalVariable("TRAN_TYPE"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	TO_SITE: cdt.VariableManager.getLocalVariable("TO_SITE"),
	TO_LOC: cdt.VariableManager.getLocalVariable("TO_LOC"),
	TO_LOT_SER: cdt.VariableManager.getLocalVariable("TO_LOT_SER"),
	TO_REF: cdt.VariableManager.getLocalVariable("TO_REF"),
	CYC_TOLER: cdt.VariableManager.getLocalVariable("CYC_TOLER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VUSRID = function() {
        return {
        	MSGID: "VUSRID",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID")
        }
    };
    
    

        msg.VWCNTR = function() {
        return {
        	MSGID: "VWCNTR",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR")
        }
    };
    
    

        msg.VWIPLT = function() {
        return {
        	MSGID: "VWIPLT",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getLocalVariable("USERID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	OPER: cdt.VariableManager.getLocalVariable("OPER")
        }
    };
    
    

        msg.VWKCTR = function() {
        return {
        	MSGID: "VWKCTR",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	WRK_CNTR: cdt.VariableManager.getLocalVariable("WRK_CNTR"),
	MACHINE: cdt.VariableManager.getLocalVariable("MACHINE")
        }
    };
    
    

        msg.VWOITM = function() {
        return {
        	MSGID: "VWOITM",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VWOQTY = function() {
        return {
        	MSGID: "VWOQTY",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VWOST1 = function() {
        return {
        	MSGID: "VWOST1",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WO_TO_NUM: cdt.VariableManager.getLocalVariable("WO_TO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	WO_STAT: cdt.VariableManager.getLocalVariable("WO_STAT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VWOSTS = function() {
        return {
        	MSGID: "VWOSTS",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	WO_STAT: cdt.VariableManager.getLocalVariable("WO_STAT"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VWOTYP = function() {
        return {
        	MSGID: "VWOTYP",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_TYPE: cdt.VariableManager.getLocalVariable("WO_TYPE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VWRKID = function() {
        return {
        	MSGID: "VWRKID",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VWRKIX = function() {
        return {
        	MSGID: "VWRKIX",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.VWRKOP = function() {
        return {
        	MSGID: "VWRKOP",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOCEND = function() {
        return {
        	MSGID: "WOCEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	SHP_DATE: cdt.VariableManager.getLocalVariable("SHP_DATE"),
	SHIP_ALC: cdt.VariableManager.getLocalVariable("SHIP_ALC"),
	SHIP_PCK: cdt.VariableManager.getLocalVariable("SHIP_PCK"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOCSTR = function() {
        return {
        	MSGID: "WOCSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOISRC = function() {
        return {
        	MSGID: "WOISRC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	BACK_TYPE: cdt.VariableManager.getLocalVariable("BACK_TYPE"),
	CONT_SER: cdt.VariableManager.getLocalVariable("CONT_SER"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	WO_LOT: cdt.VariableManager.getLocalVariable("WOID"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION")
        }
    };
    
    

        msg.WOMRLP = function() {
        return {
        	MSGID: "WOMRLP",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WO_TO_NUM: cdt.VariableManager.getLocalVariable("WO_TO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	CLK_MTHD: cdt.VariableManager.getLocalVariable("CLK_MTHD"),
	BATCH: cdt.VariableManager.getLocalVariable("BATCH"),
	BATCH_TO: cdt.VariableManager.getLocalVariable("BATCH_TO"),
	REL_DATE: cdt.VariableManager.getLocalVariable("REL_DATE"),
	REL_DAT_TO: cdt.VariableManager.getLocalVariable("REL_DAT_TO"),
	FR_ITEM: cdt.VariableManager.getLocalVariable("FR_ITEM"),
	TO_ITEM: cdt.VariableManager.getLocalVariable("TO_ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	SITE_TO: cdt.VariableManager.getLocalVariable("SITE_TO"),
	BUYER: cdt.VariableManager.getLocalVariable("BUYER"),
	BUYER_TO: cdt.VariableManager.getLocalVariable("BUYER_TO"),
	WO_STAT: cdt.VariableManager.getLocalVariable("WO_STAT"),
	WO_TYPE: cdt.VariableManager.getLocalVariable("WO_TYPE"),
	PRT_PICK: cdt.VariableManager.getLocalVariable("PRT_PICK"),
	PRT_ROUT: cdt.VariableManager.getLocalVariable("PRT_ROUT"),
	PRT_COBY: cdt.VariableManager.getLocalVariable("PRT_COBY"),
	PRT_BARC: cdt.VariableManager.getLocalVariable("PRT_BARC"),
	MOV_FRST: cdt.VariableManager.getLocalVariable("MOV_FRST"),
	IN_PHANT: cdt.VariableManager.getLocalVariable("IN_PHANT"),
	IN_ZEROR: cdt.VariableManager.getLocalVariable("IN_ZEROR"),
	IN_ZEROO: cdt.VariableManager.getLocalVariable("IN_ZEROO"),
	RPRT_PCK: cdt.VariableManager.getLocalVariable("RPRT_PCK"),
	PRT_STCK: cdt.VariableManager.getLocalVariable("PRT_STCK"),
	PRT_CBFL: cdt.VariableManager.getLocalVariable("PRT_CBFL"),
	BATCH_ID: cdt.VariableManager.getLocalVariable("BATCH_ID"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	PRT_FLAG: cdt.VariableManager.getLocalVariable("PRT_FLAG"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOOBLD = function() {
        return {
        	MSGID: "WOOBLD",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	EMPLOYEE: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	REF: cdt.VariableManager.getLocalVariable("REF")
        }
    };
    
    

        msg.WOOEND = function() {
        return {
        	MSGID: "WOOEND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	OPERATION: cdt.VariableManager.getLocalVariable("OPERATION"),
	EMPLOYEE: cdt.VariableManager.getLocalVariable("EMPLOYEE"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY")
        }
    };
    
    

        msg.WOOSTR = function() {
        return {
        	MSGID: "WOOSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WORELP = function() {
        return {
        	MSGID: "WORELP",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	WO_STAT: cdt.VariableManager.getLocalVariable("WO_STAT"),
	PRT_PICK: cdt.VariableManager.getLocalVariable("PRT_PICK"),
	PRT_ROUT: cdt.VariableManager.getLocalVariable("PRT_ROUT"),
	PRT_COBY: cdt.VariableManager.getLocalVariable("PRT_COBY"),
	DELVR_TO: cdt.VariableManager.getLocalVariable("DELVR_TO"),
	PRT_BARC: cdt.VariableManager.getLocalVariable("PRT_BARC"),
	MOV_FRST: cdt.VariableManager.getLocalVariable("MOV_FRST"),
	IN_ZEROR: cdt.VariableManager.getLocalVariable("IN_ZEROR"),
	IN_ZEROO: cdt.VariableManager.getLocalVariable("IN_ZEROO"),
	RPRT_PCK: cdt.VariableManager.getLocalVariable("RPRT_PCK"),
	PRT_STCK: cdt.VariableManager.getLocalVariable("PRT_STCK"),
	PRT_CBFL: cdt.VariableManager.getLocalVariable("PRT_CBFL"),
	BATCH_ID: cdt.VariableManager.getLocalVariable("BATCH_ID"),
	LABEL_QTY: cdt.VariableManager.getLocalVariable("LABEL_QTY"),
	PRT_FLAG: cdt.VariableManager.getLocalVariable("PRT_FLAG"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOREND = function() {
        return {
        	MSGID: "WOREND",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	REMARKS: cdt.VariableManager.getLocalVariable("REMARKS"),
	EFF_DATE: cdt.VariableManager.getLocalVariable("EFF_DATE"),
	CLOSE: cdt.VariableManager.getLocalVariable("CLOSE"),
	EXP_DATE: cdt.VariableManager.getLocalVariable("EXP_DATE"),
	ACTIVE: cdt.VariableManager.getLocalVariable("ACTIVE"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	RJCT_QTY: cdt.VariableManager.getLocalVariable("RJCT_QTY")
        }
    };
    
    

        msg.WORSTR = function() {
        return {
        	MSGID: "WORSTR",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOWOIS = function() {
        return {
        	MSGID: "WOWOIS",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOWOMT = function() {
        return {
        	MSGID: "WOWOMT",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	WO_TYPE: cdt.VariableManager.getLocalVariable("WO_TYPE"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	ORD_DATE: cdt.VariableManager.getLocalVariable("ORD_DATE"),
	REL_DATE: cdt.VariableManager.getLocalVariable("REL_DATE"),
	DUE_DT: cdt.VariableManager.getLocalVariable("DUE_DT"),
	WO_STAT: cdt.VariableManager.getLocalVariable("WO_STAT"),
	SAL_ORD: cdt.VariableManager.getLocalVariable("SAL_ORD"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOWORC = function() {
        return {
        	MSGID: "WOWORC",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	LOC: cdt.VariableManager.getLocalVariable("LOC"),
	LOT_SER: cdt.VariableManager.getLocalVariable("LOT_SER"),
	REF: cdt.VariableManager.getLocalVariable("REF"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOWSIQ = function() {
        return {
        	MSGID: "WOWSIQ",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WOID: cdt.VariableManager.getLocalVariable("WOID"),
	ITEM: cdt.VariableManager.getLocalVariable("ITEM"),
	ISS_DATE: cdt.VariableManager.getLocalVariable("ISS_DATE"),
	TXT_PTR: cdt.VariableManager.getLocalVariable("TXT_PTR"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN")
        }
    };
    
    

        msg.WOWWIP = function() {
        return {
        	MSGID: "WOWWIP",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	WO_NUM: cdt.VariableManager.getLocalVariable("WO_NUM"),
	DOMAIN: cdt.VariableManager.getGlobalVariable("DOMAIN"),
	WIPLOT: cdt.VariableManager.getLocalVariable("WIPLOT"),
	RGRhs1: ""
        }
    };
    
    
