package com.simplicite.objects.SimFeatures;

import com.simplicite.util.ObjectDB;

/**
 * Business object FtAttributes
 */
public class FtAttributes extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void initUpdate() {
		setFieldValue("ftAttrLongTextGridSource", getFieldValue("ftAttrLongTextGrid"));
	}
	
	@Override
	public String preSave() {
		// Preview HTML field
		setFieldValue("ftAttrHtmlReadOnly", getFieldValue("ftAttrHtml"));
		return super.preSave();
	}
}