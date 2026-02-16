package com.simplicite.objects.SimFeatures;

import com.simplicite.util.AppLog;
import com.simplicite.util.Grant;
import com.simplicite.util.ObjectDB;

/**
 * Business object FtM2m
 */
public class FtM2m extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public String postCreate() {
		String s = getGrant().getRefObject("FtM2mChild").getSelectedIds().toString();
		AppLog.info("---" + s, Grant.getSystemAdmin());
		return null;
	}
}