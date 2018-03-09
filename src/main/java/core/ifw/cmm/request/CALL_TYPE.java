package core.ifw.cmm.request;

public enum CALL_TYPE {
    MIPLATFORM, XPLATFORM, NEXACRO, JSP;
    
	public String toString() {
		String type = "";

		switch (this) {
		case MIPLATFORM:
			type = "MIPLATFORM";
			break;
		case XPLATFORM:
			type = "XPLATFORM";
			break;
		case NEXACRO:
			type = "NEXACRO";
			break;
		case JSP:
			type = "JSP";
			break;
		default:
			type = "NEXACRO";
			break;
		}

		return type;
	}
}
