package com.simplicite.objects.SimFeatures;

import com.simplicite.util.*;
import com.simplicite.util.tools.*;

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
			
		}
		return null;
	}
}
