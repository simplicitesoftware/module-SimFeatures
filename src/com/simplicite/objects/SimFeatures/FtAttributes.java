package com.simplicite.objects.SimFeatures;

import java.util.*;
import com.simplicite.util.*;
import com.simplicite.util.tools.*;

/**
 * Business object FtAttributes
 */
public class FtAttributes extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void initUpdate() {
		setFieldValue("ftAttrLongTextGridSource", getFieldValue("ftAttrLongTextGrid"));
	}
}