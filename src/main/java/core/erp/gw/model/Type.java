package core.erp.gw.model;

public class Type {

	private String code;	
	private String name;	
	private String note;	
	
	public Type(String code, String name, String note) {
		this.name = name;
		this.code = code;
		this.note = note;
	}
	
	public String getCode() {
		return this.code;
	}
	
	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
}