package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.Message;
import com.simplicite.util.ObjectDB;
import com.simplicite.util.tools.HTMLToPDFTool;

public class FtPublications extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public String preSave() {
		try {
			if(!getField("ftPubHtml").isEmpty())
				getField("ftPubFile").setDocument(
					this,
					getFieldValue("ftPubCode")+".pdf",
					HTMLToPDFTool.toPDF(getFieldValue("ftPubHtml"))
				);
			return null;
		} catch(Exception e) {
			return Message.formatSimpleError(e);
		}
	}
}
