package com.simplicite.objects.SimFeatures;

import com.simplicite.util.AppLog;
import com.simplicite.util.Grant;
import com.simplicite.util.ObjectDB;

/**
 * Business object FtM2mChild
 */
public class FtM2mChild extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void postLoad() {
		AppLog.info("====" + getInstanceName(), Grant.getSystemAdmin());
	}
	
	@Override
	public void initRefSelect(ObjectDB parent) {
		AppLog.info("+++" + getInstanceName(), Grant.getSystemAdmin());
	}
}