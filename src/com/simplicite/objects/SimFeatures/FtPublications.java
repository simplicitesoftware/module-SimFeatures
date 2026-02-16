package com.simplicite.objects.SimFeatures;

import com.simplicite.util.AppLog;
import com.simplicite.util.ObjectDB;
import com.simplicite.util.tools.HTMLToPDFTool;

/**
 * Business object FtPublications
 */
public class FtPublications extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public String preSave() {
		try {
			if (!getField("ftPubHtml").isEmpty())
				getField("ftPubFile").setDocument(
					this,
					getFieldValue("ftPubCode") + ".pdf",
					HTMLToPDFTool.toPDF(getFieldValue("ftPubHtml"))
				);
		} catch (Exception e) {
			AppLog.error("Failed to save publication: " + getFieldValue("ftPubCode"), e);
		}
		return null;
	}
}
