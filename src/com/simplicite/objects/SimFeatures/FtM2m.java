package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object FtM2m
 */
public class FtM2m extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public String postCreate() {
		String s = getGrant().getRefObject("FtM2mChild").getSelectedIds().toString();
		AppLog.info("---"+s, Grant.getSystemAdmin());
		return null;
	}
}