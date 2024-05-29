package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object FtM2mChild
 */
public class FtM2mChild extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void postLoad() {
		AppLog.info("===="+getInstanceName(), Grant.getSystemAdmin());
	}
	
	@Override
	public void initRefSelect(ObjectDB parent) {
		AppLog.info("+++"+getInstanceName(), Grant.getSystemAdmin());
	}
}