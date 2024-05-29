package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object FtRxmLink
 */
public class FtRxmLink extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public List<String> preValidate() {
		// ensure the tupple {A,B} is the same as {B,A}
		orderKeys(); 
		return super.preValidate();
	}
	
	private void orderKeys(){
		String c1 = getFieldValue("ftRxlRxm1.ftRxmCode");
		String c2 = getFieldValue("ftRxlRxm2.ftRxmCode");
		if(c1.compareTo(c2)>0){
			setFieldValue("ftRxlRxm1.ftRxmCode", c2);
			setFieldValue("ftRxlRxm2.ftRxmCode", c1);
			completeForeignKeys();
		}
	}
}