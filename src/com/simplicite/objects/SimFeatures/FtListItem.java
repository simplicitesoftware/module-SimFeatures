package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object FtListItem
 */
public class FtListItem extends ObjectDB {
    private static final long serialVersionUID = 1L;

	@Override
	public String preReorder(String field, Map<String, long[]> orders)
	{
		for (long[] o : orders.values())
			if (o[1]==0)
				return Message.formatSimpleError("Order 0 reserved");
		return null;
	}

	@Override
	public void postReorder(String field, Map<String, long[]> orders, long shifted)
	{
		AppLog.info("postReorder " + field + " moved=" + orders.size() + " shifted=" + shifted, getGrant());
	}
}
