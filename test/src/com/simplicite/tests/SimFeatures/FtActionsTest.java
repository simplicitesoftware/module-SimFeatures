package com.simplicite.tests.SimFeatures;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.simplicite.objects.SimFeatures.FtActions;
import com.simplicite.util.Action;
import com.simplicite.util.Grant;
import com.simplicite.util.ObjectField;

/**
 * Unit tests FtActionsTest
 */
public class FtActionsTest {

	private Grant getGrant() {
		return Grant.getSystemAdmin();
	} 

	@Test
	public void initActionTest() {
		FtActions actionDB = (FtActions) getGrant().getTmpObject("FtActions");
		Action action = actionDB.getAction("ActAskFields");
		actionDB.setFieldValue("ftActDate", "2026-01-01");
		
		actionDB.initAction(action);
		
		ObjectField date2 = action.getConfirmField("ftActDate2");
		assertEquals("2026-01-08", date2.getDefaultValue());
		assertFalse(date2.isRequired());
	}

	@Test
	public void confirmActionTest() {
		FtActions actionDB = (FtActions) getGrant().getTmpObject("FtActions");
		String msg = actionDB.confirmAction(null);
		assertTrue(msg.contains("confirmAction is done"));
	}
	
	@Test
	public void askActionTest() {
		FtActions actionDB = (FtActions) getGrant().getTmpObject("FtActions");
		Action action = actionDB.getAction("ActAskFields");
		
		action.getConfirmField("ftActDate2").setValue("2026-02-16");
		action.getConfirmField("ftActUserId").setValue("1");
		action.getConfirmField("ftActUserId.usr_last_name").setValue("Doe");

		String result = actionDB.askAction(action);
		assertNotNull(result);
		assertTrue(result.contains("askAction is done with confirmed values"));
		assertTrue(result.contains("date = 2026-02-16"));
		assertTrue(result.contains("user id = 1"));
	}
}
